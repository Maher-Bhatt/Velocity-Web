import { memo, useMemo } from "react";
import { Globe2, MapPinned } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GeoCountryDatum, MetricStatus } from "./dashboard-data";

type GeoFilter = MetricStatus | "all";

type SpeedInsightsMapProps = {
  countries: GeoCountryDatum[];
  activeFilter: GeoFilter;
  selectedCountry: string;
  onCountrySelect: (countryName: string) => void;
};

const statusClasses: Record<MetricStatus, string> = {
  poor: "fill-[#ef4444] stroke-[#fca5a5] text-[#ef4444]",
  warning: "fill-[#f97316] stroke-[#fdba74] text-[#f97316]",
  good: "fill-[#22c55e] stroke-[#86efac] text-[#22c55e]",
};

const continentPaths = [
  "M109 108c44-24 96-28 132-17 17 5 25 19 14 33-11 15-21 33-17 49 4 18-9 35-24 51-24 26-51 54-58 86-5 20-18 31-35 38-14 6-28 2-38-11-18-24-11-47-22-72-10-22-38-41-34-66 4-28 32-45 47-67 12-18 6-35 35-24z",
  "M409 114c48-18 108-14 163-2 27 6 56 0 88 2 31 2 73 18 73 48 0 18-25 24-41 31-14 6-17 17-11 31 8 18-2 31-15 44-13 14-14 26-7 43 6 14 7 29-6 39-15 11-36 8-53 0-15-7-33-4-44 8-12 12-26 16-44 15-32-2-50 20-79 24-29 3-47-11-41-39 7-33 30-61 40-91 10-29 9-44-12-66-25-26-15-69-11-87z",
  "M512 279c18-7 39 2 48 18 12 20 8 51 18 73 9 21 17 43 12 66-3 17-22 27-39 21-29-11-42-39-49-66-9-34-17-76 10-102z",
  "M780 360c28-10 61-9 88 2 27 11 28 37 22 58-5 17-21 28-36 37-22 13-51 20-72 7-22-14-31-48-19-72 4-9 8-20 17-32z",
];

function SpeedInsightsMap({ countries, activeFilter, selectedCountry, onCountrySelect }: SpeedInsightsMapProps) {
  const visibleCountries = useMemo(
    () => countries.filter((country) => activeFilter === "all" || country.status === activeFilter),
    [activeFilter, countries],
  );

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#2a2a2a] bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(183,255,60,0.16),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.02),_transparent)]" />

      <div className="relative flex items-center justify-between border-b border-[#1f1f1f] px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-[#7e7e7e]">Geo Distribution</p>
          <p className="mt-2 text-sm text-[#9f9f9f]">Performance color overlay across sampled visitor regions</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#0d0d0d] px-3 py-2 text-xs text-[#b9b9b9]">
          <Globe2 className="h-4 w-4 text-[#b7ff3c]" />
          World view
        </div>
      </div>

      <div className="relative aspect-[1.9/1] min-h-[320px] w-full">
        <svg viewBox="0 0 1000 520" className="h-full w-full" role="img" aria-label="World map with colored country performance markers">
          <defs>
            <linearGradient id="dashboard-ocean" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b0b0b" />
              <stop offset="100%" stopColor="#101010" />
            </linearGradient>
            <pattern id="dashboard-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
          </defs>

          <rect width="1000" height="520" fill="url(#dashboard-ocean)" />
          <rect width="1000" height="520" fill="url(#dashboard-grid)" opacity="0.55" />

          {continentPaths.map((path, index) => (
            <path
              key={path}
              d={path}
              fill={index === 1 ? "rgba(183,255,60,0.09)" : "rgba(255,255,255,0.055)"}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
            />
          ))}

          {visibleCountries.map((country) => {
            const selected = country.name === selectedCountry;
            const cx = country.x * 10;
            const cy = country.y * 5.2;

            return (
              <g key={country.name}>
                <circle cx={cx} cy={cy} r={selected ? 24 : 18} className={cn(statusClasses[country.status], "opacity-20")} />
                <circle cx={cx} cy={cy} r={selected ? 9 : 7} className={statusClasses[country.status]} strokeWidth="3" />
                <circle cx={cx} cy={cy} r={selected ? 13 : 11} fill="none" className={cn(statusClasses[country.status], "opacity-65")} strokeWidth="2" />
                <text x={cx + 16} y={cy + 4} fill={selected ? "#ffffff" : "#c7c7c7"} fontSize="14" fontWeight="600">
                  {country.shortLabel}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="absolute inset-0">
          {visibleCountries.map((country) => {
            const selected = country.name === selectedCountry;

            return (
              <button
                key={country.name}
                type="button"
                onClick={() => onCountrySelect(country.name)}
                aria-pressed={selected}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7ff3c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
                  selected ? "scale-105 border-[#b7ff3c] bg-[#171717]/90 px-3 py-2 shadow-[0_0_0_1px_rgba(183,255,60,0.16)]" : "border-transparent bg-transparent p-3 hover:bg-[#171717]/70",
                )}
                style={{ left: `${country.x}%`, top: `${country.y}%` }}
              >
                <span className="sr-only">{country.name}</span>
              </button>
            );
          })}
        </div>

        {visibleCountries.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl border border-dashed border-[#2a2a2a] bg-[#121212]/90 px-6 py-5 text-center">
              <MapPinned className="mx-auto h-6 w-6 text-[#b7ff3c]" />
              <p className="mt-3 text-sm text-white">No countries match this filter.</p>
              <p className="mt-1 text-xs text-[#9f9f9f]">Switch filters to review route performance by region.</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default memo(SpeedInsightsMap);
