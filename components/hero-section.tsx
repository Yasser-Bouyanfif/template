import React from "react";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
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
      <main className="overflow-x-hidden bg-white text-[#2f2015] dark:bg-[#0a0a0a] dark:text-[#f5f5f5]">
        <section
          id="rituels"
          className="relative isolate overflow-hidden bg-white pb-24 pt-32 md:pb-40 lg:pt-48 dark:bg-[#0a0a0a]"
        >
          <div className="absolute inset-x-0 top-16 -z-10 h-[480px] bg-[radial-gradient(circle_at_top,_rgba(185,140,95,0.08),_transparent_65%)]" aria-hidden />
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div className="relative max-w-xl space-y-6 lg:max-w-none">
              <h1 className="font-serif text-4xl font-bold leading-[1.15] text-[#1a1a1a] md:text-5xl lg:text-6xl dark:text-white">
                La Rose de Jéricho du Sahara : Le Miracle de la Résurrection à portée de main
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[#525252] dark:text-[#a3a3a3]">
                Découvrez la Rose de Jéricho, un trésor botanique venu des étendues arides du Sahara et du Moyen-Orient. 
                Surnommée affectueusement <strong>&quot;Chajarat Maryam&quot;</strong> (l&apos;Arbre de Marie) ou <strong>&quot;Plante de la Résurrection&quot;</strong>, 
                elle est bien plus qu&apos;une simple plante : c&apos;est un véritable symbole de résilience, de renouveau et un précieux allié de la médecine traditionnelle depuis des siècles.
              </p>
              <p className="max-w-xl text-base leading-relaxed text-[#525252] dark:text-[#a3a3a3]">
                À première vue, elle se présente comme une boule de brindilles sèches, apparemment sans vie. Mais c&apos;est là que sa magie opère : 
                plongez-la dans l&apos;eau, et en quelques heures, elle se déploie spectaculairement, reprenant sa forme et son vert. 
                Une fois réhydratée, vous pouvez récupérer son eau d&apos;infusion pour bénéficier de ses multiples vertus. 
                Retirez-la ensuite pour la faire sécher, et elle se recroquevillera, prête à renaître à nouveau !
              </p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#b98c5f]/30 to-transparent dark:via-[#b98c5f]/20" />
            </div>
            <div className="relative isolate mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#e5e5e5] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] dark:border-[#262626] dark:bg-[#171717]">
                <Image
                  src="/package.png"
                  alt="Packaging artisanal de la Rose de Jericho"
                  width={640}
                  height={640}
                  priority
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
