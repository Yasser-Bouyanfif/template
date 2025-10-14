export type BannerImageFormat = {
  url?: string | null;
};

export type BannerImage = {
  id?: number | string | null;
  url?: string | null;
  alternativeText?: string | null;
  caption?: string | null;
  formats?: Record<string, BannerImageFormat | null | undefined> | null;
};

export type BannerImageSource = {
  src: string;
  alt: string;
  isFallback: boolean;
  image: BannerImage | null;
};

type BannerInput =
  | BannerImage
  | BannerImage[]
  | BannerImageSource
  | null
  | undefined
  | {
      banner?: BannerImage | BannerImage[] | BannerImageSource | null | undefined;
      image?: BannerImage | BannerImageSource | null | undefined;
      src?: string | null;
      alt?: string | null;
      title?: string | null;
    };

const FALLBACK_SRC = "/window.svg";
const FALLBACK_ALT = "Image indisponible";

const isBannerImage = (value: unknown): value is BannerImage => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as BannerImage;
  return (
    typeof candidate.url === "string" ||
    (candidate.formats !== undefined && candidate.formats !== null)
  );
};

const isBannerSource = (value: unknown): value is BannerImageSource => {
  if (!value || typeof value !== "object") {
    return false;
  }

  return (
    typeof (value as { src?: unknown }).src === "string" &&
    typeof (value as { alt?: unknown }).alt === "string"
  );
};

const pickFormatUrl = (image: BannerImage | null | undefined): string | null => {
  if (!image) {
    return null;
  }

  if (typeof image.url === "string" && image.url.trim().length > 0) {
    return image.url.trim();
  }

  if (image.formats) {
    const preferredOrder = ["large", "medium", "small", "thumbnail"];
    for (const key of preferredOrder) {
      const candidate = image.formats?.[key]?.url;
      if (typeof candidate === "string" && candidate.trim().length > 0) {
        return candidate.trim();
      }
    }

    for (const format of Object.values(image.formats)) {
      const candidate = format?.url;
      if (typeof candidate === "string" && candidate.trim().length > 0) {
        return candidate.trim();
      }
    }
  }

  return null;
};

const sanitizeAlt = (
  altCandidates: Array<string | null | undefined>,
  fallbackAlt: string,
): string => {
  for (const candidate of altCandidates) {
    if (typeof candidate === "string") {
      const trimmed = candidate.trim();
      if (trimmed.length > 0) {
        return trimmed;
      }
    }
  }

  return fallbackAlt;
};

const fallbackSource = (
  overrides?: Partial<BannerImageSource>,
): BannerImageSource => ({
  src: overrides?.src ?? FALLBACK_SRC,
  alt: overrides?.alt ?? FALLBACK_ALT,
  isFallback: true,
  image: overrides?.image ?? null,
});

const extractFromValue = (
  value: BannerInput,
  fallbackAlt: string,
): { image: BannerImage | null; source: BannerImageSource | null; titleHint?: string | null } => {
  if (!value) {
    return { image: null, source: null };
  }

  if (isBannerSource(value)) {
    return { image: value.image ?? null, source: value };
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const result = extractFromValue(item, fallbackAlt);
      if (result.image || result.source) {
        return result;
      }
    }
    return { image: null, source: null };
  }

  if (isBannerImage(value)) {
    return { image: value, source: null };
  }

  if (typeof value === "object") {
    const objectValue = value as {
      banner?: BannerInput;
      image?: BannerInput;
      src?: string | null;
      alt?: string | null;
      title?: string | null;
    };

    if (objectValue.image) {
      const result = extractFromValue(objectValue.image, fallbackAlt);
      if (result.image || result.source) {
        return { ...result, titleHint: objectValue.title ?? null };
      }
    }

    if (objectValue.banner) {
      const result = extractFromValue(objectValue.banner, fallbackAlt);
      if (result.image || result.source) {
        return { ...result, titleHint: objectValue.title ?? null };
      }
    }

    if (typeof objectValue.src === "string") {
      return {
        image: null,
        source: {
          src: objectValue.src,
          alt: sanitizeAlt([objectValue.alt, objectValue.title, fallbackAlt], fallbackAlt),
          isFallback: false,
          image: null,
        },
        titleHint: objectValue.title ?? null,
      };
    }

    if (typeof objectValue.alt === "string") {
      return {
        image: null,
        source: {
          src: FALLBACK_SRC,
          alt: sanitizeAlt([objectValue.alt, objectValue.title, fallbackAlt], fallbackAlt),
          isFallback: true,
          image: null,
        },
        titleHint: objectValue.title ?? null,
      };
    }

    return { image: null, source: null, titleHint: objectValue.title ?? null };
  }

  return { image: null, source: null };
};

export function ensureImageUrl(url: string | null | undefined, baseUrl: string): string {
  if (!url) {
    return "";
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  if (!baseUrl) {
    return url;
  }

  if (baseUrl.endsWith("/") && url.startsWith("/")) {
    return `${baseUrl}${url.slice(1)}`;
  }

  if (!baseUrl.endsWith("/") && !url.startsWith("/")) {
    return `${baseUrl}/${url}`;
  }

  return `${baseUrl}${url}`;
}

export function getBannerImageSource(
  value: BannerInput,
  options?: { fallbackSrc?: string; fallbackAlt?: string },
): BannerImageSource {
  const fallbackAlt = options?.fallbackAlt ?? FALLBACK_ALT;
  const fallbackSrc = options?.fallbackSrc ?? FALLBACK_SRC;

  const extracted = extractFromValue(value, fallbackAlt);

  if (extracted.source) {
    const src = extracted.source.src?.trim();
    const alt = sanitizeAlt(
      [extracted.source.alt, extracted.titleHint, fallbackAlt],
      fallbackAlt,
    );

    if (!src) {
      return fallbackSource({ alt, image: extracted.source.image ?? extracted.image, src: fallbackSrc });
    }

    return {
      src,
      alt,
      isFallback: Boolean(extracted.source.isFallback) || !src,
      image: extracted.source.image ?? extracted.image ?? null,
    };
  }

  const image = extracted.image;
  if (!image) {
    return fallbackSource({ src: fallbackSrc, alt: fallbackAlt });
  }

  const pickedUrl = pickFormatUrl(image);
  const alt = sanitizeAlt(
    [image.alternativeText, image.caption, extracted.titleHint, fallbackAlt],
    fallbackAlt,
  );

  if (!pickedUrl) {
    return fallbackSource({ image, alt, src: fallbackSrc });
  }

  return {
    src: pickedUrl,
    alt,
    isFallback: false,
    image,
  };
}
