export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-nextjs",
    title: "SEO técnico en Next.js",
    description:
      "Buenas prácticas para mejorar indexación, meta tags y rendimiento en proyectos Next.js.",
    publishedAt: "2026-06-21T00:00:00.000Z",
  },
  {
    slug: "imagenes-optimizadas",
    title: "Optimización de imágenes web",
    description:
      "Uso de next/image, formatos modernos y carga prioritaria para mejorar Core Web Vitals.",
    publishedAt: "2026-06-20T00:00:00.000Z",
  },
];

export const staticRoutes = ["/", "/blog", "/contacto"];

export function getAllSitemapRoutes() {
  const postRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  return [...staticRoutes, ...postRoutes];
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
