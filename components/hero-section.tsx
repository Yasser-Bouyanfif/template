import React from "react";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden bg-white text-[#2f2015] dark:bg-[#050505] dark:text-[#f5f5f5]">
        <section
          id="rituels"
          className="relative isolate overflow-hidden bg-gradient-to-b from-[#fff9f2] via-white to-white pb-24 pt-28 md:pb-40 md:pt-36 lg:pt-44 dark:from-[#050505] dark:via-[#090909] dark:to-[#0d0d0d]"
        >
          <div
            className="absolute inset-x-0 top-12 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(185,140,95,0.12),_transparent_70%)]"
            aria-hidden
          />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
            <div className="relative mx-auto w-full max-w-2xl space-y-8 lg:mx-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f0e2d4] bg-white/70 px-4 py-1 text-sm font-medium uppercase tracking-[0.18em] text-[#b98c5f] shadow-sm backdrop-blur dark:border-[#1f1f1f] dark:bg-[#0f0f0f]/60">
                Une tradition ancestrale, un rituel moderne
              </span>
              <h1 className="font-serif text-[clamp(2.5rem,3.6vw+1rem,4.5rem)] font-semibold leading-tight text-[#1b1109] dark:text-white">
                La Rose de Jéricho : réveillez la magie d&apos;une plante éternelle
              </h1>
              <p className="text-lg leading-relaxed text-[#564433] dark:text-[#b8b8b8]">
                Découvrez la Rose de Jéricho, un trésor botanique venu des étendues arides du Sahara et du Moyen-Orient.
                Surnommée <strong>&quot;Chajarat Maryam&quot;</strong> – l&apos;Arbre de Marie – elle symbolise la résilience, la protection et la renaissance, de génération en génération.
              </p>
              <p className="text-base leading-relaxed text-[#6d5a48] dark:text-[#9f9f9f]">
                Plongez cette fleur séchée dans l&apos;eau : en quelques heures, elle se déploie et libère une infusion chargée de bienfaits.
                Faites-la sécher, elle se replie, prête pour un nouveau cycle. Un rituel simple, presque mystique, qui fascine et apaise.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#bienfaits"
                  className="group inline-flex items-center justify-center rounded-full bg-[#b98c5f] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-[#b98c5f]/30 transition-all hover:translate-y-0.5 hover:bg-[#a97a4b] dark:bg-[#c49b68] dark:hover:bg-[#b2824a]"
                >
                  Explorer ses bienfaits
                </a>
                <a
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-full border border-[#d4b48e] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[#6d4f35] backdrop-blur transition-colors hover:border-[#b98c5f] hover:text-[#b98c5f] dark:border-[#272727] dark:text-[#d4a574] dark:hover:border-[#c49b68] dark:hover:text-[#f6dec2]"
                >
                  Découvrir la boutique
                </a>
              </div>
              <div className="grid gap-6 pt-4 sm:grid-cols-3">
                {["Réutilisable à l&apos;infini", "Infusion bienfaisante", "Origine saharienne"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#f0e2d4] bg-white/70 px-4 py-3 text-sm font-medium text-[#6d4f35] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#d4b48e] dark:border-[#1f1f1f] dark:bg-[#101010]/70 dark:text-[#e1c59f]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-12 top-10 hidden size-40 rounded-full bg-[#e8d2ba] blur-3xl lg:block dark:bg-[#c49b68]/20" />
              <div className="absolute -right-20 bottom-6 hidden h-48 w-48 rounded-full bg-[#f4e5d3] blur-3xl lg:block dark:bg-[#c49b68]/10" />
              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/60 bg-gradient-to-br from-white via-[#fff7ed] to-[#f8e8d1] shadow-[0_35px_80px_rgba(185,140,95,0.25)] ring-1 ring-[#f0e2d4] dark:border-[#1a1a1a] dark:from-[#1a1209] dark:via-[#17100b] dark:to-[#100a07] dark:ring-[#2a1e14]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent mix-blend-screen" />
                <Image
                  src="/package.png"
                  alt="Packaging artisanal de la Rose de Jericho"
                  width={700}
                  height={840}
                  priority
                  className="w-full scale-105 object-cover"
                />
              </div>
              <div className="mx-auto -mt-6 flex max-w-md items-center gap-4 rounded-full border border-[#f0e2d4] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#9f7243] shadow-lg backdrop-blur dark:border-[#1f1f1f] dark:bg-[#0f0f0f]/80 dark:text-[#d4a574]">
                Livraison suivie • Rituel garanti authentique
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
