import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Building2, CheckCircle2, Flag, MapPin, ShieldCheck, Zap, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Charging Station Opportunities in India | MyEVStation",
  description: "Explore EV charging station business models in India. Assess site suitability, permissions, AC and DC charger options, and indicative investment assumptions with MyEVStation.",
  alternates: { canonical: "/" },
};

const pathways = [
  { title: "Start without land", text: "Explore host-site and partner-location models, site requirements and indicative package assumptions.", href: "/without-land", label: "Explore no-land model", icon: MapPin },
  { title: "I have land or a site", text: "Understand how to assess your plot, parking area, commercial property or fleet site.", href: "/with-land", label: "Assess my site", icon: Building2 },
  { title: "Housing societies", text: "Review EV charging options for residents, RWAs and facility managers.", href: "/society", label: "Explore society charging", icon: BatteryCharging },
  { title: "Ex-servicemen", text: "Explore a new business opportunity shaped around service, discipline and technical reliability.", href: "/ex-servicemen", label: "View veteran opportunity", icon: Flag },
];

const pages = [
  { title: "Why MyEVStation", text: "Our mission, approach and the support we offer partners.", href: "/why-myevstation" },
  { title: "Business Model", text: "Compare ways to participate based on your site and goals.", href: "/business-model" },
  { title: "Technology & Safety", text: "Understand charger selection, electrical checks and connected operations.", href: "/technology" },
  { title: "Investment Guide", text: "Review the key costs, assumptions and questions to ask before investing.", href: "/ev-charging-investment-guide" },
  { title: "Impact", text: "Explore our goals for more accessible EV charging infrastructure.", href: "/impact" },
  { title: "FAQs", text: "Get practical answers, including help navigating site permissions.", href: "/faq" },
  { title: "About Us", text: "Meet the veteran-led team and learn about our independent venture.", href: "/about-us" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#17212b]">
      <header className="sticky top-0 z-50 border-b border-[#e2e8e1] bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="MyEVStation home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-white"><Zap size={22} fill="currentColor" /></span>
            <span className="leading-tight"><span className="block text-xl font-extrabold tracking-tight text-[#172d21]">my<span className="text-[#e87522]">EV</span>Station</span><span className="block text-[8px] font-extrabold uppercase tracking-[.08em] text-[#0b5a42] sm:text-[9px]">Founded by Ex-Indian Air Force</span></span>
          </Link>
          <div className="hidden items-center gap-4 xl:flex">
            <Link href="/" className="text-sm font-bold text-[#0b5a42]">Home</Link>
            <Link href="/why-myevstation" className="text-sm font-semibold hover:text-[#0b5a42]">Why Us</Link>
            <Link href="/business-model" className="text-sm font-semibold hover:text-[#0b5a42]">Business Model</Link>
            <Link href="/technology" className="text-sm font-semibold hover:text-[#0b5a42]">Technology</Link>
            <Link href="/ev-charging-investment-guide" className="text-sm font-semibold hover:text-[#0b5a42]">Investment</Link>
            <Link href="/ev-charging-calculator" className="text-sm font-semibold hover:text-[#0b5a42]">Calculator</Link>
            <Link href="/impact" className="text-sm font-semibold hover:text-[#0b5a42]">Impact</Link>
            <Link href="/faq" className="text-sm font-semibold hover:text-[#0b5a42]">FAQs</Link>
            <Link href="/about-us" className="text-sm font-semibold hover:text-[#0b5a42]">About Us</Link>
          </div>
          <a href="https://wa.me/919625670132?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20discuss%20an%20EV%20charging%20station." className="inline-flex items-center gap-2 rounded-full bg-[#e87522] px-4 py-3 text-xs font-extrabold text-white transition hover:bg-[#c75b14] sm:text-sm">Enquire <ArrowRight size={15}/></a>
        </nav>
        <div className="flex gap-4 overflow-x-auto border-t border-[#eef1ed] px-5 py-2.5 xl:hidden">
          {[["Why Us","/why-myevstation"],["Models","/business-model"],["Technology","/technology"],["Investment","/ev-charging-investment-guide"],["Calculator","/ev-charging-calculator"],["Impact","/impact"],["FAQs","/faq"],["About","/about-us"]].map(([label,href])=><Link key={href} href={href} className="shrink-0 text-xs font-semibold text-[#46564c]">{label}</Link>)}
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#071e16]">
        <Image src="/myevstation-hero-banner.jpeg" alt="Veteran-led EV charging station opportunity in India" width={1920} height={1080} sizes="100vw" priority className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center]"/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061b14]/95 via-[#061b14]/75 to-[#061b14]/25"/>
        <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-16 sm:min-h-[560px] sm:px-8 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-[#ffd0a9]"><Flag size={14}/> Veteran-led · Built for India</p>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">Your next opportunity in <span className="text-[#ff9848]">EV charging.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">Explore an EV charging station business with or without land. Understand site suitability, permission pathways, charger options and investment assumptions before you decide.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/business-model" className="inline-flex items-center gap-2 rounded-full bg-[#e87522] px-6 py-4 text-sm font-extrabold text-white hover:bg-[#c75b14]">Explore business models <ArrowRight size={17}/></Link>
              <Link href="/ev-charging-calculator" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-4 text-sm font-extrabold text-white hover:bg-white/20"><Calculator size={17}/> Estimate project returns</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/90"><span className="inline-flex items-center gap-2"><ShieldCheck size={15}/> Safety-first planning</span><span className="inline-flex items-center gap-2"><Zap size={15}/> AC & DC options</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={15}/> Practical guidance</span></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="pathways-heading" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Choose your starting point</p><h2 id="pathways-heading" className="mt-3 text-3xl font-black tracking-tight text-[#15281f] sm:text-4xl">Find the EV charging model for you.</h2><p className="mt-3 text-sm leading-6 text-[#647067]">Choose the situation that best matches you. Each option opens a dedicated page with focused information.</p></div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{pathways.map(({title,text,href,label,icon:Icon})=><Link key={href} href={href} className="group rounded-2xl border border-[#e0e8e0] bg-white p-5 transition hover:-translate-y-1 hover:border-[#a9c8b2] hover:shadow-lg"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff0e5] text-[#df6b1b]"><Icon size={22}/></span><h3 className="mt-4 text-lg font-extrabold text-[#173628]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#647067]">{text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#0b7652]">{label}<ArrowRight size={15} className="transition group-hover:translate-x-1"/></span></Link>)}</div>
      </section>

      <section className="border-y border-[#e4e9e4] bg-[#f7f9f6]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[{title:"Check the site first",text:"Review access, parking, nearby demand and electrical feasibility before choosing equipment."},{title:"Understand permissions",text:"We explain likely consent steps; final approvals remain with the relevant authority or property owner."},{title:"Calculate with assumptions",text:"Include installation, electricity, maintenance, software and other operating costs—not just charger price."}].map(item=><article key={item.title} className="rounded-xl bg-white p-5 ring-1 ring-[#e1e8e1]"><h2 className="font-extrabold text-[#173628]">{item.title}</h2><p className="mt-2 text-sm leading-6 text-[#647067]">{item.text}</p></article>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="flex flex-col gap-4 rounded-3xl bg-[#092d20] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10"><div className="max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#ffc18f]">Planning tool</p><h2 className="mt-3 text-2xl font-black sm:text-3xl">Estimate charging-station economics.</h2><p className="mt-3 text-sm leading-6 text-white/75">Model revenue, electricity expense, operating costs and an indicative payback period using your own assumptions.</p></div><Link href="/ev-charging-calculator" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#e87522] px-6 py-4 text-sm font-extrabold text-white">Open calculator <ArrowRight size={16}/></Link></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d96a1b]">Explore MyEVStation</p><h2 className="mt-3 text-3xl font-black tracking-tight text-[#15281f] sm:text-4xl">Focused information, one page at a time.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#647067]">Find the details you need without scrolling through one long homepage.</p></div><Link href="/about-us" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0b5a42]">Meet the team <ArrowRight size={16}/></Link></div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{pages.map(item=><Link key={item.href} href={item.href} className="group rounded-2xl border border-[#e0e8e0] bg-white p-6 transition hover:-translate-y-1 hover:border-[#a9c8b2] hover:shadow-lg"><h3 className="text-lg font-extrabold text-[#173628]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#647067]">{item.text}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#0b7652]">Open page <ArrowRight size={15} className="transition group-hover:translate-x-1"/></span></Link>)}</div>
      </section>

      <section className="bg-[#f7f9f6] px-5 py-12 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-2xl font-black text-[#15281f] sm:text-3xl">Need help assessing a location?</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#647067]">Share your city, property type and intended use to discuss the likely next steps.</p></div><a href="https://wa.me/919625670132?text=Hello%20MyEVStation%2C%20please%20help%20me%20assess%20an%20EV%20charging%20station%20location." className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#e87522] px-6 py-4 text-sm font-extrabold text-white">Discuss your site <ArrowRight size={16}/></a></div></section>

      <footer className="border-t border-[#e4e9e4] bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><Link href="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0b5a42] text-white"><Zap size={19} fill="currentColor"/></span><span><b className="text-sm text-[#172d21]">myEVStation</b><span className="block text-[9px] font-bold uppercase tracking-wider text-[#0b5a42]">Founded by Ex-Indian Air Force</span></span></Link><div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#526158]"><Link href="/punjab-ev-charging">Punjab</Link><Link href="/amritsar-ev-charging">Amritsar</Link><Link href="/greater-noida-societies">Greater Noida</Link><Link href="/ev-charging-calculator">Calculator</Link><Link href="/faq">FAQs</Link><Link href="/about-us">About Us</Link></div><span className="text-xs text-[#879188]">© {new Date().getFullYear()} MyEVStation</span></div></footer>
    </main>
  );
}
