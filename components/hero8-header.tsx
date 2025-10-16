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
  { name: "Contact", href: "#contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-white/80 fixed z-20 w-full border-b border-[#e5e5e5]/60 backdrop-blur-2xl transition-colors dark:bg-[#0a0a0a]/80 dark:border-[#262626]/60"
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
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer rounded-full p-2.5 text-[#1a1a1a] transition hover:bg-[#f5f5f5] lg:hidden dark:text-white dark:hover:bg-[#262626]"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 transition duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 transition duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm font-medium text-[#525252]">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="hover:text-[#1a1a1a] transition-colors dark:text-[#a3a3a3] dark:hover:text-white"
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
              className="bg-white text-[#1a1a1a] in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end gap-4 rounded-2xl border border-[#e5e5e5] p-6 shadow-lg transition lg:m-0 lg:flex lg:w-fit lg:gap-5 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:bg-[#171717] dark:text-white dark:border-[#262626] dark:lg:bg-transparent"
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-[#525252] font-medium transition-colors hover:text-[#1a1a1a] dark:text-[#a3a3a3] dark:hover:text-white"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-3 md:w-fit">
                <Button asChild variant="ghost" size="sm" className="text-sm font-medium text-[#525252] hover:text-[#1a1a1a] dark:text-[#a3a3a3] dark:hover:text-white">
                  <Link href="#contact">
                    <span>Nous écrire</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-gradient-to-r from-[#b98c5f] to-[#a6784d] font-semibold text-white shadow-md hover:shadow-lg transition-all">
                  <Link href="#rituels">
                    <span>Commander</span>
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
