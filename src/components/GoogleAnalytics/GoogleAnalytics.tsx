"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

type GoogleAnalyticsProps = {
  measurementId: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let lastPagePath: string | null = null;

function getPagePath(pathname: string, searchParams: URLSearchParams) {
  const search = searchParams.toString();
  return search ? `${pathname}?${search}` : pathname;
}

function sendPageView(measurementId: string, pagePath: string) {
  const payload = {
    send_to: measurementId,
    page_path: pagePath,
    page_title: document.title,
    page_location: `${window.location.origin}${pagePath}`,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", payload);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", "page_view", payload]);
}

function AnalyticsPageViews({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const pagePath = getPagePath(pathname, searchParams);

    if (lastPagePath === pagePath) {
      return;
    }

    lastPagePath = pagePath;
    sendPageView(measurementId, pagePath);
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsPageViews measurementId={measurementId} />
      </Suspense>
    </>
  );
}
