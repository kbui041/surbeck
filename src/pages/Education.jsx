import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";

const TOPICS = [
  { h: "The Consultation Process", p: "What happens at your first visit and how we diagnose." },
  { h: "When Should a Child First See an Orthodontist?", p: "Why age 7 is the recommended time for a first screening." },
  { h: "Early (Phase One) Treatment", p: "What it is, who it helps, and what comes next." },
  { h: "Treatment Duration", p: "What affects how long treatment takes." },
  { h: "Appointment Frequency", p: "How often you'll visit and why." },
  { h: "Braces Care & Foods to Avoid", p: "Protecting your appliance and your results." },
  { h: "Broken Brackets & Emergencies", p: "What to do and when to call." },
  { h: "Retainers & Retention", p: "Keeping your new smile stable for life." },
  { h: "Clear vs. Metal Brackets", p: "The options and how they compare." },
  { h: "Adult & Teen Orthodontics", p: "It's never too late for a healthy smile." },
  { h: "Dentist-Provided Invisalign", p: "Why specialist planning matters for aligners." },
  { h: "Insurance & Financial Options", p: "How coverage works and ways to pay." },
];

export default function Education() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Patient Education Library</h1>
          <p className="lead">
            Clear, honest answers to the questions patients and parents ask most, so you can
            make confident decisions about treatment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid cols-3">
            {TOPICS.map((t, i) => (
              <article className="edu-card" key={i}>
                <h3>{t.h}</h3>
                <p>{t.p}</p>
              </article>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 28, fontSize: ".9rem" }}>
            Each topic can expand into a full article with visual examples and case photos. See
            our <Link to="/resources/faq">FAQ</Link> for quick answers.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
