import type { StationRecord } from "@/types/station";

export const SPECIAL_PROVIDER_NAME = "专用站点";

export const SPECIAL_STATION_COLORS = {
  light: "#9ca3af",
  dark: "#9ca3af",
} as const;

export function isSpecialProvider(provider?: string | null): boolean {
  return provider === SPECIAL_PROVIDER_NAME;
}

export function isSpecialStation(
  station:
    | (Pick<StationRecord, "provider"> | { provider?: string | null })
    | null
    | undefined,
): boolean {
  return isSpecialProvider(station?.provider ?? null);
}
