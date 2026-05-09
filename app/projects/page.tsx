import { projects } from "@/lib/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto">

      <header className="mb-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-4">01</p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">Projects</h1>
      </header>

      <div className="flex flex-col border-t border-[var(--border)]">
        {projects.map((p) => (
          <article key={p.slug} className="group py-8 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-start gap-6">
            <span className="font-mono text-xs text-[var(--muted)] pt-1 w-12 shrink-0">
              {p.year}
            </span>

            <div className="flex-1">
              <h2 className="text-lg font-medium mb-2">{p.title}</h2>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-[var(--border)] text-[var(--muted)] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 sm:flex-col sm:items-end shrink-0 sm:pt-1">
              {p.hasDetail && (
                <Link
                  href={`/projects/${p.slug}`}
                  className="font-mono text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  Details →
                </Link>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  GitHub →
                </a>
              )}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[var(--foreground)] border border-[var(--foreground)]/20 px-3 py-1 rounded hover:border-[var(--foreground)]/60 transition-colors"
                >
                  Open →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
