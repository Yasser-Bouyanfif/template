import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Baby, CalendarDays, Droplets, Heart, Leaf, Shield } from "lucide-react";

const items = [
  {
    icon: <Heart className="size-6" aria-hidden />,
    title: "Renaissance & vitalité",
    description:
      "Une infusion traditionnelle pensée pour soutenir le renouveau du corps et de l'esprit.",
  },
  {
    icon: <Baby className="size-6" aria-hidden />,
    title: "Accompagnement féminin",
    description:
      "Appréciée dans les rituels liés à la fertilité, à la fin de grossesse et au cycle.",
  },
  {
    icon: <CalendarDays className="size-6" aria-hidden />,
    title: "Cycle harmonisé",
    description:
      "Célèbre pour aider à retrouver un rythme plus serein au fil des mois.",
  },
  {
    icon: <Droplets className="size-6" aria-hidden />,
    title: "Détox douce",
    description:
      "Réhydrate, aide à drainer et accompagne une sensation de légèreté.",
  },
  {
    icon: <Leaf className="size-6" aria-hidden />,
    title: "Rituel naturel",
    description:
      "Un geste simple, sans artifices, au plus près du végétal.",
  },
  {
    icon: <Shield className="size-6" aria-hidden />,
    title: "Protection symbolique",
    description:
      "Un talisman vivant ancré dans les traditions du Sahara.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#f6ede1] py-20 text-[#2f2015] dark:bg-[#1a120c] dark:text-[#f5ecdf]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold tracking-[0.02em] text-[#3c281b] lg:text-5xl dark:text-[#f5ecdf]">
            Bienfaits de la Rose de Jéricho
          </h2>
          <p className="mt-4 text-[#6f533c] dark:text-[#f0dfcd]/80">
            Héritée des déserts, cette plante réveille des rituels simples qui accompagnent votre quotidien.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="group border-[#e4d2c0] bg-[#fbf6f0]/70 text-center shadow-[#d5bfa6]/20 dark:border-[#3b291d] dark:bg-[#24160e]/80">
              <CardHeader className="pb-4">
                <div className="relative mx-auto size-28 rounded-full border border-[#e4d2c0] bg-[#fdf8f1]/80 shadow-[inset_0_0_0_1px_rgba(217,194,165,0.4)] dark:border-[#3b291d] dark:bg-[#1d120b]/80">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_transparent_70%)]" aria-hidden />
                  <div className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8c1a8] bg-[#ead7c4] text-[#4a3322] shadow-sm dark:bg-[#3b291d] dark:border-[#2a1b12] dark:text-[#f5ecdf]">
                    {it.icon}
                  </div>
                </div>
                <h3 className="mt-6 font-medium tracking-[0.12em] text-[#3c281b] uppercase dark:text-[#f5ecdf]">
                  {it.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-[#5a3f2c] dark:text-[#f0dfcd]/80">
                  {it.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
