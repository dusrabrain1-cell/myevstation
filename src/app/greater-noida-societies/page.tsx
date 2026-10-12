import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, MapPin, ShieldCheck, Zap, CarFront, Bike, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Charging for Greater Noida Housing Societies & RWAs",
  description: "Plan EV charging for Greater Noida apartments, gated societies and RWAs. MyEVStation helps assess shared visitor charging, resident parking chargers, 2W/3W charging and AC car chargers.",
  alternates: { canonical: "/greater-noida-societies" },
  keywords: [
    "EV charging Greater Noida society",
    "EV charger for housing society Greater Noida",
    "EV charging Noida Extension",
    "EV charging for RWA Greater Noida",
    "apartment EV charging installation Greater Noida",
    "EV charger for society parking",
  ],
};

const areas = [
  "Greater Noida West (Noida Extension)",
  "Pari Chowk and nearby residential sectors",
  "Alpha, Beta, Gamma and surrounding sectors",
  "Knowledge Park and Techzone residential catchments",
  "Yamuna Expressway residential and mixed-use developments",
];

const steps = [
  { title: "Understand society demand", body: "Discuss the number of EV owners, visitor charging needs, parking allocation and expected charging hours." },
  { title: "Check electrical readiness", body: "Review sanctioned load, distribution boards, metering, cable routes, earthing and protection requirements with qualified professionals." },
  { title: "Choose the right setup", body: "Compare suitable smart sockets, AC car chargers and 2W/3W options. Higher-power DC charging is considered only where demand, space and electrical capacity support it." },
  { title: "Get an itemised proposal", body: "Ask for equipment, installation, cabling, civil work, load upgrades, software/payment fees and ongoing maintenance to be shown separately." },
];

export default function GreaterNoidaSocietiesPage() {
  const whatsapp = "https://wa.me/919625670132?text=Hello%20MyEVStation%2C%20I%20represent%20a%20housing%20society%2FRWA%20in%20Greater%20Noida.%20I%20want%20an%20EV%20charging%20site%20assessment.%20Please%20share%20the%20next%20steps.";
  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#17212b]">
      <header className="border-b border-[#e2e8e1] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <Link href="/" className="flex items-center gap-3" aria-label="MyEVStation home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-white"><Zap size={22} fill="currentColor" /></span>
            <span className="leading-tight"><span className="block text-xl font-extrabold tracking-tight text-[#172d21]">my<span className="text-[#e87522]">EV</span>Station</span><span className="block text-[9px] font-bold uppercase tracking-[.16em] text-[#64736d]">Founded by Ex-Indian Air Force</span></span>
          </Link>
          <Link href="/society" className="inline-flex items-center gap-2 text-sm font-bold text-[#526158]"><ArrowLeft size={16} /> Society solutions</Link>
        </div>
      </header>

      <section className="bg-[linear-gradient(120deg,#0b2a1e,#0b7652)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">Greater Noida · Housing societies · RWAs</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">MAKE YOUR GREATER NOIDA SOCIETY EV-READY.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">Planning EV charging in an apartment complex? MyEVStation helps your RWA or society management compare resident parking chargers, shared visitor charging and suitable options for electric two-wheelers, three-wheelers and cars—starting with a site and electrical-readiness assessment.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} className="inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Request a society assessment <ArrowRight size={17} /></a>
              <Link href="/society" className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-6 py-4 font-bold text-white">Compare charger options <ArrowRight size={17} /></Link>
            </div>
            <p className="mt-4 text-sm text-white/70">No blanket ROI promise: final recommendations depend on site survey, load, installation scope and actual usage.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8">
            <Building2 size={34} className="text-[#c7e7d0]" />
            <h2 className="mt-4 text-2xl font-black">A practical plan for your RWA</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/85">
              {[
                "Dedicated charging for allotted resident parking, where feasible",
                "Shared chargers for guests and common parking areas",
                "Charging options for compatible electric scooters and cars",
                "Clear cost breakdown before the society commits",
              ].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#c7e7d0]" />{item}</li>)}
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
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">Local focus</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Society EV charging across Greater Noida</h2>
          <p className="mt-4 leading-7 text-[#647067]">We are targeting residential communities across Greater Noida and Greater Noida West. These are service focus areas for enquiries—not a claim that a charger is already installed at each location. Availability and feasibility are confirmed individually.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => <article key={area} className="flex gap-3 rounded-2xl border border-[#e0e8e1] bg-white p-5"><MapPin size={22} className="mt-1 shrink-0 text-[#0b7652]" /><div><h3 className="font-extrabold">{area}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">Ask for a society-specific review of parking, access, demand and electrical capacity.</p></div></article>)}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">How it works</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">From RWA discussion to a site-ready proposal</h2>
            <p className="mt-4 leading-7 text-[#647067]">Start small if demand is still developing, then plan expansion around verified usage and available power.</p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => <article key={step.title} className="rounded-2xl border border-[#e0e8e1] bg-[#fbfcfa] p-6"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-lg font-black text-white">{index + 1}</span><h3 className="mt-4 font-extrabold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{step.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <h2 className="text-3xl font-black sm:text-4xl">Charging options to evaluate</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#647067]">The best charger depends on vehicle compatibility, dwell time, parking layout and sanctioned load. Equipment price is not the same as the total installed cost.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { Icon: Bike, title: "2W / 3W charging", body: "Consider compatible low-power charging for electric scooters, e-rickshaws or delivery fleets." },
            { Icon: CarFront, title: "AC car charging", body: "For cars parked for several hours, evaluate compatible 7.4 kW, 11 kW or 22 kW AC equipment." },
            { Icon: ShieldCheck, title: "Safety & approvals", body: "Plan qualified electrical checks, RWA permissions, safe cable routing, protection and metering before installation." },
          ].map(({ Icon, title, body }) => <article key={title} className="rounded-2xl border border-[#e0e8e1] bg-white p-6"><Icon size={28} className="text-[#0b7652]" /><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{body}</p></article>)}
        </div>
        <div className="mt-8 rounded-2xl bg-[#eaf3f5] p-6 sm:p-8">
          <div className="flex items-start gap-4"><ClipboardCheck size={28} className="mt-1 shrink-0 text-[#0b7652]" /><div><h3 className="text-xl font-black">What to request in writing</h3><p className="mt-3 leading-7 text-[#536774]">Ask for an itemised proposal covering charger model and warranty, installation and cabling, civil work, electrical upgrades, metering, payment/software fees, maintenance, electricity billing responsibility and the assumptions behind any revenue estimate. Society rules and applicable electrical requirements should be confirmed before work starts.</p></div></div>
        </div>
      </section>

      <section className="bg-[#123b4b] py-14 text-white sm:py-18">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c7e7d0]">For Greater Noida RWAs and facility managers</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Discuss EV charging for your society</h2>
          <p className="mt-4 leading-7 text-white/80">Send your society name or sector, approximate number of parking spaces, EV types and whether charging is for residents or visitors. We can use that information to start a feasibility discussion.</p>
          <a href={whatsapp} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">Start on WhatsApp <ArrowRight size={17} /></a>
          <p className="mt-4 text-sm text-white/65">MyEVStation · India · Society feasibility is subject to site review.</p>
        </div>
      </section>
      <footer className="bg-[#081f16] px-5 py-8 text-center text-sm text-white/60">© {new Date().getFullYear()} MyEVStation · <Link href="/society" className="text-white underline">All society solutions</Link> · <Link href="/" className="text-white underline">Home</Link></footer>
    </main>
  );
}
