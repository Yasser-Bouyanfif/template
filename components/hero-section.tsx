import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/hero8-header";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <section
        id="rituels"
        className="relative isolate overflow-hidden bg-white text-[#1f1b16]"
      >
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_#f4f0e7,_transparent_65%)] lg:block" aria-hidden />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 pb-24 pt-40 lg:flex-row lg:items-end lg:pt-48">
          <div className="flex-1 space-y-8 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e6e0d4] bg-white px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#6f7b6f]">
              Rose de Jéricho
            </span>
            <h1 className="font-serif text-4xl leading-tight text-[#1b211c] md:text-5xl lg:text-6xl">
              Les bienfaits essentiels de Chajarat Maryam
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#5f655f]">
              Offrez-vous une parenthèse lumineuse avec notre rituel d&apos;éveil. Une plante rare, de l&apos;eau claire et un geste apaisant pour reconnecter votre intérieur à la nature.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#2f6d5c] px-8 py-6 text-base font-medium tracking-[0.2em] uppercase text-white hover:bg-[#275a4c]"
              >
                <Link href="#bienfaits">Découvrir les bienfaits</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full border border-transparent px-8 py-6 text-base font-medium text-[#2f6d5c] hover:border-[#cfd7cf] hover:bg-[#f4f7f4]"
              >
                <Link href="#contact">Nous contacter</Link>
              </Button>
            </div>
            <dl className="grid w-full gap-6 text-sm sm:grid-cols-3">
              {[
                { label: "Rituel", value: "15 minutes" },
                { label: "Origine", value: "Désert Marocain" },
                { label: "Client.e.s", value: "103K" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-[#ebe6dd] bg-white p-4 shadow-sm">
                  <dt className="uppercase tracking-[0.3em] text-[#a0a7a0]">{item.label}</dt>
                  <dd className="mt-2 font-serif text-2xl text-[#1f1b16]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[3rem] border border-[#ebe6dd] bg-white shadow-[0_40px_80px_rgba(31,29,24,0.08)]">
              <Image
                src="/images/rose-packaging.svg"
                alt="Rose de Jéricho"
                width={640}
                height={640}
                priority
                className="w-full bg-[#f7f4ed]"
              />
            </div>
            <div className="absolute -bottom-8 -left-10 hidden w-40 rounded-[2.5rem] border border-[#ebe6dd] bg-white p-4 shadow-xl lg:block">
              <Image src="/images/rose-dormant.svg" alt="Rose de Jéricho sèche" width={220} height={220} />
            </div>
            <div className="absolute -top-6 -right-12 hidden w-44 rounded-[2.5rem] border border-[#ebe6dd] bg-white p-4 shadow-xl lg:block">
              <Image src="/images/rose-awakened.svg" alt="Rose de Jéricho éveillée" width={220} height={220} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
