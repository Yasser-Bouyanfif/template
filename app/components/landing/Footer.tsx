import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Leaf } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ChajaratMariam</h3>
                <p className="text-amber-400 text-sm">Roses de Jéricho authentiques</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Découvrez la magie de la Rose de Jéricho, plante millénaire de renaissance. Nous sélectionnons, purifions et
              bénissons chaque rose pour un rituel intime et lumineux.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-notice"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:+33612345678" className="text-gray-300 hover:text-amber-400 transition-colors">
                  +33 6 12 34 56 78
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:hello@chajaratmariam.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                  hello@chajaratmariam.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-gray-300">
                    Atelier ChajaratMariam
                    <br />
                    128 Rue du Temple, 75003 Paris
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {year} ChajaratMariam. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
