import { NextResponse } from "next/server";

import productApis from "@/app/strapi/productApis";

type ProductResponse = {
  data?: unknown;
};

type RouteParams = {
  params: Promise<{
    productId?: string;
  }>;
};

export async function GET(_request: Request, route: RouteParams) {
  try {
    const { productId } = await route.params;

    if (!productId) {
      return NextResponse.json(
        { error: "Identifiant de produit manquant" },
        { status: 400 }
      );
    }

    const res = await productApis.getProductById({
      id: productId,
      documentId: productId,
    });
    const payload: ProductResponse = res?.data ?? {};

    const rawData = Array.isArray(payload.data)
      ? payload.data[0] ?? null
      : payload.data ?? null;

    if (!rawData) {
      return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
    }
    
    return NextResponse.json({ data: rawData });
  } catch (error) {
    console.error("Erreur de route API :", error);
    return NextResponse.json(
      { error: "Erreur de chargement du produit" },
      { status: 500 }
    );
  }
}