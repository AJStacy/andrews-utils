/**
 * Type Guard to validate that the value is a number.
 */
 export function isNumber(value: unknown): value is number {
  return !isNaN(Number(value));
}