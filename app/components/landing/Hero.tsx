"use client";

import Link from "next/link";
import { Droplets, Leaf, Sparkles, Heart, Clock } from "lucide-react";

const sellingPoints = [
  {
    icon: Sparkles,
    title: "Éveille les sens",
    description: "Un rituel ancestral qui diffuse une énergie pure dans votre foyer.",
  },
  {
    icon: Droplets,
    title: "Réactivation en 3h",
    description: "La Rose de Jéricho se déploie majestueusement au contact de l'eau.",
  },
  {
    icon: Heart,
    title: "Bien-être féminin",
    description: "Traditionnellement utilisée pour équilibrer les cycles et apaiser l'esprit.",
  },
];

const ritualSteps = [
  {
    id: 1,
    label: "Déposez la rose dans un bol peu profond",
  },
  {
    id: 2,
    label: "Ajoutez de l'eau de source à température ambiante",
  },
  {
    id: 3,
    label: "Observez la renaissance et profitez de son aura",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIwLjE1IiBkPSJNMCwwIEwxMjAwLDAiIHN0cm9rZT0iI2ZkZGFjOSIgc3Ryb2tlLWRhc2hhcnJheT0iMiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-10 text-left">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-5 py-2 shadow-md shadow-amber-100/60 backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-rose-500 text-white">
                <Leaf className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-amber-600">ChajaratMariam</p>
                <p className="text-sm font-medium text-slate-600">Roses de Jéricho authentiques</p>
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
                Les secrets thérapeutiques de la
                <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                  Rose de Jéricho
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl">
                Offrez-vous le rituel de renaissance le plus prisé du désert. Chaque rose sélectionnée par ChajaratMariam est
                cueillie à la main et contrôlée pour préserver toute sa force énergétique et sa beauté naturelle.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {sellingPoints.map((point) => (
                <div
                  key={point.title}
                  className="group rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-sm shadow-amber-100/40 transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-200/40"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 via-white to-rose-100 text-amber-600">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-amber-200/60 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-200/60"
              >
                Explorer la boutique
              </Link>
              <Link
                href="#benefits"
                className="inline-flex items-center justify-center rounded-full border border-amber-200 px-8 py-3 text-base font-semibold text-amber-700 transition hover:bg-amber-50"
              >
                Comprendre le rituel
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-amber-100 bg-white/80 p-5 text-center shadow-sm">
                <p className="text-3xl font-bold text-amber-600">12K+</p>
                <p className="mt-1 text-sm text-slate-500">Rituels guidés</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-white/80 p-5 text-center shadow-sm">
                <p className="text-3xl font-bold text-orange-600">4.9/5</p>
                <p className="mt-1 text-sm text-slate-500">Avis clients</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-white/80 p-5 text-center shadow-sm">
                <p className="text-3xl font-bold text-rose-600">100%</p>
                <p className="mt-1 text-sm text-slate-500">Origine naturelle</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-amber-200/40 via-rose-200/30 to-white blur-2xl" />
            <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/80 p-10 shadow-2xl shadow-amber-200/40 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-500">Rituel express</p>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  <Clock className="h-3.5 w-3.5" /> 3h de renaissance
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">Rose de Jéricho premium</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Fournie avec fiche rituelle, astuce d&apos;activation et mot de bénédiction.
              </p>

              <div className="mt-8 space-y-4">
                {ritualSteps.map((step) => (
                  <div key={step.id} className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-amber-50 to-white p-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-lg font-semibold text-white">
                      {step.id}
                    </span>
                    <p className="text-sm font-medium text-slate-700">{step.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.28em] text-white/70">Compris dans chaque envoi</p>
                <div className="grid gap-3 text-sm sm:grid-cols-2">
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    Sachet de conservation
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    Guide aromatique
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    Mantra de protection
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    Conseils d&apos;entretien
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-3xl bg-white/90 p-6 shadow-xl shadow-amber-200/50 backdrop-blur lg:block">
              <p className="text-sm font-semibold text-amber-700">Expédition en 24h</p>
              <p className="mt-2 text-xs text-slate-500">Depuis notre atelier parisien, avec amour et délicatesse.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
