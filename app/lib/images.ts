export const IMAGE_FALLBACK = "/borne2.png" as const;

export type ImageFormat = {
  url?: string | null;
};

export type BannerImage = {
  id?: number | string | null;
  url?: string | null;
  name?: string | null;
  alternativeText?: string | null;
  caption?: string | null;
  formats?: Record<string, ImageFormat | undefined> | null;
  data?: { attributes?: unknown } | null;
};

const IMAGE_FORMAT_PRIORITY = [
  "large",
  "medium",
  "small",
  "thumbnail",
] as const;

export type BannerImageSource = {
  image: BannerImage | null;
  src: string;
  alt: string;
  isFallback: boolean;
};

export function normalizeBannerImage(value: unknown): BannerImage | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as BannerImage;

  if (typeof candidate.url === "string" && candidate.url.length > 0) {
    return candidate;
  }

  if (candidate.formats && typeof candidate.formats === "object") {
    return candidate;
  }

  if ("data" in candidate && candidate.data && typeof candidate.data === "object") {
    const data = candidate.data as { attributes?: unknown };
    if (data.attributes && typeof data.attributes === "object") {
      return normalizeBannerImage(data.attributes);
    }
  }

  return null;
}

export function selectPrimaryBannerImage(banner: unknown): BannerImage | null {
  if (Array.isArray(banner)) {
    const normalized = banner
      .map((image) => normalizeBannerImage(image))
      .filter((image): image is BannerImage => Boolean(image));

    if (normalized.length > 0) {
      return normalized[normalized.length - 1];
    }

    return null;
  }

  return normalizeBannerImage(banner);
}

export function resolveImageUrl(image: BannerImage | null): string {
  if (!image) {
    return "";
  }

  if (typeof image.url === "string" && image.url.length > 0) {
    return image.url;
  }

  if (image.formats && typeof image.formats === "object") {
    for (const key of IMAGE_FORMAT_PRIORITY) {
      const candidate = image.formats?.[key]?.url;
      if (candidate) {
        return candidate;
      }
    }

    for (const value of Object.values(image.formats)) {
      if (value?.url) {
        return value.url;
      }
    }
  }

  return "";
}

const isObject = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === "object";

const pickFirstString = (...values: Array<unknown>): string | null => {
  for (const value of values) {
    if (typeof value === "string" && value.trim().length > 0) {
      return value;
    }
  }
  return null;
};

export function getBannerImageSource(
  source: unknown,
  options?: {
    fallbackSrc?: string;
    fallbackAlt?: string;
  }
): BannerImageSource {
  const fallbackSrc = options?.fallbackSrc ?? IMAGE_FALLBACK;

  if (isObject(source) && typeof source.src === "string") {
    const src = source.src.length > 0 ? source.src : fallbackSrc;
    const alt =
      pickFirstString(source.alt, options?.fallbackAlt, source.title) ??
      "Produit";
    const image = isObject(source.image) ? (source.image as BannerImage) : null;
    const isFallback = src === fallbackSrc || source.src.length === 0;

    return {
      image,
      src,
      alt,
      isFallback,
    };
  }

  let banner: unknown = null;
  let title: string | null = null;

  if (isObject(source)) {
    if ("attributes" in source && isObject(source.attributes)) {
      const attributes = source.attributes as Record<string, unknown>;
      if (attributes.banner !== undefined) {
        banner = attributes.banner;
      }
      if (typeof attributes.title === "string") {
        title = attributes.title;
      }
    }

    if (source.banner !== undefined) {
      banner = source.banner;
    }

    if (typeof source.title === "string") {
      title = source.title;
    }
  } else {
    banner = source;
  }

  if (isObject(banner) && typeof banner.src === "string") {
    const src = banner.src.length > 0 ? banner.src : fallbackSrc;
    const alt =
      pickFirstString(banner.alt, options?.fallbackAlt, title) ?? "Produit";
    const image = isObject(banner.image) ? (banner.image as BannerImage) : null;
    const isFallback = src === fallbackSrc || banner.src.length === 0;

    return {
      image,
      src,
      alt,
      isFallback,
    };
  }

  const primaryImage = selectPrimaryBannerImage(banner);
  const alt =
    pickFirstString(
      primaryImage?.alternativeText,
      primaryImage?.caption,
      primaryImage?.name,
      options?.fallbackAlt,
      title
    ) ?? "Produit";

  const rawSrc = resolveImageUrl(primaryImage);

  if (!rawSrc) {
    return {
      image: primaryImage,
      src: fallbackSrc,
      alt,
      isFallback: true,
    };
  }

  return {
    image: primaryImage,
    src: rawSrc,
    alt,
    isFallback: false,
  };
}

export function ensureImageUrl(src: string, baseUrl?: string | null): string {
  if (!src) {
    return src;
  }

  if (/^https?:\/\//i.test(src)) {
    return src;
  }

  if (!baseUrl) {
    return src;
  }

  return `${baseUrl}${src}`;
}
