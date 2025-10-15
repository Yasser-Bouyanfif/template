import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/hero8-header";

const highlights = [
  {
    title: "Rituel d&apos;ouverture",
    description: "Une infusion lente pour réveiller la Rose de Jericho sans précipitation.",
  },
  {
    title: "Intérieurs apaisés",
    description: "Des gestes minimalistes, des matières écrémées et une scénographie lumineuse.",
  },
  {
    title: "Soin féminin",
    description: "Un symbole d&apos;équilibre hormonal et de protection transmis de génération en génération.",
  },
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden bg-[#fefcf8] text-[#1f140d]">
        <section id="rituels" className="relative isolate pb-24 pt-32 sm:pt-40">
          <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_70%)]" aria-hidden />
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#86725f] ring-1 ring-[#e7ded0]">
                Rose de Jericho
              </span>
              <h1 className="font-serif text-4xl leading-tight text-[#1f140d] md:text-5xl lg:text-6xl">
                Les secrets thérapeutiques d&apos;une plante éternelle
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[#5f4d3c]">
                À travers CHAJARATMARIAM, nous réinventons le rituel ancestral de la Rose de Jericho dans un univers lumineux, neutre et profondément féminin.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-12 rounded-full bg-[#2f2418] px-8 text-sm font-medium uppercase tracking-[0.2em] text-white hover:bg-[#443423]">
                  <Link href="#origines">Découvrir la collection</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="h-12 rounded-full px-8 text-sm font-medium uppercase tracking-[0.2em] text-[#5f4d3c] hover:text-[#1f140d]">
                  <Link href="#contact">Nous écrire</Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-[#efe6d9] bg-white/70 p-5 shadow-[0_15px_40px_rgba(112,90,70,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c7763]">{item.title}</p>
                    <p className="mt-3 text-sm text-[#5f4d3c]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative isolate mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[2.75rem] border border-[#f0e6d9] bg-white p-10 shadow-[0_35px_80px_rgba(81,60,40,0.12)]">
                <Image
                  src="/images/rose-packaging.svg"
                  alt="Coffret de Rose de Jericho"
                  width={620}
                  height={620}
                  priority
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-12 right-0 hidden w-40 rounded-3xl border border-[#f0e6d9] bg-white p-4 shadow-[0_20px_50px_rgba(81,60,40,0.12)] sm:block">
                <Image src="/images/rose-awakened.svg" alt="Rose de Jericho ouverte" width={220} height={220} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
