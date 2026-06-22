import type { NextApiRequest, NextApiResponse } from "next";
import { getAllSitemapRoutes, blogPosts } from "../../lib/content";
import { siteConfig } from "../../lib/site";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dynamicRoutes = getAllSitemapRoutes();

  const lastModifiedMap = new Map(
    blogPosts.map((post) => [`/blog/${post.slug}`, post.publishedAt]),
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${dynamicRoutes
  .map((route) => {
    const lastModified =
      lastModifiedMap.get(route) || new Date().toISOString();

    return `<url>
  <loc>${siteConfig.url}${route}</loc>
  <lastmod>${lastModified}</lastmod>
</url>`;
  })
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}
