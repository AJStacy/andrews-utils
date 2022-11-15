/**
 * Validates that a value is not undefined or null.
 */
export function isSet(val?: unknown): val is NonNullable<unknown> {
  return val !== undefined && val !== null;
}
