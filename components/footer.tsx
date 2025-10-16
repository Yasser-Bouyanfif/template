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
    <footer className="bg-white border-t border-[#e5e5e5] py-20 text-[#1a1a1a] dark:bg-[#0a0a0a] dark:border-[#262626] dark:text-[#f5f5f5]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Link href="/" aria-label="Retour à l&apos;accueil" className="block w-fit">
              <Logo />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#525252] dark:text-[#a3a3a3]">
              Studio botanique dédié à la Rose de Jericho. Nous imaginons des rituels minimalistes, des objets de soin et des expériences immersives aux teintes crème.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-wider text-[#737373] dark:text-[#a3a3a3]">
              <span className="rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4 py-2 dark:border-[#262626] dark:bg-[#171717]">Casablanca</span>
              <span className="rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4 py-2 dark:border-[#262626] dark:bg-[#171717]">Paris</span>
              <span className="rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4 py-2 dark:border-[#262626] dark:bg-[#171717]">Marrakech</span>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:items-end">
            <nav className="grid gap-3 text-sm">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[#525252] transition-colors hover:text-[#1a1a1a] font-medium dark:text-[#a3a3a3] dark:hover:text-white"
                >
                  <span>{link.title}</span>
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap gap-4 text-sm text-[#525252] dark:text-[#a3a3a3]">
              <Link href="mailto:contact@chajaratmariam.com" className="hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
                contact@chajaratmariam.com
              </Link>
              <Link href="tel:+212600000000" className="hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
                +212 6 00 00 00 00
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e5e5] pt-8 text-xs text-[#737373] dark:border-[#262626] dark:text-[#a3a3a3]">
          <span>© {new Date().getFullYear()} CHAJARATMARIAM — Studio Rose de Jericho</span>
          <div className="flex gap-3">
            <Link href="#" className="hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
              Instagram
            </Link>
            <span className="text-[#d4d4d4] dark:text-[#525252]">•</span>
            <Link href="#" className="hover:text-[#1a1a1a] dark:hover:text-white transition-colors">
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
