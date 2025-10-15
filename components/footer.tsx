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
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#fdfbf7] py-20 text-[#2d241c] dark:bg-[#120a05] dark:text-[#f5ecdf]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Link href="/" aria-label="Retour à l&apos;accueil" className="block w-fit">
              <Logo />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#5c5247] dark:text-[#f0dfcd]/80">
              Studio botanique dédié à la Rose de Jericho. Nous imaginons des rituels minimalistes, des objets de soin et des expériences immersives aux teintes crème.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[#8a7a67] dark:text-[#f0dfcd]">
              <span className="rounded-full border border-[#ece3d4] px-4 py-2 dark:border-[#3a271a]">Casablanca</span>
              <span className="rounded-full border border-[#ece3d4] px-4 py-2 dark:border-[#3a271a]">Paris</span>
              <span className="rounded-full border border-[#ece3d4] px-4 py-2 dark:border-[#3a271a]">Marrakech</span>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:items-end">
            <nav className="grid gap-3 text-sm">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[#5c5247] transition-colors hover:text-[#1f1a15] dark:text-[#f0dfcd]/80 dark:hover:text-[#f5ecdf]"
                >
                  <span>{link.title}</span>
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap gap-4 text-sm text-[#5c5247] dark:text-[#f0dfcd]/80">
              <Link href="mailto:contact@chajaratmariam.com" className="hover:text-[#1f1a15] dark:hover:text-[#f5ecdf]">
                contact@chajaratmariam.com
              </Link>
              <Link href="tel:+212600000000" className="hover:text-[#1f1a15] dark:hover:text-[#f5ecdf]">
                +212 6 00 00 00 00
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#eee4d6] pt-8 text-xs text-[#8a7a67] dark:border-[#3a271a] dark:text-[#f0dfcd]/70">
          <span>© {new Date().getFullYear()} CHAJARATMARIAM — Studio Rose de Jericho</span>
          <div className="flex gap-3">
            <Link href="#" className="hover:text-[#1f1a15] dark:hover:text-[#f5ecdf]">
              Instagram
            </Link>
            <span className="text-[#d6c4b0]">•</span>
            <Link href="#" className="hover:text-[#1f1a15] dark:hover:text-[#f5ecdf]">
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
