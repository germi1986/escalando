import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import styles from "./LegalPageLayout.module.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-legal-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-legal-mono",
  display: "swap",
});

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
  { href: "/eliminacion-datos", label: "Eliminación de datos" },
];

export default function LegalPageLayout({
  title,
  subtitle,
  eyebrow = "Información legal",
  children,
}: LegalPageLayoutProps) {
  return (
    <div className={`${styles.root} ${manrope.variable} ${plexMono.variable}`}>
      <a className={styles.skipLink} href="#contenido-legal">
        Ir al contenido principal
      </a>

      <header className={styles.header} aria-label="Navegación legal">
        <div className={styles.shell}>
          <div className={styles.headerInner}>
            <Link className={styles.brand} href="/" aria-label="Escalando Labs, volver al inicio">
              <span className={styles.brandMark} aria-hidden="true">
                <Image src="/brand-icon.png" alt="" width={32} height={32} priority />
              </span>
              <span className={styles.brandName}>
                <strong>Escalando</strong>
                <span>Labs</span>
              </span>
            </Link>

            <nav className={styles.headerNav} aria-label="Páginas legales">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link className={styles.backLink} href="/">
              Volver al sitio
            </Link>
          </div>
        </div>
      </header>

      <main id="contenido-legal">
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>{eyebrow}</p>
              <h1>{title}</h1>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
          </div>
        </section>

        <div className={`${styles.shell} ${styles.mainGrid}`}>
          <article className={styles.article}>
            <div className={`${styles.content} legal-content`}>{children}</div>
          </article>

          <aside className={styles.aside} aria-label="Navegación entre documentos públicos">
            <div className={styles.asideCard}>
              <p className={styles.asideEyebrow}>Documentos públicos</p>
              <nav className={styles.asideNav} aria-label="Documentos públicos">
                {legalLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span>{item.label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </nav>
              <p className={styles.asideNote}>
                Estos documentos forman parte de la información pública de Escalando Labs.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <span className={styles.brandMark} aria-hidden="true">
              <Image src="/brand-icon.png" alt="" width={32} height={32} />
            </span>
            <div>
              <strong>Escalando Labs</strong>
              <p>Sistema comercial conversacional con IA y control humano.</p>
            </div>
          </div>

          <nav className={styles.footerNav} aria-label="Páginas legales del sitio">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <p className={styles.copyright}>© {new Date().getFullYear()} Escalando Labs.</p>
        </div>
      </footer>
    </div>
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
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
