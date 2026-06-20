import { NextResponse } from "next/server";
import type { MetaCapiRequestBody } from "@/lib/analytics/capi-types";
import {
  isMetaCapiEventName,
  sanitizeMetaBrowserIdentifier,
  sanitizeMetaCustomData,
  sanitizeMetaEventId,
  sanitizeMetaEventSourceUrl,
} from "@/lib/analytics/meta-events";

const maxBodyBytes = 8_000;

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || undefined;

  return request.headers.get("x-real-ip") || request.headers.get("x-vercel-forwarded-for") || undefined;
}

function summarizeMetaError(payload: unknown) {
  if (!payload || typeof payload !== "object") return "Meta rechazó el evento.";

  const error = (payload as { error?: { message?: unknown } }).error;
  return typeof error?.message === "string" ? error.message.slice(0, 240) : "Meta rechazó el evento.";
}

function isAllowedEventSourceUrl(eventSourceUrl: string) {
  const hostname = new URL(eventSourceUrl).hostname;
  return hostname === "escalandolabs.com" || hostname === "www.escalandolabs.com";
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) {
    return NextResponse.json({ ok: false, error: "Solicitud demasiado grande." }, { status: 413 });
  }

  let body: Partial<MetaCapiRequestBody>;
  try {
    const rawBody = await request.text();
    if (rawBody.length > maxBodyBytes) {
      return NextResponse.json({ ok: false, error: "Solicitud demasiado grande." }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  const eventName = body.eventName;
  const eventId = sanitizeMetaEventId(body.eventId);
  const eventSourceUrl = sanitizeMetaEventSourceUrl(body.eventSourceUrl);

  if (!isMetaCapiEventName(eventName) || !eventId || !eventSourceUrl || !isAllowedEventSourceUrl(eventSourceUrl)) {
    return NextResponse.json({ ok: false, error: "Evento inválido." }, { status: 400 });
  }

  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const datasetId = process.env.META_CAPI_DATASET_ID;
  const graphVersion = /^v\d+\.\d+$/.test(process.env.META_CAPI_GRAPH_VERSION || "")
    ? process.env.META_CAPI_GRAPH_VERSION!
    : "v25.0";

  if (!accessToken || !datasetId) {
    console.error("[meta-capi] missing server configuration", { eventName, eventId });
    return NextResponse.json({ ok: false, eventId, eventName, error: "Configuración de medición incompleta." }, { status: 503 });
  }

  const clientIp = getClientIp(request);
  const clientUserAgent = request.headers.get("user-agent")?.slice(0, 500) || undefined;
  const fbp = sanitizeMetaBrowserIdentifier(body.fbp);
  const fbc = sanitizeMetaBrowserIdentifier(body.fbc);
  const customData = sanitizeMetaCustomData(body.customData);

  const userData = {
    ...(clientIp ? { client_ip_address: clientIp } : {}),
    ...(clientUserAgent ? { client_user_agent: clientUserAgent } : {}),
    ...(fbp ? { fbp } : {}),
    ...(fbc ? { fbc } : {}),
  };

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: eventSourceUrl,
        user_data: userData,
        ...(customData ? { custom_data: customData } : {}),
      },
    ],
    ...(process.env.META_CAPI_TEST_EVENT_CODE ? { test_event_code: process.env.META_CAPI_TEST_EVENT_CODE } : {}),
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${graphVersion}/${encodeURIComponent(datasetId)}/events?access_token=${encodeURIComponent(accessToken)}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    const responsePayload: unknown = await response.json().catch(() => undefined);
    if (!response.ok) {
      const error = summarizeMetaError(responsePayload);
      console.error("[meta-capi] rejected event", { eventName, eventId, metaStatus: response.status, error });
      return NextResponse.json({ ok: false, eventId, eventName, metaStatus: response.status, error: "Meta rechazó el evento." }, { status: 502 });
    }

    console.info("[meta-capi] sent event", { eventName, eventId, metaStatus: response.status });
    return NextResponse.json({ ok: true, eventId, eventName, metaStatus: response.status });
  } catch (error) {
    const message = error instanceof Error ? error.message.slice(0, 240) : "Error de red.";
    console.error("[meta-capi] request failed", { eventName, eventId, error: message });
    return NextResponse.json({ ok: false, eventId, eventName, error: "No se pudo enviar el evento." }, { status: 502 });
  }
}
