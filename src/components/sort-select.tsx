"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SortMode } from "@/types/sort";

interface SortSelectProps {
  value: SortMode;
  onChange: (value: SortMode) => void;
  distanceEnabled: boolean;
  onRequireLocation?: () => void;
}

export function SortSelect({
  value,
  onChange,
  distanceEnabled,
  onRequireLocation,
}: SortSelectProps) {
  const handleValueChange = (next: SortMode) => {
    if (next === "distance" && !distanceEnabled) {
      onRequireLocation?.();
      return;
    }
    onChange(next);
  };

  return (
    <Select
      value={value}
      onValueChange={(next) => handleValueChange(next as SortMode)}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="排序" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="distance">
          距离优先{!distanceEnabled ? "（未开启）" : ""}
        </SelectItem>
        <SelectItem value="free">空闲优先</SelectItem>
      </SelectContent>
    </Select>
  );
}
