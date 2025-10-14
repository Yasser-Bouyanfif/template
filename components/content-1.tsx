import Image from "next/image";

export default function ContentSection() {
  return (
    <section id="rituals" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-10 px-6 md:space-y-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-4xl font-semibold lg:text-5xl">
            Le rituel CHAJARATMARIAM pas à pas
          </h2>
          <p className="max-w-md text-sm text-foreground/70">
            Un guide simple pour réveiller la plante de façon respectueuse et profiter de ses vertus dans votre espace de soin ou de méditation.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <figure className="rounded-[32px] border border-[color:var(--beige-muted)] bg-[color:var(--beige-soft)]/80 p-6 shadow-[0_18px_60px_rgba(141,110,78,0.18)]">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="/images/rose-dormant.svg"
                  alt="Rose de Jéricho en dormance"
                  width={560}
                  height={560}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-sm text-foreground/70">
                <span className="font-semibold text-foreground">1. Réveil en douceur.</span> Déposez la rose sèche dans une coupelle d’eau à température ambiante.
              </figcaption>
            </figure>
            <figure className="rounded-[32px] border border-[color:var(--beige-muted)] bg-background p-6 shadow-[0_18px_60px_rgba(141,110,78,0.16)]">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="/images/rose-bloom.svg"
                  alt="Rose de Jéricho en floraison"
                  width={560}
                  height={560}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-sm text-foreground/70">
                <span className="font-semibold text-foreground">2. Épanouissement.</span> Renouvelez l’eau après 30 minutes et observez sa renaissance progressive.
              </figcaption>
            </figure>
            <figure className="sm:col-span-2 rounded-[32px] border border-[color:var(--beige-muted)] bg-background p-6 shadow-[0_18px_60px_rgba(141,110,78,0.16)]">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="/images/rose-pouch.svg"
                  alt="Packaging Chajaratmariam"
                  width={960}
                  height={640}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-sm text-foreground/70">
                <span className="font-semibold text-foreground">3. Préservation.</span> Après 2 à 3 jours, laissez la rose sécher sur un linge propre pour la conserver.
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-4 rounded-3xl border border-[color:var(--beige-muted)] bg-[color:var(--beige-soft)]/60 p-8">
              <h3 className="text-lg font-semibold text-foreground">Conseils d’entretien</h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>Utilisez de l’eau filtrée ou faiblement minéralisée pour préserver ses propriétés.</li>
                <li>Ajoutez quelques gouttes d’eau florale pour un rituel sensoriel complet.</li>
                <li>Laissez toujours la plante sécher complètement entre deux réveils.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[color:var(--beige-muted)] bg-background p-8 shadow-[0_20px_60px_rgba(143,115,84,0.14)]">
              <blockquote className="space-y-4 text-pretty text-sm text-foreground/80">
                <p>
                  « Je redécouvre ma routine bien-être. La rose se déploie en quelques heures et diffuse une énergie apaisante, parfaite pour mes soins du visage. »
                </p>
                <footer className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                  <span>Yasmina</span>
                  <span className="size-1 rounded-full bg-foreground/20"></span>
                  <span>Créatrice de contenus</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
