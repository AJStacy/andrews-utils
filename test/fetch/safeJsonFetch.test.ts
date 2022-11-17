import { safeJsonFetch, isObject, hasOwnProperty } from '../../src';

const _global: any = global;
_global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ foo: 'bar' }),
  })
);

describe('utility for fetching type safe JSON', () => {
  it('fetches json object properly', async () => {
    const json = await safeJsonFetch('https://example.com/foobar');

    if (isObject(json) && hasOwnProperty(json, 'foo')) {
      expect(json.foo).toBe('bar');
    } else {
      throw new Error('Failed to fetch and validate the test fetch JSON.');
    }
  });
});
