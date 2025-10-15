import React from "react";
import Image from "next/image";

export default function StorySection() {
  return (
    <section
      id="origines"
      className="bg-white py-24 text-[#1f1b16]"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative order-last overflow-hidden rounded-[3rem] border border-[#ebe6dd] bg-[#f7f4ed] p-10 lg:order-first">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#f0f6f3] px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#2f6d5c]">
              Notre histoire
            </span>
            <h2 className="font-serif text-3xl text-[#1b211c] md:text-4xl">
              Une tradition transmise avec délicatesse
            </h2>
            <p className="text-base leading-relaxed text-[#5f655f]">
              Nous travaillons main dans la main avec des familles récoltantes pour préserver les rituels autour de la Rose de Jéricho. Chaque plante est cueillie avec respect, séchée naturellement puis expédiée depuis notre atelier.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#ebe6dd] bg-white p-5">
                <h3 className="text-sm uppercase tracking-[0.3em] text-[#7e8a7e]">Atelier</h3>
                <p className="mt-2 font-serif text-2xl text-[#1b211c]">Casablanca &amp; Marrakech</p>
              </div>
              <div className="rounded-3xl border border-[#ebe6dd] bg-white p-5">
                <h3 className="text-sm uppercase tracking-[0.3em] text-[#7e8a7e]">Expéditions</h3>
                <p className="mt-2 font-serif text-2xl text-[#1b211c]">Sous 48 heures</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative order-first flex items-center justify-center lg:order-last">
          <div className="relative w-full max-w-md overflow-hidden rounded-[3rem] border border-[#ebe6dd] bg-white shadow-[0_30px_80px_rgba(31,29,24,0.08)]">
            <Image
              src="/images/rose-awakened.svg"
              alt="Rose de Jéricho ouverte"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
          <div className="absolute -bottom-10 right-10 hidden rounded-[2rem] border border-[#ebe6dd] bg-white px-6 py-4 text-sm text-[#2f6d5c] shadow-lg md:block">
            100% biologique &amp; traçable
          </div>
        </div>
      </div>
    </section>
  );
}
