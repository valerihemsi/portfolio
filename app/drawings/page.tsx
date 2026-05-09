import { drawings } from "@/lib/data";

function DrawingCard({ d }: { d: typeof drawings[0] }) {
  return (
    <article className="group mb-5">
      <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[#f0eeea]">
        {d.src ? (
          <img
            src={d.src}
            alt={d.title}
            className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="aspect-square flex items-center justify-center text-[var(--muted)] font-mono text-xs">
            coming soon
          </div>
        )}
      </div>
      <div className="pt-3 pb-1 px-1">
        <h2 className="text-sm font-medium">{d.title}</h2>
        <p className="text-[var(--muted)] text-xs mt-0.5">{d.medium} · {d.year}</p>
        {d.description && (
          <p className="text-[var(--muted)] text-xs mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {d.description}
          </p>
        )}
      </div>
    </article>
  );
}

export default function DrawingsPage() {
  // Sabit başlangıç çizimleri
  const col1Start = drawings.find(d => d.slug === "she-and-the-city")!;
  const col2Start = drawings.find(d => d.slug === "nautilus")!;
  const col3Start = drawings.find(d => d.slug === "between-worlds")!;
  const pinned    = new Set(["she-and-the-city", "nautilus", "between-worlds"]);

  // Geri kalan çizimleri 3 sütuna dağıt
  const rest = drawings.filter(d => !pinned.has(d.slug));
  const col1: typeof drawings = [col1Start];
  const col2: typeof drawings = [col2Start];
  const col3: typeof drawings = [col3Start];

  rest.forEach((d, i) => {
    if      (i % 3 === 0) col1.push(d);
    else if (i % 3 === 1) col2.push(d);
    else                  col3.push(d);
  });

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <header className="mb-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-4">02</p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">Drawings</h1>
        <p className="text-[var(--muted)] text-sm max-w-md leading-relaxed">
          Ink, acrylic, watercolor, and digital, made by hand and screen.
        </p>
      </header>

      {/* 3-column grid, desktop only; single column on mobile */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-5">
        <div>{col1.map(d => <DrawingCard key={d.slug} d={d} />)}</div>
        <div>{col2.map(d => <DrawingCard key={d.slug} d={d} />)}</div>
        <div>{col3.map(d => <DrawingCard key={d.slug} d={d} />)}</div>
      </div>

      {/* Mobile / tablet: masonry columns */}
      <div className="lg:hidden columns-1 sm:columns-2 gap-5">
        {drawings.map(d => (
          <div key={d.slug} className="break-inside-avoid">
            <DrawingCard d={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
