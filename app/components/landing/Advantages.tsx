"use client";

import { Droplets, HeartPulse, Lotus, Sparkles } from "lucide-react";

export default function Advantages() {
  return (
    <section id="bienfaits" className="py-24 bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">Bienfaits naturels</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-emerald-950">
            Une alliée précieuse pour l&apos;équilibre du corps et de l&apos;esprit
          </h2>
          <p className="mt-4 text-lg text-emerald-900/80">
            Les roses de Jéricho ChajaratMariam sont choyées pour préserver leurs actifs. Utilisées en infusion, en rituel
            énergétique ou simplement comme objet sacré, elles offrent un soutien holistique au quotidien.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-lg backdrop-blur">
            <div className="flex items-center gap-4">
              <Sparkles className="h-12 w-12 text-emerald-500" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-900">Régulation hormonale</h3>
                <p className="mt-1 text-sm text-emerald-900/70">Un soutien doux pour retrouver un rythme naturel.</p>
              </div>
            </div>
            <p className="mt-6 text-base text-emerald-900/80 leading-relaxed">
              Aide à équilibrer les cycles féminins et à apaiser les inconforts menstruels. Les infusions de rose de Jéricho
              sont traditionnellement utilisées pour revitaliser le corps après la grossesse ou lors de périodes de fatigue.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-lg backdrop-blur">
            <div className="flex items-center gap-4">
              <HeartPulse className="h-12 w-12 text-emerald-500" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-900">Renforcement de la fertilité</h3>
                <p className="mt-1 text-sm text-emerald-900/70">Ancrage, douceur et ouverture à la création.</p>
              </div>
            </div>
            <p className="mt-6 text-base text-emerald-900/80 leading-relaxed">
              Notre rose de Jéricho accompagne les femmes et les couples dans leurs démarches de conception. Son rituel invite
              à l&apos;apaisement du système nerveux et à la confiance, éléments essentiels pour accueillir la vie.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-lg backdrop-blur">
            <div className="flex items-center gap-4">
              <Droplets className="h-12 w-12 text-emerald-500" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-900">Purification énergétique</h3>
                <p className="mt-1 text-sm text-emerald-900/70">Une eau chargée de lumière pour la maison et le corps.</p>
              </div>
            </div>
            <p className="mt-6 text-base text-emerald-900/80 leading-relaxed">
              L&apos;eau de renaissance libérée par la rose est utilisée pour nettoyer les espaces, bénir un nouveau départ ou
              accompagner un rituel spirituel. Elle peut également être pulvérisée sur le visage pour un effet tonifiant.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-lg backdrop-blur">
            <div className="flex items-center gap-4">
              <Lotus className="h-12 w-12 text-emerald-500" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-900">Harmonie intérieure</h3>
                <p className="mt-1 text-sm text-emerald-900/70">Un compagnon sacré pour vos pratiques méditatives.</p>
              </div>
            </div>
            <p className="mt-6 text-base text-emerald-900/80 leading-relaxed">
              Placez votre rose dans votre espace sacré pour renforcer vos affirmations, vos prières ou vos séances de yoga.
              Elle symbolise la résilience et rappelle que chaque fermeture prépare une renaissance.
            </p>
          </div>
        </div>

        <div id="rituel" className="mt-20 rounded-[32px] bg-gradient-to-br from-emerald-700 via-emerald-600 to-lime-500 p-[1px]">
          <div className="rounded-[30px] bg-white/95 px-6 py-12 sm:px-12">
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">Rituel guidé</p>
                <h3 className="mt-4 text-3xl font-bold text-emerald-950">Quatre étapes pour réveiller votre rose</h3>
                <p className="mt-4 text-base text-emerald-900/80">
                  Recevez un kit complet et suivez ces étapes simples pour assister à la métamorphose de votre rose de Jéricho.
                  Chaque coffret inclut un QR code vers notre vidéo immersive.
                </p>
              </div>
              <div className="grid gap-6">
                {["Purifiez votre bol et placez-y la rose en spirale.", "Versez de l'eau tiède jusqu'à recouvrir la base.", "Déposez votre intention et laissez la rose s'ouvrir.", "Changez l'eau tous les deux jours, puis laissez sécher pour recommencer."].map(
                  (step, index) => (
                    <div
                      key={step}
                      className="flex gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-5 text-emerald-900/80"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-semibold text-emerald-600 shadow">
                        {index + 1}
                      </span>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
