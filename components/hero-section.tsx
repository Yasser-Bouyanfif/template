import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroHeader } from "@/components/hero8-header";
import { Button } from "@/components/ui/button";

const heroStats = [
  {
    value: "48h",
    label: "Renaissance complète",
  },
  {
    value: "100%",
    label: "Réutilisable",
  },
  {
    value: "+3000",
    label: "Rituels partagés",
  },
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden bg-gradient-to-b from-white via-[#f7f2ee] to-white text-[#2f2015] dark:from-[#040404] dark:via-[#0a0a0a] dark:to-[#040404] dark:text-[#f5f5f5]">
        <section
          id="rituels"
          className="relative isolate overflow-hidden pb-24 pt-32 md:pb-40 lg:pt-48"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden
          >
            <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#d6b08a]/20 blur-3xl dark:bg-[#b98c5f]/10" />
            <div className="absolute right-[12%] top-1/3 h-48 w-48 rounded-full bg-[#b98c5f]/20 blur-3xl opacity-70 dark:bg-[#b98c5f]/30" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#f1e4d6] blur-3xl dark:bg-[#1f1f1f]" />
          </div>
          <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
            <div className="relative max-w-2xl space-y-8 lg:max-w-none">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#b98c5f]/30 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#b98c5f] shadow-sm backdrop-blur-xl dark:border-[#d4a574]/30 dark:bg-[#121212]/60 dark:text-[#d4a574]">
                Renaissance botanique
              </span>
              <h1 className="font-serif text-4xl font-bold leading-tight text-[#1a1a1a] md:text-5xl lg:text-[56px] lg:leading-[1.1] dark:text-white">
                La Rose de Jéricho : le rituel qui transforme votre espace et votre bien-être
              </h1>
              <p className="text-lg leading-relaxed text-[#4b3a2b] dark:text-[#c7c7c7]">
                Éveillez la magie d&apos;une plante mythique qui renaît à chaque goutte d&apos;eau. Véritable symbole de résilience, la Rose de Jéricho s&apos;invite chez vous pour insuffler douceur, équilibre et sérénité à vos rituels du quotidien.
              </p>
              <p className="text-base leading-relaxed text-[#5b4a3a] dark:text-[#a3a3a3]">
                Son infusion délicate accompagne les moments clés de la vie : fertilité, maternité, cycles naturels, et soins détox. Réveillez-la, admirez-la, puis laissez-la sécher pour la faire renaître encore et encore.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#b98c5f] px-8 py-6 text-base font-semibold tracking-wide text-white shadow-[0_12px_40px_rgba(185,140,95,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#aa7b47] hover:shadow-[0_16px_50px_rgba(170,123,71,0.4)] dark:bg-[#d4a574] dark:text-[#1a1208] dark:hover:bg-[#c6975f]"
                >
                  <Link href="#bienfaits">Découvrir les bienfaits</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-full border border-transparent bg-white/70 px-8 py-6 text-base font-semibold text-[#b98c5f] shadow-sm backdrop-blur-xl transition-all hover:border-[#b98c5f]/40 hover:text-[#8a623c] dark:bg-[#111111]/80 dark:text-[#d4a574] dark:hover:border-[#d4a574]/50"
                >
                  <Link href="#contact">Parler à un conseiller</Link>
                </Button>
              </div>
              <div className="grid gap-6 pt-10 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-[#e7d8c9] bg-white/70 p-5 text-center shadow-sm backdrop-blur-xl dark:border-[#262626] dark:bg-[#111111]/70"
                  >
                    <p className="font-serif text-3xl font-bold text-[#8a623c] dark:text-[#d4a574]">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#7d6a58] dark:text-[#b0a89d]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative isolate mx-auto flex w-full max-w-xl justify-center lg:max-w-2xl">
              <div className="absolute -top-8 right-10 h-32 w-32 rounded-full bg-[#f2dec8]/80 blur-3xl dark:bg-[#1a1208]/80" aria-hidden />
              <div className="absolute -bottom-12 left-2 h-36 w-36 rounded-full bg-[#e8caa3]/70 blur-3xl dark:bg-[#2a1f13]/80" aria-hidden />
              <div className="relative overflow-hidden rounded-[2.4rem] border border-[#ebddcd] bg-white/80 shadow-[0_25px_80px_rgba(88,64,41,0.18)] backdrop-blur-xl dark:border-[#262626] dark:bg-[#151515]/80">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b98c5f]/15 via-transparent to-transparent" aria-hidden />
                <Image
                  src="/package.png"
                  alt="Packaging artisanal de la Rose de Jericho"
                  width={720}
                  height={720}
                  priority
                  className="relative z-[1] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
