import { Link } from "react-router-dom";

export default function CtaBand({
  heading = "Schedule a Consultation",
  text = "New patient consultations are complimentary, for children, teens, and adults.",
}) {
  return (
    <section className="section cta">
      <div className="wrap cta-band">
        <div className="cta-copy">
          <h2>{heading}</h2>
          <p className="lead">{text}</p>
        </div>
        <Link to="/appointment" className="btn">Request an Appointment</Link>
      </div>
    </section>
  );
}
