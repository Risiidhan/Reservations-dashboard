import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isBrowser = () => typeof window !== "undefined";

export const isDevelopment = () => process.env.NODE_ENV === "development";

export const isProduction = () => process.env.NODE_ENV === "production";
