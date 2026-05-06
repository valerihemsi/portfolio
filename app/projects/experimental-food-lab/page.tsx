import Link from "next/link";

const features = [
  {
    num: "01",
    name: "Experiment Cards",
    desc: "Every post is a food experiment — not just a recipe. Users document what they tested, what happened, and whether it worked. Failed experiments are as welcome as successful ones. A 'Failed but interesting' tag carries the same weight as 'Unexpected but good.'",
  },
  {
    num: "02",
    name: "Taste Profile Tags",
    desc: "Each experiment is tagged with its flavor profile: sweet, salty, sour, bitter, umami, spicy. Users can filter the feed by taste to find exactly what they're looking for.",
  },
  {
    num: "03",
    name: "Social Feed",
    desc: "A feed with three modes: All experiments, Following (people you follow), and For You (randomized discovery). Full follow system with follower and following counts on every profile.",
  },
  {
    num: "04",
    name: "Would Cook Again?",
    desc: "Instead of likes, every experiment gets a binary vote: Would cook again / Skip. Pressing 'Would Cook Again' automatically saves the recipe to your profile collection — so voting and collecting are the same gesture.",
  },
  {
    num: "05",
    name: "Collections",
    desc: "Every profile has two collection tabs visible only to the owner: Would Cook Again (recipes you've voted on) and Saved (recipes you've bookmarked with the heart button). A third tab — Experiments — shows everything you've posted, and is visible to everyone.",
  },
  {
    num: "06",
    name: "User Profiles",
    desc: "Each profile has a food identity, favorite ingredients, cooking style tags, and an experiment level — from Beginner to Taste Scientist. Profiles are publicly viewable; collections are private.",
  },
  {
    num: "07",
    name: "Search",
    desc: "Full-text search across experiment titles, ideas, and results. Ingredient search: searching 'tahini' returns every experiment that used tahini. People search by username or food identity.",
  },
];

const stack = [
  { label: "Frontend",  value: "Next.js 16 · TypeScript · React Server Components" },
  { label: "Database",  value: "Supabase (PostgreSQL · Row Level Security)" },
  { label: "Auth",      value: "Supabase Auth (email/password)" },
  { label: "Storage",   value: "Supabase Storage (experiment images, avatars)" },
  { label: "Hosting",   value: "Vercel (auto-deploy from GitHub)" },
  { label: "Styling",   value: "Inline styles + CSS custom properties (no framework)" },
];

export default function ExperimentalFoodLabPage() {
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
          href="https://experimental-food-lab.vercel.app"
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
          <span className="font-mono text-xs text-[var(--muted)]">Social Platform · Full Stack · Food</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] mb-6">
          Experimental FoodLab
        </h1>

        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl">
          A social platform for food experimenters — where unexpected recipes, strange ingredient combinations, creative failures, and accidental discoveries are all worth sharing.
        </p>
      </header>

      <hr className="border-[var(--border)] mb-16" />

      {/* The idea */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">The Idea</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            Most recipe platforms only show successes — polished photos, tested measurements, guaranteed results. But the interesting part of cooking is the experiment: what happens when you add miso to a tahini dressing, or cure salmon with sumac instead of lemon, or make caramel with tamarind.
          </p>
          <p>
            Experimental FoodLab is built around the experiment card format rather than the recipe card. Every post documents a hypothesis, a process, and a result — including the ones that didn&apos;t work. A &quot;Failed but interesting&quot; tag is as valid as &quot;Unexpected but good.&quot;
          </p>
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Features */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">Features</h2>
        <div className="flex flex-col gap-6">
          {features.map((f) => (
            <div key={f.num} className="flex gap-6 items-start">
              <span className="font-mono text-xs text-[var(--muted)] w-6 shrink-0 pt-1">{f.num}</span>
              <div>
                <h3 className="text-sm font-medium mb-1">{f.name}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Stack */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">Technical Stack</h2>
        <div className="flex flex-col gap-3">
          {stack.map((s) => (
            <div key={s.label} className="flex items-baseline gap-6">
              <span className="font-mono text-xs text-[var(--muted)] w-24 shrink-0">{s.label}</span>
              <span className="text-sm">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* What I built */}
      <section>
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">What I Built</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            The full social layer — authentication, profiles, follow system, votes, saves — runs on Supabase with Row Level Security policies. Every user can only modify their own data. Images go to Supabase Storage with public read access.
          </p>
          <p>
            The vote system uses a binary signal — Would Cook Again / Skip — instead of a like count. Pressing &quot;Would Cook Again&quot; both records the vote and automatically saves the recipe to the user&apos;s profile. The heart button saves independently. These two paths converge in the profile&apos;s collection tabs.
          </p>
          <p>
            Profile collection tabs follow a deliberate privacy model: the Would Cook Again and Saved tabs are only visible to the profile owner; the Experiments tab is public. Votes are stored in a separate table with public read access so aggregate counts are visible to everyone, but what you&apos;ve personally saved remains private.
          </p>
          <p>
            The search system queries across experiment text fields and also searches ingredient arrays directly — so finding every experiment that uses tahini is a single Supabase <code className="font-mono text-xs bg-[var(--border)] px-1 py-0.5 rounded">.contains()</code> call on the ingredients column.
          </p>
          <p>
            The &quot;For You&quot; tab shuffles experiments server-side on every request, giving a genuine discovery experience without a recommendation algorithm. Simple, but it works.
          </p>
        </div>
      </section>

    </div>
  );
}
