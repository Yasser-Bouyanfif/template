import React from "react";
import Image from "next/image";
import Link from "next/link";

import { HeroHeader } from "@/components/hero8-header";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Crown, Gem, Rocket } from "lucide-react";

const sliderHighlights = [
  "Symbole de résilience",
  "Miracle de la renaissance",
  "Eau d'infusion bienfaisante",
  "Origines sahariennes",
  "Réutilisable à l'infini",
  "Rituel familial",
];

export default function HeroSection() {
  const highlightBenefits = [
    {
      title: "Livraison éclair",
      description: "Commandez avant 17h et recevez votre Rose de Jéricho dès le lendemain.",
      icon: Rocket,
      gradient: "from-[#ffb347] via-[#ff6b6b] to-[#845ec2]",
      glow: "bg-[#ff9a76]/70",
    },
    {
      title: "Origine certifiée Sahara",
      description: "Chaque plante est récoltée de manière responsable auprès d'artisans sahariens.",
      icon: Gem,
      gradient: "from-[#3acfd5] via-[#3a4ed5] to-[#9f86ff]",
      glow: "bg-[#3acfd5]/60",
    },
    {
      title: "Prix légendaire",
      description: "Profitez d'offres exclusives pour une expérience magique sans compromis.",
      icon: Crown,
      gradient: "from-[#f9d423] via-[#ff4e50] to-[#9f44d3]",
      glow: "bg-[#f9d423]/60",
    },
  ];

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden bg-[#fdfaf6] text-[#2f2015] dark:bg-[#050505] dark:text-[#f5f5f5]">
        <section
          id="rituels"
          className="relative isolate overflow-hidden pb-24 pt-28 md:pb-40 lg:pt-44"
        >
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(217,180,130,0.22),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(199,160,106,0.18),_transparent_55%)]"
            aria-hidden
          />
          <div className="absolute right-[-15%] top-20 -z-10 h-64 w-64 rounded-full bg-[#f1d6b0]/70 blur-3xl dark:bg-[#c59f70]/30" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-12">
              <div className="relative z-10 space-y-8 lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d7c4ac]/60 bg-white/80 px-4 py-2 text-sm font-medium tracking-tight text-[#8b7355] shadow-sm backdrop-blur dark:border-[#3a2b1d] dark:bg-[#0f0a07]/80 dark:text-[#d0aa78]">
                  <span className="inline-flex size-2 rounded-full bg-[#c29a67]" aria-hidden />
                  Plante sacrée &amp; renouveau éternel
                </div>
                <h1 className="font-serif text-4xl font-bold leading-tight text-[#1a140f] md:text-5xl lg:text-[3.5rem] dark:text-white">
                  La Rose de Jéricho : le miracle vivant qui renaît entre vos mains
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-[#5a4834] dark:text-[#b8a491]">
                  Offrez-vous un rituel poétique et puissant : quelques gouttes d&apos;eau suffisent pour que cette plante millénaire
                  s&apos;éveille, diffuse ses arômes et vous transmette ses bienfaits. Une expérience sensorielle, spirituelle et
                  esthétique pour harmoniser votre quotidien.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button asChild size="lg" className="rounded-full bg-[#c29a67] px-7 text-base font-semibold text-white shadow-lg shadow-[#c29a67]/40 transition hover:-translate-y-0.5 hover:bg-[#a67e49] dark:bg-[#d4a574] dark:text-[#2b1a0d] dark:hover:bg-[#c08d4a]">
                    <Link href="/shop">Découvrir la collection</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    size="lg"
                    className="rounded-full border border-transparent bg-transparent px-7 text-base font-semibold text-[#8b7355] hover:bg-white/70 hover:text-[#5f4732] dark:text-[#d0aa78] dark:hover:bg-[#1b120b]/80"
                  >
                    <Link href="#bienfaits">Explorer les bienfaits</Link>
                  </Button>
                </div>
                <div className="grid gap-5 pt-8 sm:grid-cols-2 lg:grid-cols-3">
                  {highlightBenefits.map(({ title, description, icon: Icon, gradient, glow }) => (
                    <div
                      key={title}
                      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-[1px] shadow-[0_25px_70px_rgba(75,45,19,0.25)]`}
                    >
                      <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-white/90 p-6 text-[#382819] backdrop-blur-sm transition duration-500 group-hover:bg-white dark:bg-[#120b06]/90 dark:text-[#f5e2c7]">
                        <div
                          className={`absolute -top-10 -right-14 size-40 rounded-full ${glow} blur-3xl transition duration-500 group-hover:scale-110 group-hover:opacity-90`}
                          aria-hidden
                        />
                        <div
                          className={`inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-[#1f140a]/30`}
                        >
                          <Icon className="size-6" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#5a4834] dark:text-[#e2cda8]">{description}</p>
                        <div className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-1px)] border border-white/40 opacity-0 transition duration-500 group-hover:opacity-100 dark:border-white/20" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative lg:col-span-6">
                <div className="absolute -left-6 top-10 hidden size-44 rounded-full bg-[#f6e7d2]/80 blur-3xl dark:bg-[#c59f70]/25 lg:block" />
                <div className="absolute -right-10 bottom-0 hidden h-56 w-56 rounded-full bg-[#d7b78a]/50 blur-3xl dark:bg-[#b88a55]/30 lg:block" />
                <div className="relative isolate mx-auto max-w-xl rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-white/90 via-white/60 to-white/20 p-6 shadow-[0_30px_90px_rgba(81,53,28,0.16)] backdrop-blur-xl dark:border-[#1f160d] dark:from-[#0f0905]/90 dark:via-[#0d0804]/70 dark:to-[#0d0804]/30">
                  <div className="relative overflow-hidden rounded-[2rem] bg-[#f8f2ea] shadow-inner dark:bg-[#1a120a]">
                    <Image
                      src="/package.png"
                      alt="Packaging artisanal de la Rose de Jericho"
                      width={720}
                      height={720}
                      priority
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="absolute -left-12 bottom-10 hidden rotate-3 rounded-3xl border border-[#eadac4] bg-white/90 px-5 py-4 text-sm font-medium text-[#6d5239] shadow-xl dark:border-[#2b2117] dark:bg-[#120b06]/80 dark:text-[#d4a574] lg:block">
                    🌙 Idéale pour un rituel du soir apaisant
                  </div>
                  <div className="absolute -right-10 top-8 hidden -rotate-3 rounded-3xl border border-[#eadac4] bg-white/90 px-5 py-4 text-sm font-medium text-[#6d5239] shadow-xl dark:border-[#2b2117] dark:bg-[#120b06]/80 dark:text-[#d4a574] lg:flex lg:flex-col lg:gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88a55]">Sensation</span>
                    <span>Une oasis végétale qui réveille les sens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-20 max-w-6xl">
            <InfiniteSlider className="[--duration:30s] [--gap:4rem] text-[#8b7355] opacity-80 dark:text-[#cbb392]">
              {sliderHighlights.map((highlight) => (
                <span key={highlight} className="text-sm font-medium uppercase tracking-[0.4em]">
                  {highlight}
                </span>
              ))}
            </InfiniteSlider>
          </div>
        </section>
      </main>
    </>
  );
}
