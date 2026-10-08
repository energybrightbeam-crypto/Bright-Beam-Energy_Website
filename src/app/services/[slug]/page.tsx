import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getService, services } from "@/data/services";
import { locations } from "@/data/locations";
import { PageHero } from "@/components/layout/PageHero";
import { FaqList, ReviewsSection, BlogCardsSection } from "@/components/home/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { HomeServiceHero } from "@/components/home/HomeServiceHero";
import { CommercialServiceHero } from "@/components/home/CommercialServiceHero";
import { SocietyServiceHero } from "@/components/home/SocietyServiceHero";
import { OffGridServiceHero } from "@/components/home/OffGridServiceHero";
import { OnGridGuide, OnGridServiceHero } from "@/components/home/OnGridServiceHero";

export const instant = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      {s.slug === "homes" ? <HomeServiceHero /> : s.slug === "commercial" ? <CommercialServiceHero /> : s.slug === "housing-societies" ? <SocietyServiceHero /> : s.slug === "off-grid" ? <OffGridServiceHero /> : s.slug === "on-grid" ? <OnGridServiceHero /> : <PageHero title={s.h1} intro={s.short} crumbs={[{ name: "Services", href: "/services" }, { name: s.title }]} />}
      {s.slug === "homes" && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
            <article className="rounded-2xl bg-mist p-6"><p className="text-sm font-semibold text-leaf-600">01 · Start with your home</p><h2 className="mt-3 text-xl font-bold text-navy-950">A design that fits your roof</h2><p className="mt-2 text-sm leading-6 text-slate-600">We review your power bill, available roof area and shade to recommend a practical system size for your household.</p></article>
            <article className="rounded-2xl bg-mist p-6"><p className="text-sm font-semibold text-leaf-600">02 · Know the next steps</p><h2 className="mt-3 text-xl font-bold text-navy-950">Clear costs and paperwork</h2><p className="mt-2 text-sm leading-6 text-slate-600">Before work begins, understand the proposed equipment, installation plan and available support for net metering and eligible residential subsidy steps.</p></article>
            <article className="rounded-2xl bg-mist p-6"><p className="text-sm font-semibold text-leaf-600">03 · Get local help</p><h2 className="mt-3 text-xl font-bold text-navy-950">Support beyond installation</h2><p className="mt-2 text-sm leading-6 text-slate-600">Bright Beam Energy serves Jammu and nearby communities, with a local point of contact for system questions after handover.</p></article>
          </div>
        </section>
      )}
      {s.slug === "off-grid" && (
        <div className="bg-white">
          <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">The complete guide</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">Off-grid solar with battery storage: how it works, what it costs, and who it suits</h2>
            <div className="mt-7 grid gap-8 text-base leading-7 text-slate-600 lg:grid-cols-[1.4fr_.6fr]">
              <div className="space-y-5">
                <p>An off-grid solar system makes and stores electricity at your property without relying on a utility connection. Solar panels generate power in daylight; a charge controller and inverter manage that energy, while batteries store the extra for evening use and periods of low sunshine.</p>
                <p>Because the home depends on its own generation and storage, the system must be designed around actual appliances, seasonal conditions and the number of backup days you need. A site survey and load list are the right starting points.</p>
              </div>
              <aside className="rounded-3xl bg-mist p-6">
                <h3 className="text-lg font-bold text-navy-950">What autonomy means</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Autonomy is how long your essential loads can run from stored energy when solar generation is low. More backup time usually calls for more battery capacity and a higher system cost.</p>
              </aside>
            </div>
          </section>

          <section className="bg-mist py-14 sm:py-18">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">What is an off-grid solar system?</h2>
                <p className="mt-4 leading-7 text-slate-600">It is a standalone power setup that produces electricity from sunlight and stores energy in batteries, without a connection to the public grid. The system is designed to supply the loads you choose, even when the grid is unavailable.</p>
                <h3 className="mt-8 text-xl font-bold text-navy-950">When does off-grid make sense?</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {["Remote homes, farms and worksites without a practical grid connection", "Properties where electricity supply is unreliable for long periods", "Essential equipment that needs a planned level of independent backup"].map((text) => <li key={text} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-leaf-600" size={19} />{text}</li>)}
                </ul>
                <p className="mt-5 text-sm leading-6 text-slate-600">If your grid connection is reliable and your main goal is a lower bill, an on-grid system is often simpler and less expensive. If you need both grid connection and selected-load backup, ask about a hybrid design.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                <h2 className="text-2xl font-bold text-navy-950">The main system components</h2>
                <div className="mt-6 space-y-5">
                  {[
                    ["Solar panels", "Generate electricity from sunlight."],
                    ["Battery bank", "Stores energy for evening use and low-sun periods."],
                    ["Off-grid inverter", "Converts and manages power for your appliances."],
                    ["Charge controller", "Regulates charging to protect the batteries."],
                    ["Mounting and safety equipment", "Supports panels and helps protect the installation."],
                  ].map(([title, description], i) => <div key={title} className="flex gap-4"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-leaf-600/10 text-sm font-bold text-leaf-600">{i + 1}</span><div><h3 className="font-semibold text-navy-950">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{description}</p></div></div>)}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">Planning your investment</p>
              <h2 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">Off-grid solar system price in India</h2>
              <p className="mt-4 leading-7 text-slate-600">Battery capacity, inverter size, panel count, equipment choice and site conditions all affect the final price. The figures below are broad examples for systems with lithium batteries, shared as a planning guide rather than a fixed quotation.</p>
            </div>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[580px] border-collapse text-left text-sm">
                <thead className="bg-navy-950 text-white"><tr><th className="px-5 py-4 font-semibold">Example system</th><th className="px-5 py-4 font-semibold">Indicative installed price</th></tr></thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {[["3 kW with 5.12 kWh lithium battery", "Around ₹4.12 lakh"], ["5 kW with 5.12 kWh lithium battery", "Around ₹5.50 lakh"], ["6 kW with 5.12 kWh lithium battery", "Around ₹7.34 lakh"], ["6 kW with 10.24 kWh lithium battery", "Around ₹8.30 lakh"], ["8 kW with 10.24 kWh lithium battery", "Around ₹9.65 lakh"], ["10 kW with 10.24 kWh lithium battery", "Around ₹11.15 lakh"]].map(([system, price]) => <tr key={system} className="odd:bg-white even:bg-mist/70"><td className="px-5 py-4">{system}</td><td className="px-5 py-4 font-semibold text-navy-950">{price}</td></tr>)}
                </tbody>
              </table>
            </div>
            <p className="mt-4 rounded-2xl bg-mist p-5 text-sm leading-6 text-slate-600"><strong className="text-navy-950">Please note:</strong> Prices are indicative examples and can change with battery brand and capacity, panel and inverter selection, roof or site work, and installation scope. The final design and quote should follow a load assessment and site survey.</p>
            <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-navy-950">Is an off-grid system eligible for PM Surya Ghar subsidy?</h3>
              <p className="mt-3 leading-7 text-slate-700">The residential PM Surya Ghar programme is for eligible grid-connected rooftop systems. A fully off-grid installation generally does not qualify under that route. Check the current official scheme rules and your utility requirements before making a decision.</p>
              <Link href="/subsidy" className="mt-4 inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-leaf-600">Read our subsidy guide <span aria-hidden>→</span></Link>
            </div>
          </section>
        </div>
      )}
      {s.slug === "on-grid" && <OnGridGuide />}

      {s.slug !== "off-grid" && s.slug !== "on-grid" && <section className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-navy-900">Overview</h2>
          <p className="mt-3 text-slate-600">{s.intro}</p>
          <h3 className="mt-8 text-lg font-semibold text-navy-900">Ideal for</h3>
          <ul className="mt-3 list-inside list-disc space-y-1 text-slate-600">
            {s.idealFor.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div className="rounded-3xl bg-mist p-6">
          <h2 className="text-xl font-bold text-navy-900">What you get</h2>
          <ul className="mt-4 space-y-3">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-leaf-600" size={20} /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>}

      {s.slug !== "homes" && (
        <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">Available in</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {locations.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-navy-900 hover:bg-mist">
                {l.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {s.slug === "homes" && <ReviewsSection allowPlaceholders />}
      <FaqList faqs={s.faqs} />
      {s.slug === "homes" && <BlogCardsSection />}
      {s.slug === "commercial" && <BlogCardsSection audience="commercial" />}
      {s.slug === "housing-societies" && <BlogCardsSection audience="societies" />}
      {s.slug === "off-grid" && <BlogCardsSection audience="off-grid" />}
      {s.slug === "on-grid" && <BlogCardsSection audience="on-grid" />}
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }])} />
    </>
  );
}
