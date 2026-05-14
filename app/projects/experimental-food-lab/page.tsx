import Link from "next/link";

const features = [
  {
    num: "01",
    name: "Experiment Cards",
    desc: "Every post is a food experiment, not just a recipe. Users document what they tested, what happened, and whether it worked. Failed experiments are as welcome as successful ones. A 'Failed but interesting' tag carries the same weight as 'Unexpected but good.'",
  },
  {
    num: "02",
    name: "Taste Profile Tags",
    desc: "Each experiment is tagged with its flavor profile: sweet, salty, sour, bitter, umami, spicy. Users can filter the feed by taste to find exactly what they're looking for.",
  },
  {
    num: "03",
    name: "Social Feed & Follow System",
    desc: "A feed with three modes: All experiments, Following (people you follow), and For You (randomized discovery). Full follow system with follower and following counts on every profile, with dedicated followers and following list pages.",
  },
  {
    num: "04",
    name: "Would Cook Again?",
    desc: "Instead of likes, every experiment gets a binary vote: Would cook again / Skip. Pressing 'Would Cook Again' automatically saves the recipe to your profile collection, so voting and collecting are the same gesture.",
  },
  {
    num: "05",
    name: "Collections",
    desc: "Every profile has two collection tabs visible only to the owner: Would Cook Again (recipes you've voted on) and Saved (recipes you've bookmarked with the heart button). A third tab, Experiments, shows everything you've posted, and is visible to everyone.",
  },
  {
    num: "06",
    name: "User Profiles & Signature Dishes",
    desc: "Each profile has a food identity, favorite ingredients, cooking style tags, and an experiment level, from Beginner to Taste Scientist. Users can register Signature Dishes, their most iconic, perfected recipes, displayed separately on their profile as a personal culinary identity.",
  },
  {
    num: "07",
    name: "Direct Messaging",
    desc: "Real-time direct messaging between users built with Supabase Realtime, so food creators can connect directly, exchange ideas, collaborate on experiments, or discuss techniques without leaving the platform.",
  },
  {
    num: "08",
    name: "Open for Work",
    desc: "A professional layer built into the platform. Food professionals, chefs, recipe developers, food stylists, consultants, can activate an Open for Work profile with their services, location, headline, and background. Visitors can contact them directly through the messaging system.",
  },
  {
    num: "09",
    name: "Search",
    desc: "Full-text search across experiment titles, ideas, and results. Ingredient search: searching 'tahini' returns every experiment that used tahini. People search by username or food identity.",
  },
  {
    num: "10",
    name: "AI Image Generation",
    desc: "Built directly into the experiment composer. Users can generate a photorealistic dish image from their title and description with one tap, enhance an uploaded photo with a natural-language instruction ('brighten the lighting, clean up the background'), or skip the photo entirely and have one auto-generated on publish. Runs on Google's Gemini 2.5 Flash Image model (Nano Banana), invoked through server actions so the API key never ships to the browser.",
  },
  {
    num: "11",
    name: "Share Anywhere",
    desc: "Every experiment card and every profile has a share button that uses the native Web Share API on mobile (opening the system share sheet) and falls back to clipboard copy with a one-tap confirmation on desktop. Sign out lives on the profile too, so mobile users without the desktop nav still have a one-tap exit.",
  },
];

const stack = [
  { label: "Frontend",  value: "Next.js 16 · TypeScript · React Server Components" },
  { label: "Database",  value: "Supabase (PostgreSQL · Row Level Security)" },
  { label: "Auth",      value: "Supabase Auth (email/password)" },
  { label: "Storage",   value: "Supabase Storage (experiment images, avatars)" },
  { label: "Hosting",   value: "Vercel (auto-deploy from GitHub)" },
  { label: "Styling",   value: "Inline styles + CSS custom properties (no framework)" },
  { label: "AI",        value: "Google Gemini 2.5 Flash Image (Nano Banana) via @google/genai" },
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
          A social platform for food experimenters, where unexpected recipes, strange ingredient combinations, creative failures, and accidental discoveries are all worth sharing.
        </p>
      </header>

      <hr className="border-[var(--border)] mb-16" />

      {/* The idea */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">The Idea</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            Most recipe platforms are organized around the finished dish. Experimental FoodLab is organized around the person making it. The format is built on experiment cards rather than recipe cards, each one documenting a process and a result, including the ones that did not work.
          </p>
          <p>
            The platform is designed for people who cook with a point of view: someone making a healthier version of a dish they grew up with, a person who has spent months perfecting a vegan take on something traditionally not vegan, an amateur chef whose food has drifted far enough from any existing recipe that it has genuinely become their own. The Signature Dish feature exists for that last case specifically. A user can name a dish, publish it under that name, and have it live permanently on their profile, distinct from their experiments. It is a way of claiming authorship over food you actually created.
          </p>
          <p>
            The social layer is built around food identity rather than follower counts. Profiles include cooking styles, favorite ingredients, and a food identity field, so the people you find and follow tend to share a genuine overlap with how you think about food. Direct messaging and the follow system let those connections develop naturally, and the Open for Work feature gives food professionals a way to make their availability visible to anyone who encounters their work on the platform.
          </p>
          <p>
            The gap this fills is not between recipe apps. It is between the creative food community that already exists on social media and a space that is actually structured around how that community works.
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

      {/* Open for Work potential */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">The Open for Work Vision</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            The food industry has a communication problem. Finding the right chef for a private event,
            a recipe developer for a product launch, a food stylist for a shoot, or a consultant
            for a restaurant concept, these connections still happen through scattered networks,
            word of mouth, and slow back-and-forth. There is no dedicated space where food professionals
            signal their availability and clients can find and reach them directly.
          </p>
          <p>
            The Open for Work feature is designed to close that gap. A food professional activates their
            profile with their services, location, and a headline, and becomes immediately discoverable
            within a community that already understands the food world. A client browsing experiments
            can move from seeing someone&apos;s work to contacting them in a single step, through the
            platform&apos;s built-in messaging system.
          </p>
          <p>
            This removes the friction that currently exists between food talent and the people who need them.
            No external portfolios to hunt for, no cold emails into the void. The work speaks first —
            through experiments, signature dishes, and votes from the community, and the professional
            connection follows naturally from that context. Communication becomes faster, more informed,
            and grounded in actual creative output rather than resumes alone.
          </p>
          <p>
            The longer-term potential of this layer goes further: a food sector where professionals
            can build a visible body of work, attract the right clients, and manage their availability —
            all within the same platform where they already share and discover. A professional network
            that grows out of a creative community, not the other way around.
          </p>
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* Design language */}
      <section className="mb-16">
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">Design Language</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            The interface is treated as a physical cooking journal rather than a feed. Editorial italic Playfair serif for titles, IBM Plex Mono for the small uppercase labels you would find on a magazine masthead, and a warm cream and terracotta palette pulled from the world of food photography rather than from a typical web design system.
          </p>
          <p>
            Each experiment card sits on the page like a clipping pinned in a notebook: washi-tape decorations on the upper corners (the angle and color are derived from the experiment id, so they are stable across re-renders), a four-pixel paper edge, a quiet drop shadow, and an ornamental ✦ divider above the action row. The body uses italic serif for the experimenter&apos;s note and clean sans for the result, the same hierarchy you would see in a recipe book intro.
          </p>
          <p>
            The mono-uppercase labels (<code className="font-mono text-xs bg-[var(--border)] px-1 py-0.5 rounded">EXPERIMENT</code>, <code className="font-mono text-xs bg-[var(--border)] px-1 py-0.5 rounded">RESULT</code>, <code className="font-mono text-xs bg-[var(--border)] px-1 py-0.5 rounded">WOULD COOK AGAIN</code>) carry the structure, while the serif body carries the voice — a deliberate split between editorial chrome and the personal writing that fills it in.
          </p>
        </div>
      </section>

      <hr className="border-[var(--border)] mb-16" />

      {/* What I built */}
      <section>
        <h2 className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">What I Built</h2>
        <div className="flex flex-col gap-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            The full social layer, authentication, profiles, follow system, votes, saves, runs on Supabase with Row Level Security policies. Every user can only modify their own data. Images go to Supabase Storage with public read access.
          </p>
          <p>
            Sign-up uses a Postgres trigger with <code className="font-mono text-xs bg-[var(--border)] px-1 py-0.5 rounded">SECURITY DEFINER</code> to atomically create the profile row when a new <code className="font-mono text-xs bg-[var(--border)] px-1 py-0.5 rounded">auth.users</code> entry is inserted, reading the username and display name from <code className="font-mono text-xs bg-[var(--border)] px-1 py-0.5 rounded">raw_user_meta_data</code>. The trigger sidesteps the RLS deadlock where a brand-new user has no session yet but needs to write into a table that requires <code className="font-mono text-xs bg-[var(--border)] px-1 py-0.5 rounded">auth.uid()</code>. The signup server action also auto-signs the user in immediately after, since Supabase&apos;s newer publishable-key flow returns a user but not always a session.
          </p>
          <p>
            AI image generation runs in a Next.js server action that wraps the Gemini 2.5 Flash Image model. Three entry points share a single pipeline: a manual <em>Generate with AI</em> button, an <em>Enhance with AI</em> flow that takes the uploaded photo as image-to-image input plus a natural-language instruction, and a quiet auto-generate fallback that runs on publish if the user never uploads or generates anything. The API key never leaves the server. Quota and safety errors are translated into single-line human messages instead of leaking the raw JSON.
          </p>
          <p>
            The vote system uses a binary signal, Would Cook Again / Skip, instead of a like count. Pressing &quot;Would Cook Again&quot; both records the vote and automatically saves the recipe to the user&apos;s profile. The heart button saves independently. These two paths converge in the profile&apos;s collection tabs.
          </p>
          <p>
            Profile collection tabs follow a deliberate privacy model: the Would Cook Again and Saved tabs are only visible to the profile owner; the Experiments tab is public. Votes are stored in a separate table with public read access so aggregate counts are visible to everyone, but what you&apos;ve personally saved remains private.
          </p>
          <p>
            The search system queries across experiment text fields and also searches ingredient arrays directly, so finding every experiment that uses tahini is a single Supabase <code className="font-mono text-xs bg-[var(--border)] px-1 py-0.5 rounded">.contains()</code> call on the ingredients column.
          </p>
          <p>
            The &quot;For You&quot; tab shuffles experiments server-side on every request, giving a genuine discovery experience without a recommendation algorithm. Simple, but it works.
          </p>
        </div>
      </section>

    </div>
  );
}
