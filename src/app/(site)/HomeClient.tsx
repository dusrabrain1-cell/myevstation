"use client";
import Image from "next/image";
import SeoFaq from "@/components/custom/SeoFaq";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BatteryCharging, ShieldCheck, MapPin, Zap, Leaf, Menu, X, CarFront, Calculator, Users, Flag } from "lucide-react";

const sections = [
  { label: "Home", href: "/" },
  { label: "Why MyEVStation", href: "/why-myevstation" },
  { label: "Business Model", href: "/business-model" },
  { label: "Technology", href: "/technology" },
  { label: "Investment", href: "/ev-charging-investment-guide" },
  { label: "Calculator", href: "/ev-charging-calculator" },
  { label: "Impact", href: "/impact" },
  { label: "FAQs", href: "/faq" },
  { label: "About Us", href: "/about-us" },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <main id="home" className="min-h-screen bg-white text-[#17212b]">
      <header className="relative z-50 border-b border-[#e4e9e4] bg-white/95 shadow-[0_4px_18px_rgba(7,30,22,0.06)] backdrop-blur-md">
        <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-3 px-4 py-2 lg:min-h-[82px] lg:gap-4 lg:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="MyEVStation home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-white shadow-sm sm:h-11 sm:w-11"><Zap size={24} fill="currentColor" /></span>
            <span className="leading-tight"><span className="block whitespace-nowrap text-[19px] font-extrabold tracking-tight text-[#172d21] sm:text-[21px]">my<span className="text-[#e87522]">EV</span>Station</span><span className="mt-0.5 block whitespace-nowrap text-[8px] font-extrabold uppercase tracking-[.09em] text-[#0b5a42] sm:text-[9px]">Founded by Ex-Indian Air Force</span></span>
          </Link>
          <nav className="hidden min-w-0 flex-1 items-center justify-start gap-4 pl-2 lg:flex xl:gap-5 xl:pl-3">{sections.map(s => <a key={s.href} href={s.href} className="shrink-0 whitespace-nowrap whitespace-nowrap text-[12px] font-semibold text-[#35423e] transition hover:text-[#e87522] xl:text-[13px]">{s.label}</a>)}<a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire%20about%20EV%20charging%20station%20opportunities." className="ml-auto inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-[#e87522] px-4 py-3 text-[12px] font-extrabold text-white shadow-sm transition hover:bg-[#c75b14] xl:px-5 xl:text-[13px]">WhatsApp · +91 98762 60822 <ArrowRight className="ml-2 inline shrink-0" size={16}/></a></nav>
          <button className="rounded-lg border border-black/10 p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation">{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
        {mobileOpen && <nav id="mobile-navigation" className="grid gap-1 border-t border-black/10 bg-white px-5 py-4 lg:hidden">{sections.map(s => <a key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 font-semibold">{s.label}</a>)}<a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire%20about%20EV%20charging%20station%20opportunities." onClick={() => setMobileOpen(false)} className="rounded-lg bg-[#e87522] px-3 py-3 font-bold text-white">WhatsApp enquiry · +91 98762 60822</a></nav>}
      </header>

      <section id="home-hero" className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#071e16]">
        <Image src="/myevstation-hero-banner.jpeg" alt="MyEVStation EV charging station, Indian tricolour and veteran leader" width={1920} height={1080} sizes="100vw" className="absolute inset-0 -z-30 h-full w-full object-cover object-[64%_center] sm:object-[58%_center]" priority />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#061b14]/85 via-[#061b14]/65 to-[#061b14]/30" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_58%_42%,rgba(4,20,14,0.82)_0%,rgba(4,20,14,0.38)_22%,transparent_52%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061b14]/30 via-transparent to-transparent" />
        <div className="mx-auto flex min-h-[min(760px,calc(100svh-4.5rem))] w-full max-w-[1600px] items-center px-4 py-6 sm:min-h-[calc(100svh-5rem)] sm:px-10 sm:py-8 lg:px-16">
          <div className="w-full max-w-[min(47%,660px)] text-white max-lg:max-w-[56%] max-sm:max-w-full max-sm:rounded-2xl max-sm:bg-[#061b14]/70 max-sm:p-4 max-sm:shadow-lg">
            <div className="mb-3 inline-flex max-w-full items-center gap-1.5 border-l-4 border-[#e87522] bg-[#061b14]/35 px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[.075em] backdrop-blur-sm sm:gap-2 sm:px-3 sm:text-[10px] sm:tracking-[.09em]">
              <span className="text-[#ff9b42]">🇮🇳</span> A veteran-led mission for a cleaner, stronger India
            </div>
            <h1 className="max-w-[650px] text-[clamp(1.85rem,3.7vw,3.8rem)] font-black leading-[1.02] tracking-[-.04em] drop-shadow-lg sm:leading-[.96]">
              EV CHARGING STATIONS FOR INDIA’S NEXT MISSION
              <span className="mt-2 block"><span className="text-[#ff8b2b]">Powering</span> <span className="text-white">Clean Energy</span></span>
            </h1>
            <p className="mt-3 max-w-xl text-sm font-semibold leading-5 text-white drop-shadow sm:text-base sm:leading-6">
              Own an EV charging business with or without land. Compare investment options, understand the setup process and discuss site suitability, operating responsibilities and estimated returns before you decide.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2 min-[390px]:grid-cols-2 sm:flex sm:flex-wrap">
              <a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire%20about%20EV%20charging%20station%20opportunities." className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#e87522] px-3 py-3 text-center text-xs font-extrabold leading-snug text-white shadow-xl transition hover:bg-[#c75b14] sm:px-5 sm:text-sm">Own an EV Station <ArrowRight size={15}/></a>
              <a href="/business-model" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/80 bg-[#061b14]/35 px-3 py-3 text-center text-xs font-extrabold leading-snug text-white backdrop-blur transition hover:bg-white/20 sm:px-5 sm:text-sm">Explore Business Models <ArrowRight size={15}/></a>
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

      <section id="contact" className="bg-white py-20 sm:py-24"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Start your next mission</span><h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#15281f] sm:text-5xl">Ready to own an EV station?</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-[#647067]">Tell us your budget, location and preferred ownership model. We’ll walk you through the package, site requirements, operating responsibilities and an illustrative financial estimate before you make a decision.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20want%20to%20explore%20an%20EV%20charging%20station%20partnership." target="_blank" rel="noreferrer" className="rounded-full bg-[#e87522] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-900/10">Enquire on WhatsApp <ArrowRight className="ml-2 inline" size={16}/></a><a href="/business-model" className="rounded-full border border-[#0b5a42]/25 px-7 py-4 text-sm font-extrabold text-[#0b5a42]">Compare the models</a></div><p className="mt-5 text-xs text-[#8a958c]">WhatsApp opens a pre-filled enquiry directly to our team.</p></div></section>


      <footer className="bg-[#0b2018] text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-white"><Zap size={22} fill="currentColor"/></span><div><b className="text-lg">myEVStation</b><p className="text-[9px] font-bold uppercase tracking-[.08em] text-white/70">Founded by Ex-Indian Air Force</p></div></div><div className="flex flex-wrap gap-5 text-sm text-white/65"><Link href="/business-model" className="hover:text-white">Models</Link><a href="/ev-charging-calculator" className="hover:text-white">Investment</a><a href="/technology" className="hover:text-white">Technology</a><Link href="/ev-charging-investment-guide" className="hover:text-white">Investment Guide</Link><Link href="/punjab-ev-charging" className="hover:text-white">Punjab EV Charging</Link><Link href="/amritsar-ev-charging" className="hover:text-white">Amritsar EV Charging</Link><Link href="/greater-noida-societies" className="hover:text-white">Greater Noida Societies</Link><a href="tel:+919876260822" className="hover:text-white">Call +91 98762 60822</a><a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire%20about%20EV%20charging%20station%20opportunities." className="hover:text-white">WhatsApp</a></div><span className="text-xs text-white/45">© {new Date().getFullYear()} MyEVStation</span></div></footer>
    </main>
  );
}
