import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import { CASES, TOPICS } from "../data/galleryData.js";

const countFor = (key) => {
  const t = TOPICS[key];
  if (!t) return 0;
  return CASES.filter(
    (x) =>
      (t.group === "All" || x.group === t.group) &&
      (!t.categories.length || t.categories.includes(x.category))
  ).length;
};

/* topic: matches a key in TOPICS (src/data/galleryData.js) and deep-links the
   gallery to the relevant cases. Leave it off when we have no cases to show. */
const CLUSTERS = [
  {
    h: "Bite & Jaw Discrepancies",
    items: [
      { t: "Patients preparing for single or double jaw (orthognathic) surgery", topic: "jaw-surgery" },
      { t: "Significant bite discrepancies", topic: "bite-discrepancies" },
      { t: "Open bites", topic: "open-bite" },
      { t: "Deep bites" },
      { t: "Crossbites" },
    ],
  },
  {
    h: "Missing & Impacted Teeth",
    items: [
      { t: "Impacted or unerupted teeth", topic: "impacted-teeth" },
      { t: "Congenitally missing teeth and implant site preparation", topic: "missing-teeth" },
    ],
  },
  {
    h: "Interdisciplinary Care",
    items: [
      { t: "Collaboration with a periodontist for gum or bone health", topic: "perio" },
      { t: "Cases requiring coordination with restorative dentistry", topic: "restorative" },
      { t: "Adult orthodontic treatment", topic: "adult-treatment" },
      { t: "Orthodontic retreatment following previous treatment" },
    ],
  },
];

export default function ComplexCases() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Complex Cases</h1>
          <p className="lead">
            Some smiles require more than braces or Invisalign, and we're here to help guide you
            and illuminate the path forward.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: "72ch" }}>
          <p>
            Whether treatment involves impacted teeth, missing teeth, jaw surgery, periodontal
            concerns, dental implants, or collaboration with several dental specialists, complex
            orthodontic cases demand thoughtful planning, precise execution, and exceptional
            communication. These are the cases that have become a defining focus of Surbeck
            Orthodontics.
          </p>
          <p>
            We proudly welcome children, teenagers, and adults whose orthodontic treatment
            requires a more comprehensive approach. While every patient receives individualized
            attention in our practice, many families seek Dr. Surbeck's expertise specifically
            because their treatment extends beyond simply straightening teeth.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 36 }}>
            <h2>What Makes a Case &ldquo;Complex&rdquo;?</h2>
            <p className="lead">
              Complex orthodontic treatment often involves challenges that require careful
              coordination with your overall dental health and long-term treatment goals.
              Examples may include:
            </p>
          </div>

          <div className="cx-clusters">
            {CLUSTERS.map((cl) => (
              <section className="cx-cluster" key={cl.h}>
                <h3>{cl.h}</h3>
                <ul>
                  {cl.items.map((e) => {
                    const n = e.topic ? countFor(e.topic) : 0;
                    return (
                      <li key={e.t}>
                        {n > 0 ? (
                          <Link to={`/gallery?topic=${e.topic}`}>
                            <span className="cx-item-t">{e.t}</span>
                            <span className="cx-item-n">
                              {n} {n === 1 ? "case" : "cases"}
                            </span>
                          </Link>
                        ) : (
                          <span className="cx-item-t">{e.t}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          <p className="muted" style={{ marginTop: 30, maxWidth: "72ch" }}>
            Every patient presents a unique combination of clinical findings, which is why no two
            treatment plans are ever exactly alike.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: "72ch" }}>
          <h2>Collaboration Is Essential</h2>
          <p>
            The most successful complex cases are rarely managed by a single provider alone. Many
            patients benefit from a collaborative team that may include your general dentist,
            oral surgeon, periodontist, pediatric dentist, prosthodontist, endodontist, or other
            dental specialists. Rather than viewing these providers as separate pieces of your
            care, Dr. Surbeck works to unite them under a single, coordinated treatment plan.
          </p>
          <p>
            Throughout treatment, our office maintains detailed communication with your
            healthcare team, ensuring each provider understands not only their role, but also how
            every phase of treatment contributes to the final result. This collaborative approach
            minimizes uncertainty, reduces unnecessary delays, and helps create a smoother
            experience for everyone involved, but most importantly a straightforward path for the
            patient.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: "72ch" }}>
          <h2>Precision Planning. Efficient Treatment.</h2>
          <p className="lead">
            Complex treatment does not have to mean unnecessarily long treatment.
          </p>
          <p>
            At Surbeck Orthodontics, efficiency begins long before braces are ever placed. Every
            case is carefully evaluated with the end result in mind. Through meticulous treatment
            planning, thoughtfully timed interdisciplinary coordination, precise appliance
            placement, and our frequent three-to-four-week appointment intervals, we strive to
            keep treatment progressing steadily while maintaining the highest standard of care.
          </p>
          <p>
            When treatment depends upon multiple providers, communication becomes just as
            important as clinical skill. Our office works diligently behind the scenes to
            coordinate timing, share records, communicate treatment progress, and ensure every
            member of your healthcare team is working toward the same objective.
          </p>
          <p className="cx-goal">
            Our goal is simple: exceptional outcomes achieved as efficiently as biology and
            careful planning allow.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
