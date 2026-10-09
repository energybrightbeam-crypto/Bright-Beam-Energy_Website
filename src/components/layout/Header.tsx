"use client";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Calculator, Landmark, Info, PhoneCall, FileText } from "lucide-react";
import clsx from "clsx";
import { offerings, solutions } from "@/data/services";
import { locations } from "@/data/locations";
import { useQuote } from "./QuoteProvider";

type Item = { label: string; href: string; icon?: React.ReactNode };
type Menu = { id: string; label: string; items: Item[]; cols?: boolean };

const menus: Menu[] = [
  { id: "offerings", label: "Our Offerings", items: offerings.map((s) => ({ label: s.title, href: `/services/${s.slug}`, icon: <s.icon size={18} /> })) },
  { id: "solutions", label: "Solar Solutions", items: solutions.map((s) => ({ label: s.title, href: `/services/${s.slug}`, icon: <s.icon size={18} /> })) },
  { id: "cities", label: "Cities", cols: true, items: locations.map((l) => ({ label: l.name, href: `/locations/${l.slug}` })) },
  {
    id: "more",
    label: "More",
    items: [
      { label: "Solar Calculator", href: "/solar-calculator", icon: <Calculator size={18} /> },
      { label: "PM Surya Ghar Yojana", href: "/subsidy", icon: <Landmark size={18} /> },
      { label: "About Us", href: "/about", icon: <Info size={18} /> },
      { label: "Contact", href: "/contact", icon: <PhoneCall size={18} /> },
    ],
  },
];

export function Header() {
  const { open: openQuote } = useQuote();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setDrawer(false);
        setMobileSection(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const closeAll = () => {
    setOpenMenu(null);
    setDrawer(false);
    setMobileSection(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <Link href="/" onClick={closeAll} className="flex min-w-0 items-center gap-2" aria-label="Bright Beam Energy home">
          <Image src="/logo.png" alt="Bright Beam Energy logo" width={56} height={56} priority className="size-10 shrink-0 object-contain sm:size-12 lg:size-14" />
          <span className="truncate text-xs font-bold leading-tight text-navy-900 sm:text-lg">
            Bright Beam <span className="text-leaf-600">Energy</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav ref={navRef} className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Link href="/blogs" className="rounded-lg px-3 py-2 text-[15px] font-medium text-navy-900 hover:bg-mist">Blogs</Link>
          <Link href="/quotation" className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-medium text-navy-900 hover:bg-mist"><FileText size={16} />Quotation</Link>
          {menus.map((m) => (
            <div key={m.id} className="relative">
              <button
                type="button"
                aria-expanded={openMenu === m.id}
                onClick={() => setOpenMenu(openMenu === m.id ? null : m.id)}
                className={clsx(
                  "flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-medium text-navy-900 hover:bg-mist",
                  openMenu === m.id && "bg-mist",
                )}
              >
                {m.label}
                <ChevronDown size={16} className={clsx("transition", openMenu === m.id && "rotate-180")} />
              </button>
              {openMenu === m.id && (
                <div className={clsx("absolute right-0 top-full mt-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl", m.cols ? "w-72" : "w-64")}>
                  <ul className={clsx(m.cols && "grid grid-cols-2 gap-1")}>
                    {m.items.map((it) => (
                      <li key={it.href}>
                        <Link href={it.href} onClick={closeAll} className="flex items-center gap-3 rounded-xl bg-mist/60 px-3 py-3 text-[15px] text-slate-700 hover:bg-mist hover:text-navy-900">
                          {it.icon && <span className="text-navy-700">{it.icon}</span>}
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={openQuote}
            className="ml-2 rounded-xl border-2 border-navy-900 px-5 py-2.5 text-[15px] font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white"
          >
            Get Free Quote
          </button>
        </nav>

        {/* mobile toggle */}
        <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
          <button type="button" onClick={openQuote} className="rounded-lg bg-leaf-600 px-2.5 py-2 text-xs font-semibold text-white sm:px-3.5 sm:text-sm">
            Free Quote
          </button>
          <button type="button" aria-label="Open menu" aria-controls="mobile-navigation" aria-expanded={drawer} onClick={() => { setMobileSection("offerings"); setDrawer(true); }} className="flex size-11 items-center justify-center rounded-lg text-navy-900 hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {drawer && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button type="button" aria-label="Close menu" className="absolute inset-0 cursor-default bg-navy-950/60" onClick={closeAll} />
          <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Main navigation" className="absolute inset-y-0 left-0 flex h-dvh max-h-dvh w-[88%] max-w-sm flex-col overflow-hidden bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <Link href="/" onClick={closeAll} className="flex items-center gap-2" aria-label="Bright Beam Energy home">
                <Image src="/logo.png" alt="" width={40} height={40} className="size-10 object-contain" />
                <span className="text-sm font-bold text-navy-900">Bright Beam <span className="text-leaf-600">Energy</span></span>
              </Link>
              <button type="button" aria-label="Close menu" onClick={closeAll} className="flex size-10 items-center justify-center rounded-full hover:bg-mist focus-visible:outline-2 focus-visible:outline-navy-700">
                <X size={24} />
              </button>
            </div>
            <nav aria-label="Mobile" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-4">
              <div className="grid grid-cols-2 gap-2 py-4">
                {[
                  { label: "Blogs", href: "/blogs" },
                  { label: "Quotation", href: "/quotation" },
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Locations", href: "/locations" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeAll} className="rounded-xl bg-mist px-3 py-3 text-center text-sm font-semibold text-navy-900 hover:bg-navy-900 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
              <ul className="divide-y divide-slate-100 border-t border-slate-100">
              {menus.map((m) => (
                <li key={m.id}>
                  <button
                    type="button"
                    aria-expanded={mobileSection === m.id}
                    onClick={() => setMobileSection(mobileSection === m.id ? null : m.id)}
                    className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-navy-900"
                  >
                    {m.label}
                    <ChevronDown size={18} className={clsx("transition", mobileSection === m.id && "rotate-180")} />
                  </button>
                  {mobileSection === m.id && (
                    <ul className="mb-3 space-y-1">
                      {m.items.map((it) => (
                        <li key={it.href}>
                          <Link href={it.href} onClick={closeAll} className="flex min-h-11 items-center gap-3 rounded-xl bg-mist px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                            {it.icon && <span className="text-navy-700">{it.icon}</span>}
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              </ul>
            </nav>
            <button
              type="button"
              onClick={() => { closeAll(); openQuote(); }}
              className="mx-5 mb-[max(1.25rem,env(safe-area-inset-bottom))] mt-2 min-h-12 shrink-0 rounded-2xl bg-gradient-to-r from-navy-700 to-navy-950 py-3 font-semibold text-white"
            >
              Get Free Quote
            </button>
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
}
