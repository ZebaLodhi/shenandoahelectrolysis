import { MetadataRoute } from "next";

/*
 * HOW TO UPDATE THE SITEMAP:
 *
 * When you add a new page, add an entry to the staticPages array below.
 * When you add a new blog post, add its slug to the blogSlugs array.
 * The sitemap is generated automatically at build time.
 */

const baseUrl = "https://www.shenandoahelectrolysis.com";

const staticPages = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/education", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/quiz", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
];

const blogSlugs = [
  "what-is-electrolysis-complete-guide",
  "how-does-electrolysis-work",
  "electrolysis-vs-laser-hair-removal",
  "is-electrolysis-permanent",
  "electrolysis-all-skin-tones-hair-colors",
  "first-electrolysis-appointment-what-to-expect",
  "how-many-electrolysis-sessions-needed",
  "electrolysis-aftercare-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: today,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...blogPages];
}
