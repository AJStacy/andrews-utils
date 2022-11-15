/* eslint-disable @typescript-eslint/no-explicit-any */


/**
 * Type guard that validates that an object contains all of the specified properties.
 */
 export function hasOwnProperties<
 X extends Record<any, unknown>,
 Y extends PropertyKey,
 A extends Y[]
>(obj: X, props: A): obj is X & Record<Y, unknown> {
 return !props.map((prop) => obj[prop] !== undefined).includes(false);
}