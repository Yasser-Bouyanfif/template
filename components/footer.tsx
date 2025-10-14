import Link from "next/link";

import { Logo } from "@/components/logo";

const links = [
  {
    title: "Boutique",
    href: "#boutique",
  },
  {
    title: "Rituel",
    href: "#rituals",
  },
  {
    title: "Bienfaits",
    href: "#benefits",
  },
  {
    title: "Journal",
    href: "#",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function FooterSection() {
  return (
    <footer className="pb-16 pt-20 md:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block w-fit">
          <Logo />
        </Link>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-foreground/70">
          Maison CHAJARATMARIAM — une invitation à ralentir, à observer la renaissance de la Rose de Jéricho et à honorer les rituels ancestraux.
        </p>

        <div className="my-10 flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-primary-foreground/80 transition-colors"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
          <Link href="mailto:bonjour@chajaratmariam.com" className="hover:text-primary-foreground/80 transition-colors">
            bonjour@chajaratmariam.com
          </Link>
          <span className="hidden text-foreground/30 sm:inline">—</span>
          <span>Atelier & showroom : Marrakech, Maroc</span>
        </div>

        <div className="mt-8 flex justify-center gap-4 text-foreground/50">
          <SocialIcon label="Instagram" href="#">
            <path
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            />
          </SocialIcon>
          <SocialIcon label="Pinterest" href="#">
            <path
              d="M12 2a10 10 0 0 0-3.53 19.36c-.05-.82-.1-2.07.02-2.96c.11-.79.7-5.03.7-5.03s-.18-.35-.18-.86c0-.81.47-1.42 1.05-1.42c.49 0 .73.37.73.82c0 .5-.32 1.26-.48 1.96c-.14.62.3 1.12.9 1.12c1.08 0 1.91-1.14 1.91-2.79c0-1.46-1.05-2.49-2.55-2.49c-1.74 0-2.77 1.31-2.77 2.66c0 .53.2 1.09.46 1.4c.05.06.06.1.04.15c-.05.16-.16.5-.18.57c-.03.09-.1.12-.23.07c-.85-.4-1.38-1.65-1.38-2.65c0-2.17 1.58-4.17 4.57-4.17c2.4 0 4.27 1.71 4.27 4c0 2.39-1.5 4.31-3.58 4.31c-.7 0-1.36-.37-1.59-.8l-.43 1.62c-.16.63-.6 1.42-.89 1.9A10 10 0 0 0 12 2"
            />
          </SocialIcon>
          <SocialIcon label="Spotify" href="#">
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m4.59 14.19a.75.75 0 0 1-1.03.28a8.78 8.78 0 0 0-3.9-.94a8.66 8.66 0 0 0-3.88.95a.75.75 0 1 1-.69-1.34a10.14 10.14 0 0 1 4.57-1.1a10.33 10.33 0 0 1 4.57 1.11a.75.75 0 0 1 .36 1.04m1.35-2.48a.92.92 0 0 1-1.27.35a10.86 10.86 0 0 0-9.56 0a.92.92 0 0 1-.92-1.61a12.72 12.72 0 0 1 11.4 0a.92.92 0 0 1 .35 1.26m.11-2.67a.92.92 0 0 1-1.27.35a13.44 13.44 0 0 0-12 0a.92.92 0 1 1-.92-1.61a15.19 15.19 0 0 1 13.84 0a.92.92 0 0 1 .35 1.26" />
          </SocialIcon>
        </div>

        <span className="mt-10 block text-center text-xs uppercase tracking-[0.3em] text-foreground/40">
          © {new Date().getFullYear()} CHAJARATMARIAM — Tous droits réservés
        </span>
      </div>
    </footer>
  );
}

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    aria-label={label}
    className="flex size-9 items-center justify-center rounded-full border border-[color:var(--beige-muted)] bg-white/40 text-foreground/50 transition hover:border-[color:var(--clay)] hover:text-[color:var(--clay)]"
  >
    <svg
      className="size-4"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      {children}
    </svg>
  </Link>
);
