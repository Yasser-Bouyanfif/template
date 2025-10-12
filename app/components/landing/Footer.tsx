import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Leaf } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Rose de Jéricho</h3>
                <p className="text-amber-400 text-sm">Plante de résurrection</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Découvrez la magie de la Rose de Jéricho, une plante millénaire symbole de renouveau
              et de prospérité. Nous proposons des roses authentiques de qualité premium.
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
                <a href="tel:+33123456789" className="text-gray-300 hover:text-amber-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:contact@rosedejericho.fr" className="text-gray-300 hover:text-amber-400 transition-colors">
                  contact@rosedejericho.fr
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-gray-300">
                    123 Rue de la Nature
                    <br />
                    75001 Paris, France
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {year} Rose de Jéricho. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
