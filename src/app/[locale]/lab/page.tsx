import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/lab">): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);

  return buildMetadata({
    locale,
    path: "/lab",
    title: messages.lab.title,
    description: messages.lab.description,
  });
}

export default async function LabPage({ params }: PageProps<"/[locale]/lab">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <section className={styles.page} aria-labelledby="lab-title">
      <h1 id="lab-title" className={styles.title}>
        {messages.lab.title}
      </h1>
    </section>
  );
}
