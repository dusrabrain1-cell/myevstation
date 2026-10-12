import type { Metadata } from "next";
import WhyContent from "./WhyContent";

export const metadata: Metadata = {
  title: "Why MyEVStation",
  description: "Learn how MyEVStation helps prospective EV charging partners understand site suitability, likely permissions, charger options and realistic investment assumptions.",
  alternates: { canonical: "/why-myevstation" },
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><WhyContent /></main>;
}
