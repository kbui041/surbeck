# Surbeck Orthodontics - Website

A React (Vite) website for Surbeck Orthodontics, Bellevue WA.

## Run it locally

You'll need [Node.js](https://nodejs.org) (version 18 or newer). Then, from this folder:

```bash
npm install      # one time - downloads dependencies
npm run dev      # start the local preview (opens at http://localhost:5173)
```

To build the production version:

```bash
npm run build    # outputs static files to /dist
npm run preview  # preview the built version locally
```

## Editing content (for Steph)

Almost everything you'll want to update day-to-day lives in **one file**:

```
src/data/siteData.js
```

It has clearly commented sections for:

- **Practice info** - phone, email, address
- **Hours** - the weekday schedule shown in the footer bar
- **Announcements** - the front-page updates list
- **Open-days calendar** - which days each month the office is open
- **Testimonial** - the patient quote on the home page
- **Results** - the before/after showcase entries

## Logo & headshot

The real assets are already in place:

- `public/surbeck-header.jpg` - the watercolor masthead banner (used in the header).
- `public/dr-surbeck.png` - Dr. Surbeck's headshot (used on the About page).

To update either, just replace the file in `public/` with a new one of the same name.

Edit that file, save, and the site updates. No other files need to be touched for routine updates.

## Adding before/after photos

The before/after panels currently use colored placeholders. To use real images:

1. Drop image files into the `public/` folder (e.g. `public/results/case1-before.jpg`).
2. In `src/components/BeforeAfter.jsx`, swap the placeholder `<div className="photo …" />`
   for an `<img src="/results/case1-before.jpg" alt="Before" />`.

Make sure you have signed patient photo-release / HIPAA authorization for any image published.

## Other drop-in assets

- **New patient form PDFs** - drop into `public/forms/` and set the `href` values in
  `src/pages/NewPatientForms.jsx`.

## Pages

- `/` Home - intro, testimonial, announcements + availability calendar, before/after, approach
- `/about` About Dr. Surbeck (full bio)
- `/resources` Patient Resources
- `/resources/new-patient-forms` New Patient Forms
- `/resources/faq` FAQ
- `/referrals` Referrals (friend/family + doctor forms)
- `/appointment` Appointment Request

## Notes

- Forms currently show a confirmation message but don't send anywhere yet. Wire them to
  an email service or your practice-management system before launch (the field names are
  already set up for this).
- Built with React 18, React Router 6, and Vite.
