import Link from "next/link";

export default function DissertationPage() {
  return (
    <div className="min-h-screen bg-white text-[#1c1917]">

      {/* Nav */}
      <div className="px-8 py-6 border-b border-stone-100">
        <Link
          href="/writing"
          className="font-mono text-xs tracking-[.15em] uppercase text-stone-400 hover:text-stone-700 transition-colors"
        >
          ← Writing
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-16">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-10 font-mono">
          <span className="text-[10px] tracking-[.2em] uppercase text-stone-400">March 2024</span>
          <span className="text-stone-200">·</span>
          <span className="text-[10px] tracking-[.15em] uppercase text-stone-400">Istituto Marangoni Milano</span>
          <span className="text-stone-200">·</span>
          <span className="text-[10px] tracking-[.15em] uppercase text-stone-400">Bachelor's Dissertation</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-light leading-[1.2] tracking-tight text-stone-800 mb-4"
            style={{ fontFamily: "Georgia, serif" }}>
          On Artificial Intelligence Ethics
        </h1>
        <p className="text-base text-stone-500 leading-relaxed mb-12"
           style={{ fontFamily: "Georgia, serif" }}>
          Imitation of Nature With AI Technology &amp; Possible Outcomes On Its Integration
          To The Societal Structure Of Our World
        </p>

        {/* Download button */}
        <div className="flex items-center gap-4 mb-12">
          <a
            href="/dissertation.pdf"
            download="Valeri_Hemsi_Dissertation_2024.pdf"
            className="font-mono text-xs tracking-[.1em] uppercase px-5 py-2.5 border border-stone-800 text-stone-800 rounded hover:bg-stone-800 hover:text-white transition-colors"
          >
            ↓ Download PDF
          </a>
          <span className="font-mono text-[10px] text-stone-400 tracking-wider uppercase">
            · · · 30 min read
          </span>
        </div>

        <div className="h-px bg-stone-100 mb-12" />

        {/* PDF embed */}
        <div className="border border-stone-100 rounded-lg overflow-hidden">
          <iframe
            src="/dissertation.pdf"
            className="w-full"
            style={{ height: "85vh" }}
            title="On Artificial Intelligence Ethics, Valeri Hemsi Suhami"
          />
        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-stone-100">
          <Link
            href="/writing"
            className="font-mono text-xs tracking-[.15em] uppercase text-stone-400 hover:text-stone-700 transition-colors"
          >
            ← Back to Writing
          </Link>
        </div>

      </div>
    </div>
  );
}
