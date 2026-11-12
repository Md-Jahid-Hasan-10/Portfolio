import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { resolveSiteUrl } from "@/data/content";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const h = await headers();
  const url = resolveSiteUrl(h.get("x-forwarded-host") ?? h.get("host"));

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}
