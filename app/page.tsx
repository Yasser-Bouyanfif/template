export default function Page() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl flex-col gap-12 px-6 py-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">Bienvenue sur votre future boutique</h1>
        <p className="text-base leading-relaxed text-gray-700">
          Cette page d&apos;accueil est volontairement minimaliste afin de servir de point de
          départ à votre prochain projet e-commerce. Conservez l&apos;en-tête existant et
          construisez votre propre expérience en remplaçant progressivement ces sections.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Produits à venir</h2>
        <p className="text-base leading-relaxed text-gray-700">
          Ajoutez ici vos catégories, vos fiches produit ou toute autre présentation que
          vous souhaitez proposer à vos clients. Cette zone est libre et n&apos;attend plus que
          vos idées.
        </p>
      </section>

      <section id="contact" className="space-y-3">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-base leading-relaxed text-gray-700">
          Précisez vos informations de contact ou intégrez un formulaire pour rester en
          relation avec vos visiteurs. Pour l&apos;instant, ce simple texte sert de repère en
          attendant votre propre intégration.
        </p>
      </section>
    </div>
  );
}