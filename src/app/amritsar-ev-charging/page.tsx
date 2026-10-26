import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import Link from "next/link";
import SeoFaq from "@/components/custom/SeoFaq";
import { ArrowRight, Building2, CheckCircle2, MapPin, ShieldCheck, CarFront, Bike, Store, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Charging Station in Amritsar | Markets & Societies | MyEVStation",
  description: "Explore EV charging station opportunities in Amritsar for commercial markets, hotels, parking sites, fleets and housing societies. Assess charger options, site feasibility and installation costs with MyEVStation.",
  alternates: { canonical: "/amritsar-ev-charging" },
  keywords: [
    "EV charging station Amritsar",
    "EV charging for Amritsar markets",
    "EV charger for shops Amritsar",
    "EV charging station Punjab",
    "EV charger for housing society Amritsar",
    "commercial EV charging Amritsar",
    "EV charging station business Amritsar",
  ],

  ...pageSocialMetadata("EV Charging Station in Amritsar | Markets & Societies | MyEVStation", "Explore EV charging station opportunities in Amritsar for commercial markets, hotels, parking sites, fleets and housing societies. Assess charger options, site feasibility and installation costs with MyEVStation.", "/amritsar-ev-charging"),
};

const zones = [
  { title: "Ranjit Avenue", body: "Explore commercial parking, offices, restaurants, hotels and nearby residential catchments." },
  { title: "Lawrence Road & Novelty Chowk", body: "Assess destination charging where customers may park while shopping, dining or visiting businesses." },
  { title: "GT Road & Daburji corridor", body: "Evaluate suitable commercial properties, dealerships, hotels and travel-oriented locations." },
  { title: "Mall Road & shopping destinations", body: "Consider visitor charging where parking access and dwell time support the business case." },
  { title: "Housing societies & apartment communities", body: "Discuss assigned resident parking, shared chargers and visitor access with RWAs and facility managers." },
  { title: "Fleet, delivery & e-rickshaw hubs", body: "Assess regular daily utilisation, parking turnover and charging needs before selecting equipment." },
];

const steps = [
  { title: "Shortlist the site", body: "Confirm ownership or permission, parking access, operating hours and how vehicles enter and exit." },
  { title: "Check demand and competition", body: "Map nearby charging points, EV traffic, customer dwell time and the likely mix of cars, scooters and commercial vehicles." },
  { title: "Verify electrical feasibility", body: "Have a qualified professional check sanctioned load, connection, cable routes, metering and protection requirements." },
  { title: "Compare full costs", body: "Get a written breakdown of charger, installation, civil work, electricity, software/payment fees, maintenance and applicable approvals." },
];

export default function AmritsarEvChargingPage() {
  const whatsapp = "https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20am%20interested%20in%20EV%20charging%20in%20Amritsar.%20My%20site%20is%20a%20market%2Fcommercial%20property%2Fhousing%20society.%20Please%20help%20with%20a%20site%20assessment.";
  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#17212b]">
      

      <section className="bg-[linear-gradient(120deg,#0b2a1e,#0b7652)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">Amritsar, Punjab · Commercial markets · RWAs</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">BRING EV CHARGING TO AMRITSAR’S MARKETS.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">Own or manage a market property, commercial parking area, hotel, shop complex or housing society? MyEVStation helps assess whether your location could support EV charging and which charger type may fit its users, parking and electrical capacity.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} className="inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Discuss my Amritsar site <ArrowRight size={17} /></a>
              <Link href="/society" className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-6 py-4 font-bold text-white">Society charging options <ArrowRight size={17} /></Link>
            </div>
            <p className="mt-4 text-sm text-white/70">Site-specific feasibility first. Revenue and payback are not guaranteed and depend on real utilisation and costs.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8">
            <Store size={34} className="text-[#c7e7d0]" />
            <h2 className="mt-4 text-2xl font-black">Where charging could fit</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/85">
              {["Commercial markets and customer parking", "Hotels, restaurants, malls and destination sites", "Residential societies and apartment parking", "Fleet, delivery and e-rickshaw operating locations"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#c7e7d0]" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Founder credibility" className="border-b border-[#dce8df] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#eaf3ed] text-[#0b5a42]"><ShieldCheck size={26} /></span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.12em] text-[#0b7652]">Founded by Ex-Indian Air Force Professionals</p>
              <p className="mt-1 text-sm font-semibold text-[#172d21]">Discipline. Integrity. Execution.</p>
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-6 text-[#647067]">Our founding team brings four decades of aircraft-maintenance and technical experience to a safety-first approach to EV infrastructure. MyEVStation is an independent venture; this background does not imply official Indian Air Force or Government of India endorsement.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">Local promotion focus</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Amritsar markets and business zones to approach</h2>
          <p className="mt-4 leading-7 text-[#647067]">These are prospecting areas for outreach, not a claim that MyEVStation has installed chargers there. Prioritise sites with authorised parking, clear customer access, suitable power and enough dwell time.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((zone) => <article key={zone.title} className="rounded-2xl border border-[#e0e8e1] bg-white p-6"><MapPin size={24} className="text-[#0b7652]" /><h3 className="mt-4 font-extrabold">{zone.title}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{zone.body}</p></article>)}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">From enquiry to proposal</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Assess the business case before installing</h2>
            <p className="mt-4 leading-7 text-[#647067]">Punjab’s EV policy recognises public and semi-public charging use cases, including commercial destinations and group housing. The exact requirements and approvals for an individual site should be verified before investment.</p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => <article key={step.title} className="rounded-2xl border border-[#e0e8e1] bg-[#fbfcfa] p-6"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-lg font-black text-white">{index + 1}</span><h3 className="mt-4 font-extrabold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{step.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <h2 className="text-3xl font-black sm:text-4xl">Choose equipment for the actual users</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#647067]">Do not choose a charger only by its power rating. Match connector compatibility, dwell time, electrical supply, likely daily sessions and installation cost.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { Icon: CarFront, title: "Cars & destination sites", body: "Evaluate AC charging for longer parking and DC fast charging only where demand and electrical feasibility support it." },
            { Icon: Bike, title: "2W / 3W & commercial users", body: "Assess compatible charging options for scooters, e-rickshaws, delivery vehicles and fleets with regular utilisation." },
            { Icon: Building2, title: "Markets & societies", body: "Coordinate with property owners, market associations, RWAs and facility managers on parking, permissions and billing." },
          ].map(({ Icon, title, body }) => <article key={title} className="rounded-2xl border border-[#e0e8e1] bg-white p-6"><Icon size={28} className="text-[#0b7652]" /><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{body}</p></article>)}
        </div>
        <div className="mt-8 rounded-2xl bg-[#eaf3f5] p-6 sm:p-8">
          <div className="flex items-start gap-4"><ClipboardCheck size={28} className="mt-1 shrink-0 text-[#0b7652]" /><div><h3 className="text-xl font-black">Information to share for a site assessment</h3><p className="mt-3 leading-7 text-[#536774]">Send the market or society name, exact locality, parking availability, site ownership or permission status, approximate electrical load if known, and the vehicle types you expect. Ask for a written estimate separating equipment, installation, electricity, fees, maintenance and any grid upgrades.</p></div></div>
        </div>
      </section>

      <section className="bg-[#123b4b] py-14 text-white sm:py-18">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">For Amritsar property owners and market associations</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Let’s assess your Amritsar location</h2>
          <p className="mt-4 leading-7 text-white/80">Tell us if your site is a market, shop complex, hotel, commercial parking area, fleet hub or housing society. We will start with the site details and suitability discussion.</p>
          <a href={whatsapp} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Enquire on WhatsApp <ArrowRight size={17} /></a>
          <p className="mt-4 text-sm text-white/65">MyEVStation · Amritsar, Punjab · Subject to site feasibility.</p>
        </div>
      </section>
      <section className="border-y border-[#e0e8e1] bg-white py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">Explore MyEVStation</p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">Plan your EV charging project in Punjab</h2>
            <p className="mt-3 leading-7 text-[#647067]">Compare the wider Punjab opportunity, review the charging business model and estimate site-level setup costs before making an investment decision.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/punjab-ev-charging" className="rounded-xl border border-[#cbdacf] px-5 py-3 font-bold text-[#0b5a42] hover:bg-[#f2f7f3]">EV charging across Punjab <ArrowRight size={16} className="ml-1 inline" /></Link>
            <Link href="/ludhiana-ev-charging" className="rounded-xl border border-[#cbdacf] px-5 py-3 font-bold text-[#0b5a42] hover:bg-[#f2f7f3]">EV charging in Ludhiana <ArrowRight size={16} className="ml-1 inline" /></Link>
            <Link href="/jalandhar-ev-charging" className="rounded-xl border border-[#cbdacf] px-5 py-3 font-bold text-[#0b5a42] hover:bg-[#f2f7f3]">EV charging in Jalandhar <ArrowRight size={16} className="ml-1 inline" /></Link>
            <Link href="/ev-charging-calculator" className="rounded-xl border border-[#cbdacf] px-5 py-3 font-bold text-[#0b5a42] hover:bg-[#f2f7f3]">EV charging cost calculator <ArrowRight size={16} className="ml-1 inline" /></Link>
            <Link href="/business-model" className="rounded-xl border border-[#cbdacf] px-5 py-3 font-bold text-[#0b5a42] hover:bg-[#f2f7f3]">Explore the business model <ArrowRight size={16} className="ml-1 inline" /></Link>
          </div>
        </div>
      </section>

      <SeoFaq eyebrow="Amritsar site enquiries" title="Amritsar EV charging: FAQs" items={[
        { question: "Where in Amritsar should I consider an EV charging site?", answer: "Begin with a site-specific review of commercial parking, markets, hotels, destination businesses, housing societies and fleet locations. Areas mentioned on this page are prospecting zones, not a claim that they have no existing chargers or that a site is already approved." },
        { question: "How do I check whether a nearby charging station already exists?", answer: "Check multiple operator apps and public maps, confirm the station is operational, verify connector compatibility and access hours, and visit the area. Do not rely on a single directory or assume a pin on a map is currently usable." },
        { question: "Can a shop, hotel or market association host an EV charger?", answer: "Potentially, if parking access and customer safety can be managed, the property owner authorises installation, demand is plausible and electrical capacity is adequate. The host and operator should agree in writing on investment, revenue, electricity billing, maintenance and liability." },
        { question: "Will MyEVStation help with permissions in Amritsar?", answer: "Yes. We will guide you through the likely permission process, help you prepare the relevant site details and document checklist, and explain when to involve the property owner, RWA or facility manager, electricity provider or local authority. Tell us your locality, property type and whether you already have consent. Exact requirements depend on the site, and final approvals remain with the relevant decision-maker or authority." },
        { question: "What is the total cost and expected monthly income?", answer: "Both depend on the selected charger, civil work, electrical upgrades, connection, software, electricity tariff, utilisation, rent and maintenance. Hardware price alone is not the installed cost, and projected income or payback is not guaranteed." },
        { question: "Is MyEVStation an official Indian Air Force project?", answer: "No. MyEVStation is an independent venture. The founders' prior service background does not represent official Indian Air Force or Government of India endorsement." }
      ]} />

      
    </main>
  );
}
