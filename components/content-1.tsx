import Image from "next/image";

const timeline = [
  {
    title: "Dormance protectrice",
    description:
      "Conservée au sec, la Rose de Jericho se replie en sphère et garde son énergie latente, prête à se déployer lorsque l&apos;eau la touche.",
  },
  {
    title: "Renaissance aquatique",
    description:
      "Immergée dans une eau tiédie et purifiée, elle s&apos;ouvre lentement en éventail, libérant une fragrance végétale légère.",
  },
  {
    title: "Transmission symbolique",
    description:
      "Nous accompagnons le rituel de récits ancestraux et de gestes guidés pour ancrer vos intentions dans le quotidien.",
  },
];

export default function ContentSection() {
  return (
    <section id="origines" className="bg-[#fbf6f0] py-20 text-[#2f2015] dark:bg-[#130b06] dark:text-[#f5ecdf]">
      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-semibold text-[#3c281b] lg:text-5xl dark:text-[#f6ecde]">
              L&apos;histoire sacrée de la Rose de Jericho
            </h2>
            <p className="text-lg leading-relaxed text-[#5a3f2c] dark:text-[#f0dfcd]/80">
              Plante nomade des terres désertiques, elle traverse les époques comme un talisman de chance et de protection. Chez CHAJARATMARIAM, nous honorons ce patrimoine en associant matières naturelles, gestes précis et écriture contemporaine.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-3xl border border-[#e6d6c6] bg-white/80 p-6 shadow-sm shadow-[#d4bfa7]/25 dark:border-[#352216] dark:bg-[#1d130c]/80">
                  <h3 className="font-medium uppercase tracking-[0.25em] text-[#6f533c] dark:text-[#f5e5d4]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#5a3f2c] dark:text-[#f0dfcd]/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#e4d2c0] bg-white/80 p-6 shadow-[0_30px_80px_rgba(153,118,82,0.18)] dark:border-[#3a271a] dark:bg-[#1d120b]/90">
              <Image
                src="/rose.png"
                alt="Rose de Jericho ouverte"
                width={540}
                height={540}
                className="w-full"
              />
              <div className="absolute bottom-6 left-6 rounded-full bg-[#b98c5f] px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white shadow-lg">
                Renaissance
              </div>
            </div>
            <div className="ml-auto w-3/4 overflow-hidden rounded-[2rem] border border-[#e6d6c6] bg-white/80 p-4 shadow-[0_20px_60px_rgba(140,104,70,0.18)] dark:border-[#3a271a] dark:bg-[#1d120b]/90">
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
