// ./src/sanity/lib/get-all-posts.ts
import type { SanityDocument } from "@sanity/client";
import { loadQuery } from "./load-query";

export type PostSummary = SanityDocument & {
  title?: string;
  slug?: { current: string };
  publishedAt?: string;
  mainImage?: unknown;
};

export async function getAllPosts() {
  const { data } = await loadQuery<PostSummary[]>({
    query:
      '*[_type == "post" && defined(slug.current)] | order(publishedAt desc){title, slug, publishedAt, mainImage}',
  });

  return data ?? [];
}
