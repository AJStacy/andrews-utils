/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Type guard that validates that an object contains the specified property.
 */
 export function hasOwnProperty<X extends Record<any, unknown>, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  return obj[prop] !== undefined;
}
