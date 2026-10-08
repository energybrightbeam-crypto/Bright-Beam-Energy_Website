import { Building, Building2, House, BatteryCharging, Zap, type LucideIcon } from "lucide-react";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  group: "offering" | "solution";
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  short: string;
  icon: LucideIcon;
  intro: string;
  benefits: string[];
  idealFor: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "homes",
    group: "offering",
    title: "Homes",
    h1: "Rooftop Solar for Homes in Jammu",
    metaTitle: "Rooftop Solar for Homes in Jammu | Bright Beam Energy",
    metaDescription:
      "Residential rooftop solar in Jammu with PM Surya Ghar subsidy support, site survey, installation and after-sales service from Bright Beam Energy.",
    short: "Cut your home electricity bill with a rooftop system sized for your usage.",
    icon: House,
    intro:
      "A residential rooftop system generates power during the day and reduces what you draw from the grid. We size the system from your actual monthly bill and roof space, handle the subsidy paperwork, and support you after installation.",
    benefits: [
      "System sized from your real bill, not a generic package",
      "Help with PM Surya Ghar subsidy registration and documents",
      "Net metering application support with JPDCL",
      "Local team for service after installation",
    ],
    idealFor: ["Independent houses and kothis", "Villas with open terrace", "Homes with monthly bills above ₹1,500"],
    faqs: [
      { q: "What is the price of a solar system in Jammu?", a: "There is no single price for every home. The total depends on system capacity, panel and inverter models, roof structure, electrical work and whether you need batteries. Share your latest bill and PIN code for a site-specific written quote; you can also use our solar calculator for an initial estimate." },
      { q: "Is there a solar system price list with subsidy in Jammu?", a: "The subsidy depends on current PM Surya Ghar and J&K eligibility rules, while the system price depends on the equipment and site. Our subsidy page shows indicative J&K support by capacity; confirm the latest amount on the official portal before budgeting. The subsidy is not a fixed system price." },
      { q: "How do I choose the best solar installer in Jammu?", a: "Compare written proposals after a roof survey. Check equipment models, system design, safety and mounting details, utility application support, warranties, payment terms and local after-sales contact. Bright Beam Energy can arrange a site assessment so you can review a proposal for your home." },
      { q: "Where can I find solar panel dealers in Jammu?", a: "For a rooftop system, compare installers that can assess the roof and provide equipment specifications, installation, utility paperwork guidance and after-sales support—not only panel supply. Contact Bright Beam Energy on +91 94191 08003 to ask about a site visit and a written proposal." },
      { q: "What is the solar panel price in Jammu, and whom can I contact?", a: "Panel-only prices vary by technology, wattage, brand and availability, while a complete installed system also includes an inverter, mounting, wiring and safety equipment. For a home-specific estimate, call Bright Beam Energy at +91 94191 08003 or request a quote online." },
      { q: "How can I apply online for a JAKEDA or PM Surya Ghar solar subsidy?", a: "For eligible residential rooftop solar support under PM Surya Ghar, begin and track the application through the national PM Surya Ghar portal and follow the current DISCOM and registered-vendor steps. JAKEDA publishes Jammu and Kashmir solar programme information and guidelines; check which programme applies to your property before applying." },
      { q: "How much do JAKEDA solar lights cost?", a: "Solar street or standalone lights are different products from a rooftop solar system, and price depends on light output, battery, pole, installation and warranty. We do not list a standard JAKEDA solar-light price here; contact us to confirm product availability and request a specification-based quote." },
      { q: "How big a system does my home need?", a: "It depends on your monthly units and shadow-free roof area. Share your last electricity bill and we will suggest a size at the free site visit. Most homes fall between 2 kW and 5 kW." },
      { q: "Do I get a subsidy for a home system in Jammu?", a: "Eligible residential consumers in J&K can get central plus UT subsidy under PM Surya Ghar, up to ₹94,800 for a 3 kW system. See our subsidy page for the breakdown." },
    ],
  },
  {
    slug: "commercial",
    group: "offering",
    title: "Commercial",
    h1: "Commercial Solar Installation in Jammu",
    metaTitle: "Commercial Solar Installation in Jammu | Bright Beam Energy",
    metaDescription:
      "Commercial and industrial rooftop solar for shops, hotels, schools and factories in Jammu region. Free site assessment from Bright Beam Energy.",
    short: "Lower operating costs for shops, hotels, schools, clinics and small industry.",
    icon: Building2,
    intro:
      "Businesses with daytime power use benefit most from solar. We assess your load, roof or ground space and tariff category, then design a system that targets your highest-cost units.",
    benefits: [
      "Design based on your daytime load and tariff",
      "Structure and wiring planned for long-term outdoor use",
      "Net metering support where applicable",
      "Annual maintenance plans",
    ],
    idealFor: ["Shops and showrooms", "Hotels and guest houses", "Schools, hospitals and clinics", "Small factories and cold stores"],
    faqs: [
      { q: "Does commercial solar get the PM Surya Ghar subsidy?", a: "No. The residential subsidy applies to household consumers. Commercial systems are justified on bill savings and may qualify for depreciation benefits. Check with your CA for the current rules." },
      { q: "How long does installation take?", a: "Timelines depend on size and approvals. We give a schedule after the site survey." },
    ],
  },
  {
    slug: "housing-societies",
    group: "offering",
    title: "Housing Societies",
    h1: "Solar for Housing Societies & Apartments in Jammu",
    metaTitle: "Solar for Housing Societies in Jammu | Bright Beam Energy",
    metaDescription:
      "Solar power for RWAs, apartments and housing societies in Jammu to reduce common-area electricity bills. Free feasibility visit.",
    short: "Reduce common-area bills for lifts, pumps and lighting.",
    icon: Building,
    intro:
      "Common-area loads such as lifts, water pumps, corridor and street lighting run for long hours. A society rooftop system can offset a large part of that bill and lower monthly maintenance charges.",
    benefits: [
      "Sized for common-area load",
      "Clear cost and savings summary to present to the RWA",
      "Neat installation planned around water tanks and shade",
      "Post-installation service contract",
    ],
    idealFor: ["RWAs and apartment complexes", "Gated colonies", "Co-operative housing societies"],
    faqs: [
      { q: "Who approves the project?", a: "Typically the managing committee or general body. We can prepare a savings proposal and attend a meeting to answer questions." },
    ],
  },
  {
    slug: "on-grid",
    group: "solution",
    title: "On-Grid Solar",
    h1: "On-Grid Solar Systems in Jammu",
    metaTitle: "On-Grid Solar System in Jammu | Bright Beam Energy",
    metaDescription:
      "Grid-connected solar with net metering in Jammu. Lower your electricity bill without batteries. Installation by Bright Beam Energy.",
    short: "Grid-connected, battery-free, and the lowest-cost route to bill savings.",
    icon: Zap,
    intro:
      "An on-grid system feeds the solar power you do not use back into the grid through a net meter. There are no batteries to maintain, so cost and upkeep stay low. This is the type covered by the PM Surya Ghar subsidy.",
    benefits: ["Lowest upfront cost per kW", "Net metering credits for surplus power", "Minimal maintenance", "Eligible for PM Surya Ghar (residential)"],
    idealFor: ["Homes and businesses with reliable grid supply", "Anyone focused on bill reduction"],
    faqs: [
      { q: "Will an on-grid system work during a power cut?", a: "A standard on-grid inverter switches off during a grid outage for safety reasons. If you need backup, ask us about a hybrid system with batteries." },
    ],
  },
  {
    slug: "off-grid",
    group: "solution",
    title: "Off-Grid Solar",
    h1: "Off-Grid & Hybrid Solar Systems in Jammu Region",
    metaTitle: "Off-Grid Solar System in Jammu | Bright Beam Energy",
    metaDescription:
      "Battery-backed off-grid and hybrid solar for homes, farms and remote locations in Jammu, Udhampur, Kathua and Reasi.",
    short: "Battery-backed power for remote sites and frequent outages.",
    icon: BatteryCharging,
    intro:
      "Off-grid and hybrid systems store solar energy in batteries so you have power when the grid is down or unavailable. They suit hilly and remote locations and homes that face frequent outages.",
    benefits: ["Power without depending on the grid", "Backup for essential loads", "Suitable for remote and hilly sites", "Hybrid option to combine grid and battery"],
    idealFor: ["Remote homes and farms", "Hill locations with unreliable supply", "Homes wanting outage backup"],
    faqs: [
      { q: "Is the subsidy available for off-grid systems?", a: "The PM Surya Ghar subsidy is for grid-connected residential rooftop systems. Off-grid systems are generally not covered. Confirm current rules with us before deciding." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const offerings = services.filter((s) => s.group === "offering");
export const solutions = services.filter((s) => s.group === "solution");
