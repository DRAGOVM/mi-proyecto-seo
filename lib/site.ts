const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

export const siteConfig = {
  name: "Mi Sitio Optimizado",
  description:
    "Aprende sobre SEO, rendimiento, imágenes optimizadas y lazy loading en Next.js.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    vercelUrl ||
    "http://localhost:3000",
  keywords: [
    "Next.js",
    "SEO",
    "optimización web",
    "lazy loading",
    "next/image",
  ],
};
