const navigation = [
  { label: "Nos roses", href: "#roses" },
  { label: "Rituel", href: "#rituel" },
  { label: "Bienfaits", href: "#bienfaits" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  {
    title: "Rituel ancestral",
    description:
      "Chaque Rose de Jéricho est récoltée avec soin et accompagne vos moments de prière, de bien-être ou de méditation.",
  },
  {
    title: "Réutilisable à l&apos;infini",
    description:
      "Elle s&apos;assoupit et renaît au contact de l&apos;eau, prête à vous émerveiller autant de fois que vous le souhaitez.",
  },
  {
    title: "Expédition rapide",
    description:
      "Nous préparons vos commandes sous 24 heures pour que votre rituel commence sans attendre.",
  },
];

const steps = [
  {
    title: "Réveillez la rose",
    description:
      "Déposez délicatement votre Rose de Jéricho dans un bol et recouvrez-la d&apos;eau à température ambiante.",
  },
  {
    title: "Laissez-la s&apos;ouvrir",
    description:
      "Patientez quelques heures : la rose se déploie progressivement, libérant ses volutes végétales.",
  },
  {
    title: "Recommencez à l&apos;infini",
    description:
      "Laissez-la sécher plusieurs jours pour qu&apos;elle s&apos;enroule de nouveau, prête pour un prochain éveil.",
  },
];

const faqs = [
  {
    question: "D&apos;où proviennent vos roses de Jéricho ?",
    answer:
      "Nos roses sont sélectionnées auprès de partenaires de confiance établis au Moyen-Orient et contrôlées avant chaque expédition.",
  },
  {
    question: "Combien de temps la rose reste-t-elle ouverte ?",
    answer:
      "En restant immergée, elle conserve sa forme déployée pendant plusieurs jours. Pour la préserver, laissez-la sécher après vos rituels.",
  },
  {
    question: "Proposez-vous des coffrets cadeaux ?",
    answer:
      "Oui, nous préparons des coffrets personnalisés avec carte et instructions pour offrir une expérience complète.",
  },
];

function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200 via-amber-100 to-transparent opacity-70 blur-3xl" />
      <div className="absolute left-[5%] top-1/3 h-[24rem] w-[24rem] rounded-full bg-gradient-to-br from-emerald-300/60 via-teal-200/40 to-transparent opacity-60 blur-3xl" />
      <div className="absolute right-[2%] top-1/4 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-amber-200/80 via-rose-100/60 to-transparent opacity-70 blur-3xl" />
    </div>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-white">
      <Background />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-16 md:pt-24">
        <header className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-white/70 p-8 backdrop-blur-md md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
              ChajaratMariam
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-gray-900 md:text-5xl">
              Réveillez la magie de la Rose de Jéricho
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-700">
              Offrez-vous un rituel végétal millénaire : nos roses authentiques se
              déploient majestueusement au contact de l&apos;eau et apportent une
              énergie sereine à votre intérieur.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-emerald-200 bg-white px-5 py-2 text-sm font-medium text-emerald-700 transition hover:border-emerald-400 hover:text-emerald-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]" id="roses">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
              Artisanat végétal
            </p>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              Une fleur qui renaît à chaque rituel
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Chaque Rose de Jéricho ChajaratMariam est soigneusement sélectionnée
              pour sa capacité à se réhydrater en quelques heures. Livrée avec des
              instructions claires, elle s&apos;épanouit en volutes végétales qui
              subliment vos espaces sacrés, vos moments de prière ou votre
              décoration naturelle.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-emerald-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-200/40 via-white to-transparent blur-2xl" />
            <div className="relative h-full rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-lg backdrop-blur">
              <div className="flex h-full flex-col justify-between gap-8 text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
                    coffret signature
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-gray-900">
                    Rose de Jéricho &amp; rituel d&apos;activation
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700">
                    Recevez votre rose accompagnée d&apos;un support en terre cuite et
                    d&apos;une fiche illustrée pour guider vos premiers pas.
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Rose authentique séchée naturellement</p>
                  <p>• Support artisanal</p>
                  <p>• Notice illustrée</p>
                  <p>• Expédition offerte dès 60 €</p>
                </div>
                <a
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700"
                >
                  Découvrir la boutique
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="rituel"
          className="grid gap-8 rounded-3xl border border-emerald-100 bg-white/80 p-10 shadow-md backdrop-blur md:grid-cols-3"
        >
          <div className="md:col-span-1">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
              Rituel d&apos;activation
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-900">
              Transformez l&apos;eau en énergie végétale
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Un rituel simple à intégrer à vos pratiques spirituelles ou
              méditatives. Chaque étape vous connecte à un geste ancestral de
              renaissance et de purification.
            </p>
          </div>
          <div className="grid gap-6 md:col-span-2 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="bienfaits" className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-md backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
              Bienfaits
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-900">
              Une présence apaisante pour vos espaces
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700">
              <li>
                <span className="font-semibold text-emerald-800">Purification :</span>{' '}
                absorbe les énergies stagnantes et invite à la sérénité.
              </li>
              <li>
                <span className="font-semibold text-emerald-800">Intention :</span>{' '}
                un rituel idéal pour formuler vos voeux, prières et méditations.
              </li>
              <li>
                <span className="font-semibold text-emerald-800">Décoration :</span>{' '}
                une touche végétale singulière qui se métamorphose sous vos yeux.
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-600">
                Témoignage
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                &ldquo;Une expérience sensorielle unique. Voir la rose se déployer est un
                moment suspendu que je partage désormais avec mes proches.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-900">
                Samira, cliente ChajaratMariam
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-600">
                Astuce
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Ajoutez quelques gouttes d&apos;eau de fleur d&apos;oranger ou de rose dans
                votre bol pour enrichir votre rituel d&apos;une douce fragrance.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur md:col-span-2">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-600">
                Engagement
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                ChajaratMariam s&apos;engage à soutenir les communautés locales avec
                lesquelles nous collaborons et à privilégier des emballages
                recyclables pour chaque commande.
              </p>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="rounded-3xl border border-emerald-100 bg-white/80 p-10 shadow-md backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900">
            Vos questions les plus fréquentes
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-emerald-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-emerald-100 bg-white/80 p-10 text-center shadow-lg backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
            Rejoignez le cercle ChajaratMariam
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900">
            Recevez nos conseils de rituel et nos offres exclusives
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Inscrivez-vous à notre lettre d&apos;inspiration pour découvrir de nouveaux
            rituels, des offres limitées et l&apos;histoire de cette fleur mythique.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="w-full rounded-full border border-emerald-200 bg-white/90 px-5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700"
            >
              Je m&apos;inscris
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-500">
            En vous inscrivant, vous acceptez de recevoir des actualités de
            ChajaratMariam. Vous pouvez vous désinscrire à tout moment.
          </p>
        </section>
      </div>
    </div>
  );
}
