// No check can be removed once file is in typescript
// @ts-nocheck
// import { ClassValue, clsx } from 'clsx'
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
export function concatenateClassnames(...inputs) {
  return twMerge(clsx(inputs));
}
