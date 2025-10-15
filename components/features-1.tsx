import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Droplets, Leaf, Sparkles } from "lucide-react";
import { ReactNode } from "react";

const features = [
  {
    icon: <Sparkles className="size-6" aria-hidden />,
    title: "Rituels personnalisés",
    description:
      "Chaque cérémonie est préparée sur mesure avec des intentions choisies, des infusions délicates et un cadre sensoriel apaisant.",
  },
  {
    icon: <Droplets className="size-6" aria-hidden />,
    title: "Eau de renaissance",
    description:
      "Une eau purifiée enrichie en minéraux naturels accompagne la réhydratation lente de la plante pour révéler toute sa symbolique.",
  },
  {
    icon: <Leaf className="size-6" aria-hidden />,
    title: "Artisanat végétal",
    description:
      "Nos arrangements s&apos;accordent aux intérieurs modernes : matières nobles, palette beige écrémée et lignes épurées.",
  },
];

export default function Features() {
  return (
    <section id="bienfaits" className="bg-[#fffcf7] py-20 text-[#2b231a]">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-[0.1em] text-[#2b231a] lg:text-5xl">
            Les bienfaits de CHAJARATMARIAM
          </h2>
          <p className="mt-4 text-[#7d6752]">
            Une expérience sensorielle complète pour ralentir, respirer et laisser la Rose de Jericho offrir son énergie de protection.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-12 grid max-w-sm gap-6 md:mt-16">
          {features.map((feature) => (
            <Card key={feature.title} className="group border-[#f1e6d9] bg-white/80 text-center shadow-[0_20px_50px_rgba(230,212,191,0.35)]">
              <CardHeader className="pb-3">
                <CardDecorator>{feature.icon}</CardDecorator>
                <h3 className="mt-6 font-medium tracking-[0.2em] text-[#2f271e] uppercase">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-[#7d6752]">
                  {feature.description}
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
  <div className="relative mx-auto size-32 rounded-full border border-[#f2e7db] bg-[#fffaf3] duration-200 shadow-[inset_0_0_0_1px_rgba(232,215,196,0.5)] group-hover:shadow-[0_20px_60px_rgba(228,206,182,0.45)]">
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.95)_0%,_transparent_70%)]" aria-hidden />
    <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7d1bb] bg-[#f4e5d3] text-[#2f271e] shadow-sm">
      {children}
    </div>
  </div>
);
