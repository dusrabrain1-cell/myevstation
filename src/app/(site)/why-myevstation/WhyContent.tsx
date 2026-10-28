import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Gauge, Leaf, Flag } from "lucide-react";
import { whatsappHref } from "@/lib/constants";

export default function WhyContent() {
  return (
    <>
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
                    <div className="mt-7 flex flex-wrap gap-3"><a href="/business-model" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b5a42] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#084632]">Explore business models <ArrowRight size={16}/></a><a href={whatsappHref("Hello MyEVStation, I would like to enquire about EV charging station opportunities.")} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b5a42]/25 bg-white px-5 py-3 text-sm font-extrabold text-[#0b5a42] transition hover:bg-[#eef6ef]">Talk to our team <ArrowRight size={16}/></a></div>
                    <p className="mt-5 text-xs leading-5 text-[#7b877d]">Our technology supports safety awareness and maintenance decisions; it does not replace manufacturer safety systems or certified inspections.</p>
                  </div>
                </div>
              </div>
            </section>
      
      
    </>
  );
}
