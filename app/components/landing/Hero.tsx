"use client";

import React from "react";
import Link from "next/link";
import { Droplets, Flower2, HeartPulse, ShoppingBag, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-amber-50 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.2), transparent 55%), radial-gradient(circle at 100% 0%, rgba(248, 113, 113, 0.16), transparent 55%), radial-gradient(circle at 50% 100%, rgba(252, 211, 77, 0.18), transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>ChajaratMariam — Héritage du désert</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Les secrets thérapeutiques de la
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-amber-500 to-rose-500">
                Rose de Jéricho
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed sm:text-xl">
              Offrez à votre intérieur une plante millénaire capable de renaître à l&apos;eau. Nos roses, sélectionnées à la main,
              perpétuent la tradition de ChajaratMariam : équilibre hormonal, rituels de bien-être et énergie protectrice.
            </p>

            <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {[
                {
                  icon: <Flower2 className="h-5 w-5 text-emerald-500" aria-hidden="true" />,
                  title: "Réveillez-la en 3 heures",
                },
                {
                  icon: <HeartPulse className="h-5 w-5 text-rose-500" aria-hidden="true" />,
                  title: "Harmonie hormonale naturelle",
                },
                {
                  icon: <Droplets className="h-5 w-5 text-amber-500" aria-hidden="true" />,
                  title: "Purifie et humidifie l&apos;air",
                },
                {
                  icon: <Sparkles className="h-5 w-5 text-emerald-500" aria-hidden="true" />,
                  title: "Rituels ancestraux guidés",
                },
              ].map(({ icon, title }) => (
                <li key={title} className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">{icon}</span>
                  <span className="text-sm font-medium text-slate-700 sm:text-base">{title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/shop" className="w-full sm:w-auto">
                <button className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200/70 transition-all duration-300 hover:scale-[1.03]">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Découvrir nos coffrets</span>
                </button>
              </Link>
              <Link href="/#benefits" className="w-full sm:w-auto">
                <button className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-8 py-4 text-base font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:shadow">
                  En savoir plus
                </button>
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {["100% naturelle", "Commerce équitable", "+500 clientes comblées"].map((item) => (
                <div key={item} className="rounded-2xl border border-emerald-100 bg-white/80 px-4 py-3 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-16 -left-6 h-44 w-44 rounded-full bg-amber-200/50 blur-3xl" aria-hidden="true" />

            <div className="relative rounded-[36px] border border-white/60 bg-white/70 p-8 shadow-2xl shadow-emerald-200/50 backdrop-blur">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-600">
                Renaissance instantanée
              </div>
              <p className="text-lg font-semibold text-slate-900">
                Immergez la rose dans un bol d&apos;eau tiède. En quelques heures, ses frondes s&apos;épanouissent et diffusent une énergie régénérante dans votre intérieur.
              </p>

              <div className="mt-8 grid gap-4 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-white to-amber-500/10 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Humidité idéale</span>
                  <span className="text-base font-semibold text-emerald-600">65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Durée d&apos;ouverture</span>
                  <span className="text-base font-semibold text-amber-500">4h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Cycles de renaissance</span>
                  <span className="text-base font-semibold text-rose-500">Illimités</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-white/80 p-5">
                <div className="text-sm font-semibold uppercase tracking-wider text-emerald-500">Astuce ChajaratMariam</div>
                <p className="text-sm text-slate-600">
                  Ajoutez quelques pétales de rose ou une goutte d&apos;eau de fleur d&apos;oranger pour parfumer délicatement vos rituels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}