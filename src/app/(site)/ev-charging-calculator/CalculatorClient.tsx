"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Info, IndianRupee } from "lucide-react";

const chargerOptions = [
  { id: "socket", group: "2W / 3W", label: "Basic 3.3 kW charging socket", price: 5250, kw: 3.3, maintenance: 1599 },
  { id: "connected", group: "2W / 3W", label: "Connected 3.3 kW charger (4G)", price: 7875, kw: 3.3, maintenance: 1599 },
  { id: "dc3", group: "2W / 3W", label: "3 kW DC fast charger — dual connector", price: 91350, kw: 3, maintenance: 16999 },
  { id: "dc6", group: "2W / 3W", label: "6 kW DC fast charger — single connector", price: 147000, kw: 6, maintenance: 16999 },
  { id: "dc12", group: "2W / 3W", label: "12 kW DC fast charger — single connector", price: 189000, kw: 12, maintenance: 16999 },
  { id: "ac74", group: "Cars — AC", label: "7.4 kW AC charger", price: 26250, kw: 7.4, maintenance: 2999 },
  { id: "ac11", group: "Cars — AC", label: "11 kW AC charger", price: 36750, kw: 11, maintenance: 4999 },
  { id: "ac22", group: "Cars — AC", label: "22 kW AC charger (price requires supplier confirmation)", price: 36750, kw: 22, maintenance: 4999 },
  { id: "fleet30", group: "Cars / fleets — DC", label: "30 kW DC charger — single connector", price: 346500, kw: 30, maintenance: 16999 },
  { id: "fleet60", group: "Cars / fleets — DC", label: "60 kW DC charger — dual connector", price: 640500, kw: 60, maintenance: 28999 },
  { id: "fleet120", group: "Cars / fleets — DC", label: "120 kW DC charger — dual connector", price: 850500, kw: 120, maintenance: 52999 },
  { id: "fleet180", group: "Cars / fleets — DC", label: "180 kW DC charger — dual connector", price: 1260000, kw: 180, maintenance: 68000 },
  { id: "fleet240", group: "Cars / fleets — DC", label: "240 kW DC charger — dual connector", price: 1470000, kw: 240, maintenance: 84999 },
];

const money = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);

export default function CalculatorClient() {
  const [model, setModel] = useState("without");
  const [packagePlan, setPackagePlan] = useState("starter");
  const [charger, setCharger] = useState("fleet30");
  const [chargerCount, setChargerCount] = useState(1);
  const [cyclesPerGunDay, setCyclesPerGunDay] = useState(8);
  const [sessionsPerDay, setSessionsPerDay] = useState(8);
  const [kwhPerSession, setKwhPerSession] = useState(4.8);
  const [sellingRate, setSellingRate] = useState(18);
  const [energyCost, setEnergyCost] = useState(15.5);
  const [cmsRate, setCmsRate] = useState(15);

  const selectedCharger = chargerOptions.find((item) => item.id === charger) ?? chargerOptions[8];
  const packageData = packagePlan === "growth"
    ? { label: "Growth Node", investment: 500000, chargers: 4, guns: 8, fixedCosts: 9000 }
    : { label: "Starter Node", investment: 375000, chargers: 3, guns: 6, fixedCosts: 8000 };

  const estimate = useMemo(() => {
    const sessions = (model === "without" ? packageData.guns * cyclesPerGunDay : sessionsPerDay * chargerCount) * 30;
    const energy = sessions * kwhPerSession;
    const gross = energy * sellingRate;
    const powerCost = energy * energyCost;
    const fees = model === "without" ? 0 : gross * cmsRate / 100;
    const maintenance = model === "without" ? packageData.fixedCosts : selectedCharger.maintenance * chargerCount / 12;
    const investment = model === "without" ? packageData.investment : selectedCharger.price * chargerCount;
    const net = gross - powerCost - fees - maintenance;
    return { sessions, energy, gross, powerCost, fees, maintenance, investment, net, annual: net * 12, payback: net > 0 ? investment / net : null };
  }, [model, packageData, cyclesPerGunDay, sessionsPerDay, chargerCount, kwhPerSession, sellingRate, energyCost, cmsRate, selectedCharger]);

  const field = "mt-2 w-full rounded-xl border border-[#d8e2d8] bg-white px-3 py-3 text-sm text-[#17212b] outline-none focus:border-[#0b7652] focus:ring-2 focus:ring-[#0b7652]/15";
  const label = "block text-sm font-bold text-[#294236]";

  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#17212b]">
      <section className="bg-[#092d20] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffc18f]">Planning tool</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">EV Charging Station Investment Calculator</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/80">Calculate an indicative monthly operating result using your assumptions for charging activity, selling price, electricity cost and charger choice.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-5 py-10 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-14">
        <div className="rounded-3xl border border-[#e0e8e0] bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf4ed] text-[#0b7652]"><Calculator size={23}/></span><div><h2 className="text-xl font-black text-[#173628]">Your assumptions</h2><p className="mt-1 text-sm text-[#647067]">Change the inputs to explore scenarios.</p></div></div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className={label}>Site / business model<select className={field} value={model} onChange={e=>setModel(e.target.value)}><option value="without">Partner-site package (without land)</option><option value="with">Land or site owner</option></select></label>
            {model === "without" ? <label className={label}>Package<select className={field} value={packagePlan} onChange={e=>setPackagePlan(e.target.value)}><option value="starter">Starter Node — ₹3,75,000</option><option value="growth">Growth Node — ₹5,00,000</option></select></label> : <label className={label}>Charger type<select className={field} value={charger} onChange={e=>setCharger(e.target.value)}>{chargerOptions.map(item=><option key={item.id} value={item.id}>{item.label}</option>)}</select></label>}
            {model === "with" && <label className={label}>Number of chargers<input className={field} type="number" min="1" max="100" value={chargerCount} onChange={e=>setChargerCount(Math.max(1,Math.min(100,Number(e.target.value)||1)))}/></label>}
            <label className={label}>{model === "without" ? "Cycles per connector per day" : "Charging sessions per charger per day"}<input className={field} type="number" min="0" max="200" value={model === "without" ? cyclesPerGunDay : sessionsPerDay} onChange={e=>model === "without" ? setCyclesPerGunDay(Math.max(0,Math.min(200,Number(e.target.value)||0))) : setSessionsPerDay(Math.max(0,Math.min(200,Number(e.target.value)||0)))}/></label>
            <label className={label}>Average energy per session (kWh)<input className={field} type="number" min="0" step="0.1" value={kwhPerSession} onChange={e=>setKwhPerSession(Math.max(0,Number(e.target.value)||0))}/></label>
            <label className={label}>Customer selling rate (₹/kWh)<input className={field} type="number" min="0" step="0.5" value={sellingRate} onChange={e=>setSellingRate(Math.max(0,Number(e.target.value)||0))}/></label>
            <label className={label}>Electricity / energy cost (₹/kWh)<input className={field} type="number" min="0" step="0.5" value={energyCost} onChange={e=>setEnergyCost(Math.max(0,Number(e.target.value)||0))}/></label>
            {model === "with" && <label className={label}>Charging management fee (%)<input className={field} type="number" min="0" max="100" step="1" value={cmsRate} onChange={e=>setCmsRate(Math.max(0,Math.min(100,Number(e.target.value)||0)))}/></label>}
          </div>
          <div className="mt-6 rounded-2xl border border-[#f0dfcc] bg-[#fff8f1] p-4 text-sm leading-6 text-[#77502f]"><Info className="mr-2 inline" size={16}/>This is an illustrative planning tool. Actual charger prices, electricity tariffs, usage, fees and operating costs must be confirmed before investment.</div>
        </div>

        <aside className="self-start rounded-3xl bg-[#092d20] p-6 text-white shadow-lg sm:p-7">
          <div className="flex items-center gap-2 text-sm font-bold text-[#ffc18f]"><IndianRupee size={18}/> Estimated monthly results</div>
          <p className="mt-5 text-sm text-white/70">Indicative investment</p><p className="mt-1 text-3xl font-black">{money(estimate.investment)}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/65">Monthly revenue</p><p className="mt-2 text-lg font-extrabold">{money(estimate.gross)}</p></div>
            <div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/65">Energy expense</p><p className="mt-2 text-lg font-extrabold">{money(estimate.powerCost)}</p></div>
            <div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/65">Monthly maintenance / fixed costs</p><p className="mt-2 text-lg font-extrabold">{money(estimate.maintenance)}</p></div>
            <div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/65">Management fees</p><p className="mt-2 text-lg font-extrabold">{money(estimate.fees)}</p></div>
          </div>
          <div className="mt-5 border-t border-white/15 pt-5"><p className="text-sm text-white/70">Indicative monthly operating surplus</p><p className={"mt-1 text-3xl font-black " + (estimate.net >= 0 ? "text-[#9ee4b5]" : "text-[#ffb4a8]")}>{money(estimate.net)}</p><p className="mt-2 text-sm text-white/70">Annualised at the same assumptions: {money(estimate.annual)}</p><p className="mt-4 text-sm text-white/70">Simple payback estimate: {estimate.payback ? (estimate.payback/12).toFixed(1) + " years" : "Not calculated while monthly surplus is zero or negative"}</p></div>
          <div className="mt-5 rounded-xl bg-white/10 p-4 text-xs leading-5 text-white/75">Monthly activity estimated at {estimate.sessions.toLocaleString("en-IN")} sessions and {estimate.energy.toLocaleString("en-IN",{maximumFractionDigits:0})} kWh. Figures exclude costs not entered or included in the model, including civil works, installation, electrical upgrades, rent, financing, taxes and downtime.</div>
          <Link href="/ev-charging-investment-guide" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#ffc18f] hover:text-white">Read investment guide <ArrowRight size={16}/></Link>
        </aside>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-10"><div className="rounded-2xl border border-[#e0e8e0] bg-white p-6"><h2 className="text-lg font-extrabold text-[#173628]">Before you invest</h2><p className="mt-2 text-sm leading-6 text-[#647067]">Validate the site, sanctioned electrical load, charger compatibility, local approvals, utility tariff, demand forecast, maintenance contract and written commercial terms. The displayed payback is a simplified estimate, not a guarantee of earnings or a substitute for a project-specific financial model.</p><Link href="/faq" className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#0b7652]">Review FAQs and permissions <ArrowRight size={15}/></Link></div></section>
    </main>
  );
}
