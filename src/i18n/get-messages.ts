import en from "@/messages/en.json";
import es from "@/messages/es.json";
import type { Locale } from "@/i18n/config";

const messagesByLocale = {
  es,
  en,
} as const;

export type Messages = typeof es;

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}
