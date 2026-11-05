"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Loader2 } from "lucide-react";

import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { whatsappHref } from "@/lib/constants";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function ContactForm({
  source,
  onSuccess,
}: {
  source?: string;
  onSuccess?: () => void;
}) {
  const [opening, setOpening] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { source, email: "" },
  });

  function onSubmit(values: ContactInput) {
    setOpening(true);
    // Preserve attribution from links such as /contact?source=franchise-guide.
    const querySource = new URLSearchParams(window.location.search).get("source");
    const leadSource = querySource || source || values.source || "website_contact_form";
    const message = [
      "Hello MyEVStation, I would like to enquire about EV charging.",
      "",
      `Name: ${values.name}`,
      `Organisation: ${values.organisation}`,
      values.designation ? `Designation: ${values.designation}` : null,
      leadSource ? `Enquiry source: ${leadSource}` : null,
      "",
      `Message: ${values.message}`,
    ].filter(Boolean).join("\\n");

    const whatsappUrl = whatsappHref(message);
    const navigateToWhatsApp = () => window.location.assign(whatsappUrl);

    // Queue analytics commands even when the GA script has not loaded yet.
    // The gtag.js loader consumes this queue when it becomes available.
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function (...args: unknown[]) {
      window.dataLayer?.push(arguments);
    };

    const eventParams = {
      link_url: whatsappUrl,
      link_text: "Continue to WhatsApp",
      contact_method: "whatsapp",
      contact_source: leadSource,
      lead_method: "whatsapp_form",
      lead_source: leadSource,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
      page_title: document.title,
    };

    // A valid form submission is the lead action; WhatsApp handoff is tracked separately.
    window.gtag("event", "generate_lead", eventParams);
    window.gtag("event", "contact_cta_click", eventParams);
    window.gtag("event", "whatsapp_click", {
      ...eventParams,
      event_callback: navigateToWhatsApp,
      event_timeout: 1200,
    });
    // Do not strand the visitor if analytics is blocked or the callback never fires.
    window.setTimeout(navigateToWhatsApp, 1500);
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name?.message}>
          <input type="text" autoComplete="name" placeholder="Your name" aria-invalid={Boolean(errors.name)} className={inputClass(errors.name)} {...register("name")} />
        </Field>
        <Field label="Organisation" required error={errors.organisation?.message}>
          <input type="text" autoComplete="organization" placeholder="Company / institution" aria-invalid={Boolean(errors.organisation)} className={inputClass(errors.organisation)} {...register("organisation")} />
        </Field>
        <Field label="Designation" error={errors.designation?.message}>
          <input type="text" autoComplete="organization-title" placeholder="Your role (optional)" aria-invalid={Boolean(errors.designation)} className={inputClass(errors.designation)} {...register("designation")} />
        </Field>
      </div>

      <Field label="Message" required error={errors.message?.message}>
        <textarea rows={4} placeholder="How can we work together?" aria-invalid={Boolean(errors.message)} className={inputClass(errors.message)} {...register("message")} />
      </Field>

      <p className="text-[12px] leading-relaxed text-ink-soft">
        Your enquiry will open directly in WhatsApp with these details pre-filled. Review and send it to our team there.
      </p>

      <button type="submit" disabled={opening} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-mission px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-mission-dark disabled:cursor-not-allowed disabled:opacity-70">
        {opening ? (
          <><Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.2} />Opening WhatsApp…</>
        ) : (
          <><MessageCircle className="h-4 w-4" strokeWidth={2.2} />Continue to WhatsApp</>
        )}
      </button>
    </form>
  );
}

function Field({ label, required = false, error, children }: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12.5px] font-semibold text-ink">
        {label}{required && <span className="text-mission"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-[12px] text-red-600">{error}</span>}
    </label>
  );
}

function inputClass(hasError: unknown) {
  return `w-full rounded-md border bg-paper px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-muted transition-colors focus:outline-none focus:ring-2 focus:ring-mission/30 ${
    hasError ? "border-red-400" : "border-line focus:border-mission"
  }`;
}
