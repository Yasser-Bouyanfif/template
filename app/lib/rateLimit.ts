const store = new Map<string, { count: number; expiresAt: number }>();

export type RateLimitOptions = {
  windowMs?: number;
  maxRequests?: number;
};

export type RateLimitResult = {
  limited: boolean;
  retryAfterSeconds: number;
  remaining: number;
};

const DEFAULT_WINDOW = 60_000;
const DEFAULT_MAX_REQUESTS = 5;

const now = () => Date.now();

export function takeRateLimitToken(
  key: string,
  options: RateLimitOptions = {},
): RateLimitResult {
  const windowMs = options.windowMs ?? DEFAULT_WINDOW;
  const maxRequests = options.maxRequests ?? DEFAULT_MAX_REQUESTS;
  const currentTime = now();
  const entry = store.get(key);

  if (!entry || entry.expiresAt <= currentTime) {
    store.set(key, { count: 1, expiresAt: currentTime + windowMs });
    return { limited: false, retryAfterSeconds: 0, remaining: Math.max(maxRequests - 1, 0) };
  }

  if (entry.count >= maxRequests) {
    const retryAfterSeconds = Math.max(0, Math.ceil((entry.expiresAt - currentTime) / 1000));
    return { limited: true, retryAfterSeconds, remaining: 0 };
  }

  entry.count += 1;
  store.set(key, entry);

  return {
    limited: false,
    retryAfterSeconds: 0,
    remaining: Math.max(maxRequests - entry.count, 0),
  };
}

export function getClientIdentifier(request: Request): string {
  const headers = request.headers;

  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const [first] = forwardedFor.split(",");
    if (first && first.trim().length > 0) {
      return first.trim();
    }
  }

  const realIp =
    headers.get("cf-connecting-ip") ||
    headers.get("x-real-ip") ||
    headers.get("x-client-ip");
  if (realIp && realIp.trim().length > 0) {
    return realIp.trim();
  }

  const userAgent = headers.get("user-agent") ?? "unknown";
  const referer = headers.get("referer") ?? "";
  return `${userAgent}:${referer}`;
}
