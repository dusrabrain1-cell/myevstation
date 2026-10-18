"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Calculator, Users, Flag } from "lucide-react";

export default function CalculatorClient() {
  const [land, setLand] = useState("without");
  const [packagePlan, setPackagePlan] = useState("starter");
  const [charger, setCharger] = useState("fleet30");
  const [chargerCount, setChargerCount] = useState(1);
  const [cyclesPerGunDay, setCyclesPerGunDay] = useState(8);
  const [customSessionsPerDay, setCustomSessionsPerDay] = useState(8);
  const [kwhPerSession, setKwhPerSession] = useState(4.8);
  const [sellingRate, setSellingRate] = useState(18);
  const [energyCost, setEnergyCost] = useState(15.5);
  const [cmsRate, setCmsRate] = useState(15);
  const money = (v: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number.isFinite(v) ? v : 0);

  const packageData = packagePlan === "growth"
    ? { label: "Growth Node", investment: 500000, chargers: 4, guns: 8, fixedCosts: 9000 }
    : { label: "Starter Node", investment: 375000, chargers: 3, guns: 6, fixedCosts: 8000 };
  const chargerOptions = [
    { id: "socket", group: "2W / 3W", label: "Basic 3.3 kW charging socket", price: 5250, kw: 3.3, maintenance: 1599 },
    { id: "connected", group: "2W / 3W", label: "Connected 3.3 kW charger (4G)", price: 7875, kw: 3.3, maintenance: 1599 },
    { id: "dc3", group: "2W / 3W", label: "3 kW DC fast charger — dual connector", price: 91350, kw: 3, maintenance: 16999 },
    { id: "dc6", group: "2W / 3W", label: "6 kW DC fast charger — single connector", price: 147000, kw: 6, maintenance: 16999 },
    { id: "dc12", group: "2W / 3W", label: "12 kW DC fast charger — single connector", price: 189000, kw: 12, maintenance: 16999 },
    { id: "ac74", group: "Cars — AC", label: "7.4 kW AC charger", price: 26250, kw: 7.4, maintenance: 2999 },
    { id: "ac11", group: "Cars — AC", label: "11 kW AC charger", price: 36750, kw: 11, maintenance: 4999 },
    { id: "ac22", group: "Cars — AC", label: "22 kW AC charger (price requires supplier confirmation)", price: null, kw: 22, maintenance: 4999 },
    { id: "fleet30", group: "Cars / fleets — DC", label: "30 kW DC charger — single connector", price: 346500, kw: 30, maintenance: 16999 },
    { id: "fleet60", group: "Cars / fleets — DC", label: "60 kW DC charger — dual connector", price: 640500, kw: 60, maintenance: 28999 },
    { id: "fleet120", group: "Cars / fleets — DC", label: "120 kW DC charger — dual connector", price: 850500, kw: 120, maintenance: 52999 },
    { id: "fleet180", group: "Cars / fleets — DC", label: "180 kW DC charger — dual connector", price: 1260000, kw: 180, maintenance: 68000 },
    { id: "fleet240", group: "Cars / fleets — DC", label: "240 kW DC charger — dual connector", price: 1470000, kw: 240, maintenance: 84999 }
  ];
  const selectedCharger = chargerOptions.find((item) => item.id === charger) ?? chargerOptions[8];
  const estimate = useMemo(() => {
    if (land === "without") {
      const sessions = packageData.guns * cyclesPerGunDay * 30;
      const energy = sessions * 4.8;
      const gross = energy * 18;
      const powerCost = energy * 15.5;
      const spread = gross - powerCost;
      const net = spread - packageData.fixedCosts;
      return { investment: packageData.investment, chargers: packageData.chargers, guns: packageData.guns, sessions, energy, gross, powerCost, fees: 0, maintenance: packageData.fixedCosts, net, annual: net * 12, payback: net > 0 ? packageData.investment / net : null, basis: "No-land package term sheet: ₹18/kWh billed, ₹15.50/kWh energy services, ₹4.80/session, 30 days, and package-specific monthly fixed costs." };
    }
    const sessions = customSessionsPerDay * chargerCount * 30;
    const energy = sessions * kwhPerSession;
    const gross = energy * sellingRate;
    const powerCost = energy * energyCost;
    const fees = gross * (cmsRate / 100);
    const maintenance = selectedCharger.maintenance * chargerCount / 12;
    const net = gross - powerCost - fees - maintenance;
    const investment = selectedCharger.price == null ? null : selectedCharger.price * chargerCount;
    return { investment, chargers: chargerCount, guns: chargerCount, sessions, energy, gross, powerCost, fees, maintenance, net, annual: net * 12, payback: investment != null && net > 0 ? investment / net : null, pricePending: selectedCharger.price == null, basis: "Land/site-owner estimate: charger hardware price is supplier-confirmed only where a price is shown; user-adjustable sessions, kWh/session, tariff and energy cost, 15% CMS fee by default, and annual maintenance divided monthly. Installation, civil work, electrical upgrades, rent, taxes beyond quoted price and financing are excluded." };
  }, [land, packagePlan, packageData.investment, packageData.chargers, packageData.guns, packageData.fixedCosts, cyclesPerGunDay, customSessionsPerDay, chargerCount, kwhPerSession, sellingRate, energyCost, cmsRate, selectedCharger]);

  return (
    <main className="min-h-screen bg-white text-[#17212b]">
      <section id="investment" className="scroll-mt-20 bg-white pt-10 pb-16 sm:pt-12 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Plan your investment</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#15281f] sm:text-5xl">Calculate your EV station plan.</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-7 text-[#647067]">Select your land situation, package and charger type. The calculator uses the supplied package economics and charger quotation where available, then shows which assumptions drive the result.</p>
            <div className="mx-auto mt-7 max-w-3xl rounded-2xl border border-[#dce8dd] bg-[#f4f8f3] p-5 text-left">
              <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#0b7652]"><Calculator size={23}/></span><div><b className="block text-sm">Transparent planning estimate</b><p className="mt-1 text-xs leading-5 text-[#68746b]">Not a quotation, guaranteed income or investment advice.</p></div></div>
              <p className="mt-4 text-sm leading-6 text-[#52665a]">For partner-site packages, the estimate follows the supplied 3-charger and 4-charger commercial term sheet. For landowners, it uses quoted hardware prices and your operating assumptions.</p>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-3">{[{label:"No land · partner-site package",v:"without"},{label:"Housing society / RWA",v:"society"},{label:"I have land / site",v:"with"}].map(o=><button key={o.v} onClick={()=>setLand(o.v)} className={`rounded-full border px-5 py-3 text-sm font-bold transition ${land===o.v?"border-[#0b5a42] bg-[#0b5a42] text-white shadow-sm":"border-[#dfe5df] bg-white text-[#526158] hover:border-[#0b5a42]"}`}>{o.label}</button>)}</div>
            <p className="mt-3 text-center text-xs text-[#768178]">Selected model: <b>{land==="with"?"Land/site-owner model":land==="society"?"Society / RWA charging model":"Managed partner-site package (no land purchase)"}</b></p>
          </div>
          <div className="w-full rounded-[1.7rem] border border-[#dce5dc] bg-[#fafbf8] p-5 shadow-sm sm:p-7 lg:p-8">
            {land === "without" ? <>
              <div className="mb-6 flex items-center justify-between gap-3"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d96a1b]">Partner-site packages</p><h3 className="mt-1 text-2xl font-black text-[#172d21]">Choose your package</h3></div><span className="rounded-full bg-[#e9f4eb] px-3 py-1.5 text-xs font-extrabold text-[#0b5a42]">No land purchase</span></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[{id:"starter",name:"Starter Node",price:"₹3.75 lakh",count:"3 dual-gun chargers · 6 guns",active:packagePlan==="starter"},{id:"growth",name:"Growth Node",price:"₹5 lakh",count:"4 dual-gun chargers · 8 guns",active:packagePlan==="growth"}].map(p=><button key={p.id} type="button" onClick={()=>setPackagePlan(p.id)} className={`rounded-2xl border p-4 text-left transition ${p.active?"border-[#e87522] bg-[#fff5ed] ring-2 ring-[#e87522]/15":"border-[#dfe7df] bg-white"}`}><span className="text-xs font-extrabold uppercase tracking-wider text-[#8a5a3a]">{p.name}</span><b className="mt-2 block text-2xl font-black text-[#102b20]">{p.price}</b><span className="mt-1 block text-xs leading-5 text-[#667168]">{p.count}</span></button>)}
              </div>
              <div className="mt-6 rounded-xl bg-white p-4"><div className="flex items-center justify-between gap-3"><label htmlFor="cycles" className="text-sm font-bold text-[#34463a]">Average cycles per gun per day</label><b className="text-lg text-[#0b5a42]">{cyclesPerGunDay}</b></div><input id="cycles" type="range" min="0" max="8" step="1" value={cyclesPerGunDay} onChange={e=>setCyclesPerGunDay(Number(e.target.value))} className="mt-3 w-full accent-[#0b7652]"/><div className="mt-1 flex justify-between text-xs text-[#8a958c]"><span>0 · no use</span><span>8 · term-sheet assumption</span></div><p className="mt-3 text-xs leading-5 text-[#768178]">The source package forecast assumes 8 cycles per gun per day, 4.8 kWh per cycle and 30 operating days.</p></div>
            </> : <>
              <div className="mb-6"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d96a1b]">{land==="society"?"Society / RWA charging model":"Land / site-owner model"}</p><h3 className="mt-1 text-2xl font-black text-[#172d21]">{land==="society"?"Plan your society charging setup":"Choose your charging hardware"}</h3><p className="mt-2 text-sm leading-6 text-[#68746b]">{land==="society"?"Estimate one resident charger or scale to shared parking, visitor charging and a larger society charging zone. Select hardware and quantity below.":"Hardware prices are indicative and taken from the supplied charger quotation, including 5% GST where stated. The supplied quote lists 11 kW and 22 kW AC chargers at the same price; confirm the 22 kW price and specification with the supplier before purchase. Add site works after a survey."}</p></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-bold text-[#34463a]">{land==="society"?"Society vehicle / charger type":"Vehicle / charger option"}<select value={charger} onChange={e=>setCharger(e.target.value)} className="mt-2 w-full rounded-xl border border-[#dbe3db] bg-white p-3 font-medium">{chargerOptions.map(x=><option key={x.id} value={x.id}>{x.group} — {x.label} ({x.price == null ? "price pending" : money(x.price)})</option>)}</select></label>
                <label className="block text-sm font-bold text-[#34463a]">{land==="society"?"Number of resident / shared chargers":"Number of chargers"}<input type="number" min="1" max="50" value={chargerCount} onChange={e=>setChargerCount(Math.max(1,Math.min(50,Number(e.target.value)||1)))} className="mt-2 w-full rounded-xl border border-[#dbe3db] bg-white p-3 font-medium"/><span className="mt-1 block text-xs font-normal text-[#768178]">Start with 1 charger or model up to 50 units.</span></label>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-bold text-[#34463a]">Sessions per charger per day <span className="font-normal text-[#7b877d]">({customSessionsPerDay})</span><input type="range" min="0" max="40" step="1" value={customSessionsPerDay} onChange={e=>setCustomSessionsPerDay(Number(e.target.value))} className="mt-3 w-full accent-[#0b7652]"/></label>
                <label className="block text-sm font-bold text-[#34463a]">Average energy per session <span className="font-normal text-[#7b877d]">({kwhPerSession} kWh)</span><input type="range" min="1" max="60" step="0.5" value={kwhPerSession} onChange={e=>setKwhPerSession(Number(e.target.value))} className="mt-3 w-full accent-[#0b7652]"/></label>
                <label className="block text-sm font-bold text-[#34463a]">Driver tariff per kWh<input type="number" min="1" max="100" step="0.5" value={sellingRate} onChange={e=>setSellingRate(Math.max(1,Math.min(100,Number(e.target.value)||1)))} className="mt-2 w-full rounded-xl border border-[#dbe3db] bg-white p-3 font-medium"/></label>
                <label className="block text-sm font-bold text-[#34463a]">Energy cost per kWh<input type="number" min="0" max="100" step="0.5" value={energyCost} onChange={e=>setEnergyCost(Math.max(0,Math.min(100,Number(e.target.value)||0)))} className="mt-2 w-full rounded-xl border border-[#dbe3db] bg-white p-3 font-medium"/></label>
                <label className="block text-sm font-bold text-[#34463a] sm:col-span-2">Charging-management fee (%) <span className="font-normal text-[#7b877d]">— quotation lists 15%</span><input type="range" min="0" max="25" step="1" value={cmsRate} onChange={e=>setCmsRate(Number(e.target.value))} className="mt-3 w-full accent-[#0b7652]"/><span className="mt-1 block text-xs text-[#768178]">{cmsRate}% of gross billing</span></label>
              </div>
            </>}
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">{land==="society"?"Estimated society hardware budget":"Estimated equipment investment"}</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{estimate.investment == null ? "Price pending" : money(estimate.investment)}</b><span className="mt-1 block text-[10px] leading-4 text-[#7c877e]">{estimate.investment == null ? "Supplier confirmation required; investment and payback are not calculated" : land==="without"?"Package price from supplied term sheet":land==="society"?"Quoted hardware for selected society charger quantity":"Quoted charger hardware only"}</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Monthly energy sold</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{Math.round(estimate.energy).toLocaleString("en-IN")} kWh</b><span className="mt-1 block text-[10px] text-[#7c877e]">{Math.round(estimate.sessions).toLocaleString("en-IN")} charging sessions / month</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Gross billing / month</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{money(estimate.gross)}</b><span className="mt-1 block text-[10px] text-[#7c877e]">Before energy and operating costs</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Energy cost / month</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{money(estimate.powerCost)}</b><span className="mt-1 block text-[10px] text-[#7c877e]">At selected energy cost</span></div>
              <div className="rounded-xl border border-[#d7e7d9] bg-[#edf6ee] p-4"><span className="text-xs font-semibold text-[#52705a]">{land==="without"?"Indicative operating balance / month":"Illustrative balance / month"}</span><b className={`mt-2 block text-xl font-extrabold ${estimate.net>=0?"text-[#0b7652]":"text-[#b42318]"}`}>{money(estimate.net)}</b><span className="mt-1 block text-[10px] text-[#52705a]">{land==="without"?"After package fixed costs":"After energy, CMS and estimated maintenance"}</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Annualised estimate</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{money(estimate.annual)}</b><span className="mt-1 block text-[10px] text-[#7c877e]">Assumes same monthly activity for 12 months</span></div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Simple equipment payback</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{estimate.investment == null ? "Awaiting price" : estimate.payback===null?"Not reached at these assumptions":`${estimate.payback.toFixed(1)} months`}</b><span className="mt-1 block text-[10px] leading-4 text-[#7c877e]">Simple estimate only: equipment investment divided by this monthly operating balance. It is not a guaranteed payback and excludes financing, taxes, installation, civil/electrical works, rent and other unlisted costs.</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Other monthly costs included</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{money(estimate.maintenance + estimate.fees)}</b><span className="mt-1 block text-[10px] leading-4 text-[#7c877e]">{land==="without"?"Package fixed costs include telemetry, insurance and central maintenance pool.":"CMS fee plus maintenance provision based on supplied annual maintenance figures."}</span></div>
            </div>
            <p className="mt-4 text-xs leading-5 text-[#7c877e]">{estimate.basis} {land!=="without"?(land==="society"?"Society estimate covers selected charger hardware and adjustable charging assumptions only. Wiring, metering, load upgrades, civil work, RWA permissions, installation and any common-area charges require a site survey.":"Hardware prices are indicative quoted prices, not turnkey station costs."):"The package term sheet assumes high utilisation (8 cycles per gun daily); reduce the slider to explore lower demand. All site terms and settlement deductions must be confirmed in writing."}</p>
            <div className="mt-5 flex flex-wrap gap-3"><a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire%20about%20EV%20charging%20station%20opportunities." className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e87522] px-5 py-3.5 text-sm font-extrabold text-white">Discuss this estimate <ArrowRight size={16}/></a><a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20please%20share%20no-land%20EV%20station%20packages%20and%20pricing." className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0b5a42]/20 bg-white px-5 py-3.5 text-sm font-bold text-[#0b5a42]">Compare partner packages</a></div>
          </div>
        </div>
      </section>

      <section id="india-2030" className="relative overflow-hidden bg-[#f0f6f0] py-16 sm:py-20">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#dcebdd] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#cbdccf] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[.16em] text-[#0b5a42]"><Flag size={15}/> India 2030 · A mission we can build together</span>
              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#142f24] sm:text-5xl">Power India’s EV transition. Create opportunity on the ground.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#596b60]">India’s climate and energy transition needs cleaner mobility, reliable charging access and people ready to build the infrastructure. MyEVStation aims to help individuals, landowners, housing societies and businesses participate through practical EV charging models.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#model" className="inline-flex items-center gap-2 rounded-xl bg-[#0b5a42] px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#084632]">Find your entry model <ArrowRight size={16}/></a>
                <a href="#technology" className="inline-flex items-center gap-2 rounded-xl border border-[#0b5a42]/20 bg-white px-5 py-3.5 text-sm font-extrabold text-[#0b5a42] transition hover:bg-[#e7f1e8]">Explore safety technology <ShieldCheck size={16}/></a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <article className="rounded-2xl border border-[#d9e5da] bg-white p-5 shadow-sm"><span className="text-xs font-extrabold uppercase tracking-wider text-[#d96a1b]">2030 climate commitment</span><b className="mt-3 block text-3xl font-black text-[#142f24]">45%</b><p className="mt-2 text-sm leading-6 text-[#647067]">India’s target to reduce GDP emissions intensity from 2005 levels by 2030.</p></article>
              <article className="rounded-2xl border border-[#d9e5da] bg-white p-5 shadow-sm"><span className="text-xs font-extrabold uppercase tracking-wider text-[#d96a1b]">Clean power</span><b className="mt-3 block text-3xl font-black text-[#142f24]">~50%</b><p className="mt-2 text-sm leading-6 text-[#647067]">2030 NDC commitment for cumulative installed electricity capacity from non-fossil sources—a target India reported achieving in 2025.</p></article>
              <article className="rounded-2xl border border-[#d9e5da] bg-white p-5 shadow-sm"><span className="text-xs font-extrabold uppercase tracking-wider text-[#d96a1b]">Electric mobility</span><b className="mt-3 block text-3xl font-black text-[#142f24]">EV growth</b><p className="mt-2 text-sm leading-6 text-[#647067]">Public and private charging infrastructure can help make electric mobility more accessible across vehicle types and locations.</p></article>
              <article className="rounded-2xl border border-[#d9e5da] bg-white p-5 shadow-sm"><span className="text-xs font-extrabold uppercase tracking-wider text-[#d96a1b]">Long-term direction</span><b className="mt-3 block text-3xl font-black text-[#142f24]">Net Zero</b><p className="mt-2 text-sm leading-6 text-[#647067]">India’s announced goal is to reach net-zero emissions by 2070.</p></article>
            </div>
          </div>
          <div className="mt-8 grid gap-4 rounded-2xl border border-[#d9e5da] bg-white p-5 sm:grid-cols-3 sm:p-6">
            <div><b className="flex items-center gap-2 text-sm font-extrabold text-[#142f24]"><MapPin size={17} className="text-[#0b7652}"/> Have land?</b><p className="mt-2 text-sm leading-6 text-[#647067]">Explore a site-owner model for suitable plots, parking, commercial property or fleets.</p><a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20have%20land%2Fa%20site%20and%20want%20to%20explore%20an%20EV%20charging%20station." className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[#0b5a42]">Explore with land <ArrowRight size={14}/></a></div>
            <div><b className="flex items-center gap-2 text-sm font-extrabold text-[#142f24]"><Users size={17} className="text-[#0b7652}"/> No land?</b><p className="mt-2 text-sm leading-6 text-[#647067]">Explore partner opportunities at suitable host locations without buying land.</p><a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20am%20interested%20in%20the%20no-land%20EV%20station%20model.%20Please%20share%20details." className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[#0b5a42]">Explore no-land model <ArrowRight size={14}/></a></div>
            <div><b className="flex items-center gap-2 text-sm font-extrabold text-[#142f24]"><ShieldCheck size={17} className="text-[#0b7652}"/> Safety-led approach</b><p className="mt-2 text-sm leading-6 text-[#647067]">Explore connected charging infrastructure and AI-enabled battery diagnostics designed to support better visibility and safety decisions.</p><a href="#technology" className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[#0b5a42]">See the technology <ArrowRight size={14}/></a></div>
          </div>
        </div>
      </section>

      <section id="charger-guide" className="bg-[#f7f9f6] py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mx-auto max-w-3xl text-center"><span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">A simple guide</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#15281f] sm:text-4xl">Which charger is right for your location?</h2><p className="mt-3 leading-7 text-[#647067]">Different vehicles and parking times need different chargers. These are indicative charger categories from the supplied technical profile—not a final site design or price quote.</p></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{p:"3.3 kW",t:"Basic / overnight charging",v:"Homes, small businesses and longer parking stays",b:"Simple AC supply; a portable charging setup may be required.",img:"/ev-society.jpg"},{p:"3–12 kW",t:"Two- & three-wheeler DC",v:"Electric scooter and e-rickshaw fleets",b:"Designed for frequent fleet charging and quicker turnarounds.",img:"/ev-2w-3w-dc.png"},{p:"7.4–22 kW",t:"AC charging for cars",v:"Offices, malls, societies and destinations",b:"Useful where cars remain parked for a while.",img:"/ev-with-land.jpg"},{p:"30–240 kW",t:"High-power DC charging",v:"Buses, trucks, highways and commercial fleets",b:"For higher-demand sites; needs suitable electrical capacity and planning.",img:"/ev-bus-fleet-dc.png"}].map(x=><article key={x.p} className="overflow-hidden rounded-2xl border border-[#e1e8e0] bg-white shadow-sm"><div className="relative h-44 overflow-hidden bg-[#eaf3ed]"><Image src={x.img} alt={x.t} width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.03]" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-[#092d20]/25 via-transparent to-transparent"/><span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-[10px] font-extrabold tracking-wide text-[#0b5a42]">MYEVSTATION · CHARGING</span></div><div className="p-5"><span className="inline-flex rounded-lg bg-[#e8f4ea] px-3 py-2 text-lg font-black text-[#0b7652]">{x.p}</span><h3 className="mt-4 text-lg font-extrabold text-[#172d21]">{x.t}</h3><p className="mt-2 text-sm font-semibold text-[#52665a]">{x.v}</p><p className="mt-3 text-sm leading-6 text-[#718075]">{x.b}</p></div></article>)}</div><p className="mt-4 text-xs leading-5 text-[#7a857c]">Actual charging speed depends on the vehicle, connector, charger, electrical supply and conditions. Confirm compatibility, certifications, warranty, installation scope and service-level terms with the supplier.</p></div></section>
    </main>
  );
}
