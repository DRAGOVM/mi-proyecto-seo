import type { MetadataRoute } from "next";
import { blogPosts, staticRoutes } from "../lib/content";
import { siteConfig } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "/contacto" ? ("monthly" as const) : ("weekly" as const),
    priority: route === "/" ? 1 : 0.8,
  }));

  const postEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...baseEntries, ...postEntries];
}
