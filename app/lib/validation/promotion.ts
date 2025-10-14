import { z } from "zod";

const promotionCodeBase = z
  .string({ required_error: "Le code promotionnel est requis." })
  .trim()
  .min(1, "Le code promotionnel est requis.")
  .max(64, "Le code promotionnel ne peut pas dépasser 64 caractères.");

export const promotionCodeSchema = promotionCodeBase;

export const promotionRequestSchema = z.object({
  code: promotionCodeBase,
});

export type PromotionRequestPayload = z.infer<typeof promotionRequestSchema>;
