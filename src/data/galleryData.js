/* =========================================================================
   BEFORE & AFTER GALLERY
   -------------------------------------------------------------------------
   Every case in the gallery is listed here. To add photos for a case:

   1. Save two images in  public/gallery/  named after the case's `slug`:
        <slug>-before.jpg   and   <slug>-after.jpg
      e.g. for slug "a-north"  ->  a-north-before.jpg / a-north-after.jpg
   2. Change  photos: false  to  photos: true  on that case.

   Cases with photos: false show a labeled placeholder, so the gallery stays
   complete while photos are being added.

   months: treatment length in months. Use null if not recorded.
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

const c = (group, category, patient, months, slug, photos = false) => ({
  group,
  category,
  patient,
  months,
  slug,
  photos,
});

export const CASES = [
  /* ---------------------------- ADOLESCENT ---------------------------- */
  c("Adolescent", "Class I Crowding", "A. North", 9, "adol-a-north"),
  c("Adolescent", "Class I Crowding", "Aida J.", 12, "adol-aida-j"),
  c("Adolescent", "Class I Crowding", "C. Lee", 12, "adol-c-lee"),
  c("Adolescent", "Class I Crowding", "Diya N.", 11, "adol-diya-n"),
  c("Adolescent", "Class I Crowding", "E. Hemphill", 14, "adol-e-hemphill"),
  c("Adolescent", "Class I Crowding", "Elsie E.", 12, "adol-elsie-e"),
  c("Adolescent", "Class I Crowding", "E. Johnston", 10, "adol-e-johnston"),
  c("Adolescent", "Class I Crowding", "Harlow S.", 11, "adol-harlow-s"),
  c("Adolescent", "Class I Crowding", "Hayden H.", 14, "adol-hayden-h"),
  c("Adolescent", "Class I Crowding", "Jonah M.", 12, "adol-jonah-m"),
  c("Adolescent", "Class I Crowding", "Kaden L.", 13, "adol-kaden-l"),
  c("Adolescent", "Class I Crowding", "Kasen S.", 12, "adol-kasen-s"),
  c("Adolescent", "Class I Crowding", "R. Nikhil", 9, "adol-r-nikhil"),

  c("Adolescent", "Spacing", "D. Pegushin", 11, "adol-d-pegushin"),
  c("Adolescent", "Spacing", "Gabriella N.", 13, "adol-gabriella-n"),

  c("Adolescent", "Edge-to-edge", "C. Shokri", 10, "adol-c-shokri"),
  c("Adolescent", "Edge-to-edge", "Linus L.", 10, "adol-linus-l"),
  c("Adolescent", "Edge-to-edge", "Sophia M.", 12, "adol-sophia-m"),

  c("Adolescent", "Implant Placement", "F. Ballas", 11, "adol-f-ballas-implant"),

  c("Adolescent", "Missing Tooth", "A. Scribner", 23, "adol-a-scribner"),
  c("Adolescent", "Missing Tooth", "C. Wilson", 18, "adol-c-wilson"),
  c("Adolescent", "Missing Tooth", "F. Ballas", 11, "adol-f-ballas-missing"),

  c("Adolescent", "Class II Headgear", "Kai H.", 16, "adol-kai-h"),
  c("Adolescent", "Class II Headgear", "P. Trescases", 19, "adol-p-trescases"),
  c("Adolescent", "Class II Headgear", "S. Linkon", 25, "adol-s-linkon"),

  c("Adolescent", "Class I-II Crowding", "E. Cunliffe", 11, "adol-e-cunliffe"),
  c("Adolescent", "Class I-II Crowding", "K. Lynch", 11, "adol-k-lynch"),
  c("Adolescent", "Class I-II Crowding", "L. Smith", 15, "adol-l-smith"),
  c("Adolescent", "Class I-II Crowding", "R. Downing", 13, "adol-r-downing"),
  c("Adolescent", "Class I-II Crowding", "Z. Brown", 12, "adol-z-brown"),

  c("Adolescent", "Impacted Teeth", "A. Price", 13, "adol-a-price"),
  c("Adolescent", "Impacted Teeth", "F. Gerron", 13, "adol-f-gerron"),
  c("Adolescent", "Impacted Teeth", "S. Ortego", 14, "adol-s-ortego"),
  c("Adolescent", "Impacted Teeth", "T. Guyette", 16, "adol-t-guyette"),

  c("Adolescent", "Mesially Impacted Molars", "Keira L.", 16, "adol-keira-l"),
  c("Adolescent", "Mesially Impacted Molars", "L. Noerenberg", 16, "adol-l-noerenberg"),

  /* ------------------------------- ADULT ------------------------------ */
  c("Adult", "Edge-to-edge", "B. O’Quin", 8, "adult-b-oquin-edge"),
  c("Adult", "Edge-to-edge", "D. Morrow", 9, "adult-d-morrow"),
  c("Adult", "Edge-to-edge", "J. Lundin", 12, "adult-j-lundin"),
  c("Adult", "Edge-to-edge", "R. Moctezuma", 11, "adult-r-moctezuma"),

  c("Adult", "Implant Placement", "C. Stair", 14, "adult-c-stair"),
  c("Adult", "Implant Placement", "E. Torres", 12, "adult-e-torres"),
  c("Adult", "Implant Placement", "G. Farringer", 5, "adult-g-farringer"),
  c("Adult", "Implant Placement", "Isabel V.", 14, "adult-isabel-v"),
  c("Adult", "Implant Placement", "J. Bever", 14, "adult-j-bever"),
  c("Adult", "Implant Placement", "K. Price", 17, "adult-k-price"),
  c("Adult", "Implant Placement", "L. Igoe", 17, "adult-l-igoe"),
  c("Adult", "Implant Placement", "M. Miguel", 13, "adult-m-miguel"),
  c("Adult", "Implant Placement", "P. Lawlor", 13, "adult-p-lawlor"),
  c("Adult", "Implant Placement", "Yifan W.", 4, "adult-yifan-w"),

  c("Adult", "Pre-restorative Wear", "A. Epperson", 11, "adult-a-epperson"),
  c("Adult", "Pre-restorative Wear", "B. O’Quin", 8, "adult-b-oquin-wear"),
  c("Adult", "Pre-restorative Wear", "D. Epp", 13, "adult-d-epp"),
  c("Adult", "Pre-restorative Wear", "M. Martinez", 15, "adult-m-martinez"),
  c("Adult", "Pre-restorative Wear", "P. Ramanathan", 12, "adult-p-ramanathan"),
  c("Adult", "Pre-restorative Wear", "S. Farrar", 9, "adult-s-farrar"),

  c("Adult", "Spacing", "Eugene L.", 11, "adult-eugene-l"),
  c("Adult", "Spacing", "Phoung L.", 14, "adult-phoung-l-spacing"),

  c("Adult", "Class I Crowding", "A. Chisman", 10, "adult-a-chisman"),
  c("Adult", "Class I Crowding", "Blair B.", 10, "adult-blair-b"),
  c("Adult", "Class I Crowding", "Hannah K.", 10, "adult-hannah-k"),
  c("Adult", "Class I Crowding", "J. Davis", 7, "adult-j-davis"),
  c("Adult", "Class I Crowding", "K. Chua", 6, "adult-k-chua"),
  c("Adult", "Class I Crowding", "K. Lewis", 8, "adult-k-lewis"),
  c("Adult", "Class I Crowding", "N. Gayatri", 15, "adult-n-gayatri"),
  c("Adult", "Class I Crowding", "Noam M.", null, "adult-noam-m"),
  c("Adult", "Class I Crowding", "R. Moutentan", 12, "adult-r-moutentan"),
  c("Adult", "Class I Crowding", "S. Beswick", 9, "adult-s-beswick"),
  c("Adult", "Class I Crowding", "S. Patton", 5, "adult-s-patton"),
  c("Adult", "Class I Crowding", "S. Schuler", 7, "adult-s-schuler"),
  c("Adult", "Class I Crowding", "T. O’Hara", 5, "adult-t-ohara"),
  c("Adult", "Class I Crowding", "T. Ortega", 9, "adult-t-ortega"),

  c("Adult", "Missing Mandibular Incisor", "Edith CL.", 13, "adult-edith-cl"),

  c("Adult", "Open Bite", "D. Gottleib", 15, "adult-d-gottleib"),
  c("Adult", "Open Bite", "Misa N.", 15, "adult-misa-n"),

  c("Adult", "Perio Involvement", "Phoung L.", 14, "adult-phoung-l-perio"),

  c("Adult", "Class II Surgery", "G. Holmes", 23, "adult-g-holmes"),
  c("Adult", "Class II Surgery", "J. Rodriguez", 24, "adult-j-rodriguez"),

  c("Adult", "Class III Surgery", "A. Grant", 17, "adult-a-grant"),
  c("Adult", "Class III Surgery", "C. Head", 15, "adult-c-head"),
  c("Adult", "Class III Surgery", "E. Prewitt", 17, "adult-e-prewitt"),
  c("Adult", "Class III Surgery", "R. Lee", 23, "adult-r-lee"),
];
