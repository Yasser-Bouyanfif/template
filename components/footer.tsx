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
    <footer className="bg-[#fffbf4] py-20 text-[#1f140d]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Link href="/" aria-label="Retour à l&apos;accueil" className="block w-fit">
              <Logo />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#5f4d3c]">
              Studio botanique dédié à la Rose de Jericho. Nous imaginons des rituels minimalistes, des objets de soin et des expériences immersives aux teintes crème.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[#8c7763]">
              <span className="rounded-full border border-[#efe6d9] px-4 py-2">Casablanca</span>
              <span className="rounded-full border border-[#efe6d9] px-4 py-2">Paris</span>
              <span className="rounded-full border border-[#efe6d9] px-4 py-2">Marrakech</span>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:items-end">
            <nav className="grid gap-3 text-sm">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[#5f4d3c] transition-colors hover:text-[#2f2418]"
                >
                  <span>{link.title}</span>
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap gap-4 text-sm text-[#5f4d3c]">
              <Link href="mailto:contact@chajaratmariam.com" className="hover:text-[#2f2418]">
                contact@chajaratmariam.com
              </Link>
              <Link href="tel:+212600000000" className="hover:text-[#2f2418]">
                +212 6 00 00 00 00
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#efe6d9] pt-8 text-xs text-[#8c7763]">
          <span>© {new Date().getFullYear()} CHAJARATMARIAM — Studio Rose de Jericho</span>
          <div className="flex gap-3">
            <Link href="#" className="hover:text-[#2f2418]">
              Instagram
            </Link>
            <span className="text-[#e3d7c8]">•</span>
            <Link href="#" className="hover:text-[#2f2418]">
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
