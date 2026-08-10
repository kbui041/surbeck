import { useEffect, useMemo, useState } from "react";
import { VIDEOS, VIDEO_CATEGORIES } from "../data/siteData.js";

/* Thumbnails come straight from YouTube, so unlisted videos work with no
   extra hosting. The player iframe is only created after a click (a "facade"),
   which keeps the page fast and avoids loading YouTube trackers on arrival. */
const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const embed = (id) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

export default function VideoLibrary() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const used = useMemo(
    () => VIDEO_CATEGORIES.filter((c) => VIDEOS.some((v) => v.category === c)),
    []
  );
  const shown = useMemo(
    () => (filter === "All" ? VIDEOS : VIDEOS.filter((v) => v.category === filter)),
    [filter]
  );

  /* Close on Escape, and stop the page behind the player from scrolling. */
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  if (VIDEOS.length === 0) {
    return <p className="muted">Videos are coming soon.</p>;
  }

  return (
    <>
      {used.length > 1 && (
        <div className="filterbar">
          {["All", ...used].map((c) => (
            <button
              key={c}
              type="button"
              className={`filter-chip${filter === c ? " active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid cols-3">
        {shown.map((v) => (
          <article className="vid-card" key={v.id}>
            <button
              type="button"
              className="vid-thumb"
              onClick={() => setActive(v)}
              aria-label={`Play video: ${v.title}`}
            >
              <img src={thumb(v.id)} alt="" loading="lazy" />
              <span className="vid-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </span>
            </button>
            <p className="vid-cat">{v.category}</p>
            <h3>
              <button type="button" className="linkish" onClick={() => setActive(v)}>
                {v.title}
              </button>
            </h3>
            <p className="muted">{v.blurb}</p>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="vid-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div className="vid-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="vid-close"
              onClick={() => setActive(null)}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="vid-frame">
              <iframe
                src={embed(active.id)}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="vid-modal-copy">
              <h3>{active.title}</h3>
              <p className="muted">{active.blurb}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
