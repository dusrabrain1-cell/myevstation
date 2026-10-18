import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";
import { SITE } from "@/lib/constants";

const TO_EMAIL = process.env.MYEVSTATION_CONTACT_TO_EMAIL || SITE.email;
// Use a MyEVStation-specific sender override when a verified domain is configured.
const FROM_EMAIL =
  process.env.MYEVSTATION_CONTACT_FROM_EMAIL || "MyEVStation Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, organisation, designation, email, message, source } = parsed.data;
  const subject = `New enquiry${source ? ` — ${source}` : ""} from ${name}`;

  const lines = [
    `Name: ${name}`,
    `Organisation: ${organisation}`,
    designation ? `Designation: ${designation}` : null,
    `Email: ${email}`,
    source ? `Source: ${source}` : null,
    "",
    "Message:",
    message,
  ].filter(Boolean);
  const text = lines.join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  // Never write personal enquiry contents to application logs.
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured; enquiry email was not sent.");
    return NextResponse.json(
      {
        error:
          "Contact email delivery is not configured. Please contact MyEVStation by phone or email.",
      },
      { status: 503 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Could not send message" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Could not send message" }, { status: 500 });
  }
}
