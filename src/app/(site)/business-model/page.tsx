import type { Metadata } from "next";
import BusinessModelContent from "./BusinessModelContent";

export const metadata: Metadata = {
  title: "EV Charging Station Business Models",
  description: "Compare MyEVStation's EV charging station pathways for people without land, property owners, housing societies and ex-servicemen.",
  alternates: { canonical: "/business-model" },
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><BusinessModelContent /></main>;
}
