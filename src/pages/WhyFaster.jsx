import BeforeAfter from "../components/BeforeAfter.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function WhyFaster() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Why Treatment Can Be Faster</h1>
          <p className="lead">
            Efficient treatment is not about rushing. It is the natural result of precise
            planning and disciplined execution, working with the biology of tooth movement
            rather than against it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 36 }}>What Drives Efficiency</h2>
          <div className="grid cols-3">
            <div className="feature">
              <h3>Detailed Treatment Planning</h3>
              <p>The full path is mapped before treatment begins, so each visit has a clear purpose.</p>
            </div>
            <div className="feature">
              <h3>Precise Bracket Positioning</h3>
              <p>Accurate placement means teeth move where intended with fewer corrections later.</p>
            </div>
            <div className="feature">
              <h3>Thoughtful Archwire Sequencing</h3>
              <p>The right wire at the right time guides teeth efficiently and comfortably.</p>
            </div>
            <div className="feature">
              <h3>Smart Appointment Intervals</h3>
              <p>Visits are timed to how teeth actually move, keeping momentum without wasted steps.</p>
            </div>
            <div className="feature">
              <h3>Patient Compliance</h3>
              <p>Consistent elastic wear, aligner wear, and care prevent the delays that extend treatment.</p>
            </div>
            <div className="feature">
              <h3>Respecting the Biology</h3>
              <p>Teeth move at a healthy, predictable rate. Precision lets us reach the finish line sooner.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <h2 style={{ marginBottom: 8 }}>Efficiency You Can See</h2>
          <p className="lead" style={{ maxWidth: "60ch", marginBottom: 36 }}>
            Each case below pairs the result with its actual treatment time.
          </p>
          <BeforeAfter />
        </div>
      </section>

      <CtaBand className="white" />
    </>
  );
}
