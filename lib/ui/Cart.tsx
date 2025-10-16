"use client";

import { useCallback, useContext, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, X } from "lucide-react";

import {
  CartContext,
  type CartContextType,
  type CartItem,
  MAX_PER_PRODUCT,
} from "@/app/contexts/CartContext";
import { ensureImageUrl, getBannerImageSource } from "@/app/lib/images";
import { SERVER_URL } from "@/app/lib/constants";

const currencyFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

type CartProps = {
  open: boolean;
  onClose: () => void;
};

type GroupedItem = {
  item: CartItem;
  quantity: number;
};

const toCartKey = (item: CartItem) => (item.documentId ?? item.id).toString();

const EMPTY_CART: CartItem[] = [];

const getItemPrice = (item: CartItem): number => {
  const parsed = Number(item.price);
  return Number.isFinite(parsed) ? parsed : 0;
};

export function Cart({ open, onClose }: CartProps) {
  const context = useContext(CartContext) as CartContextType | undefined;

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  const cart = context?.cart ?? EMPTY_CART;
  const removeFromCart = context?.removeFromCart;
  const updateCartItemQuantity = context?.updateCartItemQuantity;

  const groups = useMemo(() => {
    const map = new Map<string, GroupedItem>();

    cart.forEach((entry) => {
      if (!entry) {
        return;
      }

      const key = toCartKey(entry);
      const existing = map.get(key);

      if (existing) {
        existing.quantity += 1;
      } else {
        map.set(key, { item: entry, quantity: 1 });
      }
    });

    return Array.from(map.values());
  }, [cart]);

  const itemCount = groups.reduce((total, { quantity }) => total + quantity, 0);

  const subtotal = useMemo(
    () =>
      groups.reduce((total, { item, quantity }) => {
        return total + getItemPrice(item) * quantity;
      }, 0),
    [groups],
  );

  const handleDecrease = useCallback(
    (item: CartItem, quantity: number) => {
      if (!updateCartItemQuantity) {
        return;
      }

      updateCartItemQuantity(item.id, Math.max(quantity - 1, 0));
    },
    [updateCartItemQuantity],
  );

  const handleIncrease = useCallback(
    (item: CartItem, quantity: number) => {
      if (!updateCartItemQuantity) {
        return;
      }

      const nextQuantity = Math.min(quantity + 1, MAX_PER_PRODUCT);
      updateCartItemQuantity(item.id, nextQuantity);
    },
    [updateCartItemQuantity],
  );

  const handleRemove = useCallback(
    (item: CartItem) => {
      if (!removeFromCart) {
        return;
      }

      removeFromCart(item.id);
    },
    [removeFromCart],
  );

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-40 flex justify-end bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Panier"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full max-w-md flex-col bg-white text-[#1a1a1a] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-[#ececec] px-6 py-5">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#8b8b8b]">
              Panier
            </p>
            <p className="text-base font-semibold text-[#1a1a1a]">
              {itemCount === 0
                ? "Aucun article"
                : `${itemCount} article${itemCount > 1 ? "s" : ""}`}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full border border-transparent bg-[#f5f5f5] text-[#333] transition hover:-translate-y-0.5 hover:border-[#e0e0e0] hover:bg-white"
            aria-label="Fermer le panier"
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {groups.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-lg font-semibold text-[#333]">
                Votre panier est vide
              </p>
              <p className="mt-2 text-sm text-[#6b6b6b]">
                Ajoutez des produits pour commencer votre rituel.
              </p>
              <Link
                href="/shop"
                onClick={onClose}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[#e5e5e5] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition hover:-translate-y-0.5 hover:border-[#d0d0d0] hover:shadow"
              >
                Explorer la boutique
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {groups.map(({ item, quantity }) => {
                const bannerSource = getBannerImageSource(item.banner);
                const imageUrl = bannerSource.src
                  ? bannerSource.isFallback
                    ? bannerSource.src
                    : ensureImageUrl(bannerSource.src, SERVER_URL)
                  : "";
                const hasImage = imageUrl.length > 0;
                const price = getItemPrice(item);

                return (
                  <li key={toCartKey(item)} className="flex gap-4 rounded-2xl border border-[#f0f0f0] p-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-[#f9f9f9]">
                      {hasImage ? (
                        <Image
                          src={imageUrl}
                          alt={bannerSource.alt}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-[#9a9a9a]">
                          Image
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-[#1a1a1a]">
                            {item.title ?? "Produit"}
                          </p>
                          <p className="text-sm text-[#6b6b6b]">
                            {currencyFormatter.format(price)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemove(item)}
                          className="flex size-9 items-center justify-center rounded-full border border-transparent text-[#9a9a9a] transition hover:border-[#f0f0f0] hover:text-[#1a1a1a]"
                          aria-label="Retirer l'article du panier"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[#e9e9e9] bg-[#fdfdfd] px-3 py-2 text-sm text-[#1a1a1a]">
                          <button
                            type="button"
                            onClick={() => handleDecrease(item, quantity)}
                            className="flex size-8 items-center justify-center rounded-full text-[#333] transition hover:bg-[#f1f1f1]"
                            aria-label="Diminuer la quantité"
                          >
                            <Minus className="size-4" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => handleIncrease(item, quantity)}
                            className="flex size-8 items-center justify-center rounded-full text-[#333] transition hover:bg-[#f1f1f1]"
                            aria-label="Augmenter la quantité"
                            disabled={quantity >= MAX_PER_PRODUCT}
                          >
                            <Plus className="size-4" />
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-[#1a1a1a]">
                          {currencyFormatter.format(price * quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <footer className="border-t border-[#ececec] px-6 py-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#6b6b6b]">Sous-total</span>
            <span className="text-base font-semibold text-[#1a1a1a]">
              {currencyFormatter.format(subtotal)}
            </span>
          </div>
          <p className="mt-2 text-xs text-[#8b8b8b]">
            Taxes et frais d&apos;expédition calculés lors du paiement.
          </p>
          <div className="mt-5 flex gap-3">
            <Link
              href="/cart"
              onClick={onClose}
              className="flex-1 rounded-full border border-[#e5e5e5] px-4 py-3 text-center text-sm font-semibold text-[#1a1a1a] transition hover:-translate-y-0.5 hover:border-[#d0d0d0] hover:shadow"
            >
              Voir le panier
            </Link>
            <Link
              href="/checkout/address"
              onClick={onClose}
              className="flex-1 rounded-full bg-[#1a1a1a] px-4 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2c2c2c]"
            >
              Passer au paiement
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Cart;
