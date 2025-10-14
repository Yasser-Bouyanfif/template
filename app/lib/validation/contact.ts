import { z } from "zod";

const phoneRegex = /^[0-9+().\s-]{6,}$/;

export const contactFormServerSchema = z.object({
  fullName: z
    .string({ required_error: "Le nom complet est requis." })
    .trim()
    .min(2, "Le nom complet doit contenir au moins 2 caractères."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || value.length === 0 || phoneRegex.test(value),
      "Le numéro de téléphone est invalide.",
    )
    .transform((value) => (value && value.length > 0 ? value : undefined)),
  email: z
    .string({ required_error: "L'adresse email est requise." })
    .trim()
    .email("L'adresse email est invalide."),
  content: z
    .string({ required_error: "Le message est requis." })
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères."),
});

export type ContactFormServerPayload = z.infer<typeof contactFormServerSchema>;
