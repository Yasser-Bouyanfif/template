import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Droplet, Leaf, Timer } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section
      id="benefits"
      className="bg-[color:var(--beige-soft)] py-16 md:py-32 dark:bg-transparent"
    >
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Une plante, mille possibilités
          </h2>
          <p className="mt-4">
            Des bienfaits hydratants et protecteurs réunis dans un rituel
            simple, inspiré de la tradition nord-africaine.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Droplet className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Hydratation intense</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                La Rose de Jéricho relâche progressivement ses minéraux pour
                apaiser les peaux sèches et redonner de l’éclat au teint.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Leaf className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Rituel végétal</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Une approche minimaliste : eau tiède, patience et intention
                pour révéler son énergie bienfaisante.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Timer className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Réutilisable</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Alternez phases de repos et de réveil pour profiter de la plante
                toute l’année, sans l’épuiser.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
