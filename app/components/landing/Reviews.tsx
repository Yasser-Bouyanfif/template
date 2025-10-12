"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie Laurent",
    location: "Paris",
    rating: 5,
    comment: "Ma Rose de Jéricho est magnifique ! C'est incroyable de la voir revivre à chaque fois que je la mets dans l'eau. Un véritable spectacle de la nature. Je la recommande à tous !",
    date: "Il y a 2 semaines",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    location: "Lyon",
    rating: 5,
    comment: "Livraison rapide et soignée. La rose était bien emballée et en parfait état. C'est un cadeau original qui fait toujours son effet. Merci !",
    date: "Il y a 1 mois",
  },
  {
    id: 3,
    name: "Sophie Martin",
    location: "Marseille",
    rating: 5,
    comment: "Je suis émerveillée par cette plante ! Elle apporte une énergie positive à ma maison. Le processus de résurrection est fascinant à observer. Produit de qualité !",
    date: "Il y a 3 semaines",
  },
  {
    id: 4,
    name: "Lucas Bernard",
    location: "Toulouse",
    rating: 5,
    comment: "Excellente qualité et service client très réactif. Ma rose est déjà passée par plusieurs cycles et elle est toujours aussi belle. Un achat que je ne regrette pas !",
    date: "Il y a 1 semaine",
  },
  {
    id: 5,
    name: "Emma Petit",
    location: "Nantes",
    rating: 5,
    comment: "Un cadeau original et symbolique. La rose est arrivée rapidement et bien protégée. Je l'utilise pour mes rituels de méditation. Parfaite !",
    date: "Il y a 2 mois",
  },
  {
    id: 6,
    name: "Alexandre Roux",
    location: "Bordeaux",
    rating: 5,
    comment: "Produit authentique et de belle taille. Les instructions d'utilisation sont claires. C'est ma troisième commande, je les offre à mes proches !",
    date: "Il y a 3 jours",
  },
];

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-amber-500 fill-amber-500" : "text-slate-300"}`}
      />
    ));
  };

  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section className="bg-gradient-to-b from-white via-rose-50/50 to-amber-50/30 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-amber-600" />
            <span>{averageRating} / 5 étoiles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Elles et ils témoignent de leur renaissance
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Plus de 500 client·es ont adopté la Rose de Jéricho ChajaratMariam et partagent
            leurs moments suspendus de douceur et de spiritualité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-3xl border border-amber-100/60 bg-white/80 p-8 shadow-lg shadow-amber-100/50 transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
            >
              <div className="absolute top-6 right-6 text-amber-200 opacity-50">
                <Quote className="w-10 h-10" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="mb-6 min-h-[120px] text-base leading-relaxed text-slate-700">
                  {testimonial.comment}
                </p>

                <div className="flex items-center gap-3 border-t border-amber-100 pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-rose-500 text-white">
                    <span className="text-xl font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-3xl border border-amber-200/60 bg-gradient-to-r from-amber-50 via-white to-rose-50 p-6 shadow-lg shadow-amber-100/50">
            <div className="flex items-center gap-2 text-amber-500">
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            </div>
            <p className="text-slate-700 font-medium">
              <span className="font-bold text-slate-900">98% de satisfaction</span> sur plus de 500 commandes bénies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
