import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Building2, CheckCircle2, House, Lightbulb, MapPin, PanelsTopLeft, Wrench } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { QuoteButton } from "@/components/layout/QuoteProvider";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Bright Beam Energy | Solar Company in Jammu",
  description: "Since 2017, Bright Beam Energy has provided rooftop solar, panels, inverters, batteries, installation and support in Jammu, Samba, Vijaypur, Udhampur, Kathua and Reasi.",
  path: "/about",
});

const services = [
  { icon: House, title: "Residential rooftop solar", description: "Grid-connected home systems planned around household bills and roof space, with help understanding PM Surya Ghar steps. Eligible J&K households may receive combined support up to ₹94,800 under current norms." },
  { icon: Building2, title: "Commercial and industrial solar", description: "Rooftop and solar power options for businesses with daytime electricity use." },
  { icon: PanelsTopLeft, title: "Solar panels and equipment", description: "Panel, inverter and mounting options selected for each site's needs." },
  { icon: BatteryCharging, title: "On-grid, off-grid and battery systems", description: "System choices for bill savings, remote locations and backup requirements." },
  { icon: Wrench, title: "Installation and commissioning", description: "Support from site assessment and system design through installation and handover." },
  { icon: Lightbulb, title: "Solar lighting and maintenance", description: "Solar lighting options and ongoing care to help keep systems working as intended." },
];

const values = [
  { title: "Clean energy", text: "Help more Jammu homes and businesses make use of sunlight." },
  { title: "Practical savings", text: "Recommend a system based on the customer's actual electricity use and site." },
  { title: "Energy independence", text: "Explain grid-connected and battery-backed options clearly." },
  { title: "Reliable support", text: "Stay available for installation questions and after-sales service." },
];

export default function About() {
  return (
    <>
   
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-leaf-600/10 px-3.5 py-2 text-sm font-semibold text-leaf-600"><span className="size-2 rounded-full bg-leaf-600" />Working in solar since 2017</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">Helping Jammu make the move to solar</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              <p>Bright Beam Energy started in 2017 with a simple aim: make dependable solar solutions easier to understand and install. Based in Jammu, we work with homeowners, businesses and communities in Jammu, Samba, Vijaypur, Udhampur, Kathua and Reasi who want to use clean energy and manage their electricity costs.</p>
              <p>From rooftop panels and solar equipment to on-grid, off-grid and battery-backed systems, we help plan the right approach for each property. Our work includes site assessment, system design, installation, commissioning guidance and after-sales support.</p>
              <p>Every roof and electricity connection is different. We begin by understanding the site and the customer’s needs, then explain the system, expected costs and next steps before work begins.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <QuoteButton className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 font-semibold text-white transition hover:bg-navy-700">Talk to our team <ArrowRight size={17} /></QuoteButton>
              <Link href="/locations" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-navy-900 transition hover:bg-mist"><MapPin size={17} />Areas we serve</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-mist shadow-lg">
            <Image src="/hero_image.png" alt="Solar installer working on rooftop panels" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent px-6 pb-6 pt-16 sm:px-8 sm:pb-8">
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-500">Bright Beam Energy</p>
              <p className="mt-1 text-xl font-bold text-white sm:text-2xl">Solar solutions for a brighter future</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-8 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 sm:px-6 md:grid-cols-4">
          {[
            ["2017", "Started working in solar"],
            ["Jammu", "Local base"],
            ["Homes", "Residential solar"],
            ["Region-wide", "Service across nearby areas"],
          ].map(([value, label]) => <div key={label} className="border-l-2 border-leaf-500 pl-4"><p className="text-xl font-bold sm:text-2xl">{value}</p><p className="mt-1 text-xs text-white/70 sm:text-sm">{label}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">What we do</p>
          <h2 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">Solar services for homes, businesses and communities</h2>
          <p className="mt-4 leading-7 text-slate-600">Our team supports solar projects across Jammu and nearby parts of the region, from the first site visit to installation and ongoing service.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <article key={service.title} className="rounded-2xl bg-mist p-6 transition hover:-translate-y-0.5 hover:shadow-md"><span className="inline-flex rounded-xl bg-white p-3 text-navy-700"><service.icon size={23} /></span><h3 className="mt-4 text-lg font-bold text-navy-950">{service.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p></article>)}
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">Our approach</p>
            <h2 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">Good solar starts with a clear plan</h2>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => <article key={value.title} className="rounded-2xl bg-white p-6"><CheckCircle2 size={23} className="text-leaf-600" /><h3 className="mt-4 font-bold text-navy-950">{value.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{value.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto]">
          <div><h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">Let’s build a sustainable tomorrow together</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">Tell us where you’re based and what you want solar to do. We’ll help you understand the options for your home, business or property.</p></div>
          <QuoteButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-leaf-600 px-6 py-3.5 font-semibold text-white transition hover:bg-leaf-500">Get a free consultation <ArrowRight size={18} /></QuoteButton>
        </div>
      </section>
    </>
  );
}
