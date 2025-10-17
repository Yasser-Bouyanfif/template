import { NextResponse } from "next/server";
import {
  findVariantById,
  formatVariantTitle,
} from "@/app/lib/productCatalog";

type CartTotalItem = {
  id: string | number;
  documentId?: string;
  quantity: number;
};

type CalculationResultItem = {
  id: string | number;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  title?: string;
  isValid: boolean;
  error?: string;
};

type CalculationResult = {
  total: number;
  items: CalculationResultItem[];
};

const toSafeQuantity = (value: unknown): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 && parsed <= 100 ? parsed : 0;
};

export async function POST(request: Request) {
  try {
    const { items } = (await request.json().catch(() => ({}))) as {
      items?: unknown;
    };

    if (!Array.isArray(items)) {
      return NextResponse.json({ error: "Invalid items" }, { status: 400 });
    }

    const calculations: CalculationResultItem[] = items.map((raw) => {
      const item = raw as CartTotalItem;
      if (!item || (typeof item.id !== "string" && typeof item.id !== "number")) {
        return {
          id: item?.id ?? "unknown",
          quantity: 0,
          unitPrice: 0,
          subtotal: 0,
          isValid: false,
          error: "Invalid item ID",
        };
      }

      const quantity = toSafeQuantity(item.quantity);
      if (quantity === 0) {
        return {
          id: item.id,
          quantity: 0,
          unitPrice: 0,
          subtotal: 0,
          isValid: false,
          error: "Invalid quantity",
        };
      }

      const variant =
        findVariantById(item.documentId) ?? findVariantById(item.id);

      if (!variant) {
        return {
          id: item.id,
          quantity,
          unitPrice: 0,
          subtotal: 0,
          isValid: false,
          error: "Product not found",
        };
      }

      const unitPrice = Number(variant.price);
      const subtotal = unitPrice * quantity;

      return {
        id: item.id,
        quantity,
        unitPrice,
        subtotal,
        title: formatVariantTitle(variant),
        isValid: unitPrice > 0 && quantity > 0,
      };
    });

    const validItems = calculations.filter((item) => item.isValid);
    const total = validItems.reduce((sum, item) => sum + item.subtotal, 0);

    const result: CalculationResult = {
      total: Math.round(total * 100) / 100,
      items: calculations,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Échec du calcul du total", error);
    return NextResponse.json(
      { error: "Failed to calculate total" },
      { status: 500 }
    );
  }
}
