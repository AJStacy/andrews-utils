/**
 * Validates that a value is not undefined or null.
 */
export function isSet<T>(val?: unknown): val is NonNullable<T> {
  return val !== undefined && val !== null;
}
