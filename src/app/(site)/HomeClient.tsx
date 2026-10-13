"use client";
import Image from "next/image";

import { ArrowRight, BatteryCharging, ShieldCheck, MapPin, Zap, Leaf, CarFront, Users, Flag } from "lucide-react";

export default function HomePage() {
  return (
    <main id="home" className="min-h-screen bg-white text-[#17212b]">
<section id="home-hero" className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#071e16]">
        <Image src="/myevstation-hero-banner.jpeg" alt="MyEVStation EV charging station, Indian tricolour and veteran leader" width={1920} height={1080} sizes="100vw" className="absolute inset-0 -z-30 h-full w-full object-cover object-[64%_center] sm:object-[58%_center]" priority />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#061b14]/80 via-[#061b14]/42 to-[#061b14]/10" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_58%_42%,rgba(4,20,14,0.22)_0%,rgba(4,20,14,0.08)_22%,transparent_52%)]" />
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


</main>
  );
}
