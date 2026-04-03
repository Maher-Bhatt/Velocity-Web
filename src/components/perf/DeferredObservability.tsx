import { lazy, Suspense, useEffect, useState } from "react";

const LazySpeedInsights = lazy(() =>
  import("@vercel/speed-insights/react").then((module) => ({ default: module.SpeedInsights })),
);
const LazyAnalytics = lazy(() =>
  import("@vercel/analytics/react").then((module) => ({ default: module.Analytics })),
);

const getIdleHandle = (callback: () => void) => {
  if (typeof window === "undefined") {
    return 0;
  }

  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(callback, { timeout: 1500 });
  }

  return window.setTimeout(callback, 1);
};

const cancelIdleHandle = (handle: number) => {
  if (typeof window === "undefined") {
    return;
  }

  if ("cancelIdleCallback" in window) {
    window.cancelIdleCallback(handle);
    return;
  }

  window.clearTimeout(handle);
};

export const DeferredObservability = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const handle = getIdleHandle(() => setEnabled(true));
    return () => cancelIdleHandle(handle);
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <LazySpeedInsights />
      <LazyAnalytics />
    </Suspense>
  );
};
