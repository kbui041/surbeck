import CtaBand from "../components/CtaBand.jsx";

const STEPS = [
  { n: "01", h: "Initial Consultation", p: "A complimentary exam to determine whether treatment is needed and review your options." },
  { n: "02", h: "Diagnostic Records", p: "Photographs, scans, and X-rays that allow a precise, individualized diagnosis." },
  { n: "03", h: "Treatment Plan Review", p: "Dr. Surbeck walks you through the plan, the approach, and the expected timeline." },
  { n: "04", h: "Financial Discussion", p: "A clear breakdown of cost, insurance, and flexible payment options." },
  { n: "05", h: "Separators", p: "Small spacers placed to prepare the back teeth for bands, when needed." },
  { n: "06", h: "Band Appointment", p: "Orthodontic bands are fitted and secured." },
  { n: "07", h: "Bond Appointment", p: "Brackets are precisely positioned and bonded; treatment begins." },
  { n: "08", h: "Adjustment Appointments", p: "Regular, efficient visits to guide your teeth into place." },
  { n: "09", h: "Debond", p: "Braces are removed and your new smile is revealed." },
  { n: "10", h: "Retention", p: "Retainers protect and stabilize your result." },
  { n: "11", h: "Long-Term Follow-up", p: "Ongoing monitoring to keep your smile healthy and stable for years to come." },
];

export default function TreatmentProcess() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Our Treatment Process</h1>
          <p className="lead">
            From your first visit to long-term follow-up, here is what to expect at each step,
            and why each one matters.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <ol className="steps">
            {STEPS.map((s) => (
              <li className="step" key={s.n}>
                <span className="step-n">{s.n}</span>
                <div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="muted" style={{ marginTop: 28, fontSize: ".9rem" }}>
            Add photographs and real patient examples showing progression and timelines for each phase.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
