export const DEFAULT_GA_MEASUREMENT_ID = "G-WW10V0N5G6";

const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

/**
 * NEXT_PUBLIC_GA_ID overrides the default when it is a valid measurement ID.
 * An unset or invalid value falls back to the 23Labs property so production
 * still sends hits before the Vercel variable is set.
 */
export function getGaMeasurementId() {
  const configured = process.env.NEXT_PUBLIC_GA_ID?.trim();
  if (configured && GA_ID_PATTERN.test(configured)) return configured;
  return DEFAULT_GA_MEASUREMENT_ID;
}

type EventParams = Record<string, string>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  if (typeof window.gtag !== "function") {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
  window.gtag("event", eventName, params ?? {});
}

export function trackGenerateLead() {
  trackEvent("generate_lead", {
    method: "contact_form",
    form_id: "enquiry",
  });
}

export function trackEmailClick(linkUrl: string) {
  trackEvent("email_click", {
    method: "mailto",
    link_url: linkUrl,
  });
}
