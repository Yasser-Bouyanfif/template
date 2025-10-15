import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section id="contact" className="bg-gradient-to-r from-[#fffdf9] via-[#fdf7f0] to-[#fffdf9] py-20 text-[#2b231a]">
      <div className="mx-auto max-w-4xl rounded-[3rem] border border-[#f1e6d9] bg-white/85 px-8 py-16 text-center shadow-[0_40px_100px_rgba(228,206,182,0.35)] backdrop-blur-md">
        <h2 className="font-serif text-4xl font-semibold text-[#2b231a] lg:text-5xl">
          Une renaissance à offrir ou à s&apos;offrir
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#7d6752]">
          Laissez-nous imaginer un rituel de Rose de Jericho pour votre prochain événement, un cadeau symbolique ou une pause méditative à domicile.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-[#d2b99c] px-8 py-6 text-base font-medium tracking-[0.2em] uppercase text-[#2b231a] hover:bg-[#c8ab8b] hover:text-[#1f1812]">
            <Link href="mailto:contact@chajaratmariam.com">Écrire au studio</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[#e8d6c4] px-8 py-6 text-base font-medium text-[#7d6752] hover:border-[#d2b99c] hover:text-[#2b231a]">
            <Link href="#rituels">Voir les rituels</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
