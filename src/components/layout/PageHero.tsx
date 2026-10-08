import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({ title, intro, crumbs }: { title: string; intro?: string; crumbs: { name: string; href?: string }[] }) {
  return (
    <section className="bg-gradient-to-br from-navy-950 to-navy-700 py-12 text-white md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-slate-300">
          <Link href="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c.name} className="flex items-center gap-1">
              <ChevronRight size={14} />
              {c.href ? <Link href={c.href} className="hover:text-white">{c.name}</Link> : <span className="text-white">{c.name}</span>}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-3xl text-lg text-slate-200">{intro}</p>}
      </div>
    </section>
  );
}
