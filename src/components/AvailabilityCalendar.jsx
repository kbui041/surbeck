import { useState } from "react";
import { OPEN_DAYS, CALENDAR_NOTE } from "../data/siteData.js";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AvailabilityCalendar() {
  const now = new Date();
  const [view, setView] = useState(new Date(now.getFullYear(), now.getMonth(), 1));

  const y = view.getFullYear();
  const m = view.getMonth();
  const key = `${y}-${String(m + 1).padStart(2, "0")}`;
  const open = OPEN_DAYS[key] || [];

  const firstDow = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const isThisMonth = now.getFullYear() === y && now.getMonth() === m;

  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(<div className="day empty" key={`e${i}`} />);
  for (let d = 1; d <= daysInMonth; d++) {
    const isOpen = open.includes(d);
    const today = isThisMonth && now.getDate() === d;
    cells.push(
      <div className={`day ${isOpen ? "open" : "closed"} ${today ? "today" : ""}`} key={d}>
        {d}
      </div>
    );
  }

  const shift = (delta) => setView(new Date(y, m + delta, 1));

  return (
    <div className="cal">
      <div className="cal-top">
        <button className="cal-btn" aria-label="Previous month" onClick={() => shift(-1)}>‹</button>
        <h3>{MONTHS[m]} {y}</h3>
        <button className="cal-btn" aria-label="Next month" onClick={() => shift(1)}>›</button>
      </div>
      <div className="cal-grid">
        {DOW.map((d) => (
          <div className="dow" key={d}>{d}</div>
        ))}
        {cells}
      </div>
      <div className="cal-foot">
        <span className="legend"><i className="swatch open" /> Open</span>
        <span className="legend"><i className="swatch closed" /> Closed</span>
      </div>
      {CALENDAR_NOTE ? <div className="cal-note">{CALENDAR_NOTE}</div> : null}
    </div>
  );
}
