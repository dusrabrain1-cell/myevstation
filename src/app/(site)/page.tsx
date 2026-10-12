import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "EV Charging Station Opportunities in India | MyEVStation",
  description: "Explore EV charging station business models in India, with or without land. Compare site requirements, AC and DC charger options, investment assumptions, permissions and an illustrative returns calculator.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "EV Charging Station Opportunities in India | MyEVStation",
    description: "Explore EV charging station business models in India, with or without land. Compare site requirements, charger options and investment assumptions.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
