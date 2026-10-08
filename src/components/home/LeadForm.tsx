// src/components/home/LeadForm.tsx
"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { whatsappLink } from "@/data/site";

const BILL_OPTIONS = [
  "Less than ₹1,500",
  "₹1,500 – ₹2,500",
  "₹2,500 – ₹4,000",
  "₹4,000 – ₹8,000",
  "More than ₹8,000",
] as const;

type Field = "name" | "phone" | "pincode" | "bill" | "consent";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 text-[15px] text-navy-950 placeholder:text-slate-400 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20";

function FieldError({ msg }: { msg?: string }) {
  return msg ? (
    <p role="alert" className="mt-1 text-xs text-red-600">
      {msg}
    </p>
  ) : null;
}

export function LeadForm({ source = "home-hero", compact = false }: { source?: string; compact?: boolean }) {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = new FormData(e.currentTarget);

    // Honeypot: real users never fill this hidden field
    if (String(form.get("website") ?? "") !== "") return;

    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").replace(/\D/g, "");
    const pincode = String(form.get("pincode") ?? "").replace(/\D/g, "");
    const bill = String(form.get("bill") ?? "");
    const consent = form.get("consent") === "on";

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(phone)) next.phone = "Enter a valid 10-digit mobile number.";
    if (!/^\d{6}$/.test(pincode)) next.pincode = "Enter a valid 6-digit PIN code.";
    if (!bill) next.bill = "Select your monthly bill range.";
    if (!consent) next.consent = "Please tick the box so we can contact you.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    const message = [
      "Hi Bright Beam Energy, I would like a solar consultation.",
      "",
      `Name: ${name}`,
      `WhatsApp: ${phone}`,
      `PIN code: ${pincode}`,
      `Monthly electricity bill: ${bill}`,
      `Enquiry source: ${source}`,
    ].join("\n");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, pin: pincode, bill, consent, website: "", page: `${window.location.pathname}?source=${encodeURIComponent(source)}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
    } catch {
      // Continue to WhatsApp so the enquiry still reaches the team if lead storage is unavailable.
    }
    setStatus("success");
    window.setTimeout(() => { window.location.href = whatsappLink(message); }, 400);
  }

  if (status === "success") {
    return (
      <div className="py-10 text-center" role="status">
        <CheckCircle2 className="mx-auto text-leaf-600" size={48} />
        <h2 className="mt-4 text-2xl font-bold text-navy-950">Thank you!</h2>
        <p className="mt-2 text-sm text-slate-600">
          Opening WhatsApp with your enquiry for Bright Beam Energy.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <h2 className={compact ? "text-lg font-bold leading-tight text-navy-950" : "text-2xl font-bold text-navy-950 sm:text-3xl"}>Book a FREE Consultation</h2>
      <p className={compact ? "mt-1 text-[11px] leading-4 text-slate-600" : "mt-2 text-sm text-slate-600"}>
        Talk to our Jammu solar team. We visit, measure your roof and give you a clear quote. No obligation.
      </p>

      <div className={compact ? "mt-4 space-y-2.5" : "mt-6 space-y-4"}>
        <div>
          <label htmlFor={`${uid}-name`} className={compact ? "text-xs font-medium text-slate-700" : "text-sm font-medium text-slate-700"}>
            Full name
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            className={`${inputClass} ${compact ? "py-1.5 text-sm" : "py-3"}`}
          />
          <FieldError msg={errors.name} />
        </div>

        <div>
          <label htmlFor={`${uid}-phone`} className={compact ? "text-xs font-medium text-slate-700" : "text-sm font-medium text-slate-700"}>
            WhatsApp number
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.phone}
            className={`${inputClass} ${compact ? "py-1.5 text-sm" : "py-3"}`}
          />
          <FieldError msg={errors.phone} />
        </div>

        <div>
          <label htmlFor={`${uid}-pin`} className={compact ? "text-xs font-medium text-slate-700" : "text-sm font-medium text-slate-700"}>
            PIN code
          </label>
          <input
            id={`${uid}-pin`}
            name="pincode"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={6}
            placeholder="6-digit PIN code"
            aria-invalid={!!errors.pincode}
            className={`${inputClass} ${compact ? "py-1.5 text-sm" : "py-3"}`}
          />
          <FieldError msg={errors.pincode} />
        </div>
      </div>

      <fieldset className={compact ? "mt-3" : "mt-5"}>
        <legend className={compact ? "text-xs font-medium text-slate-700" : "text-sm font-medium text-slate-700"}>Monthly electricity bill</legend>
        <div className={compact ? "mt-1.5 flex flex-wrap gap-1.5" : "mt-2 flex flex-wrap gap-2"}>
          {BILL_OPTIONS.map((o) => (
            <label key={o} className="cursor-pointer">
              <input type="radio" name="bill" value={o} className="peer sr-only" />
              <span className={`block rounded-xl border border-slate-200 font-medium text-navy-950 transition hover:border-slate-400 peer-checked:border-leaf-600 peer-checked:bg-leaf-600/10 peer-focus-visible:ring-2 peer-focus-visible:ring-navy-700/40 ${compact ? "px-2.5 py-1.5 text-xs" : "px-3.5 py-2.5 text-sm"}`}>
                {o}
              </span>
            </label>
          ))}
        </div>
        <FieldError msg={errors.bill} />
      </fieldset>

      {/* Consent starts UNTICKED on purpose */}
      <div className={compact ? "mt-3" : "mt-5"}>
        <label className={`flex cursor-pointer items-start text-slate-600 ${compact ? "gap-2 text-[11px] leading-4" : "gap-3 text-xs"}`}>
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 size-4 shrink-0 rounded border-slate-300 accent-navy-700"
          />
          <span>I agree to be contacted by Bright Beam Energy on WhatsApp or phone about my enquiry.</span>
        </label>
        <FieldError msg={errors.consent} />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`${compact ? "mt-3 py-2.5 text-xs" : "mt-6 py-4 text-sm"} flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy-700 to-navy-950 px-6 font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" size={18} /> Sending...
          </>
        ) : (
          "Book a FREE Consultation"
        )}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-3 text-center text-sm text-red-600">
          Something went wrong. Please try again or call us.
        </p>
      )}
    </form>
  );
}

export default LeadForm;
