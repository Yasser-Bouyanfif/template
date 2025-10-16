import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Baby, CalendarDays, Droplets, Heart, LineChart } from "lucide-react";
import { ReactNode } from "react";

const features = [
  {
    icon: <Heart className="size-6" aria-hidden />,
    title: "Soutien à la fertilité",
    description:
      "Traditionnellement reconnue pour favoriser l&apos;ovulation et accompagner chaque projet bébé avec une ressource naturelle ancestrale.",
    ecommerceArgument: "Un remède naturel ancestral pour accompagner votre projet bébé.",
  },
  {
    icon: <Baby className="size-6" aria-hidden />,
    title: "Facilite l&apos;accouchement",
    description:
      "Employée en fin de grossesse pour aider à la dilatation du col et soutenir un travail plus doux et serein.",
    ecommerceArgument: "Un soutien naturel pour une naissance plus douce.",
  },
  {
    icon: <CalendarDays className="size-6" aria-hidden />,
    title: "Cycle harmonisé",
    description:
      "Appréciée pour réguler le cycle menstruel et apaiser les inconforts prémenstruels comme les crampes ou les tensions.",
    ecommerceArgument: "Pour un cycle plus harmonieux.",
  },
  {
    icon: <Droplets className="size-6" aria-hidden />,
    title: "Détox douce",
    description:
      "Stimule la fonction rénale, aide à lutter contre la rétention d&apos;eau et protège naturellement le foie.",
    ecommerceArgument: "Un excellent détoxifiant naturel pour le corps.",
  },
  {
    icon: <LineChart className="size-6" aria-hidden />,
    title: "Équilibre glycémique",
    description:
      "Connue pour ses propriétés hypoglycémiantes qui contribuent à stabiliser le taux de sucre dans le sang.",
    ecommerceArgument: "Aide à l&apos;équilibre du taux de sucre.",
  },
];

export default function Features() {
  return (
    <section id="bienfaits" className="bg-[#f6ede1] py-20 text-[#2f2015] dark:bg-[#1a120c] dark:text-[#f5ecdf]">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-[0.1em] text-[#3c281b] lg:text-5xl dark:text-[#f5ecdf]">
            Les bienfaits populaires de la Rose de Jéricho
          </h2>
          <p className="mt-4 text-[#6f533c] dark:text-[#f0dfcd]/80">
            Depuis des siècles, Chajarat Maryam accompagne la fertilité, l&apos;équilibre féminin et la détoxification grâce à son eau d&apos;infusion généreuse.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-12 grid max-w-xl gap-6 md:mt-16 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group border-[#e4d2c0] bg-[#fbf6f0]/70 text-center shadow-[#d5bfa6]/20 dark:border-[#3b291d] dark:bg-[#24160e]/80">
              <CardHeader className="pb-4">
                <CardDecorator>{feature.icon}</CardDecorator>
                <h3 className="mt-6 font-medium tracking-[0.2em] text-[#3c281b] uppercase dark:text-[#f5ecdf]">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-[#6f533c] dark:text-[#f0dfcd]/80">
                  {feature.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#b98c5f] dark:text-[#f5e5d4]">
                  {feature.ecommerceArgument}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-32 rounded-full border border-[#e4d2c0] bg-[#fdf8f1]/80 duration-200 shadow-[inset_0_0_0_1px_rgba(217,194,165,0.4)] group-hover:shadow-[0_20px_60px_rgba(153,118,82,0.18)] dark:border-[#3b291d] dark:bg-[#1d120b]/80 dark:group-hover:shadow-[0_20px_60px_rgba(33,19,9,0.6)]">
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_transparent_70%)]" aria-hidden />
    <div className="bg-[#ead7c4] absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8c1a8] text-[#4a3322] shadow-sm dark:bg-[#3b291d] dark:border-[#2a1b12] dark:text-[#f5ecdf]">
      {children}
    </div>
  </div>
);
