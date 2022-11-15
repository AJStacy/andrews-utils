import { isNumber } from '../src';

describe('number validation type guard', () => {
  it('validates that a value is a number', () => {
    expect(isNumber(123)).toBe(true);
  });
  it('validates that zero is a number', () => {
    expect(isNumber(0)).toBe(true);
  });
  it('validates that a value is a number', () => {
    expect(isNumber(new Number())).toBe(true);
  });
  it('validates that infinity is a number', () => {
    expect(isNumber(Infinity)).toBe(true);
  });
  it('validates that NaN is not a number', () => {
    expect(isNumber(NaN)).toBe(false);
  });
  it('validates that a value is not a number', () => {
    expect(isNumber("NaN")).toBe(false);
  });
});
