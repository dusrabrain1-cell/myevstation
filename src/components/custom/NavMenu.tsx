import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function NavMenu({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      {NAV_LINKS.map((link) => (
        <li key={link.label} className="shrink-0">
          <Link
            href={link.href}
            className="whitespace-nowrap text-[12px] font-semibold text-ink transition-colors hover:text-mission xl:text-[13px]"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
