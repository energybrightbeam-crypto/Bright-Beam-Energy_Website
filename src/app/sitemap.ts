import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const pages = ["", "/about", "/contact", "/subsidy", "/solar-calculator", "/services", "/locations", "/blogs"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, priority: 0.8 })),
    ...locations.map((l) => ({ url: `${base}/locations/${l.slug}`, priority: 0.9 })),
    ...blogs.map((blog) => ({ url: `${base}/blogs/${blog.slug}`, priority: 0.7 })),
  ];
}
