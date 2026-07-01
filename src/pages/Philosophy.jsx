import CtaBand from "../components/CtaBand.jsx";

export default function Philosophy() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Our Philosophy</h1>
          <p className="lead">
            Every decision in our office is guided by a simple belief: that careful, individualized
            care produces better results than volume ever could.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid cols-2">
            <div className="feature">
              <h3>Individualized Care</h3>
              <p>No two smiles are the same. Every treatment plan is built around the person, not a template.</p>
            </div>
            <div className="feature">
              <h3>Quality Over Volume</h3>
              <p>We see fewer patients per day so each one receives focused, unhurried attention.</p>
            </div>
            <div className="feature">
              <h3>Precision Before Speed</h3>
              <p>Accuracy comes first. Efficiency follows from a plan that is right the first time.</p>
            </div>
            <div className="feature">
              <h3>Efficiency Through Planning</h3>
              <p>Thorough diagnostics up front reduce surprises, rework, and unnecessary appointments.</p>
            </div>
            <div className="feature">
              <h3>One Shared Goal</h3>
              <p>Every team member is working toward the same outcome: your healthy, complete smile.</p>
            </div>
            <div className="feature">
              <h3>Respect For Your Time</h3>
              <p>Predictable scheduling and short intervals keep treatment on track and minimize disruption.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: "70ch" }}>
          <h2>Healthy, Beautiful, and Complete</h2>
          <p>
            A successful result is more than straight front teeth. It is a healthy bite, a
            balanced smile, and a stable foundation that lasts, achieved with treatment that is
            safe and appropriate for each patient.
          </p>
          <p className="muted"><em>Placeholder copy, ready for Dr. Surbeck's final wording.</em></p>
        </div>
      </section>

      <CtaBand className="white"/>
    </>
  );
}
