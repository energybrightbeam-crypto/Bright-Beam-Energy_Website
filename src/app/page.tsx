// src/app/page.tsx
import { HomeHero } from "@/components/home/HomeHero";
import { ReadMore } from "@/components/home/HomeExtras";
import {
  TrustStrip,
  GetSolarFor,
  Process,
  WhyTrust,
  StatsSection,
  AreasGrid,
  ReviewsSection,
  FaqSection,
} from "@/components/home/Sections";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solar Panel Installation in Jammu Division | Bright Beam Energy",
  description: "Plan rooftop solar for homes, businesses and housing societies across Jammu Division. Bright Beam Energy offers local site surveys, installation and support.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <GetSolarFor />
      <Process />
      <WhyTrust />
      <StatsSection />
      <AreasGrid />
      <ReviewsSection allowPlaceholders />
      <FaqSection faqs={homeFaqs} />
      <ReadMore />
    </>
  );
}
