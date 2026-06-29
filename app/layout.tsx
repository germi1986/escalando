import type { Metadata } from "next";
import "./globals.css";
import MarketingAnalytics from "./components/MarketingAnalytics";

const siteUrl = "https://escalandolabs.com";
const socialPreview = "/escalando-social-preview.png";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Escalando Labs",
      url: siteUrl,
      logo: `${siteUrl}/brand-icon.png`,
      email: "contacto@escalandolabs.com",
      areaServed: "AR",
    },
    {
      "@type": "WebSite",
      name: "Escalando Labs",
      url: siteUrl,
      inLanguage: "es-AR",
    },
    {
      "@type": "SoftwareApplication",
      name: "Escalando Labs",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description:
        "Sistema comercial medible para WhatsApp con IA, control humano, seguimiento y trazabilidad operativa.",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Escalando Labs | Sistema comercial medible para WhatsApp",
    template: "%s | Escalando Labs",
  },
  description:
    "Convertí WhatsApp en una operación comercial medible con IA y control humano. Escalando Labs ordena conversaciones, seguimiento y trazabilidad comercial.",
  keywords: [
    "IA para WhatsApp",
    "sistema comercial para WhatsApp",
    "seguimiento comercial por WhatsApp",
    "CRM WhatsApp",
    "operación comercial medible",
    "campañas WhatsApp responsables",
    "recuperación de clientes por WhatsApp",
    "control humano con IA",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Escalando Labs | Sistema comercial medible para WhatsApp",
    description:
      "Convertí WhatsApp en una operación comercial medible con IA, control humano, seguimiento y trazabilidad.",
    url: "/",
    siteName: "Escalando Labs",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: socialPreview,
        width: 1200,
        height: 630,
        alt: "Escalando Labs: sistema comercial medible para WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escalando Labs | Sistema comercial medible para WhatsApp",
    description:
      "Atendé, ordená, recuperá y medí tus conversaciones comerciales de WhatsApp con IA y control humano.",
    images: [socialPreview],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "facebook-domain-verification": "tbb7n7mei2yxobklfunj2iysvko2rc",
    "google-site-verification": "0JQkwQfyjT44o7esLqmL58lsduhire02MxJwdokHMnc",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full bg-[var(--background)] font-sans text-[var(--text-primary)]">
        {children}
        <MarketingAnalytics />
      </body>
    </html>
  );
}
