import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx.
 * Combines conditional class logic with Tailwind conflict resolution.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as Canadian Dollar price string.
 * e.g. 14.5 → "$14.50"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
  }).format(price);
}

/**
 * Generate a deterministic 4-digit order number from a seed.
 * Uses a simple hash to avoid Math.random() hydration issues.
 */
export function generateOrderNumber(seed: number): string {
  const hash = ((seed * 2654435761) >>> 0) % 9000 + 1000;
  return hash.toString();
}

/**
 * Check if user prefers reduced motion.
 * Returns false on the server (SSR-safe).
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
