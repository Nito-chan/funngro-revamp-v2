import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/brands"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];
}
