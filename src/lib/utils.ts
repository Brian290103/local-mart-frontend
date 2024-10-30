import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAppName = (): string => {
  return import.meta.env.VITE_APP_NAME || "DefaultAppName";
};

export const fetcher = (url) => fetch(url).then((res) => res.json());