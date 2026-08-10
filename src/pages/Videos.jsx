import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import VideoLibrary from "../components/VideoLibrary.jsx";

export default function Videos() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Treatment Videos</h1>
          <p className="lead">
            Short animations that show what an appliance does and how treatment works, so you
            can see the plan before you're in the chair. Helpful for parents explaining a next
            step to a child, and for adults deciding between options.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <VideoLibrary />
          <p className="muted" style={{ marginTop: 32, fontSize: ".9rem" }}>
            Have a question these don't answer? See our{" "}
            <Link to="/resources/faq" className="textlink">FAQ</Link> or{" "}
            <Link to="/appointment" className="textlink">request a consultation</Link>.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
