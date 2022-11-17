/**
 * Because Response.json() always returns a Promise<any> we want to
 * return a Promise<unknown> for safety. This will force us to validate
 * the value provided to us from the API.
 */
export async function safeJsonFetch(
  input: RequestInfo | string,
  init?: RequestInit | undefined
): Promise<unknown> {
  const res = await fetch(input, init);
  return res.json();
}
