import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://escalandolabs.com";

const themeInitScript = `
(() => {
  try {
    const storageKey = "escalando-theme";
    const saved = window.localStorage.getItem(storageKey);
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = saved === "dark" || saved === "light" ? saved : systemTheme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Escalando Labs | IA comercial para WhatsApp",
    template: "%s | Escalando Labs",
  },
  description:
    "Automatización comercial con IA para WhatsApp: atención automática, CRM, campañas responsables, recuperación de clientes, atención postventa y auditoría operativa para negocios.",
  keywords: [
    "IA para WhatsApp",
    "chatbot para WhatsApp",
    "automatización comercial por WhatsApp",
    "CRM WhatsApp",
    "campañas WhatsApp responsables",
    "atención automática WhatsApp",
    "recuperación de clientes por WhatsApp",
    "automatización con IA para negocios",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Escalando Labs | IA comercial para WhatsApp",
    description:
      "Convertí WhatsApp en una operación comercial medible: IA, CRM, campañas responsables, atención postventa y recuperación de clientes.",
    url: "/",
    siteName: "Escalando Labs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escalando Labs | IA comercial para WhatsApp",
    description:
      "Atendé, ordená, recuperá y medí tus conversaciones de WhatsApp con IA, postventa y control humano.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning className="h-full scroll-smooth antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-[var(--background)] font-sans text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
