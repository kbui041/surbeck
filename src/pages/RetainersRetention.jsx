import { useState } from "react";
import CtaBand from "../components/CtaBand.jsx";
import RETAINERS from "../data/retainersData.js";

export default function RetainersRetention() {
  const [openSet, setOpenSet] = useState(() => new Set());

  const toggle = (id) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Retainers &amp; Retention</h1>
          <p className="lead">
            Finishing active treatment is a milestone, not a finish line. Here's everything you
            need to know about your retainer, wear schedules, and keeping your results for years
            to come. Select a topic below to read more.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <ul className="faq">
            {RETAINERS.map((item) => {
              const isOpen = openSet.has(item.id);
              return (
                <li className={`faq-item ${isOpen ? "open" : ""}`} key={item.id}>
                  <button
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.title}</span>
                    <span className="faq-icon" aria-hidden="true">{isOpen ? "–" : "+"}</span>
                  </button>
                  <div className="faq-a-wrap">
                    <div className="faq-a">
                      {item.intro && <p>{item.intro}</p>}

                      {item.sub && (
                        <div className="ret-sub-list">
                          {item.sub.map((s) => (
                            <details className="ret-sub" key={s.id}>
                              <summary>
                                <span>{s.title}</span>
                                <span className="ret-sub-icon" aria-hidden="true">+</span>
                              </summary>
                              <div className="ret-sub-body">
                                {s.body.map((p, i) => (
                                  <p key={i}>{p}</p>
                                ))}
                                {s.golden && (
                                  <ol className="ret-golden">
                                    {s.golden.map((g, i) => (
                                      <li key={i}>
                                        <strong>{g.h}.</strong> {g.p}
                                      </li>
                                    ))}
                                  </ol>
                                )}
                              </div>
                            </details>
                          ))}
                        </div>
                      )}

                      {item.steps && (
                        <ol className="ret-steps">
                          {item.steps.map((st, i) => (
                            <li key={i}>
                              <h4>{st.h}</h4>
                              <p>{st.p}</p>
                            </li>
                          ))}
                        </ol>
                      )}

                      {item.groups && (
                        <div className="ret-fees">
                          {item.groups.map((g, i) => (
                            <div className="ret-fee-group" key={i}>
                              <h4>{g.h}</h4>
                              {g.rows.length > 0 && (
                                <ul className="ret-fee-list">
                                  {g.rows.map((r, j) => (
                                    <li key={j}>
                                      <span>{r.label}</span>
                                      <span className="ret-fee-value">{r.value}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {g.notes.map((n, j) => (
                                <p className="muted" key={j} style={{ fontSize: ".9rem" }}>
                                  {n}
                                </p>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
