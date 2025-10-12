"use client";

import { Droplets, Package, Award, Clock } from "lucide-react";

export default function Advantages() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Pourquoi choisir notre Rose de Jéricho ?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Qualité premium et service exceptionnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-amber-200 group-hover:to-orange-200 transition-all shadow-md">
              <Droplets className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              100% Naturelle
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Plantes authentiques récoltées et préservées naturellement, sans produits chimiques.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-200 group-hover:to-rose-200 transition-all shadow-md">
              <Package className="w-10 h-10 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Emballage Soigné
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Chaque rose est emballée avec soin pour garantir son arrivée en parfait état.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-rose-200 group-hover:to-amber-200 transition-all shadow-md">
              <Award className="w-10 h-10 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Qualité Certifiée
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Sélection rigoureuse et contrôle qualité pour vous garantir les meilleures roses.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-amber-200 group-hover:to-orange-200 transition-all shadow-md">
              <Clock className="w-10 h-10 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Livraison Rapide
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Expédition sous 24h pour que vous receviez votre rose dans les meilleurs délais.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Comment utiliser votre Rose de Jéricho ?
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Placez</strong> la rose dans un récipient peu profond avec de l&apos;eau à température ambiante.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Observez</strong> la magie opérer : en 3 à 4 heures, la rose s&apos;ouvre et revit.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Changez</strong> l&apos;eau tous les 2-3 jours. La rose peut rester vivante plusieurs semaines.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Laissez sécher</strong> complètement pour la ranger et réutilisez-la à l&apos;infini !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
