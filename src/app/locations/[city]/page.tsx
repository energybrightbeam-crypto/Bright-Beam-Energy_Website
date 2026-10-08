import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Sun, ClipboardCheck, Wrench } from "lucide-react";
import { getLocation, locations } from "@/data/locations";
import { services } from "@/data/services";
import { BlogCardsSection, FaqList } from "@/components/home/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { CityHomeHero } from "@/components/home/CityHomeHero";

export const instant = false;

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const l = getLocation(city);
  if (!l) return {};
  return buildMetadata({
    title: `Solar Panel Installation in ${l.name} | Bright Beam Energy`,
    description: l.metaDescription,
    path: `/locations/${l.slug}`,
  });
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const l = getLocation(city);
  if (!l) notFound();
  const others = locations.filter((o) => o.slug !== l.slug);
  const home = services.find((service) => service.slug === "homes")!;

  return (
    <>
      <CityHomeHero location={l} />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">Residential rooftop solar · {l.name}</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">Plan a home solar system around life in {l.name}</h2>
            <p className="mt-4 leading-7 text-slate-600">{l.intro} We start with your electricity bills, roof space and the way your household uses power, then explain the system options and next steps for your property.</p>
            <h3 className="mt-8 text-xl font-bold text-navy-950">Local factors to consider in {l.name}</h3>
            <ul className="mt-4 space-y-3">
              {l.points.map((point) => <li key={point} className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 shrink-0 text-leaf-600" size={20} />{point}</li>)}
            </ul>
          </div>
          <aside className="rounded-3xl bg-mist p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy-950">Home solar installation includes</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">A clear plan from first roof check through handover, based on your home rather than a one-size-fits-all package.</p>
            <ul className="mt-5 space-y-4">
              {home.benefits.map((benefit) => <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-0.5 shrink-0 text-leaf-600" size={19} />{benefit}</li>)}
            </ul>
            <Link href="/services/homes" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-700">Explore home solar <span aria-hidden>→</span></Link>
          </aside>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">From survey to switch-on</p>
            <h2 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">How home solar installation works in {l.name}</h2>
            <p className="mt-4 leading-7 text-slate-600">Whether your home is in {l.name} or nearby {l.nearby.slice(0, 2).join(" or ")}, the first step is to understand the site and your electricity use. We explain the design and paperwork before installation begins.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { icon: Sun, title: "1. Home and roof assessment", text: `We review your recent bills, roof area, shade and electrical connection in ${l.name} to understand a suitable system size.` },
              { icon: ClipboardCheck, title: "2. Clear system plan", text: "You receive a proposal with the system capacity, equipment, installation scope and guidance on applicable utility or residential scheme steps." },
              { icon: Wrench, title: "3. Installation and support", text: "After you approve the plan, the team schedules installation and explains commissioning, system monitoring and who to contact for support." },
            ].map((step) => <article key={step.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"><step.icon className="text-leaf-600" size={26} /><h3 className="mt-4 text-lg font-bold text-navy-950">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy-950">Areas near {l.name} we cover</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Planning residential solar in {l.name} district? Contact us with your locality to arrange a site visit and confirm coverage.</p>
            <div className="mt-4 flex flex-wrap gap-2">{l.nearby.map((name) => <span key={name} className="inline-flex items-center gap-1 rounded-full bg-mist px-3 py-2 text-sm text-navy-900"><MapPin size={14} />{name}</span>)}</div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy-950">Other solar services in {l.name}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Alongside home rooftop installations, explore solutions for businesses, housing societies and different grid conditions.</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">{services.filter((service) => service.slug !== "homes").map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`} className="flex h-full items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-navy-700 hover:bg-mist hover:text-navy-900"><service.icon size={18} className="shrink-0 text-navy-700" />{service.title}</Link></li>)}</ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
        <h2 className="text-xl font-bold text-navy-900">Other areas</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/locations/${o.slug}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-navy-900 hover:bg-mist">
              {o.name}
            </Link>
          ))}
        </div>
      </section>

      <FaqList faqs={l.faqs} title={`Solar in ${l.name}: FAQs`} />
      <BlogCardsSection audience="city" citySlug={l.slug} />

      <JsonLd data={faqSchema(l.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: l.name, path: `/locations/${l.slug}` }])} />
    </>
  );
}
