import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About MyEVStation",
  description: "Meet the veteran-led team behind MyEVStation and learn about its independent mission to help people explore EV charging infrastructure opportunities.",
  alternates: { canonical: "/about-us" },
};

export default function Page() {
  return <main className="bg-white text-[#17212b]"><AboutContent /></main>;
}
