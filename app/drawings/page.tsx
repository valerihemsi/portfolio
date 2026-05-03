import { drawings } from "@/lib/data";
import Image from "next/image";

export default function DrawingsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">

      <header className="mb-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-4">02</p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">Drawings</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {drawings.map((d) => (
          <article key={d.slug} className="group flex flex-col gap-3">
            <div className="aspect-square bg-white/[.03] border border-[var(--border)] rounded-lg overflow-hidden relative">
              {d.src ? (
                <Image
                  src={d.src}
                  alt={d.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[var(--muted)] font-mono text-xs">
                  coming soon
                </div>
              )}
            </div>
            <div>
              <h2 className="text-sm font-medium">{d.title}</h2>
              <p className="text-[var(--muted)] text-xs mt-1">{d.medium} · {d.year}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
