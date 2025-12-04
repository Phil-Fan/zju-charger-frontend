"use client";

import { ArrowUpDown, Filter } from "lucide-react";
import type { CSSProperties } from "react";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { NightNotice } from "@/components/night-notice";
import { ProviderSelect } from "@/components/provider-select";
import { SortSelect } from "@/components/sort-select";
import { StationList } from "@/components/station-list";
import { Card } from "@/components/ui/card";
import type { GeoPoint } from "@/hooks/use-realtime-location";
import { cn } from "@/lib/utils";
import type { SortMode } from "@/types/sort";
import type { ProviderInfo, StationRecord } from "@/types/station";

interface StationPanelProps {
  providers: ProviderInfo[];
  providerId: string;
  onProviderChange: (id: string) => void;
  watchlistCount: number;
  stations: StationRecord[];
  loading: boolean;
  error?: string | null;
  isWatched: (station: StationRecord) => boolean;
  onToggleWatch: (station: StationRecord) => void;
  onSelectStation?: (station: StationRecord) => void;
  userLocation?: GeoPoint | null;
  maxVisible?: number;
  onRequireLocation?: () => void;
  className?: string;
  style?: CSSProperties;
}

export function StationPanel({
  providers,
  providerId,
  onProviderChange,
  watchlistCount,
  stations,
  loading,
  error,
  isWatched,
  onToggleWatch,
  onSelectStation,
  userLocation,
  maxVisible,
  onRequireLocation,
  className,
  style,
}: StationPanelProps) {
  const [sortMode, setSortMode] = useState<SortMode>("free");

  const handleSortChange = useCallback((mode: SortMode) => {
    setSortMode(mode);
  }, []);

  const handleRequireLocation = useCallback(() => {
    toast.info("开启实时定位后才能按距离排序");
    onRequireLocation?.();
  }, [onRequireLocation]);

  return (
    <Card
      className={cn(
        "order-2 flex flex-1 min-h-0 flex-col rounded-2xl border bg-card p-4 shadow-sm lg:order-1 lg:h-full",
        className,
      )}
      style={style}
    >
      <div className="flex flex-col gap-4 border-b pb-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">站点列表</h2>
          <p className="text-xs text-muted-foreground">
            关注 {watchlistCount} 个站点
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div className="flex items-center gap-1">
            <Filter
              className="h-4 w-4 text-muted-foreground"
              aria-label="筛选"
            />
            <ProviderSelect
              providerId={providerId}
              providers={providers}
              onChange={onProviderChange}
            />
          </div>
          <div className="flex items-center gap-1 justify-end ml-auto">
            <ArrowUpDown
              className="h-4 w-4 text-muted-foreground"
              aria-label="排序"
            />
            <SortSelect
              value={sortMode}
              onChange={handleSortChange}
              distanceEnabled={Boolean(userLocation)}
              onRequireLocation={handleRequireLocation}
            />
          </div>
        </div>
      </div>
      <div className="py-3">
        <NightNotice />
      </div>
      <div className="relative flex-1 overflow-hidden min-h-0">
        <StationList
          stations={stations}
          loading={loading}
          error={error}
          isWatched={isWatched}
          onToggleWatch={onToggleWatch}
          onSelectStation={onSelectStation}
          userLocation={userLocation}
          sortMode={sortMode}
          maxVisible={maxVisible}
        />
      </div>
    </Card>
  );
}
