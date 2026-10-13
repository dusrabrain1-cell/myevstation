import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PRIMARY_LABELS = new Set(["Home", "Why MyEVStation", "Business Model", "Technology", "Investment", "Calculator", "About Us"]);
const primaryLinks = NAV_LINKS.filter((link) => PRIMARY_LABELS.has(link.label));
const moreLinks = NAV_LINKS.filter((link) => !PRIMARY_LABELS.has(link.label));

export function NavMenu({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      {primaryLinks.map((link) => (
        <li key={link.label} className="shrink-0">
          <Link href={link.href} className="whitespace-nowrap text-[12px] font-semibold text-ink transition-colors hover:text-mission xl:text-[13px]">
            {link.label}
          </Link>
        </li>
      ))}
      {moreLinks.length > 0 && (
        <li className="group relative shrink-0">
          <button type="button" className="whitespace-nowrap text-[12px] font-semibold text-ink xl:text-[13px]" aria-haspopup="true">More</button>
          <ul className="invisible absolute right-0 top-full z-50 mt-3 min-w-48 rounded-xl border border-line bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            {moreLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-cream hover:text-mission">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  );
}
