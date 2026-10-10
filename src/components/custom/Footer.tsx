import Link from "next/link";
import { ArrowRight, Zap, MessageCircle } from "lucide-react";

import { SITE } from "@/lib/constants";

const EXPLORE_LINKS = [
  { label: "How EV charging works", href: "/#how-it-works" },
  { label: "Investment calculator", href: "/#investment" },
  { label: "Technology & safety", href: "/#technology" },
  { label: "India 2030 mission", href: "/#india-2030" },
];

const PARTNER_LINKS = [
  { label: "No-land partner model", href: "/without-land" },
  { label: "Have land or a site?", href: "/with-land" },
  { label: "Housing societies", href: "/society" },
  { label: "Ex-servicemen opportunity", href: "/ex-servicemen" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#dfe7df] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="MyEVStation home">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#0b5a42] text-white"><Zap size={24} fill="currentColor" /></span>
              <span className="leading-tight"><span className="block whitespace-nowrap text-xl font-extrabold tracking-tight text-[#172d21]">my<span className="text-[#e87522]">EV</span>Station</span><span className="mt-0.5 block whitespace-nowrap text-[8px] font-extrabold uppercase tracking-[.08em] text-[#0b5a42] sm:text-[9px]">Founded by Ex-Indian Air Force</span></span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-[#647067]">EV charging opportunities for landowners, investors, housing societies and ex-servicemen—explained in simple terms.</p>
            <p className="mt-4 text-xs leading-5 text-[#7b877d]">Site suitability, costs and returns depend on actual conditions and written agreements.</p>
          </div>
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#172d21]">Explore</h3>
            <ul className="mt-5 space-y-3">{EXPLORE_LINKS.map(link=><li key={link.label}><Link href={link.href} className="group inline-flex items-center gap-2 text-sm text-[#526158] hover:text-[#0b5a42]"><span>{link.label}</span><ArrowRight size={13} className="opacity-0 transition group-hover:opacity-100"/></Link></li>)}</ul>
          </div>
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#172d21]">Choose your model</h3>
            <ul className="mt-5 space-y-3">{PARTNER_LINKS.map(link=><li key={link.label}><Link href={link.href} className="group inline-flex items-center gap-2 text-sm text-[#526158] hover:text-[#0b5a42]"><span>{link.label}</span><ArrowRight size={13} className="opacity-0 transition group-hover:opacity-100"/></Link></li>)}</ul>
          </div>
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#172d21]">Contact</h3>
            <p className="mt-5 text-sm leading-6 text-[#647067]">Ask for a site assessment, package details or a written estimate before investing.</p>
            <a href={`https://wa.me/919625670132?text=${encodeURIComponent("Hello MyEVStation, I would like to make an enquiry.")}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0b5a42] hover:text-[#e87522]"><MessageCircle size={16}/>Enquire on WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e4e9e4] bg-[#f7f9f6] px-5 py-4 text-center text-xs text-[#748077]">© {new Date().getFullYear()} MyEVStation. All rights reserved.</div>
    </footer>
  );
}
