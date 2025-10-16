import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section id="contact" className="bg-gradient-to-r from-[#f9f1e7] via-[#f3e6d7] to-[#f9f1e7] py-20 text-[#2f2015] dark:from-[#1a110b] dark:via-[#22150d] dark:to-[#1a110b]">
      <div className="mx-auto max-w-4xl rounded-[3rem] border border-[#e2d2c2] bg-white/70 px-8 py-16 text-center shadow-[0_40px_100px_rgba(134,102,71,0.18)] backdrop-blur-md dark:border-[#3a271a] dark:bg-[#1d120b]/85">
        <h2 className="font-serif text-4xl font-semibold text-[#3c281b] lg:text-5xl dark:text-[#f6ecde]">
          Faites entrer la renaissance chez vous
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#5a3f2c] dark:text-[#f0dfcd]/80">
          Offrez-vous la magie de la Rose de Jéricho : une plante qui se réveille, une eau infusée de bienfaits et un rituel ancestral pour prendre soin de vous et des vôtres.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-[#b98c5f] px-8 py-6 text-base font-medium tracking-[0.2em] uppercase text-white hover:bg-[#a6784d]">
            <Link href="mailto:contact@chajaratmariam.com">Commander ma Rose</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[#d8c1a8] px-8 py-6 text-base font-medium text-[#6f533c] hover:text-[#2f2015] dark:border-[#3a271a] dark:text-[#f0dfcd]">
            <Link href="#rituel">Voir le rituel</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
