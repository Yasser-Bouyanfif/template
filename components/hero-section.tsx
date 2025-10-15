import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";

const ritualNotes = [
  "Hydratation douce",
  "Énergie féminine",
  "Harmonie naturelle",
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden bg-[#fdfbf7] text-[#2d241c] dark:bg-[#150d08] dark:text-[#f5ece1]">
        <section
          id="rituels"
          className="relative isolate overflow-hidden pb-24 pt-32 md:pb-36 lg:pt-44"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9)_0%,_rgba(245,238,227,0.6)_45%,_transparent_80%)]"
            aria-hidden
          />
          <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e7ded0] bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.32em] text-[#6b5a4a] shadow-sm">
                Rose de Jéricho
              </span>
              <h1 className="font-serif text-4xl leading-tight text-[#1f1a15] md:text-5xl lg:text-6xl dark:text-[#f5ecdf]">
                Les rituels épurés pour révéler la plante des renaissances
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[#5c5247] dark:text-[#f0dfcd]/80">
                Nous imaginons des cérémonies lumineuses, minimalistes et profondément sensorielles pour laisser la Rose de Jéricho déployer sa symbolique de protection et de renouveau au cœur de votre intérieur.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#e0c9a6] px-8 py-6 text-base font-medium uppercase tracking-[0.2em] text-[#2d241c] shadow-sm hover:bg-[#d7bc90]"
                >
                  <Link href="#contact">Réserver un rituel</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="px-8 py-6 text-base font-medium text-[#5c5247] hover:text-[#1f1a15] dark:text-[#f0dfcd]"
                >
                  <Link href="#origines">Voir la symbolique</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 pt-6 text-sm">
                {ritualNotes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-[#ede5d8] bg-white px-4 py-2 text-[#5c5247] shadow-sm"
                  >
                    <span className="size-1.5 rounded-full bg-[#d6b485]" aria-hidden />
                    <span className="tracking-[0.18em] uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative isolate mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ede5d8] bg-white shadow-[0_30px_80px_rgba(196,171,134,0.28)]">
                <Image
                  src="/images/rose-packaging.svg"
                  alt="Packaging minimaliste de la Rose de Jericho"
                  width={620}
                  height={620}
                  priority
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-12 right-6 hidden max-w-[220px] rounded-3xl border border-[#f0e8dd] bg-white/90 p-4 shadow-[0_18px_40px_rgba(214,181,133,0.2)] sm:block">
                <Image
                  src="/images/rose-dormant.svg"
                  alt="Rose de Jericho en dormance"
                  width={220}
                  height={220}
                />
              </div>
              <div className="absolute -top-12 -left-8 hidden max-w-[240px] rounded-3xl border border-[#f0e8dd] bg-white/90 p-4 shadow-[0_18px_40px_rgba(214,181,133,0.2)] sm:block">
                <Image
                  src="/images/rose-awakened.svg"
                  alt="Rose de Jericho éclose"
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
