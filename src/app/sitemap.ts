import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { articleSlugsQuery, sanityFetch } from "@/lib/sanity";
import { blogOneSlug, blogTwoSlug, blogThreeSlug, blogFourSlug, blogFiveSlug, blogSixSlug, blogSevenSlug } from "@/lib/blog-fallbacks";

/** Public, indexable MyEVStation routes. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url.replace(/\/$/, "");
  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/why-myevstation", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/business-model", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/technology", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/ev-charging-investment-guide", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/ev-charging-calculator", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/impact", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blogs", changeFrequency: "daily" as const, priority: 0.9 },
    { path: "/about-us", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/without-land", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/with-land", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/ex-servicemen", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/society", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/greater-noida-societies", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/amritsar-ev-charging", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/punjab-ev-charging", changeFrequency: "monthly" as const, priority: 1.0 },
  ];
  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const articles = await sanityFetch<{ slug: string }[]>(articleSlugsQuery);
    articleRoutes = [...new Set([blogOneSlug, blogTwoSlug, blogThreeSlug, blogFourSlug, blogFiveSlug, blogSixSlug, blogSevenSlug, ...articles.map(({ slug }) => slug)])].map((slug) => ({
      url: `${base}/blogs/blog/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("[sitemap] Could not load published blog slugs:", error);
    articleRoutes = [blogOneSlug, blogTwoSlug, blogThreeSlug, blogFourSlug, blogFiveSlug, blogSixSlug, blogSevenSlug].map((slug) => ({ url: `${base}/blogs/blog/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 }));
  }

  return [
    ...routes.map((route) => ({ ...route, url: `${base}${route.path}` })),
    ...articleRoutes,
  ];
}
