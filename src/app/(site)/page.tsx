import type { Metadata } from "next";
import { fitMetaDescription, fitMetaTitle } from "@/lib/seo-metadata";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "EV Charging Stations in Delhi NCR & India",
  description: fitMetaDescription("Explore EV charging station opportunities across Delhi NCR and India. Compare business models with or without land, housing society and commercial-site requirements, AC and DC chargers, setup costs and site feasibility with MyEVStation."),
  alternates: { canonical: "/" },
  openGraph: {
    title: "EV Charging Stations in Delhi NCR & India",
    description: fitMetaDescription("Explore EV charging station opportunities across Delhi NCR and India, including housing societies and commercial sites. Compare charger options, setup costs and site feasibility."),
    url: "/",
    type: "website",
  },

  ...pageSocialMetadata("EV Charging Stations in Delhi NCR & India", "Explore EV charging station opportunities across Delhi NCR and India. Compare business models with or without land, housing society and commercial-site requirements, AC and DC chargers, setup costs and site feasibility with MyEVStation.", "/"),
};

export default function HomePage() {
  return <HomeClient />;
}
