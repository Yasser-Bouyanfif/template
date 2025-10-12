"use client";

import { Droplets, Shield, Moon, Sun } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Réactivation magique",
    description:
      "Au contact de l'eau, la Rose se déploie en quelques heures et diffuse une vapeur bienfaisante dans votre espace.",
  },
  {
    icon: Moon,
    title: "Rituel féminin",
    description:
      "Traditionnellement utilisée pour réguler le cycle, accompagner la fertilité et apaiser les émotions intérieures.",
  },
  {
    icon: Shield,
    title: "Purification énergétique",
    description:
      "Protège la maison, absorbe les énergies stagnantes et attire bénédictions et prospérité selon la tradition.",
  },
  {
    icon: Sun,
    title: "Décoration vivante",
    description:
      "Une pièce centrale poétique qui évolue au fil des jours et raconte la beauté de la résilience.",
  },
];

const steps = [
  "Plongez la rose dans un bol d'eau de source",
  "Laissez-la s'ouvrir durant 3 à 4 heures",
  "Changez l'eau tous les deux jours pour prolonger sa vitalité",
  "Séchez-la sur un linge pour réinitialiser le rituel",
];

export default function Advantages() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/40 to-white py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-rose-50/70 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-600">
            Bienfaits
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Pourquoi choisir la rose ChajaratMariam ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Une plante millénaire qui unifie le bien-être physique, énergétique et esthétique. Chez nous, chaque rose est
            préparée pour révéler toute sa magie dès l&apos;ouverture de votre colis.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative overflow-hidden rounded-3xl border border-amber-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
            >
              <div className="absolute -top-12 right-6 h-32 w-32 rounded-full bg-amber-200/40 blur-2xl transition group-hover:scale-110" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-rose-500 text-white">
                  <benefit.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-[32px] border border-amber-100 bg-white/70 p-10 shadow-lg shadow-amber-100/60 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-amber-500">Rituel guidé</p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Activez votre rose en 4 étapes</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Nous glissons dans chaque commande un guide détaillé. Voici l&apos;essentiel pour commencer votre expérience dès la réception.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-rose-50 p-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-6 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[28px] border border-amber-200/70 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 p-8 text-white shadow-xl shadow-amber-200/50">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Le + ChajaratMariam</p>
              <h4 className="mt-4 text-2xl font-semibold leading-snug">Suivi personnalisé après votre commande</h4>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Accédez à nos vidéos exclusives, recevez nos intentions de pleine lune et échangez avec notre équipe pour
                prolonger l&apos;expérience de renaissance.
              </p>
              <div className="mt-6 grid gap-3 text-sm">
                <p className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                  Assistance WhatsApp dédiée
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                  Conseils saisonniers
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                  Communauté de passionné·es
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
