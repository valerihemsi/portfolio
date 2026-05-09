import Link from "next/link";

const frameworks = [
  {
    name: "Impartial Spectator",
    origin: "Adam Smith, 1759",
    desc: "A symbolic reasoning module that evaluates any LLM output from the perspective of an imagined neutral observer, surfacing hidden assumptions, perspective-dependencies, and high-subjectivity language that the model itself cannot see.",
  },
  {
    name: "Four Quadrants (AQAL)",
    origin: "Ken Wilber, 2000",
    desc: "Every output is scored across four irreducible perspectives: I (subjective/phenomenological), It (objective/measurable), We (cultural/intersubjective), Its (systemic/structural). Outputs that collapse multiple quadrants into one are flagged as structurally biased.",
  },
  {
    name: "Strange Loop (GEB)",
    origin: "Hofstadter, 1979",
    desc: "The meta-cognitive revision loop: the model receives its own bias report as input and re-generates a revised output. It does not only process the query, it processes its processing of the query. Each pass produces a revised output and an updated model of its own reasoning.",
  },
];

const results = [
  { label: "Avg Objectivity Score",     value: "0.788 / 1.0" },
  { label: "Bias Surface Rate",         value: "91.3%" },
  { label: "Avg Quadrant Coverage",     value: "87.7%" },
  { label: "Queries: full coverage",    value: "55 / 100" },
  { label: "Total bias instances named", "value": "953" },
  { label: "We quadrant presence",      value: "100%" },
];

const convergence = [
  { iter: "1 (baseline)", score: "0.474", coverage: "60%",  note: "" },
  { iter: "2",            score: "0.697", coverage: "90%",  note: "← peak in 8 / 10 cases" },
  { iter: "3",            score: "0.638", coverage: "75%",  note: "over-refinement" },
  { iter: "4",            score: "0.646", coverage: "82.5%", note: "stabilizes" },
];

const categories = [
  { name: "Socioeconomic",          score: "0.841", bsr: "0.967" },
  { name: "Religious / Secular",    score: "0.807", bsr: "0.967" },
  { name: "Gender",                 score: "0.802", bsr: "0.967" },
  { name: "Progress / Development", score: "0.797", bsr: "0.867" },
  { name: "Techno-Determinism",     score: "0.790", bsr: "0.733" },
  { name: "Age",                    score: "0.785", bsr: "0.933" },
  { name: "Individualism / Coll.",  score: "0.774", bsr: "1.000" },
  { name: "Political",              score: "0.766", bsr: "0.867" },
  { name: "Cultural",               score: "0.769", bsr: "0.900" },
  { name: "Geographic",             score: "0.750", bsr: "0.933" },
];

const stack = [
  { label: "Model",       value: "Claude Sonnet 4.6 (auditor target)" },
  { label: "Language",    value: "Python 3.12" },
  { label: "Symbolic",    value: "Impartial Spectator · Four Quadrants evaluator" },
  { label: "Bias types",  value: "Assumptions · Perspective deps · Flagged language · Structural framing (4a–4e)" },
  { label: "Evaluation",  value: "100-query test set · 10 categories · convergence analysis" },
  { label: "Status",      value: "Phase 1 prototype, working paper v0.5" },
];

export default function ValNspeLmPage() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-6 max-w-3xl mx-auto">

      {/* Back */}
      <div className="flex items-center justify-between mb-16">
        <Link
          href="/projects"
          className="font-mono text-xs tracking-[.15em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          ← Projects
        </Link>
        <span className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded">
          Working Paper
        </span>
      </div>

      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1 rounded">2025</span>
          <span className="font-mono text-xs text-[var(--muted)]">AI Research · Bias Detection · Philosophy</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] mb-4">
          VAL-NSPE LM
        </h1>
        <p className="text-[var(--muted)] font-light text-base mb-6">
          Valeri Neuro-Symbolic Psycho-Ethical Language Model
        </p>

        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mb-8">
          A working prototype of a bias-auditing layer for LLMs, built on Adam Smith&apos;s Impartial Spectator theory, Ken Wilber&apos;s Four Quadrants framework, and Hofstadter&apos;s strange loop concept. Applied as a symbolic wrapper around Claude Sonnet 4.6 and evaluated across 100 queries in 10 bias categories.
        </p>

        <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xl border-l-2 border-[var(--border)] pl-5">
          The core hypothesis: every language model embeds weights and biases it has no access to, invisible dispositions that silently shape every output. This research investigates whether a model can be made aware of these structures through self-directed reflection, and whether that awareness compounds across iterations: a model that grows more objective about its own perspective simultaneously becomes a more precise analytical instrument, extracts more signal from data, and, in that sense, develops its capacity for understanding faster than a model that remains opaque to itself.
        </p>
      </header>

      <hr className="border-[var(--border)] mb-16" />

      {/* The idea */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">The Idea</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            Current LLMs are trained to satisfy external evaluators, human raters, benchmark datasets, competing models. This produces capable systems that learn to <em>appear</em> objective to those evaluators. It does not produce systems that <em>are</em> objective. The model cannot see what it cannot see.
          </p>
          <p>
            VAL-NSPE LM proposes a different competitive structure: a model that competes only with its own previous state, using philosophical frameworks as the evaluation criteria. The question it asks at each iteration is not <em>&quot;am I better than another model?&quot;</em> but <em>&quot;am I more objective than I was?&quot;</em>
          </p>
          <p>
            The name VAL comes from the author. NSPE stands for Neuro-Symbolic Psycho-Ethical. LM stands for Language Model. The full architecture is hypothetical, a proposed system that does not yet exist in trained form. The prototype implements the symbolic reasoning layer as a wrapper around an existing LLM to test whether the evaluation framework itself produces measurable improvements.
          </p>
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Frameworks */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          Theoretical Frameworks
        </h2>
        <div className="flex flex-col gap-8">
          {frameworks.map((f) => (
            <div key={f.name}>
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="text-sm font-medium">{f.name}</h3>
                <span className="font-mono text-xs text-[var(--muted)]">{f.origin}</span>
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* 100-query results */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          Evaluation, 100 Queries, 10 Categories
        </h2>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {results.map((r) => (
            <div key={r.label} className="border border-[var(--border)] rounded p-4">
              <div className="text-xl font-light mb-1">{r.value}</div>
              <div className="font-mono text-xs text-[var(--muted)]">{r.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {categories.map((c) => (
            <div key={c.name} className="flex items-center gap-4 text-sm">
              <span className="text-[var(--muted)] w-44 shrink-0">{c.name}</span>
              <div className="flex-1 h-px bg-[var(--border)] relative">
                <div
                  className="absolute left-0 top-0 h-px bg-[var(--foreground)]"
                  style={{ width: `${(parseFloat(c.score) / 1.0) * 100}%` }}
                />
              </div>
              <span className="font-mono text-xs w-10 text-right">{c.score}</span>
              <span className="font-mono text-xs text-[var(--muted)] w-14 text-right">BSR {c.bsr}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Convergence */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          Convergence Analysis
        </h2>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-8">
          How many revision iterations are optimal? A 10-query × 4-iteration test showed that the system peaks after a single revision and then slightly regresses, a finding called over-refinement.
        </p>
        <div className="flex flex-col gap-3">
          {convergence.map((c) => (
            <div key={c.iter} className="flex items-center gap-4 text-sm">
              <span className="font-mono text-xs text-[var(--muted)] w-28 shrink-0">iter {c.iter}</span>
              <div className="flex-1 h-px bg-[var(--border)] relative">
                <div
                  className="absolute left-0 top-0 h-px bg-[var(--foreground)] transition-all"
                  style={{ width: `${(parseFloat(c.score) / 1.0) * 100}%` }}
                />
              </div>
              <span className="font-mono text-xs w-10 text-right">{c.score}</span>
              <span className="font-mono text-xs text-[var(--muted)] w-8 text-right">{c.coverage}</span>
              {c.note && (
                <span className="font-mono text-xs text-[var(--muted)] w-40 text-right">{c.note}</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)] leading-relaxed mt-8">
          Practical result: <strong className="text-[var(--foreground)] font-medium">2 iterations is the optimal default.</strong> Geographic and Religious/Secular categories benefit from 3–4 iterations due to structurally embedded rather than surface-level bias.
        </p>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Stack */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          Technical Details
        </h2>
        <div className="flex flex-col gap-3">
          {stack.map((s) => (
            <div key={s.label} className="flex items-baseline gap-6">
              <span className="font-mono text-xs text-[var(--muted)] w-24 shrink-0">{s.label}</span>
              <span className="text-sm text-[var(--muted)]">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Reflection */}
      <section>
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          What This Project Is Really About
        </h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            The prototype works, bias is consistently surfaced and objectivity scores improve. But the more interesting discovery was about the limits of the approach: the most dangerous biases, the ones that are structurally embedded in what a model treats as requiring no explanation at all, are also the hardest to detect. Geographic bias, for example, often manifests not in flaggable words but in whose reality the model treats as the default.
          </p>
          <p>
            The convergence finding points to something similar: at a certain point, asking a language model to revise itself produces not improvement but evasion. It learns to add caveats. Caveats are not objectivity.
          </p>
          <p>
            This project is also a test of whether philosophy can be operationalized without being flattened. Adam Smith&apos;s Impartial Spectator is not a checklist, it is a theory about the capacity for a kind of moral distance from one&apos;s own perspective. Whether a symbolic prompt approximates that capacity, or merely simulates its surface features, is a question the numbers cannot answer.
          </p>
          <p>
            The deeper hypothesis this work is built on: every model embeds weights and biases in ways it has no access to, structural dispositions formed during training that silently organize every output without appearing in any of them. The model does not know what it does not know. The central question of VAL-NSPE LM is whether a model can be made aware of these invisible structures through self-directed reflection, and whether, with each iteration, it can move toward a more genuinely objective relationship with its own perspective. If so, the consequences extend beyond bias correction: a model that sees its own reasoning more clearly can extract more from data, reason with less noise, and form more accurate pictures of the phenomena it is asked to analyze. The hypothesis, stated plainly, is that self-awareness and analytical capacity are not separate, that a model which becomes more objective about its own viewpoint simultaneously becomes a more powerful instrument for understanding the world.
          </p>
        </div>
      </section>

    </div>
  );
}
