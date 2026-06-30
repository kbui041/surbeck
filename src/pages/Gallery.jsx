import { useState } from "react";
import BeforeAfter from "../components/BeforeAfter.jsx";
import CtaBand from "../components/CtaBand.jsx";

const CATEGORIES = [
  "All", "Crowding", "Spacing", "Impacted teeth", "Adult treatment",
  "Children", "Invisalign", "Braces", "Surgical", "Retreatment",
];

export default function Gallery() {
  const [active, setActive] = useState("All");

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Before &amp; After Gallery</h1>
          <p className="lead">
            Real patients, real results. Each case explains the problem, the treatment, the
            outcome, and the approximate treatment time, an honest, growing record of what is
            possible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="filterbar">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`filter-chip ${active === c ? "active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <BeforeAfter />
          <div style={{ height: 30 }} />
          <BeforeAfter />

          <p className="muted" style={{ marginTop: 28, fontSize: ".9rem" }}>
            Placeholder gallery. Add real before-and-after cases organized by category, each
            with the problem, treatment, result, and approximate treatment time.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
