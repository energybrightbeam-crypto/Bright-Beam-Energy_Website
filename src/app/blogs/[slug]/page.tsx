import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlog } from "@/data/blogs";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteButton } from "@/components/layout/QuoteProvider";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return {};
  return buildMetadata({ title: blog.metaTitle, description: blog.metaDescription, path: `/blogs/${blog.slug}` });
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  const canonical = `${site.url}/blogs/${blog.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription,
    image: `${site.url}${blog.image}`,
    mainEntityOfPage: canonical,
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: `${site.url}/logo.png` },
    inLanguage: "en-IN",
    about: ["Rooftop solar", "Jammu Division", blog.tag],
  };

  return (
    <>
      <article>
        <header className="bg-mist pb-10 pt-8 sm:pb-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
              <Link href="/" className="hover:text-navy-900">Home</Link><span className="px-2">/</span>
              <Link href="/blogs" className="hover:text-navy-900">Blogs</Link><span className="px-2">/</span>
              <span className="text-navy-950" aria-current="page">{blog.title}</span>
            </nav>
            <p className="mt-7 text-sm font-semibold uppercase tracking-wide text-leaf-600">{blog.tag} · Jammu Division</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-navy-950 sm:text-5xl">{blog.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{blog.excerpt}</p>
            <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
              <Image src={blog.image} alt="" fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14 lg:py-14">
          <div className="space-y-8">
            {blog.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-navy-950">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-7 text-slate-700">{paragraph}</p>)}
                {section.bullets && <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <div className="border-t border-slate-200 pt-6">
              <Link href="/blogs" className="font-semibold text-navy-700 hover:text-navy-950">← Browse all solar guides</Link>
            </div>
          </div>

          <aside className="h-fit rounded-2xl bg-mist p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-navy-950">Planning solar in Jammu?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Ask our local team about a roof assessment and a proposal for your home.</p>
            <QuoteButton className="mt-5 w-full rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy-700">Request a quote</QuoteButton>
            <Link href="/services/homes" className="mt-3 block text-center text-sm font-semibold text-navy-700 hover:text-navy-950">Home solar service details</Link>
          </aside>
        </div>
      </article>
      <JsonLd data={articleSchema} />
    </>
  );
}
