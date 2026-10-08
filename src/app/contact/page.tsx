import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Sun } from "lucide-react";
import { QuoteButton } from "@/components/layout/QuoteProvider";
import { site, whatsappLink } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact Bright Beam Energy | Solar in Jammu",
  description: "Call, WhatsApp or email Bright Beam Energy to plan home, business or rooftop solar in Jammu, Samba, Vijaypur, Udhampur, Kathua and Reasi.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-leaf-600/20 bg-white px-3.5 py-2 text-sm font-semibold text-leaf-600"><Sun size={17} />Bright Beam Energy · Jammu region</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-navy-950 sm:text-5xl">Let’s talk about solar for your property</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">Tell us where you’re based and what you want solar to do. Our team can help with a site visit, system options and the next steps for your home or business.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappLink("Hi Bright Beam Energy, I would like to discuss a solar installation. Please contact me.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-leaf-600 px-5 py-3.5 font-semibold text-white transition hover:bg-leaf-500"><MessageCircle size={18} />Chat on WhatsApp</a>
              <QuoteButton className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3.5 font-semibold text-white transition hover:bg-navy-700">Request a call <ArrowRight size={18} /></QuoteButton>
            </div>
            <p className="mt-4 text-sm text-slate-500">Serving Jammu, Samba, Vijaypur, Udhampur, Kathua and Reasi.</p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-slate-200 sm:p-7">
            <h2 className="text-xl font-bold text-navy-950 sm:text-2xl">Reach our team</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Choose the contact option that works best for you.</p>
            <div className="mt-5 space-y-3">
              {site.contacts.map((contact) => <a key={contact.phone} href={`tel:+91${contact.phone}`} className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-navy-700 hover:bg-mist">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-mist text-navy-700"><Phone size={20} /></span>
                <span className="min-w-0"><span className="block font-semibold text-navy-950">{contact.name}{contact.role ? ` · ${contact.role}` : ""}</span><span className="mt-0.5 block text-sm text-slate-600">+91 {contact.phone}</span></span>
                <ArrowRight size={18} className="ml-auto shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-navy-700" />
              </a>)}
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-navy-700 hover:bg-mist">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-mist text-navy-700"><Mail size={20} /></span>
                <span className="min-w-0"><span className="block font-semibold text-navy-950">Email</span><span className="mt-0.5 block break-all text-sm text-slate-600">{site.email}</span></span>
                <ArrowRight size={18} className="ml-auto shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-navy-700" />
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-navy-950 p-4 text-white">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-leaf-500"><MapPin size={20} /></span>
                <span><span className="block font-semibold">Based in</span><span className="mt-0.5 block text-sm text-white/75">{site.serviceAddress}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-leaf-600">A useful first conversation</p>
          <h2 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">What should I have ready?</h2>
          <p className="mt-4 leading-7 text-slate-600">A few details help us understand your project and arrange the right next step.</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { n: "01", title: "Your location", text: "Share your town or six-digit PIN code so we can confirm local coverage." },
            { n: "02", title: "Your electricity use", text: "A recent bill or typical monthly amount gives us a starting point for system sizing." },
            { n: "03", title: "Your property", text: "Let us know if this is a home, business, housing society or a site needing backup power." },
          ].map((item) => <article key={item.n} className="rounded-2xl bg-mist p-6"><span className="text-sm font-bold text-leaf-600">{item.n}</span><h3 className="mt-3 text-lg font-bold text-navy-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></article>)}
        </div>
      </section>

     
    </>
  );
}
