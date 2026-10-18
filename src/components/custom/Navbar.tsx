"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap, MessageCircle } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";
import { NavMenu } from "./NavMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <nav className="mx-auto flex min-h-20 max-w-[1500px] items-center justify-between gap-6 px-5 py-3 lg:px-8 xl:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="MyEVStation home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b5a42] text-white"><Zap size={22} fill="currentColor" /></span>
          <span className="leading-tight"><span className="block whitespace-nowrap text-xl font-extrabold tracking-tight text-[#172d21]">my<span className="text-[#e87522]">EV</span>Station</span><span className="mt-0.5 block whitespace-nowrap text-[8px] font-extrabold uppercase tracking-[.08em] text-[#0b5a42] sm:text-[9px]">Founded by Ex-Indian Air Force</span></span>
        </Link>

        <NavMenu className="hidden min-w-0 flex-1 justify-center xl:flex" />

        <div className="hidden xl:block">
          <a
            href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-mission px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-mission-dark xl:px-5 xl:text-sm"
          >
            <MessageCircle size={16} /> WhatsApp · +91 98762 60822
          </a>
        </div>

        <a
          href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with MyEVStation on WhatsApp"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-mission text-white xl:hidden"
        >
          <MessageCircle size={20} />
        </a>
        <button
          type="button"
          className="rounded-lg p-2 xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-primary-navigation" className="flex flex-col gap-1 border-t border-line bg-paper px-6 py-4 xl:hidden">
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
            <a
              href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire."
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex w-full justify-center rounded-md bg-mission px-5 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle size={16} className="mr-2" /> WhatsApp enquiry · +91 98762 60822
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
