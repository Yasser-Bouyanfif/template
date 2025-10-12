"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(100, "Le nom est trop long."),
  email: z
    .string()
    .trim()
    .min(1, "L'adresse e-mail est obligatoire.")
    .email("Adresse e-mail invalide.")
    .max(320, "L'adresse e-mail est trop longue."),
  phone: z
    .string()
    .optional()
    .transform((value) => (value ?? "").trim())
    .refine(
      (value) =>
        value.length === 0 || /^(?:\+33|0)[1-9](?:[ .-]?\d{2}){4}$/.test(value),
      "Le numéro de téléphone doit être un numéro français valide."
    )
    .refine((value) => value.length <= 30, "Le numéro de téléphone est trop long."),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(2000, "Le message est trop long."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormData | undefined;
        if (fieldName && !errors[fieldName]) {
          errors[fieldName] = issue.message;
        }
      });
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage("Veuillez corriger les erreurs du formulaire.");
      return;
    }

    const sanitizedData = validation.data;
    setFieldErrors({});

    try {
      const response = await fetch("/api/resend/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: sanitizedData.name,
          phone: sanitizedData.phone,
          email: sanitizedData.email,
          content: sanitizedData.message,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        setErrorMessage(
          typeof errorBody?.error === "string"
            ? errorBody.error
            : "Une erreur est survenue lors de l'envoi du message."
        );
        setStatus("error");
        return;
      }

      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire de contact", error);
      setErrorMessage("Impossible d'envoyer votre demande pour le moment. Veuillez réessayer plus tard.");
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
    if (name in fieldErrors) {
      const nextErrors = { ...fieldErrors };
      delete nextErrors[name as keyof ContactFormData];
      setFieldErrors(nextErrors);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-emerald-50/40 via-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">Nous écrire</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-emerald-950">
            Parlons de votre rituel avec la Rose de Jéricho
          </h2>
          <p className="mt-4 text-lg text-emerald-900/80">
            Notre équipe ChajaratMariam vous conseille pour choisir votre coffret, comprendre le rituel ou préparer un cadeau
            chargé de sens.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-white/90 p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-emerald-950">Restons en lien</h3>
            <p className="mt-4 text-base leading-relaxed text-emerald-900/80">
              Nous répondons à vos questions sur la préparation de la rose, le suivi des commandes ou l&apos;organisation d&apos;ateliers
              collectifs.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-emerald-900">Téléphone</p>
                  <a href="tel:+33612345678" className="text-emerald-900/70 transition-colors hover:text-emerald-700">
                    +33 6 12 34 56 78
                  </a>
                  <p className="text-sm text-emerald-900/60">Du lundi au vendredi, 9h – 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-emerald-900">Email</p>
                  <a
                    href="mailto:bonjour@chajaratmariam.com"
                    className="text-emerald-900/70 transition-colors hover:text-emerald-700"
                  >
                    bonjour@chajaratmariam.com
                  </a>
                  <p className="text-sm text-emerald-900/60">Nous répondons sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-emerald-900">Atelier</p>
                  <p className="text-emerald-900/70">
                    12 rue des Jardiniers
                    <br />
                    75011 Paris, France
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/70 px-5 py-4 text-sm text-emerald-900/70">
              <span className="rounded-full bg-white px-4 py-1 font-semibold text-emerald-600">WhatsApp disponible</span>
              <span>Visio-rituel sur demande</span>
              <span>Réponse sous 24h</span>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white/95 p-10 shadow-xl">
            <h3 className="mb-6 text-2xl font-bold text-emerald-950">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom complet *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-emerald-900 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                {fieldErrors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-500">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-emerald-900 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-500">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                    className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-emerald-900 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  {fieldErrors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-red-500">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Votre message *"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-emerald-900 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                ></textarea>
                {fieldErrors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-500">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status === "loading"}
              >
                <span>{status === "loading" ? "Envoi en cours..." : "Envoyer le message"}</span>
                <Send className="h-5 w-5" />
              </button>

              {status === "success" && (
                <p className="rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-600">
                  Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
