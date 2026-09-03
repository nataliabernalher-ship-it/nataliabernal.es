"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

const EXCLUDE_STORAGE_KEY = "exclude_from_analytics";
const EXCLUDE_STORAGE_VALUE = "true";

type GoogleAnalyticsProps = {
  measurementId: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    excludeFromAnalytics?: () => void;
  }
}

let lastPagePath: string | null = null;

function isAnalyticsExcluded() {
  try {
    return window.localStorage.getItem(EXCLUDE_STORAGE_KEY) === EXCLUDE_STORAGE_VALUE;
  } catch {
    return false;
  }
}

function excludeFromAnalytics() {
  window.localStorage.setItem(EXCLUDE_STORAGE_KEY, EXCLUDE_STORAGE_VALUE);
  window.location.reload();
}

function getPagePath(pathname: string, searchParams: URLSearchParams) {
  const search = searchParams.toString();
  return search ? `${pathname}?${search}` : pathname;
}

function sendPageView(measurementId: string, pagePath: string) {
  if (isAnalyticsExcluded()) {
    return;
  }

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
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    window.excludeFromAnalytics = excludeFromAnalytics;

    if (!isAnalyticsExcluded()) {
      setEnabled(true);
    }
  }, []);

  if (!enabled) {
    return null;
  }

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
