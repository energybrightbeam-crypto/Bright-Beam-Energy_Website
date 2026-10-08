import { CheckCircle2, MapPin } from "lucide-react";
import { LeadForm } from "./LeadForm";
import type { Location } from "@/data/locations";

export function CityHomeHero({ location }: { location: Location }) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[660px] lg:grid-cols-[1.12fr_.88fr]">
        <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 text-white lg:min-h-[660px]">
          <div aria-hidden className="pointer-events-none absolute -right-28 -top-24 size-[28rem] rounded-full border border-white/10 bg-white/[0.03]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-44 -left-20 size-[30rem] rounded-full border border-leaf-500/15 bg-leaf-500/[0.04]" />
          <div className="relative z-10 px-5 pb-10 pt-12 sm:px-10 sm:pt-16 lg:px-14 lg:py-16">
            <p className="city-hero-enter inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-sm font-medium text-white"><MapPin size={16} className="text-leaf-500" />Home solar in {location.name}{location.district !== location.name ? `, ${location.district} district` : ""}</p>
            <h1 className="city-hero-enter city-hero-delay-1 mt-6 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Solar panel installation for homes in <span className="text-leaf-500">{location.name}</span></h1>
            <p className="city-hero-enter city-hero-delay-2 mt-5 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">{location.intro}</p>
            <ul className="city-hero-enter city-hero-delay-3 mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
              {["System sized to your electricity use", "Roof space and shade reviewed", "Guidance on utility and scheme steps"].map((point) => <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-white/95"><CheckCircle2 size={18} className="mt-1 shrink-0 text-leaf-500" />{point}</li>)}
            </ul>
          </div>
          <p className="relative z-10 px-5 pb-5 text-xs text-white/75 sm:px-10 lg:px-14">Free home site visit · System sized to your bill and roof · Local installation support</p>
        </div>
        <div className="bg-[#eef3ff] px-5 py-8 sm:px-9 sm:py-10 lg:px-8 lg:py-12 xl:px-12">
          <div className="mx-auto max-w-xl">
            <LeadForm source={`${location.slug}-home-solar`} />
            <p className="mt-3 text-center text-xs leading-5 text-slate-500">No obligation. Your details are used to respond to this enquiry.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
