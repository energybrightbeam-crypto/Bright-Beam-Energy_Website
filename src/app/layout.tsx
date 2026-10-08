// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBar } from "@/components/layout/StickyBar";
import { QuoteProvider } from "@/components/layout/QuoteProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const viewport: Viewport = { themeColor: "#0b2a6f", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Solar Panel Installation in Jammu | Bright Beam Energy", template: "%s" },
  description:
    "Rooftop solar for homes, businesses and housing societies in Jammu, Samba, Vijaypur, Udhampur, Kathua and Reasi. Free site visit and subsidy support.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/hero_image.png", width: 2172, height: 724, alt: "Rooftop solar installation by Bright Beam Energy in Jammu" }],
  },
  twitter: { card: "summary_large_image", images: ["/hero_image.png"] },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={poppins.variable} data-scroll-behavior="smooth">
      <body className="font-sans">
        <QuoteProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyBar />
        </QuoteProvider>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: "en-IN", publisher: { "@id": `${site.url}/#business` } }} />
        {gaId && !gaId.includes("XXXX") && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
