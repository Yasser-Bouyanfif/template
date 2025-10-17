"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Logo } from "./logo";
import { LogIn, ShoppingCart } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Cart from "@/lib/ui/Cart";

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isClerkConfigured = typeof clerkPublishableKey === "string" && clerkPublishableKey.length > 0;

export const HeroHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartContainerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsCartOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isCartOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!cartContainerRef.current) {
        return;
      }

      if (!cartContainerRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isCartOpen]);

  const toggleCart = () => {
    setIsCartOpen((previous) => !previous);
  };

  return (
    <header>
      <nav className="fixed z-20 w-full border-b border-[#e5e5e5]/60 bg-white/80 backdrop-blur-2xl transition-colors dark:border-[#262626]/60 dark:bg-[#0a0a0a]/80">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <Link href="/" aria-label="Accueil" className="flex items-center space-x-3">
            <Logo showTagline className="text-sm" />
          </Link>

          <div className="flex items-center gap-3">
            <div className="relative" ref={cartContainerRef}>
              <button
                type="button"
                onClick={toggleCart}
                aria-label="Voir le panier"
                aria-haspopup="dialog"
                aria-expanded={isCartOpen}
                className="flex size-10 items-center justify-center rounded-full border border-transparent bg-white/70 text-[#1a1a1a] shadow-sm transition hover:-translate-y-0.5 hover:border-[#e5e5e5] hover:bg-white dark:bg-[#171717] dark:text-white dark:hover:border-[#262626]"
              >
                <ShoppingCart className="size-5" />
              </button>

              <AnimatePresence>
                {isCartOpen ? (
                  <div role="dialog" aria-modal="true">
                    <Cart onClose={() => setIsCartOpen(false)} />
                  </div>
                ) : null}
              </AnimatePresence>
            </div>

            {isClerkConfigured ? (
              <>
                <SignedOut>
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl="/orders"
                    fallbackRedirectUrl="/orders"
                  >
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
              <div className="flex size-10 items-center justify-center rounded-full border border-[#e5e5e5]/60 bg-white/80 text-xs font-medium uppercase tracking-[0.2em] text-[#1a1a1a] shadow-sm dark:border-[#262626]/60 dark:bg-[#171717] dark:text-white">
                Guest
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
