import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Charging Station Investment Guide India",
  description:
    "A practical guide to assessing EV charging station investment in India: site feasibility, charger selection, electricity costs, utilisation, operating expenses and questions to ask before signing.",
  alternates: { canonical: "/ev-charging-investment-guide" },
};

const checklist = [
  "Confirm sanctioned electrical load, transformer capacity and upgrade cost with the local electricity distribution company.",
  "Map parking access, vehicle movement, entry and exit, visibility, safety and operating hours.",
  "Estimate demand using nearby housing, workplaces, fleets, highways and existing charging alternatives—not population alone.",
  "Compare charger power and connector compatibility against the vehicles likely to use the site.",
  "Request an itemised quote covering equipment, installation, cabling, civil works, taxes, software, payment fees and maintenance.",
  "Agree in writing who pays electricity bills, manages the station, handles repairs, sets tariffs and owns customer relationships.",
];

const faqs = [
  {
    q: "How much does an EV charging station cost in India?",
    a: "Cost depends on charger type and quantity, electrical capacity, cabling, civil work, approvals and site conditions. A charger equipment price is not the same as a complete installed-project cost. Ask for a site-specific, itemised proposal.",
  },
  {
    q: "Can I start an EV charging station without owning land?",
    a: "Potentially. A host-site or partner-site arrangement may be possible if a suitable property owner and commercial agreement are in place. Responsibilities, revenue sharing, electricity billing, access and termination terms should be documented before investing.",
  },
  {
    q: "Can an EV charging station guarantee monthly income?",
    a: "No responsible estimate can guarantee utilisation or income. Actual results depend on charging demand, local competition, tariffs, electricity costs, uptime, fees, maintenance and the final commercial agreement.",
  },
  {
    q: "What should a site assessment include?",
    a: "It should review access and parking, electrical load, connection and upgrade requirements, likely demand, charger mix, installation scope, permissions, operating model and a transparent financial estimate with assumptions.",
  },
];

export default function EVChargingInvestmentGuide() {
  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#17212b]">
      <header className="border-b border-[#e1e8e0] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/" aria-label="MyEVStation home" className="font-extrabold tracking-tight text-[#172d21]">
            my<span className="text-[#e87522]">EV</span>Station
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.16em] text-[#64736d]">Founded by Ex-Indian Air Force</span>
          </Link>
          <Link href="/#investment" className="rounded-xl bg-[#0b5a42] px-4 py-3 text-sm font-bold text-white">Estimate & enquire</Link>
        </div>
      </header>

      <section className="bg-[#0b2a1e] text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffb181]">Practical planning guide</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">How to assess an EV charging station investment in India</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">A useful decision starts with the site, electrical feasibility and expected charging demand—not with a promised return. Use this guide to compare the main cost drivers and prepare better questions before committing capital.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/with-land" className="inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-5 py-3 font-extrabold">Have a site? <ArrowRight size={17}/></Link>
            <Link href="/without-land" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold">Explore partner-site model <ArrowRight size={17}/></Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
        <section>
          <h2 className="text-2xl font-black sm:text-3xl">1. Start with site feasibility</h2>
          <p className="mt-4 leading-7 text-[#526158]">A technically suitable location needs safe vehicle access, usable parking, reliable power and a plausible reason for drivers to stop and charge. A high-traffic road by itself does not prove that a site will attract charging sessions. Consider dwell time, nearby destinations, fleet schedules, competing chargers and whether drivers can enter and leave conveniently.</p>
          <p className="mt-3 leading-7 text-[#526158]">Electrical feasibility is especially important for DC fast charging. Confirm the available sanctioned load, the connection process and any transformer, cabling or load-upgrade costs before treating an equipment quote as the project budget.</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black sm:text-3xl">2. Understand the full cost—not only the charger price</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["Equipment", "Charger, connector configuration, communications and any required protection equipment."],
              ["Electrical & civil work", "Cabling, panels, earthing, foundations, trenching, signage and load upgrades where required."],
              ["Operations", "Electricity, charging-management software, payment charges, internet, maintenance and repairs."],
              ["Commercial terms", "Rent or revenue share, taxes, insurance, staffing and the responsibilities assigned to each partner."],
            ].map(([title, body]) => <div key={title} className="rounded-2xl border border-[#e1e8e0] bg-white p-5"><h3 className="font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#647067]">{body}</p></div>)}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black sm:text-3xl">3. Estimate revenue with explicit assumptions</h2>
          <p className="mt-4 leading-7 text-[#526158]">A simple model begins with the number of charging sessions, average energy delivered per session and the customer tariff. Then subtract electricity and other variable costs, payment or software fees, rent or revenue share, maintenance and other operating expenses. Show conservative, base and optimistic utilisation scenarios rather than presenting one monthly figure as certain.</p>
          <div className="mt-5 rounded-2xl border border-[#d9e7dc] bg-white p-5 sm:p-6">
            <p className="font-extrabold text-[#174b34]">A useful model should show</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#526158]">
              {["Assumptions for sessions per day and kWh per session","Customer tariff and actual electricity cost per kWh","All software, transaction, rent and maintenance charges","Installation and electrical upgrades as separate capital costs","Sensitivity to low utilisation and equipment downtime","A payback estimate based on the resulting cash flow—not a promise"].map(item => <li key={item} className="flex gap-2"><CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0b7652]"/>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black sm:text-3xl">4. Choose a model that fits your situation</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-white p-5"><h3 className="font-extrabold">You own land or commercial property</h3><p className="mt-2 text-sm leading-6 text-[#647067]">Begin with access, electrical capacity, parking layout and local demand. Ask for a site survey and a written proposal that separates equipment from installation and ongoing costs.</p><Link className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-[#0b7652]" href="/with-land">Read the landowner guide <ArrowRight size={16}/></Link></div>
            <div className="rounded-2xl bg-white p-5"><h3 className="font-extrabold">You do not own a site</h3><p className="mt-2 text-sm leading-6 text-[#647067]">Explore whether a host-property partnership is available. Confirm the host, capital responsibilities, revenue formula, operations and exit conditions in writing.</p><Link className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-[#0b7652]" href="/without-land">Read the no-land model <ArrowRight size={16}/></Link></div>
            <div className="rounded-2xl bg-white p-5"><h3 className="font-extrabold">You represent a housing society or RWA</h3><p className="mt-2 text-sm leading-6 text-[#647067]">Match charging to residents’ vehicle types and parking arrangements. Review electrical load, metering, billing, access rules and how installation costs will be allocated.</p><Link className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-[#0b7652]" href="/society">Read the society guide <ArrowRight size={16}/></Link></div>
            <div className="rounded-2xl bg-white p-5"><h3 className="font-extrabold">You are an ex-serviceman exploring a business</h3><p className="mt-2 text-sm leading-6 text-[#647067]">Assess the opportunity on the same commercial and technical evidence as any other business. MyEVStation is a private initiative and this page does not imply Armed Forces or government endorsement.</p><Link className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-[#0b7652]" href="/ex-servicemen">Read the ex-servicemen opportunity <ArrowRight size={16}/></Link></div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black sm:text-3xl">5. Questions to settle before signing</h2>
          <ul className="mt-5 space-y-3">
            {checklist.map(item => <li key={item} className="flex gap-3 rounded-xl border border-[#e1e8e0] bg-white p-4 text-sm leading-6 text-[#526158]"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#0b7652]"/>{item}</li>)}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-5 space-y-3">{faqs.map(item => <details key={item.q} className="group rounded-xl border border-[#e1e8e0] bg-white p-5"><summary className="cursor-pointer font-extrabold">{item.q}</summary><p className="mt-3 text-sm leading-6 text-[#647067]">{item.a}</p></details>)}</div>
        </section>

        <aside className="mt-10 rounded-2xl border border-[#d9e7dc] bg-[#edf6ee] p-5 sm:p-7">
          <ShieldCheck size={28} className="text-[#0b7652]"/>
          <h2 className="mt-3 text-xl font-black">Important: treat every projection as an estimate</h2>
          <p className="mt-3 text-sm leading-6 text-[#526158]">Equipment prices, operating assumptions and illustrative cash flows are not a guarantee of demand, profit or payback. Site feasibility, approvals, electricity costs, final quotations and signed commercial agreements can materially change the outcome. Review the assumptions and obtain written scope and responsibilities before investing.</p>
          <Link href="/#investment" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0b5a42] px-5 py-3 font-extrabold text-white">Use the planning calculator <ArrowRight size={17}/></Link>
        </aside>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a }
          }))
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myevstation-9rj8.vercel.app/" },
            { "@type": "ListItem", position: 2, name: "EV Charging Investment Guide", item: "https://myevstation-9rj8.vercel.app/ev-charging-investment-guide" }
          ]
        }
      ]) }} />
      <footer className="bg-[#081f16] px-5 py-8 text-center text-sm text-white/65">© {new Date().getFullYear()} MyEVStation · <Link href="/" className="underline">Home</Link> · <span className="inline-flex items-center gap-1"><MapPin size={14}/> India</span> · <span className="inline-flex items-center gap-1"><Zap size={14}/> EV charging</span></footer>
    </main>
  );
}
