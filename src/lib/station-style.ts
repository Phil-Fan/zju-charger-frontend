import type { StationRecord } from "@/types/station";

export const SPECIAL_PROVIDER_NAME = "专用站点";
const BATTERY_SWAP_KEYWORD = "换电";

export const SPECIAL_STATION_COLORS = {
  light: "#9ca3af",
  dark: "#9ca3af",
} as const;

export function isSpecialProvider(provider?: string | null): boolean {
  return provider === SPECIAL_PROVIDER_NAME;
}

export function isBatterySwapProvider(provider?: string | null): boolean {
  return (
    typeof provider === "string" && provider.includes(BATTERY_SWAP_KEYWORD)
  );
}

export function isSpecialStation(
  station:
    | (Pick<StationRecord, "provider"> | { provider?: string | null })
    | null
    | undefined,
): boolean {
  return isSpecialProvider(station?.provider ?? null);
}
