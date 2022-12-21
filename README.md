# Andrew's Utils

A collection of random useful utility functions that you may not find in lodash. These utility functions are emitted as ES6 modules so that they are tree-shakable.

## Type Guards

This utility library provides a series of generic TypeScript type guards for validating your data.

### hasOwnProperties

This type guard validates that the provided object contains the provided property names.

#### hasOwnProperties Interface

```typescript
function hasOwnProperties<
  X extends Record<any, unknown>,
  Y extends PropertyKey,
  A extends Y[]
>(obj: X, props: A) => obj is X & Record<Y, unknown>;
```

### hasOwnProperties Example

```typescript
import { isObject, hasOwnProperties } from 'andrews-utils';

const val: unknown = {
  foo: 'bar',
  hello: 'world',
};

if (isObject(val) && hasOwnProperties(val, ['foo', 'hello'])) {
  // -> do something with obj.foo or obj.hello
}
```

---

### hasOwnProperty

This type guard validates that the provided object contains the provided property.

#### hasOwnProperty Interface

```typescript
function hasOwnProperty<X extends Record<any, unknown>, Y extends PropertyKey>(
  obj: X,
  prop: Y
) => obj is X & Record<Y, unknown>;
```

### hasOwnProperty Example

```typescript
import { isObject, hasOwnProperty } from 'andrews-utils';

const val: unknown = {
  foo: 'bar',
  hello: 'world',
};

if (isObject(val) && hasOwnProperty(val, 'foo')) {
}
```

---

### isArray

This type guard validates that the provided value is an array.

#### isArray Interface

```typescript
function isArray(value: unknown) => value is unknown[];
```

### isArray Example

```typescript
import { isArray } from 'andrews-utils';

const arr: unknown = ['foo', 'bar'];

if (isArray(arr)) {
  arr.forEach(val => {});
}
```

---

### isNumber

This type guard validates that the provided value is a number.

#### isNumber Interface

```typescript
function isNumber(value: unknown) => value is number;
```

### isNumber Example

```typescript
import { isNumber } from 'andrews-utils';

const val: unknown = 123;

if (isNumber(val)) {
  const answer = val * 2;
}
```

---

### isObject

This type guard validates that the provided value is an object.

#### isObject Interface

```typescript
function isObject(value: unknown) => value is Record<string, unknown>;
```

### isObject Example

```typescript
import { isObject } from 'andrews-utils';

const obj: unknown = {
  foo: 'bar',
};

if (isObject(val)) {
  // Do something with object with unknown properties.
  // Usually you would combine this with the hasOwnProperties type guard.
}
```

---

### isSet

This type guard validates that the provided value is not undefined or null.

#### isSet Interface

```typescript
function isSet<T>(value?: unknown) => value is NonNullable<T>;
```

### isSet Example

```typescript
import { isSet } from 'andrews-utils';

const val: unknown = 123;

if (isSet<number>(val)) {
  const answer = val * 2;
}
```

---

### isString

This type guard validates that the provided value is a string.

#### isString Interface

```typescript
function isString(value: unknown) => value is string;
```

### isString Example

```typescript
import { isString } from 'andrews-utils';

const val: unknown = 'foo';

if (isString(val)) {
  const chars = val.split('');
}
```

---

### safeJsonFetch

Executes a standard fetch but returns the JSON response as unknown to force you to validate it.

#### safeJsonFetch Interface

```typescript
async function safeJsonFetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => Promise<unknown>;
```

### safeJsonFetch Example

```typescript
import { safeJsonFetch } from 'andrews-utils';

safeJsonFetch('https://example.com/user/1').then(json => {
  const answer = json * 2;
  // => TSError: Object is of type 'unknown'.ts(2571)
  // This error is expected because json should be of type `unknown`.
});
```
