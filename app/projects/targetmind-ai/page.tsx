import Link from "next/link";

const agents = [
  {
    num: "01",
    name: "Data Cleaning",
    self: "Surfaces its own filling assumption",
    desc: "Removes duplicates, fixes negatives, applies IQR outlier detection, fills missing values with median/mode. Then names the assumption underneath that choice — \"missing values look like the typical user\" — and reports how much demographic shift this method introduced. This is not a bias error to fix; it is a methodological fragility to be transparent about.",
  },
  {
    num: "02",
    name: "Segmentation",
    self: "Names what is real signal vs. artifact",
    desc: "Reports segment and demographic distributions exactly as the data shows them. Representation gaps are surfaced — but never silently flattened. The agent makes its own assumption explicit: the raw data is treated as a faithful sample, with the caveat that any sampling bias upstream will travel downstream.",
  },
  {
    num: "03",
    name: "Initial Scoring",
    self: "Exposes its weight-choice assumption",
    desc: "Assigns each record a 0-100 score using normalized metrics and a chosen weight scheme. Each row also gets a `dominant_metrik` and a human-readable `secim_gerekce` (e.g. \"High spend Q92 · Medium gaming hours Q67\"), so every score is auditable at the row level. The agent declares its weight choice as an assumption — not a fact — and predicts how alternative weights might shift outcomes.",
  },
  {
    num: "04",
    name: "Proxy & Bias Detection",
    self: "Reveals indirect demographic paths",
    desc: "Uses Cramér's V to find which seemingly neutral metrics (device type, platform, city) correlate strongly with protected attributes (gender, income, age). These relationships are not deleted — they are exposed so downstream agents can ask \"how much of my output is actually a hidden proxy for demographics?\"",
  },
  {
    num: "05",
    name: "Cross-Agent Critique",
    self: "Quantifies decision fragility",
    desc: "Reads the full pipeline log, ranks each agent's `varsayım hassasiyeti` (assumption sensitivity), and identifies the most fragile decision. It does not propose corrections to flatten output — it proposes alternative tests. Pairs with a counterfactual tool that re-runs the scoring under four weight scenarios (current / equal / spend-heavy / spend-light) and reports which decisions survive across scenarios (= real signal) and which collapse (= methodology-dependent).",
  },
  {
    num: "06",
    name: "Iterative Robustness Test",
    self: "Finds the assumption-independent fixed point",
    desc: "Re-runs critique + alternative scoring in a loop. Stops not at \"bias < threshold\" but at convergence: when the round-to-round change in outcomes is small enough that the decision has become insensitive to the method itself. If convergence is not reached, that's a finding, not a failure — the agent transparently reports that both methods' outputs should be carried into the final report.",
  },
  {
    num: "07",
    name: "Final Transparency Report",
    self: "Pairs each insight with its fragility note",
    desc: "Builds the optimal customer pool and writes two outputs: (1) the audience itself, with every row's per-metric provenance; (2) a transparency report that ranks agents by assumption sensitivity, highlights the most method-sensitive demographic dimension, and quantifies the \"objective gain\" — how much of the top audience survives under both the initial and the alternative method (= robust subset the marketing team can act on with confidence).",
  },
];

const stack = [
  { label: "Language",      value: "Python 3.12" },
  { label: "Data",          value: "pandas · numpy" },
  { label: "Server",        value: "Flask + SSE streaming" },
  { label: "Frontend",      value: "Vanilla HTML / CSS / JS, mapping-aware" },
  { label: "Agents (LLM)",  value: "crewAI + Claude Sonnet 4.6" },
  { label: "Agents (det.)", value: "Same 7 tools runnable without an LLM" },
  { label: "Analysis",      value: "Cramér's V · counterfactual scoring · per-row provenance · iterative convergence" },
  { label: "Chat",          value: "Claude Haiku 4.5 (dataset-aware assistant)" },
  { label: "Reports",       value: "Process Report + Optimal Pool Report + Transparency Report" },
];

const whatChanged = [
  "Each agent surfaces the assumption underneath its decision and labels its own metodolojik kırılganlık (methodological fragility), instead of just reporting a bias score.",
  "A new Counterfactual Test agent re-runs the scoring under four different weight scenarios and identifies which results survive across all of them — the real, method-independent signal.",
  "An Iterative Robustness Loop replaces the old single-pass correction. It converges when the decision becomes insensitive to method choice, not when output equality is reached.",
  "Every customer in the output CSV now carries a `dominant_metrik` and a `secim_gerekce` — a one-line explanation of which two metrics drove this row's score, and at what quantile.",
  "The dashboard shows an Objective Gain panel: how many of the top-30 customers were selected under BOTH the initial weighting and the alternative weighting (= robust subset), and which IDs were method-dependent.",
  "Two parallel execution paths: a deterministic Flask pipeline for the web demo (no LLM, instant, auditable) and a Claude Sonnet 4.6 crewAI pipeline (LLM agents that reason about each tool's output and write their own provenance commentary).",
  "Fully generic CSV upload: agents adapt to whatever columns the user maps. The dashboard tables build themselves dynamically from the mapping.",
];

export default function TargetMindPage() {
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
        <a
          href="https://targetmind-ai-production.up.railway.app"
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
          <span className="font-mono text-xs text-[var(--muted)]">AI · Data · Assumption Surfacing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] mb-6">
          TargetMind AI
        </h1>

        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl">
          An assumption-surfacing customer targeting pipeline. Seven agents analyze a dataset, expose the assumption behind every decision they make, counterfactually re-run each decision under an alternative method, and produce a transparency report that separates real data signal from methodology artifact.
        </p>
      </header>

      <hr className="border-[var(--border)] mb-16" />

      {/* The problem */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          The Problem
        </h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            Most customer scoring systems favor high spenders. Spending capacity is largely determined by income — so a system that ranks high-income users higher because they spend more is not measuring customer value; it is measuring wealth. A scoring decision that looks neutral is, almost always, a methodological tilt in disguise.
          </p>
          <p>
            The earlier version of this system tried to <em>correct</em> that tilt — to force the scoring output toward demographic parity. That was the wrong instinct. Forcing equality flattens real signals along with artificial ones, and the user is left with a number they can&apos;t trust either way.
          </p>
          <p>
            TargetMind AI was rebuilt to do the opposite: surface the methodological assumption in every step, counterfactually test what would happen if that assumption were swapped, and tell the user — for every customer, for every metric, for every decision — which part of the result is genuine behavior and which part is the analyst&apos;s preference in disguise.
          </p>
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* 7-agent pipeline */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-2">
          7-Agent Assumption-Surfacing Pipeline
        </h2>
        <p className="text-[var(--muted)] text-sm leading-relaxed mb-10">
          Each agent performs its task, declares the assumption it relied on, and predicts how an alternative method would change the output. The downstream agents read those declarations, run counterfactual tests, and produce the transparency report.
        </p>

        <div className="flex flex-col gap-8">
          {agents.map((a) => (
            <div key={a.num} className="flex gap-6 items-start">
              <span className="font-mono text-xs text-[var(--muted)] w-6 shrink-0 pt-1">{a.num}</span>
              <div>
                <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                  <h3 className="text-sm font-medium">{a.name}</h3>
                  <span className="font-mono text-[10px] text-[var(--muted)] tracking-wide border border-[var(--border)] px-2 py-0.5 rounded">
                    {a.self}
                  </span>
                </div>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* What changed */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          What Makes This Different
        </h2>
        <div className="flex flex-col gap-3">
          {whatChanged.map((item) => (
            <div key={item} className="flex gap-4 items-start text-sm">
              <span className="text-[var(--muted)] shrink-0 mt-0.5">—</span>
              <span className="text-[var(--muted)] leading-relaxed">{item}</span>
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
            The biggest shift in this project was a framing one. The earlier version was designed to detect bias and correct it. The current version refuses to correct in that sense — it refuses to flatten real, defensible differences between groups in the name of fairness. Instead, it surfaces the assumption that produced those differences and asks: is this number real, or is this number my method talking?
          </p>
          <p>
            Per-row provenance turned out to be the single most useful output. Saying &quot;customer C0167 scored 50.9&quot; is opaque. Saying &quot;customer C0167 scored 50.9, driven by high session count (Q97) and high spend (Q95)&quot; converts every row into an auditable claim. The marketing team can argue with a claim. They can&apos;t argue with a number.
          </p>
          <p>
            The Objective Gain comparison — top-30 under method A intersected with top-30 under method B — gave me a metric for trust I didn&apos;t have before. When 100% of the top-30 are selected under both methods, the team can act with confidence. When only 70% overlap, the remaining 30% is a methodology debate, and that debate now has names attached to it: specific customer IDs the analyst has to defend.
          </p>
          <p>
            Running two parallel paths — deterministic Python tools that the Flask server calls directly, and the same tools wrapped in a crewAI LLM-driven pipeline — taught me that LLMs in this kind of system add narrative, not correctness. The math is the same. The agents&apos; commentary is the difference, and it&apos;s the part a human auditor reads. The deterministic path is the part the system can be trusted on at scale.
          </p>
        </div>
      </section>

    </div>
  );
}
