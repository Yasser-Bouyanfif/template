"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LogIn, ShoppingCart } from "lucide-react";
import { Logo } from "./logo";

export const HeroHeader = () => {
  return (
    <header>
      <nav className="bg-white/80 fixed z-20 w-full border-b border-[#e5e5e5]/60 backdrop-blur-2xl transition-colors dark:bg-[#0a0a0a]/80 dark:border-[#262626]/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <Logo className="text-sm" />
            </div>

            <div className="flex items-center gap-4 text-[#1a1a1a] dark:text-white">
              <button
                type="button"
                aria-label="Voir le panier"
                className="rounded-full border border-transparent p-2 transition hover:border-[#d4d4d4] hover:bg-[#f5f5f5] dark:hover:border-[#404040] dark:hover:bg-[#171717]"
              >
                <ShoppingCart className="size-5" />
              </button>
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    type="button"
                    aria-label="Ouvrir la connexion"
                    className="rounded-full border border-transparent p-2 transition hover:border-[#d4d4d4] hover:bg-[#f5f5f5] dark:hover:border-[#404040] dark:hover:bg-[#171717]"
                  >
                    <LogIn className="size-5" />
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
