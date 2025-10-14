"use client";

import type { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations/fr-FR";
import { CartProvider } from "./contexts/CartContext";

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    return <CartProvider>{children}</CartProvider>;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} localization={frFR}>
      <CartProvider>{children}</CartProvider>
    </ClerkProvider>
  );
}
