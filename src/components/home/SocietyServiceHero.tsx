import Image from "next/image";
import { Building2, ClipboardCheck, UsersRound } from "lucide-react";
import { QuoteButton } from "@/components/layout/QuoteProvider";

export function SocietyServiceHero() {
  return (
    <>
      <section className="overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">Rooftop solar for shared spaces · Jammu Division</p>
          <h1 className="mx-auto mt-4 max-w-4xl bg-gradient-to-r from-navy-700 to-navy-950 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl">
            Solar for Housing Societies &amp; Apartments in Jammu
          </h1>
          <QuoteButton className="mt-7 rounded-xl bg-gradient-to-r from-navy-700 to-navy-950 px-10 py-4 text-sm font-semibold text-white shadow-md transition hover:opacity-95 sm:min-w-56">
            Plan a Society Site Visit
          </QuoteButton>
        </div>
        <div className="relative mt-10 h-56 sm:mt-14 sm:h-80 lg:mt-16 lg:h-[26rem]">
          <Image src="/hero_image.png" alt="Rooftop solar installation for a residential community" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white via-white/75 to-transparent" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/30 to-transparent" aria-hidden />
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">A practical plan for your RWA</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">Make shared rooftops work harder for everyone.</h2>
            <p className="mt-4 leading-7 text-slate-600">Bright Beam Energy helps committees assess common-area electricity use, available roof space and project requirements, then prepares a clear proposal for residents to review together.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <article className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <span className="rounded-xl bg-mist p-3 text-navy-700"><Building2 size={24} /></span>
              <div><h3 className="font-semibold text-navy-950">Common-area load review</h3><p className="mt-1 text-sm leading-6 text-slate-600">Consider lifts, pumps, lighting and other shared electricity use.</p></div>
            </article>
            <article className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <span className="rounded-xl bg-mist p-3 text-navy-700"><ClipboardCheck size={24} /></span>
              <div><h3 className="font-semibold text-navy-950">A proposal residents can assess</h3><p className="mt-1 text-sm leading-6 text-slate-600">Review system design, project scope and utility steps in one plan.</p></div>
            </article>
            <article className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <span className="rounded-xl bg-mist p-3 text-navy-700"><UsersRound size={24} /></span>
              <div><h3 className="font-semibold text-navy-950">Committee-friendly coordination</h3><p className="mt-1 text-sm leading-6 text-slate-600">Get local guidance through survey, installation and handover.</p></div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
