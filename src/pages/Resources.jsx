import { Link } from "react-router-dom";
import { PRACTICE } from "../data/siteData.js";

const newPatient = [
  { k: "01", h: "Your First Visit", p: "What to expect at your initial consultation." },
  { k: "02", h: "New Patient Forms", p: "Complete your intake paperwork ahead of your appointment.", to: "/resources/new-patient-forms" },
  { k: "03", h: "Insurance & Financing", p: "Flexible payment options and the plans we accept." },
];
const duringTreatment = [
  { k: "01", h: "Treatment Videos", p: "Short animations showing how appliances work.", to: "/resources/videos" },
  { k: "02", h: "Braces Care", p: "Keeping your braces and teeth clean and healthy." },
  { k: "03", h: "Aligner Care", p: "Wear schedule and cleaning tips for clear aligners." },
  { k: "04", h: "Orthodontic Emergencies", p: "What to do for a loose bracket or wire." },
  { k: "05", h: "Foods to Enjoy & Avoid", p: "Protecting your appliance during treatment." },
];

function ResList({ items }) {
  return (
    <ul className="res">
      {items.map((it) => (
        <li key={it.k}>
          <span className="rk">{it.k}</span>
          <div>
            <h4>{it.to ? <Link to={it.to} className="textlink">{it.h}</Link> : it.h}</h4>
            <p>{it.p}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Resources() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Patient Resources</h1>
          <p className="lead">
            Helpful information for new and existing patients, from your first visit to
            caring for your smile during and after treatment.
          </p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <Link to="/resources/new-patient-forms" className="btn">New Patient Forms</Link>
            <Link to="/resources/videos" className="btn btn-ghost">Treatment Videos</Link>
            <Link to="/resources/faq" className="btn btn-ghost">FAQ</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="panel">
              <h3 className="panel-title">New Patients</h3>
              <ResList items={newPatient} />
            </div>
            <div className="panel">
              <h3 className="panel-title">During Treatment</h3>
              <ResList items={duringTreatment} />
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-band">
          <div className="cta-copy">
            <h2>Have a Question Before Your Visit?</h2>
            <p className="lead">Our team is happy to help. Reach out any time.</p>
          </div>
          <div className="cta-actions">
            <a href={PRACTICE.phoneHref} className="btn btn-ghost">Call {PRACTICE.phone}</a>
            <Link to="/appointment" className="btn">Request an Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
