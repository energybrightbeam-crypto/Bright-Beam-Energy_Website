


// src/components/home/Sections.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, ClipboardCheck, FileText, MapPin, ShieldCheck, IndianRupee, Headset } from "lucide-react";
import { services, getService, type Faq } from "@/data/services";
import { locations } from "@/data/locations";
import { QuoteButton } from "@/components/layout/QuoteProvider";
import { SUBSIDY_MAX, stats, reviews } from "@/data/site";
import { blogs } from "@/data/blogs";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";

type Review = { name: string; location: string; review: string };

// TODO: PLACEHOLDER REVIEWS. Replace with real customer reviews before launch.
// Better: add real ones to `reviews` in data/site.ts. When that array is not
// empty, these placeholders are ignored automatically.
// Placeholders only show where <ReviewsSection allowPlaceholders /> is used.
const PLACEHOLDER_REVIEWS: Review[] = [
  {
    name: "Aman Gupta",
    location: "Jammu",
    review:
      "The team visited, measured our roof and explained everything clearly before we decided. The subsidy paperwork was handled for us.",
  },
  {
    name: "Priya Sharma",
    location: "Samba",
    review:
      "Installation was neat and on schedule. We got a clear cost breakup upfront with no surprises later.",
  },
  {
    name: "Rakesh Kumar",
    location: "Udhampur",
    review:
      "Good local support. When we had a question after installation, the team responded quickly and helped us out.",
  },
];

export function TrustStrip() {
  const items = [
    { icon: IndianRupee, title: `Subsidy up to ₹${SUBSIDY_MAX.toLocaleString("en-IN")}*`, text: "For a 3 kW home system in J&K" },
    { icon: FileText, title: "Paperwork handled", text: "Subsidy and net metering support" },
    { icon: ShieldCheck, title: "Quality brands", text: "Reliable panels and inverters" },
    { icon: Headset, title: "Local support", text: "Jammu-based after-sales team" },
  ];
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className={`${wrap} grid grid-cols-2 gap-4 py-8 lg:grid-cols-4`}>
        {items.map((i) => (
          <div key={i.title} className="flex items-start gap-3">
            <i.icon className="mt-1 shrink-0 text-leaf-600" size={26} />
            <div>
              <p className="text-sm font-semibold text-navy-900 sm:text-base">{i.title}</p>
              <p className="text-xs text-slate-600 sm:text-sm">{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="bg-mist py-16">
      <div className={wrap}>
        <h2 className="text-3xl font-bold text-navy-900">Solar for every roof</h2>
        <p className="mt-2 max-w-2xl text-slate-600">Pick what fits your property. We will recommend the right size after a free site visit.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:shadow-lg">
              <span className="inline-flex rounded-2xl bg-mist p-3 text-navy-700"><s.icon size={26} /></span>
              <h3 className="mt-4 text-xl font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-leaf-600">
                Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { t: "Free Home Visit & Rooftop Survey", d: "Our team measures your rooftop and checks shade and your electricity bill to design a system for maximum generation." },
    { t: "Custom System Design & Quote", d: "You get a system sized to your usage, with a clear cost breakup before you decide." },
    { t: "Hassle-free Installation & Subsidy Support", d: "Our team installs your system and helps with the paperwork, including subsidy registration and net metering." },
    { t: "Solar On. You Save. We Maintain.", d: "Your system starts reducing your bill once it is live, and our local team is there for service and maintenance." },
  ];
  return (
    <section className="bg-mist py-14 md:py-20">
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-2 lg:gap-14`}>
        <div>
          <h2 className="text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">We Handle the Work. You Enjoy the Savings.</h2>
          <ol className="mt-8">
            {steps.map((s, i) => (
              <li key={s.t} className="relative pb-9 pl-16 last:pb-0">
                {i < steps.length - 1 && <span className="absolute bottom-1 left-5 top-12 border-l border-dashed border-leaf-500/50" aria-hidden />}
                <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border-2 border-leaf-500 bg-white font-semibold text-navy-950">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-navy-950 sm:text-xl">{s.t}</h3>
                <p className="mt-1.5 text-slate-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg lg:aspect-auto lg:min-h-[34rem]">
          <Image src="/handle.png" alt="Bright Beam Energy solar installation team" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function AreasGrid() {
  return (
    <section className="bg-mist py-16">
      <div className={wrap}>
        <h2 className="text-3xl font-bold text-navy-900">Areas we serve</h2>
        <p className="mt-2 text-slate-600">Based in Jammu, installing across the region.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {locations.map((l) => (
            <Link key={l.slug} href={`/locations/${l.slug}`} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
              <MapPin className="text-leaf-600" />
              <span className="font-semibold text-navy-900">{l.name}</span>
              <span className="text-xs text-slate-500">Solar in {l.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqList({ faqs, title = "Frequently asked questions" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-navy-900">{title}</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-navy-900 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-xl text-leaf-600 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GetSolarFor() {
  const items = [
    { slug: "homes", image: "/home.png", text: "Cut your home electricity bill with rooftop solar." },
    { slug: "housing-societies", image: "/building.png", text: "Reduce common-area power costs and add long-term value." },
    { slug: "commercial", image: "/commercial.png", text: "Power your business with green energy and save on costs." },
  ];
  return (
    <section className="bg-white py-14 md:py-16">
      <div className={wrap}>
        <h2 className="text-center text-3xl font-bold text-navy-950 sm:text-4xl">Get Solar for</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
          {items.map((i) => {
            const s = getService(i.slug)!;
            return (
              <Link key={i.slug} href={`/services/${i.slug}`} className="group flex items-start gap-4 rounded-2xl p-3 transition hover:bg-mist">
                <span className="relative size-16 shrink-0 sm:size-20">
                  <Image src={i.image} alt="" fill sizes="80px" className="object-contain" />
                </span>
                <span>
                  <span className="flex items-center gap-1 text-lg font-semibold text-navy-950">
                    {s.title} <ChevronRight size={18} className="transition group-hover:translate-x-1" />
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">{i.text}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyTrust() {
  const items: { image: string; t: string; d: string }[] = [
    { image: "/free-site-survey.png", t: "Free Site Survey", d: "We measure your roof and review your bill before suggesting a system size." },
    { image: "/hassle-free-paperwork.png", t: "Hassle-free Paperwork", d: "Subsidy registration and net metering support handled by our team." },
    { image: "/quality-components.png", t: "Quality Components", d: "Reliable panels, inverters and mounting built for Jammu weather." },
    { image: "/local-after-sales.png", t: "Local After-sales", d: "A Jammu-based team for service and maintenance after installation." },
  ];
  return (
    <section className="border-t border-slate-100 bg-white py-14 md:py-20">
      <div className={wrap}>
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold text-navy-950 sm:text-4xl">Why Families Across Jammu Trust Bright Beam Energy</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="text-center">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-2xl shadow-md">
                <Image src={i.image} alt={i.t} fill sizes="160px" className="object-cover" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">{i.t}</h3>
              <p className="mx-auto mt-2 max-w-[17rem] text-sm text-slate-600">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const icons = [MapPin, IndianRupee, ClipboardCheck, Headset];
  return (
    <section className="bg-white pb-14 md:pb-20">
      <div className={wrap}>
        <h2 className="text-center text-3xl font-bold text-navy-950 sm:text-4xl">Solar Made Simple Across the Jammu Region</h2>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((st, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={st.label} className="rounded-2xl bg-mist p-5">
                <Icon className="text-navy-700" size={26} />
                <p className="mt-5 text-xl font-semibold text-navy-950 sm:text-2xl">{st.value}</p>
                <p className="text-sm text-slate-600">{st.label}</p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-6 flex max-w-5xl flex-col items-start justify-between gap-4 rounded-2xl border border-navy-700/10 bg-mist/70 p-5 sm:flex-row sm:items-center">
          <p className="flex items-center gap-3 text-base text-navy-950 sm:text-lg">
            <MapPin className="shrink-0 text-leaf-600" /> We serve Jammu, Samba, Vijaypur, Udhampur, Kathua and Reasi, and we are growing.
          </p>
          <QuoteButton className="w-full shrink-0 rounded-xl bg-gradient-to-r from-navy-700 to-navy-950 px-6 py-3.5 text-sm font-semibold text-white sm:w-auto">
            Unlock Your Solar Savings
          </QuoteButton>
        </div>
      </div>
    </section>
  );
}

// Default behaviour matches your original: renders nothing until real reviews
// exist in data/site.ts. Pass `allowPlaceholders` (home page only) to show
// the placeholder cards while you collect real reviews.
export function ReviewsSection({ allowPlaceholders = false }: { allowPlaceholders?: boolean }) {
  const list: Review[] = reviews.length > 0 ? reviews : allowPlaceholders ? PLACEHOLDER_REVIEWS : [];

  if (list.length === 0) return null;

  return (
    <section className="bg-mist py-14 md:py-20">
      <div className={wrap}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-navy-950 sm:text-4xl">What Jammu Customers Say About Bright Beam</h2>
          <p className="mt-3 text-slate-600">Trusted by families and businesses across Jammu and nearby areas.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {list.map((r, idx) => (
            <article key={`${r.name}-${idx}`} className="flex min-h-[300px] flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <div className="font-serif text-6xl leading-none text-navy-700/20" aria-hidden>
                “
              </div>
              <p className="mt-2 text-[15px] leading-7 text-slate-600">{r.review}</p>
              <div className="mt-auto pt-8">
                <div className="mb-3 flex gap-1 text-leaf-600" aria-label="5 out of 5 stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="font-semibold text-navy-900">{r.name}</p>
                <p className="mt-1 text-sm text-slate-500">{r.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogCardsSection({ audience = "homes", citySlug }: { audience?: "homes" | "commercial" | "societies" | "off-grid" | "on-grid" | "city" | "subsidy" | "calculator"; citySlug?: string }) {
  const cityBlogSlugs: Record<string, string[]> = {
    jammu: ["rooftop-solar-for-homes-in-jammu", "home-solar-site-survey-checklist-jammu", "how-to-size-home-solar-system-jammu"],
    samba: ["rooftop-solar-homes-in-samba", "solar-for-shops-and-businesses-jammu", "home-solar-site-survey-checklist-jammu"],
    vijaypur: ["home-solar-in-vijaypur", "rooftop-solar-for-homes-in-jammu", "home-solar-site-survey-checklist-jammu"],
    udhampur: ["rooftop-solar-in-udhampur", "roof-shade-and-panel-placement-jammu", "battery-backup-sizing-for-jammu-homes"],
    kathua: ["solar-for-homes-in-kathua", "how-to-size-home-solar-system-jammu", "solar-maintenance-checklist-jammu"],
    reasi: ["solar-for-homes-in-reasi", "battery-backup-sizing-for-jammu-homes", "hybrid-solar-and-battery-backup-jammu"],
  };
  const cityName = locations.find((location) => location.slug === citySlug)?.name;
  const selectedSlugs = audience === "city" ? cityBlogSlugs[citySlug ?? "jammu"] : undefined;
  const selectedBlogs = audience === "city"
    ? blogs.filter((blog) => selectedSlugs?.includes(blog.slug))
    : audience === "subsidy"
      ? blogs.filter((blog) => ["pm-surya-ghar-subsidy-jammu-guide", "rooftop-solar-for-homes-in-jammu", "solar-net-metering-jpdcl-jammu"].includes(blog.slug))
      : audience === "calculator"
        ? blogs.filter((blog) => ["how-to-size-home-solar-system-jammu", "home-solar-site-survey-checklist-jammu", "pm-surya-ghar-subsidy-jammu-guide"].includes(blog.slug))
    : audience === "commercial"
    ? blogs.filter((blog) => ["solar-for-shops-and-businesses-jammu", "solar-for-housing-societies-jammu", "choosing-solar-installer-jammu-division"].includes(blog.slug))
    : audience === "societies"
      ? blogs.filter((blog) => ["solar-for-housing-societies-jammu", "choosing-solar-installer-jammu-division", "rooftop-solar-for-homes-in-jammu"].includes(blog.slug))
      : audience === "off-grid"
        ? blogs.filter((blog) => ["battery-backup-sizing-for-jammu-homes", "hybrid-solar-and-battery-backup-jammu", "solar-maintenance-checklist-jammu"].includes(blog.slug))
      : audience === "on-grid"
        ? blogs.filter((blog) => ["solar-net-metering-jpdcl-jammu", "rooftop-solar-for-homes-in-jammu", "pm-surya-ghar-subsidy-jammu-guide"].includes(blog.slug))
    : audience === "homes"
      ? blogs.filter((blog) => ["rooftop-solar-for-homes-in-jammu", "home-solar-site-survey-checklist-jammu", "how-to-size-home-solar-system-jammu"].includes(blog.slug))
      : blogs.slice(0, 3);

  const heading = audience === "city" ? `Solar guides for ${cityName ?? "your area"}`
    : audience === "commercial" ? "Commercial solar guides"
      : audience === "societies" ? "Guides for housing societies"
        : audience === "off-grid" ? "More solar and battery guides"
          : audience === "on-grid" ? "More rooftop solar guides"
            : audience === "subsidy" ? "More on solar subsidy and applications"
              : audience === "calculator" ? "Plan your home solar system"
                : "Blogs";
  const description = audience === "city" ? `Useful rooftop solar reading for homeowners in ${cityName ?? "Jammu Division"}, with local roof, usage and installation considerations.`
    : audience === "commercial" ? "Practical guidance for businesses planning solar in Jammu Division."
      : audience === "societies" ? "Helpful reading for RWAs and apartment committees considering shared rooftop solar."
        : audience === "off-grid" ? "Explore battery backup, system sizing and maintenance before planning your installation."
          : audience === "on-grid" ? "Read more about net metering, home solar and current subsidy steps."
            : audience === "subsidy" ? "Read practical guides to residential eligibility, application preparation and grid-connected solar."
              : audience === "calculator" ? "Understand system sizing, roof surveys and the details behind a preliminary solar estimate."
                : "Explore practical resources for planning a rooftop solar system in Jammu.";

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className={wrap}>
        <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">{heading}</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">{description}</p>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {selectedBlogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group overflow-hidden rounded-2xl bg-mist transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                <Image src={blog.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-leaf-600">{blog.tag}</span>
                <h3 className="mt-2 text-base font-semibold leading-snug text-navy-950">{blog.title}</h3>
                <span className="mt-3 inline-block text-sm font-semibold text-navy-700">Read guide →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/blogs" className="inline-flex rounded-xl border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-mist">View all blogs</Link>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];
  return (
    <section id="faq" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-navy-950 sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-5 inline-block rounded-full bg-navy-900 px-4 py-2 text-sm text-white">All your questions, answered.</p>

        <div className="mt-8 grid gap-x-14 md:grid-cols-2">
          {columns.map((col, ci) => (
            <div key={ci}>
              {col.map((f) => (
                <details key={f.q} className="group border-b border-slate-200">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-semibold text-navy-950 marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg leading-none text-slate-600 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-5 pr-10 text-sm leading-6 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
