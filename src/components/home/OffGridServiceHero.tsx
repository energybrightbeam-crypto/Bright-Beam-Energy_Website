import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { LeadForm } from "./LeadForm";

export function OffGridServiceHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[680px] lg:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col">
          <div className="px-5 pb-8 pt-10 sm:px-10 sm:pt-14 lg:px-16 lg:pb-10 lg:pt-16">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-leaf-600">Reliable power, wherever you are</p>
            <h1 className="mt-3 max-w-3xl bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl">Off-grid solar, designed around your life</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">A standalone solar system pairs panels with battery storage to keep essential power available where grid service is unreliable or unavailable.</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-navy-900">
              {["Designed for your daily loads", "Battery backup planning", "Local Jammu support"].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><CheckCircle2 size={17} className="text-leaf-600" />{item}</span>)}
            </div>
          </div>
          <div className="relative min-h-[300px] flex-1 overflow-hidden sm:min-h-[400px] lg:min-h-[390px]">
            <Image src="/off_grid.png" alt="Solar panels supplying an off-grid home with stored battery power" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 max-w-lg text-sm font-medium text-white drop-shadow sm:bottom-7 sm:left-10 sm:text-base">Plan a system for your home, farm or remote property with a clear view of loads, storage and backup needs.</p>
          </div>
        </div>
        <div className="bg-[#eef3ff] px-5 py-8 sm:px-9 sm:py-10 lg:px-8 lg:py-12 xl:px-12">
          <div className="mx-auto max-w-xl">
            <LeadForm source="off-grid-service" />
          </div>
        </div>
      </div>
    </section>
  );
}
