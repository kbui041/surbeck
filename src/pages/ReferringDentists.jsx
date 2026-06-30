import { Link } from "react-router-dom";
import { PRACTICE } from "../data/siteData.js";

export default function ReferringDentists() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Referring Dentists</h1>
          <p className="lead">
            Thank you for trusting us with your patients. We see ourselves as a partner in their
            care, and we keep you informed at every step.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid cols-3">
            <div className="feature">
              <h3>Interdisciplinary collaboration</h3>
              <p>We coordinate closely with general dentists and specialists on shared cases.</p>
            </div>
            <div className="feature">
              <h3>Clear communication</h3>
              <p>You receive post-consultation reports and updates so you always know the plan.</p>
            </div>
            <div className="feature">
              <h3>Complex cases welcomed</h3>
              <p>Surgical, periodontal, implant, and retreatment cases are part of what we do.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: "72ch" }}>
          <h2>The referral process</h2>
          <p>
            Referring a patient is simple. Use our online doctor referral form, and we will take
            it from there, keeping you informed through consultation, planning, and treatment.
          </p>
          <p style={{ marginTop: 18 }}>
            <Link to="/referrals" className="btn">Submit a Doctor Referral</Link>
          </p>
          <p className="muted" style={{ marginTop: 18 }}>
            Questions about a case? Call us at <a href={PRACTICE.phoneHref}>{PRACTICE.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
