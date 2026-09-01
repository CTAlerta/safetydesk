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
];
