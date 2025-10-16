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
    <section id="bienfaits" className="bg-[#fafafa] py-24 text-[#1a1a1a] dark:bg-[#171717] dark:text-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#1a1a1a] lg:text-5xl dark:text-white">
            Les Bienfaits Populaires de la Rose de Jéricho pour votre Bien-être
          </h2>
          <p className="mt-6 text-lg text-[#525252] dark:text-[#a3a3a3]">
            Utilisée traditionnellement sous forme d&apos;infusion ou de décoction (eau réhydratée), la Rose de Jéricho est très prisée pour ses actions sur la santé et le bien-être, notamment :
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Card 1 - Large Top Left */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#e5e5e5] bg-gradient-to-br from-white to-[#fafafa] p-6 transition-all hover:shadow-2xl hover:shadow-[#b98c5f]/10 md:col-span-2 md:row-span-2 dark:border-[#262626] dark:from-[#0a0a0a] dark:to-[#171717]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b98c5f]/5 via-transparent to-transparent" />
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b98c5f] to-[#a6784d] text-white shadow-lg shadow-[#b98c5f]/30 mb-4">
                  {features[0].icon}
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-3 dark:text-white">
                  {features[0].title}
                </h3>
                <p className="text-sm leading-relaxed text-[#525252] dark:text-[#a3a3a3]">
                  {features[0].description}
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#b98c5f] dark:text-[#d4a574] mt-4">
                {features[0].ecommerceArgument}
              </p>
            </div>
          </div>

          {/* Card 2 - Small Top Right */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#e5e5e5] bg-gradient-to-br from-[#fafafa] to-white p-6 transition-all hover:shadow-2xl hover:shadow-[#8b7355]/10 md:col-span-2 lg:col-span-1 dark:border-[#262626] dark:from-[#171717] dark:to-[#0a0a0a]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355]/5 to-transparent" />
            <div className="relative h-full flex flex-col">
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b7355] to-[#6b5644] text-white shadow-lg shadow-[#8b7355]/30 mb-3">
                {features[1].icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2 dark:text-white">
                {features[1].title}
              </h3>
              <p className="text-xs text-[#525252] line-clamp-3 dark:text-[#a3a3a3]">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Card 3 - Tall Right */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#e5e5e5] bg-gradient-to-br from-white to-[#f5f5f5] p-6 transition-all hover:shadow-2xl hover:shadow-[#c9a578]/10 md:col-span-2 lg:col-span-1 lg:row-span-2 dark:border-[#262626] dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-[#c9a578]/10 blur-3xl" />
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c9a578] to-[#a88860] text-white shadow-lg shadow-[#c9a578]/30 mb-4">
                  {features[2].icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-3 dark:text-white">
                  {features[2].title}
                </h3>
                <p className="text-sm leading-relaxed text-[#525252] dark:text-[#a3a3a3]">
                  {features[2].description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#e5e5e5] dark:border-[#262626]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c9a578] dark:text-[#d4a574]">
                  {features[2].ecommerceArgument}
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Wide Bottom */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#e5e5e5] bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] p-6 transition-all hover:shadow-2xl hover:shadow-[#9d7e5a]/10 md:col-span-2 dark:border-[#262626] dark:from-[#171717] dark:to-[#1a1a1a]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(157,126,90,0.08),_transparent_50%)]" />
            <div className="relative flex items-start gap-4">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#9d7e5a] to-[#7d6349] text-white shadow-lg shadow-[#9d7e5a]/30">
                {features[3].icon}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2 dark:text-white">
                  {features[3].title}
                </h3>
                <p className="text-sm text-[#525252] dark:text-[#a3a3a3]">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 - Medium Bottom Right */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#e5e5e5] bg-gradient-to-tr from-white to-[#fafafa] p-6 transition-all hover:shadow-2xl hover:shadow-[#b8956d]/10 md:col-span-2 lg:col-span-2 dark:border-[#262626] dark:from-[#0a0a0a] dark:to-[#171717]">
            <div className="absolute -left-8 -bottom-8 size-40 rounded-full bg-[#b8956d]/10 blur-3xl" />
            <div className="relative h-full flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="flex size-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b8956d] to-[#9a7854] text-white shadow-lg shadow-[#b8956d]/30">
                  {features[4].icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-2 dark:text-white">
                    {features[4].title}
                  </h3>
                  <p className="text-sm text-[#525252] dark:text-[#a3a3a3]">
                    {features[4].description}
                  </p>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#b8956d] mt-4 dark:text-[#d4a574]">
                {features[4].ecommerceArgument}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
