"use client";

import { useEffect } from "react";
import { trackEmailClick } from "@/lib/analytics";

const ENQUIRY_EMAIL = "hello@23labs.co";

export function MailtoClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const href = link.getAttribute("href")?.trim() ?? "";
      const normalised = href.toLowerCase();
      if (!normalised.startsWith(`mailto:${ENQUIRY_EMAIL}`)) return;
      trackEmailClick(href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
