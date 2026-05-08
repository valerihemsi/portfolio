import Link from "next/link";

const agents = [
  {
    num: "01",
    name: "Philosophical Researcher",
    desc: "Investigates the question through a chosen research framework — from Analytic Philosophy to Genealogy. Surfaces the strongest arguments, counter-arguments, cross-cultural perspectives, and unresolved tensions.",
  },
  {
    num: "02",
    name: "Epistemic Critic",
    desc: "Audits the researcher's report using a chosen critique framework — from Adam Smith's Impartial Spectator to Kuhn's Paradigm Analysis. Identifies framing biases, missing voices, and blind spots.",
  },
  {
    num: "03",
    name: "Integral Synthesizer",
    desc: "Integrates both reports through a chosen synthesis framework — from Wilber's AQAL to Rawls' Reflective Equilibrium. Distinguishes genuine integration from false consensus.",
  },
];

const frameworks = [
  { group: "Research", items: ["Analytic Philosophy", "Phenomenology", "Pragmatism", "Critical Theory", "Genealogy", "Dialectic Method"] },
  { group: "Critique",  items: ["Impartial Spectator", "Cognitive Bias Analysis", "Research Programs", "Paradigm Analysis", "Epistemic Anarchism"] },
  { group: "Synthesis", items: ["AQAL / Four Quadrants", "Dialectical Synthesis", "Reflective Equilibrium", "Participatory Epistemology"] },
];

const stack = [
  { label: "Framework",  value: "crewAI 1.14" },
  { label: "Language",   value: "Python 3.12" },
  { label: "LLM",        value: "Claude Sonnet 4.6" },
  { label: "Server",     value: "Flask + SSE streaming" },
  { label: "Frontend",   value: "Vanilla HTML / CSS / JS" },
  { label: "Deployment", value: "Railway" },
];

export default function PhilosophyResearchPage() {
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
          href="https://philosophy-research-kxlv-production.up.railway.app"
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
          <span className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1 rounded">
            2025
          </span>
          <span className="font-mono text-xs text-[var(--muted)]">AI · Philosophy · Research</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] mb-6">
          Philosophical<br />Research System
        </h1>

        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl">
          A multi-agent AI platform where three specialized agents collaboratively investigate any philosophical question — each operating through a distinct, user-selected intellectual framework.
        </p>
      </header>

      <hr className="border-[var(--border)] mb-16" />

      {/* How it works */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          How It Works
        </h2>

        <p className="text-[var(--muted)] text-sm leading-relaxed mb-10">
          The user types any philosophical question and selects one framework per agent from a catalog of 15 intellectual methodologies. The three agents then run sequentially — each one receiving the previous agent&apos;s output as context — producing a layered, multi-perspective analysis.
        </p>

        <div className="flex flex-col gap-6">
          {agents.map((a) => (
            <div key={a.num} className="flex gap-6 items-start">
              <span className="font-mono text-xs text-[var(--muted)] w-6 shrink-0 pt-1">{a.num}</span>
              <div>
                <h3 className="text-sm font-medium mb-1">{a.name}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Frameworks */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          Framework Catalog
        </h2>

        <div className="flex flex-col gap-8">
          {frameworks.map((g) => (
            <div key={g.group} className="flex flex-col sm:flex-row gap-4 sm:gap-10">
              <span className="font-mono text-xs text-[var(--muted)] w-20 shrink-0 pt-0.5">
                {g.group}
              </span>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-[var(--border)] text-[var(--muted)] rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Tech stack */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          Technical Stack
        </h2>

        <div className="flex flex-col gap-3">
          {stack.map((s) => (
            <div key={s.label} className="flex items-baseline gap-6">
              <span className="font-mono text-xs text-[var(--muted)] w-28 shrink-0">{s.label}</span>
              <span className="text-sm">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* What I learned */}
      <section>
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          What I Learned
        </h2>

        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            Building this system taught me how to structure multi-agent pipelines where each agent has a distinct role, a specific context window, and a clear handoff to the next. Designing the framework injection system — where philosophical methodologies are encoded as detailed prompt instructions — showed me how much output quality depends on how precisely you define a role.
          </p>
          <p>
            On the frontend side, implementing real-time Server-Sent Events (SSE) streaming and the typewriter effect required thinking carefully about state — what's happening in the browser while the server is still generating. It was the first time I experienced the full loop from a user interface decision all the way down to how a Python thread queues messages.
          </p>
          <p>
            Most importantly, this project confirmed my core belief: AI is most powerful not when it replaces thinking, but when it structures it — giving different frameworks equal weight, holding contradictions open, and refusing easy synthesis.
          </p>
        </div>
      </section>

    </div>
  );
}
