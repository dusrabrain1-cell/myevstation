import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, MapPin, PlugZap, Users } from "lucide-react";
import { SITE, whatsappHref } from "@/lib/constants";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import { fitMetaDescription, fitMetaTitle } from "@/lib/seo-metadata";

const title = "EV Station Setup Company in India | MyEVStation";
const description = "Looking for an EV station setup company in India? MyEVStation helps assess sites, plan AC and DC charger installations and guide societies, businesses, landowners and partners through setup.";

export const metadata: Metadata = {
  title: fitMetaTitle(title),
  description: fitMetaDescription(description),
  alternates: { canonical: "/ev-station-setup-company-india" },
  ...pageSocialMetadata(title, description, "/ev-station-setup-company-india"),
};

const faqs = [
  { q: "What does an EV station setup company do?", a: "An EV station setup partner can help assess a location, review power and parking requirements, recommend suitable AC or DC charging equipment, coordinate installation and explain the operating model. The exact scope depends on the site and agreed proposal." },
  { q: "Can MyEVStation assess my property before I invest?", a: "You can share the location and basic site details for an initial discussion. A proper feasibility assessment may require a site visit and checks for power availability, access, parking, permissions and expected vehicle demand." },
  { q: "Do I need to own land to set up EV charging?", a: "Not always. Depending on the model, a suitable host location or a partnership with a property owner may be possible. Commercial terms, permissions and responsibilities must be agreed before proceeding." },
  { q: "Does MyEVStation install both AC and DC chargers?", a: "MyEVStation can help evaluate AC and DC charger options for the intended use. Charger capacity and configuration should be selected only after reviewing vehicle mix, dwell time, sanctioned load and site conditions." },
  { q: "Where does MyEVStation operate?", a: "MyEVStation is focused on opportunities across India, with particular attention to Delhi NCR and Punjab. Share your city and site details to confirm whether support is available for your project." },
];

export default function EvStationSetupCompanyIndiaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EV Charging Station Setup Support",
    serviceType: "EV charging station site assessment and setup coordination",
    provider: { "@type": "Organization", name: "MyEVStation", url: SITE.url },
    areaServed: { "@type": "Country", name: "India" },
    url: `${SITE.url}/ev-station-setup-company-india`,
    description,
  };

  return (
    <main className="bg-white text-[#172d21]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative overflow-hidden bg-[#0b5a42] text-white">
        <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffd0a8]">EV charging infrastructure · India</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Looking for an EV Station Setup Company in India?</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">Plan your EV charging project with a practical partner for site assessment, charger selection and setup coordination. Explore solutions for commercial properties, housing societies, landowners, fleets and partner locations.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref("Hello MyEVStation, I am looking for an EV charging station setup company in India. Please help me assess my location and project requirements.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e87522] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#cf6218]">Discuss your site on WhatsApp <ArrowRight size={17}/></a>
              <Link href="/ev-charging-calculator" className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10">Explore the calculator</Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/65">Project suitability, costs, timelines and commercial returns depend on site conditions, approvals, utility capacity and written agreements.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-extrabold">Start with the right questions</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/90">
              {["Where will the charging station be located?","What is the available electrical load?","Will drivers need AC destination charging or DC fast charging?","Who will own, operate and maintain the equipment?","What permissions and commercial terms apply?"].map(item=><li key={item} className="flex gap-3"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#ffd0a8]"/><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#d96a1b]">What we help you evaluate</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">EV charging station setup, from site discussion to operating plan</h2><p className="mt-4 leading-7 text-[#647067]">A good setup starts with the use case—not simply choosing the highest-capacity charger. MyEVStation helps prospective site partners understand the key decisions before committing capital.</p></div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[{icon:MapPin,title:"Site suitability",body:"Review location, vehicle access, parking layout, dwell time and potential charging demand."},{icon:PlugZap,title:"Charger planning",body:"Compare AC and DC options against vehicle mix, power availability and intended usage."},{icon:Building2,title:"Installation planning",body:"Identify electrical, civil, connectivity, safety and permission requirements for the location."},{icon:Users,title:"Operating model",body:"Discuss ownership, host-site partnerships, maintenance responsibilities and customer access."}].map(item=><article key={item.title} className="rounded-2xl border border-[#e2e9e3] bg-[#f8faf7] p-6"><item.icon size={25} className="text-[#0b5a42]"/><h3 className="mt-4 text-lg font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#647067]">{item.body}</p></article>)}
        </div>
      </section>

      <section className="bg-[#f4f7f3] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#d96a1b]">Who can enquire?</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">EV charging solutions for different types of locations</h2></div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[{title:"Commercial properties and businesses",body:"Evaluate charging for offices, retail destinations, hotels, workplaces, fleets and other commercial sites.",href:"/commercial-ev-charging",label:"Commercial charging"},{title:"Housing societies and RWAs",body:"Review resident and visitor charging needs, parking allocation, electrical capacity and suitable AC/DC options.",href:"/society",label:"Society charging"},{title:"Landowners and property partners",body:"Explore whether a plot, parking area or existing property may be suitable for a public or destination charging location.",href:"/with-land",label:"For landowners"},{title:"Partners without land",body:"Discuss host-location partnerships and the responsibilities, costs and agreements involved in a no-land model.",href:"/without-land",label:"No-land model"}].map(item=><article key={item.title} className="rounded-2xl border border-[#e0e8e0] bg-white p-6"><h3 className="text-lg font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#647067]">{item.body}</p><Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#0b5a42] hover:text-[#e87522]">{item.label}<ArrowRight size={15}/></Link></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#d96a1b]">A clear process</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to get started</h2><p className="mt-4 leading-7 text-[#647067]">Share a few details first. The next step should be based on your actual site and requirements.</p><a href={whatsappHref("Hello MyEVStation, I want to discuss setting up an EV charging station. My city and site details are: ")} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0b5a42] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#084632]">Share your location <ArrowRight size={16}/></a></div>
          <ol className="space-y-4">{[{n:"01",t:"Share your location",b:"Send your city, site address or Google Maps pin, and tell us whether you own or manage the property."},{n:"02",t:"Describe the use case",b:"Tell us whether the site is a society, commercial property, fleet depot, public location or investment opportunity."},{n:"03",t:"Review site requirements",b:"Discuss parking, power connection, sanctioned load, expected users, access and permissions."},{n:"04",t:"Agree the scope before proceeding",b:"Confirm equipment, installation scope, costs, operating responsibilities, timelines and commercial terms in writing."}].map(step=><li key={step.n} className="flex gap-4 rounded-2xl border border-[#e2e9e3] p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e8f1eb] text-sm font-black text-[#0b5a42]">{step.n}</span><div><h3 className="font-extrabold">{step.t}</h3><p className="mt-1 text-sm leading-6 text-[#647067]">{step.b}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="bg-[#0b5a42] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-4xl px-5 text-center"><h2 className="text-3xl font-black tracking-tight sm:text-4xl">Planning an EV charging station in India?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">Speak with MyEVStation about your location, charger requirements and next steps. Share your city and site details to begin the discussion.</p><a href={whatsappHref("Hello MyEVStation, I am exploring an EV charging station setup. Please contact me to discuss the location, charger requirements and next steps.")} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#e87522] px-7 py-3.5 text-sm font-extrabold text-white hover:bg-[#cf6218]">Contact MyEVStation <ArrowRight size={17}/></a><p className="mt-4 text-xs text-white/65">Call / WhatsApp: {SITE.phone}</p></div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
        <h2 className="text-3xl font-black tracking-tight">Frequently asked questions</h2>
        <div className="mt-7 divide-y divide-[#e2e9e3] border-y border-[#e2e9e3]">{faqs.map(f=><details key={f.q} className="py-5"><summary className="cursor-pointer list-none pr-5 font-extrabold marker:content-none">{f.q}</summary><p className="mt-3 text-sm leading-7 text-[#647067]">{f.a}</p></details>)}</div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org", "@type":"FAQPage", mainEntity:faqs.map(f=>({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a }})) }) }} />
      </section>
    </main>
  );
}
