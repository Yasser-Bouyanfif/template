"use client";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { SERVER_URL } from "@/app/lib/constants";
import { ensureImageUrl, getBannerImageSource } from "@/app/lib/images";
import type { BannerImage } from "@/app/lib/images";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 },
};

type BannerImageWithFormats = BannerImage & {
  formats?: Record<string, { url?: string | null } | undefined> | null;
};

type ProductAttributes = {
  id?: number | string;
  title?: string;
  price?: number;
  description?: string;
  banner?: BannerImageWithFormats[] | BannerImageWithFormats | null;
};

type Product = ProductAttributes & {
  attributes?: ProductAttributes | null;
};

function resolveProductImage(product: Product) {
  const { src, alt, isFallback } = getBannerImageSource(product);
  const imageSrc = isFallback ? src : ensureImageUrl(src, SERVER_URL);
  return { src: imageSrc, alt };
}

function Arrow({
  onClick,
  direction,
}: {
  onClick?: () => void;
  direction: "left" | "right";
}) {
  const common =
    "absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/90 hover:bg-black transition-colors flex items-center justify-center shadow-sm";
  const side = direction === "left" ? "left-3" : "right-3";
  return (
    <button
      aria-label={direction === "left" ? "Précédent" : "Suivant"}
      onClick={onClick}
      className={`${common} ${side}`}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-5 h-5 text-white" />
      ) : (
        <ChevronRight className="w-5 h-5 text-white" />
      )}
    </button>
  );
}

export default function ProductCarouselSimple() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        const response = await fetch("/api/products", {
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Statut ${response.status}`);
        }

        const payload: { data?: unknown } = await response.json();
        if (!alive) return;

        const data = Array.isArray(payload?.data)
          ? payload.data
          : payload?.data
            ? [payload.data]
            : [];

        setProducts(data as Product[]);
      } catch (error) {
        if (!alive || (error as Error).name === "AbortError") {
          return;
        }
        console.error("Erreur lors du chargement des produits", error);
        setProducts([]);
      } finally {
        if (alive) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      alive = false;
      controller.abort();
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-600">
            Collection Signature
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Coffrets & accessoires ChajaratMariam
          </h2>
          <p className="mt-3 text-slate-600">
            Sélectionnez la rose idéale pour vos rituels de bien-être, accompagnée de nos essentiels du désert.
          </p>
        </div>

        <div className="relative">
          {loading ? (
            <p className="py-10 text-center text-slate-500">Chargement de nos trésors…</p>
          ) : products.length === 0 ? (
            <p className="py-10 text-center text-slate-500">
              Les coffrets reviennent très vite : inscrivez-vous à notre newsletter pour être prévenu(e).
            </p>
          ) : (
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={5000}
              keyBoardControl
              customLeftArrow={<Arrow direction="left" />}
              customRightArrow={<Arrow direction="right" />}
              containerClass="pb-6"
              itemClass="px-6"
              draggable
            >
              {products.map((product, index) => {
                const attributes = product.attributes ?? product;
                const title = attributes?.title || "Produit";
                const description =
                  attributes?.description || "Description non disponible";
                const price =
                  typeof attributes?.price === "number"
                    ? `${attributes.price} €`
                    : "Prix non défini";
                const { src: imageSrc, alt: imageAlt } = resolveProductImage(product);
                const key = attributes?.id ?? product.id ?? index;

                return (
                  <div key={String(key)} className="m-0 h-full min-h-[560px] flex flex-col">
                    <div className="relative h-[400px]">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        unoptimized
                        sizes="(max-width: 1324px) 90vw, 20vw"
                        className="object-cover rounded-xl"
                      />
                    </div>

                    <div className="mt-4 space-y-2">
                      {price && (
                        <p className="text-base md:text-lg font-semibold text-emerald-600">
                          {price} <span className="text-xs text-slate-500">TTC</span>
                        </p>
                      )}
                      <h3 className="text-slate-900 font-semibold text-[15px] md:text-lg">
                        {title}
                      </h3>
                      {description && (
                        <p className="text-sm text-slate-500 line-clamp-2">{description}</p>
                      )}
                    </div>

                    <div className="mt-auto pt-4">
                      <Link
                        href={`/product/${product.id}`}
                        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
                        aria-label={`Voir le produit ${title}`}
                      >
                        Voir le coffret
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
