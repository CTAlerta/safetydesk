export interface ChecklistCategory {
  slug: string;
  title: string;
  metaDescription: string;
  items: string[];
}

export const checklistCategories: ChecklistCategory[] = [
  {
    slug: "ppe-compliance",
    title: "PPE Compliance",
    metaDescription:
      "Free PPE compliance inspection checklist. Hard hats, eye protection, high-visibility clothing, footwear, gloves, and hearing protection.",
    items: [
      "Hard hats worn and in good condition (no cracks, correct expiry)",
      "Safety glasses/goggles worn where required",
      "High-visibility clothing worn in traffic/equipment areas",
      "Safety footwear meets site standard (steel toe/puncture resistant)",
      "Hearing protection available and used in designated zones",
      "Gloves appropriate to task hazard (cut, chemical, thermal)",
      "Respiratory protection fit-tested where required",
    ],
  },
  {
    slug: "fire-safety",
    title: "Fire Safety",
    metaDescription:
      "Free fire safety inspection checklist. Extinguishers, escape routes, flammable storage, hot work permits, and alarm testing.",
    items: [
      "Fire extinguishers present, inspected, and unobstructed",
      "Fire exits and escape routes clear of obstruction",
      "Flammable materials stored in designated cabinets",
      "Hot work permits current for any welding/cutting in progress",
      "Fire alarm/detection system tested within schedule",
      "Emergency assembly point signage visible and known to staff",
    ],
  },
  {
    slug: "housekeeping",
    title: "Housekeeping",
    metaDescription:
      "Free housekeeping inspection checklist for job sites. Walkways, spill response, waste segregation, and lighting.",
    items: [
      "Walkways and stairways clear of trip hazards",
      "Spills cleaned up immediately with correct absorbent",
      "Waste and scrap segregated and disposed of correctly",
      "Tools and equipment returned to storage after use",
      "Cables and hoses routed to avoid crossing walkways",
      "Lighting adequate in all work and storage areas",
    ],
  },
  {
    slug: "electrical-safety",
    title: "Electrical Safety",
    metaDescription:
      "Free electrical safety inspection checklist. Cable condition, panel access, grounding, and lockout/tagout readiness.",
    items: [
      "Cables and cords free of damage or exposed conductors",
      "Panels and breaker boards accessible and labeled",
      "Ground fault protection in place for portable equipment",
      "Lockout/tagout devices available at point of use",
      "Temporary wiring inspected and tagged",
      "No unauthorized modification of electrical equipment",
    ],
  },
  {
    slug: "confined-space-readiness",
    title: "Confined Space Readiness",
    metaDescription:
      "Free confined space readiness checklist. Gas detection, rescue equipment, permits, and ventilation setup.",
    items: [
      "Gas detector calibrated and functional",
      "Rescue and retrieval equipment staged at entry point",
      "Permit posted and current at the space",
      "Ventilation equipment operating and positioned correctly",
      "Communication method between entrant and attendant confirmed",
    ],
  },
  {
    slug: "scaffold-inspection-pre-use",
    title: "Scaffold Inspection (Pre-Use)",
    metaDescription:
      "Free pre-use scaffold inspection checklist. Base stability, guardrails, planking, ties, and scaff-tag verification.",
    items: [
      "Base plates/sole boards level and on firm ground",
      "All frames, braces, and couplers secure and undamaged",
      "Guardrails, mid-rails, and toe boards installed on all open sides",
      "Platform fully planked with no gaps, planks secured",
      "Access ladder or stair tower in place and secure",
      "Ties/anchors installed at required intervals to structure",
      "Scaff tag current, signed, and displayed at access point",
    ],
  },
  {
    slug: "ladder-inspection",
    title: "Ladder Inspection",
    metaDescription:
      "Free ladder inspection checklist. Rails, rungs, feet, locking mechanisms, and correct angle setup.",
    items: [
      "Side rails free of cracks, bends, or splits",
      "Rungs/steps secure, clean, and free of grease or oil",
      "Feet/base fitted with non-slip pads, not worn",
      "Locking mechanisms (extension ladders) function correctly",
      "Labels/duty rating legible and appropriate for the task",
      "Ladder set at correct angle (4:1 ratio) on stable, level ground",
      "No visible corrosion or structural damage",
    ],
  },
  {
    slug: "fire-extinguisher-monthly-inspection",
    title: "Fire Extinguisher Monthly Inspection",
    metaDescription:
      "Free monthly fire extinguisher inspection checklist. Pressure gauge, tamper seal, hose condition, and tagging.",
    items: [
      "Extinguisher in designated location, unobstructed, visible",
      "Pressure gauge in the green/operable range",
      "Pin and tamper seal intact",
      "Hose/nozzle free of cracks or blockage",
      "Inspection tag current with this month's check recorded",
      "No physical damage, corrosion, or leakage",
      "Mounting bracket secure and extinguisher properly seated",
    ],
  },
  {
    slug: "first-aid-kit-and-emergency-equipment",
    title: "First Aid Kit and Emergency Equipment",
    metaDescription:
      "Free first aid kit and emergency equipment checklist. Stock levels, expiry dates, eyewash stations, and AED readiness.",
    items: [
      "Kit fully stocked per site inventory list",
      "No expired items (dressings, medications, antiseptics)",
      "Kit accessible, clearly marked, and unlocked during work hours",
      "Eyewash station functional and flushed per schedule",
      "Emergency contact numbers posted and current",
      "Stretcher/spill kit/AED (if applicable) present and inspected",
      "Person responsible for kit maintenance identified and trained",
    ],
  },
  {
    slug: "vehicle-forklift-daily-pre-use",
    title: "Vehicle / Forklift Daily Pre-Use",
    metaDescription:
      "Free daily pre-use vehicle and forklift inspection checklist. Tires, brakes, fluids, forks, and safety alarms.",
    items: [
      "Tires/wheels in good condition, correct pressure",
      "Brakes, horn, and lights functioning",
      "Fluid levels checked (oil, hydraulic, coolant, fuel)",
      "Forks/attachments free of cracks or excessive wear",
      "Seatbelt functional and mirrors properly adjusted",
      "Backup alarm and warning lights operational",
      "No leaks visible under vehicle/equipment",
    ],
  },
    {
    slug: "crane-and-rigging-equipment",
    title: "Crane and Rigging Equipment",
    metaDescription: "Free crane and rigging equipment inspection checklist. Wire rope, hooks, slings, and load charts.",
    items: [
      "Wire rope free of kinks, broken strands, or corrosion",
      "Hooks fitted with functioning safety latches, no deformation",
      "Load charts available and legible at the operator station",
      "Slings and chains free of cuts, wear, or damage, within inspection date",
      "Outriggers/stabilizers fully extended and on proper cribbing",
      "Load moment indicator/limiter functioning correctly",
      "Rigging hardware (shackles, master links) rated and free of visible defects",
    ],
  },
  {
    slug: "hazardous-materials-storage",
    title: "Hazardous Materials Storage",
    metaDescription: "Free hazardous materials storage inspection checklist. Labeling, segregation, containment, and spill readiness.",
    items: [
      "Containers labeled correctly with current SDS available on site",
      "Incompatible chemicals segregated per storage requirements",
      "Secondary containment in place for liquid storage",
      "Storage area ventilated and free of ignition sources",
      "Spill kit located near storage area and fully stocked",
      "Storage cabinets/areas locked or access-controlled as required",
    ],
  },
  {
    slug: "personal-fall-arrest-system-pfas",
    title: "Personal Fall Arrest System (PFAS)",
    metaDescription: "Free personal fall arrest system (PFAS) inspection checklist. Harness, lanyard, connectors, and anchor points.",
    items: [
      "Harness webbing free of cuts, fraying, or chemical damage",
      "D-rings and buckles free of cracks, deformation, or corrosion",
      "Lanyard/shock absorber intact and within inspection date",
      "Connectors self-locking and functioning correctly",
      "Anchor point rated and appropriate for the application",
      "Harness properly fitted and adjusted to the wearer",
      "Tags/labels legible showing manufacture date and inspection history",
    ],
  },
  {
    slug: "emergency-lighting-and-exit-signage",
    title: "Emergency Lighting and Exit Signage",
    metaDescription: "Free emergency lighting and exit signage inspection checklist. Illumination, battery backup, and egress paths.",
    items: [
      "Exit signs illuminated and visible from all approach angles",
      "Emergency lighting activates correctly during power interruption test",
      "Battery backup charge level within acceptable range",
      "Exit doors unlocked and operable from the inside during work hours",
      "Egress path free of obstructions leading to exit signage",
      "Signage compliant with site/regulatory standard (color, placement)",
    ],
  },
  {
    slug: "contractor-site-induction-checklist",
    title: "Contractor Site Induction Checklist",
    metaDescription: "Free contractor site induction checklist. Competency verification, hazard briefing, and permit review.",
    items: [
      "Contractor competency documentation verified before task assignment",
      "Site-specific hazards briefed and acknowledged by contractor",
      "Emergency response procedures and muster point explained",
      "Permit-to-work system and applicable permits reviewed",
      "PPE requirements confirmed and contractor equipped accordingly",
      "Contact person and communication protocol established",
      "Induction record signed and filed",
    ],
  },
    {
    slug: "tank-farm-storage-area-inspection",
    title: "Tank Farm / Storage Area Inspection",
    metaDescription: "Free tank farm and storage area inspection checklist. Tank integrity, bunding, gauges, and grounding.",
    items: [
      "Tank shell and roof free of corrosion, dents, or leaks",
      "Bunded area/secondary containment intact and drain valves closed",
      "Level gauges and alarms functioning and calibrated",
      "Grounding/bonding connections intact at all tanks",
      "Access ladders and platforms structurally sound",
      "Signage and labeling current (product, hazard class)",
      "Vegetation and debris cleared from bund area",
    ],
  },
  {
    slug: "pump-and-valve-integrity-walkdown",
    title: "Pump and Valve Integrity Walkdown",
    metaDescription: "Free pump and valve integrity walkdown checklist. Leak checks, vibration, and bolting integrity.",
    items: [
      "No visible leaks at pump seals, flanges, or valve packing",
      "Pump vibration and noise within normal operating range",
      "Valve handwheels/actuators operate freely without excessive force",
      "Pressure gauges functional and within normal range",
      "Insulation intact where required, no exposed hot surfaces",
      "Bolting and flange connections show no signs of looseness",
    ],
  },
  {
    slug: "spill-kit-readiness",
    title: "Spill Kit Readiness",
    metaDescription: "Free spill kit readiness checklist. Stock levels, accessibility, and training verification.",
    items: [
      "Kit stocked per site inventory (absorbents, containment booms, PPE)",
      "Kit located at point of use, clearly signed and accessible",
      "No expired or contaminated absorbent materials",
      "Disposal bags/containers included and available",
      "Personnel trained on spill kit location and use",
      "Kit inspected and logged on scheduled interval",
    ],
  },
  {
    slug: "noise-exposure-hearing-conservation-zones",
    title: "Noise Exposure / Hearing Conservation Zones",
    metaDescription: "Free noise exposure and hearing conservation zone checklist. Signage, PPE compliance, and monitoring.",
    items: [
      "High-noise areas identified and signed correctly",
      "Hearing protection available at zone entry points",
      "Noise monitoring/dosimetry conducted per schedule",
      "Workers in designated zones observed wearing hearing protection",
      "Audiometric testing records current for exposed personnel",
      "Engineering noise controls (barriers, enclosures) functioning as designed",
    ],
  },
  {
    slug: "security-perimeter-and-access-control",
    title: "Security Perimeter and Access Control",
    metaDescription: "Free security perimeter and access control checklist. Fencing, access points, CCTV, and lighting.",
    items: [
      "Perimeter fencing intact with no breaches or damage",
      "Access points controlled (badges, gates, security personnel)",
      "CCTV coverage functional at critical access points",
      "Visitor/contractor sign-in log maintained and current",
      "Lighting adequate at perimeter and access points during darkness",
      "Emergency access routes for response vehicles unobstructed",
    ],
  },
];
