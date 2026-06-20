import { metaCapiEventNames, type MetaCapiEventName, type MetaCustomData } from "./capi-types";

const allowedCustomDataKeys = ["cta_text", "cta_location", "page_path", "content_name"] as const;

function sanitizeString(value: unknown, maxLength: number) {
  if (typeof value !== "string") return undefined;

  const sanitized = value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, maxLength);
  return sanitized || undefined;
}

export function isMetaCapiEventName(value: unknown): value is MetaCapiEventName {
  return typeof value === "string" && metaCapiEventNames.includes(value as MetaCapiEventName);
}

export function sanitizeMetaEventId(value: unknown) {
  return sanitizeString(value, 160);
}

export function sanitizeMetaBrowserIdentifier(value: unknown) {
  return sanitizeString(value, 220);
}

export function sanitizeMetaCustomData(value: unknown): MetaCustomData | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;

  const source = value as Record<string, unknown>;
  const customData: MetaCustomData = {};

  for (const key of allowedCustomDataKeys) {
    const sanitized = sanitizeString(source[key], 160);
    if (sanitized) customData[key] = sanitized;
  }

  return Object.keys(customData).length > 0 ? customData : undefined;
}

export function sanitizeMetaEventSourceUrl(value: unknown) {
  const sourceUrl = sanitizeString(value, 2000);
  if (!sourceUrl) return undefined;

  try {
    const url = new URL(sourceUrl);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    return url.toString();
  } catch {
    return undefined;
  }
}
