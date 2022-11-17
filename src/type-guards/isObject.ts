/**
 * Type guard that validates that a value is an Object.
 */
export function isObject(value?: unknown): value is Record<string, unknown> {
  return (
    value !== undefined &&
    value !== null &&
    typeof value === 'object' &&
    value?.constructor === Object
  );
}
