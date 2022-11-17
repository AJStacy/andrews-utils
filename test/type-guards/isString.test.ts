import { isString } from '../../src';

describe('string validation type guard', () => {
  it('validates that a string of characters is a string', () => {
    expect(isString('abc')).toBe(true);
  });
  it('validates that an empty string is a string', () => {
    expect(isString('')).toBe(true);
  });
  it('validates that a String constructor is a string', () => {
    expect(isString(new String())).toBe(true);
  });
  it('validates that a non-string value is not a string', () => {
    expect(isString(123)).toBe(false);
  });
});
