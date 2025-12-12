import { DEFAULT_FETCH_INTERVAL } from "@/lib/config";

const envRefresh = Number(process.env.NEXT_PUBLIC_FETCH_INTERVAL ?? "");
const ENV_INTERVAL =
  Number.isFinite(envRefresh) && envRefresh > 0 ? envRefresh : null;

export function useConfig() {
  return ENV_INTERVAL ?? DEFAULT_FETCH_INTERVAL;
}
