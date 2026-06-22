import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "../../../lib/content";
import { siteConfig } from "../../../lib/site";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      images: [
        {
          url: "/images/seo-image.jpg",
          width: 1366,
          height: 768,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/images/seo-image.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16">
      <article className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Blog SEO
        </p>
        <h1 className="mt-3 text-4xl font-bold text-zinc-900">{post.title}</h1>
        <p className="mt-4 text-lg text-zinc-600">{post.description}</p>
        <p className="mt-6 text-sm text-zinc-500">
          Publicado: {new Date(post.publishedAt).toLocaleDateString("es-PE")}
        </p>
      </article>
    </main>
  );
}
