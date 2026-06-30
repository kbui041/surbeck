import CtaBand from "../components/CtaBand.jsx";

export default function Financial() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Financial Information</h1>
          <p className="lead">
            We believe in transparency. Here is how we approach cost, insurance, and payment,
            so there are no surprises.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid cols-2" style={{ gap: 40 }}>
            <div className="feature">
              <h3>Transparent Pricing</h3>
              <p>Your exact cost is reviewed during your consultation, after we have examined you and built your plan.</p>
            </div>
            <div className="feature">
              <h3>Flexible Payment Options</h3>
              <p>We offer interest-free, in-house payment plans designed to fit a range of budgets.</p>
            </div>
            <div className="feature">
              <h3>Insurance</h3>
              <p>We work with most plans, file your claims, and help you make the most of your benefits.</p>
            </div>
            <div className="feature">
              <h3>In-Network vs. Out-of-Network</h3>
              <p>We will explain how your specific coverage applies, whichever category we fall into.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: "72ch" }}>
          <h2>A Note on Records Fees</h2>
          <p>
            Diagnostic records, the photographs, scans, and X-rays used to plan your treatment,
            are part of delivering accurate, specialist care. We will explain any associated fee
            clearly and up front.
          </p>
          <p className="muted"><em>Placeholder copy, ready for the office's final figures and policy.</em></p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
