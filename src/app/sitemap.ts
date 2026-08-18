import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { site } from "@/data/site";
import { locales } from "@/i18n/config";

function localizedUrl(locale: string, path = ""): string {
  return `${site.url}/${locale}${path}`;
}

function languageAlternates(path = "") {
  return Object.fromEntries(locales.map((locale) => [locale, localizedUrl(locale, path)]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries = locales.map((locale) => ({
    url: localizedUrl(locale),
    lastModified: new Date(),
    alternates: {
      languages: languageAlternates(),
    },
  }));

  const labEntries = locales.map((locale) => ({
    url: localizedUrl(locale, "/lab"),
    lastModified: new Date(),
    alternates: {
      languages: languageAlternates("/lab"),
    },
  }));

  const caseStudyEntries = caseStudies.flatMap((study) => {
    const path = `/case-study/${study.slug}`;

    return locales.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified: new Date(),
      alternates: {
        languages: languageAlternates(path),
      },
    }));
  });

  return [...homeEntries, ...labEntries, ...caseStudyEntries];
}
