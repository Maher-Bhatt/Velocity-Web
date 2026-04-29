import { lazy, memo, Suspense, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Laptop2,
  MapPinned,
  MonitorSmartphone,
  ShieldAlert,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PageSeo } from "@/components/seo/PageSeo";
import { cn } from "@/lib/utils";
import {
  browserBreakdown,
  countries,
  countryBreakdown,
  deviceBreakdown,
  operatingSystemBreakdown,
  routeBuckets,
  sidebarMetrics,
  trendData,
  type BreakdownEntry,
  type GeoCountryDatum,
  type MetricStatus,
  type SidebarMetric,
} from "@/components/dashboard/dashboard-data";

const SpeedInsightsMap = lazy(() => import("@/components/dashboard/SpeedInsightsMap"));

type GeoFilter = MetricStatus | "all";
type BreakdownTab = "devices" | "browsers";
type RouteTab = "routes" | "paths";

const statusTheme: Record<
  MetricStatus,
  { label: string; dot: string; text: string; border: string; bg: string; icon: typeof AlertTriangle }
> = {
  poor: {
    label: "Poor",
    dot: "bg-[#ef4444]",
    text: "text-[#ef4444]",
    border: "border-[#ef444433]",
    bg: "bg-[#ef444414]",
    icon: ShieldAlert,
  },
  warning: {
    label: "Needs Improvement",
    dot: "bg-[#f97316]",
    text: "text-[#f97316]",
    border: "border-[#f9731633]",
    bg: "bg-[#f9731614]",
    icon: AlertTriangle,
  },
  good: {
    label: "Great",
    dot: "bg-[#22c55e]",
    text: "text-[#22c55e]",
    border: "border-[#22c55e33]",
    bg: "bg-[#22c55e14]",
    icon: CheckCircle2,
  },
};

const dashboardSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Velocity Web Speed Insights Dashboard",
  description: "Internal analytics dashboard for PageSpeed Insights trends, geo distribution, device mix, and operating systems.",
  creator: {
    "@type": "Organization",
    name: "Velocity Web",
    url: "https://velocityweb.online",
  },
};

const MotionSection = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

const MetricRailCard = memo(function MetricRailCard({ metric }: { metric: SidebarMetric }) {
  const theme = statusTheme[metric.status];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
      className="group rounded-[24px] border border-[#1a1a1a] bg-[#111111] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
      aria-label={`${metric.label} value ${metric.displayValue} ${metric.unit}`}
      title={metric.helpText}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#6f6f6f]">{metric.label}</p>
          <div className="mt-3 flex items-end gap-2">
            <span className={cn("font-semibold leading-none text-white", metric.id === "res" ? "text-4xl" : "text-3xl")}>
              {metric.displayValue}
            </span>
            <span className="pb-1 text-xs text-[#8f8f8f]">{metric.unit}</span>
          </div>
        </div>
        <span className={cn("mt-1 inline-flex h-3 w-3 rounded-full", theme.dot)} aria-hidden="true" />
      </div>

      <div className="mt-5">
        <div className="relative h-2 overflow-hidden rounded-full bg-[#1f1f1f]">
          <div
            className={cn("h-full rounded-full transition-all duration-300 group-hover:brightness-110", theme.dot)}
            style={{ width: `${Math.max(metric.progress * 100, 8)}%` }}
          />
          <span
            className={cn("absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#0a0a0a]", theme.dot)}
            style={{ left: `calc(${Math.max(metric.progress * 100, 8)}% - 8px)` }}
            aria-hidden="true"
          />
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-[#969696]">{metric.helpText}</p>
    </motion.article>
  );
});

function StatusBadge({ status }: { status: MetricStatus }) {
  const theme = statusTheme[status];
  const Icon = theme.icon;

  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm", theme.border, theme.bg, theme.text)}>
      <Icon className="h-4 w-4" />
      {theme.label}
    </span>
  );
}

function BreakdownList({
  title,
  subtitle,
  entries,
  rightLabel,
  extra,
}: {
  title: string;
  subtitle: string;
  entries: BreakdownEntry[];
  rightLabel: string;
  extra?: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-[#1a1a1a] bg-[#111111] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-[#9a9a9a]">{subtitle}</p>
        </div>
        {extra}
      </div>

      <div className="mt-6 flex items-center justify-between border-b border-[#1e1e1e] pb-3 text-[0.68rem] uppercase tracking-[0.24em] text-[#676767]">
        <span>Name</span>
        <span>{rightLabel}</span>
      </div>

      <div className="mt-2 space-y-2">
        {entries.map((entry) => (
          <div key={entry.label} className="flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 transition-colors hover:border-[#262626] hover:bg-[#141414]">
            <span className="text-sm text-[#e9e9e9]">{entry.label}</span>
            <span className="text-sm font-medium text-[#b7ff3c]">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpeedInsightsDashboard() {
  const [routeTab, setRouteTab] = useState<RouteTab>("routes");
  const [deviceTab, setDeviceTab] = useState<BreakdownTab>("devices");
  const [geoFilter, setGeoFilter] = useState<GeoFilter>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>(countries[0]?.name ?? "");

  const filteredCountries = useMemo(
    () => countries.filter((country) => geoFilter === "all" || country.status === geoFilter),
    [geoFilter],
  );

  useEffect(() => {
    if (!filteredCountries.some((country) => country.name === selectedCountry) && filteredCountries[0]) {
      setSelectedCountry(filteredCountries[0].name);
    }
  }, [filteredCountries, selectedCountry]);

  const selectedCountryData = useMemo<GeoCountryDatum | undefined>(
    () => filteredCountries.find((country) => country.name === selectedCountry) ?? countries.find((country) => country.name === selectedCountry),
    [filteredCountries, selectedCountry],
  );

  const filteredCountryBreakdown = useMemo(() => {
    const nameSet = new Set(filteredCountries.map((country) => country.shortLabel));
    return geoFilter === "all" ? countryBreakdown : countryBreakdown.filter((entry) => nameSet.has(entry.label));
  }, [filteredCountries, geoFilter]);

  const categoryFilters: Array<{ label: string; value: GeoFilter }> = [
    { label: "All", value: "all" },
    { label: "Poor", value: "poor" },
    { label: "Needs Improvement", value: "warning" },
    { label: "Great", value: "good" },
  ];

  const progressAngle = 51 * 3.6;

  return (
    <>
      <PageSeo
        title="Velocity Web Speed Insights Dashboard"
        description="Dark-mode analytics dashboard for Velocity Web showing PageSpeed Insights, route distribution, geo performance, devices, and operating systems."
        canonical="https://velocityweb.online/speed-insights"
        keywords="speed insights dashboard, page speed metrics, real experience score, velocity web analytics"
        ogTitle="Velocity Web Speed Insights Dashboard"
        ogDescription="Track Real Experience Score, route quality, geography, devices, and operating systems in one dashboard."
        robots="noindex, nofollow"
        schema={dashboardSchema}
      />

      <div
        className="min-h-screen bg-[#0a0a0a] text-white [font-family:-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]"
        style={{ colorScheme: "dark" }}
      >
        <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
          <MotionSection className="rounded-[32px] border border-[#1a1a1a] bg-[#0d0d0d] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-[#737373]">velocity-web</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Speed Insights</h1>
                  <span className="rounded-full border border-[#2a2a2a] bg-[#121212] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#b7ff3c]">
                    Mar 28 - Apr 3, 2026
                  </span>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#9f9f9f]">
                  Velocity Web performance snapshot built around Google PageSpeed-style field metrics, geo distribution,
                  and visitor device trends. The biggest issues are rendering latency and interaction responsiveness,
                  while layout stability and server response are holding up well.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Data points", value: "146", icon: TrendingUp },
                  { label: "Desktop share", value: "68%", icon: Laptop2 },
                  { label: "Updated", value: "Just now", icon: Clock3 },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="rounded-[22px] border border-[#1d1d1d] bg-[#111111] px-4 py-4">
                      <div className="flex items-center gap-2 text-[#b7ff3c]">
                        <Icon className="h-4 w-4" />
                        <span className="text-xs uppercase tracking-[0.22em] text-[#707070]">{item.label}</span>
                      </div>
                      <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionSection>

          <div className="mt-6 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="xl:sticky xl:top-6 xl:self-start">
              <div className="space-y-4">
                {sidebarMetrics.map((metric) => (
                  <MetricRailCard key={metric.id} metric={metric} />
                ))}
              </div>
            </aside>

            <main className="space-y-6">
              <MotionSection className="rounded-[32px] border border-[#1a1a1a] bg-[#0f0f0f] p-5 sm:p-6">
                <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
                  <div className="rounded-[28px] border border-[#1d1d1d] bg-[#121212] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[#727272]">Desktop Real Experience Score</p>
                        <h2 className="mt-3 text-xl font-semibold text-white">Route health overview</h2>
                      </div>
                      <StatusBadge status="warning" />
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-6 lg:flex-row lg:items-center">
                      <div
                        className="relative grid h-48 w-48 place-items-center rounded-full"
                        style={{
                          background: `conic-gradient(#b7ff3c 0deg ${progressAngle}deg, #1f1f1f ${progressAngle}deg 360deg)`,
                        }}
                        aria-label="Real Experience Score 51 out of 100"
                        role="img"
                      >
                        <div className="grid h-[168px] w-[168px] place-items-center rounded-full border border-[#242424] bg-[#0c0c0c] text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                          <div>
                            <p className="text-xs uppercase tracking-[0.26em] text-[#6e6e6e]">RES</p>
                            <p className="mt-2 text-5xl font-semibold text-white">51</p>
                            <p className="mt-1 text-sm text-[#9b9b9b]">out of 100</p>
                          </div>
                        </div>
                      </div>

                      <div className="max-w-md">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#f9731633] bg-[#f9731614] px-3 py-1 text-sm text-[#f97316]">
                          <AlertTriangle className="h-4 w-4" />
                          Needs Improvement
                        </div>
                        <p className="mt-4 text-sm leading-7 text-[#a7a7a7]">
                          The current Real Experience Score is being dragged down by slow content rendering and especially high
                          interaction latency. The positive signal is that layout shift, first input delay, and backend response
                          time are already healthy, so most gains should come from frontend execution, script trimming, and
                          mobile rendering improvements.
                        </p>
                        <a
                          href="https://web.dev/articles/vitals"
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm text-[#60a5fa] hover:text-[#93c5fd]"
                        >
                          Learn more about RES
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-[#1d1d1d] bg-[#121212] p-5">
                    <div className="flex flex-col gap-4 border-b border-[#1d1d1d] pb-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[#727272]">Percentile trends</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">P75, P90, P95, P99 performance curve</h3>
                      </div>
                      <div className="inline-flex rounded-full border border-[#222222] bg-[#0d0d0d] p-1">
                        {(["routes", "paths"] as RouteTab[]).map((tab) => (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => setRouteTab(tab)}
                            className={cn(
                              "rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7ff3c]",
                              routeTab === tab ? "bg-[#1c1c1c] text-white" : "text-[#8e8e8e] hover:text-white",
                            )}
                          >
                            {tab === "routes" ? "Routes" : "Paths"}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 h-[280px]" aria-label="Percentile chart for March 28 to April 3, 2026">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={trendData} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
                          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                          <XAxis dataKey="date" stroke="#6f6f6f" tickLine={false} axisLine={false} tickMargin={12} />
                          <YAxis stroke="#6f6f6f" tickLine={false} axisLine={false} tickMargin={12} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#101010",
                              border: "1px solid #262626",
                              borderRadius: "16px",
                              color: "#fff",
                            }}
                          />
                          <Line type="monotone" dataKey="p75" stroke="#b7ff3c" strokeWidth={3} dot={false} />
                          <Line type="monotone" dataKey="p90" stroke="#f97316" strokeWidth={2.2} dot={false} />
                          <Line type="monotone" dataKey="p95" stroke="#60a5fa" strokeWidth={2.2} dot={false} />
                          <Line type="monotone" dataKey="p99" stroke="#22c55e" strokeWidth={2.2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-4 grid gap-3 lg:grid-cols-3">
                      {routeBuckets.map((bucket) => {
                        const theme = statusTheme[bucket.status];
                        const Icon = theme.icon;

                        return (
                          <div key={bucket.label} className="rounded-[22px] border border-[#1f1f1f] bg-[#101010] p-4">
                            <div className="flex items-center gap-2">
                              <Icon className={cn("h-4 w-4", theme.text)} />
                              <span className="text-sm text-white">{bucket.label}</span>
                            </div>
                            <p className="mt-4 text-2xl font-semibold text-white">{bucket.count}</p>
                            <p className="mt-1 text-sm text-[#8f8f8f]">RES {bucket.range}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </MotionSection>

              <MotionSection className="rounded-[32px] border border-[#1a1a1a] bg-[#0f0f0f] p-5 sm:p-6">
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                  <div>
                    <Suspense
                      fallback={
                        <div className="grid min-h-[420px] place-items-center rounded-[28px] border border-[#1a1a1a] bg-[#111111]">
                          <div className="text-center">
                            <MapPinned className="mx-auto h-7 w-7 animate-pulse text-[#b7ff3c]" />
                            <p className="mt-3 text-sm text-[#9f9f9f]">Loading geo map...</p>
                          </div>
                        </div>
                      }
                    >
                      <SpeedInsightsMap
                        countries={countries}
                        activeFilter={geoFilter}
                        selectedCountry={selectedCountry}
                        onCountrySelect={setSelectedCountry}
                      />
                    </Suspense>
                  </div>

                  <div className="rounded-[28px] border border-[#1a1a1a] bg-[#111111] p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[#727272]">Geo filters</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">Region performance</h3>
                      </div>
                      <Sparkles className="h-5 w-5 text-[#b7ff3c]" />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {categoryFilters.map((filter) => (
                        <button
                          key={filter.value}
                          type="button"
                          onClick={() => setGeoFilter(filter.value)}
                          className={cn(
                            "rounded-full border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7ff3c]",
                            geoFilter === filter.value
                              ? "border-[#b7ff3c] bg-[#b7ff3c14] text-[#f1e3bd]"
                              : "border-[#232323] bg-[#0d0d0d] text-[#969696] hover:text-white",
                          )}
                        >
                          {filter.label}
                        </button>
                      ))}
                    </div>

                    {selectedCountryData ? (
                      <div className="mt-6 rounded-[24px] border border-[#232323] bg-[#0d0d0d] p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-[#727272]">Top result</p>
                        <p className="mt-3 text-lg font-semibold text-white">{selectedCountryData.name}</p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <div>
                            <p className="text-xs text-[#6f6f6f]">Routes</p>
                            <p className="mt-1 text-xl font-semibold text-white">{selectedCountryData.routes}</p>
                          </div>
                          <div>
                            <p className="text-xs text-[#6f6f6f]">RES</p>
                            <p className="mt-1 text-xl font-semibold text-[#b7ff3c]">{selectedCountryData.res}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <StatusBadge status={selectedCountryData.status} />
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-6 space-y-3 text-sm text-[#979797]">
                      <div className="flex items-center justify-between rounded-2xl border border-[#202020] bg-[#0d0d0d] px-4 py-3">
                        <span>Based on</span>
                        <span className="font-medium text-white">146 data points</span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl border border-[#202020] bg-[#0d0d0d] px-4 py-3">
                        <span>Updated</span>
                        <span className="font-medium text-white">just now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionSection>

              <MotionSection className="grid gap-6 xl:grid-cols-3">
                <BreakdownList
                  title="Countries"
                  subtitle="Visitor share across sampled regions"
                  entries={filteredCountryBreakdown}
                  rightLabel="Visitors"
                />

                <BreakdownList
                  title="Devices"
                  subtitle="Desktop remains the primary source of traffic"
                  entries={deviceTab === "devices" ? deviceBreakdown : browserBreakdown}
                  rightLabel="Visitors"
                  extra={
                    <div className="inline-flex rounded-full border border-[#232323] bg-[#0d0d0d] p-1">
                      {(["devices", "browsers"] as BreakdownTab[]).map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setDeviceTab(tab)}
                          className={cn(
                            "rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7ff3c]",
                            deviceTab === tab ? "bg-[#1a1a1a] text-white" : "text-[#8b8b8b] hover:text-white",
                          )}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  }
                />

                <BreakdownList
                  title="Operating Systems"
                  subtitle="OS mix indicates broad desktop coverage with balanced mobile share"
                  entries={operatingSystemBreakdown}
                  rightLabel="Visitors"
                  extra={<MonitorSmartphone className="mt-1 h-5 w-5 text-[#b7ff3c]" />}
                />
              </MotionSection>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
