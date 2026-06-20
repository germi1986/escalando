"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { createMetaEventId, getMetaBrowserIdentifiers } from "@/lib/analytics/browser-identifiers";
import type { MetaCapiEventName, MetaCustomData } from "@/lib/analytics/capi-types";

const consentStorageKey = "escalando-marketing-consent";
const gaMeasurementId = "G-BM9L0QC9JL";
const gtmContainerId = "GTM-PP2TMSW5";
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
const clarityProjectId = "x9l0ixclu5";

type Consent = "accepted" | "rejected" | null;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    __escalandoMarketingConsent?: boolean;
  }
}

function readConsent(): Consent {
  const value = window.localStorage.getItem(consentStorageKey);
  return value === "accepted" || value === "rejected" ? value : null;
}

function marketingEventName(anchor: HTMLAnchorElement) {
  if (anchor.href.includes("wa.me")) return "whatsapp_click";
  if (anchor.pathname === "/demo") return "demo_view";
  return null;
}

function metaCapiEventForAnchor(anchor: HTMLAnchorElement): MetaCapiEventName | undefined {
  if (!anchor.href.includes("wa.me")) return undefined;

  const location = anchor.dataset.analyticsLocation || "";
  if (location === "final_cta" || location === "demo_final_cta" || location.startsWith("plan_")) {
    return "Lead";
  }

  return "Contact";
}

function sendMetaCapiEvent(eventName: MetaCapiEventName, customData: MetaCustomData) {
  const eventId = createMetaEventId();
  const { fbp, fbc } = getMetaBrowserIdentifiers();

  if (metaPixelId) {
    window.fbq?.("track", eventName, customData, { eventID: eventId });
  }

  void fetch("/api/meta/conversions", {
    method: "POST",
    credentials: "same-origin",
    keepalive: true,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventId,
      eventSourceUrl: window.location.href,
      ...(fbp ? { fbp } : {}),
      ...(fbc ? { fbc } : {}),
      customData,
    }),
  }).catch(() => undefined);
}

export default function MarketingAnalytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setConsent(readConsent()));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;

    window.__escalandoMarketingConsent = true;

    const trackClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a") : null;
      if (!(target instanceof HTMLAnchorElement)) return;

      const eventName = marketingEventName(target);
      if (!eventName) return;

      const parameters = {
        cta_text: target.textContent?.trim().slice(0, 100) || "sin texto",
        cta_location: target.dataset.analyticsLocation || window.location.pathname,
        page_path: window.location.pathname,
      };

      window.dataLayer?.push({ event: eventName, ...parameters });
      window.gtag?.("event", eventName, parameters);
      window.fbq?.("trackCustom", eventName, parameters);

      const capiEventName = metaCapiEventForAnchor(target);
      if (capiEventName) sendMetaCapiEvent(capiEventName, parameters);
    };

    const trackScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return;

      const depth = Math.round((window.scrollY / documentHeight) * 100);
      [25, 50, 75, 90].forEach((milestone) => {
        const key = `escalando-scroll-${milestone}-${window.location.pathname}`;
        if (depth < milestone || window.sessionStorage.getItem(key)) return;

        window.sessionStorage.setItem(key, "1");
        const parameters = { percent_scrolled: milestone, page_path: window.location.pathname };
        window.dataLayer?.push({ event: "scroll_depth", ...parameters });
        window.gtag?.("event", "scroll_depth", parameters);
        window.fbq?.("trackCustom", "scroll_depth", parameters);
      });
    };

    document.addEventListener("click", trackClick);
    window.addEventListener("scroll", trackScroll, { passive: true });
    trackScroll();

    const trackedSections = document.querySelectorAll<HTMLElement>("[data-analytics-view]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const eventName = (entry.target as HTMLElement).dataset.analyticsView;
          if (!eventName) return;

          const key = `escalando-view-${eventName}-${window.location.pathname}`;
          if (window.sessionStorage.getItem(key)) return;

          window.sessionStorage.setItem(key, "1");
          const parameters = { page_path: window.location.pathname };
          window.dataLayer?.push({ event: eventName, ...parameters });
          window.gtag?.("event", eventName, parameters);
          window.fbq?.("trackCustom", eventName, parameters);
          sendMetaCapiEvent("ViewContent", { ...parameters, content_name: eventName });
          sectionObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.35 },
    );

    trackedSections.forEach((section) => sectionObserver.observe(section));

    return () => {
      document.removeEventListener("click", trackClick);
      window.removeEventListener("scroll", trackScroll);
      sectionObserver.disconnect();
    };
  }, [consent]);

  useEffect(() => {
    if (consent !== "accepted") return;
    if (document.querySelector("script[data-escalando-clarity]")) return;

    type QueuedClarity = ((...args: unknown[]) => void) & { q?: unknown[][] };
    const queuedClarity: QueuedClarity = (...args) => {
      (queuedClarity.q ??= []).push(args);
    };

    window.clarity = queuedClarity;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${clarityProjectId}`;
    script.dataset.escalandoClarity = "true";
    document.head.appendChild(script);
  }, [consent]);

  const saveConsent = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(consentStorageKey, value);
    window.__escalandoMarketingConsent = value === "accepted";
    setConsent(value);
    setPreferencesOpen(false);
  };

  const showBanner = consent === null || preferencesOpen;

  return (
    <>
      {consent === "accepted" ? (
        <>
          {/* GA4 and Meta Pixel are intentionally direct. Do not recreate these tags in GTM. */}
          <Script id="gtm-loader" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({"gtm.start": new Date().getTime(), event: "gtm.js"});
            (function(w,d,s,l,i){var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","${gtmContainerId}");
          `}</Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
          <Script id="ga4-config" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag("js", new Date());
            gtag("config", "${gaMeasurementId}", { anonymize_ip: true });
          `}</Script>
          {metaPixelId ? <Script id="meta-pixel" strategy="afterInteractive">{`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
            fbq("init", "${metaPixelId}");
            fbq("track", "PageView");
          `}</Script> : null}
        </>
      ) : null}

      {showBanner ? (
        <aside
          aria-label="Preferencias de privacidad"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-3xl border border-[var(--border-strong)] bg-[var(--panel)] p-5 shadow-[var(--shadow-strong)] backdrop-blur-2xl sm:bottom-6 sm:p-6"
        >
          <p className="text-base font-bold text-[var(--text-strong)]">Medición para mejorar la experiencia</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Con tu permiso usamos Google Analytics, Microsoft Clarity y Meta Pixel para medir visitas,
            entender el uso del sitio y mejorar campañas. Podés cambiar esta decisión cuando quieras.
          </p>
          <a href="/privacidad" className="mt-3 inline-flex text-sm font-semibold text-[var(--brand-cyan)] underline underline-offset-4">
            Ver política de privacidad
          </a>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="rounded-2xl border border-[var(--border-soft)] px-5 py-3 text-sm font-bold text-[var(--text-strong)] transition hover:border-[var(--border-strong)]"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="rounded-2xl bg-[var(--text-strong)] px-5 py-3 text-sm font-bold text-[var(--background)] transition hover:-translate-y-0.5"
            >
              Aceptar medición
            </button>
          </div>
        </aside>
      ) : null}

      {consent !== null && !preferencesOpen ? (
        <button
          type="button"
          onClick={() => setPreferencesOpen(true)}
          className="fixed bottom-4 left-4 z-[90] rounded-full border border-[var(--border-soft)] bg-[var(--panel)] px-4 py-2 text-xs font-bold text-[var(--text-secondary)] shadow-[var(--shadow-soft)] backdrop-blur-xl transition hover:border-[var(--border-strong)] hover:text-[var(--text-strong)]"
        >
          Privacidad y cookies
        </button>
      ) : null}
    </>
  );
}
