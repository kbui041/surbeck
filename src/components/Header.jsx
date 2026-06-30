import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  {
    to: "/why-surbeck",
    label: "Why Surbeck",
    children: [
      { to: "/why-surbeck", label: "Why Surbeck Orthodontics" },
      { to: "/philosophy", label: "Our Philosophy" },
      { to: "/why-faster", label: "Why Treatment Can Be Faster" },
    ],
  },
  {
    to: "/treatment-process",
    label: "Treatment",
    children: [
      { to: "/treatment-process", label: "Our Treatment Process" },
      { to: "/braces-vs-invisalign", label: "Braces vs. Invisalign" },
      { to: "/complex-cases", label: "Complex Cases" },
    ],
  },
  { to: "/gallery", label: "Results" },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about", label: "Meet Dr. Surbeck" },
      { to: "/team", label: "Meet Our Team" },
    ],
  },
  {
    to: "/resources",
    label: "Resources",
    children: [
      { to: "/patient-education", label: "Patient Education Library" },
      { to: "/resources/new-patient-forms", label: "New Patient Forms" },
      { to: "/resources/faq", label: "Frequently Asked Questions" },
      { to: "/financial", label: "Financial Information" },
    ],
  },
  {
    to: "/referrals",
    label: "Referrals",
    children: [
      { to: "/referrals", label: "Patient Referrals" },
      { to: "/referring-dentists", label: "Referring Dentists" },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const closeAll = () => {
    setOpen(false);
    setOpenSub(null);
  };

  return (
    <header className="header">
      <div className="wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Surbeck Orthodontics">
          <span className="b">SURBECK</span>
          <span className="o">Orthodontics</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map((l) =>
            l.children ? (
              <div
                className="nav-item has-sub"
                key={l.to}
                onMouseEnter={() => setOpenSub(l.to)}
                onMouseLeave={() => setOpenSub(null)}
              >
                <NavLink to={l.to} onClick={closeAll}>{l.label}</NavLink>
                <div className={`submenu ${openSub === l.to ? "open" : ""}`}>
                  {l.children.map((c) => (
                    <NavLink key={c.to} to={c.to} onClick={closeAll}>
                      {c.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} onClick={closeAll}>
                {l.label}
              </NavLink>
            )
          )}
          <Link to="/appointment" className="nav-cta" onClick={closeAll}>Book a Consult</Link>
        </nav>
      </div>
    </header>
  );
}
