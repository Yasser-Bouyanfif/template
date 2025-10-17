export type ProductVariant = {
  id: string;
  label: string;
  grams: number;
  price: number;
  pricePerKilogram: number;
  documentId: string;
};

export type ProductDetails = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  variants: ProductVariant[];
};

const PRODUCT: ProductDetails = {
  id: "rose-of-jericho",
  slug: "rose-of-jericho",
  name: "Rose de Jéricho premium",
  description:
    "Découvrez notre Rose de Jéricho authentique, récoltée de manière responsable dans le désert saharien et préparée avec soin pour un rituel de renaissance unique.",
  image: {
    src: "/package.png",
    alt: "Rose de Jéricho dans son coffret artisanal",
  },
  variants: [
    {
      id: "rose-of-jericho-25g",
      label: "25 g",
      grams: 25,
      price: 4.99,
      pricePerKilogram: 199.6,
      documentId: "rose-of-jericho-25g",
    },
    {
      id: "rose-of-jericho-50g",
      label: "50 g",
      grams: 50,
      price: 8.99,
      pricePerKilogram: 179.8,
      documentId: "rose-of-jericho-50g",
    },
    {
      id: "rose-of-jericho-70g",
      label: "70 g",
      grams: 70,
      price: 11.99,
      pricePerKilogram: 171.29,
      documentId: "rose-of-jericho-70g",
    },
    {
      id: "rose-of-jericho-100g",
      label: "100 g",
      grams: 100,
      price: 15.9,
      pricePerKilogram: 159.0,
      documentId: "rose-of-jericho-100g",
    },
    {
      id: "rose-of-jericho-200g",
      label: "200 g",
      grams: 200,
      price: 27.9,
      pricePerKilogram: 139.5,
      documentId: "rose-of-jericho-200g",
    },
  ],
};

export const getProductDetails = (): ProductDetails => PRODUCT;

export const findVariantById = (
  identifier?: string | number | null
): ProductVariant | null => {
  if (identifier === null || identifier === undefined) {
    return null;
  }

  const normalizedId = String(identifier).trim();
  if (!normalizedId) {
    return null;
  }

  return PRODUCT.variants.find(
    (variant) =>
      variant.id === normalizedId ||
      variant.documentId === normalizedId ||
      String(variant.grams) === normalizedId
  ) ?? null;
};

export const formatVariantTitle = (variant: ProductVariant): string =>
  `${PRODUCT.name} – ${variant.label}`;
