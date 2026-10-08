export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  tag: string;
  sections: BlogSection[];
};

// Original, locally useful guides for households and businesses across Jammu Division.
export const blogs: BlogPost[] = [
  {
    slug: "rooftop-solar-for-homes-in-jammu",
    title: "A Homeowner’s Guide to Rooftop Solar in Jammu",
    excerpt: "Learn how to assess your roof, electricity use and installation plan before choosing a home solar system in Jammu.",
    metaTitle: "Rooftop Solar for Homes in Jammu: A Practical Guide",
    metaDescription: "Planning rooftop solar for your Jammu home? Learn what to check about your bill, roof, system design, net metering and installation.",
    image: "/handle.png",
    tag: "Home solar",
    sections: [
      { heading: "Start with your electricity use", paragraphs: ["The right rooftop system begins with the electricity your household uses, not a standard package size. Review several recent bills and note seasonal changes. Homes that use more power during sunny daytime hours can use more of their own solar generation directly.", "In Jammu, summer cooling can change household demand. A site assessment should consider your usage pattern as well as the available roof area, shade, water tanks and access for installation."] },
      { heading: "Check the roof before comparing proposals", paragraphs: ["A roof can look open from the ground and still have shade from parapets, trees or nearby buildings. Ask the installer to assess usable area, orientation, structure and safe maintenance access. A clear layout helps explain how many panels fit and where equipment will go.", "Compare proposals by looking at system capacity, panel and inverter specifications, mounting approach, expected generation assumptions and what is included in installation. Ask for assumptions in writing so you can compare like with like."] },
      { heading: "Plan approvals and aftercare", paragraphs: ["For a grid-connected home system, ask who will guide the relevant application and net metering steps with the electricity provider. Scheme eligibility, process and timelines can change, so confirm current requirements through the official PM Surya Ghar portal before making a financial decision.", "Before signing, get a clear handover plan, warranty documents and a local contact for service questions. A well-planned project should make the next steps understandable from survey through commissioning."] },
    ],
  },
  {
    slug: "pm-surya-ghar-subsidy-jammu-guide",
    title: "PM Surya Ghar in Jammu: What Homeowners Should Prepare",
    excerpt: "A plain-language checklist for understanding the residential rooftop solar scheme and preparing for an application in Jammu and Kashmir.",
    metaTitle: "PM Surya Ghar Subsidy in Jammu: Homeowner Checklist",
    metaDescription: "Explore a practical PM Surya Ghar checklist for Jammu homeowners, including eligibility checks, documents, installer selection and official verification.",
    image: "/hassle-free-paperwork.png",
    tag: "Subsidy guide",
    sections: [
      { heading: "Verify the current scheme rules", paragraphs: ["PM Surya Ghar is a central residential rooftop solar programme. Eligibility and application requirements depend on the current scheme rules and the applicant’s electricity connection. Check the official portal and your distribution utility’s instructions before choosing equipment or paying an advance.", "Treat subsidy figures and timelines you see in older articles as potentially outdated. Ask for a written explanation of which parts of your proposed system are eligible and which costs, if any, are outside the scheme."] },
      { heading: "Keep your application details consistent", paragraphs: ["Before beginning, gather the consumer and connection details requested by the official portal. The name and service information should match the electricity account. Keep copies of the application reference, approved system details, invoices and commissioning records.", "Ask your installer to explain which steps they will assist with and which actions must be completed by you. This makes responsibilities clear and helps you track progress if a document or approval is needed."] },
      { heading: "Use an eligible installation path", paragraphs: ["Confirm that the proposed vendor and equipment meet the current programme requirements. Do not rely only on a verbal promise of a subsidy or a guaranteed payout date. The official scheme portal is the source for the latest process, approved vendors and status updates.", "For homeowners in Jammu Division, a local installer can help coordinate a roof visit and explain utility paperwork. Keep the final proposal, payment terms and warranty details in writing, regardless of whether you apply for a subsidy."] },
    ],
  },
  {
    slug: "how-to-size-home-solar-system-jammu",
    title: "How to Choose a Solar System Size for Your Jammu Home",
    excerpt: "Understand the bill, daytime load and roof checks that help determine a sensible rooftop solar system size.",
    metaTitle: "How to Size a Home Solar System in Jammu",
    metaDescription: "Find out how electricity bills, daytime use, roof shade and future plans affect rooftop solar sizing for homes in Jammu Division.",
    image: "/free-site-survey.png",
    tag: "System sizing",
    sections: [
      { heading: "Use bills as a starting point", paragraphs: ["Collect a few recent electricity bills and note the units used in each billing period. One month may not represent the whole year, especially when fans or air conditioning increase summer consumption. A solar designer can use this history to discuss a suitable capacity range.", "Your bill also helps identify the tariff and connection details that may matter for the application. Share accurate information rather than estimating from memory."] },
      { heading: "Match generation to when you use power", paragraphs: ["Solar panels generate during daylight. Appliances that run in the afternoon can use that energy directly, while evening demand depends more on the grid or a suitably designed storage system. A battery is a separate design choice and is not automatically included in a standard grid-connected system.", "Think about regular daytime loads such as refrigeration, water pumps, office equipment or cooling. Describe a typical weekday to your installer so the proposal reflects real use."] },
      { heading: "Let the roof set practical limits", paragraphs: ["Shade, roof direction, obstructions and safe access all affect how much usable panel area is available. The installer should show a roof layout and explain assumptions about generation rather than promising the same output for every property.", "For a home in Jammu, Samba, Kathua or Udhampur, a site survey is a useful way to turn bill history and roof conditions into a clear, comparable proposal."] },
    ],
  },
  {
    slug: "solar-net-metering-jpdcl-jammu",
    title: "Net Metering for Rooftop Solar in Jammu: The Basics",
    excerpt: "Understand how a grid-connected solar system, a bidirectional meter and the utility approval process fit together.",
    metaTitle: "Rooftop Solar Net Metering in Jammu: What to Know",
    metaDescription: "Learn the basics of rooftop solar net metering in Jammu and what to ask about utility applications, meter installation and billing.",
    image: "/quality-components.png",
    tag: "Net metering",
    sections: [
      { heading: "What a net meter does", paragraphs: ["A grid-connected rooftop system can supply power to your home when the sun is available. When generation exceeds the home’s use, eligible surplus may flow to the grid; when solar output is low, the home draws electricity from the grid. A bidirectional meter records the relevant flows under the applicable utility arrangement.", "The way credits and charges appear on a bill depends on current regulations, the connection and the approved system. Ask your distribution utility or installer to explain the billing method that applies to your account."] },
      { heading: "Approvals come before assumptions", paragraphs: ["Grid connection and meter steps require utility processes. Ask who prepares the application, which documents are needed, and whether the proposed capacity is suitable for your sanctioned load and connection. For Jammu consumers, confirm the current instructions with the relevant distribution utility.", "Do not assume a system can export power or receive credits before the approvals and meter configuration are complete. Keep copies of applications and approval messages for your records."] },
      { heading: "Questions to ask your installer", paragraphs: ["A good proposal should separate installation work from utility timelines, since approval and meter scheduling can depend on the utility. Ask what the installer will handle, what you must submit, and how you will know when the system can be commissioned.", "Net metering is one part of a rooftop solar project. Roof suitability, equipment quality, safe wiring and a clear handover plan still matter for a reliable installation."] },
    ],
  },
  {
    slug: "solar-for-shops-and-businesses-jammu",
    title: "Commercial Rooftop Solar for Jammu Businesses",
    excerpt: "A guide for shops, hotels, clinics and offices considering solar to offset daytime electricity demand.",
    metaTitle: "Commercial Rooftop Solar for Businesses in Jammu",
    metaDescription: "Learn how Jammu businesses can assess daytime demand, roof space, tariffs and project proposals for commercial rooftop solar.",
    image: "/commercial.png",
    tag: "Business solar",
    sections: [
      { heading: "Look at the working day", paragraphs: ["Commercial solar is easiest to evaluate when you understand when the site uses electricity. Review bills and operating hours, then identify steady daytime loads such as refrigeration, lighting, computers, pumps or air conditioning.", "A shop in Jammu city, a hotel near Katra and a workshop in Samba may all have different usage patterns. A proposal should reflect the business’s actual load and utility tariff rather than applying a residential package to a commercial connection."] },
      { heading: "Check roof use and business continuity", paragraphs: ["The survey should cover roof condition, access, shade, equipment placement and any planned building work. For rented premises, get written permission from the property owner and agree who maintains the installation.", "Ask how installation work will be scheduled around business hours, what safety arrangements are included, and whether any planned shutdowns are required. These details help avoid surprises during implementation."] },
      { heading: "Compare the full proposal", paragraphs: ["Review capacity, equipment models, mounting, protection devices, expected generation assumptions, warranties and service terms. Ask for the estimated project cost and savings method with assumptions clearly stated. Business tax treatment can depend on individual circumstances, so confirm it with a qualified accountant.", "For sites across Jammu Division, a local survey can also clarify transport, access and service arrangements before a purchase decision."] },
    ],
  },
  {
    slug: "hybrid-solar-and-battery-backup-jammu",
    title: "On-Grid, Hybrid or Off-Grid Solar: Which Fits Your Jammu Property?",
    excerpt: "Compare common solar system types by grid availability, backup needs and how your property uses power.",
    metaTitle: "On-Grid vs Hybrid Solar in Jammu: Choosing a System",
    metaDescription: "Compare on-grid, hybrid and off-grid solar for homes and businesses in Jammu Division based on backup needs and grid access.",
    image: "/home.png",
    tag: "System types",
    sections: [
      { heading: "On-grid systems focus on bill offset", paragraphs: ["An on-grid system works alongside the electricity network and typically does not provide backup during a grid outage. Its design is often considered by homes and businesses whose main goal is to offset daytime electricity use.", "The system needs the applicable approvals and meter arrangement. Ask the installer to explain what happens when the grid is unavailable and how the system will be commissioned safely."] },
      { heading: "Hybrid systems add storage options", paragraphs: ["A hybrid system combines solar with a battery and grid connection. It can be designed to supply selected loads during some outages, but backup duration depends on battery capacity, inverter design and which appliances are connected.", "List the essential loads you want to support, such as lights, internet, fans or a refrigerator. A designer can estimate the storage needed and explain the trade-offs in cost and runtime."] },
      { heading: "Off-grid systems need careful load planning", paragraphs: ["Off-grid systems are designed for properties without dependable grid access. They rely on storage and system sizing must account for usage, seasonal solar conditions and periods of low generation. This makes a detailed site and load assessment especially important.", "In hill areas around Reasi, Ramban, Doda or Kishtwar, access and weather can affect installation planning. Ask for realistic backup assumptions and a maintenance plan before choosing a system type."] },
    ],
  },
  {
    slug: "roof-shade-and-panel-placement-jammu",
    title: "Roof Shade and Solar Panel Placement in Jammu Homes",
    excerpt: "Learn why shade, obstructions and roof layout matter when planning a rooftop solar installation.",
    metaTitle: "Solar Panel Placement and Roof Shade in Jammu",
    metaDescription: "Understand how trees, water tanks, parapets and roof direction affect solar panel placement for homes across Jammu Division.",
    image: "/building.png",
    tag: "Roof planning",
    sections: [
      { heading: "Small shadows can affect a layout", paragraphs: ["Trees, neighboring buildings, parapets, water tanks and antennae can cast shadows at different times of day. A roof visit should identify these obstructions and consider how their shadows move, instead of relying on a single glance from the street.", "The panel layout should also leave practical space for access, drainage and future roof maintenance. Ask the installer to show which roof areas are usable and which are excluded."] },
      { heading: "Orientation is only one part of the design", paragraphs: ["Panel direction and tilt matter, but there is no single layout that suits every roof. Structural condition, mounting method, local wind exposure, shade and the shape of the available area all affect the design.", "On sloping or irregular roofs in Udhampur and other hill districts, the installer should explain how the mounting will be fixed and how the structure has been assessed. Do not accept a layout that ignores roof condition or safe access."] },
      { heading: "Get the design documented", paragraphs: ["A useful proposal includes a clear drawing or marked roof plan, equipment locations and a summary of the generation assumptions. This gives you a reference for installation day and makes it easier to discuss any changes before work starts.", "If trees may grow or a nearby construction project is underway, mention it during the survey. Planning around likely future shade can prevent avoidable performance issues."] },
    ],
  },
  {
    slug: "solar-maintenance-checklist-jammu",
    title: "A Simple Rooftop Solar Maintenance Checklist for Jammu",
    excerpt: "Practical checks for keeping a rooftop solar system in good condition without compromising electrical safety.",
    metaTitle: "Rooftop Solar Maintenance Checklist for Jammu Homes",
    metaDescription: "Use this practical checklist to monitor solar generation, keep panels clear and arrange safe servicing in Jammu’s changing seasons.",
    image: "/local-after-sales.png",
    tag: "Maintenance",
    sections: [
      { heading: "Monitor the system regularly", paragraphs: ["Use the inverter display or monitoring app, if provided, to notice changes in generation. Compare similar sunny days rather than expecting identical output every day; clouds, temperature, shade and seasonal daylight all affect production.", "If the monitoring system shows a persistent fault or generation drops unexpectedly, record the message and contact your installer. Do not open electrical equipment or attempt to repair wiring yourself."] },
      { heading: "Keep the roof and panels safe", paragraphs: ["Dust, leaves and bird droppings can collect on panels. Follow the manufacturer’s cleaning guidance and arrange safe access before any cleaning. Never climb onto a wet or unstable roof, and do not use abrasive tools or harsh chemicals.", "After storms or strong winds, look from a safe location for visible damage. Any inspection close to wiring, panels or mounting should be handled by a trained technician."] },
      { heading: "Keep records and service contacts", paragraphs: ["Save the system design, invoices, warranty documents, commissioning information and service contact details. Note dates of maintenance and any inverter alerts. These records help a technician diagnose an issue and support warranty requests.", "Before each seasonal period, check that roof drains and access routes are clear. Ask your installer what periodic inspections are recommended for your specific equipment and mounting system."] },
    ],
  },
  {
    slug: "solar-for-housing-societies-jammu",
    title: "Solar for Housing Societies and Apartments in Jammu",
    excerpt: "How an RWA can assess common-area loads, roof ownership and approvals before planning a shared solar project.",
    metaTitle: "Solar for Housing Societies and Apartments in Jammu",
    metaDescription: "A planning guide for Jammu RWAs considering rooftop solar for lifts, pumps and common-area lighting.",
    image: "/quality-components.png",
    tag: "Apartments",
    sections: [
      { heading: "Start with common-area bills", paragraphs: ["A housing society can begin by collecting electricity bills for shared services such as lifts, water pumps, corridor lighting and security systems. Separate common-area use from individual apartment connections so the project goal and account responsibility are clear.", "Note which loads run during daytime and which are essential during an outage. That distinction affects whether the society is evaluating grid-connected solar for bill offset or a backup design for selected equipment."] },
      { heading: "Confirm roof rights and approvals", paragraphs: ["Before requesting proposals, clarify who controls the rooftop and which committee or general body approval is needed. Check roof access, water tanks, lift rooms, fire routes and existing equipment. Residents should understand how work and future maintenance will affect shared areas.", "Ask the installer to assess structural condition and show a layout that preserves access for repairs and inspections. Keep decisions and permissions documented for the RWA’s records."] },
      { heading: "Present a transparent proposal", paragraphs: ["A proposal for the committee should list system capacity, equipment, cost, expected generation assumptions, utility steps, warranties and service terms. Show how the estimate relates to the society’s actual common-area bills rather than promising a fixed saving without supporting assumptions.", "For apartment communities in Jammu and nearby towns, a joint site visit with the managing committee can help answer resident questions before a decision is made."] },
    ],
  },
  {
    slug: "choosing-solar-installer-jammu-division",
    title: "How to Compare Solar Installers in Jammu Division",
    excerpt: "A practical checklist for comparing quotations, equipment, installation scope and after-sales support.",
    metaTitle: "How to Choose a Solar Installer in Jammu Division",
    metaDescription: "Compare solar installers in Jammu Division with a clear checklist for site surveys, equipment, warranties, approvals and local service.",
    image: "/handle.png",
    tag: "Buyer checklist",
    sections: [
      { heading: "Ask for a proper site survey", paragraphs: ["A reliable quotation should follow a review of your bills, connection details and roof. Ask how the installer assessed shade, structural condition, usable area and safe access. A proposal made without these checks may miss important site constraints.", "For properties outside Jammu city, confirm travel, access and service coverage for your exact location. Hill roads, remote sites and roof conditions can change installation planning."] },
      { heading: "Compare written specifications", paragraphs: ["Look beyond the headline price. Compare panel and inverter models, system capacity, mounting, cabling, safety devices, installation scope and exclusions. Confirm whether utility paperwork, meter coordination and scheme guidance are included or billed separately.", "Ask for generation estimates with the assumptions stated. Weather, shade, equipment configuration and usage all affect actual results, so avoid guarantees that do not explain their basis."] },
      { heading: "Check service and paperwork", paragraphs: ["Get warranty terms from the equipment manufacturers and workmanship coverage from the installer. Ask who to contact for a fault, how service requests are handled and which documents you receive at handover.", "A clear contract should set out payment milestones, delivery expectations and responsibilities. For subsidy or net metering steps, verify current requirements with official sources and keep copies of every application and approval."] },
    ],
  },
  {
    slug: "home-solar-site-survey-checklist-jammu",
    title: "Home Solar Site Survey Checklist for Jammu",
    excerpt: "What to prepare and ask when an installer visits your Jammu home to assess its roof and electricity use.",
    metaTitle: "Home Solar Site Survey Checklist for Jammu",
    metaDescription: "Prepare for a rooftop solar survey in Jammu with a practical checklist covering bills, roof shade, access, equipment and utility details.",
    image: "/free-site-survey.png",
    tag: "Homeowner checklist",
    sections: [
      { heading: "Bring the right electricity details", paragraphs: ["Keep a recent electricity bill available and, if possible, a few months of bills that show seasonal changes. The bill helps confirm the connection type, consumer details and a useful starting point for system sizing.", "Make a note of appliances that run during the day and any expected changes, such as adding air conditioning or an electric vehicle charger. Actual use patterns help the designer make a more relevant recommendation."] },
      { heading: "Walk through the roof together", paragraphs: ["Point out water tanks, parapets, trees, nearby buildings, antennas and any areas that become shaded. Mention roof repairs or construction you are planning, too. A survey should consider usable area, structure, drainage and safe access for future maintenance.", "Ask to see the proposed panel layout and where the inverter, wiring and other equipment would go. The installer should explain any parts of the roof that cannot be used and why."] },
      { heading: "Leave with clear next steps", paragraphs: ["Ask for the proposed capacity, equipment models, installation scope, expected generation assumptions, warranties and service contact in writing. For a grid-connected system, clarify who will guide the application and meter process with the utility.", "Before paying an advance, compare the written proposal with your needs and confirm current subsidy requirements on the official PM Surya Ghar portal if you plan to apply."] },
    ],
  },
  {
    slug: "battery-backup-sizing-for-jammu-homes",
    title: "How to Plan Battery Backup for a Jammu Home",
    excerpt: "Estimate backup needs by listing essential appliances, outage duration and realistic battery runtime expectations.",
    metaTitle: "Solar Battery Backup Sizing for Jammu Homes",
    metaDescription: "Learn how to plan home battery backup in Jammu by listing essential loads, estimating runtime and comparing hybrid system proposals.",
    image: "/off_grid.png",
    tag: "Battery planning",
    sections: [
      { heading: "Decide what needs backup", paragraphs: ["Start with the appliances you need during an outage: perhaps lights, fans, a router, refrigerator or a water pump. Record each appliance's power rating and how many hours you expect to use it. Large heating and cooling loads can use stored energy quickly.", "Separate essential circuits from optional appliances. A hybrid system can be designed around selected loads, so backup does not have to include every circuit in the house."] },
      { heading: "Understand runtime and recharge", paragraphs: ["Battery capacity alone does not determine how long backup lasts. Runtime depends on the connected load, inverter limits, usable battery capacity and system settings. Ask the designer to show a sample load and runtime calculation for your priorities.", "Solar generation can recharge a battery when sunlight is available, but cloudy weather and winter conditions can change the energy available. Discuss how the system behaves over consecutive low-sun days and whether grid charging is supported."] },
      { heading: "Compare a complete system proposal", paragraphs: ["A suitable proposal identifies the battery chemistry and capacity, compatible inverter, protected backup circuits, safety equipment, warranties and expected operating limits. Ask how the battery will be installed and what ventilation or environmental conditions it needs.", "If the property has unreliable grid supply or is in a hilly part of Jammu Division, share outage patterns and access constraints during the site visit. Confirm the design and service plan in writing before choosing between hybrid and off-grid options."] },
    ],
  },
  {
    slug: "rooftop-solar-homes-in-samba",
    title: "Rooftop Solar for Homes in Samba: A Local Planning Guide",
    excerpt: "Plan a home solar system in Samba by checking roof area, daytime electricity use and the right utility steps.",
    metaTitle: "Home Rooftop Solar in Samba | Planning Guide",
    metaDescription: "A practical Samba homeowner guide to rooftop solar, covering roof layout, household bills, system options and local installation planning.",
    image: "/home.png",
    tag: "Samba solar",
    sections: [
      { heading: "Begin with your household's use", paragraphs: ["Review recent bills and note how much electricity your home uses during the day. Summer cooling, water pumping and work-from-home equipment can change the profile, so share typical and seasonal use with the system designer.", "The right capacity depends on the connection, usable roof and consumption pattern. A site assessment is more useful than selecting a package from the bill amount alone."] },
      { heading: "Make the most of the roof", paragraphs: ["Samba homes may have different roof shapes and available areas, including larger plots outside the town centre. The survey should check shade, roof condition, drainage and safe access, then show a layout that leaves room for tanks and maintenance.", "If the home is part of a property with a shop, workshop or farm load, keep those electricity accounts and goals separate when discussing a residential installation."] },
      { heading: "Understand the on-grid process", paragraphs: ["A grid-connected home system needs the applicable utility application and meter steps. Ask who will help with the paperwork, what information is needed and how the project will be commissioned.", "Eligible households may also explore PM Surya Ghar. Confirm current rules and approved vendor requirements through the official portal before relying on a subsidy estimate."] },
    ],
  },
  {
    slug: "home-solar-in-vijaypur",
    title: "Home Solar in Vijaypur: Roof, Bills and Installation Basics",
    excerpt: "A homeowner's guide to planning rooftop solar in Vijaypur and preparing for a local roof survey.",
    metaTitle: "Home Solar in Vijaypur, Samba District | Bright Beam Energy",
    metaDescription: "Explore practical steps for home rooftop solar in Vijaypur, Samba district, including bill review, roof assessment and grid connection planning.",
    image: "/home.png",
    tag: "Vijaypur solar",
    sections: [
      { heading: "Use your bill to start the conversation", paragraphs: ["Bring a recent electricity bill and describe when your household uses the most power. A family that runs pumps or cooling during the day may use solar generation differently from a home whose demand is mostly in the evening.", "A designer can use the account details and bill history to discuss a suitable capacity range, subject to the roof and current utility requirements."] },
      { heading: "Check roof conditions before selecting a system", paragraphs: ["Vijaypur properties range from compact homes to larger plots and mixed-use buildings. A roof visit should check shade from nearby structures, panel placement, waterproofing, access and equipment location.", "If a shop or showroom shares the property, tell the installer which meter and electricity account the proposed system is meant to serve. Keeping the connection details clear helps avoid a mismatched proposal."] },
      { heading: "Plan installation and approvals", paragraphs: ["Ask for an itemised proposal with equipment specifications, safety provisions, installation scope, warranties and estimated generation assumptions. Confirm the sequence for application, inspection and meter steps for a grid-connected installation.", "Residential customers can check whether they qualify for current PM Surya Ghar support through the national portal. Scheme terms can change, so verify before budgeting around an incentive."] },
    ],
  },
  {
    slug: "rooftop-solar-in-udhampur",
    title: "Planning Rooftop Solar for a Home in Udhampur",
    excerpt: "What Udhampur homeowners should consider about roof pitch, terrain shade, winter conditions and system layout.",
    metaTitle: "Rooftop Solar in Udhampur: Home Planning Guide",
    metaDescription: "Plan rooftop solar in Udhampur with guidance on sloping roofs, shade, seasonal generation, mounting and backup choices.",
    image: "/building.png",
    tag: "Udhampur solar",
    sections: [
      { heading: "Survey the roof and its surroundings", paragraphs: ["In Udhampur, roof pitch, terrain and nearby trees or buildings can create site-specific shade. Ask the surveyor to inspect the roof at different points and explain how the layout accounts for obstructions and safe access.", "A sloping or irregular roof may need a different mounting plan from a flat terrace. The proposal should describe the attachment method and any structural checks required for the property."] },
      { heading: "Plan for seasonal changes", paragraphs: ["Solar output varies with daylight, cloud cover, shade and weather. Cooler temperatures do not prevent panels from generating, but shorter days and cloudy or snowy periods can affect production. Ask for estimates that explain their assumptions across the year.", "If you need electricity during outages, discuss a hybrid system and identify essential loads. Battery runtime depends on the load and storage design, so it should be calculated for your home's priorities."] },
      { heading: "Clarify installation access", paragraphs: ["Tell the installer about road access, material delivery, roof entry and any limits on working hours. These details help plan the installation and any later service visit, especially for properties outside the town centre.", "Compare written proposals for equipment, mounting, protection devices, warranties and utility application support. A roof plan and clear handover documents make the finished system easier to maintain."] },
    ],
  },
  {
    slug: "solar-for-homes-in-kathua",
    title: "Solar for Homes in Kathua: A Practical Rooftop Guide",
    excerpt: "Prepare for rooftop solar in Kathua with advice on home electricity use, roof space and safe system planning.",
    metaTitle: "Home Rooftop Solar in Kathua: What to Plan",
    metaDescription: "A practical guide for Kathua homeowners considering rooftop solar, with checks for electricity bills, roof shade and system proposals.",
    image: "/home.png",
    tag: "Kathua solar",
    sections: [
      { heading: "Match the system to your home", paragraphs: ["Use several electricity bills to understand household consumption and seasonal peaks. If pumps, cooling or other large appliances are part of the load, share their ratings and operating hours during the assessment.", "System capacity should be chosen after checking the connection, usage and roof. The goal is a design that fits the home rather than a standard size based only on a monthly bill."] },
      { heading: "Check usable area and shade", paragraphs: ["The survey should inspect roof condition, shade from trees and nearby buildings, water tanks, drainage and access. Ask for a layout showing panel placement and the space left for roof maintenance.", "If you are considering solar for a farm pump or a commercial building as well as your home, those uses may require a separate assessment and connection-specific design."] },
      { heading: "Compare the details in writing", paragraphs: ["Review equipment models, inverter type, mounting, electrical protection, installation scope, warranties and service arrangements. Ask the installer to explain generation estimates and utility paperwork assumptions.", "If applying for residential subsidy, verify your eligibility and the current process through PM Surya Ghar. Keep the approved proposal, invoices and commissioning records with your electricity documents."] },
    ],
  },
  {
    slug: "solar-for-homes-in-reasi",
    title: "Home Solar in Reasi: Planning for Hills and Grid Needs",
    excerpt: "A practical guide to rooftop solar in Reasi, including hill access, roof shade and choosing backup for essential loads.",
    metaTitle: "Home Solar in Reasi and Katra: Local Planning Guide",
    metaDescription: "Plan a home solar system in Reasi with guidance on terrain, roof access, electricity reliability and on-grid or battery options.",
    image: "/off_grid.png",
    tag: "Reasi solar",
    sections: [
      { heading: "Start with the property's power needs", paragraphs: ["List the appliances and loads you want solar to support, and bring recent bills if available. A home with a steady grid connection may prioritise bill offset, while an outage-prone or remote property may also need backup for selected circuits.", "The designer should review the connection, usage pattern and roof before recommending on-grid, hybrid or off-grid equipment. These system types have different costs and operating behaviour."] },
      { heading: "Account for terrain and access", paragraphs: ["Hillside roofs can have uneven orientation, shade and limited space. The site survey should check roof condition, mounting, sunlight obstructions and safe access for installation and maintenance.", "Share road and material access details early. For a property outside Reasi town or near Katra, logistics can affect the installation plan and should be explained in the quote."] },
      { heading: "Choose backup around essential loads", paragraphs: ["If you are considering batteries, identify which appliances must stay on during an outage and for how long. Ask for an estimate that states the assumed load and expected runtime rather than relying on battery capacity alone.", "For a grid-connected system, ask about the applicable utility steps. For residential subsidy, confirm current scheme eligibility through the official portal; remote location alone does not determine eligibility."] },
    ],
  },
];

export const getBlog = (slug: string) => blogs.find((blog) => blog.slug === slug);
