import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { LeadForm } from "./LeadForm";

export function OnGridServiceHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[680px] lg:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col">
          <div className="px-5 pb-8 pt-10 sm:px-10 sm:pt-14 lg:px-16 lg:pb-10 lg:pt-16">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-leaf-600">Make more of the power you generate</p>
            <h1 className="mt-3 max-w-3xl bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl">On-grid solar, made simple</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">A grid-connected rooftop system helps offset the electricity you buy, using solar power in the day and your utility connection when generation is low.</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-navy-900">
              {["No battery in a standard setup", "Net metering guidance", "Local Jammu support"].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><CheckCircle2 size={17} className="text-leaf-600" />{item}</span>)}
            </div>
          </div>
          <div className="relative min-h-[300px] flex-1 overflow-hidden sm:min-h-[400px] lg:min-h-[390px]">
            <Image src="/home.png" alt="Rooftop solar panels on a home" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 max-w-lg text-sm font-medium text-white drop-shadow sm:bottom-7 sm:left-10 sm:text-base">Get a rooftop assessment, a system sized to your electricity use and help understanding the utility process.</p>
          </div>
        </div>
        <div className="bg-[#eef3ff] px-5 py-8 sm:px-9 sm:py-10 lg:px-8 lg:py-12 xl:px-12">
          <div className="mx-auto max-w-xl"><LeadForm source="on-grid-service" /></div>
        </div>
      </div>
    </section>
  );
}

export function OnGridGuide() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">The complete guide</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">On-grid solar: how it works, net metering and what to consider</h2>
        <div className="mt-7 grid gap-8 text-base leading-7 text-slate-600 lg:grid-cols-[1.4fr_.6fr]">
          <div className="space-y-5">
            <p>An on-grid solar system connects rooftop panels to your property’s electrical system and the utility grid. During sunny hours, solar power supplies your home or business first. When generation is greater than your use, eligible surplus may flow to the grid under the approved meter arrangement.</p>
            <p>When solar output falls, such as at night or in heavy cloud, your property can draw electricity from the grid as usual. A standard on-grid inverter shuts down during a grid outage for electrical safety, so this setup does not provide backup power unless designed with additional equipment.</p>
          </div>
          <aside className="rounded-3xl bg-mist p-6">
            <h3 className="text-lg font-bold text-navy-950">What net metering does</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">An approved bidirectional meter records electricity imported from and exported to the grid. How this is accounted for depends on the current utility rules and your connection.</p>
          </aside>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">What is an on-grid solar system?</h2>
            <p className="mt-4 leading-7 text-slate-600">It is a rooftop solar installation that works in parallel with the electricity grid. Panels, an inverter, mounting and electrical safety equipment work together to supply solar power to your property and, where approved, export surplus energy.</p>
            <h3 className="mt-8 text-xl font-bold text-navy-950">When is on-grid a good fit?</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {["Your property has a reliable utility connection", "Your main goal is to offset electricity use and bills", "You can use some solar power during daylight hours"].map((text) => <li key={text} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-leaf-600" size={19} />{text}</li>)}
            </ul>
            <p className="mt-5 text-sm leading-6 text-slate-600">If backup during outages is essential, discuss a hybrid system and which selected loads need battery support. A regular grid-tied inverter alone will not keep the home powered during an outage.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <h2 className="text-2xl font-bold text-navy-950">Key parts of the system</h2>
            <div className="mt-6 space-y-5">
              {[
                ["Solar panels", "Convert daylight into direct-current electricity."],
                ["Grid-tied inverter", "Converts solar electricity for your property and synchronizes with the grid."],
                ["Bidirectional meter", "Measures grid import and export under the approved utility setup."],
                ["Mounting and wiring", "Secure the panels and connect the system with suitable protection."],
                ["Utility approvals", "Help establish the permitted capacity, interconnection and meter process."],
              ].map(([title, description], i) => <div key={title} className="flex gap-4"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-leaf-600/10 text-sm font-bold text-leaf-600">{i + 1}</span><div><h3 className="font-semibold text-navy-950">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{description}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">Planning your investment</p>
          <h2 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">On-grid solar system price and savings</h2>
          <p className="mt-4 leading-7 text-slate-600">The installed price depends on system capacity, panel and inverter selection, roof structure, wiring and the work required at your property. A useful estimate starts with recent electricity bills, a roof survey and a clear equipment list.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[["Your usage", "Recent bills and daytime consumption help establish a suitable capacity."], ["Your roof", "Usable area, shade, roof condition and safe access shape the layout."], ["Your connection", "Sanctioned load, utility requirements and meter arrangements affect the process."]].map(([title, text], i) => <article key={title} className="rounded-2xl bg-mist p-6"><span className="text-sm font-semibold text-leaf-600">0{i + 1}</span><h3 className="mt-2 text-lg font-bold text-navy-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}
        </div>
        <p className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600">Ask for a written proposal showing the system capacity, equipment models, installation scope, expected generation assumptions, warranties and any exclusions. Eligible residential consumers may be able to apply for scheme support; confirm current eligibility, subsidy amounts and process through the official PM Surya Ghar portal before making a decision.</p>
        <Link href="/subsidy" className="mt-5 inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-leaf-600">Read our subsidy guide <span aria-hidden>→</span></Link>
      </section>
    </div>
  );
}
