import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BusinessModelContent() {
  return (
    <>
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
                      <Image src="/ev-veterans.jpg" alt="Veteran leader at an EV charging station" width={900} height={1200} sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover object-[center_28%]" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071e16]/65 via-transparent to-[#071e16]/10"/>
                      <span className="absolute bottom-3 left-4 text-xs font-bold tracking-wide text-white drop-shadow">Service doesn’t end. It evolves.</span>
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
                      <Image src="/ev-without-land.jpg" alt="Modern electric vehicle charging at an urban host location" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071e16]/65 via-[#071e16]/10 to-transparent"/>
                      <span className="absolute left-4 top-4 rounded-full bg-[#dceee5]/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#0b5a42]">Option 02 · No land</span>
                      <span className="absolute bottom-3 left-4 text-xs font-bold tracking-wide text-white drop-shadow">A smarter way to get started</span>
                    </div>
                    <div className="flex min-h-[230px] flex-1 flex-col items-center bg-gradient-to-b from-[#f2f7f2] to-white px-6 pb-6 pt-5 text-center sm:px-7">
                      <p className="mt-2 rounded-full border border-[#cfe2d6] bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#0b5a42]">Your location. Our charging model.</p>
                      <h3 className="mt-4 min-h-[58px] text-2xl font-black leading-tight text-[#142f24]">NO LAND?</h3>
                      <p className="mt-1 text-sm leading-6 text-[#647168]">Start at a suitable host location without purchasing land. Compare the investment and managed station model.</p>
                    </div>
                    <div className="flex min-h-[86px] items-center p-4"><Link href="/without-land" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b5a42] px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#084632]">Explore no-land model <ArrowRight size={16}/></Link></div>
                  </article>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[#dfe7df] bg-white shadow-[0_8px_24px_rgba(11,90,66,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(11,90,66,0.16)]">
                    <div className="relative h-[150px] shrink-0 overflow-hidden sm:h-[160px]">
                      <Image src="/ev-society.jpg" alt="Electric vehicle charging facilities for a residential community" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071e16]/65 via-[#071e16]/10 to-transparent"/>
                      <span className="absolute left-4 top-4 rounded-full bg-[#dceaf9]/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#176a8a]">Option 03 · Community</span>
                      <span className="absolute bottom-3 left-4 text-xs font-bold tracking-wide text-white drop-shadow">Convenient charging, closer to home</span>
                    </div>
                    <div className="flex min-h-[230px] flex-1 flex-col items-center bg-gradient-to-b from-[#f0f6fa] to-white px-6 pb-6 pt-5 text-center sm:px-7">
                      <p className="mt-2 rounded-full border border-[#cfe2ef] bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#176a8a]">Better charging. Right where you live.</p>
                      <h3 className="mt-4 min-h-[58px] text-2xl font-black leading-tight text-[#142f24]">LIVE IN A SOCIETY?</h3>
                      <p className="mt-1 text-sm leading-6 text-[#647168]">Make resident charging easier with smart sockets, AC chargers and DC options for suitable shared spaces.</p>
                    </div>
                    <div className="flex min-h-[86px] items-center p-4"><Link href="/society" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#176a8a] px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#125875]">Explore society charging <ArrowRight size={16}/></Link></div>
                  </article>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[#dfe7df] bg-white shadow-[0_8px_24px_rgba(11,90,66,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(11,90,66,0.16)]">
                    <div className="relative h-[150px] shrink-0 overflow-hidden sm:h-[160px]">
                      <Image src="/ev-with-land.jpg" alt="Contemporary EV charging station on a dedicated property" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071e16]/65 via-[#071e16]/10 to-transparent"/>
                      <span className="absolute left-4 top-4 rounded-full bg-[#dceee5]/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#0b5a42]">Option 04 · Landowners</span>
                      <span className="absolute bottom-3 left-4 text-xs font-bold tracking-wide text-white drop-shadow">Turn your space into a charging destination</span>
                    </div>
                    <div className="flex min-h-[230px] flex-1 flex-col items-center bg-gradient-to-b from-[#f2f7f2] to-white px-6 pb-6 pt-5 text-center sm:px-7">
                      <p className="mt-2 rounded-full border border-[#cfe2d6] bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#0b5a42]">Turn your land into an EV asset.</p>
                      <h3 className="mt-4 min-h-[58px] text-2xl font-black leading-tight text-[#142f24]">HAVE LAND?</h3>
                      <p className="mt-1 text-sm leading-6 text-[#647168]">Use your plot, parking area, commercial property or fleet site to set up a suitable EV charging destination.</p>
                    </div>
                    <div className="flex min-h-[86px] items-center p-4"><Link href="/with-land" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b5a42] px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#084632]">Explore with-land model <ArrowRight size={16}/></Link></div>
                  </article>
                </div>
              </div>
            </section>
      
            <section id="how-it-works" className="bg-white pt-16 pb-10 sm:pt-20 sm:pb-12"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mx-auto max-w-3xl text-center"><span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Simple from day one</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#15281f] sm:text-4xl">How an EV charging station business works</h2><p className="mt-3 leading-7 text-[#647067]">You don’t need to be an electrical engineer. Start with the right site, a suitable charger plan and a clear operating agreement.</p></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{n:"01",t:"Choose your route",b:"Bring your own land, or ask about a host location if you don’t own property."},{n:"02",t:"Check the site",b:"Review power availability, parking, vehicle demand, access and permissions before committing."},{n:"03",t:"Install & connect",b:"Select AC or DC chargers, arrange installation, connect monitoring and test the setup."},{n:"04",t:"Operate & track",b:"Drivers charge and pay; review usage, expenses, service status and settlements under your agreement."}].map(s=><article key={s.n} className="rounded-2xl border border-[#e3e9e4] bg-[#f8faf7] p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-sm font-black text-white">{s.n}</span><h3 className="mt-4 text-lg font-extrabold text-[#172d21]">{s.t}</h3><p className="mt-2 text-sm leading-6 text-[#667168]">{s.b}</p></article>)}</div><div className="mt-6 rounded-2xl border border-[#dbe8dd] bg-[#eef7ef] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><h3 className="font-extrabold text-[#16462f]">Not sure which charger you need?</h3><p className="mt-1 text-sm leading-6 text-[#58695d]">Slow charging may suit long parking stays. DC fast charging may suit busy fleet or public locations. The right choice depends on vehicle type, site power and expected demand.</p></div><a href="https://wa.me/919625670132?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire%20about%20EV%20charging%20station%20opportunities." className="mt-4 inline-flex shrink-0 items-center rounded-full bg-[#0b5a42] px-5 py-3 text-sm font-bold text-white sm:mt-0">Get help choosing <ArrowRight className="ml-2" size={16}/></a></div></div></section>
      
      
    </>
  );
}
