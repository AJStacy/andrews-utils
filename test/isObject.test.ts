import { isObject } from '../src';

const testObj = {
  foo: 'bar',
  hello: 'world',
};

describe('object validation type guard', () => {
  it('validates that a value is an object', () => {
    expect(isObject(testObj)).toBe(true);
  });
  it('validates that an empty object is an object', () => {
    expect(isObject({})).toBe(true);
  });
  it('validates that a type constructor is not an object', () => {
    expect(isObject(new Number())).toBe(false);
  });
  it('validates that a value is not an object', () => {
    expect(isObject(123)).toBe(false);
  });
});
