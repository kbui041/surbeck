import BeforeAfter from "../components/BeforeAfter.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { asset } from "../lib/asset.js";

export default function WhySurbeck() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap intro-split">
          <div>
            <h1>Why Surbeck Orthodontics</h1>
            <p className="lead">
              Orthodontics is a recognized dental specialty. Choosing a specialist, and a
              practice built around precision and attention, has a direct effect on your
              results, your time, and your experience.
            </p>
          </div>
          <img className="intro-logo" src={asset("logo-mark.png")} alt="Surbeck Orthodontics" />
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: "72ch" }}>
          <h2>Orthodontics is a specialty</h2>
          <p>
            After dental school, an orthodontist completes two to three additional years of
            full-time, accredited residency dedicated solely to the diagnosis and treatment of
            misaligned teeth and jaws. That training is the foundation for the precision and
            predictability you should expect from specialist care.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <h2 style={{ marginBottom: 36 }}>What sets specialist care apart</h2>
          <div className="grid cols-3">
            <div className="feature">
              <h3>One doctor, start to finish</h3>
              <p>Dr. Surbeck personally plans and oversees your treatment from consultation to retention.</p>
            </div>
            <div className="feature">
              <h3>Lower volume, higher attention</h3>
              <p>A deliberately measured schedule means more focused time at every appointment.</p>
            </div>
            <div className="feature">
              <h3>Precision treatment planning</h3>
              <p>Detailed diagnostics and planning before the first bracket is ever placed.</p>
            </div>
            <div className="feature">
              <h3>Shorter appointment intervals</h3>
              <p>Efficient scheduling that keeps treatment moving and minimizes total time in braces.</p>
            </div>
            <div className="feature">
              <h3>Interdisciplinary planning</h3>
              <p>Coordinated care with your dentist and other specialists when your case calls for it.</p>
            </div>
            <div className="feature">
              <h3>Long-term stability</h3>
              <p>Treatment planned for results that hold, not just teeth that look straight on day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: "72ch" }}>
          <h2>What you are actually paying for</h2>
          <p>
            Orthodontic treatment is not a product, it is expertise applied over time:
            accurate diagnosis, a precise plan, careful execution, and the judgment to adjust
            along the way. The goal is a healthy, stable, beautiful result achieved as
            efficiently as your biology allows.
          </p>
          <p className="muted">
            <em>Placeholder copy from the strategy outline, ready for Dr. Surbeck's final wording.</em>
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <h2 style={{ marginBottom: 36 }}>Results that speak for themselves</h2>
          <BeforeAfter />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
