import { ANNOUNCEMENTS } from "../data/siteData.js";

export default function Announcements() {
  return (
    <ul className="ann-list">
      {ANNOUNCEMENTS.map((a, i) => (
        <li className="ann-item" key={i}>
          <span className="ann-date">{a.date}</span>
          <div className="ann-body">
            <h4>
              {a.title}
              {a.tag ? <span className="tag">{a.tag}</span> : null}
            </h4>
            <p>{a.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
