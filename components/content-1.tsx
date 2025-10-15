import Image from "next/image";

const highlights = [
  {
    metric: "100% botanic",
    detail: "Sélection de plantes préservées sans traitements chimiques.",
  },
  {
    metric: "48h",
    detail: "Préparation et expédition depuis notre atelier lumineux de Casablanca.",
  },
  {
    metric: "103K",
    detail: "Plantes accompagnées dans leur renaissance partout dans le monde.",
  },
];

export default function ContentSection() {
  return (
    <section id="origines" className="bg-[#f7f1e6] py-24 text-[#2d241c] dark:bg-[#130b06] dark:text-[#f5ecdf]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8a7a67]">
              Atelier CHAJARATMARIAM
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#1f1a15] lg:text-5xl dark:text-[#f6ecde]">
              Une histoire claire de transmission végétale
            </h2>
            <p className="text-lg leading-relaxed text-[#5c5247] dark:text-[#f0dfcd]/80">
              De la dormance à l&apos;éclosion, nous accompagnons chaque Rose de Jéricho avec une palette écrémée, des matières naturelles et un récit qui invite au calme. Notre équipe imagine des rituels à vivre simplement, sans superflu.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.metric} className="rounded-3xl border border-[#eee4d6] bg-white p-6 shadow-sm shadow-[#e4d9c6]/40 dark:border-[#352216] dark:bg-[#1d130c]">
                  <p className="text-sm uppercase tracking-[0.28em] text-[#8a7a67]">{item.metric}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#5c5247] dark:text-[#f0dfcd]/80">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.75rem] border border-[#efe5d7] bg-white p-8 shadow-[0_32px_90px_rgba(220,202,173,0.45)] dark:border-[#3a271a] dark:bg-[#1d120b]">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <Image
                src="/images/rose-packaging.svg"
                alt="Packaging neutre de la Rose de Jericho"
                width={520}
                height={520}
                className="w-full"
              />
              <div className="flex flex-col items-start gap-4 rounded-3xl border border-[#f3eadc] bg-[#fdfaf4] p-6 text-left shadow-sm shadow-[#eadcc7]/60 dark:border-[#3b291d] dark:bg-[#21140d]">
                <Image
                  src="/images/rose-awakened.svg"
                  alt="Rose de Jericho ouverte"
                  width={180}
                  height={180}
                />
                <p className="text-xs uppercase tracking-[0.28em] text-[#8a7a67]">Renaissance guidée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
