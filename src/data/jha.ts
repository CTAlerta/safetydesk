export interface JhaStep {
  step: string;
  hazard: string;
  control: string;
  risk: "High" | "Medium" | "Low";
}

export interface JhaTemplate {
  slug: string;
  title: string;
  metaDescription: string;
  steps: JhaStep[];
}

export const jhaTemplates: JhaTemplate[] = [
  {
    slug: "hot-work-welding-cutting",
    title: "Hot Work (Welding / Cutting)",
    metaDescription:
      "Free Job Hazard Analysis template for hot work — welding and cutting. Step-by-step hazards and controls for fire watch, permits, and PPE.",
    steps: [
      { step: "Set up work area and remove combustibles within 10m radius", hazard: "Fire from sparks/slag igniting nearby material", control: "Clear area, post fire watch, keep extinguisher on site", risk: "High" },
      { step: "Obtain hot work permit and verify gas test", hazard: "Working without authorization in flammable atmosphere", control: "No work without valid permit and current gas-free certificate", risk: "High" },
      { step: "Don PPE (welding helmet, gloves, FR coveralls)", hazard: "Burns, UV/IR radiation exposure", control: "Full PPE inspected before use, screens erected to protect bystanders", risk: "Medium" },
      { step: "Perform welding/cutting operation", hazard: "Electric shock, fume inhalation", control: "Inspect leads/cables, ensure local exhaust ventilation running", risk: "Medium" },
      { step: "Post-work fire watch and area check", hazard: "Smoldering material igniting after work stops", control: "30-minute fire watch minimum, final area inspection", risk: "Medium" },
    ],
  },
  {
    slug: "working-at-heights",
    title: "Working at Heights",
    metaDescription:
      "Free Job Hazard Analysis template for working at heights. Covers fall protection inspection, anchor points, and dropped object prevention.",
    steps: [
      { step: "Inspect fall protection equipment", hazard: "Equipment failure during use", control: "Visual/tag inspection before each use, remove damaged gear from service", risk: "High" },
      { step: "Set up access (scaffold/ladder/lift)", hazard: "Fall from unstable platform", control: "Certified scaffold tag, ladder angle 4:1, lift operator certified", risk: "High" },
      { step: "Anchor point selection and connection", hazard: "Fall due to inadequate anchor rating", control: "Use only engineered anchor points rated 22kN minimum", risk: "High" },
      { step: "Work at elevation", hazard: "Dropped objects striking personnel below", control: "Exclusion zone below, tools tethered, toe boards installed", risk: "Medium" },
      { step: "Descent and equipment stand-down", hazard: "Fatigue-related misstep during descent", control: "Three points of contact maintained, no rushing", risk: "Low" },
    ],
  },
  {
    slug: "confined-space-entry",
    title: "Confined Space Entry",
    metaDescription:
      "Free Job Hazard Analysis template for confined space entry. Atmospheric testing, LOTO, attendant duties, and rescue readiness.",
    steps: [
      { step: "Atmospheric testing before entry", hazard: "Oxygen deficiency, toxic/flammable gas exposure", control: "Test O2, LEL, H2S, CO before entry and continuously monitor", risk: "High" },
      { step: "Isolate and lock out energy sources", hazard: "Unexpected startup or release into space", control: "Full LOTO applied and verified, isolation log signed", risk: "High" },
      { step: "Set up ventilation and rescue equipment", hazard: "Atmosphere degrading during work", control: "Forced ventilation running, retrieval line and tripod staged", risk: "High" },
      { step: "Entry with attendant stationed outside", hazard: "Entrant incapacitated with no means of rescue", control: "Trained attendant present at all times, communication check every 10 min", risk: "High" },
      { step: "Exit and space closure", hazard: "Space re-entered without re-testing", control: "Log exit, re-seal, re-test required before any re-entry", risk: "Medium" },
    ],
  },
  {
    slug: "forklift-operation",
    title: "Forklift Operation",
    metaDescription:
      "Free Job Hazard Analysis template for forklift operation. Pre-operation inspection, load handling, and pedestrian segregation.",
    steps: [
      { step: "Pre-operation inspection", hazard: "Mechanical failure (brakes, forks, hydraulics)", control: "Daily checklist completed, defects tagged out before use", risk: "Medium" },
      { step: "Load assessment and securing", hazard: "Load shift or drop causing crush injury", control: "Verify load within rated capacity, forks fully engaged", risk: "High" },
      { step: "Travel through work area", hazard: "Collision with pedestrians or structures", control: "Horn at intersections, speed limit enforced, pedestrian segregation", risk: "High" },
      { step: "Lifting and placing load", hazard: "Tip-over on uneven ground or overreach", control: "Mast tilted back, load low while traveling, stable ground only", risk: "Medium" },
      { step: "Shutdown and parking", hazard: "Rollaway or unauthorized use", control: "Forks lowered, park brake set, key removed", risk: "Low" },
    ],
  },
  {
    slug: "lockout-tagout-loto",
    title: "Lockout / Tagout (LOTO)",
    metaDescription:
      "Free Job Hazard Analysis template for lockout/tagout (LOTO). Energy isolation, lock application, and zero-energy verification.",
    steps: [
      { step: "Notify affected personnel", hazard: "Personnel unaware equipment is being isolated", control: "Notify all affected staff before isolation begins", risk: "Low" },
      { step: "Identify and isolate all energy sources", hazard: "Residual energy causing unexpected release", control: "Isolate electrical, hydraulic, pneumatic, and stored energy sources", risk: "High" },
      { step: "Apply locks and tags", hazard: "Re-energization during maintenance", control: "Individual locks applied by each worker, tags legible and dated", risk: "High" },
      { step: "Verify zero energy state", hazard: "False confirmation of isolation", control: "Try-start test and measurement before work begins", risk: "High" },
      { step: "Restore equipment after work", hazard: "Restart before area is clear", control: "Area cleared and confirmed before lock removal and restart", risk: "Medium" },
    ],
  },
  {
    slug: "excavation-and-trenching",
    title: "Excavation and Trenching",
    metaDescription:
      "Free Job Hazard Analysis template for excavation and trenching. Utility locates, soil classification, and cave-in protection.",
    steps: [
      { step: "Verify utility locates and obtain excavation permit", hazard: "Striking underground utilities (gas, electrical, water)", control: "Utility locate completed and marked, permit signed before digging", risk: "High" },
      { step: "Assess soil classification and select protective system", hazard: "Trench wall collapse burying workers", control: "Soil classified by competent person, sloping/shoring/shielding installed per depth", risk: "High" },
      { step: "Install access/egress points", hazard: "Workers unable to exit quickly during collapse or flooding", control: "Ladder or ramp within 7.6m of any worker in a trench 1.2m or deeper", risk: "Medium" },
      { step: "Inspect trench daily and after weather changes", hazard: "Conditions deteriorating unnoticed (water infiltration, cracking)", control: "Competent person inspection before entry each shift and after rain", risk: "High" },
      { step: "Manage spoil pile and equipment near edge", hazard: "Surcharge load causing wall failure, equipment falling in", control: "Spoil placed at least 0.6m back from edge, barricades around excavation", risk: "Medium" },
    ],
  },
  {
    slug: "scaffolding-erection-dismantling",
    title: "Scaffolding Erection / Dismantling",
    metaDescription:
      "Free Job Hazard Analysis template for scaffold erection and dismantling. Base stability, tie-ins, guardrails, and tagging.",
    steps: [
      { step: "Plan erection sequence and inspect components", hazard: "Using damaged/incompatible components leading to structural failure", control: "Components inspected before use, erection per manufacturer/engineered design", risk: "High" },
      { step: "Establish stable base and foundation", hazard: "Scaffold collapse due to uneven or unstable ground", control: "Base plates/sole boards on firm level ground, leveled before loading", risk: "High" },
      { step: "Erect frame and secure ties to structure", hazard: "Fall from height during erection, scaffold overturning", control: "Erectors use fall protection, ties installed at required intervals", risk: "High" },
      { step: "Install guardrails and toe boards before use", hazard: "Fall from platform edge, falling tools/materials", control: "Full guardrail system and toe boards completed before handover", risk: "High" },
      { step: "Tag and inspect before each shift", hazard: "Use of incomplete or modified scaffold", control: "Scaff-tag system (green/red/yellow) checked before each use", risk: "Medium" },
    ],
  },
  {
    slug: "electrical-work-live-de-energized",
    title: "Electrical Work (Live and De-energized)",
    metaDescription:
      "Free Job Hazard Analysis template for electrical work. LOTO, approach boundaries, arc flash PPE, and insulated tool use.",
    steps: [
      { step: "Determine energized state and required PPE", hazard: "Electric shock or arc flash from unexpected live circuit", control: "Verify voltage with rated meter, wear arc-rated PPE per hazard category", risk: "High" },
      { step: "Apply lockout/tagout for de-energized work", hazard: "Re-energization during work causing shock", control: "LOTO applied and verified with zero-energy test before touching conductors", risk: "High" },
      { step: "Establish approach boundaries for live work", hazard: "Arc flash or shock from proximity to energized parts", control: "Maintain qualified-only limited/restricted approach boundaries per standard", risk: "High" },
      { step: "Use insulated tools and rated equipment", hazard: "Tool failure causing conduction path to worker", control: "Insulated tools inspected and rated for the voltage present", risk: "Medium" },
      { step: "Restore and verify system after work", hazard: "Energizing circuit with work still incomplete or unsafe", control: "Final inspection, lock removal sequence followed, area cleared before restoration", risk: "Medium" },
    ],
  },
  {
    slug: "crane-lifting-operations",
    title: "Crane Lifting Operations",
    metaDescription:
      "Free Job Hazard Analysis template for crane lifting operations. Lift planning, rigging inspection, exclusion zones, and signaling.",
    steps: [
      { step: "Plan the lift and verify load weight", hazard: "Overload causing crane tip-over or boom/rope failure", control: "Lift plan completed, load weight confirmed against crane capacity chart", risk: "High" },
      { step: "Inspect crane, rigging, and ground conditions", hazard: "Equipment failure or ground subsidence during lift", control: "Daily crane inspection, rigging certified, outriggers on matting", risk: "High" },
      { step: "Establish exclusion zone and signal person", hazard: "Personnel struck by load or swinging boom", control: "Exclusion zone barricaded, single qualified signal person designated", risk: "High" },
      { step: "Execute the lift per plan", hazard: "Load drift or dropped load from miscommunication", control: "Radio/hand signals confirmed, no lift over personnel, tag lines used", risk: "High" },
      { step: "Land load and release rigging safely", hazard: "Load shifting or falling during release", control: "Load fully supported and stable before rigging is released", risk: "Medium" },
    ],
  },
  {
    slug: "chemical-handling-and-transfer",
    title: "Chemical Handling and Transfer",
    metaDescription:
      "Free Job Hazard Analysis template for chemical handling and transfer. SDS review, PPE, bonding/grounding, and spill readiness.",
    steps: [
      { step: "Review SDS and confirm compatibility", hazard: "Reaction from mixing incompatible chemicals", control: "SDS reviewed, compatibility verified before transfer, segregated storage maintained", risk: "High" },
      { step: "Don appropriate PPE for chemical class", hazard: "Skin/eye contact, inhalation of vapors", control: "Chemical-resistant gloves, goggles/face shield, respiratory protection as specified", risk: "High" },
      { step: "Bond and ground transfer equipment", hazard: "Static discharge igniting flammable vapors", control: "Bonding/grounding connected and verified before transfer of flammable liquids", risk: "High" },
      { step: "Monitor transfer and have spill response ready", hazard: "Spill or overflow during transfer", control: "Continuous attendance during transfer, spill kit staged at point of transfer", risk: "Medium" },
      { step: "Secure and label containers after transfer", hazard: "Unlabeled or unsecured containers causing future exposure", control: "Containers closed, labeled, and stored per site chemical management plan", risk: "Low" },
    ],
  },
  {
    slug: "manual-material-handling",
    title: "Manual Material Handling",
    metaDescription:
      "Free Job Hazard Analysis template for manual material handling. Load assessment, lifting technique, and mechanical aids.",
    steps: [
      { step: "Assess the load before lifting", hazard: "Back/muscle strain from misjudging weight or size", control: "Check weight/label, test-lift a corner, plan the carry path before lifting", risk: "Medium" },
      { step: "Use correct lifting technique", hazard: "Spinal injury from improper bending/twisting", control: "Bend at the knees, keep load close, avoid twisting while lifting", risk: "Medium" },
      { step: "Use mechanical aids for heavy/awkward loads", hazard: "Overexertion injury from manual handling beyond safe limits", control: "Trolley, hoist, or two-person lift used for loads over 20kg or awkward shape", risk: "Medium" },
      { step: "Clear and maintain the carry path", hazard: "Trip or collision while carrying a load with obstructed view", control: "Path cleared of obstructions, adequate lighting, spotter used if visibility blocked", risk: "Low" },
      { step: "Set down the load safely", hazard: "Crush injury to hands/feet when placing load", control: "Place load on a stable surface, hands/feet clear of pinch points", risk: "Low" },
    ],
  },
  {
    slug: "working-near-traffic-road-work",
    title: "Working Near Traffic / Road Work",
    metaDescription:
      "Free Job Hazard Analysis template for road work and working near traffic. Traffic control plans, barriers, and high-visibility PPE.",
    steps: [
      { step: "Set up traffic control plan and signage", hazard: "Vehicle intrusion into work zone striking workers", control: "Approved traffic control plan implemented, advance warning signage placed", risk: "High" },
      { step: "Establish positive protection (barriers/cones)", hazard: "Vehicles entering work area due to inadequate delineation", control: "Barriers, cones, or attenuators placed per traffic control plan spacing", risk: "High" },
      { step: "Wear high-visibility clothing at all times", hazard: "Worker not visible to approaching traffic, especially in low light", control: "Class 2/3 high-vis apparel worn, reflective for night work", risk: "High" },
      { step: "Position workers and equipment safely", hazard: "Struck-by incident from traffic or reversing equipment", control: "Work performed facing traffic where possible, spotters used for reversing equipment", risk: "High" },
      { step: "Close out and remove traffic control devices", hazard: "Lingering hazard from devices left in place or removed unsafely", control: "Devices removed in safe sequence, road returned to normal condition and inspected", risk: "Medium" },
    ],
  },
    {
    slug: "tank-cleaning-and-gauging",
    title: "Tank Cleaning and Gauging",
    metaDescription: "Free Job Hazard Analysis template for tank cleaning and gauging. Isolation, atmospheric testing, and confined space controls.",
    steps: [
      { step: "Isolate and prepare tank for entry", hazard: "Residual product vapors, isolation not verified", control: "Lock out tank inlets/outlets, verify isolation before opening", risk: "High" },
      { step: "Atmospheric testing and continuous monitoring", hazard: "Toxic/flammable vapor buildup", control: "Test O2/LEL/toxic gas before entry, monitor continuously", risk: "High" },
      { step: "Gauge/dip tank per procedure", hazard: "Static spark during gauging igniting vapors", control: "Use non-sparking gauging equipment, bond tape to structure", risk: "Medium" },
      { step: "Clean tank interior (manual/mechanical)", hazard: "Exposure to sludge/residue, confined space hazards", control: "Full confined space entry procedure followed, PPE per SDS", risk: "High" },
      { step: "Close out and restore tank", hazard: "Re-introducing product before tank fully closed/verified", control: "Final inspection, isolation removed only after closure confirmed", risk: "Medium" },
    ],
  },
  {
    slug: "pressure-testing",
    title: "Pressure Testing",
    metaDescription: "Free Job Hazard Analysis template for pressure testing. Test planning, exclusion zones, and incremental pressurization.",
    steps: [
      { step: "Plan test and verify equipment rating", hazard: "Overpressure exceeding equipment rating causing failure", control: "Test pressure calculated and verified against component ratings", risk: "High" },
      { step: "Establish exclusion zone", hazard: "Personnel struck by failure/projectile during test", control: "Barricade zone, no personnel in line of fire during pressurization", risk: "High" },
      { step: "Pressurize incrementally and monitor", hazard: "Sudden failure from rapid pressurization", control: "Pressurize in stages, hold and inspect at each increment", risk: "High" },
      { step: "Inspect for leaks/deformation", hazard: "Undetected weak point failing during hold", control: "Visual/soap-test inspection at each hold point before proceeding", risk: "Medium" },
      { step: "Depressurize and secure", hazard: "Residual pressure released unexpectedly", control: "Controlled depressurization, verify zero pressure before disconnecting", risk: "Medium" },
    ],
  },
  {
    slug: "grinding-and-abrasive-cutting",
    title: "Grinding and Abrasive Cutting",
    metaDescription: "Free Job Hazard Analysis template for grinding and abrasive cutting. Disc inspection, guarding, and PPE.",
    steps: [
      { step: "Inspect grinder and disc before use", hazard: "Disc failure/shattering during use", control: "Inspect disc for cracks, correct disc rating for tool/material", risk: "High" },
      { step: "Set up guard and secure workpiece", hazard: "Contact with rotating wheel, workpiece ejection", control: "Guard in place, workpiece clamped securely", risk: "High" },
      { step: "Don PPE (face shield, gloves)", hazard: "Flying particles, sparks causing eye/skin injury", control: "Face shield over safety glasses, gloves, FR clothing near flammables", risk: "Medium" },
      { step: "Perform grinding/cutting operation", hazard: "Sparks igniting nearby combustibles", control: "Fire watch and spark containment if near flammable materials", risk: "Medium" },
      { step: "Shutdown and store equipment", hazard: "Contact with hot/sharp disc during storage", control: "Allow cool-down, disc guarded before storage", risk: "Low" },
    ],
  },
  {
    slug: "vehicle-mobile-equipment-operation",
    title: "Vehicle / Mobile Equipment Operation",
    metaDescription: "Free Job Hazard Analysis template for vehicle and mobile equipment operation. Pre-trip inspection, route planning, and safe reversing.",
    steps: [
      { step: "Pre-trip inspection", hazard: "Mechanical defect causing loss of control", control: "Complete pre-trip checklist, defects reported before use", risk: "Medium" },
      { step: "Route planning and hazard awareness", hazard: "Collision from unfamiliar terrain/blind spots", control: "Review route, identify blind spots and hazards beforehand", risk: "Medium" },
      { step: "Operate within site speed/traffic rules", hazard: "Collision with personnel or other vehicles", control: "Adhere to posted speed limits, right-of-way rules", risk: "High" },
      { step: "Reversing/maneuvering in tight areas", hazard: "Struck-by incident during reversing", control: "Spotter used, reversing alarm functional", risk: "High" },
      { step: "Parking and shutdown", hazard: "Rollaway or unauthorized use", control: "Parking brake engaged, wheels chocked on grade, keys secured", risk: "Low" },
    ],
  },
  {
    slug: "pipeline-excavation-and-tie-in",
    title: "Pipeline Excavation and Tie-in",
    metaDescription: "Free Job Hazard Analysis template for pipeline excavation and tie-in work. Utility locates, isolation, and trench support.",
    steps: [
      { step: "Locate and verify pipeline position", hazard: "Striking live pipeline during excavation", control: "Utility locate, hand-dig within tolerance zone of marked line", risk: "High" },
      { step: "Depressurize and isolate line for tie-in", hazard: "Release of product/pressure during tie-in", control: "Line isolated, depressurized, and verified before cutting", risk: "High" },
      { step: "Support excavation walls", hazard: "Trench collapse around pipeline", control: "Shoring/sloping per soil classification", risk: "High" },
      { step: "Perform tie-in work", hazard: "Ignition source near residual product vapors", control: "Gas testing continuous, no ignition sources in work zone", risk: "High" },
      { step: "Backfill and restore area", hazard: "Damage to pipeline coating/pipe during backfill", control: "Padding material used, backfill inspected in lifts", risk: "Medium" },
    ],
  },
  {
    slug: "sandblasting-and-surface-prep",
    title: "Sandblasting and Surface Prep",
    metaDescription: "Free Job Hazard Analysis template for sandblasting and surface preparation. Containment, respiratory protection, and hose safety.",
    steps: [
      { step: "Set up containment and ventilation", hazard: "Dust/media exposure to workers and bystanders", control: "Containment sheeting, ventilation/dust collection in place", risk: "Medium" },
      { step: "Don abrasive-blasting PPE", hazard: "Inhalation of silica/dust, projectile media injury", control: "Supplied-air respirator, blast hood, protective suit", risk: "High" },
      { step: "Perform blasting operation", hazard: "Hose whip or nozzle injury from pressure loss", control: "Dead-man control on nozzle, hose connections secured/whip-checked", risk: "High" },
      { step: "Monitor surrounding area for overspray", hazard: "Media/dust affecting nearby personnel or equipment", control: "Exclusion zone maintained, signage posted", risk: "Medium" },
      { step: "Clean up and dispose of spent media", hazard: "Exposure during cleanup, improper disposal", control: "PPE maintained during cleanup, media disposed per waste procedure", risk: "Low" },
    ],
  },
  {
    slug: "cryogenic-lpg-handling",
    title: "Cryogenic / LPG Handling",
    metaDescription: "Free Job Hazard Analysis template for cryogenic and LPG handling. Transfer equipment inspection, PPE, and bonding.",
    steps: [
      { step: "Inspect transfer equipment and hoses", hazard: "Hose/coupling failure releasing cryogenic liquid or LPG", control: "Inspect hoses/couplings, use rated equipment only", risk: "High" },
      { step: "Don cryogenic/LPG-rated PPE", hazard: "Cold burns/frostbite, or flammable vapor exposure", control: "Insulated gloves and face shield, or FR clothing for LPG", risk: "High" },
      { step: "Bond and ground transfer connections", hazard: "Static ignition of flammable vapor", control: "Bonding/grounding verified before connection", risk: "High" },
      { step: "Monitor transfer operation continuously", hazard: "Uncontrolled release from overfill or equipment failure", control: "Continuous attendance, level monitored, emergency shutoff accessible", risk: "High" },
      { step: "Disconnect and secure after transfer", hazard: "Residual pressure/liquid release during disconnect", control: "Lines depressurized/purged before disconnecting", risk: "Medium" },
    ],
  },
    {
    slug: "demolition-work",
    title: "Demolition Work",
    metaDescription: "Free Job Hazard Analysis template for demolition work. Structural survey, exclusion zones, and sequencing.",
    steps: [
      { step: "Survey structure and utilities before demolition", hazard: "Uncontrolled collapse, striking live utilities", control: "Structural survey completed, utilities disconnected/capped", risk: "High" },
      { step: "Establish exclusion zone", hazard: "Personnel struck by falling debris", control: "Barricades and signage at engineered exclusion distance", risk: "High" },
      { step: "Sequence demolition per engineering plan", hazard: "Unplanned structural collapse", control: "Follow approved demolition sequence, competent person supervision", risk: "High" },
      { step: "Control dust and manage debris", hazard: "Dust inhalation, debris pile instability", control: "Water suppression, debris removed in controlled manner", risk: "Medium" },
      { step: "Final inspection of site", hazard: "Unstable remnants left after demolition", control: "Post-demolition inspection before area handed over", risk: "Medium" },
    ],
  },
  {
    slug: "working-alone-remote-site-work",
    title: "Working Alone / Remote Site Work",
    metaDescription: "Free Job Hazard Analysis template for working alone and remote site work. Check-ins, communication equipment, and escalation.",
    steps: [
      { step: "Complete lone worker risk assessment", hazard: "Delayed emergency response if incident occurs", control: "Task assessed for lone-work suitability before approval", risk: "Medium" },
      { step: "Establish check-in procedure", hazard: "Incapacitation going unnoticed", control: "Scheduled check-ins with designated contact, escalation plan if missed", risk: "High" },
      { step: "Carry communication and emergency equipment", hazard: "Inability to call for help", control: "Charged phone/radio, GPS tracker or lone-worker device carried", risk: "High" },
      { step: "Perform task with situational awareness", hazard: "Hazards not identified without a second set of eyes", control: "Extra caution on hazard identification, avoid high-risk tasks alone", risk: "Medium" },
      { step: "Confirm safe completion and check-out", hazard: "Task assumed complete without confirmation", control: "Final check-out call/message to contact", risk: "Low" },
    ],
  },
  {
    slug: "radiography-ndt-operations",
    title: "Radiography (NDT) Operations",
    metaDescription: "Free Job Hazard Analysis template for radiography and NDT operations. Exposure boundaries, source security, and area sweeps.",
    steps: [
      { step: "Plan exposure and establish boundary", hazard: "Radiation exposure to personnel outside controlled area", control: "Calculated boundary per source strength, barriers and signage posted", risk: "High" },
      { step: "Verify source security and shielding", hazard: "Source exposure from shielding failure", control: "Source integrity checked, shielding inspected before use", risk: "High" },
      { step: "Conduct area sweep before and during exposure", hazard: "Unauthorized personnel entering radiation area", control: "Radiation survey meter used, area cleared and monitored", risk: "High" },
      { step: "Perform exposure per procedure", hazard: "Operator exposure from equipment malfunction", control: "Exposure device inspected, operator uses dosimeter and stays at safe distance", risk: "High" },
      { step: "Secure source after exposure", hazard: "Source left exposed or unsecured", control: "Source retracted/verified secure, survey confirms safe levels before area release", risk: "Medium" },
    ],
  },
  {
    slug: "fire-watch-duty",
    title: "Fire Watch Duty",
    metaDescription: "Free Job Hazard Analysis template for fire watch duty. Permit verification, continuous monitoring, and post-work checks.",
    steps: [
      { step: "Verify hot work permit and area conditions", hazard: "Fire watch beginning without valid authorization", control: "Confirm permit current, combustibles cleared before hot work starts", risk: "Medium" },
      { step: "Monitor work area continuously during hot work", hazard: "Undetected spark/ember ignition", control: "Uninterrupted visual monitoring, extinguisher within reach", risk: "High" },
      { step: "Respond to incipient fire", hazard: "Small fire escalating due to delayed response", control: "Immediate extinguisher use and alarm activation if fire starts", risk: "High" },
      { step: "Maintain post-work fire watch", hazard: "Smoldering material igniting after work stops", control: "Minimum 30-minute watch after hot work completion", risk: "Medium" },
      { step: "Log and close out fire watch", hazard: "Area handed over without confirmation of safety", control: "Final area check and permit closure documented", risk: "Low" },
    ],
  },
  {
    slug: "emergency-shutdown-procedures",
    title: "Emergency Shutdown Procedures",
    metaDescription: "Free Job Hazard Analysis template for emergency shutdown procedures. Trigger recognition, ESD activation, and verification.",
    steps: [
      { step: "Recognize shutdown trigger condition", hazard: "Delayed shutdown allowing incident to escalate", control: "Personnel trained to recognize shutdown criteria immediately", risk: "High" },
      { step: "Activate emergency shutdown system", hazard: "Incorrect or incomplete shutdown sequence", control: "ESD activated per procedure, all affected systems isolated", risk: "High" },
      { step: "Notify affected personnel and control room", hazard: "Personnel unaware of shutdown, continuing hazardous work", control: "Immediate notification via radio/alarm to all affected areas", risk: "High" },
      { step: "Verify safe state of equipment", hazard: "Assuming shutdown complete without verification", control: "Confirm isolation and de-energization at each affected point", risk: "Medium" },
      { step: "Document and investigate shutdown cause", hazard: "Recurring issue if root cause not addressed", control: "Incident logged, root cause investigation initiated before restart", risk: "Low" },
    ],
  },
  {
    slug: "housekeeping-in-high-hazard-zones",
    title: "Housekeeping in High-Hazard Zones",
    metaDescription: "Free Job Hazard Analysis template for housekeeping in high-hazard zones. Flammable storage, egress control, and audits.",
    steps: [
      { step: "Identify housekeeping requirements for the zone", hazard: "Generic housekeeping missing zone-specific hazards (static, ignition sources)", control: "Zone-specific housekeeping standard identified and posted", risk: "Medium" },
      { step: "Manage flammable/combustible material storage", hazard: "Accumulation of flammable waste near ignition sources", control: "Approved containers, regular removal schedule enforced", risk: "High" },
      { step: "Control walkway and egress clutter", hazard: "Blocked emergency egress in high-hazard area", control: "Egress routes kept clear, inspected regularly", risk: "High" },
      { step: "Clean spills and residues promptly", hazard: "Slip hazard or reactive material accumulation", control: "Immediate cleanup per material-specific procedure", risk: "Medium" },
      { step: "Conduct scheduled housekeeping audits", hazard: "Standards drifting without oversight", control: "Routine audit schedule with corrective action tracking", risk: "Low" },
    ],
  },
];
