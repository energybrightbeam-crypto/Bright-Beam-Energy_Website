"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { QuoteButton } from "@/components/layout/QuoteProvider";
import { estimate, inr } from "@/lib/solar";

export function Calculator() {
  const [pin, setPin] = useState("");
  const [bill, setBill] = useState(0);
  const [result, setResult] = useState<ReturnType<typeof estimate> | null>(null);
  const [error, setError] = useState("");
  const outsideJammu = result !== null && !pin.startsWith("18");

  function calculate() {
    if (!/^\d{6}$/.test(pin)) return setError("Enter a valid 6-digit PIN code.");
    if (bill < 500) return setError("Choose your average monthly bill to see an estimate.");
    setError("");
    setResult(estimate(bill));
  }

  return (
    <div className="rounded-3xl bg-mist p-5 sm:p-7">
      <label htmlFor="calculator-pin" className="block text-sm font-semibold text-black">PIN code</label>
      <input id="calculator-pin" inputMode="numeric" autoComplete="postal-code" maxLength={6} placeholder="Enter your 6-digit PIN code" value={pin} onChange={(e) => { setPin(e.target.value.replace(/\D/g, "")); setResult(null); setError(""); }} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-black placeholder:text-slate-500 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20" />

      <div className="mt-6 flex items-center justify-between gap-3">
        <label htmlFor="bill" className="text-sm font-semibold text-black">Average monthly electricity bill</label>
        <output htmlFor="bill" className="shrink-0 text-lg font-bold text-navy-950">{inr(bill)}</output>
      </div>
      <p className="mt-1 flex justify-between text-xs text-slate-600"><span>₹500</span><span>₹20,000</span></p>
      <input id="bill" type="range" min={0} max={20000} step={250} value={bill} onChange={(e) => { setBill(+e.target.value); setResult(null); setError(""); }} className="mt-2 h-3 w-full cursor-pointer accent-navy-900" />

      {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-700">{error}</p>}
      <button type="button" onClick={calculate} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy-700 to-navy-950 py-3.5 font-semibold text-white transition hover:opacity-95">Calculate my estimate <ArrowRight size={18} /></button>

      {result && <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-slate-200 sm:p-5">
        <h3 className="font-bold text-black">Your preliminary solar estimate</h3>
        <dl className="mt-4 grid grid-cols-2 gap-4">
          {[["Suggested system", `${result.kw} kW`], ["Possible monthly saving", inr(result.monthlySaving)], ["Estimated system cost", inr(result.cost)], ["Indicative J&K subsidy", inr(result.subsidy)], ["Estimated cost after subsidy", inr(result.netCost)]].map(([label, value]) => <div key={label}><dt className="text-xs text-slate-600">{label}</dt><dd className="mt-1 font-semibold text-navy-950">{value}</dd></div>)}
        </dl>
        {outsideJammu && <p className="mt-4 text-xs leading-5 text-slate-600">We focus on Jammu and nearby districts. Share your PIN with our team to confirm service in your area.</p>}
        <p className="mt-3 text-xs leading-5 text-slate-500">This is a rough estimate using typical assumptions. Your actual system size, savings, cost and scheme eligibility depend on your roof, tariff, usage and current rules.</p>
        <QuoteButton className="mt-4 w-full rounded-xl border-2 border-navy-900 py-3 font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white">Get a site-specific quote</QuoteButton>
      </div>}
    </div>
  );
}
