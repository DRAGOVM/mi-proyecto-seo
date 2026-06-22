import type { Metadata } from "next";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contacto y soporte SEO",
  description:
    "Página de contacto del proyecto de optimización SEO en Next.js con metadatos orientados a indexación.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto y soporte SEO",
    description:
      "Página de contacto del proyecto de optimización SEO en Next.js con metadatos orientados a indexación.",
    url: `${siteConfig.url}/contacto`,
    type: "website",
    images: [
      {
        url: "/images/seo-image.jpg",
        width: 1366,
        height: 768,
        alt: "Contacto del proyecto SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto y soporte SEO",
    description:
      "Página de contacto del proyecto de optimización SEO en Next.js con metadatos orientados a indexación.",
    images: ["/images/seo-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16">
      <section className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-zinc-900">Contacto</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Esta página completa las rutas del sitemap y permite validar
          `robots.txt`, `sitemap.xml` y navegación interna sin errores 404.
        </p>
      </section>
    </main>
  );
}
