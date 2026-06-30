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

/* Office hours shown in the footer bar. Edit times here. */
export const HOURS = [
  { day: "Mon", time: "7:30am – 5:00pm" },
  { day: "Tues", time: "8:30am – 5:00pm" },
  { day: "Weds", time: "7:30am – 5:00pm" },
  { day: "Thurs", time: "9:30am – 5:00pm" },
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
    body: "Complimentary consultations are available for children, teens, and adults. Call or use the appointment request form to get started.",
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
