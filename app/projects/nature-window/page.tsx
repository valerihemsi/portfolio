import Link from "next/link";

export default function NatureWindowPage() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-6 max-w-3xl mx-auto">

      {/* Back + Open */}
      <div className="flex items-center justify-between mb-16">
        <Link
          href="/projects"
          className="font-mono text-xs tracking-[.15em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          ← Projects
        </Link>
        <a
          href="https://nature-window-kohl.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-[.1em] uppercase px-4 py-2 border border-[var(--foreground)] text-[var(--foreground)] rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
        >
          Open Project →
        </a>
      </div>

      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1 rounded">2025</span>
          <span className="font-mono text-xs text-[var(--muted)]">Concept Design · Interior Architecture · Product</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] mb-6">
          Natura Vue
        </h1>

        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl">
          A product concept developed during my interior architecture thesis. A smart window system that transforms urban views into personalized nature experiences.
        </p>
      </header>

      <hr className="border-[var(--border)] mb-16" />

      {/* Origin */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">Origin</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            Natura Vue began as a concept within my interior architecture degree thesis, Glimpse Into the Virtual Nature. While researching transparent OLED technology as a spatial design element, I started asking a broader question: what if the window itself could be redesigned, not structurally, but experientially?
          </p>
          <p>
            The thesis explored how spaces could bring nature closer to people who have no direct access to it. Hospital patients, residents of high-rise apartments in dense cities, people who spend their days in rooms with no meaningful view. The window was always passive in these spaces. Natura Vue proposes making it active.
          </p>
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* The Concept */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">The Concept</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            Natura Vue is a transparent OLED layer that fits over any existing window. It overlays a selected nature scene on top of the real exterior view, without blocking light, without renovation, without changing the building. The user chooses the atmosphere: forest, ocean, mountain, soft rain, golden hour.
          </p>
          <p>
            The system is designed for spaces where this matters most: hospital rooms, elderly care facilities, wellness clinics, apartments in urban cores. Environments where the view outside works against the person inside.
          </p>
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* System */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">System Layers</h2>
        <div className="flex flex-col gap-3">
          {[
            { num: "01", name: "Existing Glass", desc: "Preserved. No structural modification required." },
            { num: "02", name: "Transparent OLED Panel", desc: "Overlays high-resolution nature imagery without blocking the real view." },
            { num: "03", name: "Smart Glass Layer", desc: "Controls opacity, privacy, and display contrast." },
            { num: "04", name: "Sensor System", desc: "Reads ambient light and time of day. Adjusts automatically." },
            { num: "05", name: "User Interface", desc: "Mobile app, touch panel, or voice. One gesture changes the room." },
            { num: "06", name: "Digital Nature Library", desc: "Curated scenes, seasons, and light conditions. Updated continuously." },
          ].map((layer) => (
            <div key={layer.num} className="flex items-baseline gap-6 py-4 border-b border-[var(--border)]">
              <span className="font-mono text-xs text-[var(--muted)] shrink-0 w-8">{layer.num}</span>
              <span className="text-sm font-medium w-44 shrink-0">{layer.name}</span>
              <span className="text-sm text-[var(--muted)]">{layer.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Presentation site */}
      <section>
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">Presentation Site</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            Natura Vue has a dedicated presentation website built to communicate the concept commercially, as if it were a real product ready to be pitched. The site includes the full concept narrative, transition visuals showing the same room before and after the system, system documentation, and a future vision for where the product could go.
          </p>
          <p>
            Built with Next.js, Three.js, React Three Fiber, and Framer Motion. The hero section features a real-time iridescent 3D glass object rendered in WebGL.
          </p>
          <div className="mt-6">
            <a
              href="https://nature-window-kohl.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[.1em] uppercase px-4 py-2 border border-[var(--foreground)] text-[var(--foreground)] rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors inline-block"
            >
              View Presentation Site →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
