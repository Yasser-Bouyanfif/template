"use client";

import { useContext, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingCart } from "lucide-react";

import {
  CartContext,
  type CartContextType,
  MAX_PER_PRODUCT,
} from "@/app/contexts/CartContext";
import {
  getProductDetails,
  type ProductDetails,
  type ProductVariant,
} from "@/app/lib/productCatalog";

const clampQuantity = (value: number) => {
  if (!Number.isFinite(value)) {
    return 1;
  }
  return Math.min(Math.max(Math.floor(value), 1), MAX_PER_PRODUCT);
};

const product: ProductDetails = getProductDetails();

export default function ProductPage() {
  const { addToCart } = useContext(CartContext) as CartContextType;
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants[0]?.id ?? "",
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedVariant = useMemo<ProductVariant | undefined>(
    () => product.variants.find((variant) => variant.id === selectedVariantId),
    [selectedVariantId],
  );

  const handleVariantChange = (variantId: string) => {
    setSelectedVariantId(variantId);
    setAdded(false);
  };

  const handleAddToCart = () => {
    if (!selectedVariant) {
      return;
    }

    const safeQuantity = clampQuantity(quantity);

    for (let index = 0; index < safeQuantity; index += 1) {
      addToCart({
        id: selectedVariant.id,
        documentId: selectedVariant.documentId,
        title: `${product.name} – ${selectedVariant.label}`,
        price: selectedVariant.price,
        banner: { url: product.image.src, alternativeText: product.image.alt },
        variantLabel: selectedVariant.label,
        weightInGrams: selectedVariant.grams,
      });
    }

    setQuantity(1);
    setAdded(true);
  };

  const totalPrice = selectedVariant
    ? (selectedVariant.price * clampQuantity(quantity)).toFixed(2)
    : "0.00";

  return (
    <section className="bg-[#fdfaf6] py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-start">
        <div className="relative overflow-hidden rounded-3xl border border-[#eadac4] bg-white shadow-[0_25px_60px_rgba(78,52,28,0.08)]">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            width={800}
            height={800}
            className="h-full w-full object-contain"
            priority
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7c4ac]/60 bg-white/80 px-4 py-2 text-sm font-medium text-[#8b7355] shadow-sm">
              Nouvelle Collection
            </span>
            <h1 className="font-serif text-4xl font-bold text-[#1a140f]">
              {product.name}
            </h1>
            <p className="text-lg leading-relaxed text-[#5a4834]">
              {product.description}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-[#2b1b0f]">
              Choisissez votre poids
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.variants.map((variant) => {
                const isSelected = variant.id === selectedVariantId;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => handleVariantChange(variant.id)}
                    className={`flex flex-col items-start rounded-2xl border px-4 py-3 text-left transition ${
                      isSelected
                        ? "border-[#c29a67] bg-[#f9f1e6] shadow-sm"
                        : "border-[#eadac4] bg-white hover:border-[#d7c4ac]"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex w-full items-center justify-between text-sm font-semibold text-[#2b1b0f]">
                      <span>{variant.label}</span>
                      {isSelected && <Check className="h-4 w-4 text-[#c29a67]" />}
                    </div>
                    <p className="mt-1 text-sm text-[#5a4834]">
                      {variant.price.toFixed(2)} € TTC
                    </p>
                    <p className="text-xs text-[#8b7355]">
                      {variant.pricePerKilogram.toFixed(2)} € / kg
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-[#eadac4] bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-3 text-sm font-semibold text-[#2b1b0f]">
                Quantité
                <input
                  type="number"
                  min={1}
                  max={MAX_PER_PRODUCT}
                  value={quantity}
                  onChange={(event) =>
                    setQuantity(clampQuantity(Number(event.target.value)))
                  }
                  className="w-20 rounded-full border border-[#eadac4] bg-[#fdf7ef] px-3 py-2 text-center text-sm text-[#2b1b0f] focus:border-[#c29a67] focus:outline-none"
                />
              </label>

              <div className="ml-auto text-right">
                <p className="text-xs uppercase tracking-wide text-[#8b7355]">
                  Total TTC
                </p>
                <p className="text-2xl font-bold text-[#2b1b0f]">{totalPrice} €</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#c29a67] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#c29a67]/30 transition hover:-translate-y-0.5 hover:bg-[#a67e49]"
            >
              <ShoppingCart className="h-5 w-5" /> Ajouter au panier
            </button>
            {added && (
              <p className="text-sm text-[#2f7a4f]">
                Produit ajouté au panier. <Link href="/cart" className="underline">Voir mon panier</Link>
              </p>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#eadac4] bg-white/70 p-4 text-sm text-[#5a4834]">
              🌿 Plante authentique séchée naturellement
            </div>
            <div className="rounded-2xl border border-[#eadac4] bg-white/70 p-4 text-sm text-[#5a4834]">
              🚚 Livraison standard offerte en France métropolitaine
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
