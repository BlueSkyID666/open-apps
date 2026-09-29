/**
 * Edge rules in front of the static site (dist/ is served by the assets
 * binding; this runs only for the routes listed in wrangler.jsonc
 * `run_worker_first`).
 *
 * Filter, sort and search URLs (`/apps/?sort=…&stack=…`) serve the same HTML
 * as the page without the query string. The page already points its
 * canonical at the clean URL and flips `meta robots` in the browser, but the
 * HTML a crawler receives first is indexable — so parameter URLs got indexed
 * with stale counts. The response header settles it before any rendering.
 */
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const url = new URL(request.url);
    if (!url.search) return response;
    const type = response.headers.get("content-type") ?? "";
    if (!type.includes("text/html")) return response;
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex, follow");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
