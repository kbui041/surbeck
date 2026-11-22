/* =========================================================================
   BEFORE & AFTER GALLERY
   -------------------------------------------------------------------------
   Every case in the gallery is listed here. Each case links to a single
   case-summary PDF (the patient's full before/after record) rather than
   separate before/after images:

   1. Save the case PDF in  public/gallery/  named after the case's `slug`:
        <slug>.pdf
      e.g. for slug "a-north"  ->  a-north.pdf
   2. `pdf` defaults to true, since every case currently has one on file.
      Set  pdf: false  on a case if its PDF isn't available yet — it will
      show a labeled "Before/After" placeholder instead, so the gallery
      stays complete while a record is pending.

   months: treatment length in months. Use null if not recorded.

   No patient name/initials are stored here by design — the practice asked
   for zero identifying info on the public site, so cases are referenced only
   by category, treatment length, and an internal slug (not shown to users).
   ========================================================================= */

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
  c("Adolescent", "Class I Crowding", 9, "adol-a-north"),
  c("Adolescent", "Class I Crowding", 12, "adol-aida-j"),
  c("Adolescent", "Class I Crowding", 12, "adol-c-lee"),
  c("Adolescent", "Class I Crowding", 11, "adol-diya-n"),
  c("Adolescent", "Class I Crowding", 14, "adol-e-hemphill"),
  c("Adolescent", "Class I Crowding", 12, "adol-elsie-e"),
  c("Adolescent", "Class I Crowding", 10, "adol-e-johnston"),
  c("Adolescent", "Class I Crowding", 11, "adol-harlow-s"),
  c("Adolescent", "Class I Crowding", 14, "adol-hayden-h"),
  c("Adolescent", "Class I Crowding", 12, "adol-jonah-m"),
  c("Adolescent", "Class I Crowding", 13, "adol-kaden-l"),
  c("Adolescent", "Class I Crowding", 12, "adol-kasen-s"),
  c("Adolescent", "Class I Crowding", 9, "adol-r-nikhil"),

  c("Adolescent", "Spacing", 11, "adol-d-pegushin"),
  c("Adolescent", "Spacing", 13, "adol-gabriella-n"),

  c("Adolescent", "Edge-to-edge", 10, "adol-c-shokri"),
  c("Adolescent", "Edge-to-edge", 10, "adol-linus-l"),
  c("Adolescent", "Edge-to-edge", 12, "adol-sophia-m"),

  c("Adolescent", "Implant Placement", 11, "adol-f-ballas-implant"),

  c("Adolescent", "Missing Tooth", 23, "adol-a-scribner"),
  c("Adolescent", "Missing Tooth", 18, "adol-c-wilson"),
  c("Adolescent", "Missing Tooth", 11, "adol-f-ballas-missing"),

  c("Adolescent", "Class II Headgear", 16, "adol-kai-h"),
  c("Adolescent", "Class II Headgear", 19, "adol-p-trescases"),
  c("Adolescent", "Class II Headgear", 25, "adol-s-linkon"),

  c("Adolescent", "Class I-II Crowding", 11, "adol-e-cunliffe"),
  c("Adolescent", "Class I-II Crowding", 11, "adol-k-lynch"),
  c("Adolescent", "Class I-II Crowding", 15, "adol-l-smith"),
  c("Adolescent", "Class I-II Crowding", 13, "adol-r-downing"),
  c("Adolescent", "Class I-II Crowding", 12, "adol-z-brown"),

  c("Adolescent", "Impacted Teeth", 13, "adol-a-price"),
  c("Adolescent", "Impacted Teeth", 13, "adol-f-gerron"),
  c("Adolescent", "Impacted Teeth", 14, "adol-s-ortego"),
  c("Adolescent", "Impacted Teeth", 16, "adol-t-guyette"),

  c("Adolescent", "Mesially Impacted Molars", 16, "adol-keira-l"),
  c("Adolescent", "Mesially Impacted Molars", 16, "adol-l-noerenberg"),

  /* ------------------------------- ADULT ------------------------------ */
  c("Adult", "Edge-to-edge", 8, "adult-b-oquin-edge"),
  c("Adult", "Edge-to-edge", 9, "adult-d-morrow"),
  c("Adult", "Edge-to-edge", 12, "adult-j-lundin"),
  c("Adult", "Edge-to-edge", 11, "adult-r-moctezuma"),

  c("Adult", "Implant Placement", 14, "adult-c-stair"),
  c("Adult", "Implant Placement", 12, "adult-e-torres"),
  c("Adult", "Implant Placement", 5, "adult-g-farringer"),
  c("Adult", "Implant Placement", 14, "adult-isabel-v"),
  c("Adult", "Implant Placement", 14, "adult-j-bever"),
  c("Adult", "Implant Placement", 17, "adult-k-price"),
  c("Adult", "Implant Placement", 17, "adult-l-igoe"),
  c("Adult", "Implant Placement", 13, "adult-m-miguel"),
  c("Adult", "Implant Placement", 13, "adult-p-lawlor"),
  c("Adult", "Implant Placement", 4, "adult-yifan-w"),

  c("Adult", "Pre-restorative Wear", 11, "adult-a-epperson"),
  c("Adult", "Pre-restorative Wear", 8, "adult-b-oquin-wear"),
  c("Adult", "Pre-restorative Wear", 13, "adult-d-epp"),
  c("Adult", "Pre-restorative Wear", 15, "adult-m-martinez"),
  c("Adult", "Pre-restorative Wear", 12, "adult-p-ramanathan"),
  c("Adult", "Pre-restorative Wear", 9, "adult-s-farrar"),

  c("Adult", "Spacing", 11, "adult-eugene-l"),
  c("Adult", "Spacing", 14, "adult-phoung-l-spacing"),

  c("Adult", "Class I Crowding", 10, "adult-a-chisman"),
  c("Adult", "Class I Crowding", 10, "adult-blair-b"),
  c("Adult", "Class I Crowding", 10, "adult-hannah-k"),
  c("Adult", "Class I Crowding", 7, "adult-j-davis"),
  c("Adult", "Class I Crowding", 6, "adult-k-chua"),
  c("Adult", "Class I Crowding", 8, "adult-k-lewis"),
  c("Adult", "Class I Crowding", 15, "adult-n-gayatri"),
  c("Adult", "Class I Crowding", null, "adult-noam-m"),
  c("Adult", "Class I Crowding", 12, "adult-r-moutentan"),
  c("Adult", "Class I Crowding", 9, "adult-s-beswick"),
  c("Adult", "Class I Crowding", 5, "adult-s-patton"),
  c("Adult", "Class I Crowding", 7, "adult-s-schuler"),
  c("Adult", "Class I Crowding", 5, "adult-t-ohara"),
  c("Adult", "Class I Crowding", 9, "adult-t-ortega"),

  c("Adult", "Missing Mandibular Incisor", 13, "adult-edith-cl"),

  c("Adult", "Open Bite", 15, "adult-d-gottleib"),
  c("Adult", "Open Bite", 15, "adult-misa-n"),

  c("Adult", "Perio Involvement", 14, "adult-phoung-l-perio"),

  c("Adult", "Class II Surgery", 23, "adult-g-holmes"),
  c("Adult", "Class II Surgery", 24, "adult-j-rodriguez"),

  c("Adult", "Class III Surgery", 17, "adult-a-grant"),
  c("Adult", "Class III Surgery", 15, "adult-c-head"),
  c("Adult", "Class III Surgery", 17, "adult-e-prewitt"),
  c("Adult", "Class III Surgery", 23, "adult-r-lee"),
];
