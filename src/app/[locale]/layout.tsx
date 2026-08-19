import { notFound } from "next/navigation";
import { CaseStudyCursor } from "@/components/CaseStudyCursor/CaseStudyCursor";
import { AppFooter } from "@/components/Footer/AppFooter";
import { GoogleAnalytics } from "@/components/GoogleAnalytics/GoogleAnalytics";
import { Nav } from "@/components/Nav/Nav";
import { SkipLink } from "@/components/SkipLink/SkipLink";
import { site } from "@/data/site";
import { isLocale, locales } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { fontClassNames } from "@/styles/fonts";
import styles from "./layout.module.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <html lang={locale} className={fontClassNames}>
      <body>
        <GoogleAnalytics measurementId={site.gaId} />
        <SkipLink label={messages.a11y.skipToContent} />
        <CaseStudyCursor label={messages.cursor.viewCaseStudy} />
        <div className={styles.shell}>
          <Nav locale={locale} messages={messages} />
          <main id="content" className={styles.main}>
            {children}
          </main>
          <AppFooter messages={messages} />
        </div>
      </body>
    </html>
  );
}
