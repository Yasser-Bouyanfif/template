"use client";

import React from "react";
import { Droplets, Flower2, Heart, Leaf, Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ChajaratMariam, la renaissance du désert
          </h2>
          <p className="text-lg text-slate-600">
            Notre maison célèbre la Rose de Jéricho et ses traditions sacrées transmises de génération en génération.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] mb-16">
          <div className="space-y-6 text-left">
            <p className="text-lg leading-relaxed text-slate-700">
              Connue sous le nom de <strong>Chajarat Mariam</strong> au Moyen-Orient, la Rose de Jéricho accompagne depuis des siècles les rituels de guérison féminine et les moments clés de la vie. Nous sélectionnons nos plantes auprès de familles nomades, en respectant le rythme des récoltes dans les plaines désertiques.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Chaque rose est soigneusement triée, nettoyée et accompagnée de conseils d&apos;activation pour révéler tout son potentiel : harmoniser le cycle menstruel, soutenir la fertilité, purifier vos espaces et attirer la prospérité dans le foyer.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {["Récolte raisonnée", "Sélection premium", "Guide illustré offert", "Livraison suivie 24h"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-sm font-medium text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-emerald-100 via-amber-100 to-rose-100 blur-2xl opacity-70" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[28px] border border-emerald-100 bg-white shadow-xl">
              <div className="flex flex-col gap-6 p-8">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-600">
                  Rituel d&apos;activation
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-emerald-500/10 via-white to-amber-400/20 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">3 étapes simples</h3>
                  <ol className="mt-4 space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">1</span>
                      <span>Placer la rose sur un lit de galets et verser de l&apos;eau à température ambiante jusqu&apos;à recouvrir les racines.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">2</span>
                      <span>Observer son déploiement pendant 3 à 4 heures, tout en formulant vos intentions ou prières.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">3</span>
                      <span>Changer l&apos;eau tous les deux jours et laisser sécher complètement après chaque rituel.</span>
                    </li>
                  </ol>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white/80 p-5">
                  <Leaf className="h-10 w-10 text-emerald-500" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-emerald-500">Signature ChajaratMariam</p>
                    <p className="text-sm text-slate-600">Chaque commande inclut notre infusion aux plantes du désert pour sublimer votre cérémonie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[{
            title: "Résurrection infinie",
            description: "Revient à la vie en quelques heures au contact de l'eau et peut être réutilisée indéfiniment.",
            icon: <Flower2 className="h-7 w-7 text-white" />,
            color: "from-emerald-500 to-emerald-600",
          },
          {
            title: "Alliée féminine",
            description: "Soulage naturellement les douleurs menstruelles et accompagne les rituels de fertilité.",
            icon: <Heart className="h-7 w-7 text-white" />,
            color: "from-rose-500 to-rose-600",
          },
          {
            title: "Purification & abondance",
            description: "Diffuse une énergie protectrice, idéale pour bénir un nouveau foyer ou un commerce.",
            icon: <Droplets className="h-7 w-7 text-white" />,
            color: "from-amber-500 to-amber-600",
          }].map(({ title, description, icon, color }) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color}`}>
                {icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
