"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { ModeToggle } from "./mode-toggle";

const menuItems = [
  { name: "Rituels", href: "#rituels" },
  { name: "Bienfaits", href: "#bienfaits" },
  { name: "Origines", href: "#origines" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full border-b border-[#e9e4d9] bg-white/80 backdrop-blur-xl transition-colors"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="Accueil" className="flex items-center space-x-3">
                <Logo className="text-sm" />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Fermer le menu" : "Ouvrir le menu"}
                data-state={menuState ? "active" : "inactive"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer rounded-full p-2.5 text-[#4c4a43] transition hover:bg-[#f1eee5] lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 transition duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 transition duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm text-[#4c4a43]">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-[#1f1d19]"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              data-state={menuState ? "active" : "inactive"}
              className="in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end gap-4 rounded-3xl border border-[#ece7dc] bg-white/90 p-6 text-[#4c4a43] shadow-[0_24px_60px_rgba(210,210,196,0.35)] transition lg:m-0 lg:flex lg:w-fit lg:gap-5 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-[#4c4a43] transition-colors hover:text-[#1f1d19]"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-3 md:w-fit">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-sm text-[#4c4a43] hover:text-[#1f1d19]"
                >
                  <Link href="#rituels">
                    <span>Explorer</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-[#6f8a6a] text-white hover:bg-[#627a5e]">
                  <Link href="#bienfaits">
                    <span>Réserver</span>
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
