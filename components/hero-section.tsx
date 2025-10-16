import React from "react";
import Image from "next/image";
import Link from "next/link";

import { HeroHeader } from "@/components/hero8-header";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const sliderHighlights = [
  "Symbole de résilience",
  "Miracle de la renaissance",
  "Eau d'infusion bienfaisante",
  "Origines sahariennes",
  "Réutilisable à l'infini",
  "Rituel familial",
];

export default function HeroSection() {
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
                <div className="grid grid-cols-2 gap-6 pt-6 text-sm text-[#5a4834] dark:text-[#cbb392] md:grid-cols-3">
                  <div className="rounded-2xl border border-[#e5d8c7] bg-white/70 p-4 shadow-sm backdrop-blur dark:border-[#2b2117] dark:bg-[#120b06]/60">
                    <p className="text-3xl font-semibold text-[#b88a55] dark:text-[#d4a574]">24h</p>
                    <p className="mt-1 leading-snug">Livraison le lendemain (-24h)</p>
                  </div>
                  <div className="rounded-2xl border border-[#e5d8c7] bg-white/70 p-4 shadow-sm backdrop-blur dark:border-[#2b2117] dark:bg-[#120b06]/60">
                    <p className="text-3xl font-semibold text-[#b88a55] dark:text-[#d4a574]">Sahara</p>
                    <p className="mt-1 leading-snug">Importé directement depuis le Sahara</p>
                  </div>
                  <div className="rounded-2xl border border-[#e5d8c7] bg-white/70 p-4 shadow-sm backdrop-blur dark:border-[#2b2117] dark:bg-[#120b06]/60">
                    <p className="text-3xl font-semibold text-[#b88a55] dark:text-[#d4a574]">€</p>
                    <p className="mt-1 leading-snug">Prix imbattable</p>
                  </div>
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
