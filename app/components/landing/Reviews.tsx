"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Lina",
    location: "Casablanca",
    rating: 5,
    comment:
      "Ce coffret est devenu mon rituel du dimanche. L'ouverture de la rose apaise mes douleurs menstruelles et je me sens ancrée pour la semaine. Merci pour le guide très clair !",
    date: "Il y a 2 semaines",
  },
  {
    id: 2,
    name: "Sarah",
    location: "Toulouse",
    rating: 5,
    comment:
      "J'ai offert une rose ChajaratMariam à ma sœur pour son mariage. L'équipe a ajouté un mot personnalisé sublime. Elle l'utilise pour bénir son foyer, c'est très émouvant.",
    date: "Il y a 1 mois",
  },
  {
    id: 3,
    name: "Inès",
    location: "Bruxelles",
    rating: 5,
    comment:
      "Je pratique le yoga et la respiration consciente. Depuis que j'allume une bougie à côté de ma rose de Jéricho, mes séances sont plus profondes. L'énergie est incroyable.",
    date: "Il y a 3 semaines",
  },
  {
    id: 4,
    name: "Nora",
    location: "Paris",
    rating: 5,
    comment:
      "Ma rose s'est ouverte en moins de quatre heures ! Les instructions audio accessibles via le QR code sont apaisantes. Je l'ai déjà recommandée à mes clientes.",
    date: "Il y a 1 semaine",
  },
  {
    id: 5,
    name: "Amina",
    location: "Marseille",
    rating: 5,
    comment:
      "Le service client a été d'une douceur incroyable. Ma première rose n'avait pas bien repris et j'en ai reçu une nouvelle aussitôt. Depuis, je la fais revivre à chaque pleine lune.",
    date: "Il y a 2 mois",
  },
  {
    id: 6,
    name: "Camille",
    location: "Genève",
    rating: 5,
    comment:
      "Les cartes d'intention sont magnifiques. Je sens une vraie vibration lorsque la rose touche l'eau. C'est mon moment sacré du matin.",
    date: "Il y a 3 jours",
  },
];

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-emerald-500 text-emerald-500" : "text-emerald-100"}`} />
    ));
  };

  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            <Star className="h-4 w-4 fill-emerald-500" />
            <span>{averageRating} / 5 • communauté en éveil</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-emerald-950">
            Elles témoignent de leur renaissance
          </h2>
          <p className="mt-4 text-lg text-emerald-900/80">
            Plus de 10 000 rituels guidés par ChajaratMariam. Nos roses accompagnent les femmes dans leurs moments forts : maternité,
            célébrations, guérison intérieure.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative rounded-3xl border border-emerald-100 bg-white/90 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute top-6 right-6 text-emerald-100">
                <Quote className="h-10 w-10" aria-hidden />
              </div>
              <div className="relative">
                <div className="mb-4 flex items-center gap-1">{renderStars(testimonial.rating)}</div>
                <p className="min-h-[140px] text-base leading-relaxed text-emerald-900/80">{testimonial.comment}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-emerald-100 pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 via-emerald-50 to-white text-lg font-semibold text-emerald-700">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900">{testimonial.name}</p>
                    <p className="text-sm text-emerald-900/60">
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-3xl border border-emerald-100 bg-white/80 px-8 py-10 text-center shadow-md">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-6 w-6 fill-emerald-500 text-emerald-500" />
            ))}
          </div>
          <p className="text-base font-medium text-emerald-900/80">
            <span className="font-semibold text-emerald-900">98% de satisfaction</span> • accompagnement personnalisé et suivi après achat.
          </p>
        </div>
      </div>
    </section>
  );
}
