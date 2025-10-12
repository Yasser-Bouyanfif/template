"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="bg-gradient-to-b from-white via-amber-50/20 to-rose-50/20 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Nous écrire
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ChajaratMariam à votre écoute
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une question sur le rituel, la livraison ou l&apos;origine de nos roses ? Notre équipe vous répond avec douceur et précision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Restons connectés au sacré
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Nous vous accompagnons avant et après votre achat afin que votre Rose de Jéricho révèle toute sa lumière. Profitez de nos conseils personnalisés et de nos rituels guidés exclusifs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Téléphone</p>
                  <a
                    href="tel:+33612345678"
                    className="text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    +33 6 12 34 56 78
                  </a>
                  <p className="text-sm text-slate-500 mt-1">Lun - Sam : 9h - 19h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Email</p>
                  <a
                    href="mailto:hello@chajaratmariam.com"
                    className="text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    hello@chajaratmariam.com
                  </a>
                  <p className="text-sm text-slate-500 mt-1">Réponse sous 24h ouvrées</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Adresse</p>
                  <p className="text-slate-600">
                    Atelier ChajaratMariam
                    <br />
                    128 Rue du Temple, 75003 Paris
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-amber-100/70 bg-white/90 p-8 shadow-2xl shadow-amber-100/60 backdrop-blur">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message sacré</h3>
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
                  className="w-full rounded-xl border-2 border-amber-100 bg-white px-4 py-3 text-slate-800 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                {fieldErrors.name && (
                  <p id="name-error" className="text-sm text-red-500 mt-2">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
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
                    className="w-full rounded-xl border-2 border-amber-100 bg-white px-4 py-3 text-slate-800 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="text-sm text-red-500 mt-2">
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
                    className="w-full rounded-xl border-2 border-amber-100 bg-white px-4 py-3 text-slate-800 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  {fieldErrors.phone && (
                    <p id="phone-error" className="text-sm text-red-500 mt-2">
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
                  className="w-full resize-none rounded-xl border-2 border-amber-100 bg-white px-4 py-3 text-slate-800 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
                {fieldErrors.message && (
                  <p id="message-error" className="text-sm text-red-500 mt-2">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status === "loading"}
              >
                <span>{status === "loading" ? "Envoi en cours..." : "Envoyer le message"}</span>
                <Send className="w-5 h-5" />
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-600 text-center bg-emerald-50 rounded-lg p-3">
                  Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 text-center bg-red-50 rounded-lg p-3">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
