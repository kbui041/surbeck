import { Link } from "react-router-dom";
import Announcements from "../components/Announcements.jsx";
import AvailabilityCalendar from "../components/AvailabilityCalendar.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import { PRACTICE, TESTIMONIAL } from "../data/siteData.js";
import { asset } from "../lib/asset.js";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <h1>Orthodontics for children, teens, and adults in Bellevue.</h1>
            <p className="lead">
              Surbeck Orthodontics provides efficient, comprehensive orthodontic care for
              patients of all ages. Dr. Surbeck and his team work with you to determine the
              treatment that best fits your needs.
            </p>
            <div className="hero-actions">
              <Link to="/appointment" className="btn">Request an Appointment</Link>
              <a href={PRACTICE.phoneHref} className="btn btn-ghost">{PRACTICE.phone}</a>
            </div>
            <p className="hero-note">Complimentary consultations for children, teens, and adults.</p>
          </div>
          <div className="hero-art">
            <img src={asset("logo-mark.png")} alt="Surbeck Orthodontics" />
          </div>
        </div>
      </section>

      {/* INTRO PROSE */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: "70ch" }}>
          <h2>Personal, Attentive Care</h2>
          <p>
            We combine up-to-date treatment with old-fashioned, one-on-one communication,
            personalized to each patient's needs and expectations. Dr. Surbeck has been
            voted a Seattle Met Top Orthodontist by his peers every year since 2009.
          </p>
          <p>
            Dr. Surbeck is a member of the American Association of Orthodontists, the Pacific
            Coast Society of Orthodontists, and the Washington State Dental Association.
          </p>
          <p>
            <Link to="/about" className="textlink">Read more about Dr. Surbeck</Link>
          </p>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="section paper" id="results">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 40, maxWidth: "62ch" }}>
            <h2>Before &amp; After</h2>
            <p className="lead">
              Real transformations across a range of treatment complexities, each paired with
              the actual treatment time.
            </p>
          </div>
          <BeforeAfter />
          <p className="muted" style={{ marginTop: 24, fontSize: ".9rem" }}>
            Placeholder panels shown. Add real before-and-after patient photos in
            <code style={{ margin: "0 4px" }}>src/data/siteData.js</code> when available.
          </p>
        </div>
      </section>

      {/* ANNOUNCEMENTS + CALENDAR */}
      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 10 }}>Announcements &amp; Office Hours</h2>
          <p className="lead" style={{ maxWidth: "58ch", marginBottom: 44 }}>
            Office updates and the days we're open this month.
          </p>
          <div className="announce-grid">
            <Announcements />
            <AvailabilityCalendar />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="wrap">
          <figure className="quote">
            <blockquote>
              <p>{TESTIMONIAL.quote}</p>
            </blockquote>
            <cite>{TESTIMONIAL.author}</cite>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="wrap cta-band">
          <div className="cta-copy">
            <h2>Schedule a Consultation</h2>
            <p className="lead">
              New patient consultations are complimentary, for children, teens, and adults.
            </p>
          </div>
          <Link to="/appointment" className="btn">Request an Appointment</Link>
        </div>
      </section>
    </>
  );
}
