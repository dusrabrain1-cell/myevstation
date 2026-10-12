import type { Metadata } from "next";
import TechnologyContent from "./TechnologyContent";

export const metadata: Metadata = {
  title: "EV Charging Technology and Safety",
  description: "Learn how MyEVStation approaches EV charger compatibility, AC and DC selection, electrical capacity, site planning and safety.",
  alternates: { canonical: "/technology" },
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><TechnologyContent /></main>;
}
