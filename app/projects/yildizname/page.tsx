import Link from "next/link";

const pipeline = [
  {
    num: "01",
    name: "Ebced — Abjad Numerology",
    desc: "Transliterates the user's name and mother's name into Arabic script using a Latin-to-Arabic letter map, then assigns each letter its classical ebced value (1, 2, 3 … 1000). Surfaces first letter, last letter, total, and the combined value of the two names.",
  },
  {
    num: "02",
    name: "Kader Yolu — Life Path",
    desc: "Reduces the birth date through digit-sum iterations, preserving master numbers (11, 22, 33). The final number is matched to a symbolic key from the yıldızname tradition.",
  },
  {
    num: "03",
    name: "Unsurlar — Elemental Balance",
    desc: "Maps each Arabic letter of the name to one of four elements — fire, air, water, earth — and returns the dominant element, the secondary, and the missing one, with a balance reading.",
  },
  {
    num: "04",
    name: "Gezegen — Planetary Hours",
    desc: "Applies the Chaldean order (Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon) to find the planet ruling the day of birth and the specific planetary hour of birth.",
  },
  {
    num: "05",
    name: "LLM Interpreter",
    desc: "Feeds the full numerical and symbolic profile to Claude Sonnet 4.6 with a tradition-grounded system prompt. The model writes a seven-section reading in Turkish — name's secret, character & fate, health, life path, marriage & love, family, career — streamed back to the browser token by token.",
  },
];

const sections = [
  "İsmin Sırrı",
  "Karakter ve Kader",
  "Sağlık ve Enerji",
  "Kader Yolu",
  "Evlilik ve Aşk",
  "Çocuk ve Yuva",
  "Kariyer ve Para",
];

const stack = [
  { label: "Framework",  value: "Next.js 16 (App Router)" },
  { label: "Language",   value: "TypeScript (strict)" },
  { label: "Styling",    value: "Tailwind CSS v4" },
  { label: "LLM",        value: "Claude Sonnet 4.6" },
  { label: "Transport",  value: "Server-Sent Events" },
  { label: "Deployment", value: "Vercel" },
];

export default function YildiznamePage() {
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
          href="https://yildizname-murex.vercel.app"
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
            2026
          </span>
          <span className="font-mono text-xs text-[var(--muted)]">AI · Symbolic Systems · Turkish</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] mb-6">
          Yıldızname
        </h1>

        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl">
          A digital reading of an old tradition. From a name, a mother&apos;s name, and a birth moment, the app derives numerological and astrological signatures rooted in the Ottoman yıldızname — then asks an LLM to interpret them as a layered, modern symbolic text.
        </p>
      </header>

      <hr className="border-[var(--border)] mb-16" />

      {/* Pipeline */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          How It Works
        </h2>

        <p className="text-[var(--muted)] text-sm leading-relaxed mb-10">
          The user submits five fields. The server runs four deterministic symbolic calculations, then passes the resulting profile to a language model with a strict interpretive frame. The model&apos;s response streams back into the page as it&apos;s written, so the reading appears as if it were being composed live.
        </p>

        <div className="flex flex-col gap-6">
          {pipeline.map((a) => (
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

      {/* Reading sections */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          The Seven Sections
        </h2>

        <p className="text-[var(--muted)] text-sm leading-relaxed mb-8">
          Every reading is structured in seven movements. The prompt enforces this scaffold so the output stays inside the tradition&apos;s shape, regardless of which profile is passed in.
        </p>

        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-[var(--border)] text-[var(--muted)] rounded"
            >
              {s}
            </span>
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
            The hardest part wasn&apos;t the numerology — it was the prompt. A model trained mostly on Western text wants to fall into religious Arabic formulae or New Age clichés the moment you mention symbols, planets, and fate. Building a tradition-grounded but modern Turkish voice required an explicit list of forbidden phrases and a tone calibration that kept the output sembolic without becoming devotional or saccharine.
          </p>
          <p>
            On the engineering side, this was my first end-to-end Server-Sent Events implementation with the Anthropic SDK. The deterministic calculations finish in milliseconds, but the LLM generation takes 15–30 seconds. Streaming the reading back token-by-token through a ReadableStream made the wait feel like a ritual rather than a loading screen.
          </p>
          <p>
            Beneath the surface, the project is an experiment with a question I keep returning to: what happens when you give a tradition a real digital body? Not a Wikipedia summary of it — an actual working instance, with its own coherence, that someone can use. The numerical scaffolding is honest to the historical tradition; the interpretive voice is contemporary. The two layers meet inside a single output.
          </p>
        </div>
      </section>

    </div>
  );
}
