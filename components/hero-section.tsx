import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const sliderKeywords = [
  "Hydratation profonde",
  "Rituels ancestraux",
  "Zéro additif",
  "Réveil en 3 étapes",
  "Infusion sacrée",
  "Bien-être holistique",
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section
          id="boutique"
          className="relative bg-[radial-gradient(circle_at_top,#f6efe5,transparent_60%)]"
        >
          <div className="pb-24 pt-16 md:pb-32 lg:pb-52 lg:pt-36">
            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 lg:flex-row lg:items-end lg:gap-16">
              <div className="max-w-xl text-center lg:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                  Maison botanique
                </p>
                <h1 className="mt-6 text-balance text-5xl font-semibold leading-tight text-foreground md:text-6xl lg:text-7xl">
                  Réveillez la Rose de Jéricho avec CHAJARATMARIAM
                </h1>
                <p className="mt-8 text-pretty text-lg leading-relaxed text-foreground/80">
                  Une collection épurée dédiée à la plante miraculeuse qui renaît au contact de l’eau. Laissez-vous guider par un rituel doux, minimaliste et profondément hydratant pour la peau et l’esprit.
                </p>
                <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
                  <Button asChild size="lg" className="px-6 text-base">
                    <Link href="#boutique">
                      <span>Découvrir la collection</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-6 text-base text-foreground hover:bg-[color:var(--beige-soft)]/60"
                  >
                    <Link href="#rituals">
                      <span>Voir le rituel</span>
                    </Link>
                  </Button>
                </div>
                <dl className="mt-12 grid grid-cols-2 gap-6 text-left text-sm text-foreground/70 sm:grid-cols-3">
                  <div>
                    <dt className="font-semibold text-foreground">Plantes sélectionnées</dt>
                    <dd>Culture artisanale au Maroc, récolte manuelle saisonnière.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Packaging eco-raisonné</dt>
                    <dd>Sachet recyclable et encres végétales ton sur ton.</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="font-semibold text-foreground">Rituel guidé</dt>
                    <dd>Guide imprimé et audio en accès instantané.</dd>
                  </div>
                </dl>
              </div>
              <div className="relative flex w-full max-w-lg shrink-0 justify-center lg:justify-end">
                <div className="relative flex w-full max-w-md flex-col items-center">
                  <div className="bg-[color:var(--beige-soft)]/80 border border-[color:var(--beige-muted)] shadow-[0_40px_90px_rgba(130,105,75,0.18)]" role="presentation">
                    <Image
                      src="/images/rose-pouch.svg"
                      alt="Sachet de Rose de Jéricho Chajaratmariam"
                      width={640}
                      height={640}
                      className="h-auto w-full rounded-[32px]"
                      priority
                    />
                  </div>
                  <div className="-mt-16 w-3/4 max-w-xs rounded-[28px] border border-[color:var(--beige-muted)] bg-background p-6 shadow-[0_20px_50px_rgba(143,115,84,0.18)]">
                    <div className="flex items-start gap-3">
                      <div className="relative size-12 rounded-full bg-[color:var(--clay)]/10">
                        <Image
                          src="/images/rose-dormant.svg"
                          alt="Rose de Jéricho en dormance"
                          width={96}
                          height={96}
                          className="absolute inset-0 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Renaissance en 3 heures</p>
                        <p className="mt-1 text-xs text-foreground/70">
                          Placez la rose dans une coupelle d’eau tiède, changez l’eau après 30 minutes et laissez-la s’épanouir doucement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 pt-10 md:pb-32">
          <div className="group relative mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                  Mots clés du rituel
                </p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={30} gap={72}>
                  {sliderKeywords.map((keyword) => (
                    <div
                      className="flex min-w-[12rem] items-center justify-center rounded-full border border-[color:var(--beige-muted)] bg-[color:var(--beige-soft)] px-6 py-3 text-sm font-medium text-foreground/80 shadow-sm"
                      key={keyword}
                    >
                      {keyword}
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-12"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-12"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-16"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-16"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
