import { interiorProjects } from "@/lib/data";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  Residential: "text-amber-600 border-amber-200 bg-amber-50",
  Commercial:  "text-indigo-600 border-indigo-200 bg-indigo-50",
  Concept:     "text-purple-600 border-purple-200 bg-purple-50",
  Academic:    "text-stone-600 border-stone-200 bg-stone-50",
};

export default function InteriorDesignPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto">

      {/* Header */}
      <header className="mb-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-4">
          <Link href="/projects" className="hover:text-[var(--foreground)] transition-colors">
            Projects
          </Link>
          {" / "}Interior Design
        </p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
          Interior Design Projects
        </h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-xl">
          Spatial thinking, material research, and human-centered environments.
          A collection spanning residential concepts, commercial spaces, and academic work.
        </p>
      </header>

      {/* Natura Vue — product concept from thesis */}
      <div className="mb-8 border border-[var(--border)] rounded-lg overflow-hidden">
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h2 className="text-base font-medium leading-snug mb-1">Natura Vue</h2>
              <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-purple-200 text-purple-600 bg-purple-50 rounded">
                Product Concept
              </span>
            </div>
            <span className="font-mono text-[10px] text-[var(--muted)] shrink-0 pt-0.5">2025</span>
          </div>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
            A product concept developed within my degree thesis. A transparent OLED-based window system
            that transforms urban views into personalized nature experiences, designed for hospitals,
            apartments, wellness clinics, and spaces where access to nature is limited.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/projects/nature-window"
              className="font-mono text-xs tracking-[.1em] uppercase text-[var(--foreground)] hover:text-[var(--muted)] transition-colors"
            >
              Read more →
            </Link>
            <a
              href="https://nature-window-git-main-valerihemsi-3642s-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[.1em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Visit site →
            </a>
          </div>
        </div>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {interiorProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/interior-design/${project.slug}`}
            className="group block border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--foreground)]/30 transition-all"
          >
            {/* Cover image */}
            <div className="aspect-[4/3] bg-[#f0eeea] overflow-hidden border-b border-[var(--border)]">
              {project.images[0] ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
                    Image coming soon
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="text-base font-medium leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h2>
                <span className="font-mono text-[10px] text-[var(--muted)] shrink-0 pt-0.5">
                  {project.year}
                </span>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <span className={`font-mono text-[10px] tracking-wider uppercase px-2 py-1 border rounded ${categoryColors[project.category]}`}>
                  {project.category}
                </span>
                <span className="font-mono text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                  View →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
