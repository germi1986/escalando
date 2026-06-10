"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("escalando-theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    setMounted(true);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Cambiar a modo ${nextTheme === "dark" ? "noche" : "día"}`}
      aria-pressed={theme === "light"}
      onClick={() => {
        setTheme(nextTheme);
        document.documentElement.dataset.theme = nextTheme;
        window.localStorage.setItem("escalando-theme", nextTheme);
      }}
      className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)] shadow-[var(--shadow-soft)] backdrop-blur-xl transition hover:border-[var(--border-strong)] hover:text-[var(--text-strong)]"
    >
      <span className="relative h-5 w-9 rounded-full bg-[var(--surface-strong)] ring-1 ring-[var(--border-soft)]">
        <span
          className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[var(--text-strong)] shadow-sm transition-transform ${
            mounted && theme === "light" ? "translate-x-4" : "translate-x-1"
          }`}
        />
      </span>
      <span className="hidden sm:inline">{mounted && theme === "light" ? "Día" : "Noche"}</span>
    </button>
  );
}
