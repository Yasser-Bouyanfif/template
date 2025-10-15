import React from "react";

const highlights = [
  {
    title: "Réveille la plante en douceur",
    description:
      "Hydratez la rose avec une eau tempérée pour observer sa transformation spectaculaire sans brusquer ses fibres naturelles.",
    detail: "Rituel d&apos;ouverture",
  },
  {
    title: "Harmonise le cycle féminin",
    description:
      "Un symbole traditionnel de renouveau utilisé pour accompagner les périodes importantes de la vie des femmes.",
    detail: "Soutien naturel",
  },
  {
    title: "Purifie l&apos;atmosphère",
    description:
      "Idéale pour instaurer une ambiance apaisée lors de vos moments de méditation ou de prière.",
    detail: "Ancre spirituelle",
  },
];

export default function HighlightSection() {
  return (
    <section
      id="bienfaits"
      className="bg-[#f7f4ed] py-24 text-[#1f1b16]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#7e8a7e]">
              Les essentiels
            </span>
            <h2 className="font-serif text-3xl text-[#1b211c] md:text-4xl">
              Trois gestes pour un rituel lumineux
            </h2>
            <p className="text-base text-[#5f655f]">
              Chaque expérience est pensée pour rester simple et respirer le calme. Sélectionnez un geste, installez votre espace et laissez la plante s&apos;ouvrir à son rythme.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group relative flex h-full flex-col justify-between rounded-[2.5rem] border border-[#ebe6dd] bg-white p-8 text-left shadow-[0_20px_60px_rgba(31,29,24,0.05)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <span className="inline-flex items-center rounded-full bg-[#e9f1ed] px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#2f6d5c]">
                    {item.detail}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1b211c]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5f655f]">{item.description}</p>
                </div>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#d8dfd7] to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
