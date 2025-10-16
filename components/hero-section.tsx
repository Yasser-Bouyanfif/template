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
      <main className="overflow-x-hidden bg-[#fefbf7] text-[#2b231a]">
        <section
          id="rituels"
          className="relative isolate overflow-hidden bg-gradient-to-b from-[#fffdfa] via-[#fbf5ee] to-[#f5ede1] pb-24 pt-32 md:pb-40 lg:pt-48"
        >
          <div className="absolute inset-x-0 top-16 -z-10 h-[480px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_65%)]" aria-hidden />
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="relative max-w-xl space-y-10 lg:max-w-none">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e6dccf] bg-white/80 px-4 py-1 text-xs tracking-[0.3em] text-[#7d6752] shadow-sm">
                Rituel botanique
              </span>
              <h1 className="font-serif text-4xl leading-tight text-[#2b231a] md:text-5xl lg:text-6xl">
                La renaissance de la Rose de Jericho chez CHAJARATMARIAM
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[#75614d]">
                Offrez à vos espaces et à votre esprit un moment de grâce. Nos rituels sur mesure réveillent la plante sacrée avec une eau filtrée et des gestes lents pour révéler sa symbolique de protection et de renouveau.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-[#d2b99c] px-8 py-6 text-base font-medium tracking-[0.2em] uppercase text-[#2b231a] transition hover:bg-[#c8ab8b] hover:text-[#1f1812]">
                  <Link href="#contact">Réserver mon rituel</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="px-8 py-6 text-base font-medium text-[#7d6752] hover:text-[#2b231a]">
                  <Link href="#bienfaits">Découvrir l&apos;histoire</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 text-sm">
                {["Eau filtrée", "Encens de myrrhe", "Musique méditative"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#efe3d5] bg-white/70 p-4 text-center shadow-sm">
                    <span className="font-medium tracking-[0.2em] text-[#7d6752]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative isolate mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[3rem] border border-[#efe3d5] bg-white/80 shadow-[0_40px_120px_rgba(214,188,158,0.25)] backdrop-blur-sm">
                <Image
                  src="/package.png"
                  alt="Packaging artisanal de la Rose de Jericho"
                  width={640}
                  height={640}
                  priority
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-12 -left-8 hidden w-40 -rotate-3 rounded-3xl border border-[#f1e5d6] bg-white/90 p-3 shadow-xl shadow-[#e6d4be]/40 sm:block">
                <Image
                  src="/images/rose-dormant.svg"
                  alt="Rose de Jericho en dormance"
                  width={220}
                  height={220}
                />
              </div>
              <div className="absolute -top-10 -right-12 hidden w-48 rotate-6 rounded-3xl border border-[#f1e5d6] bg-white/90 p-4 shadow-xl shadow-[#e6d4be]/40 sm:block">
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
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-full border border-[#efe3d5] bg-white/60 py-6 shadow-inner shadow-[#e6d4be]/20">
              <InfiniteSlider speedOnHover={16} speed={28} gap={96}>
                {sliderHighlights.map((item) => (
                  <div key={item} className="flex min-w-[14rem] items-center justify-center px-6">
                    <span className="text-sm tracking-[0.3em] uppercase text-[#7d6752]">
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
