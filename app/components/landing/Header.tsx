"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall, ShoppingCart } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

import { CartContext, CartContextType } from "../../contexts/CartContext";
import Cart from "../ui/Cart";

export default function Header() {
  const { isSignedIn } = useUser();
  const [openCart, setOpenCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext) as CartContextType;

  const renderUserButton = () => (
    <UserButton afterSignOutUrl="/">
      <UserButton.MenuItems>
        <UserButton.Link
          label="Mes commandes"
          href="/orders"
          labelIcon={<ShoppingCart className="w-4 h-4 mr-2" />}
        />
      </UserButton.MenuItems>
    </UserButton>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100/60 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ChajaratMariam"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-amber-200 object-cover"
              priority
            />
            <div className="hidden md:block">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-600">
                ChajaratMariam
              </p>
              <h1 className="text-2xl font-semibold text-slate-900">
                Roses de Jéricho
              </h1>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/#about"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-600"
            >
              À propos
            </Link>
            <Link
              href="/#benefits"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-600"
            >
              Bienfaits
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-600"
            >
              Boutique
            </Link>
            <Link
              href="/#contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200/50 transition hover:shadow-xl hover:shadow-amber-200/60"
            >
              <span>Nous écrire</span>
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <span className="absolute inset-0 rounded-full border border-white/60 opacity-70 blur-[1px]" aria-hidden="true" />
                <PhoneCall
                  className="h-4 w-4 text-white drop-shadow"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </span>
            </Link>
            <div className="flex items-center gap-4 pl-3">
              <button
                type="button"
                onClick={() => setOpenCart((value) => !value)}
                className="relative rounded-full bg-amber-50 p-2 text-amber-700 shadow-sm transition hover:bg-amber-100"
                aria-label="Ouvrir le panier"
              >
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1 text-[11px] font-semibold text-white">
                    {cart.length}
                  </span>
                )}
              </button>
              {isSignedIn ? (
                renderUserButton()
              ) : (
                <Link
                  href="/account"
                  aria-label="Se connecter"
                  className="rounded-full border border-amber-200 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50"
                >
                  Connexion
                </Link>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setOpenCart((value) => !value)}
              aria-label="Ouvrir le panier"
              className="relative rounded-full bg-amber-50 p-2 text-amber-700 shadow-sm"
            >
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1 text-[11px] font-semibold text-white">
                  {cart.length}
                </span>
              )}
            </button>

            {isSignedIn ? (
              renderUserButton()
            ) : (
              <Link
                href="/account"
                aria-label="Se connecter"
                className="rounded-full border border-amber-200 px-3 py-1.5 text-sm font-medium text-amber-700"
              >
                Connexion
              </Link>
            )}

            <button
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label="Ouvrir le menu"
              aria-expanded={isMenuOpen}
              className="rounded-full border border-amber-200 p-2 text-amber-700"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-amber-100/80 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm font-medium text-slate-600">
            <Link
              href="/#about"
              className="rounded-lg px-4 py-2 transition hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/#benefits"
              className="rounded-lg px-4 py-2 transition hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Bienfaits
            </Link>
            <Link
              href="/shop"
              className="rounded-lg px-4 py-2 transition hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Boutique
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg px-4 py-2 text-amber-600 transition hover:bg-amber-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </header>
  );
}
