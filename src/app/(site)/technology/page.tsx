import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import TechnologyContent from "./TechnologyContent";

export const metadata: Metadata = {
  title: "EV Charging Technology and Safety",
  description: "Learn how MyEVStation approaches EV charger compatibility, AC and DC selection, electrical capacity, site planning and safety.",
  alternates: { canonical: "/technology" },

  ...pageSocialMetadata("EV Charging Technology and Safety", "Learn how MyEVStation approaches EV charger compatibility, AC and DC selection, electrical capacity, site planning and safety.", "/technology"),
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><TechnologyContent /></main>;
}
