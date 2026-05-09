import { interiorProjects } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

const pdfMap: Record<string, string> = {
  "glimpse-into-the-virtual-nature": "/interior/glimpse.pdf",
  "gucci-immersive-smell-experience": "/interior/gucci.pdf",
  "futuristic-gold": "/interior/futuristic-gold.pdf",
};

const categoryColors: Record<string, string> = {
  Residential: "text-amber-600 border-amber-200",
  Commercial:  "text-indigo-600 border-indigo-200",
  Concept:     "text-purple-600 border-purple-200",
  Academic:    "text-stone-600 border-stone-200",
};

export async function generateStaticParams() {
  return interiorProjects.map((p) => ({ slug: p.slug }));
}

export default async function InteriorProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = interiorProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const pdf = pdfMap[project.slug];
  const [cover, ...rest] = project.images;

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto">

      {/* Breadcrumb */}
      <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
        <Link href="/projects" className="hover:text-[var(--foreground)] transition-colors">Projects</Link>
        {" / "}
        <Link href="/projects/interior-design" className="hover:text-[var(--foreground)] transition-colors">Interior Design</Link>
        {" / "}{project.title}
      </p>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className={`font-mono text-[10px] tracking-wider uppercase px-2 py-1 border rounded ${categoryColors[project.category]}`}>
            {project.category}
          </span>
          <span className="font-mono text-xs text-[var(--muted)]">{project.year}</span>
          {project.location && (
            <span className="font-mono text-xs text-[var(--muted)]">· {project.location}</span>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
          {project.title}
        </h1>
        <p className="text-[var(--muted)] leading-[1.85] max-w-2xl">
          {project.description}
        </p>
      </header>

      {/* Cover image */}
      {cover && (
        <div className="mb-6 border border-[var(--border)] rounded-lg overflow-hidden">
          <img src={cover} alt={project.title} className="w-full object-cover" />
        </div>
      )}

      {/* Gallery grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {rest.map((src, i) => (
            <div key={i} className="border border-[var(--border)] rounded-lg overflow-hidden">
              <img src={src} alt={`${project.title}, page ${i + 2}`} className="w-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* PDF embed */}
      {pdf && (
        <div className="border border-[var(--border)] rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--bg2, #f0eeea)]">
            <span className="font-mono text-xs text-[var(--muted)] tracking-wider uppercase">
              Full Project PDF
            </span>
            <a
              href={pdf}
              download
              className="font-mono text-xs text-[var(--foreground)] border border-[var(--border)] px-3 py-1 rounded hover:bg-[var(--border)] transition-colors"
            >
              ↓ Download
            </a>
          </div>
          <iframe
            src={pdf}
            className="w-full"
            style={{ height: "80vh" }}
            title={project.title}
          />
        </div>
      )}

    </div>
  );
}
