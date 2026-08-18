"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";

export default function NotFound() {
  const pathname = usePathname();
  const maybeLocale = pathname.split("/")[1];
  const locale = isLocale(maybeLocale) ? maybeLocale : defaultLocale;
  const messages = getMessages(locale);

  return (
    <section>
      <h1>{messages.notFound.title}</h1>
      <p>{messages.notFound.body}</p>
      <p>
        <Link href={`/${locale}`}>{messages.notFound.cta}</Link>
      </p>
    </section>
  );
}
