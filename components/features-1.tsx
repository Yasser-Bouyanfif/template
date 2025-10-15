import { Droplets, Flower2, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="size-7" aria-hidden />,
    title: "Éclat naturel",
    description: "Une plante qui se déploie pour purifier l&apos;air et attirer les ondes positives.",
  },
  {
    icon: <Droplets className="size-7" aria-hidden />,
    title: "Hydratation consciente",
    description: "Quelques gouttes suffisent pour réveiller son cycle de renaissance et nourrir vos rituels.",
  },
  {
    icon: <Flower2 className="size-7" aria-hidden />,
    title: "Féminité protégée",
    description: "Symbole ancestral d&apos;équilibre hormonal, transmis entre mères, filles et soeurs.",
  },
];

export default function Features() {
  return (
    <section id="bienfaits" className="bg-[#fffbf4] py-20 text-[#1f140d]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl tracking-[0.15em] text-[#2c1f16] md:text-4xl">
            Les bienfaits essentiels
          </h2>
          <p className="mt-4 text-base text-[#5f4d3c]">
            Trois gestes pour renouer avec un bien-être lumineux, inspirés des rituels sahariens.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex h-full flex-col justify-between rounded-[2rem] border border-[#efe6d9] bg-white/80 p-8 text-left shadow-[0_25px_60px_rgba(81,60,40,0.08)]"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-[#f5ede1] text-[#2f2418]">
                {feature.icon}
              </div>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#8c7763]">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f4d3c]">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
