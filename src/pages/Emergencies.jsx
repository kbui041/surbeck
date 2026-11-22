import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import { PRACTICE } from "../data/siteData.js";
import { asset } from "../lib/asset.js";

export default function Emergencies() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <h1>Broken Brackets &amp; Emergencies</h1>
          <p className="lead">
            Orthodontic treatment works best when every part of your braces is functioning
            exactly as intended. While the occasional broken bracket or poking wire is a normal
            part of treatment, keeping your appliances intact is one of the most important ways
            you can help us achieve an exceptional result on time.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap article" style={{ maxWidth: 860 }}>
          <figure className="article-fig">
            <img src={asset("braces-food-guide.png")} alt="Braces food guide: braces-friendly choices and foods to avoid." loading="lazy" />
            <figcaption>What to enjoy, and what to approach with care, while you're in braces.</figcaption>
          </figure>

          <h2>Broken Brackets Happen</h2>
          <p>
            Braces are remarkably strong, but they are not indestructible. Occasionally, a
            bracket may come loose despite everyone's best efforts. This is especially common
            during the first few weeks after braces are placed, while patients are adjusting to
            eating and caring for their new appliances. That's perfectly normal, and we're always
            happy to help.
          </p>
          <p>
            Repeated bracket breakage, however, can significantly affect treatment. When a
            bracket comes off a tooth, that tooth often stops moving as planned. In some cases,
            Dr. Surbeck must temporarily step back to a lighter orthodontic wire in order to
            regain alignment before treatment can progress. While this is an important part of
            protecting your smile, it also means valuable treatment time has been lost. Simply
            put, broken brackets are one of the most common reasons orthodontic treatment takes
            longer than originally estimated.
          </p>

          <h2>What Should I Do If a Bracket Breaks?</h2>
          <p>
            If you notice a loose bracket, broken appliance, or poking wire, please contact our
            office as soon as possible. Whenever possible, we'll schedule a brief emergency visit
            to repair the appliance promptly.
          </p>
          <div className="emphasis-note">
            <p>
              Emergency appointments are typically scheduled around our regularly planned patient
              care, often during the middle of the day (before and after our lunch hour),
              allowing us to address emergencies without delaying other patients' appointments.
            </p>
          </div>

          <h2>Preventing Breakage</h2>
          <p>
            The best way to avoid treatment delays is to protect your braces throughout
            treatment. Patients who avoid hard, crunchy, and sticky foods, maintain excellent
            oral hygiene, attend scheduled appointments, and follow our recommendations closely
            are far more likely to complete treatment within the anticipated timeframe. When
            eating, we recommend breaking your food into smaller, manageable bites and focusing
            on chewing with your back molars. Our tongue and cheeks typically do an excellent job
            of guiding food to the appropriate areas of our teeth. However, when we take large
            bites, it can be difficult for these muscles to handle the excess food, which
            increases the risk of broken brackets. By keeping food towards the back molars and
            chewing in smaller portions, you can help avoid unnecessary pressure on your braces.
          </p>
          <p>
            To prevent damage, it's crucial to avoid using your teeth for tasks they were not
            designed for, such as chewing on pen caps, opening packages, or chewing on ice. These
            activities can easily lead to broken brackets, which can delay your treatment and
            require repairs.
          </p>
          <p>
            Orthodontic treatment is a partnership. We are committed to providing precise
            treatment planning and attentive care, while our patients play an equally important
            role in protecting the appliances that make treatment possible.
          </p>

          <h2 id="bracket-policy">Our Broken Bracket Policy</h2>
          <p>
            We understand there is a learning curve with braces, which is why we don't expect
            perfection. During the first three weeks after braces are placed, any broken brackets
            are repaired at no charge while patients become accustomed to their new appliances.
            Following this adjustment period, we also provide three additional complimentary
            bracket repairs. Beginning with the fourth broken bracket, a $25 repair fee is
            assessed. Each additional broken bracket thereafter incurs a $50 repair fee.
          </p>
          <p>
            This policy is not intended to be punitive. Rather, it reflects the very real impact
            repeated bracket breakage has on treatment efficiency, scheduling, and overall
            treatment success. Our hope is simply to encourage patients to protect their braces,
            minimize unnecessary treatment delays, and help everyone achieve the healthiest, most
            efficient orthodontic outcome possible.
          </p>

          <h2>We're Here to Help</h2>
          <p>
            Orthodontic emergencies happen, and when they do, we're here for you. If something
            doesn't feel right, whether it's a loose bracket, a poking wire, or another concern,
            please don't wait until your next scheduled visit. Contact our office, and we'll help
            determine the best next step to keep your treatment comfortable, efficient, and
            moving forward.
          </p>

          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a href={PRACTICE.phoneHref} className="btn btn-ghost">Call {PRACTICE.phone}</a>
            <Link to="/resources/faq" className="btn btn-ghost">Browse the FAQ</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
