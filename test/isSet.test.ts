import { isSet } from '../src';

describe('type guard for verifying that values are set', () => {
  it('validates that a value is set', () => {
    expect(isSet(123)).toBe(true);
  });
  it('validates that a null value is not set', () => {
    expect(isSet(null)).toBe(false);
  });
  it('validates that a undefined value is not set', () => {
    expect(isSet(undefined)).toBe(false);
  });
  it('validates that a falsy value is set', () => {
    expect(isSet(0)).toBe(true);
  });
});
