import { z } from "zod";

/** Shared validation for website enquiries handed off directly to WhatsApp. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  organisation: z.string().trim().min(2, "Please enter your organisation"),
  designation: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.union([z.string().trim().email("Please enter a valid email"), z.literal("")]).optional(),
  message: z.string().trim().min(10, "Please add a short message (10+ characters)"),
  source: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
