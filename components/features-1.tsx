import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Droplets, Leaf, Sparkles } from "lucide-react";
import { ReactNode } from "react";

const features = [
  {
    icon: <Sparkles className="size-6" aria-hidden />,
    title: "Rituels essentiels",
    description:
      "Des gestes précis, un bol épuré et une eau claire pour réveiller la Rose de Jericho avec simplicité.",
  },
  {
    icon: <Droplets className="size-6" aria-hidden />,
    title: "Eau lumineuse",
    description:
      "Nous utilisons une eau filtrée enrichie de minéraux doux pour accompagner l&apos;ouverture naturelle de la plante.",
  },
  {
    icon: <Leaf className="size-6" aria-hidden />,
    title: "Décor léger",
    description:
      "Un univers crème, fibres naturelles et lignes graphiques pour laisser toute la place à la symbolique végétale.",
  },
];

export default function Features() {
  return (
    <section id="bienfaits" className="bg-white py-20 text-[#2d2924]">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-[0.1em] text-[#1f1d19] lg:text-5xl">
            Les bienfaits tout en légèreté
          </h2>
          <p className="mt-4 text-[#4c4a43]">
            Quelques intentions simples pour profiter de la Rose de Jericho dans un univers écrémé et lumineux.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-12 grid max-w-sm gap-6 md:mt-16">
          {features.map((feature) => (
            <Card key={feature.title} className="group border-[#ebe7dd] bg-[#fefdf8] text-center shadow-none transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(211,211,197,0.35)]">
              <CardHeader className="pb-3">
                <CardDecorator>{feature.icon}</CardDecorator>
                <h3 className="mt-6 font-medium tracking-[0.2em] text-[#2d2924] uppercase">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-[#4c4a43]">
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
  <div className="relative mx-auto size-28 rounded-full border border-[#ede9df] bg-white/80 duration-200 shadow-[inset_0_0_0_1px_rgba(230,224,210,0.45)] group-hover:shadow-[0_18px_50px_rgba(210,210,196,0.45)]">
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.95)_0%,_transparent_70%)]" aria-hidden />
    <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e0dacd] bg-[#f5f1e7] text-[#6f8a6a] shadow-sm">
      {children}
    </div>
  </div>
);
