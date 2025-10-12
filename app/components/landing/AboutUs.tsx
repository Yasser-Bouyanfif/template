"use client";

import { BookHeart, Flower2, Sprout } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="histoire" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">Notre histoire</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-emerald-950">
              ChajaratMariam, gardienne du rituel de la rose de Jéricho
            </h2>
            <p className="mt-6 text-lg text-emerald-900/80 leading-relaxed">
              Inspirés par les femmes du désert qui transmettent ce rituel depuis des générations, nous parcourons les
              oasis du Moyen-Orient et d&apos;Afrique du Nord pour sélectionner des roses de Jéricho <strong>récoltées à la main</strong>.
              Chaque plante est séchée naturellement puis préparée dans notre atelier pour réveiller sa force vitale chez vous.
            </p>
            <p className="mt-4 text-lg text-emerald-900/70 leading-relaxed">
              Nos coffrets sont accompagnés d&apos;un guide imprimé, d&apos;une carte de bénédiction et d&apos;un accessoire en terre cuite pour
              sublimer l&apos;ouverture de la rose. Un rituel d&apos;ancrage et d&apos;abondance, accessible à tous.
            </p>

            <dl className="mt-8 grid sm:grid-cols-3 gap-6 text-sm text-emerald-900/70">
              <div className="rounded-2xl bg-emerald-50/70 px-4 py-5">
                <Flower2 className="h-6 w-6 text-emerald-500" />
                <dt className="mt-3 font-semibold text-emerald-900">Récolte éthique</dt>
                <dd className="mt-1 leading-relaxed">
                  Collaboration avec des coopératives locales respectant l&apos;écosystème désertique.
                </dd>
              </div>
              <div className="rounded-2xl bg-emerald-50/70 px-4 py-5">
                <Sprout className="h-6 w-6 text-emerald-500" />
                <dt className="mt-3 font-semibold text-emerald-900">Revivre à l&apos;infini</dt>
                <dd className="mt-1 leading-relaxed">
                  Réutilisable toute la vie : laissez-la sécher et recommencez votre rituel quand vous le souhaitez.
                </dd>
              </div>
              <div className="rounded-2xl bg-emerald-50/70 px-4 py-5">
                <BookHeart className="h-6 w-6 text-emerald-500" />
                <dt className="mt-3 font-semibold text-emerald-900">Accompagnement</dt>
                <dd className="mt-1 leading-relaxed">
                  Guide de rituels, playlist méditative et conseils bien-être inclus dans chaque commande.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative h-full">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-100 via-amber-100 to-white blur-xl" aria-hidden />
            <div className="relative h-full rounded-3xl border border-emerald-100 bg-white shadow-xl p-10">
              <div className="grid gap-6">
                <div>
                  <p className="text-sm font-medium uppercase text-emerald-500">Le rituel</p>
                  <p className="mt-2 text-base text-emerald-900/80">
                    Déposez votre rose dans un bol, versez de l&apos;eau pure, ajoutez quelques gouttes d&apos;eau de rose et prononcez votre intention.
                  </p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-lime-500 p-6 text-white shadow-lg">
                  <p className="text-sm uppercase tracking-[0.25em]">Mantra</p>
                  <p className="mt-3 text-lg font-semibold">
                    « Je m&apos;ouvre à la renaissance, j&apos;accueille la paix et l&apos;abondance. »
                  </p>
                </div>
                <div className="grid gap-4 text-sm text-emerald-900/80">
                  <div className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
                    <p>Transformation visible en 3 heures, pleine ouverture en 24 heures.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
                    <p>Changements d&apos;eau conseillés tous les 2 jours pour préserver la fraîcheur de la plante.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
                    <p>Inclut un QR code vers notre vidéo étape par étape.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
