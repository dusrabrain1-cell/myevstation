import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import Link from "next/link";
import SeoFaq from "@/components/custom/SeoFaq";
import { whatsappHref } from "@/lib/constants";
import { ArrowRight, Building2, CarFront, CheckCircle2, ClipboardCheck, MapPin, Truck, Users } from "lucide-react";

const title = "EV Charging Stations in Delhi NCR | Societies, Commercial Sites & Fleets";
const description = "Explore EV charging station opportunities across Delhi NCR for housing societies, RWAs, commercial properties, offices, hotels and fleets. Assess site access, power readiness, charger options and installation costs with MyEVStation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/delhi-ncr-ev-charging" },
  keywords: [
    "EV charging station Delhi NCR",
    "EV charging stations in Delhi",
    "EV charger installation Gurugram",
    "EV charging Noida and Greater Noida",
    "EV charging for Delhi NCR housing societies",
    "EV charging station for commercial property",
    "EV fleet charging Delhi NCR",
    "EV charging business Delhi NCR",
  ],
  ...pageSocialMetadata(title, description, "/delhi-ncr-ev-charging"),
};

const areas = [
  { name: "Delhi", detail: "Commercial parking, offices, markets, hotels, institutions and residential communities." },
  { name: "Gurugram", detail: "Corporate campuses, premium residential complexes, hotels, fleet operators and destination parking." },
  { name: "Noida", detail: "IT parks, office campuses, malls, housing societies and commercial parking facilities." },
  { name: "Greater Noida", detail: "Apartments, RWAs, institutional areas, commercial properties and fleet locations." },
  { name: "Ghaziabad", detail: "Residential communities, shopping areas, hospitals, business premises and transport operators." },
  { name: "Faridabad", detail: "Industrial premises, offices, residential societies, markets and fleet parking." },
  { name: "Manesar & NH corridors", detail: "Industrial and logistics sites, fleet depots, hotels and suitable highway-facing properties." },
];

const segments = [
  { Icon: Building2, title: "Housing societies & RWAs", body: "Assess resident parking, shared visitor charging, parking rights, electrical capacity and transparent electricity billing." },
  { Icon: Users, title: "Offices & commercial properties", body: "Review employee and visitor demand, parking duration, access control and the property's operating model." },
  { Icon: Truck, title: "Fleets & logistics", body: "Evaluate repeatable daily demand from delivery vehicles, taxis, company fleets and commercial operators." },
  { Icon: CarFront, title: "Retail, hotels & destinations", body: "Consider customer dwell time, public access, safe vehicle circulation and suitable AC or DC charging." },
];

export default function DelhiNcrEvChargingPage() {
  const whatsapp = whatsappHref("Hello MyEVStation, I am enquiring from the Delhi NCR EV charging page about a potential site. Please help with site feasibility.");
  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#17212b]">
      <section className="bg-[linear-gradient(120deg,#0b2a1e,#0b7652)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">Delhi NCR · Site development · Charging infrastructure</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">EV CHARGING SOLUTIONS FOR DELHI NCR.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">Planning EV charging for a housing society, office, commercial property, hotel or fleet? MyEVStation helps property owners and operating partners assess site suitability, charger options, electrical readiness and project costs before moving to a proposal.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} className="inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Discuss your NCR site <ArrowRight size={17} /></a>
              <Link href="/ev-charging-calculator" className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-6 py-4 font-bold text-white">Estimate project costs <ArrowRight size={17} /></Link>
            </div>
            <p className="mt-4 text-sm text-white/70">Every recommendation is site-specific. Revenue, savings and feasibility depend on verified demand, power availability, permissions, installation scope and operating costs.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8">
            <MapPin size={34} className="text-[#c7e7d0]" />
            <h2 className="mt-4 text-2xl font-black">Start with the property—not just the pin on the map</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/85">
              {["Vehicle access, parking rights and operating hours", "Nearby EV activity and realistic charging demand", "Sanctioned load, cabling route and electrical protection", "Itemised installation costs and a workable operating model"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#c7e7d0]" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Founder credibility" className="border-b border-[#dce8df] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <div><p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#0b7652]">Founded by Ex-Indian Air Force Professionals</p><p className="mt-1 text-sm font-semibold text-[#172d21]">Discipline. Integrity. Execution.</p></div>
          <p className="max-w-3xl text-sm leading-6 text-[#647067]">The founding team's technical and service experience informs a safety-first approach. MyEVStation is an independent venture; this background does not imply official Indian Air Force or Government of India endorsement.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">Local coverage</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Explore EV charging opportunities across Delhi NCR</h2><p className="mt-4 leading-7 text-[#647067]">These are service and outreach areas for site enquiries, not claims that a particular locality is underserved or has confirmed charger availability. Existing public charging, connector compatibility, access and operating status should be checked before investment.</p></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => <article key={area.name} className="rounded-2xl border border-[#e0e8e1] bg-white p-5"><div className="flex items-start gap-3"><MapPin size={22} className="mt-1 shrink-0 text-[#0b7652]" /><div><h3 className="font-extrabold">{area.name}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{area.detail}</p></div></div></article>)}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5"><div className="max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">Who we work with</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Charging plans for four types of properties and operators</h2></div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map(({ Icon, title, body }) => <article key={title} className="rounded-2xl border border-[#e0e8e1] bg-[#fbfcfa] p-6"><Icon size={28} className="text-[#0b7652]" /><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div><h2 className="text-3xl font-black sm:text-4xl">What happens before a proposal?</h2><ul className="mt-6 space-y-4">{["Understand the property, ownership or host agreement and intended users.","Review parking layout, access hours, vehicle movement and charging dwell time.","Arrange a qualified review of sanctioned load, distribution equipment, cable route, earthing and protection.","Compare charger compatibility, installation scope, software, maintenance and electricity billing.","Prepare an itemised proposal with assumptions clearly stated; confirm permissions before installation."].map((item) => <li key={item} className="flex gap-3 leading-7 text-[#536774]"><CheckCircle2 size={20} className="mt-1 shrink-0 text-[#0b7652]" />{item}</li>)}</ul></div>
          <div className="rounded-3xl bg-[#eaf3f5] p-7 sm:p-9"><ClipboardCheck size={32} className="text-[#0b7652]" /><h3 className="mt-4 text-2xl font-black">Share a site for an initial review</h3><p className="mt-3 leading-7 text-[#536774]">Send the city and locality, property type, parking capacity, likely users, permission status and known electrical details. Our team can discuss what is needed for a proper feasibility assessment.</p><a href={whatsapp} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0b5a42] px-6 py-4 font-extrabold text-white">Send a site enquiry <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-3xl border border-[#dce8df] bg-white p-6 sm:p-8"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0b7652]">Planning resources</p><h2 className="mt-2 text-2xl font-black">Continue planning with MyEVStation</h2><div className="mt-5 grid gap-3 sm:grid-cols-3">
          <Link href="/greater-noida-societies" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">Greater Noida society charging <ArrowRight size={16} className="ml-1 inline" /></Link>
          <Link href="/business-model" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">Compare business models <ArrowRight size={16} className="ml-1 inline" /></Link>
          <Link href="/ev-charging-calculator" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">EV charging cost calculator <ArrowRight size={16} className="ml-1 inline" /></Link>
        </div></div>
      </section>

      <section className="bg-[#123b4b] py-14 text-white sm:py-18"><div className="mx-auto max-w-4xl px-5 text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">Property owners · RWAs · fleet operators</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Let's assess your Delhi NCR site</h2><p className="mt-4 leading-7 text-white/80">Share the site details and intended charging use. We will start with feasibility questions before discussing equipment or commercial terms.</p><a href={whatsapp} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Contact MyEVStation <ArrowRight size={17} /></a></div></section>

      <SeoFaq eyebrow="Delhi NCR site planning" title="EV charging in Delhi NCR: frequently asked questions" items={[
        { question: "Which areas does this Delhi NCR page cover?", answer: "The outreach area includes Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad and Manesar or suitable NH corridor properties. Actual service feasibility is assessed property by property." },
        { question: "Can an EV charger be installed in a housing society?", answer: "It may be possible subject to parking rights, RWA or property approval, electrical capacity, safe cable routing, metering and applicable requirements. A site review should confirm the practical installation plan." },
        { question: "Can commercial properties host public EV chargers?", answer: "Potentially, if the property owner permits the use and the site has suitable access, parking, power availability and a viable operating arrangement. Public access and operating hours should be clearly agreed." },
        { question: "How much does an EV charging station cost in Delhi NCR?", answer: "Total installed cost depends on charger type, electrical upgrades, cable distance, civil work, metering, software and maintenance. Request an itemised, site-specific quotation rather than relying only on equipment price." },
        { question: "Does MyEVStation guarantee utilisation or returns?", answer: "No. Utilisation and revenue depend on actual demand, competition, access, tariffs, operating costs and the commercial agreement. Any projection should show its assumptions and sensitivity to lower usage." },
        { question: "Does the founders' prior Indian Air Force service mean government endorsement?", answer: "No. MyEVStation is an independent venture. The founders' prior service is professional background and does not imply official Indian Air Force or Government of India endorsement." }
      ]} />
    </main>
  );
}
