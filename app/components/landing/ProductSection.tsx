"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Gift, ShieldCheck } from "lucide-react";

const inclusions = [
  "Rose de Jéricho premium séchée naturellement",
  "Bol rituel en terre cuite fabriqué à la main",
  "Eau de rose artisanale 30 ml",
  "Carte d&apos;intention dorée à chaud",
];

export default function ProductSection() {
  return (
    <section className="bg-emerald-950 py-28 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="relative flex-1">
          <div className="absolute -left-12 top-10 h-44 w-44 rounded-full bg-emerald-400/40 blur-3xl" aria-hidden />
          <div className="absolute -right-10 bottom-6 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl" aria-hidden />

          <div className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-white/10 p-10 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              <span>Coffret signature</span>
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mt-6 text-3xl font-semibold">Rose de Jéricho Premium</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Récoltée à la main, purifiée par nos soins et accompagnée d&apos;accessoires conçus pour un rituel complet à la maison.
            </p>

            <div className="relative mt-10 h-[320px] w-full">
              <Image src="/images/rose-packaging.svg" alt="Coffret ChajaratMariam" fill className="object-contain" />
            </div>

            <ul className="mt-10 grid gap-4 text-sm text-white/80">
              {inclusions.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">Offre du moment</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Un coffret complet pour célébrer la renaissance</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Chaque commande est préparée à la demande dans notre atelier. Nous emballons la rose dans des fibres naturelles, ajoutons un
            sachet de sable du désert pour stabiliser la plante et une lettre manuscrite pour accompagner votre intention.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <Gift className="h-7 w-7 text-emerald-200" />
              <p className="mt-3 text-base font-semibold">Un cadeau chargé de sens</p>
              <p className="mt-2 text-sm text-white/70">Ruban en coton biologique et carte personnalisée pour célébrer un nouveau départ.</p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <ShieldCheck className="h-7 w-7 text-emerald-200" />
              <p className="mt-3 text-base font-semibold">Satisfaction garantie</p>
              <p className="mt-2 text-sm text-white/70">Une nouvelle rose envoyée si l&apos;ouverture n&apos;est pas parfaite.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">Prix lancement</p>
              <p className="text-4xl font-semibold">39€</p>
              <p className="text-sm text-white/70">Livraison offerte dès 2 coffrets</p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold text-emerald-900 shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Ajouter au panier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
