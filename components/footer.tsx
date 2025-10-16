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
    <footer className="bg-white text-slate-700">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#22d3ee] to-[#34d399] text-white shadow-lg shadow-[#22d3ee]/30">
                <Bolt className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-[#0f172a]">ELEC&apos;CONNECT</p>
                <p className="text-lg font-semibold text-[#0b1120]">Solutions de recharge électrique</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Votre partenaire de confiance pour l&apos;installation professionnelle de bornes de recharge électrique. Nous
              contribuons à un avenir plus durable grâce à la mobilité électrique.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg font-semibold text-[#0b1120]">Liens utiles</p>
            <ul className="space-y-3 text-sm">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#0f172a]"
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
            <p className="text-lg font-semibold text-[#0b1120]">Contact</p>
            <ul className="space-y-3 text-sm">
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <Link href={contact.href} className="transition-colors hover:text-[#0f172a]">
                    {contact.label}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-slate-500">83000 Toulon, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>
            {currentYear} ELEC&apos;CONNECT. Tous droits réservés.
          </span>
          <span>
            Propulsé par {" "}
            <Link href="https://yasserr.dev" className="font-medium text-[#0b1120] transition-colors hover:text-[#0f172a]">
              CodeVerse
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
