import { RESULTS } from "../data/siteData.js";

export default function BeforeAfter() {
  return (
    <div className="grid cols-3">
      {RESULTS.map((r, i) => (
        <article className="ba" key={i}>
          <div className="ba-imgs">
            <div className="ba-img">
              <span className="ba-label">Before</span>
            </div>
            <div className="ba-img">
              <span className="ba-label">After</span>
            </div>
          </div>
          <div className="ba-meta">
            <div className="row">
              <h4>{r.category}</h4>
              <span className="len">{r.length}</span>
            </div>
            <span className="cat">{r.patient}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
