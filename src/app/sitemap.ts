import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { guides } from "@/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  // Update content dates only when the corresponding content changes.
  // Unchanged legal pages omit lastModified instead of inventing a date.
  return [
    { url: base, lastModified: "2026-10-26", changeFrequency: "weekly", priority: 1 },
    { url: `${base}/guides`, lastModified: "2026-10-26", changeFrequency: "weekly", priority: 0.8 },
    ...guides.map((guide) => ({ url: `${base}/guides/${guide.slug}`, lastModified: guide.updated, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...["/privacy", "/terms", "/contact", "/data-deletion"].map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: 0.3 })),
  ];
}
