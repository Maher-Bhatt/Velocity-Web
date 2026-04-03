export type MetricStatus = "poor" | "warning" | "good";

export type SidebarMetric = {
  id: string;
  label: string;
  value: number;
  displayValue: string;
  unit: string;
  progress: number;
  status: MetricStatus;
  helpText: string;
};

export type TrendPoint = {
  date: string;
  p75: number;
  p90: number;
  p95: number;
  p99: number;
};

export type RouteBucket = {
  label: string;
  count: number;
  range: string;
  status: MetricStatus;
};

export type GeoCountryDatum = {
  name: string;
  shortLabel: string;
  visitors: number;
  routes: number;
  res: number;
  status: MetricStatus;
  x: number;
  y: number;
};

export type BreakdownEntry = {
  label: string;
  value: number;
};

export const sidebarMetrics: SidebarMetric[] = [
  {
    id: "res",
    label: "Real Experience Score",
    value: 51,
    displayValue: "51",
    unit: "/100",
    progress: 0.51,
    status: "warning",
    helpText: "Below the target threshold of 90. Primary issues are rendering latency and interaction delay.",
  },
  {
    id: "fcp",
    label: "First Contentful Paint",
    value: 3.39,
    displayValue: "3.39",
    unit: "s",
    progress: 0.78,
    status: "poor",
    helpText: "Users wait too long before meaningful content appears on screen.",
  },
  {
    id: "lcp",
    label: "Largest Contentful Paint",
    value: 3.39,
    displayValue: "3.39",
    unit: "s",
    progress: 0.76,
    status: "poor",
    helpText: "The main visual payload is landing late, especially on slower routes.",
  },
  {
    id: "inp",
    label: "Interaction to Next Paint",
    value: 6176,
    displayValue: "6,176",
    unit: "ms",
    progress: 0.9,
    status: "poor",
    helpText: "Interaction lag is the biggest bottleneck and needs immediate frontend and script work.",
  },
  {
    id: "cls",
    label: "Cumulative Layout Shift",
    value: 0.03,
    displayValue: "0.03",
    unit: "score",
    progress: 0.18,
    status: "good",
    helpText: "Visual stability is strong and already in the green zone.",
  },
  {
    id: "fid",
    label: "First Input Delay",
    value: 41,
    displayValue: "41",
    unit: "ms",
    progress: 0.22,
    status: "good",
    helpText: "Early first-input responsiveness is healthy.",
  },
  {
    id: "ttfb",
    label: "Time to First Byte",
    value: 0.63,
    displayValue: "0.63",
    unit: "s",
    progress: 0.28,
    status: "good",
    helpText: "Server response time is healthy, so most performance pain is client-side.",
  },
];

export const trendData: TrendPoint[] = [
  { date: "Mar 28", p75: 48, p90: 58, p95: 63, p99: 69 },
  { date: "Mar 29", p75: 49, p90: 59, p95: 64, p99: 70 },
  { date: "Mar 30", p75: 50, p90: 60, p95: 66, p99: 72 },
  { date: "Mar 31", p75: 50, p90: 61, p95: 67, p99: 73 },
  { date: "Apr 1", p75: 51, p90: 62, p95: 68, p99: 74 },
  { date: "Apr 2", p75: 51, p90: 63, p95: 69, p99: 75 },
  { date: "Apr 3", p75: 51, p90: 63, p95: 70, p99: 76 },
];

export const routeBuckets: RouteBucket[] = [
  { label: "Poor", count: 0, range: "< 50", status: "poor" },
  { label: "Needs Improvement", count: 1, range: "50 - 90", status: "warning" },
  { label: "Great", count: 0, range: "> 90", status: "good" },
];

export const countries = [
  {
    name: "United States of America",
    shortLabel: "USA",
    visitors: 56,
    routes: 34,
    res: 25,
    status: "poor",
    x: 22,
    y: 33,
  },
  {
    name: "India",
    shortLabel: "India",
    visitors: 33,
    routes: 20,
    res: 64,
    status: "warning",
    x: 69,
    y: 46,
  },
  {
    name: "Brazil",
    shortLabel: "Brazil",
    visitors: 3,
    routes: 3,
    res: 72,
    status: "warning",
    x: 33,
    y: 68,
  },
  {
    name: "People's Republic of China",
    shortLabel: "China",
    visitors: 3,
    routes: 3,
    res: 88,
    status: "warning",
    x: 77,
    y: 34,
  },
  {
    name: "Romania",
    shortLabel: "Romania",
    visitors: 3,
    routes: 2,
    res: 91,
    status: "good",
    x: 56,
    y: 29,
  },
] satisfies GeoCountryDatum[];

export const countryBreakdown: BreakdownEntry[] = [
  { label: "USA", value: 56 },
  { label: "India", value: 33 },
  { label: "Brazil", value: 3 },
  { label: "China", value: 3 },
  { label: "Romania", value: 3 },
];

export const deviceBreakdown: BreakdownEntry[] = [
  { label: "Desktop", value: 68 },
  { label: "Mobile", value: 32 },
];

export const browserBreakdown: BreakdownEntry[] = [
  { label: "Chrome", value: 52 },
  { label: "Safari", value: 21 },
  { label: "Edge", value: 15 },
  { label: "Firefox", value: 8 },
  { label: "Opera", value: 4 },
];

export const operatingSystemBreakdown: BreakdownEntry[] = [
  { label: "Windows", value: 37 },
  { label: "Android", value: 16 },
  { label: "GNU/Linux", value: 16 },
  { label: "Mac", value: 16 },
  { label: "iOS", value: 16 },
];
