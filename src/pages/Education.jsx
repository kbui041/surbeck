import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import { ARTICLES } from "../data/educationData.js";

export default function Education() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Patient Education Library</h1>
          <p className="lead">
            Clear, honest answers to the questions patients and parents ask most, so you can
            make confident decisions about treatment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ol className="edu-index">
            {ARTICLES.map((a, i) => {
              const ready = a.body.length > 0;
              const inner = (
                <>
                  <span className="edu-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="edu-body">
                    <span className="edu-h">{a.title}</span>
                    <span className="edu-b">{a.blurb}</span>
                  </span>
                  {!ready && <span className="edu-soon">Coming soon</span>}
                </>
              );
              return (
                <li key={a.slug}>
                  <Link
                    to={`/patient-education/${a.slug}`}
                    className={`edu-row${ready ? "" : " is-soon"}`}
                  >
                    {inner}
                  </Link>
                </li>
              );
            })}
          </ol>

          <p className="muted" style={{ marginTop: 34, fontSize: ".9rem" }}>
            Looking for a quick answer instead?{" "}
            <Link to="/resources/faq" className="textlink">
              See our FAQ
            </Link>{" "}
            or{" "}
            <Link to="/resources/videos" className="textlink">
              watch a treatment video
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
