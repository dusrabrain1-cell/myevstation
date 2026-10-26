import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import WhyContent from "./WhyContent";

export const metadata: Metadata = {
  title: "Why Choose MyEVStation for EV Charging Solutions",
  description: "Learn how MyEVStation helps prospective EV charging partners understand site suitability, likely permissions, charger options and realistic investment assumptions.",
  alternates: { canonical: "/why-myevstation" },

  ...pageSocialMetadata("Why Choose MyEVStation for EV Charging Solutions", "Learn how MyEVStation helps prospective EV charging partners understand site suitability, likely permissions, charger options and realistic investment assumptions.", "/why-myevstation"),
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><WhyContent /></main>;
}
