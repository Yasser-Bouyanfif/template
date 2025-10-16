import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section id="contact" className="bg-[#fafafa] py-24 text-[#1a1a1a] dark:bg-[#171717]">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#e5e5e5] bg-white px-8 py-20 text-center shadow-xl dark:border-[#262626] dark:bg-[#0a0a0a]">
        <h2 className="font-serif text-4xl font-bold text-[#1a1a1a] lg:text-5xl dark:text-white">
          Faites entrer la renaissance chez vous
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#525252] dark:text-[#a3a3a3]">
          Offrez-vous la magie de la Rose de Jéricho : une plante qui se réveille, une eau infusée de bienfaits et un rituel ancestral pour prendre soin de vous et des vôtres.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-[#b98c5f] to-[#a6784d] px-10 py-6 text-base font-semibold tracking-wider uppercase text-white shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Link href="mailto:contact@chajaratmariam.com">Commander ma Rose</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[#e5e5e5] px-10 py-6 text-base font-semibold text-[#1a1a1a] hover:bg-[#fafafa] transition-all dark:border-[#262626] dark:text-white dark:hover:bg-[#171717]">
            <Link href="#rituel">Voir le rituel</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
