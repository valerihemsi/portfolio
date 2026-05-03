import { posts } from "@/lib/data";
import Link from "next/link";

export default function WritingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto">

      <header className="mb-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-4">03</p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">Writing</h1>
      </header>

      <div className="flex flex-col border-t border-[var(--border)]">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="group py-8 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-start gap-6"
          >
            <span className="font-mono text-xs text-[var(--muted)] pt-1 w-28 shrink-0">
              {new Date(p.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </span>

            <div className="flex-1">
              <h2 className="text-lg font-medium mb-2 group-hover:text-[var(--accent)] transition-colors">
                {p.title}
              </h2>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{p.excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[var(--muted)]">{p.readTime} min read</span>
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <span className="text-[var(--muted)] group-hover:translate-x-1 transition-transform text-lg self-center hidden sm:block">
              →
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
