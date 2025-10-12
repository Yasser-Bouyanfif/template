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
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-emerald-600 to-amber-500 rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">ChajaratMariam</h3>
                <p className="text-emerald-300 text-sm">L&apos;art de la Rose de Jéricho</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nous révélons la magie de la Rose de Jéricho à travers des coffrets authentiques, des rituels inspirés et un accompagnement personnalisé pour chaque renaissance.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal-notice" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-300" />
                <a href="tel:+33612345678" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  +33 6 12 34 56 78
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-300" />
                <a
                  href="mailto:bonjour@chajaratmariam.com"
                  className="text-gray-300 hover:text-emerald-300 transition-colors"
                >
                  bonjour@chajaratmariam.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-300 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-gray-300">
                    Atelier — 12 rue des Fleurs
                    <br />
                    75003 Paris, France
                  </span>
                  <span className="mt-1 block text-sm text-gray-500">
                    Showroom saisonnier à Marrakech
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
