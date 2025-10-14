import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-[40px] border border-[color:var(--beige-muted)] bg-[color:var(--beige-soft)]/80 p-10 text-center shadow-[0_40px_90px_rgba(130,105,75,0.16)]">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Prêt·e à accueillir la Rose de Jéricho chez vous ?
          </h2>
          <p className="mt-5 text-base text-foreground/80">
            Contactez notre équipe pour des conseils personnalisés ou commandez directement votre coffret CHAJARATMARIAM.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="px-6">
              <Link href="#boutique">
                <span>Commander maintenant</span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[color:var(--beige-muted)] text-foreground"
            >
              <Link href="mailto:bonjour@chajaratmariam.com">
                <span>Écrire à la maison</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
