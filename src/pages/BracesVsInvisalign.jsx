import BeforeAfter from "../components/BeforeAfter.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function BracesVsInvisalign() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Braces vs. Invisalign</h1>
          <p className="lead">
            Both braces and clear aligners can produce excellent results. The right choice
            depends on your case, your goals, and how each option performs for the kind of
            movement you need.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid cols-2" style={{ gap: 40 }}>
            <div className="panel">
              <h3 className="panel-title">Braces</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Fixed appliances that offer precise control across a wide range of cases.
              </p>
              <ul className="res">
                <li><span className="rk">+</span><div><p>Excellent for complex movements and bite correction.</p></div></li>
                <li><span className="rk">+</span><div><p>Excellent option for surgical cases.</p></div></li>
                <li><span className="rk">+</span><div><p>Excellent option for younger children unable to adhere to clear aligner compliance requirements.</p></div></li>
                <li><span className="rk">+</span><div><p>Total control by Dr. Surbeck. Requested changes from either patient or dental team can be implemented as soon as the next appointment. This improves treatment length and any interdisciplinary dental work needed.</p></div></li>
                <li><span className="rk">+</span><div><p>Less compliance required, they are always working.</p></div></li>
                <li><span className="rk">-</span><div><p>More visible and require careful cleaning around brackets.</p></div></li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel-title">Invisalign</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Removable clear aligners that are discreet and convenient when worn consistently.
              </p>
              <ul className="res">
                <li><span className="rk">+</span><div><p>Nearly invisible and removable for eating and cleaning.</p></div></li>
                <li><span className="rk">+</span><div><p>Comfortable for many mild cases.</p></div></li>
                <li><span className="rk">–</span><div><p>Results depend entirely on consistent, full-time wear. Full time (22+ hours/day) compliance can present a challenge to some patients.</p></div></li>
                <li><span className="rk">–</span><div><p>Less control by Dr. Surbeck, requested changes cannot be implemented right away. Changes need to be done through invisalign and may even require additional appointments and fees.</p></div></li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: 910 }}>
          <h2>How Dr. Surbeck Determines the Best Option</h2>
          <p>
            The decision is based on the complexity of your case, the movements required,
            your lifestyle, and your commitment to wear. In some cases either option works
            well; in others, one is clearly the better tool for a stable, lasting result. We
            will give you an honest recommendation, not a sales pitch.
          </p>
          <p className="muted"><em>Placeholder copy, ready for Dr. Surbeck's final wording.</em></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 36 }}>Real Results, Both Approaches</h2>
          <BeforeAfter />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
