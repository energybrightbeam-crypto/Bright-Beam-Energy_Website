// src/components/home/Hero.tsx
import Image from "next/image";
import { LeadForm } from "@/components/home/LeadForm";

export function Hero() {
  return (
    <section className="relative bg-mist lg:bg-navy-950">
      {/* Poster: stacked on mobile, full-bleed background on desktop.
          Tune aspect-[16/9] to your image's real ratio. */}
      <div className="relative aspect-[16/9] w-full lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/home_page.png"
          alt="Bright Beam Energy rooftop solar installation in Jammu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />
      </div>

      {/* The headline lives inside the poster image, so give search engines a real H1 */}
      <h1 className="sr-only">
        Rooftop solar in Jammu with free site survey, subsidy and net metering support
      </h1>

      <div className="relative mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6 lg:min-h-[640px] lg:items-center lg:justify-end lg:py-12">
        <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-100 sm:p-8">
          <LeadForm source="home-hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;