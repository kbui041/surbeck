import { Link, Navigate, useParams } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import { ARTICLES, findArticle } from "../data/educationData.js";
import { PRACTICE } from "../data/siteData.js";
import { asset } from "../lib/asset.js";

export default function EducationArticle() {
  const { slug } = useParams();
  const article = findArticle(slug);

  if (!article) return <Navigate to="/patient-education" replace />;

  const i = ARTICLES.indexOf(article);
  const next = ARTICLES.slice(i + 1).find((a) => a.body.length > 0);

  /* Topics still being written get a real page rather than a dead end. */
  if (article.body.length === 0) {
    return (
      <>
        <section className="page-intro">
          <div className="wrap" style={{ maxWidth: 860 }}>
            <Link to="/patient-education" className="edu-back">
              &larr; Patient Education Library
            </Link>
            <h1>{article.title}</h1>
            <p className="lead">{article.blurb}</p>
          </div>
        </section>

        <section className="section">
          <div className="wrap" style={{ maxWidth: 860 }}>
            <div className="edu-pending">
              <p className="edu-pending-tag">Article in progress</p>
              <p>
                We're still writing this one. In the meantime, our team is happy to answer any
                questions about {article.title.toLowerCase()} directly, just call or ask at your
                next visit.
              </p>
              <div className="hero-actions" style={{ marginTop: 22 }}>
                <a href={PRACTICE.phoneHref} className="btn btn-ghost">
                  Call {PRACTICE.phone}
                </a>
                <Link to="/resources/faq" className="btn btn-ghost">
                  Browse the FAQ
                </Link>
              </div>
            </div>

            <div className="article-foot">
              <Link to="/patient-education" className="article-back">
                All topics
              </Link>
              {next && (
                <Link to={`/patient-education/${next.slug}`} className="textlink">
                  Next: {next.title}
                </Link>
              )}
            </div>
          </div>
        </section>

        <CtaBand />
      </>
    );
  }

  return (
    <>
      <section className="page-intro">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <Link to="/patient-education" className="edu-back">
            &larr; Patient Education Library
          </Link>
          <h1>{article.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap article" style={{ maxWidth: 860 }}>
          {article.body.map((b, k) => {
            if (b.h) return <h2 key={k}>{b.h}</h2>;
            if (b.lead)
              return (
                <p key={k} className="lead">
                  {b.lead}
                </p>
              );
            if (b.ul)
              return (
                <ul key={k} className="article-ul">
                  {b.ul.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              );
            if (b.figure)
              return (
                <figure className={`article-fig${b.size === "narrow" ? " narrow" : ""}`} key={k}>
                  <img src={asset(b.figure)} alt={b.alt || ""} loading="lazy" />
                  {b.caption && <figcaption>{b.caption}</figcaption>}
                </figure>
              );
            if (b.pull)
              return (
                <p key={k} className="article-pull">
                  {b.pull}
                </p>
              );
            if (b.note)
              return import.meta.env.DEV ? (
                <p key={k} className="article-note">
                  <strong>Editor's note:</strong> {b.note}
                </p>
              ) : null;
            return <p key={k}>{b.p}</p>;
          })}

          <div className="article-foot">
            <Link to="/patient-education" className="article-back">
              All topics
            </Link>
            {next && (
              <Link to={`/patient-education/${next.slug}`} className="textlink">
                Next: {next.title}
              </Link>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
