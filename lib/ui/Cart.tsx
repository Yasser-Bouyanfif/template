"use client";

import React, { useContext, useMemo } from "react";
import { X, ShoppingCart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CartContext,
  CartContextType,
  CartItem,
  MAX_PER_PRODUCT,
} from "@/app/contexts/CartContext";
import { getBannerImageSource } from "@/app/lib/images";
import {
  findVariantById,
  formatVariantTitle,
  getProductDetails,
} from "@/app/lib/productCatalog";

const fmt = (v: number) => v.toFixed(2) + " €";

const toCartKey = (item: CartItem) => (item.documentId ?? item.id).toString();

type FallbackImage = {
  src: string;
  alt: string;
};

function CartItemRow({
  item,
  quantity,
  onRemove,
  unitPrice,
  displayTitle,
  fallbackImage,
}: {
  item: CartItem;
  quantity: number;
  onRemove: (id: string | number) => void;
  unitPrice: number;
  displayTitle?: string;
  fallbackImage: FallbackImage;
}) {
  const total = unitPrice * quantity;
  const { src, alt } = getBannerImageSource({
    banner: item.banner ?? null,
    src: fallbackImage.src,
    alt: fallbackImage.alt,
    title: displayTitle ?? item.title ?? fallbackImage.alt,
  });

  let resolvedSrc = (src ?? "").trim();
  if (!resolvedSrc) {
    resolvedSrc = fallbackImage.src;
  } else if (
    !resolvedSrc.startsWith("http://") &&
    !resolvedSrc.startsWith("https://") &&
    !resolvedSrc.startsWith("//")
  ) {
    resolvedSrc = resolvedSrc.startsWith("/")
      ? resolvedSrc
      : `/${resolvedSrc.replace(/^\/+/, "")}`;
  }

  const hasImage = resolvedSrc.length > 0;
  const subtitleParts: string[] = [];
  if (typeof item.variantLabel === "string" && item.variantLabel.trim()) {
    subtitleParts.push(item.variantLabel.trim());
  }
  if (typeof item.weightInGrams === "number" && item.weightInGrams > 0) {
    subtitleParts.push(`${item.weightInGrams} g`);
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
      className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200"
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
          <div className="min-w-0">
            <h3 className="font-medium text-gray-900 line-clamp-2 leading-tight">
              {displayTitle ?? item.title}
            </h3>
            {subtitleParts.length > 0 && (
              <p className="mt-1 text-xs text-gray-500">
                {subtitleParts.join(" • ")}
              </p>
            )}
          </div>
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
            <div className="text-sm font-medium text-gray-900">
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
      <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
        <ShoppingCart className="w-8 h-8 text-gray-400" />
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

  const product = useMemo(() => getProductDetails(), []);
  const fallbackImage = product.image;

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
 
  const subtotal = useMemo(() => {
    return groupedItems.reduce((sum, { item, quantity }) => {
      const numericQuantity = Number.isFinite(quantity) ? quantity : 0;
      const normalizedQuantity = Math.min(
        Math.max(numericQuantity, 0),
        MAX_PER_PRODUCT
      );

      if (normalizedQuantity <= 0) {
        return sum;
      }

      const variant = findVariantById(item.documentId ?? item.id);
      const unitPrice = (() => {
        if (typeof item.price === "number" && Number.isFinite(item.price)) {
          return Math.max(item.price, 0);
        }
        return variant?.price ?? 0;
      })();

      return sum + unitPrice * normalizedQuantity;
    }, 0);
  }, [groupedItems]);
  const goCheckoutDisabled = groupedItems.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-[90vw] sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-100 absolute right-0 sm:right-4 top-16 z-50 overflow-hidden flex flex-col max-h-[85vh]"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-900">
            <ShoppingCart className="w-5 h-5" />
            <h2 className="font-semibold text-lg">Mon panier</h2>
          </div>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
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
                const variant = findVariantById(item.documentId ?? item.id);
                const unitPrice = (() => {
                  if (typeof item.price === "number" && Number.isFinite(item.price)) {
                    return Math.max(item.price, 0);
                  }
                  return variant?.price ?? 0;
                })();
                const rawTitle =
                  typeof item.title === "string" && item.title.trim().length > 0
                    ? item.title.trim()
                    : undefined;
                const displayTitle = rawTitle ?? (variant ? formatVariantTitle(variant) : undefined);

                return (
                  <CartItemRow
                    key={key}
                    item={item}
                    quantity={displayQuantity}
                    onRemove={removeFromCart}
                    unitPrice={unitPrice}
                    displayTitle={displayTitle}
                    fallbackImage={fallbackImage}
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
      <div className="border-t border-gray-100 bg-white p-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Sous-total</span>
            <span className="text-lg font-bold text-gray-900">{fmt(subtotal)}</span>
          </div>

          <div className="text-xs text-gray-500 text-center">
            Frais de livraison calculés à la validation
          </div>

          <div className="space-y-2">
            <a
              href={goCheckoutDisabled ? "#" : "/cart"}
              className={`block w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-2 ${
                goCheckoutDisabled ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg hover:-translate-y-0.5"
              }`}
            >
              {goCheckoutDisabled ? "Panier vide" : (
                <>Commander maintenant <ArrowRight className="w-4 h-4" /></>
              )}
            </a>

            <button
              type="button"
              onClick={onClose}
              className="block w-full text-center text-sm text-gray-600 hover:text-gray-900 font-medium py-2.5 px-4 rounded-lg border border-gray-200 hover:border-gray-300 bg-white transition-colors"
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
