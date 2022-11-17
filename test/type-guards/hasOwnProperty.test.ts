import { hasOwnProperty } from '../../src';

const testObj = {
  foo: 'bar',
  hello: 'world',
};

describe('hasOwnProperties type guard', () => {
  it('validates that an object contains the provided property', () => {
    expect(hasOwnProperty(testObj, 'foo')).toBe(true);
  });
  it('validates that an object does not contain the provided property', () => {
    expect(hasOwnProperty(testObj, 'baz')).toBe(false);
  });
});
