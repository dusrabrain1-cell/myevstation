import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, ShieldCheck, Zap, Gauge, CheckCircle2, CarFront, Bike, Building2, IndianRupee, RadioTower, PlugZap } from "lucide-react";
import { whatsappHref } from "@/lib/constants";

export default function TechnologyContent() {
  return (
    <>
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
                  <a href={whatsappHref("Hello MyEVStation, I would like to enquire about EV charging station opportunities.")} className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#e87522] px-6 py-3.5 text-sm font-extrabold text-white">Discuss a partnership <ArrowRight className="ml-2" size={16}/></a>
                </div>
              </div>
            </section>
      
    </>
  );
}
