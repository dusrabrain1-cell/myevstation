import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";

/**
 * Public MyEVStation pages only. Legacy Carbon Mandi blog and project
 * routes were removed from this repository and must not appear in the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/without-land", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/with-land", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/ex-servicemen", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/society", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
