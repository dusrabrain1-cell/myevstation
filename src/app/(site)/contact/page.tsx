import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/custom/contact/ContactForm";
import { pageSocialMetadata } from "@/lib/page-social-metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | EV Charging Station Enquiries",
  description:
    "Contact MyEVStation about EV charging station setup, site assessments, housing society charging, business partnerships and investment enquiries across India.",
  alternates: { canonical: "/contact" },
  ...pageSocialMetadata("Contact MyEVStation | EV Charging Station Enquiries", "Contact MyEVStation about EV charging station setup, site assessments, housing society charging, business partnerships and investment enquiries across India.", "/contact"),
};

export default function ContactPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left — intro + details */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-mission">
              Contact Us
            </p>
            <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-mission">
              Talk to MyEVStation About EV Charging Station Setup
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Whether you own a site, manage a housing society, operate a business or fleet, or are exploring an EV charging partnership, tell us about your requirement and our team will guide you on next steps.
            </p>

            <ul className="mt-8 space-y-4 text-[14px] text-ink-soft">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mission" strokeWidth={1.8} />
                <a href={`mailto:${SITE.email}`} className="hover:text-mission">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mission" strokeWidth={1.8} />
                <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} className="hover:text-mission">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-mission" strokeWidth={1.8} />
                <span>EV charging station enquiries and partnership support across India</span>
              </li>
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl border border-line bg-paper p-5">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-mission">Noida Office</h2>
                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  Hawelia Valenova Park, Plot No. CP-GH-05A, Sector Techzone-IV, Greater Noida West, Uttar Pradesh – 201318
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Hawelia%20Valenova%20Park%2C%20Plot%20No.%20CP-GH-05A%2C%20Sector%20Techzone-IV%2C%20Greater%20Noida%20West%2C%20Uttar%20Pradesh%20201318"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm font-bold text-mission hover:underline"
                >
                  Get directions
                </a>
              </div>
              <div className="rounded-xl border border-line bg-paper p-5">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-mission">Punjab Office</h2>
                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  Gumtala, Mirankot Road, Meerankot Chowk, Amritsar – 143001, Punjab
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gumtala%2C%20Mirankot%20Road%2C%20Meerankot%20Chowk%2C%20Amritsar%20143001%2C%20Punjab"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm font-bold text-mission hover:underline"
                >
                  Get directions
                </a>
              </div>
            </ul>
          </div>

          {/* Right — form card */}
          <div className="rounded-2xl bg-paper p-6 shadow-[0_30px_80px_-40px_rgba(13,92,61,0.5)] ring-1 ring-line lg:p-8">
            <ContactForm source="Contact page" />
          </div>
        </div>
      </div>
    </section>
  );
}
