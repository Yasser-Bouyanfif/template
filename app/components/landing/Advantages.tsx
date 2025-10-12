"use client";

import Image from "next/image";
import { Droplets, Flower2, HeartPulse, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Régulation hormonale",
    subtitle: "Un soutien doux pour retrouver votre rythme naturel.",
    description:
      "Les infusions issues de notre rose contribuent à apaiser les cycles menstruels et accompagner les périodes de transition post-partum.",
  },
  {
    icon: HeartPulse,
    title: "Fertilité nourrie",
    subtitle: "Un rituel d&apos;ouverture pour accueillir la vie.",
    description:
      "Le rituel ChajaratMariam invite au recentrage émotionnel et à la confiance, éléments essentiels lors d&apos;un projet de conception.",
  },
  {
    icon: Droplets,
    title: "Purification énergétique",
    subtitle: "Une eau chargée de lumière pour votre foyer.",
    description:
      "Utilisez l&apos;eau de renaissance pour bénir vos espaces, purifier vos cristaux ou dynamiser vos pratiques méditatives.",
  },
  {
    icon: Flower2,
    title: "Harmonie intérieure",
    subtitle: "Un compagnon sacré pour vos moments de contemplation.",
    description:
      "La rose symbolise la résilience et accompagne vos affirmations, vos prières ou vos séances de yoga en vous rappelant que chaque fermeture prépare une renaissance.",
  },
];

export default function Advantages() {
  return (
    <section id="bienfaits" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">Bienfaits</p>
            <h2 className="mt-4 text-3xl font-semibold text-emerald-950 sm:text-4xl">
              Un rituel vivant pour équilibrer le corps, le cœur et l&apos;esprit
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-emerald-900/80">
              Nos roses de Jéricho sont préparées pour préserver chaque fibre, chaque souvenir de renaissance. Infusions, brumes
              énergétiques ou simple présence sacrée&nbsp;: laissez-la diffuser ses vertus dans votre quotidien.
            </p>

            <div className="mt-10 rounded-[2.5rem] border border-emerald-100 bg-emerald-50/70 p-10 shadow-lg shadow-emerald-200/40">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">Élixir maison</p>
              <p className="mt-3 text-lg font-medium text-emerald-950">
                Versez l&apos;eau de renaissance dans un flacon spray, ajoutez une goutte d&apos;huile essentielle de rose et brumisez vos textiles
                sacrés ou votre visage après méditation.
              </p>
              <div className="relative mt-6 h-40 w-full">
                <Image src="/images/rose-dormant.svg" alt="Élixir de rose de Jéricho" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, subtitle, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-900/5 p-8 shadow-lg transition-shadow duration-300 hover:shadow-emerald-200/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 text-emerald-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-950">{title}</h3>
                    <p className="mt-1 text-sm text-emerald-900/70">{subtitle}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-emerald-900/80">{description}</p>
                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
