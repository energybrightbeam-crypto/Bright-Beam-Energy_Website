// src/lib/solar.ts
import { subsidyJK } from "@/data/site";

// Planning assumptions. Replace with the client's real figures.
export const TARIFF = 6; // ₹ per unit, approximate blended residential rate
export const UNITS_PER_KW_MONTH = 120; // typical generation per kW per month
export const COST_PER_KW = 55000; // approx. project cost per kW for small systems

export function estimate(bill: number) {
  const units = bill / TARIFF;
  const kw = Math.min(10, Math.max(1, Math.round(units / UNITS_PER_KW_MONTH)));
  const subsidy = subsidyJK[Math.min(kw, 3)] ?? 0; // J&K subsidy is capped at 3 kW
  const cost = kw * COST_PER_KW;
  return {
    kw,
    cost,
    subsidy,
    netCost: Math.max(0, cost - subsidy),
    monthlySaving: Math.min(bill, kw * UNITS_PER_KW_MONTH * TARIFF),
  };
}

export const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;