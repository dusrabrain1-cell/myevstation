"use client";

import { createContext, useCallback, useContext } from "react";

type ContactModalContextValue = {
  /** Open the contact modal. `source` labels which CTA triggered it. */
  open: (source?: string) => void;
  close: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within <ContactModalProvider>");
  }
  return ctx;
}

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const open = useCallback((nextSource?: string) => {
    const message = `Hello MyEVStation, I would like to enquire about ${nextSource || "EV charging station opportunities"}. Please guide me on investment, location suitability and next steps.`;
    window.open(`https://wa.me/919876260822?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }, []);
  const close = useCallback(() => {}, []);

  return (
    <ContactModalContext.Provider value={{ open, close }}>
      {children}

    </ContactModalContext.Provider>
  );
}
