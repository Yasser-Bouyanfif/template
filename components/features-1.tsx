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
    <section id="bienfaits" className="bg-[#f8f4ef] py-28 text-[#1a1a1a] dark:bg-[#111111] dark:text-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold text-[#1a1a1a] lg:text-5xl dark:text-white">
            Les Bienfaits Populaires de la Rose de Jéricho pour votre Bien-être
          </h2>
          <p className="mt-6 text-lg text-[#544334] dark:text-[#b4a99f]">
            Utilisée traditionnellement sous forme d&apos;infusion ou de décoction (eau réhydratée), la Rose de Jéricho est très
            prisée pour ses actions sur la santé et le bien-être, notamment :
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12">
          <article className="group relative overflow-hidden rounded-[32px] border border-[#eadfd3] bg-gradient-to-br from-white via-[#fff8f1] to-[#f4e8db] p-8 shadow-[0_20px_60px_rgba(69,48,26,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(69,48,26,0.18)] md:col-span-2 xl:col-span-5 xl:row-span-2 dark:border-[#2f2316] dark:from-[#141414] dark:via-[#101010] dark:to-[#050505] dark:shadow-[0_35px_80px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c99a69]/10 via-transparent to-transparent opacity-60" aria-hidden />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#c99a69] to-[#a6784d] text-white shadow-lg shadow-[#c99a69]/40">
                  {features[0].icon}
                </div>
                <h3 className="font-serif text-3xl font-semibold text-[#1a1a1a] dark:text-white">
                  {features[0].title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#5a4c3c] dark:text-[#bfb6ac]">
                  {features[0].description}
                </p>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#c99a69] dark:text-[#d4a574]">
                {features[0].ecommerceArgument}
              </p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[32px] border border-[#eadfd3] bg-white p-8 shadow-[0_15px_45px_rgba(69,48,26,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(69,48,26,0.14)] md:col-span-1 xl:col-span-3 dark:border-[#2f2316] dark:bg-[#141414] dark:shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355]/10 to-transparent opacity-60" aria-hidden />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b7355] to-[#6b5644] text-white shadow-lg shadow-[#8b7355]/30">
                  {features[1].icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1a1a1a] dark:text-white">
                  {features[1].title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#5a4c3c] dark:text-[#bfb6ac]">
                {features[1].description}
              </p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[32px] border border-[#eadfd3] bg-white p-8 shadow-[0_15px_45px_rgba(69,48,26,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(69,48,26,0.14)] md:col-span-1 xl:col-span-4 xl:row-span-2 dark:border-[#2f2316] dark:bg-[#141414] dark:shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <div className="absolute -right-8 -top-10 size-40 rounded-full bg-[#d8b889]/20 blur-3xl" aria-hidden />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#d8b889] to-[#a88860] text-white shadow-lg shadow-[#d8b889]/30">
                  {features[2].icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1a1a1a] dark:text-white">
                  {features[2].title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#5a4c3c] dark:text-[#bfb6ac]">
                  {features[2].description}
                </p>
              </div>
              <div className="mt-6 border-t border-[#eadfd3] pt-4 dark:border-[#2f2316]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b889] dark:text-[#d4a574]">
                  {features[2].ecommerceArgument}
                </p>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[32px] border border-[#eadfd3] bg-white p-8 shadow-[0_15px_45px_rgba(69,48,26,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(69,48,26,0.14)] md:col-span-2 xl:col-span-4 dark:border-[#2f2316] dark:bg-[#141414] dark:shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(157,126,90,0.12),_transparent_55%)] opacity-70" aria-hidden />
            <div className="relative flex h-full items-start gap-4">
              <div className="flex size-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9d7e5a] to-[#7d6349] text-white shadow-lg shadow-[#9d7e5a]/30">
                {features[3].icon}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-[#1a1a1a] dark:text-white">
                  {features[3].title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#5a4c3c] dark:text-[#bfb6ac]">
                  {features[3].description}
                </p>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[32px] border border-[#eadfd3] bg-white p-8 shadow-[0_15px_45px_rgba(69,48,26,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(69,48,26,0.14)] md:col-span-2 xl:col-span-4 dark:border-[#2f2316] dark:bg-[#141414] dark:shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <div className="absolute -left-10 -bottom-14 size-48 rounded-full bg-[#b8956d]/20 blur-3xl" aria-hidden />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="flex size-16 flex-shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#b8956d] to-[#9a7854] text-white shadow-lg shadow-[#b8956d]/30">
                  {features[4].icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1a1a1a] dark:text-white">
                    {features[4].title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#5a4c3c] dark:text-[#bfb6ac]">
                    {features[4].description}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#b8956d] dark:text-[#d4a574]">
                {features[4].ecommerceArgument}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
