import { Droplets, Leaf, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Intentions lumineuses",
    description:
      "Chaque rituel est conçu pour apaiser l&apos;esprit et ouvrir un espace de renouveau au cœur de votre maison.",
  },
  {
    icon: Droplets,
    title: "Réveil minimaliste",
    description:
      "Une eau filtrée et des gestes précis suffisent pour réveiller la Rose de Jéricho et révéler sa transformation.",
  },
  {
    icon: Leaf,
    title: "Palette écrémée",
    description:
      "Textures naturelles, lignes épurées et blancs chauffés pour s&apos;accorder aux intérieurs contemporains.",
  },
];

export default function Features() {
  return (
    <section id="bienfaits" className="bg-white py-24 text-[#2d241c] dark:bg-[#1a120c] dark:text-[#f5ecdf]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-semibold text-[#1f1a15] lg:text-5xl dark:text-[#f5ecdf]">
            Les bienfaits essentiels
          </h2>
          <p className="mt-4 text-[#5c5247] dark:text-[#f0dfcd]/80">
            Trois piliers pour accueillir la Rose de Jéricho dans une atmosphère claire et apaisée.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col items-start gap-5 rounded-3xl border border-[#efe7da] bg-[#fefcf8] p-8 text-left shadow-[0_20px_60px_rgba(222,206,181,0.25)] transition hover:shadow-[0_24px_70px_rgba(210,191,163,0.35)] dark:border-[#3b291d] dark:bg-[#22140d]"
            >
              <span className="flex size-12 items-center justify-center rounded-full border border-[#ebdfcc] bg-white text-[#b89263] shadow-sm dark:border-[#3b291d] dark:bg-[#1a120c] dark:text-[#d7b994]">
                <feature.icon className="size-5" aria-hidden />
              </span>
              <div className="space-y-3">
                <h3 className="font-medium uppercase tracking-[0.22em] text-[#3c3329] dark:text-[#f5ecdf]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5c5247] dark:text-[#f0dfcd]/80">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
