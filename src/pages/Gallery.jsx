import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import { CASES, CATEGORIES, GROUPS, TOPICS } from "../data/galleryData.js";
import { asset } from "../lib/asset.js";

const TABS = ["All", ...GROUPS];

export default function Gallery() {
  const [params, setParams] = useSearchParams();
  const [group, setGroup] = useState("Adolescent");
  const [category, setCategory] = useState("All");
  const [topic, setTopic] = useState(null);

  /* A ?topic= link from another page opens the gallery pre-filtered. */
  useEffect(() => {
    const key = params.get("topic");
    const t = key && TOPICS[key];
    if (t) {
      setTopic({ key, ...t });
      setGroup(t.group);
      setCategory("All");
    }
  }, [params]);

  const clearTopic = () => {
    setTopic(null);
    if (params.get("topic")) setParams({}, { replace: true });
  };

  const categories = useMemo(() => {
    const list =
      group === "All"
        ? [...new Set([...CATEGORIES.Adolescent, ...CATEGORIES.Adult])]
        : CATEGORIES[group];
    return ["All", ...list];
  }, [group]);

  const shown = useMemo(
    () =>
      CASES.filter((x) => {
        if (group !== "All" && x.group !== group) return false;
        if (topic && topic.categories.length && !topic.categories.includes(x.category))
          return false;
        if (!topic && category !== "All" && x.category !== category) return false;
        return true;
      }),
    [group, category, topic]
  );

  const pickGroup = (g) => {
    clearTopic();
    setGroup(g);
    setCategory("All");
  };

  const pickCategory = (cat) => {
    clearTopic();
    setCategory(cat);
  };

  const countFor = (g) => (g === "All" ? CASES.length : CASES.filter((x) => x.group === g).length);

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Before &amp; After Gallery</h1>
          <p className="lead">
            Real patients, real results, each shown with the actual treatment time. Browse by
            patient age and by the problem we were treating.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="gal-tabs" role="tablist" aria-label="Patient age group">
            {TABS.map((g) => (
              <button
                key={g}
                type="button"
                role="tab"
                aria-selected={group === g}
                className={`gal-tab${group === g ? " active" : ""}`}
                onClick={() => pickGroup(g)}
              >
                {g === "All" ? "All Patients" : `${g} Patients`}
                <span className="gal-tab-n">{countFor(g)}</span>
              </button>
            ))}
          </div>

          {topic && (
            <div className="gal-topic">
              <span>
                Filtered by <strong>{topic.label}</strong>
              </span>
              <button type="button" onClick={clearTopic}>
                Clear filter
              </button>
            </div>
          )}

          <div className="filterbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip${!topic && category === cat ? " active" : ""}`}
                onClick={() => pickCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="gal-count muted">
            Showing {shown.length} {shown.length === 1 ? "case" : "cases"}
            {!topic && category !== "All" ? ` in ${category}` : ""}.
          </p>

          <div className="grid cols-3">
            {shown.map((x) => (
              <article className="ba" key={x.slug}>
                {x.pdf ? (
                  <a
                    className="ba-pdf"
                    href={asset(`gallery/${x.slug}.pdf`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={asset(`gallery/thumbs/${x.slug}.jpg`)}
                      alt={`${x.patient} — before and after treatment`}
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
                ) : (
                  <div className="ba-imgs">
                    <div className="ba-img">
                      <span className="ba-label">Before</span>
                    </div>
                    <div className="ba-img">
                      <span className="ba-label">After</span>
                    </div>
                  </div>
                )}
                <div className="ba-meta">
                  <div className="row">
                    <h4>{x.patient}</h4>
                    {x.months != null && <span className="len">{x.months} mo</span>}
                  </div>
                  <span className="cat">
                    {x.category}
                    {group === "All" ? ` · ${x.group}` : ""}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="muted" style={{ marginTop: 32, fontSize: ".9rem" }}>
            Treating something more involved?{" "}
            <Link to="/complex-cases" className="textlink">
              See how we approach complex cases
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
