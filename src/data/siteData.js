/* =========================================================================
   SURBECK ORTHODONTICS: EDITABLE CONTENT
   -------------------------------------------------------------------------
   Steph: this is the ONE file to edit for ongoing updates: announcements
   and the monthly "days open" calendar. You don't need to touch any other
   file. Keep the quotes, brackets, and commas exactly as shown, then save.
   (In dev the site updates instantly; after a rebuild it ships live.)
   ========================================================================= */

/* ------------------------------ PRACTICE INFO -----------------------------
   Basic details reused across the site. Update here if anything changes. */
export const PRACTICE = {
  name: "Surbeck",
  tagline: "Orthodontics",
  phone: "(425) 455-1944",
  phoneHref: "tel:+14254551944",
  email: "admin@surbeckortho.com",
  emailHref: "mailto:admin@surbeckortho.com",
  addressLine1: "375 118th Ave SE, Suite 100",
  addressLine2: "Bellevue, WA 98005",
  hours: "Mon–Thu by appointment",
};

/* Google reviews. This links to a Google search for the practice by name and
   address, which reliably surfaces our real Google Business Profile (with its
   actual review count/rating and reviews) without us hosting or re-typing any
   review text ourselves. If we get a dedicated Google Maps/Business Profile
   link later, swap it in here. */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Surbeck+Orthodontics+375+118th+Ave+SE+Bellevue+WA+reviews";

/* Office hours shown in the footer bar. Edit times here. */
export const HOURS = [
  { day: "Mon", time: "7:30am – 5:00pm" },
  { day: "Tues", time: "8:30am – 5:00pm" },
  { day: "Weds", time: "7:30am – 5:00pm" },
  { day: "Thurs", time: "8:15am – 5:00pm" },
];

/* Patient testimonial featured on the home page. */
export const TESTIMONIAL = {
  quote:
    "Dr. Surbeck is a wonderful orthodontist who works so hard to gain the trust of his patients and their families! We are so lucky to have found his beautiful and welcoming practice!",
  author: "Stephanie A., Client",
};

/* ------------------------------ ANNOUNCEMENTS -----------------------------
   Newest first. tag is optional; use "" for none. */
export const ANNOUNCEMENTS = [
  {
    date: "June 28, 2026",
    title: "Summer hours begin July 1",
    body: "We'll be open Monday through Thursday through the end of August. Friday appointments resume in September.",
    tag: "New",
  },
  {
    date: "June 20, 2026",
    title: "Now welcoming new patients",
    body: "Consultations are available for children, teens, and adults. Call or use the appointment request form to get started.",
    tag: "",
  },
  {
    date: "June 10, 2026",
    title: "Updated insurance & financing options",
    body: "We've added new flexible payment plans. Ask our front desk for details at your next visit.",
    tag: "Policy",
  },
];

/* ----------------------------- OPEN-DAYS CALENDAR -------------------------
   List the day-numbers the office is OPEN for each month ("YYYY-MM").
   Any day not listed shows as CLOSED. Copy a line to set up a new month. */
export const OPEN_DAYS = {
  "2026-06": [1, 2, 3, 4, 8, 9, 10, 11, 15, 16, 17, 18, 22, 23, 24, 25, 29, 30],
  "2026-07": [1, 2, 6, 7, 8, 9, 13, 14, 15, 16, 20, 21, 22, 23, 27, 28, 29, 30],
  "2026-08": [3, 4, 5, 6, 10, 11, 12, 13, 17, 18, 19, 20, 24, 25, 26, 27, 31],
  "2026-09": [1, 2, 3, 4, 8, 9, 10, 11, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 28, 29, 30],
};

export const CALENDAR_NOTE =
  "Open Monday–Thursday by appointment. Closed Friday–Sunday and major holidays.";

/* -------------------------------- RESULTS --------------------------------
   Before/after showcase. Add real photo files later (see README).
   tone controls the placeholder color until real images are added. */
export const RESULTS = [
  { category: "Severe Crowding", patient: "Teen patient", length: "14 months", tone: "duo-pine" },
  { category: "Deep Overbite", patient: "Adult patient", length: "18 months", tone: "duo-sea" },
  { category: "Spacing & Alignment", patient: "Adult patient", length: "9 months", tone: "duo-sage" },
];

/* ----------------------------- VIDEO LIBRARY ------------------------------
   Dolphin Aquarium animations, hosted on our UNLISTED YouTube channel.

   To add a video:
   1. In Aquarium, export the animation and upload it to YouTube.
   2. Set the visibility to "Unlisted" (NOT Private - private videos cannot
      be embedded, and NOT Public - our Aquarium license requires unlisted).
   3. Copy the share link, e.g. https://youtu.be/vgofWMXfdXQ
      The id is the part after the last slash:  vgofWMXfdXQ
   4. Add a line below. Keep the quotes, brackets, and commas as shown.

   category must be one of the VIDEO_CATEGORIES listed underneath. */
export const VIDEO_CATEGORIES = [
  "Appliances",
  "Procedures",
  "Braces & Aligners",
  "Daily Care",
  "Emergencies",
  "Retention",
];

export const VIDEOS = [
  {
    id: "rWMdtlLivHI",
    title: "RPE (Mixed Dentition)",
    category: "Appliances",
    blurb:
      "How an expander is placed and how it gradually widens the upper jaw to create room for permanent teeth.",
  },
  {
    id: "02iPP1CmUu4",
    title: "E-Space Maintainer / Holding Arch",
    category: "Appliances",
    blurb:
      "A space-maintaining appliance that holds room open in the arch after a tooth is lost early, so permanent teeth have the space they need to come in.",
  },
  {
    id: "YYSSqT2NwgE",
    title: "2x4 Appliance (Crowding - Coil)",
    category: "Appliances",
    blurb:
      "An early appliance that creates space for crowded incoming front teeth using brackets on just four teeth.",
  },
  {
    id: "mKkeyglfXnk",
    title: "Bite Pillow / Occlusal Glass Ionomer / Bite Ramp",
    category: "Appliances",
    blurb:
      "A small appliance placed on the back teeth to open the bite temporarily, making it easier for the front teeth to move without interference.",
  },
  {
    id: "pkz7AT2fpdU",
    title: "Cervical Headgear",
    category: "Appliances",
    blurb:
      "How this appliance is worn and how it helps guide upper jaw growth in growing patients.",
  },
  {
    id: "NLWvqvqJyKI",
    title: "Mamelon Reduction",
    category: "Procedures",
    blurb:
      "Smoothing the naturally bumpy edge of newly erupted front teeth for a more even smile line.",
  },
  {
    id: "bK_d-SOZRBI",
    title: "Supra-crestal Fibrotomy",
    category: "Procedures",
    blurb:
      "A simple procedure that can help reduce relapse in a tooth that was significantly rotated before treatment.",
  },
  {
    id: "3A-EeXbKNuw",
    title: "First Bicuspid Extraction with Favorable Lip Posture",
    category: "Procedures",
    blurb:
      "Why removing a premolar is sometimes part of a treatment plan, and how it can help achieve a more balanced profile.",
  },
  {
    id: "OP3EsaHhdjk",
    title: "Interproximal Reduction",
    category: "Procedures",
    blurb:
      "A quick, painless process that creates small amounts of space between teeth to help relieve crowding.",
  },
  {
    id: "3T-bULvR3Sw",
    title: "Impacted Cuspid (Labial) - Gold Chain Treated",
    category: "Procedures",
    blurb:
      "How a tooth stuck below the gum toward the lip side is gently guided into place with a small chain.",
  },
  {
    id: "71zMvoucNwU",
    title: "Impacted Cuspid (Palatal) Treated",
    category: "Procedures",
    blurb:
      "How a tooth stuck below the gum toward the roof of the mouth is guided into its proper position.",
  },
  {
    id: "fxRz_bU5G_s",
    title: "Mandibular Setback, Lips Closed",
    category: "Procedures",
    blurb:
      "An illustration of how moving the lower jaw back can improve a bite and facial balance.",
  },
  {
    id: "NRJnV177iuM",
    title: "Mandibular Advancement",
    category: "Procedures",
    blurb:
      "An illustration of how bringing the lower jaw forward can correct certain bite relationships.",
  },
  {
    id: "yjEGxWttGt4",
    title: "Elastics: Class II Overjet Compliance",
    category: "Daily Care",
    blurb:
      "How to wear the rubber bands (elastics) used to correct an overbite, and why wearing them consistently matters.",
  },
  {
    id: "dj1k4zLqWLo",
    title: "Elastics: Buccal Crossbite",
    category: "Daily Care",
    blurb: "How to wear the elastics used to correct a crossbite on the back teeth.",
  },
  {
    id: "tMIUws_x3jo",
    title: "Elastics: Palatal Crossbite",
    category: "Daily Care",
    blurb:
      "How to wear the elastics used to correct a crossbite involving the roof of the mouth.",
  },
  {
    id: "pOigD9f76CM",
    title: "Elastics: Asymmetric",
    category: "Daily Care",
    blurb: "How to wear elastics set up to correct a bite that's uneven from one side to the other.",
  },
  {
    id: "cQU9WkAEKk4",
    title: "Elastics: Anterior Open Bite",
    category: "Daily Care",
    blurb:
      "How to wear the elastics used to help close a gap between the upper and lower front teeth.",
  },
];
