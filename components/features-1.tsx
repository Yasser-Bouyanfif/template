import { Baby, CalendarDays, Droplets, Heart, LineChart } from "lucide-react";

const features = [
  {
    icon: <Heart className="size-6" aria-hidden />,
    title: "Soutien à la Fertilité",
    description:
      "C'est le bienfait le plus célèbre et le plus recherché. Traditionnellement utilisée pour favoriser l'ovulation chez la femme et stimuler la fertilité de manière générale.",
    ecommerceArgument: "Un remède naturel ancestral pour accompagner votre projet bébé.",
  },
  {
    icon: <Baby className="size-6" aria-hidden />,
    title: "Facilitation de l'Accouchement",
    description:
      "Elle est traditionnellement employée en fin de grossesse pour aider à dilater le col et faciliter le travail.",
    ecommerceArgument: "Un soutien naturel pour une naissance plus douce.",
  },
  {
    icon: <CalendarDays className="size-6" aria-hidden />,
    title: "Régulation du Cycle Menstruel",
    description:
      "Aide à régulariser le cycle et à apaiser les symptômes prémenstruels (crampes, ballonnements, seins douloureux).",
    ecommerceArgument: "Pour un cycle plus harmonieux.",
  },
  {
    icon: <Droplets className="size-6" aria-hidden />,
    title: "Action Diurétique et Hépatique",
    description:
      "Elle stimule la fonction rénale, aidant à lutter contre la rétention d'eau. Elle possède des vertus protectrices pour le foie et aide à la détoxification.",
    ecommerceArgument: "Un excellent détoxifiant naturel pour le corps.",
  },
  {
    icon: <LineChart className="size-6" aria-hidden />,
    title: "Régulateur de Glycémie",
    description:
      "Elle est reconnue pour ses propriétés hypoglycémiantes, aidant à faire baisser le taux de sucre dans le sang, ce qui en fait un allié pour les personnes soucieuses de leur équilibre glycémique.",
    ecommerceArgument: "Aide à l'équilibre du taux de sucre.",
  },
];

export default function Features() {
  return (
    <section
      id="bienfaits"
      className="relative overflow-hidden bg-[#faf8f3] py-28 text-[#1a1a1a] dark:bg-[#121212] dark:text-[#f5f5f5]"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-[-10%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#e7d8c9]/60 blur-3xl dark:bg-[#1d1d1d]"
          aria-hidden
        />
        <div
          className="absolute right-[-6%] top-12 h-72 w-72 rounded-full bg-[#f0e2d4]/70 blur-3xl dark:bg-[#1a1a1a]"
          aria-hidden
        />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#b98c5f]/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#b98c5f] shadow-sm backdrop-blur dark:border-[#d4a574]/20 dark:bg-[#181818]/70 dark:text-[#d4a574]">
            Bienfaits signature
          </span>
          <h2 className="mt-6 font-serif text-4xl font-bold text-[#1a1a1a] lg:text-5xl dark:text-white">
            Les Bienfaits Populaires de la Rose de Jéricho pour votre Bien-être
          </h2>
          <p className="mt-6 text-lg text-[#4f4438] dark:text-[#a3a3a3]">
            Utilisée traditionnellement sous forme d&apos;infusion ou de décoction (eau réhydratée), la Rose de Jéricho est très
            prisée pour ses actions sur la santé et le bien-être, notamment :
          </p>
        </div>

        <div className="grid auto-rows-[minmax(240px,1fr)] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12">
          <div className="group relative overflow-hidden rounded-[28px] border border-[#e9dccb] bg-white/80 p-8 shadow-[0_18px_60px_rgba(143,110,70,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(143,110,70,0.18)] dark:border-[#262626] dark:bg-[#181818]/80 xl:col-span-5 xl:row-span-2">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#b98c5f]/12 via-transparent to-transparent"
              aria-hidden
            />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="space-y-5">
                <div className="flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#b98c5f] to-[#a6784d] text-white shadow-xl shadow-[#b98c5f]/30">
                  {features[0].icon}
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#2b2016] dark:text-white">{features[0].title}</h3>
                <p className="text-base leading-relaxed text-[#5b4a3a] dark:text-[#b7b7b7]">{features[0].description}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b98c5f] dark:text-[#d4a574]">
                {features[0].ecommerceArgument}
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px] border border-[#eee1d2] bg-white p-7 shadow-[0_16px_55px_rgba(136,112,80,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(136,112,80,0.2)] dark:border-[#262626] dark:bg-[#161616] md:col-span-1 xl:col-span-3">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#8b7355]/10 via-transparent to-transparent"
              aria-hidden
            />
            <div className="relative flex h-full flex-col gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b7355] to-[#6b5644] text-white shadow-lg shadow-[#8b7355]/30">
                {features[1].icon}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#2b2016] dark:text-white">{features[1].title}</h3>
              <p className="text-sm leading-relaxed text-[#5b4a3a] dark:text-[#b0b0b0]">{features[1].description}</p>
              <span className="mt-auto text-xs font-semibold uppercase tracking-[0.28em] text-[#8b7355] dark:text-[#d4a574]">
                {features[1].ecommerceArgument}
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px] border border-[#ebddcd] bg-white/90 p-8 shadow-[0_18px_60px_rgba(162,128,88,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(162,128,88,0.18)] dark:border-[#262626] dark:bg-[#191919]/80 md:col-span-2 xl:col-span-4 xl:row-span-2">
            <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#c9a578]/15 blur-3xl" aria-hidden />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="space-y-5">
                <div className="flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#c9a578] to-[#a88860] text-white shadow-xl shadow-[#c9a578]/30">
                  {features[2].icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#2b2016] dark:text-white">{features[2].title}</h3>
                <p className="text-base leading-relaxed text-[#5b4a3a] dark:text-[#b7b7b7]">{features[2].description}</p>
              </div>
              <div className="rounded-2xl border border-[#e7d8c9] bg-[#f8f2eb]/70 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a578] dark:border-[#262626] dark:bg-[#1f1f1f]/80 dark:text-[#d4a574]">
                {features[2].ecommerceArgument}
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px] border border-[#eee0ce] bg-white/80 p-7 shadow-[0_16px_55px_rgba(150,120,82,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(150,120,82,0.18)] dark:border-[#262626] dark:bg-[#171717] md:col-span-1 xl:col-span-5">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(157,126,90,0.12),_transparent_60%)]"
              aria-hidden
            />
            <div className="relative flex h-full items-start gap-5">
              <div className="flex size-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9d7e5a] to-[#7d6349] text-white shadow-lg shadow-[#9d7e5a]/30">
                {features[3].icon}
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-[#2b2016] dark:text-white">{features[3].title}</h3>
                <p className="text-sm leading-relaxed text-[#5b4a3a] dark:text-[#b7b7b7]">{features[3].description}</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px] border border-[#e8d9c8] bg-white/90 p-8 shadow-[0_18px_60px_rgba(185,149,109,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(185,149,109,0.2)] dark:border-[#262626] dark:bg-[#181818]/80 md:col-span-2 xl:col-span-7">
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[#b8956d]/12 blur-3xl" aria-hidden />
            <div className="relative flex h-full flex-col justify-between gap-6 md:flex-row md:items-start md:gap-8">
              <div className="flex size-16 flex-shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#b8956d] to-[#9a7854] text-white shadow-xl shadow-[#b8956d]/30">
                {features[4].icon}
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-3xl font-bold text-[#2b2016] dark:text-white">{features[4].title}</h3>
                <p className="text-base leading-relaxed text-[#5b4a3a] dark:text-[#b7b7b7]">{features[4].description}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8956d] dark:text-[#d4a574]">
                  {features[4].ecommerceArgument}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
