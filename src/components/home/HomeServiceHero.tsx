import Image from "next/image";
import { LeadForm } from "@/components/home/LeadForm";

export function HomeServiceHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <Image src="/home_page.png" alt="Bright Beam Energy residential rooftop solar in Jammu" fill priority sizes="100vw" className="z-0 object-contain object-center" />
      <div className="absolute inset-0 z-0 bg-navy-950/65" />
      <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-7xl items-center justify-center px-4 py-5 sm:min-h-[38rem] sm:px-6 sm:py-6 lg:min-h-[42rem] lg:justify-end lg:px-10 lg:py-7">
        <div className="w-full max-w-[21rem] rounded-3xl bg-white p-3.5 text-slate-800 shadow-2xl sm:p-4">
          <LeadForm source="jammu-home-service" compact />
          <p className="mt-2 text-center text-[11px] text-slate-500">No obligation. Your details are used to respond to this enquiry.</p>
        </div>
      </div>
    </section>
  );
}
