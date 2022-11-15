import { isArray } from '../src';

describe('array validation type guard', () => {
  it('validates that a value is an array', () => {
    expect(isArray([])).toBe(true);
  });
  it('validates that a value is not an array', () => {
    expect(isArray(123)).toBe(false);
  });
});
