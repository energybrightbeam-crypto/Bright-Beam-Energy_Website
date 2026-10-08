// src/components/layout/Footer.tsx
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { QuoteButton } from "@/components/layout/QuoteProvider";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { site } from "@/data/site";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";

const CONTACT = {
  phones: [{ label: "+91 9419108003", href: "tel:+919419108003" }],
  email: site.email,
  address: site.serviceAddress,
};

// Leave href empty to hide an icon until the page exists.
const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61594671404315", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/bright_beam_energy/", icon: "instagram" },
  { name: "YouTube", href: "", icon: "youtube" },
  { name: "LinkedIn", href: "", icon: "linkedin" },
] as const;

// Every route here exists in your file tree.
const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "PM Surya Ghar Subsidy", href: "/subsidy" },
  { label: "Solar Calculator", href: "/solar-calculator" },
  { label: "Locations", href: "/locations" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
];

const PRIMARY_SLUGS = ["homes", "housing-societies", "commercial"];

function SocialIcon({ name }: { name: (typeof SOCIALS)[number]["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "facebook":
      return (
        <svg {...common}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
  }
}

export function Footer() {
  const offerings = services.filter((s) => PRIMARY_SLUGS.includes(s.slug));
  const otherSolutions = services.filter((s) => !PRIMARY_SLUGS.includes(s.slug));
  const socials = SOCIALS.filter((s) => s.href);

  const linkClass = "text-sm text-white/75 transition hover:text-leaf-500";
  const headingClass = "text-base font-semibold text-white";

  return (
    <footer>
      {/* Top band */}
      <div className="bg-navy-900 text-white">
        <div className={`${wrap} grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-0`}>
          {/* Brand */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-block text-2xl font-bold tracking-tight">
              Bright Beam <span className="text-leaf-500">Energy</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-white/75">
              Rooftop solar for homes, housing societies and businesses across Jammu and nearby areas.
            </p>
            <QuoteButton className="mt-6 rounded-xl bg-leaf-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-leaf-500">
              Get Free Quote
            </QuoteButton>
          </div>

          {/* Offerings */}
          <div className="lg:px-8">
            <h3 className={headingClass}>Our Offerings</h3>
            <ul className="mt-4 space-y-3">
              {offerings.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClass}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>

            {otherSolutions.length > 0 && (
              <>
                <h3 className={`${headingClass} mt-8`}>Solar Solutions</h3>
                <ul className="mt-4 space-y-3">
                  {otherSolutions.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className={linkClass}>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Quick links */}
          <div className="lg:border-l lg:border-white/10 lg:px-8">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className={headingClass}>Contact Us</h3>
            <ul className="mt-4 space-y-4 text-sm text-white/75">
              {CONTACT.phones.map((p) => (
                <li key={p.href} className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-leaf-500" />
                  <a href={p.href} className="transition hover:text-leaf-500">
                    {p.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-leaf-500" />
                <a href={`mailto:${CONTACT.email}`} className="break-all transition hover:text-leaf-500">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-leaf-500" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>

            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-leaf-600"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom band: areas + credits */}
      <div className="bg-navy-950 text-white">
        <div className={`${wrap} py-10`}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Jammu &amp; Kashmir</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className={linkClass}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © <CopyrightYear /> Bright Beam Energy. All rights reserved.
            </p>
            <p>
              Website developed by{" "}
              <a
                href="https://www.snipercoders.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/90 underline-offset-2 transition hover:text-leaf-500 hover:underline"
              >
                snipercoders.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
