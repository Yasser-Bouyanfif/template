import Link from "next/link";

const usefulLinks = [
  {
    label: "Mentions Légales",
    href: "/legal-notice",
  },
  {
    label: "Conditions Générales de Vente",
    href: "/terms",
  },
  {
    label: "Politique de confidentialité",
    href: "/privacy-policy",
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#050b18] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1cd98a]/15 text-[#1cd98a]">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20" />
                  <path d="M5 12h14" />
                  <path d="M7 5h10" />
                  <path d="M7 19h10" />
                </svg>
              </span>
              <div>
                <p className="text-lg font-semibold">ELEC&apos;CONNECT</p>
                <p className="text-sm text-[#8ca0c3]">Solutions de recharge électrique</p>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#9db2d4]">
              Votre partenaire de confiance pour l&apos;installation professionnelle de bornes de recharge électrique.
              Nous contribuons à un avenir plus durable grâce à la mobilité électrique.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9db2d4]">
              Liens utiles
            </h3>
            <nav className="space-y-3 text-sm text-[#dce6ff]">
              {usefulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9db2d4]">Contact</h3>
            <div className="space-y-3 text-sm text-[#dce6ff]">
              <p className="font-medium">+33 6 98 67 77 80</p>
              <p>+34 2 91 62 91 83</p>
              <Link href="mailto:contact@elecconnect.fr" className="transition-colors hover:text-white">
                contact@elecconnect.fr
              </Link>
              <p>83000 Toulon, France</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-[#8094b8] sm:flex-row sm:items-center sm:justify-between">
          <p>2025 ELEC&apos;CONNECT. Tous droits réservés.</p>
          <p>
            Propulsé par
            {" "}
            <Link href="https://yasserr.dev" target="_blank" rel="noopener noreferrer" className="font-medium text-white underline-offset-4 hover:underline">
              CodeVerse
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
