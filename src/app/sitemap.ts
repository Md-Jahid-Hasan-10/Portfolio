import type { MetadataRoute } from "next";
import { site } from "@/data/content";
import { isRealLink } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = isRealLink(site.url) ? site.url : "https://example.com";
  const lastModified = new Date();

  return [
    {
      url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
