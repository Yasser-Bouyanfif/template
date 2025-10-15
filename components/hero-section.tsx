import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";

const highlights = [
  "Réveil en douceur",
  "Hydratation naturelle",
  "Équilibre féminin",
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden bg-[#fdfbf7] text-[#2d2924]">
        <section
          id="rituels"
          className="relative isolate overflow-hidden pb-24 pt-32 md:pb-36 lg:pt-44"
        >
          <div
            className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(244,239,233,0.35)_55%,_transparent_80%)]"
            aria-hidden
          />
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#dfd7cd] bg-white/80 px-4 py-1 text-xs font-medium tracking-[0.3em] text-[#5a5a50]">
                Studio botanique
              </span>
              <h1 className="font-serif text-4xl leading-tight text-[#1f1d19] md:text-5xl lg:text-6xl">
                Les secrets épurés de la Rose de Jericho
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[#4c4a43]">
                CHAJARAT MARYAM imagine des rituels minimalistes où la Rose de Jericho reprend vie dans une mise en scène crème, lumineuse et apaisée.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#6f8a6a] px-8 py-6 text-base font-medium uppercase tracking-[0.2em] text-white hover:bg-[#627a5e]"
                >
                  <Link href="#bienfaits">Découvrir les rituels</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#dcd5c8] px-8 py-6 text-base font-medium text-[#4c4a43] hover:bg-[#f4f0e7]"
                >
                  <Link href="#origines">Voir notre histoire</Link>
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#ece7dd] bg-white/80 px-4 py-5 text-center text-sm font-medium tracking-[0.2em] text-[#5a5a50]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[2.75rem] border border-[#e8e2d7] bg-white/90 p-8 shadow-[0_30px_80px_rgba(183,183,170,0.25)]">
                <Image
                  src="/images/rose-packaging.svg"
                  alt="Packaging naturel de la Rose de Jericho"
                  width={640}
                  height={640}
                  priority
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-12 left-6 hidden w-40 rounded-[1.75rem] border border-[#ebe4da] bg-white/90 p-4 shadow-[0_12px_40px_rgba(200,200,186,0.35)] sm:block">
                <Image
                  src="/images/rose-dormant.svg"
                  alt="Rose de Jericho au repos"
                  width={220}
                  height={220}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
