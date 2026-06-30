import { Link } from "react-router-dom";
import { PRACTICE } from "../data/siteData.js";
import { asset } from "../lib/asset.js";

const resolve = (h) => (h.startsWith("http") ? h : asset(h));

/* Downloadable forms. PDFs live in /public/forms; the Privacy Policy is
   hosted on the practice's site. Update hrefs here if files change. */
const FORMS = [
  {
    name: "Child New Patient Information",
    note: "Intake form for patients under 18.",
    href: "/forms/child-new-patient-information.pdf",
  },
  {
    name: "Adult New Patient Information",
    note: "Intake form for adult patients.",
    href: "/forms/adult-new-patient-information.pdf",
  },
  {
    name: "Privacy Policy",
    note: "Our notice of privacy practices (HIPAA).",
    href: "https://surbeckortho.com/wp-content/uploads/2024/04/hipaa.pdf",
  },
];

export default function NewPatientForms() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>New Patient Forms</h1>
          <p className="lead">
            Please print and complete the appropriate form below and bring it to your next
            appointment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <ul className="res">
            {FORMS.map((f, i) => (
              <li key={i}>
                <span className="rk">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>
                    <a href={resolve(f.href)} target="_blank" rel="noopener noreferrer">{f.name}</a>
                  </h4>
                  <p>
                    {f.note}{" "}
                    <a href={resolve(f.href)} target="_blank" rel="noopener noreferrer">Download (PDF) →</a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="panel soft" style={{ marginTop: 32 }}>
            <p style={{ margin: 0 }}>
              Questions about which form you need? Call{" "}
              <a href={PRACTICE.phoneHref}>{PRACTICE.phone}</a> or{" "}
              <Link to="/appointment">request an appointment</Link> and our team will help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
