import type { ReactNode } from "react";
import Link from "next/link";
import BrandMark from "../BrandMark";

type LegalNavItem = {
  href: string;
  label: string;
};

type LegalPageLayoutProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  children: ReactNode;
};

const legalLinks: LegalNavItem[] = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
  { href: "/contacto", label: "Contacto" },
];

export default function LegalPageLayout({
  title,
  subtitle,
  eyebrow = "Información legal",
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.12),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--nav-bg)] backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" aria-label="Volver a Escalando Labs">
            <BrandMark showLabel size="sm" />
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Páginas legales">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[var(--text-muted)] transition hover:border-[var(--border-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <section className="max-w-4xl">
          <p className="inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            {eyebrow}
          </p>
          <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--text-strong)] md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
            {subtitle}
          </p>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <article className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-2xl md:p-9">
            <div className="legal-content space-y-8">{children}</div>
          </article>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-5 shadow-[var(--shadow-soft)] backdrop-blur-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Páginas públicas
              </p>
              <div className="mt-4 grid gap-2">
                {legalLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] px-4 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>

      <footer className="relative z-10 border-t border-[var(--border-soft)] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <BrandMark showLabel size="sm" />
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--text-strong)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-8 text-[var(--text-secondary)]">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-cyan)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
