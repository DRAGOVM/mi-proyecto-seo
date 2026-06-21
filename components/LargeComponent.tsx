"use client";

export default function LargeComponent() {
  return (
    <section className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-zinc-900">
        Componente cargado con lazy loading
      </h2>
      <p className="mt-3 text-zinc-600">
        Este bloque se importa de forma diferida usando `next/dynamic`, por lo
        que solo se carga cuando el navegador lo necesita.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <article className="rounded-xl bg-zinc-50 p-4">
          <h3 className="font-medium text-zinc-900">Menor JavaScript inicial</h3>
          <p className="mt-2 text-sm text-zinc-600">
            La página principal envía menos código al inicio.
          </p>
        </article>
        <article className="rounded-xl bg-zinc-50 p-4">
          <h3 className="font-medium text-zinc-900">Carga bajo demanda</h3>
          <p className="mt-2 text-sm text-zinc-600">
            El componente se descarga solo cuando hace falta.
          </p>
        </article>
        <article className="rounded-xl bg-zinc-50 p-4">
          <h3 className="font-medium text-zinc-900">Mejor rendimiento</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Ayuda a mejorar la experiencia y métricas de carga.
          </p>
        </article>
      </div>
    </section>
  );
}
