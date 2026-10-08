import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator as CalculatorIcon, ClipboardCheck, Sun } from "lucide-react";
import { Calculator } from "./Calculator";
import { QuoteButton } from "@/components/layout/QuoteProvider";
import { buildMetadata } from "@/lib/metadata";
import { BlogCardsSection } from "@/components/home/Sections";

export const metadata = buildMetadata({
  title: "Solar Calculator for Jammu | Bright Beam Energy",
  description: "Estimate a suitable rooftop solar system, possible savings and indicative cost for your home in Jammu and nearby districts.",
  path: "/solar-calculator",
});

const benefits = [
  { title: "Suggested system size", text: "See a starting capacity based on your monthly electricity bill." },
  { title: "Possible monthly savings", text: "Get a simple estimate of the bill amount solar may offset." },
  { title: "Indicative cost and subsidy", text: "Review an approximate system cost and J&K residential subsidy estimate." },
];

const questions = [
  { q: "How accurate is this solar estimate?", a: "It is a starting estimate based on typical electricity use, generation and installation cost assumptions. A roof survey, recent bills, tariff and final system design are needed for a property-specific quote." },
  { q: "Does the calculator work for Jammu and nearby districts?", a: "It is intended for households in Jammu and nearby areas. Enter your six-digit PIN code; PIN codes outside the Jammu region receive a note to confirm service coverage with our team." },
  { q: "Will every home receive the subsidy shown?", a: "No. The amount shown is indicative. Eligibility and the available subsidy depend on current programme rules, your connection and the approved installation. Confirm the latest requirements before making a decision." },
  { q: "Does an on-grid solar system provide power during an outage?", a: "A standard on-grid inverter shuts down during a grid outage for safety. If you need backup power, ask about a hybrid system designed for selected loads." },
];

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-white py-8 sm:py-12 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div>
            <div className="flex items-start gap-3">
              <CalculatorIcon size={34} className="mt-1 shrink-0 text-navy-900" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">For homes in Jammu and nearby areas</p>
                <h1 className="mt-2 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Calculate your home solar estimate</h1>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">Enter your PIN code and average monthly electricity bill to see an initial system size, possible savings and indicative cost.</p>
              </div>
            </div>
            <div className="mt-7"><Calculator /></div>
          </div>

          <div className="lg:pt-1">
            <div className="relative aspect-[1.55/1] overflow-hidden rounded-3xl bg-mist shadow-sm">
              <Image src="/solar_calculator.png" alt="Estimate rooftop solar savings for your home" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <h2 className="mt-8 text-center text-2xl font-bold text-black">Your next steps to home solar</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-0">
              {[
                { icon: CalculatorIcon, title: "Check your estimate", text: "Use your monthly bill to see a simple starting point." },
                { icon: ClipboardCheck, title: "Book a roof visit", text: "Our Jammu team checks roof space, shade and your connection." },
                { icon: Sun, title: "Get a clear proposal", text: "Review the recommended system, cost and next steps for your home." },
              ].map((step, index) => <div key={step.title} className="relative flex gap-4 rounded-2xl bg-mist p-4 lg:rounded-none lg:bg-transparent lg:px-2 lg:py-5">
                {index < 2 && <span aria-hidden className="absolute bottom-[-1.5rem] left-8 hidden h-6 border-l border-dashed border-navy-700/40 lg:block" />}
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-navy-700"><step.icon size={21} /></span>
                <div><h3 className="font-semibold text-black">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p></div>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">A simple guide for local homeowners</p>
            <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">What your Jammu solar estimate can tell you</h2>
            <p className="mt-4 leading-7 text-slate-700">Your bill is a useful first step when planning rooftop solar. This calculator turns it into a preliminary system size and cost estimate for a home in Jammu, Samba, Vijaypur, Udhampur, Kathua or Reasi. Your roof, shade, electricity tariff and daily usage can change the final design and savings.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => <article key={benefit.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"><h3 className="text-lg font-bold text-black">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p></article>)}
          </div>
          <p className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600">The result is not a final quotation or a guarantee of savings. For a more accurate recommendation, have your recent electricity bills and roof details ready for a free site assessment. Residential subsidy eligibility and amounts can change, so check current scheme rules before relying on an estimate.</p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto]">
          <div><h2 className="text-2xl font-bold text-black sm:text-3xl">Want a site-specific recommendation?</h2><p className="mt-2 max-w-2xl leading-7 text-slate-600">A local home visit helps confirm usable roof area, shade, system size and the steps that apply to your electricity connection.</p></div>
          <QuoteButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 font-semibold text-white transition hover:bg-navy-700">Book a free consultation <ArrowRight size={18} /></QuoteButton>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">Solar calculator questions</h2>
          <div className="mt-7 space-y-3">
            {questions.map((item) => <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-black marker:content-none [&::-webkit-details-marker]:hidden">{item.q}<span aria-hidden className="text-xl text-black transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.a}</p>
            </details>)}
          </div>
          <p className="mt-8 text-sm text-slate-600">Explore the <Link href="/services/homes" className="font-semibold text-navy-900 underline underline-offset-2">home solar service</Link> or <Link href="/locations" className="font-semibold text-navy-900 underline underline-offset-2">areas we serve</Link>.</p>
        </div>
      </section>
      <BlogCardsSection audience="calculator" />
    </>
  );
}
