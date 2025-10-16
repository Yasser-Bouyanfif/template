import Link from "next/link";
import { Bolt } from "lucide-react";

const usefulLinks = [
  { label: "Mentions Légales", href: "#" },
  { label: "Conditions Générales de Vente", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
];

const contacts = [
  { label: "+33 6 99 66 77 80", href: "tel:+33699667780" },
  { label: "+34 2 91 28 91", href: "tel:+342912891" },
  { label: "contact@elecconnect.fr", href: "mailto:contact@elecconnect.fr" },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050c1f] text-[#d1d5db]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#22d3ee] to-[#34d399] text-white shadow-lg shadow-[#22d3ee]/30">
                <Bolt className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-[#38bdf8]">ELEC&apos;CONNECT</p>
                <p className="text-lg font-semibold text-white">Solutions de recharge électrique</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#9ca3af]">
              Votre partenaire de confiance pour l&apos;installation professionnelle de bornes de recharge électrique. Nous
              contribuons à un avenir plus durable grâce à la mobilité électrique.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg font-semibold text-white">Liens utiles</p>
            <ul className="space-y-3 text-sm">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-lg font-semibold text-white">Contact</p>
            <ul className="space-y-3 text-sm">
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <Link href={contact.href} className="transition-colors hover:text-white">
                    {contact.label}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-[#9ca3af]">83000 Toulon, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-[#9ca3af] md:flex-row md:items-center md:justify-between">
          <span>
            {currentYear} ELEC&apos;CONNECT. Tous droits réservés.
          </span>
          <span>
            Propulsé par {" "}
            <Link href="https://yasserr.dev" className="font-medium text-white transition-colors hover:text-[#38bdf8]">
              CodeVerse
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
