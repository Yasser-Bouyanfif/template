import ProductPageContent from "./ProductPageContent";
import { getProductDetails } from "@/app/lib/productCatalog";

export default function ProductPage() {
  const product = getProductDetails();

  return <ProductPageContent product={product} />;
}
