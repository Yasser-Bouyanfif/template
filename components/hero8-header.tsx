"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { LogIn, ShoppingCart } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isClerkConfigured = typeof clerkPublishableKey === "string" && clerkPublishableKey.length > 0;

export const HeroHeader = () => {
  return (
    <header>
      <nav className="fixed z-20 w-full border-b border-[#e5e5e5]/60 bg-white/80 backdrop-blur-2xl transition-colors dark:border-[#262626]/60 dark:bg-[#0a0a0a]/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Accueil" className="flex items-center space-x-3">
            <Logo className="text-sm" />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              aria-label="Voir le panier"
              className="flex size-10 items-center justify-center rounded-full border border-transparent bg-white/70 text-[#1a1a1a] shadow-sm transition hover:-translate-y-0.5 hover:border-[#e5e5e5] hover:bg-white dark:bg-[#171717] dark:text-white dark:hover:border-[#262626]"
            >
              <ShoppingCart className="size-5" />
            </Link>

            {isClerkConfigured ? (
              <>
                <SignedOut>
                  <SignInButton mode="modal" afterSignInUrl="/account">
                    <button
                      type="button"
                      aria-label="Se connecter"
                      className="flex size-10 items-center justify-center rounded-full border border-transparent bg-white/70 text-[#1a1a1a] shadow-sm transition hover:-translate-y-0.5 hover:border-[#e5e5e5] hover:bg-white dark:bg-[#171717] dark:text-white dark:hover:border-[#262626]"
                    >
                      <LogIn className="size-5" />
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton appearance={{ elements: { avatarBox: "size-10", userButtonAvatarBox: "size-10" } }} afterSignOutUrl="/" />
                </SignedIn>
              </>
            ) : (
              <>
                <Link
                  href="/account"
                  aria-label="Se connecter"
                  className="flex size-10 items-center justify-center rounded-full border border-transparent bg-white/70 text-[#1a1a1a] shadow-sm transition hover:-translate-y-0.5 hover:border-[#e5e5e5] hover:bg-white dark:bg-[#171717] dark:text-white dark:hover:border-[#262626]"
                >
                  <LogIn className="size-5" />
                </Link>
                <div className="flex size-10 items-center justify-center rounded-full border border-[#e5e5e5]/60 bg-white/80 text-xs font-medium uppercase tracking-[0.2em] text-[#1a1a1a] shadow-sm dark:border-[#262626]/60 dark:bg-[#171717] dark:text-white">
                  Guest
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
