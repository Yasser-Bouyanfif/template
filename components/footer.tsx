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
    <footer className="bg-[#f7f4ed] py-16 text-[#1f1b16]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Link href="/" aria-label="Retour à l&apos;accueil" className="block w-fit">
              <Logo />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#5f655f]">
              Studio botanique dédié à la Rose de Jéricho. Une approche épurée, des gestes sincères et des matières lumineuses pour un rituel qui apaise.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[#7e8a7e]">
              <span className="rounded-full border border-[#e5e1d8] px-4 py-2">Casablanca</span>
              <span className="rounded-full border border-[#e5e1d8] px-4 py-2">Paris</span>
              <span className="rounded-full border border-[#e5e1d8] px-4 py-2">Marrakech</span>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:items-end">
            <nav className="grid gap-3 text-sm">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[#5f655f] transition-colors hover:text-[#1f1b16]"
                >
                  <span>{link.title}</span>
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap gap-4 text-sm text-[#5f655f]">
              <Link href="mailto:contact@chajaratmariam.com" className="hover:text-[#1f1b16]">
                contact@chajaratmariam.com
              </Link>
              <Link href="tel:+212600000000" className="hover:text-[#1f1b16]">
                +212 6 00 00 00 00
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e1d8] pt-8 text-xs text-[#7e8a7e]">
          <span>© {new Date().getFullYear()} CHAJARATMARIAM — Studio Rose de Jericho</span>
          <div className="flex gap-3">
            <Link href="#" className="hover:text-[#1f1b16]">
              Instagram
            </Link>
            <span className="text-[#d3d9d1]">•</span>
            <Link href="#" className="hover:text-[#1f1b16]">
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
