/**
 * Type Guard to validate that the value is an Array.
 */
 export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}
