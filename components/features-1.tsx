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
      className="relative overflow-hidden bg-gradient-to-b from-[#fdf8f3] via-[#faf8f5] to-[#f5f3f0] py-28 text-[#1a1209] dark:from-[#0b0b0b] dark:via-[#101010] dark:to-[#121212] dark:text-[#f5f5f5]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 w-[min(80%,720px)] rounded-full bg-[#e9d5bc]/40 blur-3xl dark:bg-[#c49b68]/15" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#e7d6c1] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#b98c5f] shadow-sm backdrop-blur dark:border-[#1f1f1f] dark:bg-[#121212]/70 dark:text-[#d4a574]">
            Les vertus plébiscitées
          </span>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,2.2vw+1.6rem,3.4rem)] font-semibold leading-tight text-[#1a1209] dark:text-white">
            Les Bienfaits Populaires de la Rose de Jéricho pour votre Bien-être
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#5d4a38] dark:text-[#a6a6a6]">
            Utilisée sous forme d&apos;infusion ou de décoction, la Rose de Jéricho accompagne les rituels de bien-être depuis des siècles. Voici les bienfaits les plus recherchés par nos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          <article className="group relative overflow-hidden rounded-3xl border border-[#f0e2d4] bg-white/80 p-8 shadow-[0_25px_80px_rgba(185,140,95,0.18)] backdrop-blur transition hover:-translate-y-1 hover:border-[#dcbf9b] dark:border-[#1f1f1f] dark:bg-[#151515]/80 dark:shadow-[0_25px_80px_rgba(196,155,104,0.14)] lg:col-span-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(185,140,95,0.15),_transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b98c5f] to-[#a6784d] text-white shadow-lg shadow-[#b98c5f]/30">
                  {features[0].icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-3xl font-semibold text-[#2b190c] dark:text-white">{features[0].title}</h3>
                  <p className="text-base leading-relaxed text-[#5d4a38] dark:text-[#b0b0b0]">{features[0].description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-[#e7d6c1] bg-[#fdf7f0]/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#b98c5f] dark:border-[#272727] dark:bg-[#1a120b]/70 dark:text-[#d4a574]">
                {features[0].ecommerceArgument}
                <span className="text-[10px] text-[#9a7b57] dark:text-[#f6dec2]/80">Rituel quotidien</span>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-[#f0e2d4] bg-white/70 p-6 shadow-[0_18px_45px_rgba(157,126,90,0.14)] backdrop-blur transition hover:-translate-y-1 hover:border-[#dcbf9b] dark:border-[#1a1a1a] dark:bg-[#161616]/70 dark:shadow-[0_18px_45px_rgba(196,155,104,0.12)] lg:col-span-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(157,126,90,0.12),_transparent_60%)]" />
            <div className="relative flex h-full flex-col gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b7355] to-[#6b5644] text-white shadow-lg shadow-[#8b7355]/30">
                {features[1].icon}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#2b190c] dark:text-white">{features[1].title}</h3>
              <p className="text-sm leading-relaxed text-[#5d4a38] dark:text-[#b0b0b0]">{features[1].description}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#8b7355] dark:text-[#e9caa0]">
                {features[1].ecommerceArgument}
              </span>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-[#f0e2d4] bg-white/75 p-8 shadow-[0_20px_60px_rgba(201,165,120,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-[#dcbf9b] dark:border-[#1a1a1a] dark:bg-[#161616]/75 dark:shadow-[0_20px_60px_rgba(196,155,104,0.14)] lg:col-span-3">
            <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#c9a578]/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c9a578] to-[#a88860] text-white shadow-lg shadow-[#c9a578]/30">
                {features[2].icon}
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-[#2b190c] dark:text-white">{features[2].title}</h3>
                <p className="text-sm leading-relaxed text-[#5d4a38] dark:text-[#b0b0b0]">{features[2].description}</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-[#f0e2d4] bg-[#fdf7f0]/70 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c9a578] dark:border-[#272727] dark:bg-[#1a120b]/70 dark:text-[#f0d8b8]">
                {features[2].ecommerceArgument}
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-[#f0e2d4] bg-white/75 p-7 shadow-[0_18px_45px_rgba(157,126,90,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-[#dcbf9b] dark:border-[#1a1a1a] dark:bg-[#151515]/75 dark:shadow-[0_18px_45px_rgba(196,155,104,0.14)] lg:col-span-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(157,126,90,0.12),_transparent_55%)]" />
            <div className="relative flex h-full flex-col gap-5">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9d7e5a] to-[#7d6349] text-white shadow-lg shadow-[#9d7e5a]/30">
                {features[3].icon}
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-[#2b190c] dark:text-white">{features[3].title}</h3>
                <p className="text-sm leading-relaxed text-[#5d4a38] dark:text-[#b0b0b0]">{features[3].description}</p>
              </div>
              <div className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9d7e5a] dark:text-[#e9caa0]">
                Détox naturelle &bull; Drainage doux
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-[#f0e2d4] bg-white/80 p-8 shadow-[0_20px_60px_rgba(184,149,109,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-[#dcbf9b] dark:border-[#1a1a1a] dark:bg-[#161616]/80 dark:shadow-[0_20px_60px_rgba(196,155,104,0.14)] lg:col-span-8">
            <div className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full bg-[#b8956d]/18 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="flex size-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b8956d] to-[#9a7854] text-white shadow-lg shadow-[#b8956d]/30">
                {features[4].icon}
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="font-serif text-3xl font-semibold text-[#2b190c] dark:text-white">{features[4].title}</h3>
                <p className="text-base leading-relaxed text-[#5d4a38] dark:text-[#b0b0b0]">{features[4].description}</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#e7d6c1] bg-white/70 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b8956d] shadow-sm dark:border-[#272727] dark:bg-[#1a120b]/70 dark:text-[#f0d8b8]">
                {features[4].ecommerceArgument}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
