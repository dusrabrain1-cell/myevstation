"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, MessageCircle } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";
import { NavMenu } from "./NavMenu";
import { useContactModal } from "./contact/ContactModalProvider";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { open: openContact } = useContactModal();

  // Homepage absorbs the logo and Made-in-India badge inside the hero, so
  // the global navbar is hidden there. Other pages keep it.
  if (pathname === "/") return null;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <nav className="mx-auto flex min-h-20 max-w-[1500px] items-center justify-between gap-6 px-5 py-3 lg:px-8 xl:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="MyEVStation home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-white"><Zap size={22} fill="currentColor" /></span>
          <span className="leading-tight"><span className="block whitespace-nowrap text-xl font-extrabold tracking-tight text-[#172d21]">my<span className="text-[#e87522]">EV</span>Station</span><span className="mt-0.5 block whitespace-nowrap text-[8px] font-extrabold uppercase tracking-[.08em] text-[#0b5a42] sm:text-[9px]">Founded by Ex-Indian Air Force</span></span>
        </Link>

        <NavMenu className="hidden min-w-0 flex-1 justify-center lg:flex" />

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => openContact("Talk to our team")}
            className="rounded-md bg-mission px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-mission-dark"
          >
            Join the Mission
          </button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line bg-paper px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) =>
            link.comingSoon ? (
              <li key={link.label}>
                <span className="flex items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-ink/55">
                  {link.label}
                  <span className="rounded-full bg-mission-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-mission">
                    Coming Soon
                  </span>
                </span>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-ink hover:bg-cream"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
          <li className="px-2 pt-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openContact("Join the Mission");
              }}
              className="inline-flex w-full justify-center rounded-md bg-mission px-5 py-2.5 text-sm font-semibold text-white"
            >
              Join the Mission
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
