import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About MyEVStation | EV Charging Team & Partners",
  description: "Meet the MyEVStation leadership team and regional partners, including Abhinav Sekhri, Senior Partner – Punjab. Learn about our work in EV charging station partnerships and infrastructure across India.",
  keywords: [
    "MyEVStation partners",
    "Abhinav Sekhri MyEVStation",
    "Senior Partner Punjab",
    "EV charging station Punjab",
    "EV charging infrastructure India",
    "EV charging station partnerships",
  ],
  alternates: { canonical: "/about-us" },
  ...pageSocialMetadata(
    "MyEVStation Partners | EV Charging Infrastructure in India",
    "Meet MyEVStation’s leadership team and regional partners, including Abhinav Sekhri, Senior Partner – Punjab, supporting EV charging station partnerships and infrastructure across India.",
    "/about-us"
  ),
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><AboutContent /></main>;
}
