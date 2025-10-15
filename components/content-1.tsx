import Image from "next/image";

const timeline = [
  {
    title: "Dormance",
    description:
      "À sec, la plante se replie et préserve une énergie discrète prête à renaître.",
  },
  {
    title: "Éclosion",
    description:
      "Sous l&apos;effet d&apos;une eau claire, la Rose se déploie lentement et diffuse une douceur végétale.",
  },
  {
    title: "Intention",
    description:
      "Nous guidons chaque rituel avec des gestes lents pour ancrer vos souhaits dans le quotidien.",
  },
];

export default function ContentSection() {
  return (
    <section id="origines" className="bg-[#f8f6ef] py-20 text-[#2d2924]">
      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-semibold text-[#1f1d19] lg:text-5xl">
              Une histoire sobre et lumineuse
            </h2>
            <p className="text-lg leading-relaxed text-[#4c4a43]">
              Nomade des déserts, la Rose de Jericho s&apos;adapte à chaque intérieur. Nous l&apos;accompagnons avec une direction artistique blanche et crème, inspirée des textures minérales et des lignes graphiques que vous aimez.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#ede8dc] bg-white/90 p-6 shadow-[0_18px_50px_rgba(217,217,203,0.35)]"
                >
                  <h3 className="font-medium uppercase tracking-[0.25em] text-[#6f8a6a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4c4a43]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ebe4d8] bg-white/95 p-6 shadow-[0_35px_90px_rgba(205,205,191,0.45)]">
              <Image
                src="/images/rose-awakened.svg"
                alt="Rose de Jericho ouverte"
                width={540}
                height={540}
                className="w-full"
              />
            </div>
            <div className="ml-auto w-3/4 overflow-hidden rounded-[2rem] border border-[#f0ebe0] bg-white/95 p-4 shadow-[0_24px_70px_rgba(215,215,200,0.4)]">
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
