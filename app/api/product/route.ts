import { NextResponse } from "next/server";
import { getProductDetails } from "@/app/lib/productCatalog";

export function GET() {
  const product = getProductDetails();
  return NextResponse.json({ product });
}
