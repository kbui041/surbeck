import { Link } from "react-router-dom";
import { CASES } from "../data/galleryData.js";
import { asset } from "../lib/asset.js";

/* A small, fixed sample of real cases from the full gallery, spread across
   the array for variety. Swap indices below to feature different cases. */
const PICKS = [0, Math.floor(CASES.length / 2), CASES.length - 1].map((i) => CASES[i]);

export default function BeforeAfter() {
  return (
    <>
      <div className="grid cols-3">
        {PICKS.map((x) => (
          <article className="ba" key={x.slug}>
            <a
              className="ba-pdf"
              href={asset(`gallery/${x.slug}.pdf`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={asset(`gallery/thumbs/${x.slug}.jpg`)}
                alt={`${x.category} — before and after treatment`}
                loading="lazy"
              />
              <span className="ba-pdf-overlay">
                <svg viewBox="0 0 24 24" className="ba-pdf-icon" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5z"
                  />
                </svg>
                <span className="ba-pdf-label">View Full Case (PDF)</span>
              </span>
            </a>
            <div className="ba-meta">
              <div className="row">
                <h4>{x.category}</h4>
                {x.months != null && <span className="len">{x.months} mo</span>}
              </div>
              <span className="cat">{x.group} patient</span>
            </div>
          </article>
        ))}
      </div>
      <p style={{ marginTop: 28 }}>
        <Link to="/gallery" className="textlink">See more before &amp; after cases</Link>
      </p>
    </>
  );
}
