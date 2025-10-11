export default function Page() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Template e-commerce minimal</h1>
        <p className="mt-4 text-slate-600">
          Cette page d&apos;accueil a été simplifiée pour servir de base à votre futur site e-commerce.
          Conservez uniquement les éléments indispensables et construisez vos propres sections au fur et à mesure.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-medium text-slate-900">Commencez ici</h2>
          <p className="mt-2 text-sm text-slate-600">
            Ajoutez vos produits, configurez votre catalogue et personnalisez l&apos;expérience utilisateur selon vos besoins.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-medium text-slate-900">Personnalisation</h2>
          <p className="mt-2 text-sm text-slate-600">
            Vous pouvez étendre cette base avec vos propres composants, styles et contenus quand vous serez prêt.
          </p>
        </div>
      </section>
    </div>
  );
}
