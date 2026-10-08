import type { Metadata } from "next";
import { site } from "@/data/site";

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: `${site.url}/hero_image.png`, width: 2172, height: 724, alt: "Bright Beam Energy rooftop solar in Jammu" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${site.url}/hero_image.png`] },
  };
}
