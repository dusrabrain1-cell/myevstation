"use client";

import Image from "next/image";
import { Bike, Building2, CarFront, Wrench, Info } from "lucide-react";

const groups = [
  { title: "Smart sockets & light charging", rows: [
    ["Basic 3.3 kW charging socket", "—", "₹5,250", "1 year"],
    ["Pro 3.3 kW charging socket", "—", "₹5,775", "1 year"],
    ["Connected 3.3 kW charger (4G)", "—", "₹7,875", "1 year"],
  ]},
  { title: "DC chargers for 2- & 3-wheelers", rows: [
    ["3 kW DC fast charger", "Single connector", "₹79,800", "1 year"],
    ["3 kW DC fast charger", "Dual connector", "₹91,350", "1 year"],
    ["6 kW DC fast charger", "Single connector", "₹1,47,000", "1 year"],
    ["12 kW DC fast charger", "Single connector", "₹1,89,000", "1 year"],
  ]},
  { title: "AC chargers for cars", rows: [
    ["7.4 kW AC charger", "Not specified in quote", "₹26,250", "2 years"],
    ["7.4 kW AC charger with 4G", "Not specified in quote", "₹28,350", "2 years"],
    ["11 kW AC charger", "Not specified in quote", "₹36,750", "2 years"],
    ["11 kW AC charger with 4G", "Not specified in quote", "₹38,850", "2 years"],
    ["22 kW AC charger", "Not specified in quote", "₹36,750", "2 years"],
    ["22 kW AC charger with 4G", "Not specified in quote", "₹38,850", "2 years"],
  ]},
  { title: "DC fast charging for cars & fleets", rows: [
    ["30 kW DC charger", "Single connector", "₹3,46,500", "2 years"],
    ["60 kW DC charger", "Dual connector", "₹6,40,500", "2 years"],
    ["120 kW DC charger (dynamic load sharing)", "Dual connector", "₹8,50,500", "2 years"],
    ["180 kW DC charger (dynamic load sharing)", "Dual connector", "₹12,60,000", "2 years"],
    ["240 kW DC charger (dynamic load sharing)", "Dual connector", "₹14,70,000", "2 years"],
  ]},
];

const maintenance = [
  ["Smart socket", "1 year", "₹1,599 / year"],
  ["AC charger 7 kW", "2 years", "₹2,999 / year"],
  ["AC charger 11/22 kW", "2 years", "₹4,999 / year"],
  ["DC charger 30 kW", "2 years", "₹16,999 / year"],
  ["DC charger 60 kW", "2 years", "Year 3 ₹28,999; Year 4 ₹30,448; Year 5 ₹31,970; Year 6 ₹33,568; Year 7 ₹35,247; Year 8 ₹37,009; Year 9 ₹38,860"],
  ["DC charger 120 kW", "2 years", "Year 3 ₹52,999; Year 4 ₹55,648; Year 5 ₹58,431; Year 6 ₹61,352; Year 7 ₹64,420; Year 8 ₹67,641; Year 9 ₹71,023"],
  ["DC charger 180 kW", "2 years", "Year 3 ₹68,000; Year 4 ₹71,400; Year 5 ₹74,970; Year 6 ₹78,718; Year 7 ₹82,654; Year 8 ₹86,787; Year 9 ₹91,126"],
  ["DC charger 240 kW", "2 years", "Year 3 ₹84,999; later years not supplied"],
];

const packages = [
  ["Starter Node", "₹3,75,000", "3 dual-gun DC chargers", "6 connectors / guns"],
  ["Growth Node", "₹5,00,000", "4 dual-gun DC chargers", "8 connectors / guns"],
];

function Table({ headers, rows, minWidth = "680px" }: { headers: string[]; rows: string[][]; minWidth?: string }) {
  return <div className="overflow-x-auto"><table className="w-full text-left text-sm" style={{ minWidth }}><thead className="bg-[#edf4f1] text-[#43564b]"><tr>{headers.map(h => <th key={h} className="px-4 py-3 font-extrabold">{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={r.join("|")} className={i % 2 ? "bg-[#f9fbf9]" : "bg-white"}>{r.map((cell, j) => <td key={j} className={`px-4 py-3.5 align-top leading-6 ${j === 0 ? "font-semibold text-[#26382e]" : j === 2 && headers.includes("Quoted price (incl. 5% GST)") ? "font-extrabold text-[#08764f]" : "text-[#5b685f]"}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

export default function ChargerQuotation({ audience = "land" }: { audience?: "land" | "society" }) {
  return <section id="charger-prices" className="bg-[#f7f9f6] py-14 sm:py-20 text-[#17212b]">
    <div className="mx-auto max-w-7xl px-5">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Charger quotation & service costs</p>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">Compare equipment, connectors and ongoing costs</h2>
        <p className="mt-4 leading-7 text-[#647067]">Indicative prices from the supplied quotation, stated as including 5% GST. These are equipment prices—not a complete installed-site quote. Final scope, availability and tax treatment must be confirmed in a written supplier quotation.</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <article className="overflow-hidden rounded-2xl border border-[#e1e8e0] bg-white"><Image src="/ev-2w-3w-dc.png" alt="DC charging for two-wheelers and three-wheelers" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-40 w-full object-cover" /><div className="p-5"><Bike size={25} className="text-[#0b7652]"/><h3 className="mt-2 font-extrabold">2- & 3-wheelers</h3><p className="mt-1 text-sm text-[#667168]">Sockets and compact DC options.</p></div></article>
        <article className="overflow-hidden rounded-2xl border border-[#e1e8e0] bg-white"><Image src="/ev-with-land.jpg" alt="EV charging station for cars" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-40 w-full object-cover" /><div className="p-5"><CarFront size={25} className="text-[#0b7652]"/><h3 className="mt-2 font-extrabold">Cars</h3><p className="mt-1 text-sm text-[#667168]">AC charging and higher-power DC.</p></div></article>
        <article className="overflow-hidden rounded-2xl border border-[#e1e8e0] bg-white"><Image src="/ev-bus-fleet-dc.png" alt="Commercial fleet DC fast charging" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-40 w-full object-cover" /><div className="p-5"><Building2 size={25} className="text-[#0b7652]"/><h3 className="mt-2 font-extrabold">Buses & fleets</h3><p className="mt-1 text-sm text-[#667168]">Higher-power DC for suitable sites.</p></div></article>
      </div>
      {groups.map(g => <article key={g.title} className="mt-8 overflow-hidden rounded-2xl border border-[#dfe7df] bg-white shadow-sm"><div className="bg-[#123b4b] px-5 py-4 text-white"><h3 className="font-extrabold">{g.title}</h3></div><Table headers={["Charger type", "Connector / gun count", "Quoted price (incl. 5% GST)", "Warranty"]} rows={g.rows}/></article>)}
      <article className="mt-10 overflow-hidden rounded-2xl border border-[#dfe7df] bg-white shadow-sm">
        <div className="bg-[#123b4b] px-5 py-4 text-white"><h3 className="font-extrabold">Managed package overview</h3></div>
        <p className="px-5 py-4 text-sm leading-6 text-[#647067]">These are the package details currently shown on the no-land page. Confirm that they apply to your proposal before presenting or accepting payment.</p>
        <Table headers={["Package", "Indicative package price", "Charger quantity", "Total connectors / guns", "Service duration included", "Service / manpower charge"]} rows={packages.map(p => [...p, "Not specified in supplied terms", "Not specified in supplied terms — obtain written quote"]) } minWidth="1000px"/>
        <div className="flex gap-3 border-t border-[#e1e8e0] bg-[#fff8f2] p-4 text-sm leading-6 text-[#76543d]"><Info className="mt-0.5 shrink-0" size={18}/><p><strong>Important:</strong> The supplied information does not state how many days or months of manpower, operations or service charges are included in either package, or the applicable service fee. Do not advertise service as included for a specific period until this is confirmed in writing. Clarify staffing hours, preventive visits, breakdown response, spare parts, taxes and exclusions.</p></div>
      </article>
      <article className="mt-8 overflow-hidden rounded-2xl border border-[#dfe7df] bg-white shadow-sm">
        <div className="flex items-center gap-2 bg-[#123b4b] px-5 py-4 text-white"><Wrench size={19}/><h3 className="font-extrabold">Annual maintenance after warranty</h3></div>
        <p className="px-5 py-4 text-sm leading-6 text-[#647067]">Maintenance prices transcribed from the supplied maintenance sheet. Confirm whether each amount is per charger, plus applicable taxes, and request the service-level agreement.</p>
        <Table headers={["Hardware type", "Warranty shown", "Maintenance price supplied"]} rows={maintenance} minWidth="760px"/>
      </article>
      <article className="mt-8 rounded-2xl border border-[#dfe7df] bg-white p-5 sm:p-6">
        <h3 className="text-lg font-black">Installation, software and service terms</h3>
        <Table headers={["Item", "Supplied term", "What to confirm"]} rows={[
          ["Charging-management software (CMS)", "15% fee on each transaction", "Fee basis, GST, settlement cycle and who pays"],
          ["Standard installation", "One visit included", "Exact installation scope and travel limits"],
          ["Additional installation visits", "₹650 per visit", "Taxes and what counts as a visit"],
          ["Site survey / bill of quantities", "Complimentary", "Written confirmation that the site qualifies"],
          ["Service / operations period", "Not stated in supplied quotation", "Start/end date, number of days, coverage hours and renewal price"],
          ["Electrical upgrades, civil work, shipping", "Not confirmed as included", "Itemised site-specific quote before ordering"],
        ]} minWidth="760px"/>
        <p className="mt-4 text-xs leading-5 text-[#78837a]">The quote and maintenance sheet do not establish that maintenance, staffing or operations are included in the equipment package price. Treat these as separate until the signed proposal explicitly includes them.</p>
      </article>
      <div className="mt-8 flex flex-wrap gap-3"><a href={audience === "society" ? "https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20please%20share%20an%20itemised%20EV%20charging%20quotation%20for%20our%20society%2C%20including%20charger%20quantity%2C%20connector%20count%2C%20installation%2C%20CMS%20and%20service%20duration." : "https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20please%20share%20an%20itemised%20EV%20charging%20quotation%20for%20my%20site%2C%20including%20charger%20quantity%2C%20connector%20count%2C%20installation%2C%20CMS%20and%20service%20duration."} className="inline-flex items-center rounded-xl bg-[#0b5a42] px-5 py-3.5 font-extrabold text-white">Request itemised quotation</a><a href={audience === "society" ? "#enquire" : "/without-land#enquire"} className="inline-flex items-center rounded-xl border border-[#cdd8ce] px-5 py-3.5 font-bold text-[#304438]">{audience === "society" ? "Discuss society requirements" : "Ask about managed packages"}</a></div>
    </div>
  </section>;
}
