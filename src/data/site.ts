// src/data/site.ts
export const site = {
  name: "Bright Beam Energy",
  tagline: "Clean Energy | Brighter Future",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsapp: "919419108003",
  email: "energybrightbeam@gmail.com",
  serviceAddress: "Jakh, Samba, Jammu & Kashmir",
  contacts: [
    { name: "Shiv Kumar", role: "Sales", phone: "8493946288" },
    { name: "Naresh Singh", role: "", phone: "9419108003" },
  ],
  // TODO: get the real address from the client. Must match Google Business Profile exactly.
  address: {
    street: "",
    locality: "Jammu",
    region: "Jammu and Kashmir",
    postalCode: "",
    country: "IN",
  },
  social: {
    instagram: "https://www.instagram.com/bright_beam_energy/",
    facebook: "https://www.facebook.com/profile.php?id=61594671404315",
    gbp: "",
  },
};

export const primaryPhone = site.contacts[0].phone;
export const whatsappLink = (text = "Hi Bright Beam Energy, I want a solar quote.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

// Verified against J&K Govt figures (CM statement in Assembly, Jan 2026 govt release).
// Re-check pmsuryaghar.gov.in before launch: scheme target date is 31 Mar 2027.
export const subsidyJK: Record<number, number> = { 1: 36000, 2: 72000, 3: 94800 };
export const SUBSIDY_MAX = 94800;

// ---- Home page content that must stay TRUE. Edit with real numbers only. ----
// Hero photo in /public.
export const heroImage = "/hero_image.png";

// Show the Google rating pill in the hero only after the client really has reviews.
// Example: { score: "4.8", count: "120+" }
export const googleRating: { score: string; count: string } | null = null;

// Replace with real figures once known, e.g. { value: "250+", label: "Homes Solarized" }.
export const stats = [
  { value: "6", label: "Cities Served" },
  { value: "₹94,800*", label: "Max Subsidy (3 kW, J&K)" },
  { value: "Free", label: "Site Survey" },
  { value: "Local", label: "After-sales Support" },
];
export const reviews: { name: string; location: string; review: string }[] = [];
