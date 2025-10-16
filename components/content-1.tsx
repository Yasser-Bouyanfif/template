import Image from "next/image";

const timeline = [
  {
    title: "Réhydratation",
    description:
      "Plongez la plante (ou quelques brins) dans un bol d'eau froide ou tiède. Laissez-la s'ouvrir.",
  },
  {
    title: "Utilisation",
    description:
      "Récupérez l'eau infusée et buvez-la (chaude ou froide). Vous pouvez sucrer avec du miel si vous le souhaitez.",
  },
  {
    title: "Réutilisation",
    description:
      "Retirez la plante de l'eau une fois ouverte et laissez-la sécher complètement (environ 15 jours) pour la réutiliser plusieurs fois.",
  },
];

export default function ContentSection() {
  return (
    <section id="rituel" className="bg-white py-24 text-[#1a1a1a] dark:bg-[#0a0a0a] dark:text-[#f5f5f5]">
      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-[#1a1a1a] lg:text-5xl dark:text-white">
              Mode d&apos;Utilisation Recommandé
            </h2>
            <p className="text-lg leading-relaxed text-[#525252] dark:text-[#a3a3a3]">
              La Rose de Jéricho s&apos;utilise principalement en infusion. Suivez ces trois étapes simples pour profiter pleinement de ses bienfaits et la réutiliser à l&apos;infini.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-6 shadow-sm hover:shadow-md transition-shadow dark:border-[#262626] dark:bg-[#171717]">
                  <h3 className="font-semibold uppercase tracking-wider text-sm text-[#1a1a1a] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#525252] dark:text-[#a3a3a3]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#e5e5e5] bg-white p-6 shadow-lg dark:border-[#262626] dark:bg-[#171717]">
              <Image
                src="/rose.png"
                alt="Rose de Jericho ouverte"
                width={540}
                height={540}
                className="w-full"
              />
              <div className="absolute bottom-6 left-6 rounded-full bg-gradient-to-r from-[#b98c5f] to-[#a6784d] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xl">
                Renaissance
              </div>
            </div>
            <div className="ml-auto w-3/4 overflow-hidden rounded-[2rem] border border-[#e5e5e5] bg-white p-4 shadow-md dark:border-[#262626] dark:bg-[#171717]">
              <Image
                src="/images/rose-dormant.svg"
                alt="Rose de Jericho dormante"
                width={420}
                height={420}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
