"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { BannerImage, BannerImageSource } from "../lib/images";

export type CartItemBanner =
  | BannerImage
  | BannerImageSource
  | { url?: string | null }
  | null
  | undefined;

export type CartItem = {
  id: string | number;
  documentId?: string | null;
  title?: string;
  price?: number;
  quantity?: number;
  banner?: CartItemBanner;
};

export type ShippingMethod = "standard" | "express";

export type CheckoutAddress = {
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
};

export type CartContextType = {
  cart: CartItem[];
  cartSubtotal: number;
  cartTotal: number;
  cartTotalsUpdatedAt: number;
  shippingMethod: ShippingMethod;
  setShippingMethod: (method: ShippingMethod) => void;
  shippingAddress: CheckoutAddress;
  billingAddress: CheckoutAddress;
  useSameAddressForBilling: boolean;
  updateShippingAddress: (updates: Partial<CheckoutAddress>) => void;
  updateBillingAddress: (updates: Partial<CheckoutAddress>) => void;
  setUseSameAddressForBilling: (useSame: boolean) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string | number) => void;
  updateCartItemQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  syncCartTotals: (totals: { subtotal: number; total: number }) => void;
  clearCartTotals: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const MAX_PER_PRODUCT = 4;

const getCartKey = (item: Pick<CartItem, "id" | "documentId">) =>
  (item.documentId ?? item.id).toString();

const CART_TOTALS_STORAGE_KEY = "cartTotals" as const;
export const CART_PROMOTION_STORAGE_KEY = "cartPromotion" as const;

const cartItemMatchesIdentifier = (
  item: CartItem,
  id: string | number,
  normalizedId: string
) => {
  if (item.id === id) {
    return true;
  }

  if (
    (typeof item.id === "number" || typeof item.id === "string") &&
    item.id.toString() === normalizedId
  ) {
    return true;
  }

  if (
    item.documentId &&
    (typeof item.documentId === "number" || typeof item.documentId === "string") &&
    item.documentId.toString() === normalizedId
  ) {
    return true;
  }

  const key = getCartKey(item);
  return key === normalizedId;
};

const DEFAULT_COUNTRY = "France" as const;

const createEmptyAddress = (): CheckoutAddress => ({
  firstName: "",
  lastName: "",
  company: "",
  address1: "",
  address2: "",
  city: "",
  postalCode: "",
  country: DEFAULT_COUNTRY,
  phone: "",
});

const sanitizeAddressUpdates = (
  previous: CheckoutAddress,
  updates: Partial<CheckoutAddress>
): CheckoutAddress => {
  const next: CheckoutAddress = { ...previous };

  (Object.keys(previous) as Array<keyof CheckoutAddress>).forEach((key) => {
    const raw = updates[key];
    if (typeof raw === "string") {
      next[key] = key === "country" ? DEFAULT_COUNTRY : raw.trim();
    }
  });

  next.country = DEFAULT_COUNTRY;

  return next;
};

const sanitizeStoredAddress = (value: unknown): CheckoutAddress => {
  const base = createEmptyAddress();
  if (!value || typeof value !== "object") {
    return base;
  }

  const entries = value as Record<string, unknown>;

  (Object.keys(base) as Array<keyof CheckoutAddress>).forEach((key) => {
    const raw = entries[key as string];
    if (typeof raw === "string") {
      base[key] = key === "country" ? DEFAULT_COUNTRY : raw.trim();
    }
  });

  base.country = DEFAULT_COUNTRY;

  return base;
};

const clampStoredQuantity = (value: unknown): number | null => {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  const whole = Math.floor(value);
  if (whole <= 0) {
    return 0;
  }

  return Math.min(whole, MAX_PER_PRODUCT);
};

const sanitizeCartItems = (items: Array<CartItem & { quantity?: unknown }>): CartItem[] => {
  const counts = new Map<string, number>();

  return items.reduce<CartItem[]>((acc, current) => {
    if (!current) {
      return acc;
    }

    const { id } = current;
    if (typeof id !== "string" && typeof id !== "number") {
      return acc;
    }

    const key = getCartKey(current);
    const existing = counts.get(key) ?? 0;
    if (existing >= MAX_PER_PRODUCT) {
      return acc;
    }

    const { quantity: rawQuantity, ...rest } = current as CartItem & {
      quantity?: unknown;
    };

    const parsedQuantity =
      rawQuantity !== undefined ? clampStoredQuantity(rawQuantity) : null;

    if (parsedQuantity === 0) {
      return acc;
    }

    const desired = parsedQuantity ?? 1;
    const remaining = MAX_PER_PRODUCT - existing;
    const copies = Math.min(remaining, desired);

    if (copies <= 0) {
      return acc;
    }

    const sanitizedDocumentId =
      typeof (rest as CartItem).documentId === "string" &&
      (rest as CartItem).documentId?.trim().length > 0
        ? (rest as CartItem).documentId!.trim()
        : (rest as CartItem).documentId ?? null;

    for (let index = 0; index < copies; index += 1) {
      acc.push({ ...rest, id, documentId: sanitizedDocumentId });
    }

    counts.set(key, existing + copies);
    return acc;
  }, []);
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartTotalsUpdatedAt, setCartTotalsUpdatedAt] = useState(0);
  const [shippingMethod, setShippingMethodState] = useState<ShippingMethod>(
    "standard"
  );
  const [shippingAddress, setShippingAddress] = useState<CheckoutAddress>(
    () => createEmptyAddress()
  );
  const [billingAddress, setBillingAddress] = useState<CheckoutAddress>(() =>
    createEmptyAddress()
  );
  const [useSameAddressForBilling, setUseSameAddressForBillingState] =
    useState(true);

  const updateShippingMethod = useCallback((method: ShippingMethod) => {
    setShippingMethodState(method);
    localStorage.setItem("shippingMethod", method);
  }, []);

  const updateShippingAddress = useCallback(
    (updates: Partial<CheckoutAddress>) => {
      setShippingAddress((prev) => {
        const next = sanitizeAddressUpdates(prev, updates);

        if (useSameAddressForBilling) {
          setBillingAddress({ ...next });
        }

        return next;
      });
    },
    [setBillingAddress, useSameAddressForBilling]
  );

  const updateBillingAddress = useCallback(
    (updates: Partial<CheckoutAddress>) => {
      setBillingAddress((prev) => sanitizeAddressUpdates(prev, updates));
    },
    []
  );

  const setUseSameAddressForBilling = useCallback(
    (useSame: boolean) => {
      setUseSameAddressForBillingState(useSame);

      if (useSame) {
        setBillingAddress({ ...shippingAddress });
      }
    },
    [shippingAddress]
  );

  const clearCartTotals = useCallback(() => {
    setCartSubtotal(0);
    setCartTotal(0);
    setCartTotalsUpdatedAt(0);
    try {
      localStorage.removeItem(CART_TOTALS_STORAGE_KEY);
    } catch {}
  }, []);

  const syncCartTotals = useCallback(
    (totals: { subtotal: number; total: number }) => {
      const sanitize = (value: number) =>
        Number.isFinite(value) ? Math.max(value, 0) : 0;

      const sanitizedSubtotal = sanitize(totals.subtotal);
      const sanitizedTotal = sanitize(totals.total);
      const updatedAt = Date.now();

      setCartSubtotal(sanitizedSubtotal);
      setCartTotal(sanitizedTotal);
      setCartTotalsUpdatedAt(updatedAt);

      try {
        const payload = JSON.stringify({
          subtotal: sanitizedSubtotal,
          total: sanitizedTotal,
          updatedAt,
        });
        localStorage.setItem(CART_TOTALS_STORAGE_KEY, payload);
      } catch {}
    },
    []
  );

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedShippingMethod = localStorage.getItem("shippingMethod");
    const storedAddressesRaw = localStorage.getItem("checkoutAddresses");

    const storedTotalsRaw = localStorage.getItem(CART_TOTALS_STORAGE_KEY);

    if (!storedCart) {
      if (storedShippingMethod === "standard" || storedShippingMethod === "express") {
        setShippingMethodState(storedShippingMethod);
      }
      if (storedAddressesRaw) {
        try {
          const parsed = JSON.parse(storedAddressesRaw);
          if (parsed?.shipping && typeof parsed.shipping === "object") {
            setShippingAddress(sanitizeStoredAddress(parsed.shipping));
          }
          if (parsed?.billing && typeof parsed.billing === "object") {
            setBillingAddress(sanitizeStoredAddress(parsed.billing));
          }
          if (typeof parsed?.useSameForBilling === "boolean") {
            setUseSameAddressForBillingState(parsed.useSameForBilling);
          }
        } catch {}
      }
      if (storedTotalsRaw) {
        try {
          const parsedTotals = JSON.parse(storedTotalsRaw);
          const parsedSubtotal = Number(parsedTotals?.subtotal);
          const parsedTotal = Number(parsedTotals?.total);
          const parsedUpdatedAt = Number(parsedTotals?.updatedAt);

          if (
            Number.isFinite(parsedSubtotal) &&
            Number.isFinite(parsedTotal) &&
            Number.isFinite(parsedUpdatedAt)
          ) {
            setCartSubtotal(Math.max(parsedSubtotal, 0));
            setCartTotal(Math.max(parsedTotal, 0));
            setCartTotalsUpdatedAt(parsedUpdatedAt);
          }
        } catch {}
      }
      return;
    }

    try {
      const parsed = JSON.parse(storedCart);
      if (Array.isArray(parsed)) {
        setCart(
          sanitizeCartItems(parsed as Array<CartItem & { quantity?: unknown }>)
        );
      }
    } catch {}

    if (storedShippingMethod === "standard" || storedShippingMethod === "express") {
      setShippingMethodState(storedShippingMethod);
    }

    if (storedAddressesRaw) {
      try {
        const parsedAddresses = JSON.parse(storedAddressesRaw);
        if (parsedAddresses?.shipping && typeof parsedAddresses.shipping === "object") {
          setShippingAddress(sanitizeStoredAddress(parsedAddresses.shipping));
        }
        if (parsedAddresses?.billing && typeof parsedAddresses.billing === "object") {
          setBillingAddress(sanitizeStoredAddress(parsedAddresses.billing));
        }
        if (typeof parsedAddresses?.useSameForBilling === "boolean") {
          setUseSameAddressForBillingState(parsedAddresses.useSameForBilling);
        }
      } catch {}
    }

    if (storedTotalsRaw) {
      try {
        const parsedTotals = JSON.parse(storedTotalsRaw);
        const parsedSubtotal = Number(parsedTotals?.subtotal);
        const parsedTotal = Number(parsedTotals?.total);
        const parsedUpdatedAt = Number(parsedTotals?.updatedAt);

        if (
          Number.isFinite(parsedSubtotal) &&
          Number.isFinite(parsedTotal) &&
          Number.isFinite(parsedUpdatedAt)
        ) {
          setCartSubtotal(Math.max(parsedSubtotal, 0));
          setCartTotal(Math.max(parsedTotal, 0));
          setCartTotalsUpdatedAt(parsedUpdatedAt);
        }
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const payload = {
      shipping: shippingAddress,
      billing: useSameAddressForBilling ? shippingAddress : billingAddress,
      useSameForBilling: useSameAddressForBilling,
    };

    localStorage.setItem("checkoutAddresses", JSON.stringify(payload));
  }, [billingAddress, shippingAddress, useSameAddressForBilling]);

  const addToCart = useCallback((item: CartItem) => {
    if (!item || (typeof item.id !== "string" && typeof item.id !== "number")) {
      return;
    }

    setCart((prev) => sanitizeCartItems([...prev, item]));
  }, []);

  const removeFromCart = useCallback((id: string | number) => {
    setCart((prev) => {
      const normalizedId = id.toString();

      const index = prev.findIndex((item) =>
        cartItemMatchesIdentifier(item, id, normalizedId)
      );

      if (index === -1) {
        return prev;
      }

      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("cart");
    clearCartTotals();
    setShippingMethodState("standard");
    localStorage.removeItem("shippingMethod");
    setShippingAddress(createEmptyAddress());
    setBillingAddress(createEmptyAddress());
    setUseSameAddressForBillingState(true);
    localStorage.removeItem("checkoutAddresses");
    localStorage.removeItem(CART_PROMOTION_STORAGE_KEY);
  }, [clearCartTotals]);

  const updateCartItemQuantity = useCallback(
    (id: string | number, quantity: number) => {
      setCart((prev) => {
        if (typeof quantity !== "number" || !Number.isFinite(quantity)) {
          return prev;
        }

        const normalizedId = id.toString();
        const desiredQuantity = Math.min(
          Math.max(Math.floor(quantity), 0),
          MAX_PER_PRODUCT
        );

        let foundMatch = false;
        let inserted = false;
        let existingCount = 0;
        let templateWithoutQuantity: CartItem | null = null;
        const next: CartItem[] = [];

        prev.forEach((item) => {
          if (!cartItemMatchesIdentifier(item, id, normalizedId)) {
            next.push(item);
            return;
          }

          foundMatch = true;
          existingCount += 1;

          if (!templateWithoutQuantity) {
            const rest = { ...item };
            delete rest.quantity;
            templateWithoutQuantity = rest;
          }

          if (!inserted && desiredQuantity > 0 && templateWithoutQuantity) {
            for (let index = 0; index < desiredQuantity; index += 1) {
              next.push({ ...templateWithoutQuantity });
            }
            inserted = true;
          }
        });

        if (!foundMatch) {
          return prev;
        }

        if (existingCount === desiredQuantity) {
          return prev;
        }

        if (desiredQuantity > 0 && !inserted) {
          if (!templateWithoutQuantity) {
            return prev;
          }

          const baseItem = templateWithoutQuantity;
          const replacements = Array.from({ length: desiredQuantity }, () => ({
            ...baseItem,
          }));
          return [...next, ...replacements];
        }

        return next;
      });
    },
    []
  );

  return (
    <CartContext.Provider value={{
      cart,
      cartSubtotal,
      cartTotal,
      cartTotalsUpdatedAt,
      shippingMethod,
      setShippingMethod: updateShippingMethod,
      shippingAddress,
      billingAddress,
      useSameAddressForBilling,
      updateShippingAddress,
      updateBillingAddress,
      setUseSameAddressForBilling,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart,
      syncCartTotals,
      clearCartTotals
    }}>
      {children}
    </CartContext.Provider>
  );
}