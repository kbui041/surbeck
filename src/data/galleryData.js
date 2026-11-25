/* =========================================================================
   BEFORE & AFTER GALLERY
   -------------------------------------------------------------------------
   Every case in the gallery is listed here. Each case links to a single
   case-summary PDF (the patient's full before/after record) rather than
   separate before/after images:

   1. Save the case PDF in  public/gallery/  named after the case's `slug`:
        <slug>.pdf
      e.g. for slug "case-084"  ->  case-084.pdf
      Also save a square-ish preview image in  public/gallery/thumbs/  as
        <slug>.jpg   (first page of the PDF, ~541x700, matches the others)
   2. `pdf` defaults to true, since every case currently has one on file.
      Set  pdf: false  on a case if its PDF isn't available yet — it will
      show a labeled "Before/After" placeholder instead, so the gallery
      stays complete while a record is pending.

   months: treatment length in months. Use null if not recorded.

   No patient name/initials are stored here, and — as of Nov 2026 — the
   `slug` is no longer derived from a patient's name either (it used to be,
   e.g. "adol-aida-j"). Slugs are now plain sequential IDs ("case-001",
   "case-002", ...) with zero identifying info anywhere in the filename, per
   the practice's request. When adding a new case, use the next unused
   number — do NOT name the slug (or the PDF/thumbnail files) after the
   patient in any way. */

export const GROUPS = ["Adolescent", "Adult"];

/* Category order per group, used for the filter chips. */
export const CATEGORIES = {
  Adolescent: [
    "Class I Crowding",
    "Spacing",
    "Edge-to-edge",
    "Implant Placement",
    "Missing Tooth",
    "Class II Headgear",
    "Class I-II Crowding",
    "Impacted Teeth",
    "Mesially Impacted Molars",
  ],
  Adult: [
    "Edge-to-edge",
    "Implant Placement",
    "Pre-restorative Wear",
    "Spacing",
    "Class I Crowding",
    "Missing Mandibular Incisor",
    "Open Bite",
    "Perio Involvement",
    "Class II Surgery",
    "Class III Surgery",
  ],
};

/* -------------------------------- TOPICS ---------------------------------
   Named views of the gallery, used by the links on the Complex Cases page.
   A link to  /gallery?topic=jaw-surgery  opens the gallery already filtered.
   group "All" shows both adolescent and adult cases. */
export const TOPICS = {
  "jaw-surgery": {
    label: "Jaw (orthognathic) surgery",
    group: "Adult",
    categories: ["Class II Surgery", "Class III Surgery"],
  },
  "impacted-teeth": {
    label: "Impacted & unerupted teeth",
    group: "Adolescent",
    categories: ["Impacted Teeth", "Mesially Impacted Molars"],
  },
  "missing-teeth": {
    label: "Missing teeth & implant site preparation",
    group: "All",
    categories: ["Missing Tooth", "Missing Mandibular Incisor", "Implant Placement"],
  },
  perio: {
    label: "Periodontal coordination",
    group: "Adult",
    categories: ["Perio Involvement"],
  },
  "adult-treatment": {
    label: "Adult orthodontic treatment",
    group: "Adult",
    categories: [],
  },
  "open-bite": {
    label: "Open bites",
    group: "Adult",
    categories: ["Open Bite"],
  },
  "bite-discrepancies": {
    label: "Significant bite discrepancies",
    group: "All",
    categories: [
      "Class II Headgear",
      "Class I-II Crowding",
      "Edge-to-edge",
      "Class II Surgery",
      "Class III Surgery",
    ],
  },
  restorative: {
    label: "Coordination with restorative dentistry",
    group: "Adult",
    categories: ["Pre-restorative Wear", "Implant Placement"],
  },
};

const c = (group, category, months, slug, pdf = true) => ({
  group,
  category,
  months,
  slug,
  pdf,
});

export const CASES = [
  /* ---------------------------- ADOLESCENT ---------------------------- */
  c("Adolescent", "Class I Crowding", 9, "case-001"),
  c("Adolescent", "Class I Crowding", 12, "case-002"),
  c("Adolescent", "Class I Crowding", 12, "case-003"),
  c("Adolescent", "Class I Crowding", 11, "case-004"),
  c("Adolescent", "Class I Crowding", 14, "case-005"),
  c("Adolescent", "Class I Crowding", 12, "case-006"),
  c("Adolescent", "Class I Crowding", 10, "case-007"),
  c("Adolescent", "Class I Crowding", 11, "case-008"),
  c("Adolescent", "Class I Crowding", 14, "case-009"),
  c("Adolescent", "Class I Crowding", 12, "case-010"),
  c("Adolescent", "Class I Crowding", 13, "case-011"),
  c("Adolescent", "Class I Crowding", 12, "case-012"),
  c("Adolescent", "Class I Crowding", 9, "case-013"),
  c("Adolescent", "Class I Crowding", 11, "case-083"),

  c("Adolescent", "Spacing", 11, "case-014"),
  c("Adolescent", "Spacing", 13, "case-015"),

  c("Adolescent", "Edge-to-edge", 10, "case-016"),
  c("Adolescent", "Edge-to-edge", 10, "case-017"),
  c("Adolescent", "Edge-to-edge", 12, "case-018"),

  c("Adolescent", "Implant Placement", 11, "case-019"),

  c("Adolescent", "Missing Tooth", 23, "case-020"),
  c("Adolescent", "Missing Tooth", 18, "case-021"),
  c("Adolescent", "Missing Tooth", 11, "case-022"),

  c("Adolescent", "Class II Headgear", 16, "case-023"),
  c("Adolescent", "Class II Headgear", 19, "case-024"),
  c("Adolescent", "Class II Headgear", 25, "case-025"),

  c("Adolescent", "Class I-II Crowding", 11, "case-026"),
  c("Adolescent", "Class I-II Crowding", 11, "case-027"),
  c("Adolescent", "Class I-II Crowding", 15, "case-028"),
  c("Adolescent", "Class I-II Crowding", 13, "case-029"),
  c("Adolescent", "Class I-II Crowding", 12, "case-030"),

  c("Adolescent", "Impacted Teeth", 13, "case-031"),
  c("Adolescent", "Impacted Teeth", 13, "case-032"),
  c("Adolescent", "Impacted Teeth", 14, "case-033"),
  c("Adolescent", "Impacted Teeth", 16, "case-034"),

  c("Adolescent", "Mesially Impacted Molars", 16, "case-035"),
  c("Adolescent", "Mesially Impacted Molars", 16, "case-036"),

  /* ------------------------------- ADULT ------------------------------ */
  c("Adult", "Edge-to-edge", 8, "case-037"),
  c("Adult", "Edge-to-edge", 9, "case-038"),
  c("Adult", "Edge-to-edge", 12, "case-039"),
  c("Adult", "Edge-to-edge", 11, "case-040"),

  c("Adult", "Implant Placement", 14, "case-041"),
  c("Adult", "Implant Placement", 12, "case-042"),
  c("Adult", "Implant Placement", 5, "case-043"),
  c("Adult", "Implant Placement", 14, "case-044"),
  c("Adult", "Implant Placement", 14, "case-045"),
  c("Adult", "Implant Placement", 17, "case-046"),
  c("Adult", "Implant Placement", 17, "case-047"),
  c("Adult", "Implant Placement", 13, "case-048"),
  c("Adult", "Implant Placement", 13, "case-049"),
  c("Adult", "Implant Placement", 4, "case-050"),

  c("Adult", "Pre-restorative Wear", 11, "case-051"),
  c("Adult", "Pre-restorative Wear", 8, "case-052"),
  c("Adult", "Pre-restorative Wear", 13, "case-053"),
  c("Adult", "Pre-restorative Wear", 15, "case-054"),
  c("Adult", "Pre-restorative Wear", 12, "case-055"),
  c("Adult", "Pre-restorative Wear", 9, "case-056"),

  c("Adult", "Spacing", 11, "case-057"),
  c("Adult", "Spacing", 14, "case-058"),

  c("Adult", "Class I Crowding", 10, "case-059"),
  c("Adult", "Class I Crowding", 10, "case-060"),
  c("Adult", "Class I Crowding", 10, "case-061"),
  c("Adult", "Class I Crowding", 7, "case-062"),
  c("Adult", "Class I Crowding", 6, "case-063"),
  c("Adult", "Class I Crowding", 8, "case-064"),
  c("Adult", "Class I Crowding", 15, "case-065"),
  c("Adult", "Class I Crowding", null, "case-066"),
  c("Adult", "Class I Crowding", 12, "case-067"),
  c("Adult", "Class I Crowding", 9, "case-068"),
  c("Adult", "Class I Crowding", 5, "case-069"),
  c("Adult", "Class I Crowding", 7, "case-070"),
  c("Adult", "Class I Crowding", 5, "case-071"),
  c("Adult", "Class I Crowding", 9, "case-072"),

  c("Adult", "Missing Mandibular Incisor", 13, "case-073"),

  c("Adult", "Open Bite", 15, "case-074"),
  c("Adult", "Open Bite", 15, "case-075"),

  c("Adult", "Perio Involvement", 14, "case-076"),

  c("Adult", "Class II Surgery", 23, "case-077"),
  c("Adult", "Class II Surgery", 24, "case-078"),

  c("Adult", "Class III Surgery", 17, "case-079"),
  c("Adult", "Class III Surgery", 15, "case-080"),
  c("Adult", "Class III Surgery", 17, "case-081"),
  c("Adult", "Class III Surgery", 23, "case-082"),
];
