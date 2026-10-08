import { PageHero } from "@/components/layout/PageHero";
import { ServicesGrid } from "@/components/home/Sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solar Services in Jammu | Bright Beam Energy",
  description: "Residential, commercial, housing society, on-grid and off-grid solar installation in the Jammu region.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <PageHero title="Solar services" intro="Residential, commercial and society installations, on-grid and off-grid." crumbs={[{ name: "Services" }]} />
      <ServicesGrid />
    </>
  );
}
