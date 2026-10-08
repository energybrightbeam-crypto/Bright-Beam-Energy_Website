import { PageHero } from "@/components/layout/PageHero";
import { AreasGrid } from "@/components/home/Sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solar Installation Areas | Jammu, Samba, Udhampur, Kathua, Reasi",
  description: "Bright Beam Energy installs rooftop solar across Jammu, Samba, Vijaypur, Udhampur, Kathua and Reasi.",
  path: "/locations",
});

export default function Locations() {
  return (
    <>
      <PageHero title="Areas we serve" intro="Based in Jammu. Installing across the region." crumbs={[{ name: "Locations" }]} />
      <AreasGrid />
    </>
  );
}
