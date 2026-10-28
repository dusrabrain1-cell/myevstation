"use client";

import Image from "next/image";
import { Bike, Building2, CarFront, Wrench } from "lucide-react";
import { whatsappHref } from "@/lib/constants";

const groups = [
  { title: "Smart sockets & light charging", rows: [
    ["Basic 3.3 kW charging socket", "1 socket outlet; not a gun", "₹5,250", "1 year"],
    ["Pro 3.3 kW charging socket", "1 socket outlet; not a gun", "₹5,775", "1 year"],
    ["Connected 3.3 kW charger (4G)", "1 socket outlet; not a gun", "₹7,875", "1 year"],
  ]},
  { title: "DC chargers for 2- & 3-wheelers", rows: [
    ["3 kW DC fast charger", "Single connector", "₹79,800", "1 year"],
    ["3 kW DC fast charger", "Dual connector", "₹91,350", "1 year"],
    ["6 kW DC fast charger", "Single connector", "₹1,47,000", "1 year"],
    ["12 kW DC fast charger", "Single connector", "₹1,89,000", "1 year"],
  ]},
  { title: "AC chargers for cars", rows: [
    ["7.4 kW AC charger", "Not stated in quote", "₹26,250", "2 years"],
    ["7.4 kW AC charger with 4G", "Not stated in quote", "₹28,350", "2 years"],
    ["11 kW AC charger", "Not stated in quote", "₹36,750", "2 years"],
    ["11 kW AC charger with 4G", "Not stated in quote", "₹38,850", "2 years"],
    ["22 kW AC charger", "Single gun (11 kW Type 2)", "₹36,750 incl. 5% GST (₹35,000 + ₹1,750 GST)", "2 years"],
    ["22 kW AC charger with 4G", "Not stated in quote", "₹38,850", "2 years"],
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

function Table({ headers, rows, minWidth = "680px" }: { headers: string[]; rows: string[][]; minWidth?: string }) {
  const priceColumn = headers.findIndex((h) => /price|charge|cost|fee/i.test(h));
  return <div className="overflow-x-auto rounded-b-xl"><table className="w-full table-auto text-left text-sm" style={{ minWidth }}><thead className="bg-[#edf4f1] text-[#43564b]"><tr>{headers.map((h, i) => <th key={h} className={`px-4 py-3.5 font-extrabold leading-5 ${i === priceColumn ? "text-right" : ""} ${/warranty|duration/i.test(h) ? "text-center" : ""}`}>{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={r.join("|")} className={`border-t border-[#edf1ed] ${i % 2 ? "bg-[#f8faf8]" : "bg-white"} hover:bg-[#f0f7f2]`}>{r.map((cell, j) => <td key={j} className={`px-4 py-3.5 align-top leading-6 ${j === 0 ? "font-semibold text-[#26382e]" : "text-[#5b685f]"} ${j === priceColumn ? "whitespace-nowrap text-right font-extrabold tabular-nums text-[#08764f]" : ""} ${/warranty|duration/i.test(headers[j] ?? "") ? "text-center" : ""}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

export default function ChargerQuotation({ audience = "land" }: { audience?: "land" | "society" }) {
  return <section id="charger-prices" className="bg-[#f7f9f6] py-14 sm:py-20 text-[#17212b]">
    <div className="mx-auto max-w-7xl px-5">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Charger quotation & service costs</p>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">Equipment prices, gun count and service charges</h2>
        <p className="mt-4 leading-7 text-[#647067]">A clear, itemised comparison of equipment price, connector (gun) count, warranty, annual maintenance, software fees and installation terms. Equipment prices below are transcribed from the supplied quotation and include 5% GST as stated by the supplier. These are equipment prices—not a complete installed-site quote. Where the quotation does not state an AC connector count, it is marked “not stated” rather than assumed.</p>
        <div className="mt-5 grid gap-3 text-left sm:grid-cols-3">
          <div className="rounded-xl border border-[#dfe7df] bg-white p-4"><p className="text-xs font-bold uppercase tracking-wide text-[#647067]">01 · Equipment</p><p className="mt-1 font-extrabold text-[#17212b]">Price + connector count</p></div>
          <div className="rounded-xl border border-[#dfe7df] bg-white p-4"><p className="text-xs font-bold uppercase tracking-wide text-[#647067]">02 · Maintenance</p><p className="mt-1 font-extrabold text-[#17212b]">Warranty + annual charges</p></div>
          <div className="rounded-xl border border-[#dfe7df] bg-white p-4"><p className="text-xs font-bold uppercase tracking-wide text-[#647067]">03 · Other fees</p><p className="mt-1 font-extrabold text-[#17212b]">CMS + installation + service term</p></div>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <article className="overflow-hidden rounded-2xl border border-[#e1e8e0] bg-white"><Image src="/ev-2w-3w-dc.png" alt="DC charging for two-wheelers and three-wheelers" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-40 w-full object-cover" /><div className="p-5"><Bike size={25} className="text-[#0b7652]"/><h3 className="mt-2 font-extrabold">2- & 3-wheelers</h3><p className="mt-1 text-sm text-[#667168]">Sockets and compact DC options.</p></div></article>
        <article className="overflow-hidden rounded-2xl border border-[#e1e8e0] bg-white"><Image src="/ev-with-land.jpg" alt="EV charging station for cars" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-40 w-full object-cover" /><div className="p-5"><CarFront size={25} className="text-[#0b7652]"/><h3 className="mt-2 font-extrabold">Cars</h3><p className="mt-1 text-sm text-[#667168]">AC charging and higher-power DC.</p></div></article>
        <article className="overflow-hidden rounded-2xl border border-[#e1e8e0] bg-white"><Image src="/ev-bus-fleet-dc.png" alt="Commercial fleet DC fast charging" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-40 w-full object-cover" /><div className="p-5"><Building2 size={25} className="text-[#0b7652]"/><h3 className="mt-2 font-extrabold">Buses & fleets</h3><p className="mt-1 text-sm text-[#667168]">Higher-power DC for suitable sites.</p></div></article>
      </div>
      {groups.map((g, index) => <article key={g.title} className="mt-6 overflow-hidden rounded-2xl border border-[#dfe7df] bg-white shadow-sm"><div className="flex flex-wrap items-center gap-3 bg-[#123b4b] px-5 py-4 text-white"><span className="rounded-md bg-white/15 px-2 py-1 text-xs font-black tabular-nums">{String(index + 1).padStart(2, "0")}</span><h3 className="font-extrabold">{g.title}</h3></div><Table headers={["Charger / power", "Connector / gun count", "Quoted equipment price (incl. 5% GST)", "Warranty"]} rows={g.rows} minWidth="760px"/></article>)}
      <article className="mt-8 overflow-hidden rounded-2xl border border-[#dfe7df] bg-white shadow-sm">
        <div className="flex items-center gap-3 bg-[#123b4b] px-5 py-4 text-white"><span className="rounded-md bg-white/15 px-2 py-1 text-xs font-black">05</span><Wrench size={19}/><h3 className="font-extrabold">Warranty and annual maintenance charges</h3></div>
        <p className="px-5 py-4 text-sm leading-6 text-[#647067]">The warranty period and maintenance amounts below are shown separately. Annual maintenance is not assumed to be included in the equipment price or warranty. Confirm whether each amount is per charger, applicable taxes, parts/labour coverage and response times in the signed service-level agreement.</p>
        <Table headers={["Hardware type", "Warranty shown", "Maintenance price supplied"]} rows={maintenance} minWidth="760px"/>
      </article>
      <article className="mt-8 rounded-2xl border border-[#dfe7df] bg-white p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-3"><span className="rounded-md bg-[#123b4b] px-2 py-1 text-xs font-black text-white">06</span><h3 className="text-lg font-black">Installation, software and included-service terms</h3></div>
        <Table headers={["Item", "Supplied term", "What to confirm"]} rows={[
          ["Charging-management software (CMS)", "15% fee on each transaction", "Fee basis, GST, settlement cycle and who pays"],
          ["Standard installation", "One visit included", "Exact installation scope and travel limits"],
          ["Additional installation visits", "₹650 per visit", "Taxes and what counts as a visit"],
          ["Site survey / bill of quantities", "Complimentary", "Written confirmation that the site qualifies"],
          ["Free service / included support period", "Not stated in supplied quotation", "Supplier must specify exact days/months, start date, service hours, number of visits, travel limits and what is covered. Do not assume free service is included."],
          ["Service / manpower charge", "No amount stated in supplied quotation", "Obtain a separate written amount, billing frequency, staffing/technician hours, number of visits, response time and taxes"],
          ["Electrical upgrades, civil work, shipping", "Not confirmed as included", "Itemised site-specific quote before ordering"],
        ]} minWidth="760px"/>
        <p className="mt-4 rounded-xl border border-[#f0d8c7] bg-[#fff8f2] p-4 text-sm leading-6 text-[#76543d]"><strong>Important — service duration is not confirmed:</strong> the supplied documents do not state a free-service period in days/months or a fixed managed-service/manpower fee. Those fields are marked “not stated” rather than guessed. Warranty is not the same as free maintenance or on-site service. Get the service duration, annual maintenance, response times and exclusions confirmed in writing before ordering.</p>
      </article>
      <div className="mt-8 flex flex-wrap gap-3"><a href={audience === "society" ? whatsappHref("Hello MyEVStation, please share an itemised EV charging quotation for our society, including charger quantity, connector count, installation, CMS and service duration.") : whatsappHref("Hello MyEVStation, please share an itemised EV charging quotation for my site, including charger quantity, connector count, installation, CMS and service duration.")} className="inline-flex items-center rounded-xl bg-[#0b5a42] px-5 py-3.5 font-extrabold text-white">Request itemised quotation</a><a href={audience === "society" ? "#enquire" : "/without-land#enquire"} className="inline-flex items-center rounded-xl border border-[#cdd8ce] px-5 py-3.5 font-bold text-[#304438]">{audience === "society" ? "Discuss society requirements" : "Ask about managed packages"}</a></div>
    </div>
  </section>;
}
