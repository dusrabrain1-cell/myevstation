"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { SITE } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  source,
  onSuccess,
}: {
  /** Label of the CTA that opened the form (e.g. "Partner With Us"). */
  source?: string;
  /** Called after a successful submit (e.g. to keep a modal open on success). */
  onSuccess?: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [whatsappFallbackUrl, setWhatsappFallbackUrl] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { source },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("submitting");
    setWhatsappFallbackUrl(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.delivered) {
        throw new Error(result?.error || "Your enquiry could not be delivered.");
      }
      setStatus("success");
      setWhatsappFallbackUrl(null);
      reset();
      onSuccess?.();
    } catch (error) {
      console.error("[contact form] Submission failed:", error);
      const message = [
        "MyEVStation website enquiry",
        `Name: ${values.name}`,
        `Organisation: ${values.organisation}`,
        values.designation ? `Designation: ${values.designation}` : null,
        `Email: ${values.email}`,
        `Source: ${source || values.source || "Website contact form"}`,
        `Message: ${values.message}`,
      ].filter(Boolean).join("\n");
      const phone = SITE.whatsappPhone.replace(/\D/g, "");
      setWhatsappFallbackUrl(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center py-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mission-soft">
          <CheckCircle2 className="h-7 w-7 text-mission" strokeWidth={2} />
        </span>
        <h3 className="mt-4 font-display text-lg font-extrabold text-ink">
          Message sent!
        </h3>
        <p className="mt-1 max-w-xs text-sm leading-relaxed text-ink-soft">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[13px] font-semibold text-mission underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            className={inputClass(errors.name)}
            {...register("name")}
          />
        </Field>
        <Field label="Organisation" required error={errors.organisation?.message}>
          <input
            type="text"
            autoComplete="organization"
            placeholder="Company / institution"
            aria-invalid={Boolean(errors.organisation)}
            className={inputClass(errors.organisation)}
            {...register("organisation")}
          />
        </Field>
        <Field label="Designation" error={errors.designation?.message}>
          <input
            type="text"
            autoComplete="organization-title"
            placeholder="Your role (optional)"
            aria-invalid={Boolean(errors.designation)}
            className={inputClass(errors.designation)}
            {...register("designation")}
          />
        </Field>
        <Field label="Email" required error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            className={inputClass(errors.email)}
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Message" required error={errors.message?.message}>
        <textarea
          rows={4}
          placeholder="How can we work together?"
          aria-invalid={Boolean(errors.message)}
          className={inputClass(errors.message)}
          {...register("message")}
        />
      </Field>

      {status === "error" && (
        <p role="alert" aria-live="assertive" className="rounded-md bg-red-50 px-3 py-2 text-[13px] font-medium text-red-700">
          Something went wrong sending your message. Please try again, or email{" "}
          <a className="underline underline-offset-2" href={"mailto:" + SITE.email}>
            {SITE.email}
          </a>
          .
          {whatsappFallbackUrl && (
            <>
              {" "}
              You can also{" "}
              <a
                className="font-bold underline underline-offset-2"
                href={whatsappFallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                continue on WhatsApp
              </a>
              {" "}with your enquiry details already filled in.
            </>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-mission px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-mission-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.2} />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" strokeWidth={2.2} />
            Send message
          </>
        )}
      </button>
    </form>
  );
}

/* ── Bits ─────────────────────────────────────────────────────────────── */

function Field({
  label,
  required = false,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12.5px] font-semibold text-ink">
        {label}
        {required && <span className="text-mission"> *</span>}
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
