"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { X, ShoppingCart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CartContext,
  CartContextType,
  CartItem,
  MAX_PER_PRODUCT,
} from "../../contexts/CartContext";
import { SERVER_URL } from "../../lib/constants";
import { ensureImageUrl, getBannerImageSource } from "../../lib/images";

const fmt = (v: number) => v.toFixed(2) + " €";

const toCartKey = (item: CartItem) => (item.documentId ?? item.id).toString();

function CartItemRow({
  item,
  quantity,
  onRemove,
  unitPrice,
  displayTitle,
}: {
  item: CartItem;
  quantity: number;
  onRemove: (id: string | number) => void;
  unitPrice: number;
  displayTitle?: string;
}) {
  const total = unitPrice * quantity;
  const { src, alt, isFallback } = getBannerImageSource({
    banner: item.banner ?? null,
    title: item.title,
  });
  const resolvedSrc = src
    ? isFallback
      ? src
      : ensureImageUrl(src, SERVER_URL)
    : "";
  const hasImage = resolvedSrc.length > 0;

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
      className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-emerald-50 hover:shadow-sm transition-all duration-200"
    >
      {hasImage ? (
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
          <Image
            src={resolvedSrc}
            alt={alt}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-20 h-20 flex-shrink-0 rounded-lg border border-dashed border-gray-200 bg-gray-50 flex items-center justify-center text-xs text-gray-400">
          Aucune image
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-medium text-gray-900 line-clamp-2 leading-tight">
            {displayTitle ?? item.title}
          </h3>
          <button
            onClick={() =>
              onRemove(
                typeof item.documentId === "string" && item.documentId.trim().length > 0
                  ? item.documentId.trim()
                  : item.id
              )
            }
            className="text-gray-400 hover:text-red-500 transition-colors p-1 -mt-1 -mr-1"
            aria-label="Supprimer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center bg-gray-50 rounded-lg px-3 py-1">
            <span className="text-sm font-medium text-gray-700">
              Quantité: {quantity}
            </span>
          </div>
          
          <div className="text-right">
            <div className="text-sm font-medium text-emerald-600">
              {fmt(unitPrice)}
            </div>
            <div className="text-xs text-gray-400">{fmt(total)}</div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

function CartEmptyState() {
  return (
    <div className="text-center py-8 px-4">
      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full flex items-center justify-center">
        <ShoppingCart className="w-8 h-8 text-emerald-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-700 mb-1">Votre panier est vide</h3>
      <p className="text-gray-500 text-sm max-w-xs mx-auto">
        Parcourez notre catalogue et découvrez nos produits
      </p>
    </div>
  );
}

function Cart({ onClose }: { onClose?: () => void }) {
  const { cart, removeFromCart } = useContext(CartContext) as CartContextType;

  const { groupedItems, totalItems } = useMemo(() => {
    const groups = new Map<string, { item: CartItem; quantity: number }>();

    cart.forEach((item) => {
      if (!item) {
        return;
      }

      const key = toCartKey(item);
      const entry = groups.get(key);

      if (entry) {
        entry.quantity += 1;
      } else {
        groups.set(key, { item, quantity: 1 });
      }
    });

    return { groupedItems: Array.from(groups.values()), totalItems: cart.length };
  }, [cart]);

  const [pricingMap, setPricingMap] = useState<
    Record<string, { unitPrice: number; title?: string }>
  >({});
  const [apiSubtotal, setApiSubtotal] = useState<number | null>(null);
  const [loadingTotal, setLoadingTotal] = useState(false);

  useEffect(() => {
    const payload = groupedItems.reduce<
      Array<{ id: string; documentId?: string; quantity: number }>
    >((acc, { item, quantity }) => {
      const safeQuantity = Number.isFinite(quantity) ? quantity : 0;
      if (safeQuantity <= 0) {
        return acc;
      }

      const { id } = item;
      if (typeof id !== "string" && typeof id !== "number") {
        return acc;
      }

      const normalizedQuantity = Math.min(safeQuantity, MAX_PER_PRODUCT);
      if (normalizedQuantity <= 0) {
        return acc;
      }

      const normalizedDocumentId =
        typeof item.documentId === "string" && item.documentId.trim().length > 0
          ? item.documentId.trim()
          : undefined;

      acc.push({
        id: id.toString(),
        documentId: normalizedDocumentId,
        quantity: normalizedQuantity,
      });

      return acc;
    }, []);

    if (payload.length === 0) {
      setPricingMap({});
      setApiSubtotal(0);
      setLoadingTotal(false);
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        setLoadingTotal(true);
        const res = await fetch("/api/cart-total", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: payload }),
        });

        if (!res.ok) {
          console.error("Échec du calcul du total", await res.text());
          if (!cancelled) {
            setPricingMap({});
            setApiSubtotal(null);
          }
          return;
        }

        const data = await res.json();
        const parsedTotal = Number(data.total);
        const sanitizedSubtotal =
          Number.isFinite(parsedTotal) && parsedTotal >= 0 ? parsedTotal : null;

        if (!cancelled) {
          setApiSubtotal(sanitizedSubtotal);

          if (Array.isArray(data.items)) {
            const nextPricingMap: Record<
              string,
              { unitPrice: number; title?: string }
            > = {};

            data.items.forEach((raw, index) => {
              const source = payload[index];
              if (!source) {
                return;
              }

              const current = raw as { unitPrice?: unknown; title?: unknown };
              const parsedUnitPrice = Number(current.unitPrice);
              const safeUnitPrice =
                Number.isFinite(parsedUnitPrice) && parsedUnitPrice >= 0
                  ? parsedUnitPrice
                  : 0;

              const rawTitle = current.title;
              const title =
                typeof rawTitle === "string" && rawTitle.trim().length > 0
                  ? rawTitle.trim()
                  : undefined;

              const key = (source.documentId ?? source.id).toString();
              nextPricingMap[key] = { unitPrice: safeUnitPrice, title };
            });

            setPricingMap(nextPricingMap);
          } else {
            setPricingMap({});
          }
        }
      } catch (error) {
        console.error("Échec du calcul du total", error);
        if (!cancelled) {
          setPricingMap({});
          setApiSubtotal(null);
        }
      } finally {
        if (!cancelled) {
          setLoadingTotal(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [groupedItems]);

  const computedSubtotal = useMemo(() => {
    return groupedItems.reduce((sum, { item, quantity }) => {
      const numericQuantity = Number.isFinite(quantity) ? quantity : 0;
      const normalizedQuantity = Math.min(
        Math.max(numericQuantity, 0),
        MAX_PER_PRODUCT
      );

      if (normalizedQuantity <= 0) {
        return sum;
      }

      const key = toCartKey(item);
      const pricing = pricingMap[key];
      const unitPrice = pricing?.unitPrice ?? (Number(item.price) || 0);

      return sum + unitPrice * normalizedQuantity;
    }, 0);
  }, [groupedItems, pricingMap]);

  const subtotal = apiSubtotal ?? computedSubtotal;
  const goCheckoutDisabled = groupedItems.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-[90vw] sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-100 absolute right-0 sm:right-4 top-16 z-50 overflow-hidden flex flex-col max-h-[85vh]"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5" />
            <h2 className="font-semibold text-lg">Mon panier</h2>
          </div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
            {totalItems} {totalItems > 1 ? "articles" : "article"}
          </span>
        </div>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <AnimatePresence initial={false}>
          {groupedItems.length ? (
            <ul className="space-y-3">
              {groupedItems.map(({ item, quantity }) => {
                const numericQuantity = Number.isFinite(quantity) ? quantity : 0;
                const displayQuantity = Math.min(
                  Math.max(numericQuantity, 0),
                  MAX_PER_PRODUCT
                );
                const key = toCartKey(item);
                const pricing = pricingMap[key];
                const unitPrice = pricing?.unitPrice ?? (Number(item.price) || 0);

                return (
                  <CartItemRow
                    key={key}
                    item={item}
                    quantity={displayQuantity}
                    onRemove={removeFromCart}
                    unitPrice={unitPrice}
                    displayTitle={pricing?.title}
                  />
                );
              })}
            </ul>
          ) : (
            <CartEmptyState />
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 bg-gradient-to-b from-white to-emerald-50/50 p-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Sous-total</span>
            <span className="text-lg font-bold text-emerald-600">
              {loadingTotal ? "…" : fmt(subtotal)}
            </span>
          </div>

          <div className="text-xs text-gray-500 text-center">
            Frais de livraison calculés à la validation
          </div>

          <div className="space-y-2">
            <a
              href={goCheckoutDisabled ? "#" : "/cart"}
              className={`block w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium py-3 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-2 ${
                goCheckoutDisabled ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:-translate-y-0.5"
              }`}
            >
              {goCheckoutDisabled ? "Panier vide" : (
                <>Commander maintenant <ArrowRight className="w-4 h-4" /></>
              )}
            </a>

            <button
              type="button"
              onClick={onClose}
              className="block w-full text-center text-sm text-gray-600 hover:text-emerald-700 font-medium py-2.5 px-4 rounded-lg border border-gray-200 hover:border-emerald-200 bg-white transition-colors"
            >
              Continuer mes achats
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;