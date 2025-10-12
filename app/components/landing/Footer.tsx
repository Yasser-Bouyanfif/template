import Link from "next/link";
import { Facebook, Instagram, Leaf, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                <Leaf className="h-6 w-6 text-emerald-200" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">ChajaratMariam</p>
                <h3 className="text-2xl font-semibold">Rose de Jéricho sacrée</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-emerald-100/80">
              Nous révélons le pouvoir ancestral de la rose de Jéricho à travers des coffrets pensés pour vos moments de
              renaissance. Rituels guidés, intentions manuscrites et accompagnement personnalisé.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-700/60 text-emerald-200 transition hover:border-emerald-400 hover:text-emerald-100"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-700/60 text-emerald-200 transition hover:border-emerald-400 hover:text-emerald-100"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-emerald-100">Explorer</h4>
            <ul className="mt-6 space-y-3 text-sm text-emerald-100/80">
              <li>
                <Link href="/" className="transition hover:text-emerald-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#bienfaits" className="transition hover:text-emerald-200">
                  Bienfaits
                </Link>
              </li>
              <li>
                <Link href="/#histoire" className="transition hover:text-emerald-200">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link href="/#rituel" className="transition hover:text-emerald-200">
                  Rituel guidé
                </Link>
              </li>
              <li>
                <Link href="/shop" className="transition hover:text-emerald-200">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/legal-notice" className="transition hover:text-emerald-200">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition hover:text-emerald-200">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-emerald-200">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-emerald-100">Nous contacter</h4>
            <ul className="mt-6 space-y-4 text-sm text-emerald-100/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-emerald-300" />
                <div>
                  <a href="tel:+33612345678" className="block transition hover:text-emerald-200">
                    +33 6 12 34 56 78
                  </a>
                  <span className="text-emerald-100/60">Du lundi au vendredi, 9h – 18h</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-emerald-300" />
                <a
                  href="mailto:bonjour@chajaratmariam.com"
                  className="transition hover:text-emerald-200"
                >
                  bonjour@chajaratmariam.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-emerald-300" />
                <div>
                  <p>Atelier ChajaratMariam</p>
                  <p>12 rue des Jardiniers, 75011 Paris</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-emerald-800/60 pt-6 text-center text-sm text-emerald-100/60">
          © {year} ChajaratMariam. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
