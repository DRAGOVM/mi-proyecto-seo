import type { Metadata } from "next";
import Image from "next/image";
import LazyLargeComponent from "../components/LazyLargeComponent";
import { siteConfig } from "../lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Inicio optimizado";
  const description =
    "Página principal con meta tags dinámicos, sitemap, imágenes optimizadas y lazy loading en Next.js.";

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, "meta tags dinámicos"],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${siteConfig.name} - Home`,
      description,
      url: siteConfig.url,
      images: [
        {
          url: "/images/seo-image.jpg",
          width: 1366,
          height: 768,
          alt: "Vista previa social del proyecto SEO en Next.js",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} - Home`,
      description,
      images: ["/images/seo-image.jpg"],
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8">
        <div className="max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Proyecto SEO con Next.js
          </p>
          <h1 className="mt-3 text-4xl font-bold text-zinc-900 sm:text-5xl">
            Página optimizada para SEO, rendimiento e indexación
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Esta demo reúne meta tags dinámicos, sitemap, `next/image` y lazy
            loading en una sola implementación compatible con App Router.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
          <Image
            src="/images/seo-image.jpg"
            width={1366}
            height={768}
            alt="Ejemplo de imagen optimizada para SEO y rendimiento"
            priority
            className="h-auto w-full rounded-2xl"
          />
        </div>

        <div className="grid w-full gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Meta tags</h2>
            <p className="mt-2 text-zinc-600">
              La página genera `title`, `description`, `keywords`, Open Graph y
              Twitter Cards con la API `generateMetadata`.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Sitemap</h2>
            <p className="mt-2 text-zinc-600">
              El proyecto expone `sitemap.xml` y `robots.txt` desde App Router
              para facilitar el rastreo de Google.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Imágenes</h2>
            <p className="mt-2 text-zinc-600">
              La imagen principal usa `next/image` con carga prioritaria y
              optimización automática.
            </p>
          </article>
        </div>

        <div className="w-full">
          <LazyLargeComponent />
        </div>
      </section>
    </main>
  );
}
