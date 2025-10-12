"use client";

import { Baby, Droplets, HeartPulse, Leaf, Package, ShieldCheck, Sparkles } from "lucide-react";

export default function Advantages() {
  const therapeuticBenefits = [
    {
      title: "Confort menstruel",
      description:
        "Infusez l'eau de la rose et appliquez-la en compresse chaude pour apaiser les crampes et équilibrer le flux.",
      icon: <HeartPulse className="h-7 w-7 text-white" />,
      gradient: "from-rose-500 to-rose-600",
    },
    {
      title: "Soutien fertilité",
      description:
        "Traditionnellement partagée entre femmes pour bénir les naissances, la rose accompagne vos rituels d'intention.",
      icon: <Baby className="h-7 w-7 text-white" />,
      gradient: "from-amber-500 to-amber-600",
    },
    {
      title: "Harmonisation hormonale",
      description:
        "Un bain de vapeur à base de rose de Jéricho aide à réguler naturellement les cycles et à calmer l'esprit.",
      icon: <Sparkles className="h-7 w-7 text-white" />,
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  const commitments = [
    {
      title: "Récolte équitable",
      description: "Partenariats directs avec des cueilleuses du Moyen-Orient et rémunération juste.",
      icon: <Leaf className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Coffrets prêts à offrir",
      description: "Packaging recyclable, pochon en coton bio et guide illustré en français.",
      icon: <Package className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Livraison express 24h",
      description: "Expédition depuis la France métropolitaine avec suivi SMS et email.",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
    },
  ];

  const ritualSteps = [
    {
      number: "1",
      title: "Réveil",
      content: "Réhydratez la rose 3 heures dans une eau pure à température ambiante.",
    },
    {
      number: "2",
      title: "Intention",
      content: "Ajoutez votre infusion ou parfum préféré et prononcez vos souhaits.",
    },
    {
      number: "3",
      title: "Rayonnement",
      content: "Profitez de son énergie durant 2 jours puis laissez-la sécher pour recommencer.",
    },
    {
      number: "4",
      title: "Conservation",
      content: "Rangez-la dans son pochon en coton dans un lieu sec pour préserver ses vertus.",
    },
  ];

  return (
    <section id="benefits" className="bg-gradient-to-b from-white via-emerald-50/30 to-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Les bienfaits de la Rose de Jéricho
          </h2>
          <p className="text-lg text-slate-600">
            ChajaratMariam vous guide dans l&apos;utilisation thérapeutique et spirituelle de cette plante sacrée.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {therapeuticBenefits.map(({ title, description, icon, gradient }) => (
            <article
              key={title}
              className="rounded-3xl bg-white/90 p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl backdrop-blur"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient}`}>
                {icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-[32px] border border-emerald-100 bg-white/80 p-10 shadow-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-slate-900">
              Rituel signature ChajaratMariam
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Recevez un guide détaillé et nos conseils personnalisés pour créer votre moment de renaissance.
            </p>

            <div className="mt-8 grid gap-4">
              {ritualSteps.map(({ number, title, content }) => (
                <div key={number} className="flex gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-base font-semibold text-white">
                    {number}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">{title}</p>
                    <p className="text-sm text-slate-600">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-white via-emerald-50/70 to-amber-50/70 p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Nos engagements</h3>
            <div className="space-y-5">
              {commitments.map(({ title, description, icon }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-emerald-100 bg-white/70 px-5 py-4 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50">
                    {icon}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-emerald-200 bg-white/80 p-5 text-sm text-slate-600">
              <Droplets className="h-6 w-6 text-emerald-500" />
              Hydratation contrôlée : nous fournissons un spray brumisateur pour prolonger la fraîcheur de votre rose entre deux rituels.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
