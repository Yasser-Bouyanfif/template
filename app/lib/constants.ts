const DEFAULT_SERVER_URL = "http://localhost:1337";
const DEFAULT_APP_URL = "http://localhost:3000";

const getEnv = (key: string): string | null => {
  if (typeof process === "undefined") {
    return null;
  }
  const value = process.env?.[key];
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }
  return null;
};

const resolveAppUrl = (): string => {
  const direct =
    getEnv("NEXT_PUBLIC_APP_URL") ||
    getEnv("APP_URL") ||
    getEnv("VERCEL_URL")?.replace(/^https?:\/\//i, "");

  if (direct) {
    if (/^https?:\/\//i.test(direct)) {
      return direct;
    }
    return `https://${direct}`;
  }

  return DEFAULT_APP_URL;
};

export const SERVER_URL =
  getEnv("NEXT_PUBLIC_SERVER_URL") ||
  getEnv("SERVER_URL") ||
  DEFAULT_SERVER_URL;

export const LOCAL_URL = resolveAppUrl();
