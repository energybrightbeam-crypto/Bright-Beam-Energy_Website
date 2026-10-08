import type { Faq } from "./services";

export type Location = {
  slug: string;
  name: string;
  district: string;
  metaDescription: string;
  intro: string;
  points: string[];
  nearby: string[];
  faqs: Faq[];
};

// DRAFT COPY. Replace/extend with real projects and local detail from the client.
// Each city must stay genuinely different, or Google treats them as doorway pages.
export const locations: Location[] = [
  {
    slug: "jammu",
    name: "Jammu",
    district: "Jammu",
    metaDescription:
      "Solar panel installation in Jammu city with PM Surya Ghar subsidy help and JPDCL net metering support. Free site visit from Bright Beam Energy.",
    intro:
      "Jammu has long, hot summers when air-conditioning pushes bills up, and that is exactly when rooftop solar generates the most. Our team is based here, so site visits, net metering paperwork and service calls are handled locally.",
    points: [
      "Summer bills are the biggest savings opportunity",
      "Net metering applications go through JPDCL, and we assist with the process",
      "Typical city plots suit 2 kW to 5 kW home systems",
    ],
    nearby: ["Gandhi Nagar", "Trikuta Nagar", "Channi Himmat", "Nagrota", "Bishnah", "R S Pura", "Akhnoor"],
    faqs: [
      { q: "What does rooftop solar cost in Jammu?", a: "The installed price depends on system size, equipment, roof structure and whether battery backup is included. Share a recent electricity bill and arrange a roof survey for a written quote. Our solar calculator can provide a preliminary estimate." },
      { q: "Where can I check the solar system subsidy and price list for Jammu?", a: "The subsidy is separate from the installation price and depends on current scheme rules and eligibility. See our PM Surya Ghar guide for indicative J&K support by capacity, then verify the current amount and application steps on the official national portal." },
      { q: "How do I find a reliable solar panel dealer or installer in Jammu?", a: "Ask for a roof survey and compare written proposals for panel and inverter models, mounting, safety equipment, utility steps, warranties and service support. Call Bright Beam Energy at +91 94191 08003 to discuss your bill and arrange a site assessment." },
      { q: "How do I apply online for solar subsidy in Jammu?", a: "Eligible residential consumers should apply and track their PM Surya Ghar request on the official national portal, following the current DISCOM and registered-vendor process. JAKEDA also publishes J&K solar scheme information; check the relevant programme requirements before submitting an application." },
      { q: "What is the price of solar lights under JAKEDA?", a: "Solar street lights are separate from rooftop systems, and cost varies with the light specification, battery, pole and installation. Contact us to confirm whether the required product is available and request a quote for its specifications." },
      { q: "Do you handle net metering with JPDCL?", a: "Yes. We help prepare and submit the net metering application and coordinate meter installation." },
      { q: "Do you offer a free site visit in Jammu?", a: "Yes. Request a quote and we will arrange a visit to measure your roof and review your bill." },
    ],
  },
  {
    slug: "samba",
    name: "Samba",
    district: "Samba",
    metaDescription:
      "Rooftop solar installation in Samba district for homes, farms and small industry. Subsidy support and local service from Bright Beam Energy.",
    intro:
      "Samba combines residential colonies with growing industrial and farm activity. That mix means larger plots, bigger roofs and good scope for both home and commercial systems.",
    points: [
      "Larger plots often allow bigger systems or ground-mount options",
      "Industrial and agricultural units can offset heavy daytime load",
      "Close to our Jammu base for quick service",
    ],
    nearby: ["Vijaypur", "Ghagwal", "Bari Brahmana", "Purmandal", "Rajpura"],
    faqs: [
      { q: "Do you serve villages around Samba?", a: "Yes, we cover Samba town and surrounding villages. Contact us with your location to confirm." },
      { q: "Is solar suitable for small factories in Samba?", a: "Yes, if the unit runs mostly in daytime. We assess load and roof space before recommending a size." },
    ],
  },
  {
    slug: "vijaypur",
    name: "Vijaypur",
    district: "Samba",
    metaDescription:
      "Solar installation in Vijaypur (Samba district) for homes and businesses. Subsidy guidance and after-sales support by Bright Beam Energy.",
    intro:
      "Vijaypur is a growing town in Samba district on the Jammu–Pathankot highway corridor. Homeowners and small businesses here can use rooftop solar to bring down monthly bills, with our team a short drive away.",
    points: [
      "Highway-facing shops and showrooms have strong daytime load",
      "Homes can use the PM Surya Ghar subsidy for on-grid systems",
      "Same-district coverage as our Samba service",
    ],
    nearby: ["Samba", "Ghagwal", "Rajpura", "Chak Bhagwana"],
    faqs: [
      { q: "Do you install solar in Vijaypur?", a: "Yes. Vijaypur is in our regular service area. Request a free site visit to get a proposal." },
    ],
  },
  {
    slug: "udhampur",
    name: "Udhampur",
    district: "Udhampur",
    metaDescription:
      "Solar panels for homes and businesses in Udhampur. Systems designed for cooler climate and hilly roofs. Bright Beam Energy.",
    intro:
      "Udhampur has cooler weather and many sloping or constrained roofs. We design for roof pitch, shading from terrain and winter conditions so the system performs through the year.",
    points: [
      "Roof orientation and tilt matter more on hill sites",
      "Panels are mounted to handle wind and winter weather",
      "Hybrid systems are an option where outages are frequent",
    ],
    nearby: ["Ramnagar", "Chenani", "Majalta", "Panchari"],
    faqs: [
      { q: "Does solar work in colder areas like Udhampur?", a: "Yes. Panels work well in cool, clear weather. Output drops on cloudy or snowy days, which we account for when sizing." },
    ],
  },
  {
    slug: "kathua",
    name: "Kathua",
    district: "Kathua",
    metaDescription:
      "Solar installation in Kathua for homes, farms and commercial buildings. High-sunlight plains, subsidy help, local support. Bright Beam Energy.",
    intro:
      "Kathua sits in the plains with strong sunshine for most of the year, which is good for solar yield. Demand comes from homes, farms and commercial buildings along the highway.",
    points: [
      "Strong sunshine supports good generation",
      "Agricultural pump and farm loads can be offset with solar",
      "Commercial buildings along the highway suit rooftop systems",
    ],
    nearby: ["Hiranagar", "Billawar", "Basohli", "Lakhanpur", "Bani"],
    faqs: [
      { q: "Can you power a farm tubewell with solar?", a: "Solar can offset pump load. We review motor rating, usage hours and supply type before recommending a design." },
    ],
  },
  {
    slug: "reasi",
    name: "Reasi",
    district: "Reasi",
    metaDescription:
      "Solar power for homes, hotels and remote sites in Reasi and Katra. Off-grid, hybrid and on-grid options from Bright Beam Energy.",
    intro:
      "Reasi district is hilly, with remote homes and a busy hospitality belt around Katra. Access, terrain and supply reliability shape the design, so we often propose hybrid or off-grid options here.",
    points: [
      "Hotels and guest houses near Katra have steady daytime demand",
      "Off-grid and hybrid options suit remote or outage-prone sites",
      "Transport and installation are planned around hill access",
    ],
    nearby: ["Katra", "Mahore", "Arnas", "Pouni"],
    faqs: [
      { q: "Do you install in remote hill villages?", a: "We assess each site. Access and logistics can affect cost and timing, and we explain this in the quote." },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
