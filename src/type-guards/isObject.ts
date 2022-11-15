import { isSet } from "./isSet";

/**
 * Type guard that validates that a value is an Object.
 */
export function isObject(val?: unknown): val is Record<string, unknown> {
  return isSet<unknown>(val) && typeof val === 'object' && val.constructor === Object;
}
