// src/components/home/LandingBanner.tsx
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/home/LeadForm";
import { SUBSIDY_MAX } from "@/data/site";

const BENEFITS = [
  "Free rooftop survey and a clear cost breakup",
  "Subsidy registration and net metering paperwork handled",
  "System sized to your own electricity bill",
  "Jammu-based team for service after installation",
];

const STEPS = [
  { n: "1", t: "Free site visit" },
  { n: "2", t: "Clear quote" },
  { n: "3", t: "Install + subsidy help" },
];

export function LandingBanner() {
  return (
    <section className="relative bg-navy-950">
      {/* Poster: stacked on top on mobile, full-bleed background on desktop.
          object-right on mobile keeps the installer in view when the image is cropped. */}
      <div className="relative aspect-[16/9] w-full lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/home_page.png"
          alt="Bright Beam Energy installer fitting a rooftop solar panel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:min-h-[700px] lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10 lg:py-14">
        {/* Left: text (glass panel on desktop, plain on the navy mobile background) */}
        <div className="text-white lg:max-w-2xl lg:rounded-3xl lg:bg-navy-950/75 lg:p-9 lg:ring-1 lg:ring-white/10 lg:backdrop-blur-md">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium ring-1 ring-white/15 sm:text-sm">
            <span className="size-2 rounded-full bg-leaf-500" aria-hidden />
            जम्मू के घरों के लिए सोलर
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl xl:text-5xl">
            Cut Your Electricity Bill with <span className="text-leaf-500">Rooftop Solar</span> in Jammu.
          </h1>

          <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
            Subsidy up to ₹{SUBSIDY_MAX.toLocaleString("en-IN")}* on a 3 kW home system in J&amp;K. We handle the survey,
            the paperwork and the installation.
          </p>

          <ul className="mt-6 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm sm:text-base">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-leaf-500" />
                <span className="text-white/90">{b}</span>
              </li>
            ))}
          </ul>

          {/* 3-step strip */}
          <ol className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl bg-white/10 p-3 text-center ring-1 ring-white/10">
                <span className="mx-auto flex size-7 items-center justify-center rounded-full bg-leaf-600 text-sm font-semibold">
                  {s.n}
                </span>
                <p className="mt-2 text-xs font-medium leading-snug sm:text-sm">{s.t}</p>
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-navy-950 transition hover:bg-mist"
            >
              Get a FREE Consultation <ArrowRight size={18} />
            </a>
            <p className="text-xs text-white/70">Serving Jammu, Samba, Vijaypur, Udhampur, Kathua &amp; Reasi</p>
          </div>

          <p className="mt-4 text-xs leading-5 text-white/55">
            *For a 3 kW home system in J&amp;K, subject to PM Surya Ghar scheme rules.
          </p>
        </div>

        {/* Right: form (below the text on mobile) */}
        <div
          id="consult"
          className="w-full max-w-md scroll-mt-24 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-100 sm:p-8 lg:justify-self-end"
        >
          <LeadForm source="landing-homes" />
        </div>
      </div>
    </section>
  );
}

export default LandingBanner;