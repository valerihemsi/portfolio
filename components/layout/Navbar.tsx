"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/",         label: "Home"     },
  { href: "/projects", label: "Projects" },
  { href: "/drawings", label: "Drawings" },
  { href: "/writing",  label: "Writing"  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
      <Link
        href="/"
        className="font-mono text-xs tracking-[.2em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      >
        Portfolio
      </Link>

      <nav className="flex items-center gap-8">
        {links.map((l) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                active
                  ? "text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
