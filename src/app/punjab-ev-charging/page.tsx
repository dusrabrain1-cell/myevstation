import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import SeoBreadcrumbJsonLd from "@/components/custom/SeoBreadcrumbJsonLd";
import Link from "next/link";
import SeoFaq from "@/components/custom/SeoFaq";
import { whatsappHref } from "@/lib/constants";
import { ArrowRight, MapPin, Building2, CheckCircle2, CarFront, Truck, ClipboardCheck, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Charging Station in Punjab | City-Wise Site Opportunities",
  description: "Looking for an EV charging station in Punjab or planning to set one up? Explore city-wise opportunities in Amritsar, Ludhiana, Jalandhar, Mohali and more. Assess sites, power feasibility and business models with MyEVStation.",
  alternates: { canonical: "/punjab-ev-charging" },
  keywords: [
    "EV charging station in Punjab",
    "EV charging stations in Punjab",
    "set up EV charging station in Punjab",
    "EV charging business Punjab",
    "EV charging station Punjab",
    "EV charging station business Punjab",
    "EV charger Amritsar",
    "EV charging station Ludhiana",
    "EV charging Jalandhar",
    "EV charger Bathinda",
    "EV charging station Hoshiarpur",
    "EV charging station Firozpur",
    "EV charging for Punjab housing societies",
    "EV charging station franchise Punjab",
  ],

  ...pageSocialMetadata("EV Charging Station in Punjab | City-Wise Site Opportunities", "Looking for an EV charging station in Punjab or planning to set one up? Explore city-wise opportunities in Amritsar, Ludhiana, Jalandhar, Mohali and more. Assess sites, power feasibility and business models with MyEVStation.", "/punjab-ev-charging"),
};

const cityGroups = [
  {
    region: "Majha",
    cities: [
      { name: "Amritsar", focus: "Markets, hotels, commercial parking, tourist and visitor destinations, housing societies." },
      { name: "Gurdaspur", focus: "Town-centre parking, hotels, dealerships, fleet depots and intercity travel stops." },
      { name: "Pathankot", focus: "Highway-facing commercial sites, hotels, fleet parking and suitable routes toward Jammu and Himachal." },
      { name: "Tarn Taran", focus: "Market parking, commercial properties, e-rickshaw and delivery-vehicle operating areas." },
    ],
  },
  {
    region: "Doaba",
    cities: [
      { name: "Jalandhar", focus: "Commercial complexes, hospitals, hotels, shopping areas, fleet sites and apartment parking." },
      { name: "Hoshiarpur", focus: "Priority for field verification: markets, dealerships, hotels, housing communities and intercity stops." },
      { name: "Kapurthala", focus: "Town-centre markets, institutional and commercial parking, fleet and residential sites." },
      { name: "Phagwara", focus: "Commercial parking, highway-adjacent businesses, hotels and fleet routes." },
    ],
  },
  {
    region: "Malwa",
    cities: [
      { name: "Ludhiana", focus: "Industrial areas, business parks, logistics depots, shopping destinations and housing societies." },
      { name: "Bathinda", focus: "Transport hubs, commercial parking, hotels, markets and fleet / logistics properties." },
      { name: "Patiala", focus: "Markets, hospitals, education-area parking, hotels and residential communities." },
      { name: "Sangrur & Barnala", focus: "Market parking, dealerships, hotels, fleet yards and suitable highway stops." },
      { name: "Moga", focus: "Market areas, commercial parking, e-rickshaw and delivery fleets, and intercity corridors." },
      { name: "Firozpur & Fazilka", focus: "Priority for field verification: town markets, fleet depots, commercial parking and intercity routes." },
      { name: "Faridkot, Muktsar & Mansa", focus: "Priority for field verification: markets, hospitals, hotels, transport operators and fleet parking." },
    ],
  },
  {
    region: "Tricity & border catchments",
    cities: [
      { name: "Mohali", focus: "Office parks, malls, hotels, premium societies, commercial parking and fleet locations." },
      { name: "Zirakpur", focus: "Hotels, residential complexes, shopping destinations and highway-facing commercial properties." },
      { name: "Rajpura", focus: "Industrial and logistics sites, highway businesses, fuel stations and commercial parking." },
    ],
  },
];

const siteTypes = [
  { Icon: Store, title: "Markets & commercial properties", body: "Approach market associations, shopping complexes, hotels, restaurants, hospitals and paid-parking operators." },
  { Icon: Building2, title: "Housing societies & apartments", body: "Work with RWAs and facility managers on resident parking and shared visitor charging." },
  { Icon: Truck, title: "Fleets & transport hubs", body: "Assess e-rickshaws, delivery fleets, taxis and commercial vehicles with recurring daily charging demand." },
  { Icon: CarFront, title: "Highway & destination sites", body: "Evaluate fuel stations, hotels and rest stops where access, dwell time and electrical supply are suitable." },
];


export default function PunjabEvChargingPage() {
  const whatsapp = whatsappHref("Hello MyEVStation, I am enquiring from the Punjab EV charging page. Please help assess my city, property and charging demand.");
  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#17212b]">
      

      <section className="bg-[linear-gradient(120deg,#0b2a1e,#0b7652)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">Punjab · City-wise site development</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">EV CHARGING STATION OPPORTUNITIES ACROSS PUNJAB.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">Looking to set up an EV charging station in Punjab, host a charger at your property or explore a charging business? MyEVStation is building a Punjab-wide pipeline of potential sites across Amritsar, Ludhiana, Jalandhar, Mohali, Patiala and other markets. We assess local demand, existing chargers, electrical feasibility and site access before recommending a project.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} className="inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Suggest a site in Punjab <ArrowRight size={17} /></a>
              <Link href="/amritsar-ev-charging" className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-6 py-4 font-bold text-white">Amritsar campaign <ArrowRight size={17} /></Link>
            </div>
            <p className="mt-4 text-sm text-white/70">Important: a city or locality shown below is a prospecting area, not a confirmed charging-station-free zone. We verify current maps, connectors, access and site conditions before investment decisions.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8">
            <MapPin size={34} className="text-[#c7e7d0]" />
            <h2 className="mt-4 text-2xl font-black">Look for the local gap—not just the city name</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/85">
              {["EV dealerships and fleet activity nearby", "Few verified public chargers within a practical drive", "Suitable parking and safe vehicle access", "Power availability and a viable operating model"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#c7e7d0]" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-5 rounded-3xl border border-[#dce8df] bg-white p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0b7652]">Planning a Punjab project?</p>
            <h2 className="mt-2 text-2xl font-black">Understand the investment before shortlisting a site</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#647067]">Read our practical guide to charger costs, electrical work, operating models and site-level revenue assumptions. Use it alongside local checks—not as a substitute for a technical survey or written quotations.</p>
          </div>
          <Link href="/blogs/blog/ev-charging-station-business-punjab-investment-locations-partnerships" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b5a42] px-5 py-4 text-sm font-extrabold text-white">Read Punjab investment guide <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10">
        <div className="rounded-3xl border border-[#dce8df] bg-white p-6 sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0b7652]">Explore local and planning resources</p>
          <h2 className="mt-2 text-2xl font-black">Plan your next step with MyEVStation</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#647067]">Compare the commercial model, estimate project assumptions and explore our city-specific information before requesting a site assessment.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/amritsar-ev-charging" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">EV charging in Amritsar <ArrowRight size={16} className="ml-1 inline" /></Link>
            <Link href="/ludhiana-ev-charging" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">EV charging in Ludhiana <ArrowRight size={16} className="ml-1 inline" /></Link>
            <Link href="/jalandhar-ev-charging" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">EV charging in Jalandhar <ArrowRight size={16} className="ml-1 inline" /></Link>
            <Link href="/ev-charging-calculator" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">EV charging investment calculator <ArrowRight size={16} className="ml-1 inline" /></Link>
            <Link href="/business-model" className="rounded-xl border border-[#e0e8e1] p-4 font-bold text-[#0b5a42] hover:bg-[#f7f9f6]">Explore the business model <ArrowRight size={16} className="ml-1 inline" /></Link>
          </div>
        </div>
      </section>

      <section aria-label="Founder credibility" className="border-b border-[#dce8df] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#eaf3ed] text-[#0b5a42]"><CheckCircle2 size={26} /></span>
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
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">City-wise promotion map</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Target all major Punjab markets</h2>
          <p className="mt-4 leading-7 text-[#647067]">Use this as a field-sales and digital-promotion shortlist. It is not a live inventory of charging stations. Before labelling any location underserved, cross-check public maps and operator apps, visit the area, verify connector type and access hours, and speak to local EV dealers or fleet operators.</p>
        </div>
        <div className="mt-8 space-y-8">
          {cityGroups.map((group) => <section key={group.region} aria-label={group.region}><h3 className="text-2xl font-black">{group.region}</h3><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{group.cities.map((city) => <article key={city.name} className="rounded-2xl border border-[#e0e8e1] bg-white p-5"><div className="flex items-start gap-3"><MapPin size={22} className="mt-1 shrink-0 text-[#0b7652]" /><div><h4 className="font-extrabold">{city.name}</h4><p className="mt-2 text-sm leading-6 text-[#667168]">{city.focus}</p></div></div></article>)}</div></section>)}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">Where to promote</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Four customer segments to approach</h2>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteTypes.map(({ Icon, title, body }) => <article key={title} className="rounded-2xl border border-[#e0e8e1] bg-[#fbfcfa] p-6"><Icon size={28} className="text-[#0b7652]" /><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div><h2 className="text-3xl font-black sm:text-4xl">How we verify an underserved location</h2><ul className="mt-6 space-y-4">{["Map existing chargers and confirm they are operational, accessible and compatible.","Compare nearby EV dealerships, registrations where available, fleet routes and commercial activity.","Check parking rights, hours, grid capacity, installation and maintenance costs.","Estimate utilisation conservatively; do not assume every EV nearby will use a public charger.","Only then shortlist the site for a pilot or investment proposal."].map((item) => <li key={item} className="flex gap-3 leading-7 text-[#536774]"><CheckCircle2 size={20} className="mt-1 shrink-0 text-[#0b7652]" />{item}</li>)}</ul></div>
          <div className="rounded-3xl bg-[#eaf3f5] p-7 sm:p-9"><ClipboardCheck size={32} className="text-[#0b7652]" /><h3 className="mt-4 text-2xl font-black">Send us a potential site</h3><p className="mt-3 leading-7 text-[#536774]">Share the city and locality, property type, parking spaces, nearby EV activity, site permission status and known power availability. MyEVStation can start a feasibility discussion and identify the information needed for a written proposal.</p><a href={whatsapp} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0b5a42] px-6 py-4 font-extrabold text-white">Submit site details <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section className="bg-[#123b4b] py-14 text-white sm:py-18">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">Punjab-wide property owners, RWAs and fleet operators</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Help identify Punjab’s next charging site</h2>
          <p className="mt-4 leading-7 text-white/80">Whether you own a market property in Amritsar, a commercial site in Ludhiana, a society parking area in Mohali or a fleet site in a smaller city, share the details for an initial assessment.</p>
          <a href={whatsapp} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Contact MyEVStation <ArrowRight size={17} /></a>
        </div>
      </section>
      <SeoFaq eyebrow="Punjab site development" title="Punjab EV charging: frequently asked questions" items={[
        { question: "Which Punjab cities is MyEVStation targeting?", answer: "The current prospecting plan covers Majha, Doaba, Malwa and Tricity catchments, including Amritsar, Jalandhar, Ludhiana, Bathinda, Patiala, Mohali, Zirakpur, Hoshiarpur, Pathankot, Firozpur, Fazilka, Faridkot, Muktsar, Mansa and other listed markets. These are outreach areas, not a verified list of places with no chargers." },
        { question: "Which areas in Punjab have no EV charging stations?", answer: "We cannot responsibly label an entire city or locality as having no chargers without current field verification. Public directories can be incomplete. Check operator apps and maps, connector compatibility, opening hours, public access and operational status, then visit the proposed location before calling it underserved." },
        { question: "What types of locations are suitable for EV charging in Punjab?", answer: "Potential sites include authorised commercial parking, markets, hotels, housing societies, industrial properties, fleet depots, e-rickshaw or delivery hubs and highway-facing businesses. Suitability depends on demand, dwell time, access, property permission and electrical capacity." },
        { question: "Can MyEVStation help me get permission for a charging station in Punjab?", answer: "Yes. We can guide you through the likely permission steps, help prepare a document checklist and explain who may need to approve the proposal—such as the property owner, RWA or facility manager and the relevant electricity provider or authority. Share your city, exact locality, property type and permission status so we can discuss the next steps. Final approval depends on the competent authority and site-specific requirements." },
        { question: "Does MyEVStation guarantee earnings or provide government subsidies?", answer: "No earnings or subsidy is guaranteed. Revenue depends on utilisation and costs; subsidy and policy eligibility must be verified against current official rules and the specific applicant and project. Request written commercial assumptions and confirm any incentive with the relevant authority." },
        { question: "Are MyEVStation's founders officially representing the Indian Air Force?", answer: "No. MyEVStation is an independent venture. Founder military service and technical experience are personal professional credentials and do not imply official Indian Air Force or Government of India endorsement." }
      ]} />

      
      <SeoBreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Punjab EV Charging", path: "/punjab-ev-charging" }]} />
    </main>
  );
}
