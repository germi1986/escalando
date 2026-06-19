import type { MetadataRoute } from "next";

const siteUrl = "https://escalandolabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/demo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contacto`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/privacidad`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terminos`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/eliminacion-datos`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
