"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer/Footer";
import type { Messages } from "@/i18n/get-messages";

type AppFooterProps = {
  messages: Messages;
};

export function AppFooter({ messages }: AppFooterProps) {
  const pathname = usePathname();
  const isHome = /^\/(es|en)\/?$/.test(pathname);

  return <Footer messages={messages} variant={isHome ? "dark" : "light"} />;
}
