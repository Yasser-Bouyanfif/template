"use client";

import Link from "next/link";
import Image from "next/image";
import { Droplets, Leaf, ShoppingBag, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-amber-50 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_55%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Secrets millénaires du désert
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-emerald-950">
              Réveillez la magie de la
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-lime-600 to-amber-600">
                Rose de Jéricho
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-emerald-900/80 leading-relaxed max-w-xl">
              Chez <strong>ChajaratMariam</strong>, nous sélectionnons les plus belles roses de Jéricho pour leurs vertus
              spirituelles et bien-être. Un rituel simple pour purifier l&apos;énergie de votre foyer et attirer l&apos;harmonie.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="w-full sm:w-auto">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700">
                  <ShoppingBag className="h-5 w-5" />
                  Commander ma rose
                </span>
              </Link>
              <Link href="#bienfaits" className="w-full sm:w-auto">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-8 py-4 text-base font-semibold text-emerald-800 transition-colors duration-300 hover:border-emerald-400 hover:text-emerald-900">
                  En savoir plus
                </span>
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-x-12">
              <div>
                <dt className="text-sm text-emerald-900/70">Rituels accomplis</dt>
                <dd className="text-3xl font-semibold text-emerald-900">10K+</dd>
              </div>
              <div>
                <dt className="text-sm text-emerald-900/70">Plante 100% naturelle</dt>
                <dd className="text-3xl font-semibold text-emerald-900">Certifiée</dd>
              </div>
              <div>
                <dt className="text-sm text-emerald-900/70">Récolte éthique</dt>
                <dd className="text-3xl font-semibold text-emerald-900">Manuelle</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" aria-hidden />
            <div className="absolute -bottom-10 -left-6 h-44 w-44 rounded-full bg-amber-100 blur-3xl" aria-hidden />
            <div className="relative rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-xl backdrop-blur">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-500">Signature</p>
                  <h2 className="mt-2 text-2xl font-semibold text-emerald-950">Rose de Jéricho Premium</h2>
                </div>
                <Leaf className="h-10 w-10 text-emerald-500" aria-hidden />
              </div>
              <div className="mt-6 relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 via-amber-100 to-white">
                <Image
                  src="/logo.png"
                  alt="Illustration de la rose de Jéricho ChajaratMariam"
                  fill
                  className="object-contain p-10"
                  priority
                />
              </div>
              <ul className="mt-8 space-y-4 text-sm text-emerald-900/80">
                <li className="flex items-center gap-3">
                  <Droplets className="h-5 w-5 text-emerald-500" />
                  Réveil spectaculaire en quelques minutes au contact de l&apos;eau
                </li>
                <li className="flex items-center gap-3">
                  <Leaf className="h-5 w-5 text-emerald-500" />
                  Purifie l&apos;atmosphère et harmonise vos espaces de vie
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-emerald-500" />
                  Rituel ancestral transmis de génération en génération
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}