import Link from "next/link";

export default function WebsitesPage() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-6 max-w-3xl mx-auto">

      <Link
        href="/projects"
        className="font-mono text-xs tracking-[.15em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-16 inline-block"
      >
        ← Projects
      </Link>

      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1 rounded">
            2025
          </span>
          <span className="font-mono text-xs text-[var(--muted)]">Web · Design · Code</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] mb-6">
          Websites I've Built
        </h1>
      </header>

      <div className="flex flex-col gap-px border-t border-[var(--border)]">

        {/* This website */}
        <div className="group py-8 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-start gap-6">
          <span className="font-mono text-xs text-[var(--muted)] pt-1 w-12 shrink-0">2025</span>
          <div className="flex-1">
            <h2 className="text-lg font-medium mb-2">This website! :)</h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
              The one you're looking at right now. Built with Next.js 16, TypeScript, and Tailwind CSS —
              designed from scratch without templates. A space for projects, drawings, and writing.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "App Router"].map((t) => (
                <span key={t} className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-[var(--border)] text-[var(--muted)] rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <span className="font-mono text-xs text-[var(--muted)] shrink-0 sm:pt-1">← you are here</span>
        </div>

        {/* Natura Vue */}
        <div className="group py-8 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-start gap-6">
          <span className="font-mono text-xs text-[var(--muted)] pt-1 w-12 shrink-0">2025</span>
          <div className="flex-1">
            <h2 className="text-lg font-medium mb-2">Natura Vue</h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
              A commercial presentation website for a product concept developed during my interior architecture thesis.
              Features a real-time iridescent 3D glass object rendered with Three.js and React Three Fiber,
              scroll-driven parallax animations with Framer Motion, and a full concept narrative across multiple sections.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Next.js", "Three.js", "React Three Fiber", "Framer Motion", "WebGL"].map((t) => (
                <span key={t} className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-[var(--border)] text-[var(--muted)] rounded">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://www.naturavuewindow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[.1em] uppercase text-[var(--foreground)] hover:text-[var(--muted)] transition-colors"
            >
              Visit site →
            </a>
          </div>
        </div>

        {/* Experimental FoodLab */}
        <div className="group py-8 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-start gap-6">
          <span className="font-mono text-xs text-[var(--muted)] pt-1 w-12 shrink-0">2025</span>
          <div className="flex-1">
            <h2 className="text-lg font-medium mb-2">Experimental FoodLab</h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
              A full-stack social platform for food experimenters. Built with Next.js, Supabase, and TypeScript.
              Features authentication, follow system, real-time messaging, votes, saves, and ingredient search.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Real-time"].map((t) => (
                <span key={t} className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-[var(--border)] text-[var(--muted)] rounded">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://experimental-food-lab.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[.1em] uppercase text-[var(--foreground)] hover:text-[var(--muted)] transition-colors"
            >
              Visit site →
            </a>
          </div>
        </div>

        {/* More coming */}
        <div className="py-8 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-start gap-6">
          <span className="font-mono text-xs text-[var(--muted)] pt-1 w-12 shrink-0">—</span>
          <div className="flex-1">
            <h2 className="text-lg font-medium mb-2 text-[var(--muted)]">More coming soon</h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Currently building.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
