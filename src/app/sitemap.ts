import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { resolveSiteUrl } from "@/data/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const h = await headers();
  const url = resolveSiteUrl(h.get("x-forwarded-host") ?? h.get("host"));
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
