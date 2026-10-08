import { useState } from "react";
import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import { asset } from "../lib/asset.js";
import RIGHT_FIT from "../data/rightFitData.js";

const SUMMARY = [
  { h: "One orthodontist.", p: "The same doctor overseeing your care from diagnosis through completion." },
  { h: "Thoughtful treatment planning.", p: "Recommendations based on your individual diagnosis, not a standardized approach." },
  { h: "Frequent, purposeful appointments.", p: "Close monitoring designed to keep treatment progressing efficiently." },
  { h: "A low-volume, high-touch model.", p: "Fewer patients allow us to devote more time and attention to the people we treat." },
  { h: "Honest recommendations.", p: "Including telling you when we believe one treatment option is better suited to your case than another." },
  { h: "Attention to the details.", p: "Because straight teeth are only part of an excellent orthodontic result." },
  { h: "Long-term thinking.", p: "From the first diagnostic records through retention and beyond." },
];

export default function FindingTheRightOrthodontist() {
  const [openSet, setOpenSet] = useState(() => new Set());

  const toggle = (id) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <>
      <section className="page-intro">
        <div className="wrap intro-split">
          <div>
            <h1>Finding the Right Orthodontist for You</h1>
            <p className="lead">
              We practice orthodontics differently because we believe the details really matter.
            </p>
          </div>
          <img className="intro-logo" src={asset("logo-mark.png")} alt="Surbeck Orthodontics" />
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <p>
            Straight teeth are only part of the goal. A beautiful smile matters, but orthodontic
            treatment also involves how the upper and lower teeth fit together, how tooth
            movement affects the surrounding tissues, how the result complements the face, and
            how stable that result is likely to remain over time.
          </p>
          <p>
            We believe choosing an orthodontist is about more than choosing braces or clear
            aligners. You're choosing how you want to be cared for.
          </p>
          <p>
            Every orthodontic practice operates a little differently. Some practices are designed
            to accommodate a very large number of patients. Some have multiple orthodontists or
            locations. Appointment intervals, treatment philosophies, doctor involvement,
            treatment planning, and even the definition of a successful finished result can vary
            from one practice to another.
          </p>
          <p>
            At Surbeck Orthodontics, we have intentionally chosen a different model:
          </p>
          <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--navy)" }}>
            One orthodontist. One location. Fewer patients. More individual attention.
          </p>
          <p>
            That approach won't necessarily be what every patient is looking for, and that's okay.
            But if you're looking for thoughtful, highly individualized orthodontic care with
            significant doctor involvement from beginning to end, we may be exactly what you're
            looking for.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>What Matters Most to You?</h2>
          <p>
            Orthodontic practices can look similar from the outside. The experience, and the
            approach to treatment, can be very different.
          </p>
          <p>
            Choosing an orthodontist is a personal decision. Location, convenience, cost, office
            atmosphere, and treatment options may all play a role. But there are also important
            differences in how orthodontic care is planned and delivered that may not be obvious
            during an initial consultation. Before choosing a practice, it may help to consider
            what matters most to you — and to ask both yourself and any provider you're
            considering the questions below. Select a topic to see how we approach it at Surbeck
            Orthodontics.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <ul className="fit-accordion">
            {RIGHT_FIT.map((item) => {
              const isOpen = openSet.has(item.id);
              return (
                <li className={`fit-item ${isOpen ? "open" : ""}`} key={item.id}>
                  <button
                    className="fit-q"
                    aria-expanded={isOpen}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.title}</span>
                    <span className="fit-icon" aria-hidden="true">{isOpen ? "–" : "+"}</span>
                  </button>
                  <div className="fit-body-wrap">
                    <div className="fit-body">
                      {item.context && <p className="fit-context">{item.context}</p>}

                      {item.ask && (
                        <div className="fit-ask">
                          <span className="fit-label">Ask yourself — or your prospective provider</span>
                          <ul>
                            {item.ask.map((q, i) => (
                              <li key={i}>{q}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="fit-answer">
                        <span className="fit-label fit-label-answer">Our Approach at Surbeck Orthodontics</span>
                        {item.answer.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                        {item.link && (
                          <Link to={item.link.to} className="fit-answer-link">
                            {item.link.label} →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head center" style={{ marginBottom: 48 }}>
            <h2>Is Surbeck Orthodontics the Right Fit for You?</h2>
            <p className="lead">
              We aren't trying to be the right orthodontic practice for everyone. We're trying to
              practice orthodontics exceptionally well. Our practice is intentionally built
              around:
            </p>
          </div>
          <div className="grid cols-3">
            {SUMMARY.map((s, i) => (
              <div className="feature" key={i}>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
          <p style={{ maxWidth: 760, margin: "48px auto 0", textAlign: "center" }}>
            Exceptional orthodontic results don't happen by accident. They are the product of
            thoughtful diagnosis, careful planning, precise treatment, close monitoring, patient
            cooperation, and attention to the details along the way. That's the kind of
            orthodontics we believe in — and if that's the kind of care you're looking for, we'd
            love to meet you.
          </p>
        </div>
      </section>

      <CtaBand className="white" heading="Let's Talk About What You're Looking For" text="If this approach sounds like a fit, we'd love the opportunity to meet you." />
    </>
  );
}
