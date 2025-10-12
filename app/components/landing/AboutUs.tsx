"use client";

import React from "react";
import { Leaf, Heart, Sprout } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Qu&apos;est-ce que la Rose de Jéricho ?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Une plante millénaire aux vertus extraordinaires
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              La Rose de Jéricho, également connue sous le nom de <strong>Selaginella lepidophylla</strong>,
              est une plante du désert originaire du Mexique et d&apos;Amérique centrale. Cette merveille
              botanique possède une capacité unique : elle peut survivre sans eau pendant des années
              en se desséchant complètement, puis revivre miraculeusement au contact de l&apos;eau.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Symbole puissant de résurrection, de renouveau et de renaissance, elle est utilisée
              dans de nombreuses traditions spirituelles à travers le monde. On lui attribue des
              propriétés de purification, d&apos;attraction de la prospérité et de protection du foyer.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 flex items-center justify-center">
              <div className="text-center p-8">
                <Leaf className="w-24 h-24 text-amber-600 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Rose de Jéricho</p>
                <p className="text-sm text-slate-500">Plante de résurrection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <Sprout className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Résurrection</h3>
            <p className="text-slate-600 leading-relaxed">
              Revient à la vie en quelques heures au contact de l&apos;eau, symbolisant
              le renouveau et les nouveaux départs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Bien-être</h3>
            <p className="text-slate-600 leading-relaxed">
              Apaise l&apos;esprit, purifie l&apos;énergie de votre maison et favorise
              la paix intérieure et l&apos;harmonie.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-rose-600 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Prospérité</h3>
            <p className="text-slate-600 leading-relaxed">
              Tradition ancestrale d&apos;attraction de l&apos;abondance, de la chance
              et de la protection du foyer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
