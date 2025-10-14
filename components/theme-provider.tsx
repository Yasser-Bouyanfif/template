"use client";

import * as React from "react";

export type ThemeSetting = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const THEME_STORAGE_KEY = "app-theme" as const;
const COLOR_SCHEME_MEDIA = "(prefers-color-scheme: dark)" as const;

const ThemeContext = React.createContext<{
  theme: ThemeSetting;
  resolvedTheme: ResolvedTheme;
  setTheme: (nextTheme: ThemeSetting) => void;
} | null>(null);

const getInitialSetting = (
  forcedTheme: ThemeSetting | null | undefined,
  defaultTheme: ThemeSetting,
): ThemeSetting => {
  if (forcedTheme && forcedTheme !== "system") {
    return forcedTheme;
  }
  if (forcedTheme === "system") {
    return "system";
  }
  return defaultTheme;
};

const readStoredTheme = (
  storageKey: string,
  enableSystem: boolean,
): ThemeSetting | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    if (stored === "system" && enableSystem) {
      return "system";
    }
  } catch (error) {
    console.warn("Unable to read stored theme", error);
  }

  return null;
};

const storeTheme = (storageKey: string, value: ThemeSetting) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(storageKey, value);
  } catch (error) {
    console.warn("Unable to persist theme", error);
  }
};

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia(COLOR_SCHEME_MEDIA).matches ? "dark" : "light";
};

const disableTransitionsTemporarily = () => {
  if (typeof document === "undefined") {
    return () => {};
  }

  const style = document.createElement("style");
  style.setAttribute("data-theme-transition", "off");
  style.appendChild(document.createTextNode("*{transition-duration:0.001ms !important;}"));
  document.head.appendChild(style);

  return () => {
    // Force style recalculation before removing the style element.
    const body = document.body;
    if (body) {
      void window.getComputedStyle(body);
    }
    requestAnimationFrame(() => {
      style.remove();
    });
  };
};

const applyAttribute = (
  attribute: string | undefined,
  theme: ResolvedTheme,
  disableTransitions: boolean,
) => {
  if (typeof document === "undefined") {
    return;
  }

  const cleanup = disableTransitions ? disableTransitionsTemporarily() : undefined;
  const root = document.documentElement;

  if (!attribute || attribute === "class") {
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  } else {
    root.setAttribute(attribute, theme);
  }

  cleanup?.();
};

const isThemeSetting = (value: unknown): value is ThemeSetting =>
  value === "light" || value === "dark" || value === "system";

export type ThemeProviderProps = {
  attribute?: string;
  defaultTheme?: ThemeSetting;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
  forcedTheme?: ThemeSetting | null;
  children: React.ReactNode;
};

export function ThemeProvider({
  attribute = "data-theme",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
  storageKey = THEME_STORAGE_KEY,
  forcedTheme = null,
  children,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<ThemeSetting>(() =>
    getInitialSetting(forcedTheme, defaultTheme),
  );
  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>("light");

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored =
      !forcedTheme && storageKey
        ? readStoredTheme(storageKey, enableSystem)
        : null;

    if (stored && stored !== theme) {
      setThemeState(stored);
    } else if (!stored && forcedTheme) {
      setThemeState(getInitialSetting(forcedTheme, defaultTheme));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forcedTheme, storageKey, enableSystem, defaultTheme]);

  React.useEffect(() => {
    if (!enableSystem || typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia(COLOR_SCHEME_MEDIA);
    const handleChange = () => {
      const current = forcedTheme ?? theme;
      if (current === "system") {
        setResolvedTheme(media.matches ? "dark" : "light");
        applyAttribute(attribute, media.matches ? "dark" : "light", disableTransitionOnChange);
      }
    };

    media.addEventListener?.("change", handleChange);
    media.addListener?.(handleChange);

    return () => {
      media.removeEventListener?.("change", handleChange);
      media.removeListener?.(handleChange);
    };
  }, [attribute, disableTransitionOnChange, enableSystem, forcedTheme, theme]);

  React.useEffect(() => {
    const currentSetting = forcedTheme ?? theme;
    const resolved =
      currentSetting === "system" && enableSystem
        ? getSystemTheme()
        : currentSetting === "dark"
          ? "dark"
          : "light";

    setResolvedTheme((prev) => (prev === resolved ? prev : resolved));
    applyAttribute(attribute, resolved, disableTransitionOnChange);
  }, [attribute, disableTransitionOnChange, enableSystem, forcedTheme, theme]);

  const setTheme = React.useCallback(
    (nextTheme: ThemeSetting) => {
      if (!isThemeSetting(nextTheme)) {
        return;
      }

      if (forcedTheme && forcedTheme !== "system") {
        return;
      }

      const target =
        nextTheme === "system" && !enableSystem ? (forcedTheme ?? "light") : nextTheme;

      setThemeState(target);

      if (storageKey) {
        storeTheme(storageKey, target);
      }
    },
    [enableSystem, forcedTheme, storageKey],
  );

  const value = React.useMemo(
    () => ({
      theme: forcedTheme ?? theme,
      resolvedTheme,
      setTheme,
    }),
    [forcedTheme, resolvedTheme, setTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
