import Link from "next/link";

const agents = [
  {
    num: "01",
    name: "GitHub Scanner Agent",
    desc: "Scans every repository across the full commit history — searching for leaked API keys, passwords, database URLs, and sensitive tokens using pattern recognition. Skips library and dependency files to eliminate false positives.",
  },
  {
    num: "02",
    name: "Activity Monitor Agent",
    desc: "Checks for unauthorized collaborators, suspicious deploy keys, and unexpected account activity. Flags any access that doesn't belong to the account owner.",
  },
  {
    num: "03",
    name: "Alert Agent",
    desc: "Receives findings from all agents, composes a clear and human-readable security report in Turkish, and delivers it via email. Critical issues are flagged immediately; clean reports confirm safety.",
  },
];

const stack = [
  { label: "Framework",    value: "crewAI 1.14" },
  { label: "Language",     value: "Python 3.11" },
  { label: "LLM",          value: "Claude Haiku 4.5" },
  { label: "Notification", value: "Gmail SMTP" },
  { label: "APIs",         value: "GitHub API, Vercel API, Railway GraphQL" },
  { label: "Interface",    value: "CLI (click + rich)" },
];

const features = [
  "Full commit history scanning — not just recent activity",
  "Smart state memory — remembers where it left off, only scans new commits",
  "Pattern detection for 10+ secret types: API keys, JWTs, private keys, DB URLs",
  "Library file exclusion to eliminate false positives",
  "Collaborator and deploy key monitoring",
  "Email alerts with structured security report",
  "Continuous watch mode — runs automatically every N hours",
  "Extensible — Vercel and Railway monitoring ready to connect",
];

export default function DevGuardPage() {
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
          href="https://github.com/valerihemsi/devguard"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-[.15em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          GitHub →
        </a>
      </div>

      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-4">
          Security · Multi-Agent System · 2025
        </p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
          DevGuard
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl">
          A multi-agent security monitoring system built for developers who build fast with AI tools —
          and need something watching their back. DevGuard scans repositories, detects leaked credentials,
          monitors account activity, and delivers clear alerts before a mistake becomes a breach.
        </p>
      </div>

      {/* Why it exists */}
      <section className="border-t border-[var(--border)] py-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          Why It Exists
        </p>
        <div className="flex flex-col gap-5 text-[var(--muted)] leading-[1.85]">
          <p>
            When you're building projects quickly — often with AI assistance — it's easy to accidentally
            commit a secret key, push a <code className="font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">.env</code> file,
            or expose credentials in a repository you thought was private. Most developers don't find out
            until something breaks or someone else finds it first.
          </p>
          <p>
            DevGuard was built to solve this. During development, it detected a real Anthropic API key
            that had been committed months earlier in a repository's history — and issued an immediate alert.
            The key was already inactive, but the vulnerability was real. The system caught what a manual
            review would have missed.
          </p>
        </div>
      </section>

      {/* Agents */}
      <section className="border-t border-[var(--border)] py-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-10">
          Agent Architecture
        </p>
        <div className="flex flex-col gap-8">
          {agents.map((a) => (
            <div key={a.num} className="flex gap-8 items-start">
              <span className="font-mono text-xs text-[var(--muted)] shrink-0 w-6 pt-1">{a.num}</span>
              <div>
                <p className="text-sm font-medium mb-2">{a.name}</p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[var(--border)] py-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-10">
          What It Does
        </p>
        <ul className="flex flex-col gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-[var(--muted)] leading-relaxed">
              <span className="text-[var(--foreground)] mt-0.5 shrink-0">—</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Stack */}
      <section className="border-t border-[var(--border)] py-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-10">
          Stack
        </p>
        <div className="flex flex-col gap-4">
          {stack.map((s) => (
            <div key={s.label} className="flex gap-6 items-baseline">
              <span className="font-mono text-xs text-[var(--muted)] shrink-0 w-28">{s.label}</span>
              <span className="text-sm">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Status */}
      <section className="border-t border-[var(--border)] py-16">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-6">
          Status
        </p>
        <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xl">
          Currently running as a local CLI tool. Next steps include a web dashboard,
          Vercel and Railway integration, and multi-user support — so any developer
          can connect their accounts and get the same safety net without writing a line of code.
        </p>
      </section>

    </div>
  );
}
