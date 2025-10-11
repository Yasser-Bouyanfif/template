"use client";

import type { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations/fr-FR";
import { CartProvider } from "./contexts/CartContext";

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ClerkProvider localization={frFR}>
      <CartProvider>{children}</CartProvider>
    </ClerkProvider>
  );
}
