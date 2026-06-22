import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../../lib/content";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "Blog SEO y rendimiento",
  description:
    "Artículos y ejemplos sobre SEO técnico, imágenes optimizadas y rendimiento en Next.js.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog SEO y rendimiento",
    description:
      "Contenido del blog con prácticas de SEO técnico y optimización web para Next.js.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [
      {
        url: "/images/seo-image.jpg",
        width: 1366,
        height: 768,
        alt: "Blog de SEO y rendimiento en Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog SEO y rendimiento",
    description:
      "Contenido del blog con prácticas de SEO técnico y optimización web para Next.js.",
    images: ["/images/seo-image.jpg"],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16">
      <section className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-zinc-900">Blog</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Esta ruta existe para que el sitemap incluya una página real del
          proyecto y puedas probar la indexación correctamente.
        </p>
        <div className="mt-8 grid gap-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-zinc-200 p-5 transition hover:border-zinc-400"
            >
              <h2 className="text-2xl font-semibold text-zinc-900">
                {post.title}
              </h2>
              <p className="mt-2 text-zinc-600">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
