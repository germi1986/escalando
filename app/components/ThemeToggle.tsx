"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("escalando-theme");
  if (saved === "dark" || saved === "light") return saved;
  return "dark";
}

function SunIcon({ active }: { active: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition ${active ? "text-sky-950" : "text-[var(--text-muted)]"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ active }: { active: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition ${active ? "text-sky-950" : "text-[var(--text-muted)]"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 7 7 0 1 0 20.5 14.5Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    document.documentElement.dataset.theme = initialTheme;

    const frame = window.requestAnimationFrame(() => {
      setTheme(initialTheme);
      setMounted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const isLight = mounted && theme === "light";
  const nextTheme: Theme = isLight ? "dark" : "light";

  return (
    <button
      type="button"
      aria-label={`Cambiar a modo ${nextTheme === "dark" ? "noche" : "día"}`}
      aria-pressed={isLight}
      title={isLight ? "Cambiar a modo noche" : "Cambiar a modo día"}
      onClick={() => {
        setTheme(nextTheme);
        document.documentElement.dataset.theme = nextTheme;
        window.localStorage.setItem("escalando-theme", nextTheme);
      }}
      className="theme-toggle group relative inline-flex h-11 w-[5.7rem] items-center justify-between rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] p-1 shadow-[var(--shadow-soft)] backdrop-blur-xl transition hover:border-[var(--border-strong)] focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
    >
      <span
        aria-hidden="true"
        className={`absolute top-1 h-9 w-9 rounded-full bg-[linear-gradient(135deg,var(--brand-cyan),var(--brand-green))] shadow-[0_12px_30px_rgba(34,211,238,0.24)] transition-transform duration-300 ${
          isLight ? "translate-x-0" : "translate-x-[2.55rem]"
        }`}
      />
      <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full">
        <SunIcon active={isLight} />
      </span>
      <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full">
        <MoonIcon active={!isLight} />
      </span>
    </button>
  );
}
