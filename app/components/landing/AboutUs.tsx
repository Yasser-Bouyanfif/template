"use client";

import Image from "next/image";
import { BookHeart, Compass, Flower2 } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Récolte consciente",
    description: "Nous parcourons les oasis du Moyen-Orient avec des coopératives locales pour sélectionner des roses respectées par leur environnement désertique.",
  },
  {
    icon: Flower2,
    title: "Préparation sacrée",
    description: "Chaque rose est purifiée, séchée naturellement et accompagnée d&apos;une carte d&apos;intention écrite à la main dans notre atelier français.",
  },
  {
    icon: BookHeart,
    title: "Transmission",
    description: "Un guide illustré, des playlists et des méditations audio pour prolonger l&apos;expérience au-delà du rituel initial.",
  },
];

export default function AboutUs() {
  return (
    <section id="histoire" className="bg-emerald-50/60 py-24">
      <div id="rituel" className="-mt-24 h-0" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-start lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">Notre rituel</p>
          <h2 className="mt-4 text-3xl font-semibold text-emerald-950 sm:text-4xl">
            ChajaratMariam, gardienne de la rose de Jéricho
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-emerald-900/80">
            Héritiers d&apos;un savoir-faire transmis de mère en fille, nous révélons la magie de la rose de Jéricho à travers un rituel
            simple et profondément transformateur. Nous préparons chaque coffret comme une offrande destinée à ramener calme, abondance
            et protection dans votre foyer.
          </p>
          <div className="mt-10 grid gap-6">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm shadow-emerald-200/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-base font-semibold text-emerald-950">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-900/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald-200 via-emerald-100 to-white blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[3rem] border border-emerald-100 bg-white shadow-2xl">
            <div className="grid gap-10 p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">Étapes essentielles</p>
                <h3 className="mt-3 text-2xl font-semibold text-emerald-950">Activer la mémoire ancestrale de la rose</h3>
                <p className="mt-4 text-sm leading-relaxed text-emerald-900/80">
                  Un rituel en trois temps pour réveiller la plante et installer votre intention.
                </p>
              </div>

              <ol className="grid gap-8 text-sm text-emerald-900/80">
                {["Immergez délicatement la rose dans un bol d&apos;eau pure en formulant votre intention.", "Laissez-la s&apos;ouvrir pendant 3 à 6 heures, changez l&apos;eau et placez-la dans son support en terre cuite.", "Lorsque votre intention est ancrée, laissez sécher la rose sur un linge naturel afin de recommencer plus tard."].map(
                  (step, index) => (
                    <li key={step} className="relative rounded-2xl border border-emerald-100/70 bg-emerald-50/60 p-6">
                      <span className="absolute -left-4 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-base font-semibold text-white shadow-lg shadow-emerald-200">
                        {index + 1}
                      </span>
                      <p className="pl-8 text-base font-medium text-emerald-950">{step}</p>
                    </li>
                  ),
                )}
              </ol>

              <div className="relative overflow-hidden rounded-3xl border border-emerald-100/70 bg-emerald-900/5 p-6">
                <div className="relative h-40 w-full">
                  <Image src="/images/rose-packaging.svg" alt="Coffret complet ChajaratMariam" fill className="object-contain" />
                </div>
                <p className="mt-4 text-sm text-emerald-900/70">
                  Chaque coffret inclut une carte de bénédiction, une notice illustrée et un lien vidéo guidé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
