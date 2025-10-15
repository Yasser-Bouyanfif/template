import Image from "next/image";

export default function ContentSection() {
  return (
    <section id="origines" className="bg-white py-24 text-[#1f140d]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[3rem] border border-[#efe6d9] bg-[#fffbf4] p-10 shadow-[0_40px_90px_rgba(81,60,40,0.12)]">
            <Image
              src="/images/rose-dormant.svg"
              alt="Rose de Jericho en dormance"
              width={540}
              height={540}
              className="w-full"
            />
            <div className="absolute left-8 top-8 rounded-full bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#8c7763] ring-1 ring-[#efe6d9]">
              Rituel saharien
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-[#f5ede1] px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#8c7763]">
                Origines
              </span>
              <h2 className="font-serif text-3xl tracking-[0.1em] text-[#2c1f16] md:text-4xl">
                Une plante nomade, gardienne de vos intentions
              </h2>
              <p className="text-base leading-relaxed text-[#5f4d3c]">
                Née dans le désert, la Rose de Jericho se replie pour survivre aux tempêtes puis renaît au contact de l&apos;eau. Nous honorons ce cycle en vous offrant des rituels sobres, pensés pour embellir vos espaces blancs et apaiser vos journées.
              </p>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-[2rem] border border-[#efe6d9] bg-[#fffbf4] p-6 text-center">
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c7763]">Temps de réveil</dt>
                <dd className="mt-2 text-3xl font-serif text-[#2c1f16]">3 h</dd>
                <p className="mt-1 text-xs text-[#5f4d3c]">Pour un déploiement complet</p>
              </div>
              <div className="rounded-[2rem] border border-[#efe6d9] bg-[#fffbf4] p-6 text-center">
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c7763]">Origine</dt>
                <dd className="mt-2 text-3xl font-serif text-[#2c1f16]">100% bio</dd>
                <p className="mt-1 text-xs text-[#5f4d3c]">Récoltée dans les plaines sahariennes</p>
              </div>
              <div className="rounded-[2rem] border border-[#efe6d9] bg-[#fffbf4] p-6 text-center">
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c7763]">Plantes soignées</dt>
                <dd className="mt-2 text-3xl font-serif text-[#2c1f16]">103k</dd>
                <p className="mt-1 text-xs text-[#5f4d3c]">Depuis la création du studio</p>
              </div>
            </dl>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8c7763]">
              Disponible en coffret minimaliste ou en rituel guidé à domicile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
