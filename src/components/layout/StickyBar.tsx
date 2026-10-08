"use client";

import { Phone, MessageCircle } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { primaryPhone, whatsappLink } from "@/data/site";
import { useQuote } from "./QuoteProvider";

export function StickyBar() {
  const { open } = useQuote();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-slate-200 bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={`tel:+91${primaryPhone}`}
        onClick={() => sendGAEvent("event", "phone_click", { location: "sticky_bar" })}
        className="flex items-center justify-center gap-2 rounded-xl bg-navy-900 py-3 text-sm font-semibold text-white"
      >
        <Phone size={16} /> Call
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        onClick={() => sendGAEvent("event", "whatsapp_click", { location: "sticky_bar" })}
        className="flex items-center justify-center gap-2 rounded-xl bg-leaf-600 py-3 text-sm font-semibold text-white"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
      <button type="button" onClick={open} className="rounded-xl border-2 border-navy-900 py-3 text-sm font-semibold text-navy-900">
        Free Quote
      </button>
    </div>
  );
}
