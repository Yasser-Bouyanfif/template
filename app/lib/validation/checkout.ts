import { z } from "zod";

const numericString = z
  .string()
  .trim()
  .min(1, "L'identifiant du produit est invalide.");

const productIdSchema = z.union([
  z.number().int().positive(),
  numericString,
]);

const documentIdSchema = z
  .string()
  .trim()
  .min(1, "L'identifiant du document est invalide.")
  .max(128, "L'identifiant du document est invalide.");

const quantitySchema = z
  .number({ required_error: "La quantité est invalide." })
  .int("La quantité est invalide.")
  .min(1, "La quantité doit être supérieure à zéro.")
  .max(100, "La quantité maximale est dépassée.");

const checkoutItemSchema = z.object({
  id: productIdSchema,
  documentId: documentIdSchema.optional(),
  quantity: quantitySchema,
});

export const checkoutSessionSchema = z.object({
  items: z
    .array(checkoutItemSchema)
    .min(1, "Au moins un produit est requis pour la commande."),
  shippingMethod: z.enum(["standard", "express"]),
});

export type CheckoutSessionPayload = z.infer<typeof checkoutSessionSchema>;
