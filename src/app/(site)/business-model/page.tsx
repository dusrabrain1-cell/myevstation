import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import BusinessModelContent from "./BusinessModelContent";

export const metadata: Metadata = {
  title: "EV Charging Station Business Model in India | MyEVStation",
  description: "Compare EV charging station business models in India, including investment, revenue sharing, operating responsibilities and options for landowners, investors, housing societies and ex-servicemen.",
  alternates: { canonical: "/business-model" },

  ...pageSocialMetadata("EV Charging Station Business Model in India | MyEVStation", "Compare EV charging station business models in India, including investment, revenue sharing, operating responsibilities and options for landowners, investors, housing societies and ex-servicemen.", "/business-model"),
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><BusinessModelContent /></main>;
}
