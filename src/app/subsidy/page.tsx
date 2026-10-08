import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, Landmark, Sun } from "lucide-react";
import { QuoteButton } from "@/components/layout/QuoteProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { subsidyJK } from "@/data/site";
import type { Faq } from "@/data/services";
import { BlogCardsSection } from "@/components/home/Sections";

export const metadata = buildMetadata({
  title: "PM Surya Ghar Subsidy in Jammu & Kashmir | Bright Beam Energy",
  description: "Understand PM Surya Ghar rooftop solar subsidy in Jammu and Kashmir, including current indicative amounts, eligibility, documents and application steps.",
  path: "/subsidy",
});

const faqs: Faq[] = [
  { q: "How do I apply online for PM Surya Ghar subsidy in Jammu and Kashmir?", a: "Use the official PM Surya Ghar national portal to register the eligible residential electricity connection, submit the rooftop application and track its status. Follow the current DISCOM inspection and registered-vendor steps. JAKEDA publishes J&K programme guidelines and notices, so check those as well if your application refers to a JAKEDA-administered programme." },
  { q: "Does the subsidy make every solar system the same price?", a: "No. Subsidy eligibility and amount are determined by the current scheme rules and approved capacity, while the system quotation depends on equipment, roof work and installation scope. Compare the written system price separately from the indicative subsidy and verify both before signing." },
  { q: "Can I use the residential subsidy for solar lights or an off-grid system?", a: "The PM Surya Ghar residential rooftop support is for eligible grid-connected rooftop installations that follow scheme requirements. Do not assume standalone solar lights or a fully off-grid installation qualify; confirm the product and programme rules with the official agency." },
  { q: "Who can apply for PM Surya Ghar rooftop solar subsidy?", a: "The household needs an eligible residential electricity connection and must follow the current scheme and DISCOM process. Confirm your eligibility and registered-vendor requirements on the official portal before installation." },
  { q: "How much subsidy may an eligible J&K household receive?", a: "The current indicative combined central and UT amounts used on this page are ₹36,000 for 1 kW, ₹72,000 for 2 kW and up to ₹94,800 for 3 kW or above. Final eligibility and amounts must be confirmed through the scheme portal." },
  { q: "Can I get PM Surya Ghar subsidy for an off-grid system?", a: "The residential subsidy applies to eligible grid-connected rooftop solar installations under the scheme. A fully off-grid system generally does not qualify under this route." },
  { q: "When is the subsidy credited?", a: "The subsidy is processed after the required installation, inspection or commissioning, and portal steps are completed and verified. Processing time can vary; check the application status on the official portal." },
  { q: "Does Bright Beam Energy help with the application?", a: "Our Jammu solar team can explain the installation and paperwork steps and help you prepare. The application and final eligibility remain subject to the official portal and DISCOM process." },
];

const reasons = [
  "Reduce the amount of grid electricity your home needs to buy.",
  "Use rooftop space to produce clean electricity during daylight.",
  "Get help understanding the application, installation and net-metering steps.",
  "Plan a system around your home’s bill, roof and electricity connection.",
];

const documents = [
  "Electricity consumer number and a recent bill",
  "Applicant contact and identity details requested by the portal",
  "Bank account details for the subsidy process",
  "Roof access or ownership information, if requested",
  "Installation, inspection and commissioning records",
];

const steps = [
  "Register your electricity connection on the PM Surya Ghar national portal.",
  "Submit the rooftop solar application and proposed system details.",
  "Select an eligible registered vendor through the portal and confirm your system plan.",
  "Complete installation and the required DISCOM inspection and meter steps.",
  "Submit the commissioning and bank details requested on the portal; follow your application status until processing is complete.",
];

export default function Subsidy() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="mx-auto grid max-w-7xl lg:min-h-[520px] lg:grid-cols-2">
          <div className="flex items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-medium"><Landmark size={16} className="text-leaf-500" />PM Surya Ghar · Jammu &amp; Kashmir</p>
              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">Understand your rooftop solar subsidy in J&amp;K</h1>
              <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg">PM Surya Ghar supports eligible households installing grid-connected rooftop solar. In Jammu and Kashmir, central and UT support may combine. We’ll help you understand the steps for your home.</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <QuoteButton className="inline-flex items-center gap-2 rounded-xl bg-leaf-600 px-6 py-3.5 font-semibold text-white transition hover:bg-leaf-500">Check my next steps <ArrowRight size={18} /></QuoteButton>
                <span className="text-sm text-white/75">Free consultation · No obligation</span>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[520px]">
            <Image src="/subsidy.png" alt="A Jammu and Kashmir family exploring rooftop solar and PM Surya Ghar" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[right_top]" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-navy-950/20" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">A guide for local homeowners</p>
          <h2 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">What is PM Surya Ghar Muft Bijli Yojana?</h2>
          <p className="mt-4 leading-7 text-slate-600">PM Surya Ghar is the Government of India’s rooftop solar programme for eligible residential electricity consumers. The subsidy is linked to an approved grid-connected rooftop installation and is processed through the national portal after the required installation and verification steps.</p>
          <p className="mt-4 leading-7 text-slate-600">For homes in Jammu, Samba, Vijaypur, Udhampur, Kathua and Reasi, the combined central and Jammu and Kashmir support may differ from the central subsidy figures shown for many other states. Always confirm the amount and your eligibility before you commit to a system.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {["No agents required to apply through the official portal", "No commissions paid to government for the subsidy", "No hidden deductions from the published subsidy amount"].map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-mist p-5"><CheckCircle2 size={20} className="mt-0.5 shrink-0 text-leaf-600" /><p className="text-sm font-semibold leading-6 text-navy-950">{item}</p></div>)}
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">Indicative Jammu &amp; Kashmir amounts</p>
            <h2 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">Residential rooftop solar subsidy by system size</h2>
            <p className="mt-4 leading-7 text-slate-600">The amounts below reflect the combined central and UT subsidy figures currently listed in this J&amp;K guide. They are subject to scheme rules, application approval, eligible system capacity and change by the government.</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-navy-900 text-white"><tr><th className="px-5 py-4 font-semibold">Rooftop solar capacity</th><th className="px-5 py-4 font-semibold">Indicative combined subsidy in J&amp;K</th></tr></thead>
              <tbody>{Object.entries(subsidyJK).map(([kw, amount]) => <tr key={kw} className="border-t border-slate-100 even:bg-mist/60"><td className="px-5 py-4 font-medium text-navy-950">{kw} kW</td><td className="px-5 py-4 font-semibold text-navy-950">₹{amount.toLocaleString("en-IN")}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-500">These are guide figures, not a guarantee or final savings calculation. For comparison, the commonly quoted central subsidy cap is ₹78,000; J&amp;K’s UT contribution may increase the combined support. Confirm current details with the <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-700 underline underline-offset-2">official PM Surya Ghar portal</a> and your DISCOM.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">Before you apply</p>
          <h2 className="mt-3 text-3xl font-bold text-navy-950">Who may be eligible?</h2>
          <ul className="mt-6 space-y-4">
            {["You are applying for a residential electricity connection.", "Your home has a valid electricity consumer account and suitable rooftop space.", "You plan a grid-connected system that follows current scheme requirements.", "You use the official portal and meet the DISCOM and registered-vendor steps."].map((item) => <li key={item} className="flex gap-3 text-slate-700"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-leaf-600" />{item}</li>)}
          </ul>
          <p className="mt-5 text-sm leading-6 text-slate-600">Commercial and industrial connections are not covered by the residential subsidy. Eligibility can depend on your consumer account and prior subsidy status; check the current scheme rules before proceeding.</p>
        </div>
        <div className="rounded-3xl bg-mist p-6 sm:p-8">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-navy-950"><FileText className="text-leaf-600" />Keep these details handy</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">The portal or utility may ask for documents and account details during different stages of the application.</p>
          <ul className="mt-5 space-y-3">{documents.map((doc) => <li key={doc} className="flex gap-3 text-sm leading-6 text-slate-700"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-leaf-600" />{doc}</li>)}</ul>
        </div>
      </section>

      <section className="bg-navy-950 py-14 text-white sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-500">Application overview</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How to apply for PM Surya Ghar subsidy</h2>
            <p className="mt-4 leading-7 text-white/75">Apply and track progress on the national portal. Your local DISCOM completes the applicable inspection and meter steps; your vendor can explain the installation sequence.</p>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => <li key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5"><span className="text-sm font-bold text-leaf-500">0{index + 1}</span><p className="mt-2 text-sm leading-6 text-white/90">{step}</p></li>)}
          </ol>
          <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-navy-950 transition hover:bg-mist">Open the official portal <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><h2 className="flex items-center gap-3 text-2xl font-bold text-navy-950 sm:text-3xl"><Sun className="text-leaf-600" />Considering rooftop solar in Jammu?</h2><p className="mt-3 max-w-3xl leading-7 text-slate-600">Bright Beam Energy can review your bill and roof, explain the grid-connected system options, and help you prepare for the next steps in Jammu and nearby districts.</p></div>
          <QuoteButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 font-semibold text-white transition hover:bg-navy-700">Request a free call <ArrowRight size={18} /></QuoteButton>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy-950 sm:text-4xl">PM Surya Ghar subsidy FAQs</h2>
          <div className="mt-7 space-y-3">{faqs.map((faq) => <details key={faq.q} className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-black marker:content-none [&::-webkit-details-marker]:hidden">{faq.q}<span aria-hidden className="text-xl text-black transition group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-6 text-slate-700">{faq.a}</p></details>)}</div>
          <p className="mt-8 text-sm text-slate-600">Explore our <Link href="/services/homes" className="font-semibold text-navy-900 underline underline-offset-2">home rooftop solar service</Link> or use the <Link href="/solar-calculator" className="font-semibold text-navy-900 underline underline-offset-2">solar savings calculator</Link> for a preliminary estimate.</p>
        </div>
      </section>

      <JsonLd data={faqSchema(faqs)} />
      <BlogCardsSection audience="subsidy" />
    </>
  );
}
