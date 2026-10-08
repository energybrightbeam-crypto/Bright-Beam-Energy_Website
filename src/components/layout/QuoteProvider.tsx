
"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { X, CheckCircle2, MessageCircle } from "lucide-react";
import clsx from "clsx";
import { whatsappLink } from "@/data/site";

const QuoteCtx = createContext<{ open: () => void }>({ open: () => {} });
export const useQuote = () => useContext(QuoteCtx);

const BILLS = ["Less than ₹1500", "₹1500 - ₹2500", "₹2500 - ₹4000", "₹4000 - ₹8000", "More than ₹8000"];

export function QuoteButton({ children, className }: { children: ReactNode; className?: string }) {
  const { open } = useQuote();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteCtx.Provider value={{ open }}>
      {children}
      {isOpen && <QuoteModal onClose={close} />}
    </QuoteCtx.Provider>
  );
}

function QuoteModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bill, setBill] = useState("");
  const [pin, setPin] = useState("");
  const [consent, setConsent] = useState(true);
  const [trap, setTrap] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [waUrl, setWaUrl] = useState("");
  const firstRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (name.trim().length < 2) return setError("Please enter your full name.");
    if (!/^[6-9]\d{9}$/.test(phone)) return setError("Enter a valid 10-digit WhatsApp number.");
    if (!bill) return setError("Please select your monthly electricity bill.");
    if (!/^\d{6}$/.test(pin)) return setError("Enter a valid 6-digit PIN code.");
    if (!consent) return setError("Please accept the terms to continue.");

    setStatus("sending");

    const message = [
      "Hi Bright Beam Energy, I want a free solar quote.",
      "",
      `Name: ${name.trim()}`,
      `WhatsApp: ${phone}`,
      `Monthly bill: ${bill}`,
      `PIN code: ${pin}`,
    ].join("\n");
    const url = whatsappLink(message);
    setWaUrl(url);

    // 1. Save the lead first. Ignore failures: WhatsApp is still worth opening.
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, bill, pin, consent, website: trap, page: window.location.pathname }),
      });
    } catch {
      // ignore
    }

    // 2. Track, show fallback screen, then redirect to WhatsApp.
    sendGAEvent("event", "generate_lead", { bill_range: bill, form: "free_quote" });
    setStatus("done");
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  }

  const field =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-800 placeholder:text-slate-500 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-950/60 sm:items-center sm:p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        className="max-h-[95dvh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-mist p-5 shadow-2xl sm:rounded-3xl sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="quote-title" className="text-2xl font-semibold text-navy-900">
              Get Free Quote
            </h2>
            <p className="mt-1 text-sm text-slate-600">Save on electricity bills by switching to solar.</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-full p-2 text-slate-500 hover:bg-white">
            <X size={22} />
          </button>
        </div>

        {status === "done" ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto text-leaf-600" size={48} />
            <p className="mt-4 text-lg font-semibold text-navy-900">Thank you, {name.split(" ")[0]}!</p>
            <p className="mt-1 text-sm text-slate-600">Opening WhatsApp with your details…</p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener"
              onClick={() => sendGAEvent("event", "whatsapp_click", { location: "quote_success" })}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-leaf-600 px-6 py-3 font-semibold text-white hover:bg-leaf-500"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5 space-y-4" noValidate>
            <input ref={firstRef} className={field} placeholder="Full Name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input
              className={field}
              placeholder="WhatsApp Number"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            />

            <fieldset>
              <legend className="mb-2 text-sm font-medium text-slate-600">Monthly Electricity Bill</legend>
              <div className="flex flex-wrap gap-2">
                {BILLS.map((b) => (
                  <button
                    type="button"
                    key={b}
                    aria-pressed={bill === b}
                    onClick={() => setBill(b)}
                    className={clsx(
                      "rounded-2xl border px-4 py-2.5 text-sm font-semibold transition",
                      bill === b ? "border-navy-900 bg-navy-900 text-white" : "border-slate-200 bg-white text-navy-950 hover:border-navy-700",
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <input
              className={field}
              placeholder="PIN Code"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
            />

            {/* honeypot: real users never see or fill this */}
            <input tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={trap} onChange={(e) => setTrap(e.target.value)} name="website" />

            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 size-4 accent-navy-900" />
              <span>I agree to be contacted by Bright Beam Energy about my solar enquiry.</span>
            </label>

            {error && (
              <p role="alert" className="rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-2xl bg-gradient-to-r from-navy-700 to-navy-950 py-4 font-semibold text-white transition hover:opacity-95 disabled:opacity-60"
            >
              {status === "sending" ? "Submitting…" : "Submit Details"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}