"use client";

import { useContext, useEffect, useMemo } from "react";
import {
  CartContext,
  CartContextType,
  CartItem,
  MAX_PER_PRODUCT,
} from "../contexts/CartContext";
import { getBannerImageSource } from "../lib/images";
import {
  findVariantById,
  formatVariantTitle,
  getProductDetails,
} from "../lib/productCatalog";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const toCartKey = (item: CartItem) =>
  (item.documentId ?? item.id).toString();

const product = getProductDetails();

function CartPage() {
  const router = useRouter();
  const { cart, addToCart, removeFromCart, syncCartTotals } = useContext(
    CartContext
  ) as CartContextType;

  const groups = useMemo(() => {
    const map = new Map<string, { item: CartItem; quantity: number }>();

    cart.forEach((item) => {
      if (!item) {
        return;
      }

      const key = toCartKey(item);
      const entry = map.get(key);
      if (entry) {
        entry.quantity += 1;
      } else {
        map.set(key, { item, quantity: 1 });
      }
    });

    return Array.from(map.values());
  }, [cart]);

  const subtotal = useMemo(() => {
    return groups.reduce((acc, { item, quantity }) => {
      const normalizedQuantity = Number.isFinite(quantity)
        ? Math.min(Math.max(Math.floor(quantity), 0), MAX_PER_PRODUCT)
        : 0;

      if (normalizedQuantity <= 0) {
        return acc;
      }

      const variant = findVariantById(item.documentId ?? item.id);
      const unitPrice =
        typeof item.price === "number" && Number.isFinite(item.price)
          ? Math.max(item.price, 0)
          : variant?.price ?? 0;

      return acc + unitPrice * normalizedQuantity;
    }, 0);
  }, [groups]);

  useEffect(() => {
    syncCartTotals({ subtotal, total: subtotal });
  }, [subtotal, syncCartTotals]);

  const total = subtotal;

  const hasItems = groups.length > 0;

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-8 sm:px-6 sm:pt-8 sm:pb-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Mon panier</h1>
            <p className="text-sm text-slate-600">
              Vérifiez vos articles avant de passer au paiement.
            </p>
          </div>
          <Link
            href="/product"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-800"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Continuer mes achats
          </Link>
        </div>

        {!hasItems ? (
          <div className="min-h-[40vh] flex flex-col items-center justify-center text-center">
            <p className="text-slate-600">Votre panier est vide.</p>
            <Link
              href="/product"
              className="btn btn-success text-white flex items-center gap-2 mt-4"
            >
              Découvrir le produit
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white border border-gray-100 rounded-lg shadow-sm">
                <ul className="divide-y divide-gray-100">
                  {groups.map(({ item, quantity }) => {
                    const numericQuantity = Number.isFinite(quantity) ? quantity : 0;
                    const displayQuantity = Math.max(
                      Math.min(numericQuantity, MAX_PER_PRODUCT),
                      0,
                    );
                    const canIncrease = displayQuantity < MAX_PER_PRODUCT;
                    const key = toCartKey(item);
                    const variant = findVariantById(item.documentId ?? item.id);
                    const unitPrice =
                      typeof item.price === "number" && Number.isFinite(item.price)
                        ? Math.max(item.price, 0)
                        : variant?.price ?? 0;
                    const lineTotal = (unitPrice * displayQuantity).toFixed(2);
                    const title =
                      item.title ??
                      (variant ? formatVariantTitle(variant) : product.name);
                    const variantLabel =
                      item.variantLabel ?? variant?.label ?? undefined;
                    const weightInfo =
                      typeof item.weightInGrams === "number" && item.weightInGrams > 0
                        ? `${item.weightInGrams} g`
                        : variant?.grams
                          ? `${variant.grams} g`
                          : null;
                    const { src: rawImageSrc, alt } = getBannerImageSource({
                      banner: item.banner ?? null,
                      src: product.image.src,
                      alt: product.image.alt,
                      title,
                    });
                    const imageSrc = rawImageSrc?.trim() || product.image.src;
                    const imageAlt = alt?.trim() || product.image.alt;
                    const hasImage = imageSrc.length > 0;

                    return (
                      <li key={key} className="p-4 sm:p-5 flex items-center gap-4">
                        {hasImage ? (
                          <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={96}
                            height={96}
                            className="h-20 w-20 sm:h-24 sm:w-24 rounded-md object-cover bg-gray-50 border"
                          />
                        ) : (
                          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-md border border-dashed border-gray-200 bg-gray-50 flex items-center justify-center text-xs text-gray-400">
                            Aucune image
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <h3 className="text-sm sm:text-base font-medium text-slate-900 line-clamp-1">
                                {title}
                              </h3>
                              {(variantLabel || weightInfo) && (
                                <p className="mt-0.5 text-xs text-slate-500">
                                  {[variantLabel, weightInfo]
                                    .filter(Boolean)
                                    .join(" • ")}
                                </p>
                              )}
                              <p className="mt-0.5 text-xs text-slate-600">
                                {unitPrice.toFixed(2)} € TTC
                              </p>
                            </div>
                            <button
                              type="button"
                              aria-label="Supprimer l'article"
                              onClick={() => {
                                for (let i = 0; i < displayQuantity; i += 1) {
                                  removeFromCart(item.id);
                                }
                              }}
                              className="p-2 rounded-md hover:bg-gray-100 text-slate-500 hover:text-slate-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="inline-flex items-center rounded-md border border-slate-300 bg-white shadow-sm">
                              <button
                                type="button"
                                aria-label="Diminuer la quantité"
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 text-slate-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 min-w-[3rem] text-center text-sm text-slate-900">
                                {displayQuantity}
                              </span>
                              <button
                                type="button"
                                aria-label="Augmenter la quantité"
                                onClick={() => {
                                  if (canIncrease) addToCart(item);
                                }}
                                disabled={!canIncrease}
                                className="p-2 text-slate-600 hover:bg-gray-50 active:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="text-right">
                              <p className="text-sm text-slate-500">Total</p>
                              <p className="text-base font-semibold text-slate-900">{lineTotal} €</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 sticky top-24">
                <h2 className="text-base font-semibold text-slate-900">Récapitulatif</h2>

                <dl className="mt-4 space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <dt>Sous-total</dt>
                    <dd>{`${subtotal.toFixed(2)} €`}</dd>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <dt>Livraison standard</dt>
                    <dd>Offerte</dd>
                  </div>
                  <div className="border-t border-gray-100 pt-2 flex justify-between text-base font-semibold text-slate-900">
                    <dt>Total</dt>
                    <dd>{`${total.toFixed(2)} €`}</dd>
                  </div>
                </dl>

                <p className="mt-3 text-xs text-slate-500">
                  La livraison express sera proposée à l&apos;étape suivante.
                </p>

                <div className="mt-5">
                  <button
                    onClick={() => router.push("/checkout/address")}
                    disabled={!hasItems}
                    className="btn btn-soft btn-primary btn-block btn-lg disabled:opacity-50"
                  >
                    Continuer
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartPage;
