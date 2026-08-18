import type { Metadata } from "next";
import { site } from "@/data/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}
