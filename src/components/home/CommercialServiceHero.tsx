import Image from "next/image";
import { Building2, ClipboardCheck, Headset } from "lucide-react";
import { QuoteButton } from "@/components/layout/QuoteProvider";

export function CommercialServiceHero() {
  return (
    <>
      <section className="overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">Commercial rooftop solar · Jammu</p>
          <h1 className="mx-auto mt-4 max-w-4xl bg-gradient-to-r from-navy-700 to-navy-950 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl">
            Commercial Solar for Businesses in Jammu
          </h1>
          <QuoteButton className="mt-7 rounded-xl bg-gradient-to-r from-navy-700 to-navy-950 px-10 py-4 text-sm font-semibold text-white shadow-md transition hover:opacity-95 sm:min-w-56">
            Get Free Quote
          </QuoteButton>
        </div>
        <div className="relative mt-10 h-56 sm:mt-14 sm:h-80 lg:mt-16 lg:h-[26rem]">
          <Image src="/hero_image.png" alt="Solar panels being installed for a commercial rooftop" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white via-white/75 to-transparent" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/30 to-transparent" aria-hidden />
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 select-none text-[10rem] font-bold leading-none text-navy-700/5 sm:text-[15rem]" aria-hidden>“</div>
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">The Bright Beam approach</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-2xl font-semibold leading-relaxed text-navy-950 sm:text-3xl lg:text-4xl">
            “A commercial solar project should make sense for the way your business works — from the first roof survey to installation and ongoing support.”
          </h2>
          <p className="mt-5 font-semibold text-navy-700">Bright Beam Energy <span className="font-normal text-slate-500">· Jammu</span></p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 border-t border-slate-100 pt-8 sm:grid-cols-3 sm:gap-4">
            <div className="flex flex-col items-center gap-2 text-sm font-medium text-slate-700"><Building2 className="text-leaf-600" size={25} />Roof and load assessment</div>
            <div className="flex flex-col items-center gap-2 text-sm font-medium text-slate-700"><ClipboardCheck className="text-leaf-600" size={25} />A clear, site-specific proposal</div>
            <div className="flex flex-col items-center gap-2 text-sm font-medium text-slate-700"><Headset className="text-leaf-600" size={25} />Local after-installation support</div>
          </div>
        </div>
      </section>
    </>
  );
}
