import type { Metadata } from "next";
import { fitMetaDescription, fitMetaTitle } from "@/lib/seo-metadata";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: fitMetaTitle("EV Charging Station Setup in India"),
  description: fitMetaDescription("Explore EV charging station setup in India for landowners, housing societies, commercial properties and investors. Compare AC and DC chargers, costs, business models and partnerships with MyEVStation."),
  alternates: { canonical: "/" },
  openGraph: {
    title: "EV Charging Station Setup in India | MyEVStation",
    description: fitMetaDescription("Explore EV charging station setup in India for landowners, societies, businesses and investors. Compare charger options, costs and partnership models."),
    url: "/",
    type: "website",
  },

  ...pageSocialMetadata("EV Charging Station Setup in India", "Explore EV charging station setup in India for landowners, housing societies, commercial properties and investors. Compare AC and DC chargers, costs, business models and partnerships with MyEVStation.", "/"),
};

export default function HomePage() {
  return <HomeClient />;
}
