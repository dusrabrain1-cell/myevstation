"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/custom/Navbar";
import { Footer } from "@/components/custom/Footer";
import { RouteLoader } from "@/components/custom/RouteLoader";
import { ContactModalProvider } from "@/components/custom/contact/ContactModalProvider";

/**
 * Shared site chrome for every route. The homepage has its own designed
 * header/footer inside HomeClient, so the shared chrome is omitted there.
 */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <ContactModalProvider>
      <RouteLoader />
      {!isHome && <Navbar />}
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      {!isHome && <Footer />}
    </ContactModalProvider>
  );
}
