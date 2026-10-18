/**
 * Bridge between the app (src/) and the Sanity studio config (sanity/),
 * which lives outside src/. Pages import everything Sanity-related from here.
 */
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../../sanity/env";
import { urlFor } from "../../sanity/lib/image";

export { urlFor };
export * from "../../sanity/lib/queries";

const READ_TOKEN = process.env.SANITY_API_READ_TOKEN;

/**
 * Server-side read client. `perspective: "published"` ensures the live site
 * shows published content only, never drafts. CDN is off so reads always hit
 * fresh published data.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: READ_TOKEN,
  perspective: "published",
});

/**
 * Fetch helper. Always reads fresh so studio edits show on the next refresh —
 * important while the client is actively editing content. Before launch this
 * should move to ISR + on-demand webhook revalidation (Phase 5) for caching.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> {
  return client.fetch<T>(query, params, { cache: "no-store" });
}
