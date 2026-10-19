"use client";

import { Navbar } from "@/components/custom/Navbar";
import { Footer } from "@/components/custom/Footer";
import { ContactModalProvider } from "@/components/custom/contact/ContactModalProvider";

/**
 * Shared site chrome for every route, including the homepage.
 */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      <Navbar />
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <Footer />
    </ContactModalProvider>
  );
}
