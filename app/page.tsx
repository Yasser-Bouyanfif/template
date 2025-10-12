export default function Page() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-amber-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100/70 px-4 py-1 text-sm font-medium text-emerald-900">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              Rose de Jéricho vivante
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-emerald-950 sm:text-5xl">
              ChajaratMariam – la plante miraculeuse qui renaît avec chaque goutte d&apos;eau
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-emerald-900/80">
              Offrez à vos clients un symbole de renouveau. Nos roses de Jéricho sont
              soigneusement sélectionnées pour leur capacité spectaculaire à s&apos;ouvrir et à
              reverdir. Une expérience botanique et spirituelle qui crée un émerveillement
              immédiat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
              >
                Découvrir la collection
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 px-6 py-3 text-base font-semibold text-emerald-900 transition hover:border-emerald-400 hover:text-emerald-700"
              >
                Voir l&apos;expérience
              </a>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {["Renaissance en 3 heures", "Origine sélectionnée", "Séchage réutilisable"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-emerald-100/60 bg-white/70 p-5 text-center shadow-sm shadow-emerald-900/5"
                  >
                    <dt className="text-sm font-medium uppercase tracking-wide text-emerald-600">
                      Promesse
                    </dt>
                    <dd className="mt-2 text-base font-semibold text-emerald-900">{item}</dd>
                  </div>
                ),
              )}
            </dl>
          </div>
          <div className="relative isolate rounded-[2.5rem] bg-gradient-to-br from-emerald-400 via-emerald-200 to-amber-200 p-1 shadow-2xl shadow-emerald-900/20">
            <div className="rounded-[2.3rem] bg-white/80 p-8 text-emerald-900 backdrop-blur">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                  Rituel de renaissance
                </p>
                <p className="text-2xl font-medium text-emerald-950">
                  Placez la rose dans un bol d&apos;eau, observez les premières feuilles
                  s&apos;ouvrir en quelques minutes et laissez la magie opérer pendant plusieurs
                  cycles.
                </p>
                <ul className="space-y-3 text-sm text-emerald-900/80">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      1
                    </span>
                    Immerger la rose dans de l&apos;eau tempérée.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      2
                    </span>
                    Profiter de son éclosion spectaculaire en 3 à 4 heures.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      3
                    </span>
                    Laisser sécher la plante sur un linge pour la conserver.
                  </li>
                </ul>
                <p className="text-sm text-emerald-700/80">
                  Réutilisable à l&apos;infini, un symbole de protection et de prospérité dans les
                  traditions du Moyen-Orient.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -top-10 right-10 h-32 w-32 rounded-full bg-amber-200/70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 left-6 h-28 w-28 rounded-full bg-emerald-400/40 blur-3xl" />
          </div>
        </section>

        <section id="experience" className="space-y-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-emerald-950 sm:text-4xl">
              Une expérience sensorielle pour votre clientèle
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-emerald-900/80">
              ChajaratMariam accompagne chacun de vos clients dans un voyage entre nature et
              spiritualité. De la boutique à l&apos;espace bien-être, la rose de Jéricho crée un
              moment de pause et de contemplation.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                title: "Beauté changeante",
                description:
                  "Chaque cycle de renaissance offre un spectacle visuel unique qui attire l&apos;œil dans votre espace de vente.",
              },
              {
                title: "Valeur symbolique",
                description:
                  "Associée aux traditions méditerranéennes, la rose transmet un message de protection, de prospérité et de nouvelles énergies.",
              },
              {
                title: "Facile à présenter",
                description:
                  "Un simple bol d&apos;eau suffit pour mettre en scène le produit et inviter vos visiteurs à revenir vivre l&apos;expérience.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/70 p-8 shadow-lg shadow-emerald-900/10"
              >
                <h3 className="text-xl font-semibold text-emerald-900">{feature.title}</h3>
                <p className="text-base leading-relaxed text-emerald-900/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-3xl bg-emerald-950/90 p-10 text-white shadow-xl shadow-emerald-900/40">
            <h2 className="text-3xl font-semibold">Pourquoi ChajaratMariam ?</h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Nous travaillons directement avec des cueilleurs partenaires pour garantir une
              origine contrôlée et une qualité optimale. Chaque rose est séchée avec soin afin
              de préserver son cœur vivant, prêt à s&apos;ouvrir à nouveau.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden />
                Livraison suivie en France et en Europe.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden />
                Guides d&apos;entretien et packaging prêt à offrir.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden />
                Options de personnalisation pour concept stores et spas.
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl border border-emerald-100/80 bg-white/70 p-8 shadow-lg shadow-emerald-900/10">
              <h3 className="text-xl font-semibold text-emerald-900">Une plante qui raconte une histoire</h3>
              <p className="mt-3 text-base leading-relaxed text-emerald-900/80">
                La rose de Jéricho, aussi appelée &laquo; plante de la résurrection &raquo;, voyage
                depuis des siècles entre l&apos;Arabie, le Maghreb et l&apos;Europe. Chez
                ChajaratMariam, nous valorisons cette tradition en proposant des plantes
                authentiques et accompagnées de leur histoire.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100/80 bg-white/70 p-8 shadow-lg shadow-emerald-900/10">
              <h3 className="text-xl font-semibold text-emerald-900">Engagement durable</h3>
              <p className="mt-3 text-base leading-relaxed text-emerald-900/80">
                Chaque commande contribue au financement d&apos;initiatives locales pour la
                préservation des zones désertiques où pousse la plante. Nous limitons notre
                empreinte carbone en optimisant les transports et les emballages.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-100/80 bg-white/70 p-10 text-center shadow-xl shadow-emerald-900/10">
          <h2 className="text-3xl font-semibold text-emerald-950 sm:text-4xl">
            Prêt à faire fleurir votre boutique ?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-emerald-900/80">
            Invitez vos clients à vivre l&apos;éclosion de la rose de Jéricho. Contactez notre
            équipe pour une offre sur mesure ou explorez la boutique en ligne.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
            >
              Contacter ChajaratMariam
            </a>
            <a
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 px-6 py-3 text-base font-semibold text-emerald-900 transition hover:border-emerald-400 hover:text-emerald-700"
            >
              Accéder aux produits
            </a>
          </div>
        </section>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-emerald-200/70 via-emerald-50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-amber-100/50 via-white to-transparent" />
    </div>
  );
}
