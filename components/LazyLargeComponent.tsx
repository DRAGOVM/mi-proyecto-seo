"use client";

import dynamic from "next/dynamic";

const LargeComponent = dynamic(() => import("./LargeComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-2xl rounded-2xl border border-dashed border-zinc-300 bg-zinc-100 p-6 text-zinc-600">
      Cargando componente de forma diferida...
    </div>
  ),
});

export default function LazyLargeComponent() {
  return <LargeComponent />;
}
