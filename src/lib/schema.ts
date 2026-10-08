import { site } from "@/data/site";
import { locations } from "@/data/locations";
import type { Faq } from "@/data/services";

export function localBusinessSchema() {
  const a = site.address;
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: "Rooftop solar installation for homes, businesses and housing societies in the Jammu region.",
    url: site.url,
    telephone: `+91${site.contacts[0].phone}`,
    email: site.email,
    image: `${site.url}/hero_image.png`,
    logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    knowsAbout: ["Residential rooftop solar", "Commercial solar", "On-grid solar", "Off-grid solar", "Solar battery backup", "PM Surya Ghar rooftop solar scheme"],
    ...(a.street
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: a.street,
            addressLocality: a.locality,
            addressRegion: a.region,
            postalCode: a.postalCode,
            addressCountry: a.country,
          },
        }
      : {}),
    areaServed: locations.map((l) => ({ "@type": "City", name: l.name })),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function serviceSchema(service: { title: string; intro: string; short: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.intro || service.short,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: locations.map((location) => ({ "@type": "City", name: location.name })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
