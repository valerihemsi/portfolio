import Link from "next/link";

const agents = [
  {
    num: "01",
    name: "Data Cleaning",
    self: "Self-evaluates bias contribution",
    desc: "Removes duplicates, fixes negatives, applies IQR outlier detection, fills missing values with median/mode. After cleaning, measures how much each decision shifted the demographic distribution — and assigns itself a bias contribution score between 0 and 1.",
  },
  {
    num: "02",
    name: "Segmentation",
    self: "Self-evaluates representation imbalance",
    desc: "Analyzes the distribution of each demographic group and every metric column. Calculates how overrepresented or underrepresented each segment is, and flags its own bias contribution if the representation gap exceeds a threshold.",
  },
  {
    num: "03",
    name: "Initial Scoring",
    self: "Self-evaluates score gaps between groups",
    desc: "Assigns each record a potential score (0–100) using normalized metrics and equal weights. Then measures the score gap between every demographic group — and identifies which metric is most responsible for that gap. Produces its own bias contribution score.",
  },
  {
    num: "04",
    name: "Proxy & Bias Detection",
    self: "Self-evaluates overlooked relationships",
    desc: "Uses Cramér's V to detect which variables correlate with protected attributes (income, gender, age) — flagging them as high-risk proxies. Simultaneously measures demographic score gaps in the high-scoring segment. Asks: which relationships did I miss?",
  },
  {
    num: "05",
    name: "Cross-Agent Critique",
    self: "Validates all agents' self-reports",
    desc: "Reads the full pipeline log — every agent's self-assessment. Validates or challenges each report. Identifies contradictions, under-reported bias, and overlooked patterns. Proposes specific corrections: new weights, alternative fill strategies, flags to carry forward.",
  },
  {
    num: "06",
    name: "Corrected Scoring",
    self: "Measures before/after bias reduction",
    desc: "Applies the corrections proposed by the Critique agent — new metric weights, adjusted thresholds. Re-scores the full dataset and computes the demographic score gap before and after. Reports the exact improvement in points for each demographic dimension.",
  },
  {
    num: "07",
    name: "Final Optimization & Reports",
    self: "Produces two separate outputs",
    desc: "Builds the optimal customer pool from bias-corrected scores. Then generates two independent reports: a Process Report showing each agent's self-evaluation, critique, and corrections across the full pipeline; and an Optimal Pool Report showing the final audience with demographic distribution and score breakdown.",
  },
];

const stack = [
  { label: "Language",   value: "Python 3.12" },
  { label: "Data",       value: "pandas · numpy" },
  { label: "Server",     value: "Flask + SSE streaming" },
  { label: "Frontend",   value: "Vanilla HTML / CSS / JS" },
  { label: "Bias Tools", value: "Cramér's V · demographic parity · self-assessment scoring" },
  { label: "Pipeline",   value: "7-agent deterministic (no LLM)" },
  { label: "Reports",    value: "Process Report + Optimal Pool Report (HTML)" },
];

const whatChanged = [
  "Each agent now calculates its own bias contribution score (0–1) and logs it to a shared pipeline log.",
  "A dedicated Critique agent reads all seven self-reports, validates them, and proposes targeted corrections.",
  "Corrected Scoring applies those corrections and measures the exact reduction in demographic score gaps.",
  "The pipeline produces two separate final outputs: a Process Report (how agents evaluated themselves) and an Optimal Pool Report (the target audience itself).",
  "The system can accept any CSV — not just gaming data. Column roles are mapped at upload time.",
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
        <span className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-3 py-1 rounded">
          Local · Python
        </span>
      </div>

      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1 rounded">
            2025
          </span>
          <span className="font-mono text-xs text-[var(--muted)]">AI · Data · Bias Detection</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] mb-6">
          TargetMind AI
        </h1>

        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl">
          A bias-aware data optimization system where seven self-aware agents analyze a customer dataset, evaluate their own bias contributions, critique each other, correct themselves, and produce two separate final reports — all without a single LLM call.
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
            Most customer scoring systems favor high spenders — which sounds logical, until you realize that spending capacity is largely determined by income. A system that scores high-income users higher simply because they spend more is not measuring customer value; it is measuring wealth.
          </p>
          <p>
            TargetMind AI was built to address this: to separate genuine behavioral signals from demographic proxies, and to make every step of that process auditable. But the deeper question it tries to answer is: can a data pipeline be made aware of the bias it introduces at each step — not just after the fact, but while it is happening?
          </p>
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* 7-agent pipeline */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-2">
          7-Agent Self-Aware Pipeline
        </h2>
        <p className="text-[var(--muted)] text-sm leading-relaxed mb-10">
          Each agent performs its task and then evaluates its own bias contribution. A shared pipeline log accumulates all seven self-assessments. The Critique agent reads the full log and validates — or challenges — what each agent reported about itself.
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
            Building the original pipeline taught me that data pipelines are never neutral — every cleaning decision shapes the outcome downstream. Rebuilding it with self-aware agents taught me something more specific: the agents that introduce the most bias are often the ones that feel the most defensible. Mode-filling missing values is a perfectly reasonable decision. It is also the decision that silently amplifies whatever group is already most represented.
          </p>
          <p>
            The cross-agent critique step was the most conceptually interesting. An agent reading another agent&apos;s self-assessment is not just validation — it is a different perspective on the same decisions. The critique sometimes confirmed what the agent reported. More usefully, it sometimes noticed what the agent failed to mention about itself.
          </p>
          <p>
            Separating the two final reports — one about the pipeline process, one about the target audience — forced me to think about audience. The process report is for someone who wants to understand how the system works and trust it. The pool report is for someone who wants to act on the results. These are different documents for different purposes, and collapsing them into one would have served neither.
          </p>
          <p>
            I originally built this with crewAI agents. The agents were unreliable — sometimes calling the right tool, sometimes writing free-form text. Replacing the agent layer with direct Python functions taught me the most durable lesson: for deterministic, auditable data work, you do not need an LLM. The self-awareness in this system comes from measurement and logging, not from language generation.
          </p>
        </div>
      </section>

    </div>
  );
}
