"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-GE6NE2HN2P";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!measurementId) return;

    const trackClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.href;
      if (href.startsWith("https://wa.me/") || href.startsWith("https://api.whatsapp.com/")) {
        window.gtag?.("event", "whatsapp_click", {
          link_url: href,
          link_text: link.textContent?.trim().slice(0, 100) || "WhatsApp",
          page_location: window.location.href,
        });
      }
    };

    const trackFormSuccess = () => {
      window.gtag?.("event", "generate_lead", {
        method: "website_contact_form",
        page_location: window.location.href,
      });
    };

    document.addEventListener("click", trackClick);
    window.addEventListener("myevstation:lead-submitted", trackFormSuccess);
    return () => {
      document.removeEventListener("click", trackClick);
      window.removeEventListener("myevstation:lead-submitted", trackFormSuccess);
    };
  }, []);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
