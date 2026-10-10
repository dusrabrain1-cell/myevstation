"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BatteryCharging, ShieldCheck, MapPin, Zap, Gauge, Leaf, Menu, X, CheckCircle2, CarFront, Bike, Building2, Calculator, IndianRupee, ChevronDown, RadioTower, Route, PlugZap, Users, Flag, Target, BadgeCheck } from "lucide-react";

const sections = [
  { label: "Home", href: "#home" },
  { label: "Why MyEVStation", href: "#mission" },
  { label: "Business Model", href: "#model" },
  { label: "Technology", href: "#technology" },
  { label: "Investment", href: "#investment" },
  { label: "Impact", href: "#impact" },
  { label: "About Us", href: "#contact" },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
    { id: "ac22", group: "Cars — AC", label: "22 kW AC charger", price: 36750, kw: 22, maintenance: 4999 },
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
    return { investment: selectedCharger.price * chargerCount, chargers: chargerCount, guns: chargerCount, sessions, energy, gross, powerCost, fees, maintenance, net, annual: net * 12, payback: net > 0 ? (selectedCharger.price * chargerCount) / net : null, basis: "Land/site-owner estimate: quoted charger hardware only, user-adjustable sessions, kWh/session, tariff and energy cost, 15% CMS fee by default, and annual maintenance divided monthly. Installation, civil work, electrical upgrades, rent, taxes beyond quoted price and financing are excluded." };
  }, [land, packagePlan, packageData.investment, packageData.chargers, packageData.guns, packageData.fixedCosts, cyclesPerGunDay, customSessionsPerDay, chargerCount, kwhPerSession, sellingRate, energyCost, cmsRate, selectedCharger]);

  return (
    <main id="home" className="min-h-screen bg-white text-[#17212b]">
      <header className="relative z-50 border-b border-[#e4e9e4] bg-white/95 shadow-[0_4px_18px_rgba(7,30,22,0.06)] backdrop-blur-md">
        <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-3 px-4 py-2 lg:min-h-[82px] lg:gap-4 lg:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="MyEVStation home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-white shadow-sm sm:h-11 sm:w-11"><Zap size={24} fill="currentColor" /></span>
            <span className="leading-tight"><span className="block whitespace-nowrap text-[19px] font-extrabold tracking-tight text-[#172d21] sm:text-[21px]">my<span className="text-[#e87522]">EV</span>Station</span><span className="mt-0.5 block whitespace-nowrap text-[8px] font-extrabold uppercase tracking-[.09em] text-[#0b5a42] sm:text-[9px]">Founded by Ex-Indian Air Force</span></span>
          </Link>
          <nav className="hidden min-w-0 flex-1 items-center justify-start gap-3 pl-1 lg:flex xl:gap-4 xl:pl-2">{sections.map(s => <a key={s.href} href={s.href} className="shrink-0 whitespace-nowrap text-[12px] font-semibold text-[#35423e] transition hover:text-[#e87522] xl:text-[13px]">{s.label}</a>)}<a href="#contact" className="ml-auto inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-[#e87522] px-4 py-3 text-[12px] font-extrabold text-white shadow-sm transition hover:bg-[#c75b14] xl:px-5 xl:text-[13px]">Own an EV Station <ArrowRight className="ml-2 inline shrink-0" size={16}/></a></nav>
          <button className="rounded-lg border border-black/10 p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
        {mobileOpen && <nav className="grid gap-1 border-t border-black/10 bg-white px-5 py-4 lg:hidden">{sections.map(s => <a key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 font-semibold">{s.label}</a>)}<a href="#contact" onClick={() => setMobileOpen(false)} className="rounded-lg bg-[#e87522] px-3 py-3 font-bold text-white">Own an EV Station</a></nav>}
      </header>

      <section id="home-hero" className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#071e16]">
        <img src="/myevstation-hero-banner.jpeg" alt="MyEVStation EV charging station, Indian tricolour and veteran leader" className="absolute inset-0 -z-30 h-full w-full object-cover object-[58%_center]" fetchPriority="high" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#061b14]/70 via-[#061b14]/30 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061b14]/30 via-transparent to-transparent" />
        <div className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[1600px] items-center px-5 py-7 sm:px-10 sm:py-8 lg:px-16">
          <div className="w-full max-w-[min(47%,660px)] text-white max-lg:max-w-[56%] max-sm:max-w-full max-sm:rounded-xl max-sm:bg-[#061b14]/60 max-sm:p-4">
            <div className="mb-3 inline-flex max-w-full items-center gap-1.5 border-l-4 border-[#e87522] bg-[#061b14]/35 px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[.075em] backdrop-blur-sm sm:gap-2 sm:px-3 sm:text-[10px] sm:tracking-[.09em]">
              <span className="text-[#ff9b42]">🇮🇳</span> A veteran-led mission for a cleaner, stronger India
            </div>
            <h1 className="max-w-[650px] text-[clamp(2rem,3.7vw,3.8rem)] font-black leading-[.96] tracking-[-.045em] drop-shadow-lg">
              EV CHARGING STATIONS FOR INDIA’S NEXT MISSION
              <span className="mt-2 block"><span className="text-[#ff8b2b]">Powering</span> <span className="text-white">Clean Energy</span></span>
            </h1>
            <p className="mt-3 max-w-xl text-sm font-semibold leading-5 text-white drop-shadow sm:text-base sm:leading-6">
              Own an EV charging business with or without land. Compare investment options, understand the setup process and discuss site suitability, operating responsibilities and estimated returns before you decide.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e87522] px-4 py-3 text-xs font-extrabold text-white shadow-xl transition hover:bg-[#c75b14] sm:px-5 sm:text-sm">Own an EV Station <ArrowRight size={15}/></a>
              <a href="#model" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/80 bg-[#061b14]/35 px-4 py-3 text-xs font-extrabold text-white backdrop-blur transition hover:bg-white/20 sm:px-5 sm:text-sm">Explore Business Models <ArrowRight size={15}/></a>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] font-bold text-white drop-shadow sm:text-xs">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14}/> Safety-first technology</span>
              <span className="inline-flex items-center gap-1.5"><Zap size={14}/> AC & DC charging</span>
              <span className="inline-flex items-center gap-1.5"><Flag size={14}/> Built for India’s future</span>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e87522] via-white to-[#16834a]" />
      </section>

      <section id="impact" className="border-y border-[#e4e9e4] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
          {[{icon:Leaf,title:"1000+",sub:"EV stations target"},{icon:Users,title:"10,000+",sub:"Jobs & livelihoods"},{icon:BatteryCharging,title:"1M+ Tons",sub:"CO₂ reduction ambition"},{icon:MapPin,title:"Pan India",sub:"Expansion vision"},{icon:Flag,title:"One Mission",sub:"A cleaner, self-reliant India"}].map(({icon:Icon,title,sub})=><div key={title} className="flex items-center gap-3 py-2"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eaf4ed] text-[#155b39]"><Icon size={24}/></span><span><b className="block text-lg font-extrabold text-[#102b20]">{title}</b><span className="block text-xs text-[#66736a]">{sub}</span></span></div>)}
        </div>
      </section>

      <section className="border-y border-[#e3e9e4] bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">{[{a:"EV ACCESS",b:"For every journey",I:CarFront},{a:"VETERAN-LED",b:"A mission beyond service",I:Flag},{a:"SMART CHARGING",b:"AC & DC infrastructure",I:Zap},{a:"BATTERY SAFETY",b:"Diagnostics-led approach",I:ShieldCheck},{a:"CLEANER MOBILITY",b:"Supporting India's transition",I:Leaf}].map(({a,b,I})=><div key={a} className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eaf3ed] text-[#0b7652]"><I size={20}/></span><span><b className="block text-[10px] tracking-widest text-[#0b5a42]">{a}</b><span className="mt-1 block text-xs text-[#65716a]">{b}</span></span></div>)}</div></section>

      <section id="model" className="bg-[#f7f9f6] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Choose your entry point</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#15281f] sm:text-5xl">How would you like to start?</h2>
            <p className="mt-4 text-base leading-7 text-[#647067]">Choose the option that describes you. The next page explains the model, costs and steps in simple language.</p>
          </div>
          <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border-2 border-[#e87522] bg-white shadow-[0_12px_35px_rgba(11,90,66,0.12)] transition hover:-translate-y-1 hover:shadow-xl">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#e87522] via-white to-[#13834b]"/>
              <div className="relative h-[150px] shrink-0 overflow-hidden sm:h-[160px]">
                <img src="/ev-veterans.jpg" alt="Veteran leader at an EV charging station" className="h-full w-full object-cover object-[center_28%]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071e16]/55 via-transparent to-[#071e16]/10"/>
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2"><span className="rounded-full bg-[#ffe2cf] px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#bd5518]">Option 01 · Veterans</span><span className="rounded-full bg-[#0b5a42] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white">A new mission</span></div>
              </div>
              <div className="flex flex-1 flex-col items-center bg-gradient-to-b from-[#f0f7f0] to-white px-5 pb-5 pt-5 text-center sm:px-6">
                <p className="text-[9px] font-black uppercase tracking-[.16em] text-[#bd5518]">SERVICE DOESN’T END. IT EVOLVES.</p>
                <h3 className="mt-2 text-[1.35rem] font-black leading-[1.05] tracking-tight text-[#142f24] sm:text-[1.45rem]">YOUR NEXT MISSION<br/>STARTS HERE.</h3>
                <p className="mt-3 text-sm leading-5 text-[#52665a]">Turn your experience, discipline and leadership into a new chapter in India’s EV future.</p>
                <div className="mt-auto pt-4"><span className="inline-flex rounded-full border border-[#c8ddce] bg-white px-3 py-1.5 text-[10px] font-bold text-[#0b5a42]">Purpose · Opportunity · Service</span></div>
              </div>
              <div className="flex min-h-[86px] items-center p-4"><Link href="/ex-servicemen" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e87522] px-4 py-3 text-center text-sm font-extrabold text-white shadow-sm transition hover:bg-[#cf6218]">Start your next mission <ArrowRight size={16}/></Link></div>
            </article>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[#dfe7df] bg-white shadow-[0_8px_24px_rgba(11,90,66,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(11,90,66,0.16)]">
              <div className="relative h-[150px] shrink-0 overflow-hidden sm:h-[160px]">
                <img src="/ev-without-land.jpg" alt="Modern electric vehicle charging at an urban host location" loading="lazy" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071e16]/65 via-[#071e16]/10 to-transparent"/>
                <span className="absolute left-4 top-4 rounded-full bg-[#dceee5]/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#0b5a42]">Option 02 · No land</span>
                <span className="absolute bottom-3 left-4 text-xs font-bold tracking-wide text-white drop-shadow">A smarter way to get started</span>
              </div>
              <div className="flex min-h-[230px] flex-1 flex-col items-center bg-gradient-to-b from-[#f2f7f2] to-white px-6 pb-6 pt-5 text-center sm:px-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0b5a42] shadow-sm ring-1 ring-[#e4ece5]"><Users size={34} strokeWidth={1.8}/></div>
                <h3 className="mt-4 min-h-[58px] text-2xl font-black leading-tight text-[#142f24]">NO LAND?</h3>
                <p className="mt-1 text-sm leading-6 text-[#647168]">Start at a suitable host location without purchasing land. Compare the investment and managed station model.</p>
              </div>
              <div className="flex min-h-[86px] items-center p-4"><Link href="/without-land" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b5a42] px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#084632]">Explore no-land model <ArrowRight size={16}/></Link></div>
            </article>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[#dfe7df] bg-white shadow-[0_8px_24px_rgba(11,90,66,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(11,90,66,0.16)]">
              <div className="relative h-[150px] shrink-0 overflow-hidden sm:h-[160px]">
                <img src="/ev-society.jpg" alt="Electric vehicle charging facilities for a residential community" loading="lazy" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071e16]/65 via-[#071e16]/10 to-transparent"/>
                <span className="absolute left-4 top-4 rounded-full bg-[#dceaf9]/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#176a8a]">Option 03 · Community</span>
                <span className="absolute bottom-3 left-4 text-xs font-bold tracking-wide text-white drop-shadow">Convenient charging, closer to home</span>
              </div>
              <div className="flex min-h-[230px] flex-1 flex-col items-center bg-gradient-to-b from-[#f0f6fa] to-white px-6 pb-6 pt-5 text-center sm:px-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#176a8a] shadow-sm ring-1 ring-[#e0eaf0]"><Building2 size={34} strokeWidth={1.8}/></div>
                <h3 className="mt-4 min-h-[58px] text-2xl font-black leading-tight text-[#142f24]">LIVE IN A SOCIETY?</h3>
                <p className="mt-1 text-sm leading-6 text-[#647168]">Make resident charging easier with smart sockets, AC chargers and DC options for suitable shared spaces.</p>
              </div>
              <div className="flex min-h-[86px] items-center p-4"><Link href="/society" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#176a8a] px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#125875]">Explore society charging <ArrowRight size={16}/></Link></div>
            </article>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[#dfe7df] bg-white shadow-[0_8px_24px_rgba(11,90,66,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(11,90,66,0.16)]">
              <div className="relative h-[150px] shrink-0 overflow-hidden sm:h-[160px]">
                <img src="/ev-with-land.jpg" alt="Contemporary EV charging station on a dedicated property" loading="lazy" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071e16]/65 via-[#071e16]/10 to-transparent"/>
                <span className="absolute left-4 top-4 rounded-full bg-[#dceee5]/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#0b5a42]">Option 04 · Landowners</span>
                <span className="absolute bottom-3 left-4 text-xs font-bold tracking-wide text-white drop-shadow">Turn your space into a charging destination</span>
              </div>
              <div className="flex min-h-[230px] flex-1 flex-col items-center bg-gradient-to-b from-[#f2f7f2] to-white px-6 pb-6 pt-5 text-center sm:px-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0b5a42] shadow-sm ring-1 ring-[#e4ece5]"><MapPin size={34} strokeWidth={1.8}/></div>
                <h3 className="mt-4 min-h-[58px] text-2xl font-black leading-tight text-[#142f24]">HAVE LAND?</h3>
                <p className="mt-1 text-sm leading-6 text-[#647168]">Use your plot, parking area, commercial property or fleet site to set up a suitable EV charging destination.</p>
              </div>
              <div className="flex min-h-[86px] items-center p-4"><Link href="/with-land" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b5a42] px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#084632]">Explore with-land model <ArrowRight size={16}/></Link></div>
            </article>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white pt-16 pb-10 sm:pt-20 sm:pb-12"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mx-auto max-w-3xl text-center"><span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Simple from day one</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#15281f] sm:text-4xl">How an EV charging station business works</h2><p className="mt-3 leading-7 text-[#647067]">You don’t need to be an electrical engineer. Start with the right site, a suitable charger plan and a clear operating agreement.</p></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{n:"01",t:"Choose your route",b:"Bring your own land, or ask about a host location if you don’t own property."},{n:"02",t:"Check the site",b:"Review power availability, parking, vehicle demand, access and permissions before committing."},{n:"03",t:"Install & connect",b:"Select AC or DC chargers, arrange installation, connect monitoring and test the setup."},{n:"04",t:"Operate & track",b:"Drivers charge and pay; review usage, expenses, service status and settlements under your agreement."}].map(s=><article key={s.n} className="rounded-2xl border border-[#e3e9e4] bg-[#f8faf7] p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-sm font-black text-white">{s.n}</span><h3 className="mt-4 text-lg font-extrabold text-[#172d21]">{s.t}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{s.b}</p></article>)}</div><div className="mt-6 rounded-2xl border border-[#dbe8dd] bg-[#eef7ef] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><h3 className="font-extrabold text-[#16462f]">Not sure which charger you need?</h3><p className="mt-1 text-sm leading-6 text-[#58695d]">Slow charging may suit long parking stays. DC fast charging may suit busy fleet or public locations. The right choice depends on vehicle type, site power and expected demand.</p></div><a href="#contact" className="mt-4 inline-flex shrink-0 items-center rounded-full bg-[#0b5a42] px-5 py-3 text-sm font-bold text-white sm:mt-0">Get help choosing <ArrowRight className="ml-2" size={16}/></a></div></div></section>

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
              <div className="mb-6"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d96a1b]">{land==="society"?"Society / RWA charging model":"Land / site-owner model"}</p><h3 className="mt-1 text-2xl font-black text-[#172d21]">{land==="society"?"Plan your society charging setup":"Choose your charging hardware"}</h3><p className="mt-2 text-sm leading-6 text-[#68746b]">{land==="society"?"Estimate one resident charger or scale to shared parking, visitor charging and a larger society charging zone. Select hardware and quantity below.":"Hardware prices are from the supplied charger quotation, including 5% GST where stated. Add site works after a survey."}</p></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-bold text-[#34463a]">{land==="society"?"Society vehicle / charger type":"Vehicle / charger option"}<select value={charger} onChange={e=>setCharger(e.target.value)} className="mt-2 w-full rounded-xl border border-[#dbe3db] bg-white p-3 font-medium">{chargerOptions.map(x=><option key={x.id} value={x.id}>{x.group} — {x.label} ({money(x.price)})</option>)}</select></label>
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
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">{land==="society"?"Estimated society hardware budget":"Estimated equipment investment"}</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{money(estimate.investment)}</b><span className="mt-1 block text-[10px] leading-4 text-[#7c877e]">{land==="without"?"Package price from supplied term sheet":land==="society"?"Quoted hardware for selected society charger quantity":"Quoted charger hardware only"}</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Monthly energy sold</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{Math.round(estimate.energy).toLocaleString("en-IN")} kWh</b><span className="mt-1 block text-[10px] text-[#7c877e]">{Math.round(estimate.sessions).toLocaleString("en-IN")} charging sessions / month</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Gross billing / month</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{money(estimate.gross)}</b><span className="mt-1 block text-[10px] text-[#7c877e]">Before energy and operating costs</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Energy cost / month</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{money(estimate.powerCost)}</b><span className="mt-1 block text-[10px] text-[#7c877e]">At selected energy cost</span></div>
              <div className="rounded-xl border border-[#d7e7d9] bg-[#edf6ee] p-4"><span className="text-xs font-semibold text-[#52705a]">{land==="without"?"Indicative net cash flow / month":"Illustrative balance / month"}</span><b className={`mt-2 block text-xl font-extrabold ${estimate.net>=0?"text-[#0b7652]":"text-[#b42318]"}`}>{money(estimate.net)}</b><span className="mt-1 block text-[10px] text-[#52705a]">{land==="without"?"After package fixed costs":"After energy, CMS and estimated maintenance"}</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Annualised estimate</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{money(estimate.annual)}</b><span className="mt-1 block text-[10px] text-[#7c877e]">Assumes same monthly activity for 12 months</span></div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Simple equipment payback</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{estimate.payback===null?"Not reached at these assumptions":`${estimate.payback.toFixed(1)} months`}</b><span className="mt-1 block text-[10px] leading-4 text-[#7c877e]">Investment divided by monthly balance; excludes financing, taxes and setup costs not listed.</span></div>
              <div className="rounded-xl border border-[#e4e9e2] bg-white p-4"><span className="text-xs font-semibold text-[#778279]">Other monthly costs included</span><b className="mt-2 block text-xl font-extrabold text-[#142f24]">{money(estimate.maintenance + estimate.fees)}</b><span className="mt-1 block text-[10px] leading-4 text-[#7c877e]">{land==="without"?"Package fixed costs include telemetry, insurance and central maintenance pool.":"CMS fee plus maintenance provision based on supplied annual maintenance figures."}</span></div>
            </div>
            <p className="mt-4 text-xs leading-5 text-[#7c877e]">{estimate.basis} {land!=="without"?(land==="society"?"Society estimate covers selected charger hardware and adjustable charging assumptions only. Wiring, metering, load upgrades, civil work, RWA permissions, installation and any common-area charges require a site survey.":"Hardware prices are indicative quoted prices, not turnkey station costs."):"The package term sheet assumes high utilisation (8 cycles per gun daily); reduce the slider to explore lower demand. All site terms and settlement deductions must be confirmed in writing."}</p>
            <div className="mt-5 flex flex-wrap gap-3"><a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e87522] px-5 py-3.5 text-sm font-extrabold text-white">Discuss this estimate <ArrowRight size={16}/></a><a href="/without-land#packages" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0b5a42]/20 bg-white px-5 py-3.5 text-sm font-bold text-[#0b5a42]">Compare partner packages</a></div>
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
            <div><b className="flex items-center gap-2 text-sm font-extrabold text-[#142f24]"><MapPin size={17} className="text-[#0b7652}"/> Have land?</b><p className="mt-2 text-sm leading-6 text-[#647067]">Explore a site-owner model for suitable plots, parking, commercial property or fleets.</p><a href="/with-land" className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[#0b5a42]">Explore with land <ArrowRight size={14}/></a></div>
            <div><b className="flex items-center gap-2 text-sm font-extrabold text-[#142f24]"><Users size={17} className="text-[#0b7652}"/> No land?</b><p className="mt-2 text-sm leading-6 text-[#647067]">Explore partner opportunities at suitable host locations without buying land.</p><a href="/without-land" className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[#0b5a42]">Explore no-land model <ArrowRight size={14}/></a></div>
            <div><b className="flex items-center gap-2 text-sm font-extrabold text-[#142f24]"><ShieldCheck size={17} className="text-[#0b7652}"/> Safety-led approach</b><p className="mt-2 text-sm leading-6 text-[#647067]">Explore connected charging infrastructure and AI-enabled battery diagnostics designed to support better visibility and safety decisions.</p><a href="#technology" className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[#0b5a42]">See the technology <ArrowRight size={14}/></a></div>
          </div>
        </div>
      </section>

      <section id="charger-guide" className="bg-[#f7f9f6] py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mx-auto max-w-3xl text-center"><span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">A simple guide</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#15281f] sm:text-4xl">Which charger is right for your location?</h2><p className="mt-3 leading-7 text-[#647067]">Different vehicles and parking times need different chargers. These are indicative charger categories from the supplied technical profile—not a final site design or price quote.</p></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{p:"3.3 kW",t:"Basic / overnight charging",v:"Homes, small businesses and longer parking stays",b:"Simple AC supply; a portable charging setup may be required.",img:"/ev-society.jpg"},{p:"3–12 kW",t:"Two- & three-wheeler DC",v:"Electric scooter and e-rickshaw fleets",b:"Designed for frequent fleet charging and quicker turnarounds.",img:"/ev-2w-3w-dc.png"},{p:"7.4–22 kW",t:"AC charging for cars",v:"Offices, malls, societies and destinations",b:"Useful where cars remain parked for a while.",img:"/ev-with-land.jpg"},{p:"30–240 kW",t:"High-power DC charging",v:"Buses, trucks, highways and commercial fleets",b:"For higher-demand sites; needs suitable electrical capacity and planning.",img:"/ev-bus-fleet-dc.png"}].map(x=><article key={x.p} className="overflow-hidden rounded-2xl border border-[#e1e8e0] bg-white shadow-sm"><div className="relative h-44 overflow-hidden bg-[#eaf3ed]"><img src={x.img} alt={x.t} className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.03]"/><div className="absolute inset-0 bg-gradient-to-t from-[#092d20]/25 via-transparent to-transparent"/><span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-[10px] font-extrabold tracking-wide text-[#0b5a42]">MYEVSTATION · CHARGING</span></div><div className="p-5"><span className="inline-flex rounded-lg bg-[#e8f4ea] px-3 py-2 text-lg font-black text-[#0b7652]">{x.p}</span><h3 className="mt-4 text-lg font-extrabold text-[#172d21]">{x.t}</h3><p className="mt-2 text-sm font-semibold text-[#52665a]">{x.v}</p><p className="mt-3 text-sm leading-6 text-[#718075]">{x.b}</p></div></article>)}</div><p className="mt-4 text-xs leading-5 text-[#7a857c]">Actual charging speed depends on the vehicle, connector, charger, electrical supply and conditions. Confirm compatibility, certifications, warranty, installation scope and service-level terms with the supplier.</p></div></section>

      <section id="technology" className="bg-[#10291f] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffb181]">Technology &amp; safety</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Two technology layers. One safer EV ecosystem.</h2>
            <p className="mt-5 leading-7 text-white/70">MyEVStation brings together EV charging infrastructure and a connected AI-enabled battery diagnostics approach—helping operators plan charging access while adding visibility into battery condition and charging-system performance.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[.06]">
              <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e87522] text-white"><PlugZap size={25}/></span>
                <div><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#ffb181]">Technology 01</p><h3 className="mt-1 text-2xl font-extrabold">EV Charging Infrastructure</h3></div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-white/70">Charging solutions can be configured for different vehicle types and site needs, from everyday two- and three-wheeler charging to cars, fleets and higher-power commercial applications.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[{I:Bike,t:"2- & 3-wheelers",b:"Charging options for electric scooters, motorcycles and autos."},{I:CarFront,t:"Cars & commercial EVs",b:"AC and DC options selected to suit use case and site capacity."},{I:Building2,t:"Site planning",b:"Assess location, electrical load, access, dwell time and demand."},{I:RadioTower,t:"Connected operations",b:"Where supported, monitor charging activity and station performance."},{I:PlugZap,t:"Charger selection",b:"Compare 3.3 kW sockets, compact DC chargers, AC car chargers and higher-power fleet options."},{I:ShieldCheck,t:"Electrical readiness",b:"Check sanctioned load, protection, earthing, cabling and required approvals before installation."},{I:IndianRupee,t:"Payments & usage",b:"Plan tariffs, charging-session records and management-fee assumptions for a clearer operating picture."},{I:CheckCircle2,t:"Service & maintenance",b:"Define installation checks, preventive maintenance, warranty responsibilities and escalation support."}].map(({I,t,b})=><div key={t} className="rounded-xl border border-white/10 bg-[#0b2018]/70 p-4"><I className="text-[#ffb181]" size={22}/><h4 className="mt-3 text-sm font-extrabold">{t}</h4><p className="mt-1 text-xs leading-5 text-white/65">{b}</p></div>)}
                </div>
              </div>
            </article>
            <article className="overflow-hidden rounded-[1.6rem] border border-[#e87522]/50 bg-white/[.06]">
              <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0b7652] text-white"><ShieldCheck size={25}/></span>
                <div><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#ffb181]">Technology 02</p><h3 className="mt-1 text-2xl font-extrabold">AI Battery Diagnostics &amp; IoT Safety</h3></div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-white/70">A patented IoT diagnostic device and AI analysis layer are designed to turn electrical signals captured during charging into useful battery-health insights. The technology materials describe non-invasive rapid testing during a standard fast-charge session.</p>
                <div className="mt-5 space-y-3">
                  {[{I:Zap,t:"Physics-based signal capture",b:"Analyses charging current, temperature and impedance-related signals."},{I:BatteryCharging,t:"Battery-health indicators",b:"Estimates State of Power (SoP), State of Function (SoF), and efficiency or range-loss indicators."},{I:Gauge,t:"AI-assisted anomaly detection",b:"Helps surface unusual patterns and potential thermal or performance risks for review."},{I:RadioTower,t:"Connected IoT visibility",b:"Diagnostic outputs can be shared with digital dashboards for operator and fleet visibility, where integrations are enabled."}].map(({I,t,b})=><div key={t} className="flex gap-3 rounded-xl border border-white/10 bg-[#0b2018]/70 p-4"><span className="mt-0.5 text-[#ffb181]"><I size={21}/></span><div><h4 className="text-sm font-extrabold">{t}</h4><p className="mt-1 text-xs leading-5 text-white/65">{b}</p></div></div>)}
                </div>
                <p className="mt-4 rounded-lg bg-white/5 p-3 text-[11px] leading-5 text-white/55">Diagnostics are intended to support safety awareness and maintenance decisions; they do not replace the vehicle manufacturer’s battery-management system, certified inspection, or required safety procedures. Performance depends on implementation and validation.</p>
              </div>
            </article>
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div><h3 className="font-extrabold">Technology should earn trust.</h3><p className="mt-1 text-sm leading-6 text-white/65">We focus on appropriate charger selection, connected operations and safety-led diagnostics—not promises of zero risk.</p></div>
            <a href="#contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#e87522] px-6 py-3.5 text-sm font-extrabold text-white">Discuss a partnership <ArrowRight className="ml-2" size={16}/></a>
          </div>
        </div>
      </section>
      <section id="mission" className="scroll-mt-20 border-y border-[#dfe8df] bg-[#f5f8f3] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[1.8rem] bg-[#0b3022] p-7 text-white shadow-[0_20px_60px_rgba(11,48,34,0.16)] sm:p-10">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10"/><div className="absolute -right-4 -top-4 h-44 w-44 rounded-full border border-white/10"/>
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#ffc18f]"><Flag size={13}/> Why MyEVStation</span>
                <h2 className="mt-6 text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl">Aircraft-level discipline.<br/><span className="text-[#ff9a4a]">A new mission for EV infrastructure.</span></h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">Founded by ex-Indian Air Force professionals, MyEVStation brings a safety-first mindset shaped by nearly four decades of aircraft maintenance and technical experience to India’s evolving EV ecosystem.</p>
              </div>
              <div className="relative mt-8 rounded-2xl border border-white/15 bg-white/[.07] p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#ffc18f]">The opportunity is growing</p>
                <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1"><span className="text-4xl font-black tracking-tight sm:text-5xl">52,718</span><span className="pb-1 text-sm font-semibold text-white/80">public EV charging stations</span></div>
                <p className="mt-2 text-xs leading-5 text-white/60">Reported nationally by India’s Ministry of Heavy Industries in July 2026. The next step is dependable, well-sited infrastructure. <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2287125&amp;lang=1&amp;reg=3&amp;trk=article-ssr-frontend-pulse-little-text-block" target="_blank" rel="noreferrer" className="font-bold text-[#ffc18f] underline decoration-white/30 underline-offset-2">Source: PIB</a></p>
              </div>
              <p className="relative mt-5 text-sm font-extrabold tracking-wide text-white">MyEVStation — Smarter EV Infrastructure. Safety at the Core.</p>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Built on service. Designed for the road ahead.</span>
              <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#15281f] sm:text-4xl">Why partners choose a safety-first approach.</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#647067] sm:text-base">EV charging is more than installing a charger. It takes suitable site planning, reliable operations, clear commercial assumptions and a commitment to safety.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[{I:ShieldCheck,t:"Safety-first technology",b:"AI-powered battery diagnostics and IoT solutions designed to support battery-health visibility and safety awareness."},{I:MapPin,t:"Flexible business models",b:"Explore opportunities for sites with land, partner locations without land purchase, and residential societies."},{I:Gauge,t:"Technical reliability",b:"Apply the discipline of aircraft maintenance and technical operations to planning, checks and ongoing service."},{I:Leaf,t:"Built for India’s EV future",b:"Make EV infrastructure opportunities more accessible to entrepreneurs, landowners and ex-servicemen."}].map(({I,t,b})=><article key={t} className="rounded-2xl border border-[#dfe8df] bg-white p-5 shadow-[0_4px_18px_rgba(16,43,32,0.035)] transition hover:-translate-y-0.5 hover:border-[#b8d1bf] hover:shadow-md"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf4ec] text-[#0b7652]"><I size={22}/></span><h4 className="mt-4 text-base font-extrabold text-[#173628]">{t}</h4><p className="mt-2 text-sm leading-6 text-[#647067]">{b}</p></article>)}
              </div>
              <div className="mt-7 flex flex-wrap gap-3"><a href="#model" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b5a42] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#084632]">Explore business models <ArrowRight size={16}/></a><a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b5a42]/25 bg-white px-5 py-3 text-sm font-extrabold text-[#0b5a42] transition hover:bg-[#eef6ef]">Talk to our team <ArrowRight size={16}/></a></div>
              <p className="mt-5 text-xs leading-5 text-[#7b877d]">Our technology supports safety awareness and maintenance decisions; it does not replace manufacturer safety systems or certified inspections.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 sm:py-24"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Start your next mission</span><h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#15281f] sm:text-5xl">Ready to own an EV station?</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-[#647067]">Tell us your budget, location and preferred ownership model. We’ll walk you through the package, site requirements, operating responsibilities and an illustrative financial estimate before you make a decision.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="https://wa.me/?text=Hello%20MyEVStation%2C%20I%20want%20to%20explore%20an%20EV%20charging%20station%20partnership." target="_blank" rel="noreferrer" className="rounded-full bg-[#e87522] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-900/10">Enquire on WhatsApp <ArrowRight className="ml-2 inline" size={16}/></a><a href="#model" className="rounded-full border border-[#0b5a42]/25 px-7 py-4 text-sm font-extrabold text-[#0b5a42]">Compare the models</a></div><p className="mt-5 text-xs text-[#8a958c]">WhatsApp opens a pre-filled message; a business contact number can be configured before launch.</p></div></section>


      <section id="leadership" className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e87522] via-white to-[#16834a]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#c65f19]">Built on service. Focused on the future.</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#092d20] sm:text-5xl">Leadership that understands mission-critical systems</h2>
            <p className="mt-4 text-base leading-7 text-[#536258] sm:text-lg">MyEVStation brings an ex-Indian Air Force perspective to EV charging infrastructure—where operational discipline, dependable electronics, safety and customer trust matter.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-[#e1e9e2] bg-[#f7faf7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8efe9]">
                <img src="/raj-kishore-prasad.png" alt="HFL Raj Kishore Prasad at an EV charging station" loading="lazy" className="h-full w-full object-contain object-center scale-[1.04]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#092d20]/65 via-transparent to-transparent"/>
                <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#0b5a42]">Founder · Veteran leadership</span>
              </div>
              <div className="p-7 sm:p-9">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0b5a42] text-white"><ShieldCheck size={25}/></div>
                  <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#c65f19]">Founder</p><h3 className="mt-1 text-2xl font-black text-[#092d20]">HFL Raj Kishore Prasad</h3><p className="mt-1 text-sm font-semibold leading-6 text-[#526157]">Former Indian Air Force · Honorary Flight Lieutenant</p></div>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#45554a]">Brings 37 years of Indian Air Force service and technical leadership, including oversight related to C-17, C-130J, IL-76 and IL-78 aircraft systems. His background includes senior electronics examination responsibilities and advanced electrical/avionics training.</p>
                <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Aviation electronics</span><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Avionics & reliability</span><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Technical team leadership</span></div>
              </div>
            </article>
            <article className="overflow-hidden rounded-3xl border border-[#e1e9e2] bg-[#f7faf7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8efe9]">
                <img src="/manoj-sharma.png" alt="HFO Manoj Sharma, co-founder of MyEVStation" loading="lazy" className="h-full w-full object-contain object-center scale-[1.04]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#092d20]/65 via-transparent to-transparent"/>
                <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#0b5a42]">Founder · Veteran leadership</span>
              </div>
              <div className="p-7 sm:p-9">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e87522] text-white"><Zap size={25}/></div>
                  <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#c65f19]">Founder</p><h3 className="mt-1 text-2xl font-black text-[#092d20]">HFO Manoj Sharma</h3><p className="mt-1 text-sm font-semibold text-[#526157]">Former Indian Air Force</p></div>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#45554a]">Brings an ex-service perspective to the MyEVStation mission. Together, the leadership team aims to translate service values—discipline, accountability, teamwork and a safety-first mindset—into a customer-focused EV charging business opportunity.</p>
                <p className="mt-4 text-xs leading-5 text-[#778278]">Detailed service appointments and technical qualifications for HFO Manoj Sharma will be added once confirmed.</p>
              </div>
            </article>
          </div>
          <div className="mt-8 rounded-3xl bg-[#092d20] p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
            <div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#ffc18f]">An opportunity after service—and for every entrepreneur</p><h3 className="mt-2 text-2xl font-black sm:text-3xl">Own the opportunity. Help build India’s EV charging network.</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">Have land, or no land? We’ll help you understand the model, site requirements, technology and next steps before you make a decision.</p></div>
            <a href="#contact" className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 text-sm font-extrabold text-white sm:mt-0">Discuss Your EV Station <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b2018] text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-white"><Zap size={22} fill="currentColor"/></span><div><b className="text-lg">myEVStation</b><p className="text-[9px] font-bold uppercase tracking-[.08em] text-white/70">Founded by Ex-Indian Air Force</p></div></div><div className="flex flex-wrap gap-5 text-sm text-white/65"><a href="#model" className="hover:text-white">Models</a><a href="#investment" className="hover:text-white">Investment</a><a href="#technology" className="hover:text-white">Technology</a><a href="#contact" className="hover:text-white">Contact</a></div><span className="text-xs text-white/45">© {new Date().getFullYear()} MyEVStation</span></div></footer>
    </main>
  );
}
