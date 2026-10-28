import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import { whatsappHref } from "@/lib/constants";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Smartphone, Wrench, Wallet, Zap, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "No-Land EV Charging Station Investment Model",
  description: "Explore MyEVStation's no-land EV charging station model, indicative Starter and Growth packages, operating assumptions and site requirements in India.",
  alternates: { canonical: "/without-land" },

  ...pageSocialMetadata("No-Land EV Charging Station Investment Model", "Explore MyEVStation's no-land EV charging station model, indicative Starter and Growth packages, charger prices, operating assumptions and site requirements in India.", "/without-land"),
};

const plans = [
 {name:"Starter Node",price:"₹3.75 lakh",units:"3 dual-gun DC chargers",guns:"6 charging connectors",monthly:"₹9,280",annual:"₹1,11,360",costs:"₹8,000 / month",energy:"6,912 kWh / month"},
 {name:"Growth Node",price:"₹5 lakh",units:"4 dual-gun DC chargers",guns:"8 charging connectors",monthly:"₹14,040",annual:"₹1,68,480",costs:"₹9,000 / month",energy:"9,216 kWh / month"}
];


export default function WithoutLandPage(){
 return <main className="min-h-screen bg-[#f7f9f6] text-[#17212b]">
  
  <section className="bg-[#0b2a1e] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffb181]">No-land EV station opportunity</p><h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">I HAVE NO LAND.<br/><span className="text-[#ff9a4d]">How can I start?</span></h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">You can explore investing in EV charging equipment without buying a plot. MyEVStation can discuss suitable premium partner locations, subject to availability and a site check.</p><div className="mt-7 flex flex-wrap gap-3"><a href="#packages" className="inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 font-extrabold text-white">See investment packages <ArrowRight size={17}/></a><a href="#charger-prices" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-4 font-bold text-white">Compare charger prices</a></div><p className="mt-4 text-xs text-white/55">A location, income or return is not guaranteed. Confirm site availability, full costs and responsibilities in a signed agreement before paying.</p></div><div className="rounded-3xl border border-white/10 bg-white/[.07] p-6 sm:p-8"><h2 className="text-xl font-extrabold">In simple words</h2><ul className="mt-5 space-y-4">{["You invest in the charging equipment package you choose.","A host partner may provide an approved place to install it; you do not buy the land under this model.","Drivers charge their vehicles and pay for the service.","Your actual earnings depend on charging demand, power costs, fees and the signed contract."].map(x=><li key={x} className="flex gap-3 text-sm leading-6 text-white/80"><CheckCircle2 className="mt-0.5 shrink-0 text-[#ffb181]" size={19}/>{x}</li>)}</ul></div></div></section>
  <section id="packages" className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
    <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Choose your starting point</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Your EV station. Founded by Ex-Indian Air Force.</h2><p className="mt-3 leading-7 text-[#647067]">In this model, you fund the charging equipment package and the team coordinates routine station operations at an approved host site. Compare the estimated monthly balance, annual return and simple payback below. A host site and returns are not guaranteed.</p></div>
    <div className="mt-8 overflow-hidden rounded-3xl border border-[#dfe7df] bg-white shadow-sm">
      <div className="border-b border-[#e5ebe5] px-5 py-5 sm:px-7">
        <h3 className="text-xl font-black text-[#203b2d] sm:text-2xl">Package comparison at a glance</h3>
        <p className="mt-2 text-sm leading-6 text-[#647067]">The figures below preserve the current illustrative package assumptions. They are estimates, not a promise of income or a supplier-confirmed all-inclusive quote.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1120px] text-left text-sm">
          <thead className="bg-[#edf4f1] text-[#43564b]"><tr>
            {["Package","Charger quantity","Connector / gun count","Package investment","Assumed monthly costs","Estimated balance / month","Estimated balance / year","Simple annual return","Simple payback"].map((h)=><th key={h} className={`px-4 py-4 font-extrabold leading-5 ${["Package investment","Assumed monthly costs","Estimated balance / month","Estimated balance / year"].includes(h)?"text-right":""}`}>{h}</th>)}
          </tr></thead>
          <tbody>{plans.map((p,i)=><tr key={p.name} className={`border-t border-[#edf1ed] ${i%2?"bg-[#f8faf8]":"bg-white"}`}>
            <td className="px-4 py-4 font-extrabold text-[#203b2d]">{p.name}<p className="mt-1 text-xs font-medium text-[#6c766d]">{i===0?"Starter package":"Growth package"}</p></td>
            <td className="px-4 py-4 text-[#526158]">{p.units}</td>
            <td className="px-4 py-4 text-[#526158]">{p.guns}</td>
            <td className="whitespace-nowrap px-4 py-4 text-right font-black tabular-nums text-[#203b2d]">{p.price}</td>
            <td className="whitespace-nowrap px-4 py-4 text-right tabular-nums text-[#526158]">{p.costs}</td>
            <td className="whitespace-nowrap px-4 py-4 text-right font-black tabular-nums text-[#08764f]">{p.monthly}</td>
            <td className="whitespace-nowrap px-4 py-4 text-right font-bold tabular-nums text-[#08764f]">{p.annual}</td>
            <td className="whitespace-nowrap px-4 py-4 text-right font-bold tabular-nums text-[#203b2d]">{i===0?"29.7%":"33.7%"}</td>
            <td className="whitespace-nowrap px-4 py-4 text-right font-bold tabular-nums text-[#203b2d]">{i===0?"40.4 months":"35.6 months"}</td>
          </tr>)}</tbody>
        </table>
      </div>
      <div className="grid gap-4 border-t border-[#e5ebe5] bg-[#f8faf7] p-5 sm:grid-cols-2 sm:p-7">
        <div className="rounded-2xl border border-[#e1e8e0] bg-white p-4">
          <h4 className="font-extrabold text-[#203b2d]">Service and manpower — not yet priced</h4>
          <p className="mt-2 text-sm leading-6 text-[#647067]">The current package information does not specify how many days or months of operations, staffing, maintenance or on-site support are included. A fixed service/manpower fee is also not stated. Ask for the exact duration, monthly/annual charge, visit count, staffing hours and exclusions in writing.</p>
        </div>
        <div className="rounded-2xl border border-[#e1e8e0] bg-white p-4">
          <h4 className="font-extrabold text-[#203b2d]">Software, installation and other fees</h4>
          <p className="mt-2 text-sm leading-6 text-[#647067]">The supplied charger quotation lists a 15% charging-management software (CMS) fee on each transaction, one standard installation visit, ₹650 for each additional visit and a complimentary site survey / bill of quantities. Confirm whether these apply to the managed package, plus electricity, civil work, electrical upgrades, shipping, taxes and any host-site share.</p>
        </div>
      </div>
    </div>
    <p className="mt-4 text-xs leading-5 text-[#758077]">Illustrative calculations use 8 charging cycles per connector per day, 4.8 kWh per session and 30 operating days per month. Actual use may be lower. Simple annual return is estimated annual balance divided by package investment; simple payback is investment divided by estimated monthly balance. These are not guaranteed ROI or cash-flow forecasts. The stated monthly costs and package inclusions must be verified in a signed agreement.</p>
  </section>
  <section className="bg-[#0b2a1e] py-12 text-white sm:py-14">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffb181]">Locations we are focused on</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">A premium address. A new chapter.</h2><p className="mt-4 leading-7 text-white/75">We are prioritising suitable high-footfall partner locations in Delhi NCR, selected malls and commercial destinations in Chandigarh, and Dehradun. Every site is subject to availability, power feasibility and a written host agreement.</p><div className="mt-5 flex flex-wrap gap-2">{["Delhi NCR","Chandigarh malls & commercial sites","Dehradun"].map(x=><span key={x} className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold">{x}</span>)}</div></div>
      <div className="rounded-3xl border border-white/10 bg-white/[.07] p-6 sm:p-7"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#ffb181]">For ex-servicemen</p><h3 className="mt-2 text-2xl font-black sm:text-3xl">Your service shaped your first mission. Build your next one.</h3><p className="mt-3 leading-7 text-white/75">Bring the discipline, leadership and commitment you developed in uniform into a new business chapter—as an EV station owner. You do not need to own land to explore this route; we can discuss the equipment package and potential host location with you.</p><a href="#enquire" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#e87522] px-5 py-3 font-extrabold text-white">Explore your next mission <ArrowRight size={17}/></a></div>
    </div>
  </section>
  <section className="bg-white py-14 sm:py-20"><div className="mx-auto max-w-7xl px-5"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">How it works</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">From enquiry to charging station</h2></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{I:FileCheck,t:"1. Tell us your plan",b:"Share your preferred city, budget and charging business goals."},{I:MapPin,t:"2. Discuss locations",b:"We discuss available premium partner sites and check practical suitability."},{I:Zap,t:"3. Confirm all costs",b:"Get a written list of equipment, electrical works, fees, host terms and ongoing costs."},{I:Smartphone,t:"4. We manage operations",b:"Our team coordinates station manpower and routine operations. You can review periodic performance reports without managing daily shifts or site activity."}].map(x=><article key={x.t} className="rounded-2xl border border-[#e1e8e0] bg-[#f8faf7] p-5"><x.I className="text-[#0b7652]" size={27}/><h3 className="mt-4 font-extrabold">{x.t}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{x.b}</p></article>)}</div></div></section>
  <section className="bg-[#f7f9f6] py-14"><div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2"><div><h2 className="text-3xl font-black">Before you invest</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#647067]">An EV charging station is a place where drivers plug in an electric vehicle and pay to charge its battery. Your business result depends on how often the chargers are used and what remains after electricity, service fees and operating costs.</p><div className="mt-5 space-y-4">{[{I:MapPin,t:"Premium site",b:"A busy address alone is not enough. Check parking access, power, vehicle demand and the host agreement."},{I:ShieldCheck,t:"Safety and protection",b:"Request the actual equipment protection, insurance and camera-monitoring terms in writing."},{I:Wallet,t:"Payments and fees",b:"Confirm the periodic reporting format, settlement schedule, operating responsibilities and all fees in the written agreement."},{I:Wrench,t:"Maintenance",b:"Confirm repair timelines, parts, downtime responsibility and the maintenance charges above."}].map(x=><div key={x.t} className="flex gap-3"><x.I className="mt-1 shrink-0 text-[#0b7652]" size={22}/><div><h3 className="font-extrabold">{x.t}</h3><p className="mt-1 text-sm leading-6 text-[#667168]">{x.b}</p></div></div>)}</div></div><div id="enquire" className="rounded-3xl bg-[#0b2a1e] p-7 text-white sm:p-9"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffb181]">Next step</p><h2 className="mt-3 text-3xl font-black">Ask about a premium location</h2><p className="mt-3 text-sm leading-6 text-white/75">Send us your preferred city, budget and whether you want a partner-site package or individual chargers. Site availability and final terms must be confirmed.</p><a href={whatsappHref("Hello MyEVStation, I am enquiring from the no-land EV station page. Please share partner-location availability, investment packages, charger prices and maintenance details.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#e87522] px-5 py-4 font-extrabold text-white">Enquire on WhatsApp <ArrowRight size={17}/></a><p className="mt-4 text-xs leading-5 text-white/55">WhatsApp opens a prepared enquiry message. Confirm package scope and site availability before paying.</p></div></div></section>
  
   <section aria-label="Related EV charging guides" className="border-t border-[#e1e8e0] bg-white py-10"><div className="mx-auto max-w-7xl px-5"><h2 className="text-xl font-black text-[#203b2d]">Explore related EV charging options</h2><div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-[#0b5a42]"><a href="/with-land" className="underline-offset-4 hover:underline">EV charging with land</a><a href="/ev-charging-investment-guide" className="underline-offset-4 hover:underline">Investment guide</a><a href="/ev-charging-calculator" className="underline-offset-4 hover:underline">Investment calculator</a><a href="/ex-servicemen" className="underline-offset-4 hover:underline">Ex-servicemen opportunity</a></div></div></section>
</main>;
}
