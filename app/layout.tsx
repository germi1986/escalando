import type { Metadata } from "next";
import "./globals.css";
import MarketingAnalytics from "./components/MarketingAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        "Plataforma de IA comercial para WhatsApp con CRM, atención humana, recuperación de clientes y campañas responsables.",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Escalando Labs | IA comercial para WhatsApp",
    template: "%s | Escalando Labs",
  },
  description:
    "Automatización comercial con IA para WhatsApp: atención automática, CRM, campañas responsables, recuperación de clientes y auditoría operativa para negocios.",
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
      "Convertí WhatsApp en una operación comercial medible: IA, CRM, campañas responsables y recuperación de clientes.",
    url: "/",
    siteName: "Escalando Labs",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: socialPreview,
        width: 1200,
        height: 630,
        alt: "Escalando Labs: IA comercial para WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escalando Labs | IA comercial para WhatsApp",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
