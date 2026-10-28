import type { Metadata } from "next";
import Link from "next/link";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import SeoFaq from "@/components/custom/SeoFaq";
import { whatsappHref } from "@/lib/constants";
import { ArrowRight, Building2, CarFront, CheckCircle2, MapPin, Truck, Users, ClipboardCheck } from "lucide-react";

const title = "EV Charging Station in Jalandhar | Societies, Offices & Fleets";
const description = "Plan EV charger installation and charging stations in Jalandhar for housing societies, RWAs, offices, commercial properties, retail destinations and fleets. Review site access, power readiness, charger options and project costs with MyEVStation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/jalandhar-ev-charging" },
  keywords: [
    "EV charging station in Jalandhar",
    "EV charger installation Jalandhar",
    "EV charging for Jalandhar societies",
    "EV charging stations in Jalandhar",
    "EV charging for offices in Jalandhar",
    "commercial EV charging Jalandhar",
    "fleet charging Jalandhar",
  ],
  ...pageSocialMetadata(title, description, "/jalandhar-ev-charging"),
};

const segments = [
  { Icon: Building2, title: "Housing societies & RWAs", body: "Review allocated parking, resident and visitor demand, RWA approvals, metering and safe cable routing." },
  { Icon: Users, title: "Corporate offices & campuses", body: "Assess employee and visitor charging, parking duration, access control and workplace charging policies." },
  { Icon: Truck, title: "Fleets & logistics", body: "Evaluate predictable vehicle movement, daily charging windows, fleet mix and operational uptime needs." },
  { Icon: CarFront, title: "Retail, hotels & destinations", body: "Consider customer dwell time, public access, parking layout and suitable AC or DC charger options." },
];

const localities = [
  "Model Town, Urban Estate and nearby residential areas",
  "GT Road and Jalandhar–Phagwara Road commercial corridors",
  "Nakodar Road and Rama Mandi areas",
  "Industrial Area and Focal Point business districts",
];

export default function JalandharEvChargingPage() {
  const whatsapp = whatsappHref("Hello MyEVStation, I am enquiring from the Jalandhar EV charging page about a potential charging site. Please guide me on site feasibility.");
  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#17212b]">
      <section className="bg-[linear-gradient(120deg,#0b2a1e,#0b7652)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">Jalandhar · EV infrastructure · Site feasibility</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">EV CHARGING SOLUTIONS FOR JALANDHAR.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">Looking to add EV charging to a residential society, office campus, commercial property, retail destination or fleet location in Jalandhar? MyEVStation helps assess the property, user demand, charger requirements and electrical readiness before a project proposal is prepared.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} className="inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Discuss your Jalandhar site <ArrowRight size={17} /></a>
              <Link href="/ev-charging-calculator" className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-6 py-4 font-bold text-white">Estimate project costs <ArrowRight size={17} /></Link>
            </div>
            <p className="mt-4 text-sm text-white/70">Feasibility and returns are site-specific and depend on verified demand, power availability, permissions, installation scope and operating costs.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8">
            <MapPin size={34} className="text-[#c7e7d0]" />
            <h2 className="mt-4 text-2xl font-black">A practical site review comes first</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/85">
              {["Parking rights, access hours and vehicle movement", "Resident, employee, visitor or fleet charging demand", "Sanctioned load, cable route and electrical protection", "Itemised installation scope and operating arrangement"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#c7e7d0]" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce8df] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <div><p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#0b7652]">Founded by Ex-Indian Air Force Professionals</p><p className="mt-1 text-sm font-semibold text-[#172d21]">Discipline. Integrity. Execution.</p></div>
          <p className="max-w-3xl text-sm leading-6 text-[#647067]">The founding team's service and professional experience informs a safety-first approach. MyEVStation is an independent venture; this background does not imply official Indian Air Force or Government of India endorsement.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">Local coverage</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Explore Jalandhar localities and business districts for EV charging</h2><p className="mt-4 leading-7 text-[#647067]">The Jalandhar localities and business districts below define our outreach focus, not confirmed charger availability or a claim that any area is underserved. Existing public charging, connector compatibility, access and operating status should be verified for each proposed site.</p></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {localities.map((name) => <article key={name} className="flex items-start gap-3 rounded-2xl border border-[#e0e8e1] bg-white p-5"><MapPin size={22} className="mt-1 shrink-0 text-[#0b7652]" /><h3 className="font-extrabold">{name}</h3></article>)}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5"><div className="max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">Who we work with</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Charging plans for properties and operators</h2></div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map(({ Icon, title, body }) => <article key={title} className="rounded-2xl border border-[#e0e8e1] bg-[#fbfcfa] p-6"><Icon size={28} className="text-[#0b7652]" /><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div><h2 className="text-3xl font-black sm:text-4xl">What is checked before installation?</h2><ul className="mt-6 space-y-4">{["Confirm property ownership or host permission and the intended users.","Review parking layout, access, vehicle circulation and charging dwell time.","Have a qualified professional assess sanctioned load, distribution equipment, cabling, earthing and protection.","Select compatible chargers and review software, maintenance and electricity billing.","Prepare an itemised proposal with assumptions; obtain required approvals before installation."].map((item) => <li key={item} className="flex gap-3 leading-7 text-[#536774]"><CheckCircle2 size={20} className="mt-1 shrink-0 text-[#0b7652]" />{item}</li>)}</ul></div>
          <div className="rounded-3xl bg-[#eaf3f5] p-7 sm:p-9"><ClipboardCheck size={32} className="text-[#0b7652]" /><h3 className="mt-4 text-2xl font-black">Request an initial site discussion</h3><p className="mt-3 leading-7 text-[#536774]">Share your Jalandhar locality, property type, parking capacity, intended users, permission status and known electrical details. The team can guide you on the information needed for a feasibility assessment.</p><a href={whatsapp} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0b5a42] px-6 py-4 font-extrabold text-white">Send a site enquiry <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-3xl border border-[#dce8df] bg-white p-6 sm:p-8"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0b7652]">Planning resources</p><h2 className="mt-2 text-2xl font-black">Continue planning with MyEVStation</h2><div className="mt-5 grid gap-3 sm:grid-cols-3">
          <Link href="/punjab-ev-charging" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">Explore Punjab-wide charging <ArrowRight size={16} className="ml-1 inline" /></Link>
          <Link href="/amritsar-ev-charging" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">EV charging in Amritsar <ArrowRight size={16} className="ml-1 inline" /></Link>
          <Link href="/ludhiana-ev-charging" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">EV charging in Ludhiana <ArrowRight size={16} className="ml-1 inline" /></Link>
          <Link href="/greater-noida-societies" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">Delhi NCR charging solutions <ArrowRight size={16} className="ml-1 inline" /></Link>
          <Link href="/business-model" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">Compare business models <ArrowRight size={16} className="ml-1 inline" /></Link>
          <Link href="/ev-charging-calculator" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">EV charging cost calculator <ArrowRight size={16} className="ml-1 inline" /></Link>
        </div></div>
      </section>

      <section className="bg-[#123b4b] py-14 text-white sm:py-18"><div className="mx-auto max-w-4xl px-5 text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">Property owners · RWAs · fleet operators</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Let's assess your Jalandhar site</h2><p className="mt-4 leading-7 text-white/80">Start with the property details and intended charging use. We will discuss site feasibility before equipment or commercial commitments.</p><a href={whatsapp} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Contact MyEVStation <ArrowRight size={17} /></a></div></section>

      <SeoFaq eyebrow="Jalandhar site planning" title="EV charging in Jalandhar: frequently asked questions" items={[
        { question: "Which Jalandhar areas does MyEVStation cover?", answer: "The outreach focus includes Model Town, Urban Estate, GT Road, Phagwara Road, Nakodar Road, Rama Mandi, Industrial Area and Focal Point. Site feasibility is assessed individually." },
        { question: "Can an EV charger be installed in a Jalandhar housing society?", answer: "It may be possible subject to parking rights, RWA or property approval, electrical capacity, safe cable routing, metering and applicable requirements. A site review should confirm the installation plan." },
        { question: "Can offices and commercial properties host EV chargers?", answer: "Potentially, where the owner permits the use and access, parking, power availability and operating arrangements are suitable. Public access and operating hours should be agreed in advance." },
        { question: "What is the cost of an EV charging station in Jalandhar?", answer: "Installed cost depends on charger type, electrical upgrades, cable distance, civil work, metering, software and maintenance. Request an itemised site-specific quotation." },
        { question: "Are revenue or utilisation guaranteed?", answer: "No. Results depend on actual demand, competition, access, tariffs, operating costs and the commercial agreement. Projections should state assumptions and consider lower utilisation." },
        { question: "Does the founders' prior Indian Air Force service mean government endorsement?", answer: "No. MyEVStation is an independent venture. The founders' prior service is professional background and does not imply official Indian Air Force or Government of India endorsement." }
      ]} />
    </main>
  );
}
