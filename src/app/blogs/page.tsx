import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Solar Guides for Jammu Division | Bright Beam Energy",
  description: "Original practical guides to rooftop solar, subsidies, net metering and solar systems for homes and businesses across Jammu Division.",
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <>
      <header className="bg-navy-950 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Bright Beam Energy · Jammu Division</p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Solar guides for local homes and businesses</h1>
          <p className="mt-4 max-w-2xl leading-7 text-white/80">Clear, practical information to help you plan rooftop solar, compare proposals and understand the next steps.</p>
        </div>
      </header>
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.slug} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-lg">
              <Link href={`/blogs/${blog.slug}`} className="group block">
                <div className="relative aspect-[16/9] bg-slate-100">
                  <Image src={blog.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-leaf-600">{blog.tag}</p>
                  <h2 className="mt-2 text-lg font-bold leading-snug text-navy-950">{blog.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{blog.excerpt}</p>
                  <span className="mt-4 inline-flex rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-white">Read guide</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
