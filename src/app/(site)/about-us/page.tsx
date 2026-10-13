import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About the MyEVStation Team",
  description: "Meet the veteran-led team behind MyEVStation and learn about its independent mission to help people explore EV charging infrastructure opportunities.",
  alternates: { canonical: "/about-us" },

  ...pageSocialMetadata("About the MyEVStation Team", "Meet the veteran-led team behind MyEVStation and learn about its independent mission to help people explore EV charging infrastructure opportunities.", "/about-us"),
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><AboutContent /></main>;
}
