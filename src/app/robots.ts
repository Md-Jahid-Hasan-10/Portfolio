import type { MetadataRoute } from "next";
import { site } from "@/data/content";
import { isRealLink } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  const url = isRealLink(site.url) ? site.url : "https://example.com";

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}
