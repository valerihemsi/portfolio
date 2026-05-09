import Link from "next/link";

const sections = [
  {
    href: "/projects",
    label: "Projects",
    num: "01",
    desc: "Code I've built, tools, systems, experiments.",
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

const bio = [
  `I am a multidisciplinary creative with a background in interior design, a deep curiosity for philosophy, sociology, artificial intelligence, and the evolving relationship between humans and technology. My work exists at the intersection of creativity, emerging technologies, design, critical thinking, writing and painting.`,
  `Throughout my education and personal research, I have always been drawn to the connections between different disciplines. I believe that true creativity often begins where separate fields meet; where design meets philosophy, where technology meets human behavior, and where artificial intelligence meets human imagination. This interdisciplinary way of thinking has shaped the way I observe the world, recognize patterns, and transform ideas into concepts.`,
  `My academic background in design gave me a strong visual and conceptual foundation. It taught me how to think spatially, aesthetically, and strategically. However, my interests have always expanded beyond traditional creative disciplines. I have spent years researching consciousness, pattern recognition, human behavior, AI ethics, and the philosophy of artificial intelligence. Over time, this research led me deep into the architecture of large language models and agentic systems. I have developed an extensive understanding of how LLMs process and interpret information. My research interest lies particularly in exploring new directions for LLM development. Not only in terms of technical performance, but in terms of how these models represent knowledge, structure reality, and influence human cognition at scale in a philosophical sense.`,
  `I believe that imagination, design thinking, and creativity are essential for this field. Approaching the limitations and open problems of AI development through a creative and interdisciplinary lens allows for different entry points into old problems. I believe this cross-domain thinking can produce more nuanced and human-centered outcomes than purely technical approaches alone.`,
  `Currently, I am studying coding at Workintech Academy, where I am learning how to bring my creative ideas into functional digital systems. Through coding, I am discovering new ways to express creativity: not only through visuals and words, but through interactive tools, digital experiences, and programs that can solve real problems. I see software development as another creative language. One that allows me to design systems, not just objects.`,
  `Working with various AI tools and frameworks, I have already begun building systems that reflect this intersection. Projects that I've been working on showed me something I now hold as a core conviction; that when creativity and artificial intelligence are brought together intentionally, the boundaries of what is possible expand in ways that neither discipline could reach alone.`,
  `My goal is not to use AI as a replacement for human creativity, but as an intelligent assistant that can support, organize, and enhance the creative process. I am interested in building tools that help people think more clearly, work more efficiently, and access their own creative potential more easily. I believe AI should not think for us. Instead it should help us think better, use our creativity for problem solving, and find different ways to approach old problems.`,
  `In my current projects, I explore how creative disciplines can be combined with AI to develop tools for everyday life, design, communication, wellness, and human-centered innovation. Writing is also a central part of my practice. It allows me to process complex ideas, connect philosophical questions with technological realities, and communicate abstract concepts in a more accessible way.`,
  `This portfolio is a reflection of my universe: a space where design, technology, philosophy, writing, painting and creativity come together. It represents my ongoing journey of learning, experimenting, questioning, and creating across disciplines. My work is guided by curiosity, intuition, research, and the belief that the future of technology should remain deeply human.`,
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero */}
      <section className="flex flex-col justify-center px-6 pt-32 pb-24 max-w-3xl mx-auto w-full">
        <p className="font-light text-4xl sm:text-5xl tracking-tight text-white mb-1">
          Valeri Hemsi
        </p>
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] mb-8">
          Available for work
        </p>

        <h1 className="text-5xl sm:text-7xl font-light leading-[1.05] tracking-tight mb-10">
          Designer, <br />
          Developer, <br />
          <span className="text-[var(--muted)]">and maker.</span>
        </h1>

        <p className="text-[var(--muted)] text-lg max-w-md leading-relaxed">
          Interior Design Graduate | Creative Developer in Progress | AI &amp; Human-Centered Innovation Explorer. Turning ideas into visual, written, and digital worlds.
        </p>
      </section>

      {/* Who I Am */}
      <section className="border-t border-[var(--border)] px-6 py-20 max-w-3xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-start gap-12">

          {/* Label */}
          <div className="shrink-0 sm:w-40">
            <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] sm:sticky sm:top-32">
              Who I Am
            </p>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col gap-6">
            {bio.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-[1.85] ${
                  i === 0
                    ? "text-lg text-[var(--foreground)]"
                    : "text-base text-[var(--muted)]"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="border-t border-[var(--border)] px-6 py-20 max-w-3xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-start gap-12">

          <div className="shrink-0 sm:w-40">
            <p className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] sm:sticky sm:top-32">
              Background
            </p>
          </div>

          <div className="flex-1 flex gap-10 items-start">

            {/* Left: Education + Skills */}
            <div className="flex-1 flex flex-col gap-12">

              {/* Education */}
              <div>
                <p className="font-mono text-[10px] tracking-[.2em] uppercase text-[var(--muted)] mb-6">
                  Education
                </p>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <span className="font-mono text-xs text-[var(--muted)] shrink-0 sm:w-24">2021 – 2024</span>
                    <div>
                      <p className="text-sm font-medium">Istituto Marangoni Milano</p>
                      <p className="text-xs text-[var(--muted)] mt-0.5">Interior Design, Bachelor of Arts, Milan, Italy</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <span className="font-mono text-xs text-[var(--muted)] shrink-0 sm:w-24">Short term</span>
                    <div>
                      <p className="text-sm font-medium">Brandeis University</p>
                      <p className="text-xs text-[var(--muted)] mt-0.5">Short Term Art Program, Visual Arts, Boston, United States</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <span className="font-mono text-xs text-[var(--muted)] shrink-0 sm:w-24">2013 – 2018</span>
                    <div>
                      <p className="text-sm font-medium">American Collegiate Institute</p>
                      <p className="text-xs text-[var(--muted)] mt-0.5">İzmir, Turkey</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <p className="font-mono text-[10px] tracking-[.2em] uppercase text-[var(--muted)] mb-6">
                  Technical Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript", "HTML", "CSS",
                    "AutoCAD", "3Ds Max",
                    "InDesign", "Photoshop",
                    "Procreate", "Canva",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 border border-[var(--border)] text-[var(--muted)] rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Photo */}
            <div className="hidden sm:block shrink-0">
              <div className="w-40 h-52 rounded-xl overflow-hidden border border-[var(--border)]">
                <img
                  src="/images/valeri-hemsi.jpeg"
                  alt="Valeri Hemsi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
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
