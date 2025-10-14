const readEnv = (key: string): string => {
  if (typeof process === "undefined" || !process.env) {
    return "";
  }

  const value = process.env[key];
  return typeof value === "string" ? value : "";
};

export const RESEND_API_KEY = readEnv("RESEND_API_KEY");
export const STRIPE_SECRET_KEY = readEnv("STRIPE_SECRET_KEY");
export const GOOGLE_API_KEY = readEnv("GOOGLE_API_KEY");
export const GOOGLE_PLACE_ID = readEnv("GOOGLE_PLACE_ID");
export const API_URL = readEnv("API_URL");
export const API_KEY = readEnv("API_KEY");
