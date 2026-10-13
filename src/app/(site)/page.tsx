import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "EV Charging Station Opportunities in India",
  description: "Explore EV charging station business models in India, with or without land. Compare site requirements, AC and DC charger options, investment assumptions, permissions and an illustrative returns calculator.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "EV Charging Station Opportunities in India | MyEVStation",
    description: "Explore EV charging station business models in India, with or without land. Compare site requirements, charger options and investment assumptions.",
    url: "/",
    type: "website",
  },

  ...pageSocialMetadata("EV Charging Station Opportunities in India", "Explore EV charging station business models in India, with or without land. Compare site requirements, AC and DC charger options, investment assumptions, permissions and an illustrative returns calculator.", "/"),
};

export default function HomePage() {
  return <HomeClient />;
}
