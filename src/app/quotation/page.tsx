import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { QuotationWorkspace } from "./workspace";

export const metadata: Metadata = buildMetadata({
  title: "Create a Solar Quotation or Invoice | Bright Beam Energy",
  description: "Prepare a customized solar quotation or invoice for a Bright Beam Energy customer.",
  path: "/quotation",
});

export default function QuotationPage() {
  return <QuotationWorkspace />;
}
