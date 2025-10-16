import Image from "next/image";

export default function Presentation() {
  return (
    <section id="presentation" className="bg-[#faf7f2] text-[#2f2015] dark:bg-[#120a06] dark:text-[#f5ecdf]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl text-[#2f2015] dark:text-[#f6ecde]">
              Chajarat Maryam — la Rose de Jéricho contemporaine
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#5a3f2c] dark:text-[#f0dfcd]/85">
              Symbole de renaissance, cette plante du Sahara se réveille au contact de l’eau. Nous
              imaginons des rituels modernes et minimalistes pour vous reconnecter au renouveau,
              à la protection et au bien-être.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-[#6f533c] dark:text-[#f0dfcd]/80">
              <span className="rounded-full border border-[#e6d6c6] px-3 py-1 bg-white/70 dark:border-[#3a271a] dark:bg-[#1d120b]/70">Renaissance</span>
              <span className="rounded-full border border-[#e6d6c6] px-3 py-1 bg-white/70 dark:border-[#3a271a] dark:bg-[#1d120b]/70">Rituel</span>
              <span className="rounded-full border border-[#e6d6c6] px-3 py-1 bg-white/70 dark:border-[#3a271a] dark:bg-[#1d120b]/70">Savoir-faire</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#e6d6c6] bg-white/80 shadow-[0_30px_80px_rgba(153,118,82,0.14)] dark:border-[#3a271a] dark:bg-[#1d120b]/85">
              <Image
                src="/rose.png"
                alt="Rose de Jéricho ouverte"
                width={720}
                height={720}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
