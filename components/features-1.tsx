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
      className="relative overflow-hidden bg-[#f7f1e8] py-28 text-[#1a1a1a] dark:bg-[#0f0a05] dark:text-[#f5f5f5]"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(211,179,134,0.25),_transparent_55%)] opacity-80 dark:opacity-60" />
      <div className="absolute -top-20 -left-24 -z-10 h-72 w-72 rounded-full bg-[#f1d6b0]/60 blur-3xl dark:bg-[#b88a55]/30" />
      <div className="absolute -bottom-32 right-0 -z-10 h-80 w-80 rounded-full bg-[#e9cfa8]/70 blur-3xl dark:bg-[#8d6842]/40" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d7c4ac]/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7355] shadow-sm backdrop-blur dark:border-[#2d2116] dark:bg-[#0f0a07]/60 dark:text-[#d0aa78]">
            Bienfaits holistiques
          </div>
          <h2 className="mt-8 font-serif text-4xl font-bold text-[#1a140f] md:text-5xl lg:text-[3.25rem] dark:text-white">
            Les vertus les plus célébrées de la Rose de Jéricho
          </h2>
          <p className="mt-6 text-lg text-[#5a4834] dark:text-[#b8a491]">
            Utilisée traditionnellement sous forme d&apos;infusion ou de décoction, cette plante résiliente accompagne les moments
            clés de la vie. Découvrez comment son eau précieuse agit sur le corps et l&apos;esprit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          <div className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(82,64,43,0.18)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_35px_100px_rgba(82,64,43,0.22)] md:col-span-2 lg:col-span-6 lg:row-span-2 dark:border-[#2b2117] dark:bg-[#140d07]/80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,157,103,0.18),_transparent_55%)]" aria-hidden />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <div className="flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#c29a67] to-[#a6784d] text-white shadow-xl shadow-[#c29a67]/40">
                  {features[0].icon}
                </div>
                <h3 className="mt-6 font-serif text-3xl font-bold text-[#1a140f] dark:text-white">{features[0].title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#5a4834] dark:text-[#b8a491]">{features[0].description}</p>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-[#ecdcc7] pt-4 text-sm font-medium text-[#b88a55] dark:border-[#2b2117] dark:text-[#d4a574]">
                <span>{features[0].ecommerceArgument}</span>
                <span aria-hidden>→</span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-7 shadow-[0_18px_50px_rgba(82,64,43,0.16)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(82,64,43,0.2)] md:col-span-1 lg:col-span-3 dark:border-[#2b2117] dark:bg-[#140d07]/80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,115,85,0.14),_transparent_60%)]" aria-hidden />
            <div className="relative flex h-full flex-col gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b7355] to-[#6b5644] text-white shadow-lg shadow-[#8b7355]/30">
                {features[1].icon}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#1a140f] dark:text-white">{features[1].title}</h3>
              <p className="text-sm leading-relaxed text-[#5a4834] dark:text-[#b8a491]">{features[1].description}</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-7 shadow-[0_22px_60px_rgba(82,64,43,0.18)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(82,64,43,0.22)] md:col-span-1 lg:col-span-3 lg:row-span-2 dark:border-[#2b2117] dark:bg-[#140d07]/80">
            <div className="absolute -right-6 -top-6 size-28 rounded-full bg-[#c9a578]/20 blur-3xl" aria-hidden />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <div className="flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#c9a578] to-[#a88860] text-white shadow-xl shadow-[#c9a578]/35">
                  {features[2].icon}
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-[#1a140f] dark:text-white">{features[2].title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#5a4834] dark:text-[#b8a491]">{features[2].description}</p>
              </div>
              <div className="rounded-2xl border border-[#ecdcc7] bg-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a578] shadow-sm dark:border-[#2b2117] dark:bg-[#120b06]/60 dark:text-[#d4a574]">
                {features[2].ecommerceArgument}
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-7 shadow-[0_18px_50px_rgba(82,64,43,0.16)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(82,64,43,0.2)] md:col-span-2 lg:col-span-4 dark:border-[#2b2117] dark:bg-[#140d07]/80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(157,126,90,0.16),_transparent_55%)]" aria-hidden />
            <div className="relative flex items-start gap-5">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9d7e5a] to-[#7d6349] text-white shadow-lg shadow-[#9d7e5a]/30">
                {features[3].icon}
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-[#1a140f] dark:text-white">{features[3].title}</h3>
                <p className="text-sm leading-relaxed text-[#5a4834] dark:text-[#b8a491]">{features[3].description}</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-7 shadow-[0_22px_60px_rgba(82,64,43,0.18)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(82,64,43,0.22)] md:col-span-2 lg:col-span-8 dark:border-[#2b2117] dark:bg-[#140d07]/80">
            <div className="absolute -left-8 -bottom-10 size-36 rounded-full bg-[#b8956d]/20 blur-3xl" aria-hidden />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex size-16 flex-shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#b8956d] to-[#9a7854] text-white shadow-xl shadow-[#b8956d]/35">
                {features[4].icon}
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-[#1a140f] dark:text-white">{features[4].title}</h3>
                <p className="text-sm leading-relaxed text-[#5a4834] dark:text-[#b8a491]">{features[4].description}</p>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ecdcc7] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#b8956d] shadow-sm dark:border-[#2b2117] dark:bg-[#120b06]/60 dark:text-[#d4a574]">
                  {features[4].ecommerceArgument}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
