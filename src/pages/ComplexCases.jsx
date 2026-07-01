import BeforeAfter from "../components/BeforeAfter.jsx";
import CtaBand from "../components/CtaBand.jsx";

const CASES = [
  "Jaw surgery (orthognathic) coordination",
  "Impacted teeth",
  "Missing teeth and implant site preparation",
  "Periodontal coordination",
  "Adult treatment",
  "Retreatment",
  "Open bites",
  "Deep bites",
  "Crossbites",
  "Airway considerations",
];

export default function ComplexCases() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Complex Cases</h1>
          <p className="lead">
            Surbeck Orthodontics welcomes the cases other offices refer out. Difficult problems
            are where specialized training, precise planning, and interdisciplinary coordination
            matter most.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2 style={{ marginBottom: 24 }}>Cases We Treat and Coordinate</h2>
          <ul className="taglist">
            {CASES.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p style={{ marginTop: 28, maxWidth: 880 }}>
            Many complex cases require collaboration with your dentist, oral surgeon,
            periodontist, or other specialists. Dr. Surbeck plans and coordinates that care so
            every provider is working from the same plan toward the same result.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <h2 style={{ marginBottom: 8 }}>Case Studies</h2>
          <p className="lead" style={{ maxWidth: "60ch", marginBottom: 36 }}>
            Detailed before-and-after cases with the problem, the approach, the result, and the
            treatment time.
          </p>
          <BeforeAfter />
        </div>
      </section>

      <CtaBand className="white"/>
    </>
  );
}
