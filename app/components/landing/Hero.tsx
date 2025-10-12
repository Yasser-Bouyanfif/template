"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsMTkxLDM2LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6 shadow-sm">
          <Sparkles className="w-4 h-4" />
          <span>Plante miraculeuse du désert</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          La Rose de Jéricho
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
            Symbole de Résurrection
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Découvrez cette plante légendaire qui revit au contact de l&apos;eau.
          Utilisée depuis des siècles pour ses propriétés spirituelles et décoratives,
          la Rose de Jéricho apporte paix et prospérité dans votre foyer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/shop" className="w-full sm:w-auto">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Découvrir nos roses</span>
            </button>
          </Link>
          <Link href="#benefits" className="w-full sm:w-auto">
            <button className="px-8 py-4 bg-white text-slate-800 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border-2 border-amber-200 hover:border-amber-400 w-full">
              En savoir plus
            </button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-sm text-slate-600">Naturelle</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24h</div>
            <div className="text-sm text-slate-600">Livraison</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">500+</div>
            <div className="text-sm text-slate-600">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">Bio</div>
            <div className="text-sm text-slate-600">Certifiée</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}