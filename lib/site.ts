const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

const defaultUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://mi-proyecto-seo-tau.vercel.app";

export const siteConfig = {
  name: "Mi Sitio Optimizado",
  description:
    "Aprende sobre SEO, rendimiento, imágenes optimizadas y lazy loading en Next.js.",
  url:
    vercelProductionUrl ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    vercelUrl ||
    defaultUrl,
  keywords: [
    "Next.js",
    "SEO",
    "optimización web",
    "lazy loading",
    "next/image",
  ],
};
