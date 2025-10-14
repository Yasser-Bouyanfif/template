"use client";

import { useUser as useClerkUser } from "@clerk/nextjs";

type ClerkUserState = ReturnType<typeof useClerkUser>;

const fallbackUser: ClerkUserState = {
  isSignedIn: false,
  isLoaded: true,
  user: null,
} as ClerkUserState;

let hasWarned = false;

export function useSafeUser() {
  try {
    return useClerkUser();
  } catch (error) {
    if (process.env.NODE_ENV !== "production" && !hasWarned) {
      console.warn("Clerk non configuré : utilisation d'un utilisateur invité.", error);
      hasWarned = true;
    }
    return fallbackUser;
  }
}
