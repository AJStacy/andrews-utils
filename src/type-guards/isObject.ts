/**
 * Type guard that validates that a value is an Object.
 */
 export function isObject(val?: unknown): val is Record<string, unknown> {
  return val !== undefined && val !== null && typeof val === 'object';
}
