import { Link } from "react-router-dom";
import { PRACTICE, HOURS } from "../data/siteData.js";
import { asset } from "../lib/asset.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label="Surbeck Orthodontics">
              <img className="footer-logo" src={asset("logo-art.png")} alt="Surbeck Orthodontics" />
            </Link>
            <p className="footer-tag">
              Efficient, comprehensive orthodontic care for patients of all ages in
              Bellevue, Washington.
            </p>
          </div>

          <div className="footer-cols">
            <div>
              <h4>Visit</h4>
              <address>
                {PRACTICE.addressLine1}<br />
                {PRACTICE.addressLine2}
              </address>
              <p className="footer-contact">
                <a href={PRACTICE.phoneHref}>{PRACTICE.phone}</a><br />
                <a href={PRACTICE.emailHref}>{PRACTICE.email}</a>
              </p>
            </div>

            <div>
              <h4>Explore</h4>
              <nav className="fnav">
                <Link to="/resources">Patient Resources</Link>
                <Link to="/about">About Dr. Surbeck</Link>
                <Link to="/referrals">Referrals</Link>
                <Link to="/appointment">Appointment Request</Link>
              </nav>
            </div>

            <div>
              <h4>For Patients</h4>
              <nav className="fnav">
                <Link to="/resources/new-patient-forms">New Patient Forms</Link>
                <Link to="/resources/faq">Frequently Asked Questions</Link>
                <Link to="/referrals">Friends &amp; Family Referral</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer-hours">
          <span className="fh-label">Office Hours</span>
          <div className="fh-days">
            {HOURS.map((h, i) => (
              <span key={h.day}>
                {i > 0 && <span className="sep">/</span>}
                {h.day.toUpperCase()} {h.time}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-base">
          <span>© {year} Surbeck Orthodontics. All rights reserved.</span>
          <span>Bellevue, Washington · Closed Friday–Sunday</span>
        </div>
      </div>
    </footer>
  );
}
