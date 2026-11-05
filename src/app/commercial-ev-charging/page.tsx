import type { Metadata } from "next";
import Link from "next/link";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import SeoFaq from "@/components/custom/SeoFaq";
import SeoBreadcrumbJsonLd from "@/components/custom/SeoBreadcrumbJsonLd";
import { whatsappHref } from "@/lib/constants";
import { ArrowRight, Building2, Hotel, Hospital, Landmark, ShoppingBag, Truck, ClipboardCheck, Zap } from "lucide-react";

const title = "Commercial EV Charging Solutions for Offices, Malls & Hotels";
const description = "Plan EV charger installation for commercial properties in India. MyEVStation helps offices, malls, hotels, hospitals, institutions and fleet sites assess charger options, electrical readiness, project costs and operating models.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/commercial-ev-charging" },
  keywords: [
    "commercial EV charging solutions",
    "EV charger for commercial buildings",
    "EV charging for malls",
    "EV charging for offices",
    "EV charging for coworking spaces",
    "EV charging for hotels and hospitals",
    "commercial EV charger installation India",
    "EV charging for government buildings",
    "EV charging for fleet operators",
  ],
  ...pageSocialMetadata(title, description, "/commercial-ev-charging"),
};

const segments = [
  { Icon: Building2, title: "Offices & coworking spaces", body: "Plan employee, visitor and tenant charging around parking duration, access control, sanctioned load and the building's operating hours." },
  { Icon: ShoppingBag, title: "Malls & retail destinations", body: "Assess customer dwell time, parking circulation, charger visibility, payment experience and the right mix of AC and DC charging." },
  { Icon: Hotel, title: "Hotels, restaurants & resorts", body: "Consider overnight guest charging, destination charging, valet operations and clear rules for public or guest-only access." },
  { Icon: Hospital, title: "Hospitals & healthcare campuses", body: "Review visitor and staff parking, emergency access, safe equipment placement and the operational requirements of a 24-hour facility." },
  { Icon: Landmark, title: "Institutions & public buildings", body: "Assess campus access, procurement requirements, electrical infrastructure, parking permissions and the responsible facility team." },
  { Icon: Truck, title: "Fleets & logistics properties", body: "Evaluate predictable vehicle movement, dwell windows, daily energy needs, load capacity and charging uptime requirements." },
];

const faqs = [
  { question: "Can an office, mall or hotel install EV chargers?", answer: "Yes, if the property has suitable parking, electrical capacity, access and the required permissions. A site assessment should confirm the charger mix, load, installation scope and operating arrangement." },
  { question: "Which EV charger is suitable for a commercial property?", answer: "AC charging can suit vehicles parked for longer periods, while DC fast charging may suit higher-turnover sites with sufficient electrical capacity. Vehicle compatibility, demand and site power should determine the choice." },
  { question: "How much does commercial EV charger installation cost?", answer: "The total depends on charger quantity and power, cabling, electrical panels, load upgrades, civil work, software, payment fees, taxes and site conditions. Request an itemised, site-specific proposal rather than relying on a hardware-only price." },
  { question: "Can MyEVStation assess a site before we invest?", answer: "You can share the property location, site type, parking details and available electrical information for an initial discussion. Final feasibility and project costs require a technical site assessment and confirmation from the relevant property and electricity authorities." },
  { question: "Can a commercial property earn revenue from EV charging?", answer: "It may be possible, depending on utilisation, tariff, electricity cost, fees, maintenance, staffing and the commercial agreement. Revenue and payback are not guaranteed; model conservative demand before committing." },
  { question: "Does MyEVStation work outside Delhi NCR?", answer: "MyEVStation is developing opportunities across India. Share your city and property details so the team can confirm whether the location can be assessed and supported." },
];

export default function CommercialEvChargingPage() {
  const whatsapp = whatsappHref("Hello MyEVStation, I am enquiring about commercial EV charging for my property. Site type: [office / mall / hotel / hospital / institution / fleet]. City: [city]. Please help with site feasibility, charger options and an itemised proposal.");
  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#17212b]">
      <section className="bg-[linear-gradient(120deg,#0b2a1e,#0b7652)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">Commercial properties · Workplace · Destination charging</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">EV CHARGING FOR YOUR COMMERCIAL PROPERTY.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">Make your office, mall, hotel, hospital or commercial parking facility EV-ready. MyEVStation helps property owners and facility teams assess site suitability, charger options, electrical readiness, installation scope and operating models before a proposal is finalised.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Discuss your property <ArrowRight size={17} /></a>
              <Link href="/ev-charging-calculator" className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-6 py-4 font-bold text-white">Explore the calculator <ArrowRight size={17} /></Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/60">Every project is subject to site assessment, electrical feasibility, permissions and a written commercial scope. No utilisation or return is guaranteed.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/[.08] p-6 sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#c7e7d0]">Start with a site review</p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">A practical plan before installation.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/85">
              {["Property type, parking layout and vehicle access", "Sanctioned load, electrical upgrades and cable routes", "AC or DC charger selection and vehicle compatibility", "Installation, software, payment and maintenance scope", "Ownership, operating responsibilities and commercial terms"].map((item) => <li key={item} className="flex gap-3"><ClipboardCheck className="mt-0.5 shrink-0 text-[#ffb181]" size={19} />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">Solutions by property type</p>
          <h2 className="mt-3 text-3xl font-black text-[#172d21] sm:text-5xl">One site assessment. A solution built around how your property works.</h2>
          <p className="mt-4 leading-7 text-[#647067]">Charging demand, parking duration and electrical capacity vary by property. Start with the use case, then select the equipment and operating model.</p>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map(({ Icon, title: heading, body }) => <article key={heading} className="rounded-2xl border border-[#dfe7df] bg-white p-6 shadow-sm"><Icon className="text-[#0b7652]" size={30} /><h3 className="mt-4 text-xl font-black text-[#203b2d]">{heading}</h3><p className="mt-3 text-sm leading-7 text-[#647067]">{body}</p></article>)}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">From enquiry to proposal</p>
            <h2 className="mt-3 text-3xl font-black text-[#172d21] sm:text-4xl">What happens next?</h2>
            <ol className="mt-7 space-y-5">
              {[
                ["Share your site", "Tell us the city, property type, parking capacity and who manages the premises."],
                ["Review feasibility", "Discuss access, likely charging demand, electrical capacity and any site constraints."],
                ["Compare the options", "Review charger type, equipment quantities, installation scope and operating responsibilities."],
                ["Receive a written proposal", "Confirm itemised costs, exclusions, commercial terms, maintenance and next steps before approval."],
              ].map(([heading, body], index) => <li key={heading} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7f2eb] font-black text-[#0b7652]">{index + 1}</span><div><h3 className="font-extrabold text-[#203b2d]">{heading}</h3><p className="mt-1 text-sm leading-6 text-[#647067]">{body}</p></div></li>)}
            </ol>
          </div>
          <div className="rounded-3xl bg-[#0b2a1e] p-7 text-white sm:p-10">
            <Zap className="text-[#ffb181]" size={34} />
            <h2 className="mt-5 text-3xl font-black">Have a property in mind?</h2>
            <p className="mt-4 leading-7 text-white/75">Send the location and basic site details. The team can help you understand the information needed for an initial feasibility discussion and a written proposal.</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold">Send site details on WhatsApp <ArrowRight size={17} /></a>
            <p className="mt-4 text-xs text-white/55">WhatsApp: +91 98762 60822</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <h2 className="text-2xl font-black text-[#203b2d]">Explore related MyEVStation resources</h2>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-[#0b5a42]">
          <Link className="underline-offset-4 hover:underline" href="/business-model">EV charging business models</Link>
          <Link className="underline-offset-4 hover:underline" href="/ev-charging-investment-guide">Investment and cost guide</Link>
          <Link className="underline-offset-4 hover:underline" href="/delhi-ncr-ev-charging">Delhi NCR EV charging</Link>
          <Link className="underline-offset-4 hover:underline" href="/greater-noida-societies">Greater Noida societies</Link>
          <Link className="underline-offset-4 hover:underline" href="/punjab-ev-charging">Punjab EV charging</Link>
          <Link className="underline-offset-4 hover:underline" href="/contact?source=commercial-ev-charging">Request a proposal</Link>
        </div>
      </section>

      <SeoFaq items={faqs} title="Commercial EV charging: common questions" eyebrow="Before you plan" />
      <SeoBreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Commercial EV Charging", path: "/commercial-ev-charging" }]} />
    </main>
  );
}
