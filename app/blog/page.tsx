import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos y ejemplos sobre SEO técnico y rendimiento en Next.js.",
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
      </section>
    </main>
  );
}
