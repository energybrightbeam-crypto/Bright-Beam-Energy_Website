// src/components/home/HomeExtras.tsx
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SUBSIDY_MAX } from "@/data/site";

// Collapsible SEO text. <details> works without JavaScript, and the text stays crawlable.
export function ReadMore() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
            Read More
            <ChevronDown size={20} className="transition group-open:rotate-180" />
          </summary>
          <div className="space-y-4 pb-10 text-sm leading-7 text-slate-600">
            <h2 className="text-xl font-semibold text-navy-950">Rooftop solar in Jammu: what you should know</h2>
            <p>
              Rooftop solar lets you generate your own electricity from the sun and use it at home, in your society or in
              your business. Panels on your roof produce power during the day, and extra power can be sent back to the
              grid under net metering, which is how many customers lower their monthly bill.
            </p>
            <p>
              Bright Beam Energy is based in Jammu and installs systems for homes, housing societies and commercial
              buildings across Jammu, Samba, Vijaypur, Udhampur, Kathua and Reasi. Every project starts with a free site
              visit, where we check your roof, shade and electricity bill before recommending a system size.
            </p>
            <p>
              Government subsidy under PM Surya Ghar can reduce the cost of a home system, up to ₹
              {SUBSIDY_MAX.toLocaleString("en-IN")} for a 3 kW system in J&amp;K. Rules, eligibility and amounts can
              change, so we confirm the current process with you and help with subsidy registration and net metering
              paperwork.
            </p>
            <p>
              Not sure what size you need? Try our{" "}
              <Link href="/solar-calculator" className="font-semibold text-navy-700 underline underline-offset-2">
                solar calculator
              </Link>{" "}
              or talk to our team for a free consultation.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}

export default ReadMore;