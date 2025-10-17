import Stripe from "stripe";
import { NextResponse } from "next/server";
import { STRIPE_SECRET_KEY } from "../../lib/serverEnv";
import { LOCAL_URL } from "@/app/lib/constants";
import {
  checkoutSessionSchema,
  type CheckoutSessionPayload,
} from "@/app/lib/validation/checkout";
import {
  findVariantById,
  formatVariantTitle,
} from "@/app/lib/productCatalog";

const DEFAULT_PRODUCT_NAME = "Produit CHAJARATMARIAM";
const MAX_PRICE_IN_CENTS = 50_000_000;
const EXPRESS_SHIPPING_PRICE_IN_CENTS = 1290;
const EXPRESS_SHIPPING_LABEL = "Livraison express";

let stripeClient: Stripe | null = null;

const getStripeClient = (): Stripe => {
  const apiKey = STRIPE_SECRET_KEY?.trim();
  if (!apiKey) {
    throw new CheckoutValidationError(
      "La configuration Stripe est invalide. Veuillez réessayer plus tard.",
    );
  }

  if (!stripeClient) {
    stripeClient = new Stripe(apiKey);
  }

  return stripeClient;
};

class CheckoutValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CheckoutValidationError";
  }
}

const parsePrice = (value: unknown): number | null => {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number.parseFloat(value);
    if (Number.isFinite(parsed) && parsed > 0) {
      return parsed;
    }
  }

  return null;
};

const toCheckoutLineItem = async (
  item: CheckoutSessionPayload["items"][number],
): Promise<Stripe.Checkout.SessionCreateParams.LineItem> => {
  const productId =
    typeof item.id === "number" ? String(item.id) : item.id.trim();
  if (!productId) {
    throw new CheckoutValidationError(
      "Un identifiant de produit fourni est invalide.",
    );
  }

  const variant =
    findVariantById(item.documentId) ?? findVariantById(productId);

  if (!variant) {
    throw new CheckoutValidationError(
      "Un produit de la commande est introuvable.",
    );
  }

  const price = parsePrice(variant.price);

  if (price === null) {
    throw new CheckoutValidationError(
      "Le prix d'un produit de la commande est invalide.",
    );
  }

  const unitAmount = Math.round(price * 100);

  if (!Number.isFinite(unitAmount) || unitAmount <= 0) {
    throw new CheckoutValidationError(
      "Le prix d'un produit de la commande est invalide.",
    );
  }

  if (unitAmount > MAX_PRICE_IN_CENTS) {
    throw new CheckoutValidationError(
      "Le prix d'un produit dépasse la limite autorisée.",
    );
  }

  return {
    price_data: {
      currency: "eur",
      product_data: {
        name: formatVariantTitle(variant) || DEFAULT_PRODUCT_NAME,
      },
      unit_amount: unitAmount,
    },
    quantity: item.quantity,
  };
};

const buildLineItems = async (
  payload: CheckoutSessionPayload,
): Promise<Stripe.Checkout.SessionCreateParams.LineItem[]> => {
  const productLineItems = await Promise.all(
    payload.items.map((item) => toCheckoutLineItem(item)),
  );

  if (!productLineItems.length) {
    throw new CheckoutValidationError(
      "Aucun article valide n'a été trouvé dans la commande.",
    );
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    ...productLineItems,
  ];

  if (payload.shippingMethod === "express") {
    lineItems.push({
      price_data: {
        currency: "eur",
        product_data: { name: EXPRESS_SHIPPING_LABEL },
        unit_amount: EXPRESS_SHIPPING_PRICE_IN_CENTS,
      },
      quantity: 1,
    });
  }

  return lineItems;
};

export async function POST(request: Request) {
  try {
    const jsonBody = await request.json().catch(() => null);
    if (!jsonBody || typeof jsonBody !== "object") {
      return NextResponse.json(
        { error: "Le corps de la requête est invalide." },
        { status: 400 },
      );
    }

    const parsedBody = checkoutSessionSchema.safeParse(jsonBody);
    if (!parsedBody.success) {
      const firstIssue = parsedBody.error.issues[0];
      return NextResponse.json(
        {
          error:
            firstIssue?.message ??
            "Les informations fournies pour la commande sont invalides.",
        },
        { status: 400 },
      );
    }

    const payload = parsedBody.data;

    const stripe = getStripeClient();

    const lineItems = await buildLineItems(payload);

    const session = await stripe.checkout.sessions.create({
      success_url: `${LOCAL_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${LOCAL_URL}/cart`,
      mode: "payment",
      line_items: lineItems,
      payment_method_types: ["card"],
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erreur lors de la création de la session de paiement", error);

    if (error instanceof CheckoutValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de la création de la session de paiement.",
      },
      { status: 500 },
    );
  }
}
