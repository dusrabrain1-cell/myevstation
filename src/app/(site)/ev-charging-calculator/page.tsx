import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: "EV Charging Station Investment Calculator",
  description: "Estimate indicative EV charging station revenue, energy expenses, operating surplus and simple payback using your own charger, usage and tariff assumptions.",
  alternates: { canonical: "/ev-charging-calculator" },

  ...pageSocialMetadata("EV Charging Station Investment Calculator", "Estimate indicative EV charging station revenue, energy expenses, operating surplus and simple payback using your own charger, usage and tariff assumptions.", "/ev-charging-calculator"),
};

export default function EVChargingCalculatorPage() {
  return <CalculatorClient />;
}
