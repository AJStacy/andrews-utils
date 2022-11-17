import { hasOwnProperties } from '../../src';

const testObj = {
  foo: 'bar',
  hello: 'world',
};

describe('hasOwnProperties type guard', () => {
  it('validates that an object contains all of the provided properties', () => {
    expect(hasOwnProperties(testObj, ['foo', 'hello'])).toBe(true);
  });
  it('validates that an object must contain all of the provided properties', () => {
    expect(hasOwnProperties(testObj, ['foo', 'baz'])).toBe(false);
  });
  it('validates that an object does not contain the provided properties', () => {
    expect(hasOwnProperties(testObj, ['scooby', 'doo'])).toBe(false);
  });
});
