import React from "react";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";

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
      <main className="overflow-x-hidden bg-white text-[#2f2015] dark:bg-[#050505] dark:text-[#f5f5f5]">
        <section
          id="rituels"
          className="relative isolate overflow-hidden bg-white pb-28 pt-32 md:pb-40 lg:pt-44 dark:bg-[#050505]"
        >
          <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top,_rgba(185,140,95,0.12),_transparent_70%)] dark:bg-[radial-gradient(circle_at_top,_rgba(185,140,95,0.15),_transparent_70%)]" aria-hidden />
          <div className="absolute -left-32 top-20 -z-10 size-[420px] rounded-full bg-[#f3e5d8] blur-3xl opacity-70 dark:bg-[#1a120c]" aria-hidden />
          <div className="absolute -right-40 bottom-10 -z-10 size-[520px] rounded-full bg-[#f6ede3] blur-3xl opacity-60 dark:bg-[#1a120c]" aria-hidden />

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#e5d5c2] bg-white/70 px-5 py-2 text-sm font-medium text-[#8b7355] shadow-sm backdrop-blur dark:border-[#2f2316] dark:bg-[#0a0a0a]/60 dark:text-[#d4a574]">
                <span className="size-2 rounded-full bg-[#c99a69]" />
                Rituel saharien authentique
              </div>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-[#1a1a1a] md:text-5xl lg:text-[3.3rem] dark:text-white">
                La Rose de Jéricho, un miracle botanique à faire renaître chez vous
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5a4c3c] dark:text-[#bfb6ac]">
                Découvrez la Rose de Jéricho, un trésor venu des étendues arides du Sahara et du Moyen-Orient. Surnommée
                affectueusement <strong>&quot;Chajarat Maryam&quot;</strong> (l&apos;Arbre de Marie) ou <strong>&quot;Plante de la Résurrection&quot;</strong>,
                elle symbolise la résilience, la renaissance et accompagne depuis des générations les rituels de bien-être.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6d5a47] dark:text-[#a59b90]">
                Plongez-la dans l&apos;eau et observez-la s&apos;ouvrir majestueusement, libérant une infusion aux multiples vertus.
                Séchez-la ensuite pour la voir se refermer, prête à renaître encore et encore.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#eadfd3] bg-white/80 p-5 shadow-sm backdrop-blur dark:border-[#2f2316] dark:bg-[#0f0f0f]/80">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c99a69] dark:text-[#d4a574]">Origine</p>
                  <p className="mt-2 font-serif text-2xl font-semibold text-[#1a1a1a] dark:text-white">Sahara</p>
                </div>
                <div className="rounded-2xl border border-[#eadfd3] bg-white/80 p-5 shadow-sm backdrop-blur dark:border-[#2f2316] dark:bg-[#0f0f0f]/80">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c99a69] dark:text-[#d4a574]">Réutilisable</p>
                  <p className="mt-2 font-serif text-2xl font-semibold text-[#1a1a1a] dark:text-white">À l&apos;infini</p>
                </div>
                <div className="rounded-2xl border border-[#eadfd3] bg-white/80 p-5 shadow-sm backdrop-blur dark:border-[#2f2316] dark:bg-[#0f0f0f]/80 sm:col-span-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c99a69] dark:text-[#d4a574]">Bienfaits</p>
                  <p className="mt-2 font-serif text-2xl font-semibold text-[#1a1a1a] dark:text-white">Multiples</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {sliderHighlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[#eadfd3] bg-white/60 px-4 py-2 text-sm text-[#8b7355] shadow-sm backdrop-blur dark:border-[#2f2316] dark:bg-[#0f0f0f]/70 dark:text-[#d4a574]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-6 xl:col-span-7">
              <div className="absolute -left-12 top-10 size-24 rounded-full bg-[#c99a69]/20 blur-2xl" aria-hidden />
              <div className="absolute -right-16 -bottom-12 size-40 rounded-full bg-[#b98c5f]/20 blur-3xl" aria-hidden />
              <div className="relative mx-auto w-full max-w-xl rounded-[2.5rem] border border-[#eadfd3] bg-gradient-to-br from-white via-[#fff8f1] to-[#f4e8db] p-6 shadow-[0_25px_90px_rgba(69,48,26,0.18)] dark:border-[#2f2316] dark:from-[#121212] dark:via-[#0e0e0e] dark:to-[#050505] dark:shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                <div className="relative overflow-hidden rounded-[2rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#b98c5f]/10" aria-hidden />
                  <Image
                    src="/package.png"
                    alt="Packaging artisanal de la Rose de Jericho"
                    width={720}
                    height={720}
                    priority
                    className="w-full object-cover"
                  />
                </div>
                <div className="mt-6 grid gap-3 rounded-2xl border border-[#eadfd3] bg-white/70 p-5 text-sm text-[#5a4c3c] shadow-sm backdrop-blur dark:border-[#2f2316] dark:bg-[#0f0f0f]/70 dark:text-[#c8bfb5]">
                  <p className="font-semibold uppercase tracking-[0.35em] text-[#c99a69] dark:text-[#d4a574]">Comment l&apos;activer ?</p>
                  <p>
                    Réhydratez la plante 3 à 4 heures dans une eau à température ambiante, récoltez l&apos;infusion, puis laissez-la
                    sécher pour recommencer le rituel quand vous le souhaitez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
