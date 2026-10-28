import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/constants";
import SiteShell from "@/components/custom/SiteShell";
import GoogleAnalytics from "@/components/custom/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.shortDescription}`,
    template: `%s | ${SITE.name}`,
  },
  description: "Explore EV charging station setup in India with MyEVStation. Compare investment models for landowners, housing societies, businesses and ex-servicemen, and enquire about EV charger installation and partnerships.",
  metadataBase: new URL(SITE.url),
  keywords: [
    "EV charging station setup India",
    "EV charging station business",
    "EV charger installation",
    "EV charging station investment",
    "EV charging for housing societies",
    "EV charging station for landowners",
    "EV charging station Noida",
    "EV charging station Greater Noida",
    "EV charging station business partnership India",
  ],
  applicationName: SITE.name,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  category: "business",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: SITE.url, siteName: SITE.name, title: "EV Charging Station Setup & Investment Opportunities in India | MyEVStation", description: "Explore EV charging station setup, charger options and partnership models for landowners, investors, housing societies and ex-servicemen.", images: [{ url: "/myevstation-hero-banner.jpeg", width: 1200, height: 630, alt: "MyEVStation EV charging station opportunities in India" }] },
  twitter: { card: "summary_large_image", title: "EV Charging Station Setup & Investment | MyEVStation", description: "EV charging station setup options, charger solutions and partnership opportunities across India.", images: ["/myevstation-hero-banner.jpeg"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      {/* suppressHydrationWarning is scoped to <body> only — silences harmless
          attribute mismatches injected by browser extensions (Grammarly,
          ColorZilla, etc.). Does not affect any other hydration checks. */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-paper text-ink"
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: SITE.name,
              url: SITE.url,
              logo: `${SITE.url}/myevstation-logo.png`,
              description: "EV charging infrastructure and station partnership opportunities in India.",
              telephone: SITE.phone,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: SITE.whatsappPhone,
                contactType: "sales",
                availableLanguage: ["English", "Hindi"]
              }
            },
            {
              "@type": "WebSite",
              "@id": `${SITE.url}/#website`,
              name: SITE.name,
              url: SITE.url,
              publisher: { "@id": `${SITE.url}/#organization` },
              inLanguage: "en-IN"
            }
          ]
        }) }} />
        <GoogleAnalytics />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
