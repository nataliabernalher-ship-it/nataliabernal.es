import type { Metadata } from "next";
import { site } from "@/data/site";
import { locales, type Locale } from "@/i18n/config";

type BuildMetadataInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
};

function localizedUrl(locale: Locale, path: string): string {
  const normalized = path === "" || path.startsWith("/") ? path : `/${path}`;
  return `${site.url}/${locale}${normalized}`;
}

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
}: BuildMetadataInput): Metadata {
  const url = localizedUrl(locale, path);
  const languages = Object.fromEntries(
    locales.map((item) => [item, localizedUrl(item, path)]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...languages,
        "x-default": localizedUrl("es", path),
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
