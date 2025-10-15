import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const sliderHighlights = [
  "Réveil en quelques minutes",
  "Rituel apaisant",
  "Hydratation naturelle",
  "Purification douce",
  "Énergie renouvelée",
  "Beauté intemporelle",
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden bg-[#f9f3eb] text-[#2f2015] dark:bg-[#150d08] dark:text-[#f5ece1]">
        <section
          id="rituels"
          className="relative isolate overflow-hidden bg-gradient-to-b from-[#faf5ef] via-[#f3e8db] to-[#efe0cf] pb-24 pt-32 md:pb-40 lg:pt-48"
        >
          <div className="absolute inset-x-0 top-16 -z-10 h-[480px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_65%)]" aria-hidden />
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="relative max-w-xl space-y-10 lg:max-w-none">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d8c6b5] bg-white/70 px-4 py-1 text-xs tracking-[0.3em] text-[#6f533c] shadow-sm dark:border-[#463122] dark:bg-[#1c120c]/80 dark:text-[#f0dfcd]">
                Rituel botanique
              </span>
              <h1 className="font-serif text-4xl leading-tight text-[#2f2015] md:text-5xl lg:text-6xl dark:text-[#f5ecdf]">
                La renaissance de la Rose de Jericho chez CHAJARATMARIAM
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[#5a3f2c] dark:text-[#f0dfcd]/80">
                Offrez à vos espaces et à votre esprit un moment de grâce. Nos rituels sur mesure réveillent la plante sacrée avec une eau filtrée et des gestes lents pour révéler sa symbolique de protection et de renouveau.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-[#b98c5f] px-8 py-6 text-base font-medium tracking-[0.2em] uppercase text-white hover:bg-[#a6784d]">
                  <Link href="#contact">Réserver mon rituel</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="px-8 py-6 text-base font-medium text-[#6f533c] hover:text-[#2f2015] dark:text-[#f0dfcd]">
                  <Link href="#origines">Découvrir l&apos;histoire</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 text-sm">
                {["Eau filtrée", "Encens de myrrhe", "Musique méditative"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#ead8c8] bg-white/60 p-4 text-center shadow-sm dark:border-[#3b281b] dark:bg-[#21140d]/80">
                    <span className="font-medium tracking-[0.2em] text-[#6f533c] dark:text-[#f0dfcd]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative isolate mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[3rem] border border-[#e2d2c2] bg-white/70 shadow-[0_40px_120px_rgba(107,77,51,0.18)] backdrop-blur-sm dark:border-[#3e2a1b] dark:bg-[#1a100a]/80">
                <Image
                  src="/package.png"
                  alt="Packaging artisanal de la Rose de Jericho"
                  width={640}
                  height={640}
                  priority
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-12 -left-8 hidden w-40 -rotate-3 rounded-3xl border border-[#e8d7c7] bg-white/90 p-3 shadow-xl shadow-[#d1b498]/30 sm:block dark:border-[#3b291d] dark:bg-[#21140d]">
                <Image
                  src="/images/rose-dormant.svg"
                  alt="Rose de Jericho en dormance"
                  width={220}
                  height={220}
                />
              </div>
              <div className="absolute -top-10 -right-12 hidden w-48 rotate-6 rounded-3xl border border-[#e8d7c7] bg-white/90 p-4 shadow-xl shadow-[#d1b498]/30 sm:block dark:border-[#3b291d] dark:bg-[#21140d]">
                <Image
                  src="/images/rose-awakened.svg"
                  alt="Rose de Jericho éveillée"
                  width={260}
                  height={260}
                />
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-full border border-[#e5d3c0] bg-white/50 py-6 shadow-inner shadow-[#d1b498]/20 dark:border-[#3b291d] dark:bg-[#1c120b]/80">
              <InfiniteSlider speedOnHover={16} speed={28} gap={96}>
                {sliderHighlights.map((item) => (
                  <div key={item} className="flex min-w-[14rem] items-center justify-center px-6">
                    <span className="text-sm tracking-[0.3em] uppercase text-[#6f533c] dark:text-[#f0dfcd]">
                      {item}
                    </span>
                  </div>
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
