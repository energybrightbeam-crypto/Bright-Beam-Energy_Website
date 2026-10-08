// src/components/home/HomeCalculator.tsx
"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { ArrowRight, Calculator as CalcIcon } from "lucide-react";
import { QuoteButton } from "@/components/layout/QuoteProvider";
import { estimate, inr } from "@/lib/solar";

export function HomeCalculator() {
  const [pin, setPin] = useState("");
  const [bill, setBill] = useState(0);
  const [result, setResult] = useState<ReturnType<typeof estimate> | null>(null);
  const [error, setError] = useState("");

  const outOfArea = result !== null && !pin.startsWith("18");

  function run() {
    setError("");
    if (!/^\d{6}$/.test(pin)) return setError("Enter a valid 6-digit PIN code.");
    if (bill < 500) return setError("Slide to your monthly electricity bill.");
    setResult(estimate(bill));
    sendGAEvent("event", "calculator_used", { bill });
  }

  return (
    <section className="relative overflow-hidden bg-leaf-500/10 py-16 md:py-20">
      <CalcIcon className="pointer-events-none absolute -left-6 top-10 hidden size-40 text-leaf-600/15 md:block" aria-hidden />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="lg:pl-16">
          <h2 className="text-3xl font-bold text-navy-950 sm:text-4xl">Calculate your savings</h2>
          <p className="mt-3 max-w-md text-lg text-slate-700">Enter your PIN code and average monthly electricity bill to calculate your savings.</p>
        </div>

        <div className="rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-leaf-600/10 sm:p-6">
          <label htmlFor="calc-pin" className="sr-only">PIN Code</label>
          <input
            id="calc-pin"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={6}
            placeholder="PIN Code"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value.replace(/\D/g, ""));
              setResult(null);
            }}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20"
          />

          <div className="mt-6 flex items-center justify-between text-sm font-medium text-navy-950">
            <label htmlFor="calc-bill">Monthly Electricity Bill</label>
            <output className="text-lg font-semibold">{inr(bill)}</output>
          </div>
          <input
            id="calc-bill"
            type="range"
            min={0}
            max={20000}
            step={250}
            value={bill}
            onChange={(e) => {
              setBill(+e.target.value);
              setResult(null);
            }}
            className="mt-3 h-3 w-full cursor-pointer accent-leaf-600"
          />

          {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-700">{error}</p>}

          <button
            type="button"
            onClick={run}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy-700 to-navy-950 py-4 font-semibold text-white transition hover:opacity-95"
          >
            Calculate now <ArrowRight size={18} />
          </button>

          {result && (
            <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-slate-100">
              <dl className="grid grid-cols-2 gap-4">
                {[
                  ["Suggested system", `${result.kw} kW`],
                  ["Monthly saving", inr(result.monthlySaving)],
                  ["Subsidy (J&K)", inr(result.subsidy)],
                  ["Cost after subsidy", inr(result.netCost)],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs text-slate-500">{k}</dt>
                    <dd className="text-lg font-semibold text-navy-900">{v}</dd>
                  </div>
                ))}
              </dl>
              {outOfArea && <p className="mt-4 text-xs text-slate-500">We mainly serve the Jammu region. Request a quote and we will confirm if we cover your area.</p>}
              <p className="mt-3 text-xs text-slate-500">Estimate only. Actual figures depend on your roof and tariff.</p>
              <QuoteButton className="mt-4 w-full rounded-xl border-2 border-navy-900 py-3 font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white">
                Get an exact quote
              </QuoteButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}