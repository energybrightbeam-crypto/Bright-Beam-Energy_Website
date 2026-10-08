// src/components/home/HomeHero.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, IndianRupee, MapPin } from "lucide-react";
import { QuoteButton } from "@/components/layout/QuoteProvider";
import { SUBSIDY_MAX } from "@/data/site";

const HIGHLIGHTS = [
  { icon: IndianRupee, label: `Subsidy up to ₹${SUBSIDY_MAX.toLocaleString("en-IN")}*` },
  { icon: FileText, label: "Paperwork handled" },
  { icon: MapPin, label: "Jammu-based after-sales" },
];

export function HomeHero() {
  return (
    <section className="relative bg-navy-950">
      {/* Photo: stacked on top on mobile, full-bleed background on desktop.
          object-right keeps the installer in view when the image is cropped. */}
      <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/hero_image.png"
          alt="Bright Beam Energy installer fitting a rooftop solar panel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Darkens only the left side so white text is readable over the clouds (desktop) */}
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent lg:block"
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl px-4 py-10 sm:px-6 lg:min-h-[620px] lg:items-center lg:py-16">
        <div className="max-w-xl text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium ring-1 ring-white/15 sm:text-sm">
            <span className="size-2 rounded-full bg-leaf-500" aria-hidden />
            Based in Jammu · Homes, societies &amp; businesses
          </p>

          {/* Visible H1 replaces the old sr-only one */}
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
            Rooftop Solar, Installed by Your <span className="text-leaf-500">Local Jammu Team.</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-white/90 sm:text-xl">
            Free site visit, a clear quote, and help with subsidy and net metering paperwork.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/15 backdrop-blur"
              >
                <Icon size={16} className="text-leaf-500" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <QuoteButton className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-navy-950 transition hover:bg-mist">
              Get Free Quote <ArrowRight size={18} />
            </QuoteButton>
            <Link
              href="/solar-calculator"
              className="rounded-xl border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Try the Solar Calculator
            </Link>
          </div>

          <p className="mt-5 text-xs leading-5 text-white/60">
            *For a 3 kW home system in J&amp;K, subject to PM Surya Ghar scheme rules. Serving Jammu, Samba, Vijaypur,
            Udhampur, Kathua and Reasi.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;