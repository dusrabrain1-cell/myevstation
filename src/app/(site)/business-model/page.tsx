import type { Metadata } from "next";
import { fitMetaDescription, fitMetaTitle } from "@/lib/seo-metadata";
import SeoBreadcrumbJsonLd from "@/components/custom/SeoBreadcrumbJsonLd";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import BusinessModelContent from "./BusinessModelContent";

export const metadata: Metadata = {
  title: fitMetaTitle("EV Charging Station Business Model in India: Investment & Revenue | MyEVStation"),
  description: fitMetaDescription("Explore EV charging station business models in India: owner-funded stations, host-location partnerships, revenue sharing, site requirements, investment costs and operating responsibilities for investors and property owners."),
  alternates: { canonical: "/business-model" },

  ...pageSocialMetadata("EV Charging Station Business Model in India: Investment & Revenue | MyEVStation", "Explore EV charging station business models in India: owner-funded stations, host-location partnerships, revenue sharing, site requirements, investment costs and operating responsibilities for investors and property owners.", "/business-model"),
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><BusinessModelContent /><SeoBreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "EV Charging Business Model", path: "/business-model" }]} /></main>;
}
