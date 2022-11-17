/**
 * Validates that a value is not undefined or null.
 */
export function isSet<T>(value?: unknown): value is NonNullable<T> {
  return value !== undefined && value !== null;
}
