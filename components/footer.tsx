import { Logo } from "@/components/logo";
import Link from "next/link";

const links = [
  {
    title: "Rituels",
    href: "#rituels",
  },
  {
    title: "Bienfaits",
    href: "#bienfaits",
  },
  {
    title: "Origines",
    href: "#origines",
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#fdfbf7] py-20 text-[#2d2924]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Link href="/" aria-label="Retour à l&apos;accueil" className="block w-fit">
              <Logo />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#4c4a43]">
              Studio botanique dédié à la Rose de Jericho. Nous imaginons des rituels essentiels, des objets de soin et des expériences immersives dans une palette blanche et écrémée.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[#6f8a6a]">
              <span className="rounded-full border border-[#ebe6da] px-4 py-2">Casablanca</span>
              <span className="rounded-full border border-[#ebe6da] px-4 py-2">Paris</span>
              <span className="rounded-full border border-[#ebe6da] px-4 py-2">Marrakech</span>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:items-end">
            <nav className="grid gap-3 text-sm">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[#4c4a43] transition-colors hover:text-[#1f1d19]"
                >
                  <span>{link.title}</span>
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap gap-4 text-sm text-[#4c4a43]">
              <Link href="mailto:contact@chajaratmariam.com" className="hover:text-[#1f1d19]">
                contact@chajaratmariam.com
              </Link>
              <Link href="tel:+212600000000" className="hover:text-[#1f1d19]">
                +212 6 00 00 00 00
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#ede8dc] pt-8 text-xs text-[#4c4a43]">
          <span>© {new Date().getFullYear()} CHAJARATMARIAM — Studio Rose de Jericho</span>
          <div className="flex gap-3">
            <Link href="#" className="hover:text-[#1f1d19]">
              Instagram
            </Link>
            <span className="text-[#d7d2c5]">•</span>
            <Link href="#" className="hover:text-[#1f1d19]">
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
