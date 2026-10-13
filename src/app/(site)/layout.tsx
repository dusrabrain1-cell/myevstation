import type { Metadata } from "next";
import SiteLayoutClient from "./site-layout-client";

export const metadata: Metadata = {
  title: "EV Charging Station Opportunities in India",
  description:
    "Explore EV charging station opportunities with or without land, for housing societies and ex-servicemen. Compare charger options, review indicative investment assumptions and enquire with MyEVStation.",
  openGraph: {
    title: "MyEVStation | EV Charging Station Opportunities in India",
    description:
      "Compare EV charging station models for landowners, partner-site investors, housing societies and ex-servicemen across India.",
    url: "/",
    type: "website",
    images: [{
      url: "/myevstation-hero-banner.jpeg",
      width: 1200,
      height: 630,
      alt: "MyEVStation EV charging station opportunities in India",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyEVStation | EV Charging Station Opportunities in India",
    description:
      "Compare EV charging station models, charger options and indicative investment assumptions.",
    images: ["/myevstation-hero-banner.jpeg"],
  },
};

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteLayoutClient>{children}</SiteLayoutClient>;
}
