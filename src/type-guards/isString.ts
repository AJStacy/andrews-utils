/**
 * Type Guard to validate that the value is a string.
 */
export function isString(value: unknown): value is string {
  return Object.prototype.toString.call(value) === "[object String]";
}