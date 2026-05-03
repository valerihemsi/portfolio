import Link from "next/link";

const sections = [
  {
    href: "/projects",
    label: "Projects",
    num: "01",
    desc: "Code I've built — tools, systems, experiments.",
  },
  {
    href: "/drawings",
    label: "Drawings",
    num: "02",
    desc: "Images I've made by hand and digitally.",
  },
  {
    href: "/writing",
    label: "Writing",
    num: "03",
    desc: "Articles, notes, and long-form thoughts.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center px-6 pt-32 pb-20 max-w-3xl mx-auto w-full">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          Available for work
        </p>

        <h1 className="text-5xl sm:text-7xl font-light leading-[1.05] tracking-tight mb-10">
          Designer,<br />
          Developer,<br />
          <span className="text-[var(--muted)]">and maker.</span>
        </h1>

        <p className="text-[var(--muted)] text-lg max-w-md leading-relaxed">
          I build things with code, draw with whatever&apos;s around, and write when something needs saying.
        </p>
      </section>

      {/* Section links */}
      <section className="border-t border-[var(--border)]">
        {sections.map((s, i) => (
          <Link
            key={s.href}
            href={s.href}
            className={`group flex items-center gap-6 px-6 py-7 transition-colors hover:bg-white/[.03] ${
              i !== sections.length - 1 ? "border-b border-[var(--border)]" : ""
            }`}
          >
            <span className="font-mono text-xs text-[var(--muted)] w-6 shrink-0">{s.num}</span>
            <span className="text-xl font-light flex-1">{s.label}</span>
            <span className="text-sm text-[var(--muted)] hidden sm:block max-w-xs">{s.desc}</span>
            <span className="text-[var(--muted)] group-hover:translate-x-1 transition-transform text-lg">→</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
