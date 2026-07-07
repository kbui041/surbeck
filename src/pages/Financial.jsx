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
          <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 40, minWidth: 0 }}>
              <div className="feature">
                <h3>Transparent Pricing</h3>
                <p>Your cost will be provided to you once you or the patient is ready for treatment - or <i>almost</i> ready for treatment. We want to provide our fees transparently and as early as possible, so your family can begin to plan for treatment. Adult patients will typically be provided the financial estimate following their consultation sent along with Dr. Surbeck's post-consultation letter. The financial estimate should be accurate, but may change pending the Diagnostic Records appointment (which will provide Dr. Surbeck with all the diagnostics needed to treatment plan and provide an accurate estimate for treatment duration and the details regarding the treatment). For our younger patients, who might not yet be ready for treatment, we will try to provide the financial estimate prior to their start, but this estimate may change, pending new discovery following the diagnostic records appointment. Our goal is to always be as accurate with out estimates as possible, so your family can plan accordingly and nothing is ever a surprise.</p>
              </div>
              <div className="feature">
                <h3>Flexible Payment Options</h3>
                <p>We offer interest-free, in-house payment plans designed to fit a range of budgets. We also offer 5% savings for payment in full with cash/check and 3% savings for payments in full using a card. These savings are only applicable to the treatment fee, and not to additional services or auxiliary needs.</p>
              </div>
              <div className="feature">
                <h3>Insurance</h3>
                <p>We work with most plans, file your claims, and help you make the most of your benefits. Often times, the benefits for in-network orthodontic providers and out-of-network orthodontic providers and out-of-network orthodontic providers is the same. This is great news for you: it means you can find the orthodontist that best aligns with your treatment desires and what kind of orthodontic experience you'd like.</p>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="feature">
                <h3>In-Network vs. Out-of-Network</h3>
                <p>We will explain how your specific coverage applies, whichever category we fall into. We are frequently asked whether Surbeck Orthodontics is "in-network" with a particular insurance company. While we are not contracted with most insurance carriers, this is a deliberate decision that allows our office to maintain complete independence in how we diagnose, plan, and deliver orthodontic treatment.</p>
                <br />
                <p>Unlike many areas of healthcare, orthodontic insurance benefits are often structured differently. In many cases, a patient's orthodontic benefit is the same whether treatment is provided by an in-network or out-of-network orthodontist. Because insurance plans vary significantly, we encourage families to contact their insurance provider directly to confirm whether their specific policy offers equivalent in-network and out-of-network orthodontic benefits. While Steph is happy to verify what your benefits are at Surbeck Orthodontics, she is unable to determine what your benefits may look like at other offices.</p>

                <br />
                <p>Importantly, being out-of-network with an insurance company does <b>not</b> prevent a patient from receiving treatment at our office. As a courtesy, our team is happy to submit claims and provide the necessary documentation to help patients maximize any available orthodontic benefits.</p>

                <br />
                <p>We also understand that orthodontic treatment is a significant investment. To help make treatment as accessible and comfortable as possible, Surbeck Orthodontics offers multiple payment options, including payment-in-full discounts and flexible in-house financing arrangements.</p>

                <br />
                <p>Our goal is to provide exceptional orthodontic care while giving families the information and financial flexibility they need to make the best decision for their situation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper" id="consultation-fee">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>Consultation Fee</h2>
          <p>
            Our initial consultation is $30 for children and $50 for adults. This visit includes your exam with Dr. Surbeck and a clear explanation of whether, and how, treatment can help. We believe your orthodontic consultation shoud be more than a brief conversation: it's the foundation for every decision that follows.
          </p>

          <p>
            During your visit, Dr. Surbeck performs a comprehensive evaluation, reviews your goals, and begins developing a personalized treatment plan. 
          </p>

          <p>Our work continues after you leave. You’ll receive a clear, written summary outlining findings, recommendations, timing, and key considerations, and when appropriate, we will also follow the consultation with a financial estimate so you and your family can begin to plan. We also share a clinical summary with your general dentist to ensure coordinated care throughout your treatment, with your dental team.</p>

          <p>While many practices offer complimentary consultations, we approach this visit as the first step in your treatment and not a marketing appointment. The consultation fee reflects the time, expertise, and thoughtful planning involved.</p>

          <p>Whether you move forward with treatment now, later, or simply gather information, you leave with a meaningful evaluation and a written record you can reference anytime.</p>
        </div>
      </section>

      <section className="section" id="diagnostic-records-fee">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>A Note on Records Fees</h2>
          <p>
            Diagnostic records, the photographs, scans, X-rays, and impressions used to plan
            your treatment, are part of delivering accurate, specialist care. We will explain
            any associated fee clearly and up front. The fees for diagnostic records do not commit you to treatment, but allow Dr. Surbeck the appropriate data to treatment plan in the greatest detail, with accuracy, so we can provide you with the best orthodontic care possible.
          </p>
          <p className="muted"><em>Placeholder copy, ready for the office's final figures and policy.</em></p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
