"use client";

import { Flame, Leaf, Sprout } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Origine saharienne",
    description:
      "Nos roses sont récoltées de manière responsable auprès de cueilleurs partenaires entre le Sahara et la Méditerranée.",
  },
  {
    icon: Flame,
    title: "Rituel sacré",
    description:
      "Chaque plante est purifiée, énergisée et accompagnée d'une intention pour amplifier votre expérience spirituelle.",
  },
  {
    icon: Sprout,
    title: "Renouveau durable",
    description:
      "Réutilisable à l'infini : laissez-la sécher, rangez-la puis offrez-lui de l'eau pour qu'elle renaisse à nouveau.",
  },
];

const promise = [
  { title: "Respect des traditions", detail: "Inspirée des savoirs des femmes bédouines." },
  { title: "Qualité premium", detail: "Sélection manuelle et tri en atelier." },
  { title: "Bienfaits holistiques", detail: "Énergie, beauté et connexion à soi." },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-amber-50/60 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Notre histoire
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            La Rose de Jéricho selon ChajaratMariam
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Héritée d&apos;une tradition familiale nord-africaine, ChajaratMariam perpétue un savoir-faire
            ancestral pour révéler la puissance régénératrice de la Rose de Jéricho dans votre quotidien.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8 text-lg leading-relaxed text-slate-700">
            <p>
              Au désert, on l&apos;appelle « la plante de la résurrection ». En apparence sèche, elle se réveille à la
              moindre goutte d&apos;eau. Nous sélectionnons chaque spécimen, le nettoyons délicatement puis le laissons
              se régénérer afin de garantir un épanouissement spectaculaire chez vous.
            </p>
            <p>
              Chez ChajaratMariam, nous croyons au pouvoir de ralentir. Le rituel de la Rose de Jéricho vous invite
              à un moment suspendu : observer, respirer, ressentir. Elle accompagne vos prières, vos méditations ou
              tout simplement vos espaces de vie.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {promise.map((item) => (
                <div key={item.title} className="rounded-2xl border border-amber-100 bg-white p-5 text-center shadow-sm">
                  <p className="text-base font-semibold text-amber-700">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-6 h-44 w-44 rounded-full bg-rose-200/40 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-6 bottom-0 h-52 w-52 rounded-full bg-amber-200/40 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[32px] border border-amber-100 bg-gradient-to-br from-white via-amber-50/80 to-white p-8 shadow-xl shadow-amber-100/60">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-500">Essence sacrée</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                Votre rose, prête pour un rituel d&apos;exception
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Livrée avec fiche conseils, intentions et accès à notre guide de renaissance détaillé.
              </p>

              <div className="mt-6 space-y-5">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 shadow-sm shadow-amber-100/50">
                    <span className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-rose-500 text-white">
                      <pillar.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-slate-900">{pillar.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-amber-200/60 bg-amber-50/60 p-6 text-sm text-amber-800">
                <p className="font-semibold">&quot;Chaque rose raconte une histoire de renaissance. Prenez le temps de l&apos;écouter.&quot;</p>
                <p className="mt-2 text-xs uppercase tracking-[0.4em] text-amber-500">Équipe ChajaratMariam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
