"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Gift, ShieldCheck } from "lucide-react";

export default function ProductSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-emerald-100 blur-3xl" aria-hidden />
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-amber-100 blur-3xl" aria-hidden />
            <div className="relative rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/70 to-white p-10 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">Coffret Signature</p>
                <ShieldCheck className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="mt-4 text-3xl font-bold text-emerald-950">Rose de Jéricho Premium</h3>
              <p className="mt-3 text-base text-emerald-900/80">
                Une rose sélectionnée pour sa taille généreuse et sa capacité à s&apos;ouvrir parfaitement. Présentée dans un sachet
                en kraft recyclable accompagné d&apos;un guide illustré.
              </p>

              <div className="mt-8 grid gap-4 text-sm text-emerald-900/80">
                {["Rose de Jéricho séchée naturellement", "Bol rituel en terre cuite vernissée", "Eau de rose artisanale 30 ml", "Carte d'intention dorée à chaud"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <p>{item}</p>
                    </div>
                  ),
                )}
              </div>

              <div className="relative mt-10 h-64 w-full overflow-hidden rounded-2xl bg-emerald-900/5">
                <Image
                  src="/logo.png"
                  alt="Coffret Rose de Jéricho ChajaratMariam"
                  fill
                  className="object-contain p-12"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">Offre du moment</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-emerald-950">
              Un coffret complet pour célébrer la renaissance
            </h2>
            <p className="mt-6 text-lg text-emerald-900/80 leading-relaxed">
              Chaque coffret ChajaratMariam est préparé à la commande dans notre atelier français. Nous emballons votre rose avec
              des fibres naturelles et ajoutons un pochon de sable du désert pour stabiliser la plante pendant son rituel.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
                <Gift className="h-8 w-8 text-emerald-500" />
                <p className="mt-3 text-base font-semibold text-emerald-900">Idée cadeau chargée de sens</p>
                <p className="mt-2 text-sm text-emerald-900/70">
                  Livré avec un mot personnalisé et un ruban en coton biologique. Parfait pour une naissance, un mariage ou un nouveau départ.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
                <ShieldCheck className="h-8 w-8 text-emerald-500" />
                <p className="mt-3 text-base font-semibold text-emerald-900">Satisfaction garantie</p>
                <p className="mt-2 text-sm text-emerald-900/70">
                  Si votre rose ne s&apos;ouvre pas totalement, nous vous renvoyons une nouvelle plante sans frais supplémentaires.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="text-emerald-900">
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-500">Lancement</p>
                <p className="text-4xl font-bold">39€</p>
                <p className="text-sm text-emerald-900/70">Livraison offerte dès 2 coffrets</p>
              </div>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Ajouter au panier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
