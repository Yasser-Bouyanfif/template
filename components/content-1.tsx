import Image from "next/image";

const timeline = [
  {
    title: "Réhydratation",
    description:
      "Plongez la plante ou quelques brins dans un bol d&apos;eau froide ou tiède et regardez-la s&apos;ouvrir en quelques heures.",
  },
  {
    title: "Infusion bienfaisante",
    description:
      "Récupérez l&apos;eau réhydratée et savourez-la chaude ou froide, nature ou avec une touche de miel selon vos envies.",
  },
  {
    title: "Sécher & recommencer",
    description:
      "Retirez la Rose de Jéricho, laissez-la sécher pendant environ 15 jours et répétez le rituel aussi souvent que souhaité.",
  },
];

export default function ContentSection() {
  return (
    <section id="rituel" className="bg-[#fbf6f0] py-20 text-[#2f2015] dark:bg-[#130b06] dark:text-[#f5ecdf]">
      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-semibold text-[#3c281b] lg:text-5xl dark:text-[#f6ecde]">
              Présentation & rituel de la Rose de Jéricho
            </h2>
            <p className="text-lg leading-relaxed text-[#5a3f2c] dark:text-[#f0dfcd]/80">
              Surnommée <strong>Chajarat Maryam</strong>, la Rose de Jéricho est un talisman vivant des déserts du Sahara et du Moyen-Orient. Elle se recroqueville en boule sèche pour préserver son énergie puis se déploie majestueusement au contact de l&apos;eau, prête à offrir son eau d&apos;infusion chargée d&apos;histoires et de bienfaits.
            </p>
            <p className="text-base leading-relaxed text-[#5a3f2c] dark:text-[#f0dfcd]/75">
              Cette plante de résilience renaît à l&apos;infini : laissez-la s&apos;ouvrir, récoltez son eau, puis séchez-la pour recommencer le rituel quand vous le souhaitez. Un geste simple pour reconnecter avec votre vitalité et perpétuer un savoir-faire ancestral.
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
