"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { SERVER_URL } from "@/app/lib/constants";
import { ensureImageUrl, getBannerImageSource } from "@/app/lib/images";
import type { BannerImage } from "@/app/lib/images";

type ProductAttributes = {
  id?: number | string;
  documentId?: string;
  title?: string;
  description?: string;
  price?: number;
  oldPrice?: number | null;
  banner?: BannerImage[] | BannerImage | null;
};

type Product = ProductAttributes & {
  attributes?: ProductAttributes | null;
};

type Pagination = {
  page?: number;
  pageCount?: number;
  total?: number;
};

type ProductsPayload = {
  data?: unknown;
  meta?: {
    pagination?: Pagination;
  } | null;
};

function resolveProductImage(product: Product) {
  const { src, alt, isFallback } = getBannerImageSource(product);
  const imageSrc = isFallback ? src : ensureImageUrl(src, SERVER_URL);
  return { src: imageSrc, alt };
}

function normalizeProducts(data: unknown): Product[] {
  if (Array.isArray(data)) {
    return data as Product[];
  }
  if (data && typeof data === "object") {
    return [data as Product];
  }
  return [];
}

function extractPagination(meta: unknown): Pagination | null {
  if (meta && typeof meta === "object" && "pagination" in meta) {
    const { pagination } = meta as { pagination?: Pagination };
    if (pagination && typeof pagination === "object") {
      return pagination;
    }
  }
  return null;
}

function getProductData(product: Product) {
  const attributes = product.attributes ?? product;
  return {
    id: attributes.id ?? product.id,
    title: attributes.title ?? product.title,
    description: attributes.description ?? product.description,
    price: attributes.price ?? product.price,
    oldPrice:
      attributes.oldPrice ??
      ("oldPrice" in product ? (product as ProductAttributes).oldPrice ?? null : null),
  };
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/products?page=${page}`, {
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Statut ${response.status}`);
        }

        const payload: ProductsPayload = await response.json();
        if (!active) return;

        setProducts(normalizeProducts(payload?.data));

        const pagination = extractPagination(payload?.meta ?? null);
        const nextPageCount = pagination?.pageCount;
        const safePageCount =
          Number.isFinite(nextPageCount) && typeof nextPageCount === "number"
            ? Math.max(1, Math.floor(nextPageCount))
            : 1;

        setPageCount(safePageCount);

        if (page > safePageCount) {
          setPage(safePageCount);
        }
      } catch (err) {
        if (!active) return;
        if ((err as Error).name === "AbortError") return;
        console.error("Erreur lors de la récupération des produits:", err);
        setError("Impossible de charger les produits pour le moment.");
        setProducts([]);
        setPageCount(1);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      active = false;
      controller.abort();
    };
  }, [page]);

  const hasProducts = products.length > 0;

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Boutique</h1>
          <p className="text-slate-600">Découvrez nos produits disponibles.</p>
        </div>

        <div className="min-h-[200px]">
          {loading ? (
            <p className="text-slate-500">Chargement des produits…</p>
          ) : error ? (
            <p className="text-slate-500">{error}</p>
          ) : !hasProducts ? (
            <p className="text-slate-500">Aucun produit disponible pour le moment.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => {
                  const { id, title, description, price, oldPrice } = getProductData(product);
                  const { src, alt } = resolveProductImage(product);
                  const hasPrice = typeof price === "number";
                  const hasPromotion =
                    hasPrice && typeof oldPrice === "number" && oldPrice > price;
                  const formattedPrice = hasPrice
                    ? price.toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : null;
                  const formattedOldPrice = hasPromotion
                    ? oldPrice.toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : null;
                  const discountPercentage = hasPromotion
                    ? Math.round(((oldPrice - price) / oldPrice) * 100)
                    : null;
                  const href = id ? `/product/${id}` : "#";

                  return (
                    <div
                      key={id || `product-${index}`}
                      className="m-0 h-full min-h-[560px] flex flex-col border rounded-xl overflow-hidden shadow-sm hover:shadow transition-shadow"
                    >
                      <div className="relative h-[400px] bg-gray-50">
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          unoptimized
                          sizes="(max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col">
                        {formattedPrice && (
                          <div className="flex flex-col gap-1 mb-3">
                            <div className="flex items-center gap-2 pl-1">
                              <span className="text-xs uppercase tracking-wide text-slate-500">
                                TTC
                              </span>
                              {discountPercentage !== null && discountPercentage > 0 && (
                                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                                  -{discountPercentage}%
                                </span>
                              )}
                            </div>
                            <div
                              className={`inline-flex items-baseline gap-2 rounded-lg px-3 py-1 ${
                                hasPromotion
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-slate-100 text-slate-900"
                              }`}
                            >
                              <p
                                className={`text-lg font-semibold ${
                                  hasPromotion ? "text-emerald-700" : "text-slate-900"
                                }`}
                              >
                                {formattedPrice} €
                              </p>
                              {formattedOldPrice && (
                                <span className="text-sm text-slate-500 line-through">
                                  {formattedOldPrice} €
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                        <h3 className="text-slate-800 font-medium text-sm md:text-base line-clamp-1">
                          {title}
                        </h3>
                        {description && (
                          <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                            {description}
                          </p>
                        )}
                        <div className="mt-auto pt-3">
                          <Link
                            href={href}
                            className="btn btn-soft btn-sm md:btn-md w-full"
                            aria-disabled={!id}
                          >
                            Voir le produit
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center gap-2 mt-8 flex-wrap">
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setPage(pageNumber)}
                    className={`btn btn-sm md:btn-md min-w-[40px] ${
                      page === pageNumber ? 'bg-black text-white' : 'bg-transparent text-black border border-black hover:bg-gray-100'
                    } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
