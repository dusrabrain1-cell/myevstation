import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";

/**
 * Public, indexable MyEVStation routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/without-land", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/with-land", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/ex-servicemen", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/society", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/greater-noida-societies", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/amritsar-ev-charging", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/punjab-ev-charging", changeFrequency: "monthly" as const, priority: 1.0 },
    { path: "/ev-charging-investment-guide", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
