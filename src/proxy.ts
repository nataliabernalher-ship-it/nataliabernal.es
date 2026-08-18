import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";

function getPreferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");

  if (!header) {
    return defaultLocale;
  }

  const candidates = header.split(",").map((part) => {
    const [tag] = part.trim().split(";");
    return tag?.slice(0, 2).toLowerCase();
  });

  const match = candidates.find((code): code is Locale => Boolean(code) && isLocale(code));

  return match ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/data|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
