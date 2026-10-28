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
      const linkText = link.textContent?.trim().slice(0, 100) || "Contact link";
      const eventParams = {
        link_url: href,
        link_text: linkText,
        page_location: window.location.href,
        page_path: `${window.location.pathname}${window.location.search}`,
        page_title: document.title,
      };

      let contactMethod: "whatsapp" | "phone" | "email" | null = null;

      if (href.startsWith("https://wa.me/") || href.startsWith("https://api.whatsapp.com/")) {
        contactMethod = "whatsapp";
        window.gtag?.("event", "whatsapp_click", eventParams);
      } else if (href.startsWith("tel:")) {
        contactMethod = "phone";
        window.gtag?.("event", "phone_click", eventParams);
      } else if (href.startsWith("mailto:")) {
        contactMethod = "email";
        window.gtag?.("event", "email_click", eventParams);
      }

      if (contactMethod) {
        window.gtag?.("event", "contact_cta_click", {
          ...eventParams,
          contact_method: contactMethod,
        });
      }
    };

    const trackFormSuccess = () => {
      window.gtag?.("event", "generate_lead", {
        method: "website_contact_form",
        page_location: window.location.href,
        page_path: `${window.location.pathname}${window.location.search}`,
        page_title: document.title,
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
