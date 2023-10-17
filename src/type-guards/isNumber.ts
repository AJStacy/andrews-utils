/**
 * Type Guard to validate that the value is a number.
 */
export function isNumber(value: unknown): value is number {
  // Number(null) returns 0 😭
  return value !== null && !isNaN(Number(value));
}
