"use client";

import Link from "next/link";
import Image from "next/image";
import { Droplets, Leaf, LucideIcon, Sparkles } from "lucide-react";

const highlights: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Droplets,
    title: "Renaissance instantanée",
    description: "Ajoutez de l&apos;eau douce et observez l&apos;ouverture spectaculaire en quelques minutes.",
  },
  {
    icon: Leaf,
    title: "Énergie purifiante",
    description: "Purifie, humidifie et charge vos pièces d&apos;une aura protectrice ancestrale.",
  },
  {
    icon: Sparkles,
    title: "Rituel millénaire",
    description: "Transmis par les femmes du désert pour accueillir abondance et sérénité.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(248, 250, 229, 0.32), transparent 45%), radial-gradient(circle at 80% 15%, rgba(249, 191, 143, 0.25), transparent 52%), radial-gradient(circle at 0% 80%, rgba(244, 255, 243, 0.35), transparent 50%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Rituel ChajaratMariam
          </div>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            La rose de Jéricho qui réveille votre foyer
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Découvrez notre rose de Jéricho soigneusement récoltée, accompagnée de son guide et de ses accessoires pour
            réaliser un rituel complet chez vous. Une expérience sensorielle qui reconnecte à l&apos;essentiel.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/shop" className="w-full sm:w-auto">
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-900 shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5">
                Commander le coffret
              </span>
            </Link>
            <Link href="#rituel" className="w-full sm:w-auto">
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:border-white">
                Comprendre le rituel
              </span>
            </Link>
          </div>
          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-white/60">Plantes sélectionnées</dt>
              <dd className="text-3xl font-semibold">1ère qualité</dd>
            </div>
            <div>
              <dt className="text-sm text-white/60">Clients apaisés</dt>
              <dd className="text-3xl font-semibold">+12 500</dd>
            </div>
            <div>
              <dt className="text-sm text-white/60">Réutilisable</dt>
              <dd className="text-3xl font-semibold">À l&apos;infini</dd>
            </div>
          </dl>
        </div>

        <div className="relative flex-1">
          <div className="absolute -left-16 top-12 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-amber-300/30 blur-3xl" aria-hidden />

          <div className="relative grid gap-6">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/40 via-transparent to-transparent" aria-hidden />
              <div className="flex items-start justify-between px-8 pt-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.45em] text-white/60">Rose éveillée</p>
                  <p className="mt-2 text-2xl font-semibold">Éclosion rayonnante</p>
                </div>
                <span className="rounded-full bg-white/20 px-4 py-1 text-xs font-semibold text-white/80">3&nbsp;min</span>
              </div>
              <div className="relative mt-6 h-[320px] w-full">
                <Image
                  src="/images/rose-awakening.svg"
                  alt="Rose de Jéricho épanouie"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3 text-sm font-semibold text-white/70">
                  <Droplets className="h-5 w-5" />
                  Étape immersion
                </div>
                <p className="mt-3 text-lg font-medium text-white">
                  Déposez votre rose dans un bol et ajoutez de l&apos;eau pure pour activer sa mémoire ancestrale.
                </p>
                <div className="relative mt-8 h-36 w-full">
                  <Image
                    src="/images/rose-dormant.svg"
                    alt="Rose de Jéricho en dormance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-amber-200/40 to-emerald-200/30 p-8 text-emerald-950 shadow-xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-900/70">Le coffret</p>
                <p className="mt-3 text-lg font-medium text-emerald-950">
                  Un sachet kraft, un guide illustré et un accessoire en terre cuite pour accompagner chaque renaissance.
                </p>
                <div className="relative mt-6 h-36 w-full">
                  <Image
                    src="/images/rose-packaging.svg"
                    alt="Packaging du coffret ChajaratMariam"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 bg-white/5">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
