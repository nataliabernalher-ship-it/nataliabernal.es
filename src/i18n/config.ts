export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function replaceLocalePath(pathname: string, locale: Locale): string {
  const parts = pathname.split("/");

  if (parts.length > 1 && isLocale(parts[1])) {
    parts[1] = locale;
    return parts.join("/") || `/${locale}`;
  }

  const suffix = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `/${locale}${suffix === "/" ? "" : suffix}`;
}
