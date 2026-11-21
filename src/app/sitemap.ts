import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, freq: "monthly" as const },
    { path: "/services", priority: 0.9, freq: "monthly" as const },
    { path: "/how-it-works", priority: 0.8, freq: "monthly" as const },
    { path: "/savings-quote", priority: 0.9, freq: "monthly" as const },
    { path: "/about", priority: 0.7, freq: "yearly" as const },
    { path: "/partner", priority: 0.6, freq: "yearly" as const },
    { path: "/contact", priority: 0.8, freq: "yearly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
  ];

  const lastModified = new Date("2026-11-21");

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
