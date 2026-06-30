import CtaBand from "../components/CtaBand.jsx";

/* Add real team members and photos here. */
const TEAM = [
  { name: "Team Member", role: "Treatment Coordinator", tone: "duo-sea" },
  { name: "Team Member", role: "Orthodontic Assistant", tone: "duo-pine" },
  { name: "Team Member", role: "Orthodontic Assistant", tone: "duo-sage" },
  { name: "Team Member", role: "Front Office", tone: "duo-stone" },
];

export default function Team() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Meet Our Team</h1>
          <p className="lead">
            Behind every great smile is a team that genuinely cares. Get to know the people who
            will look after you throughout treatment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid cols-3">
            {TEAM.map((m, i) => (
              <article className="team-card" key={i}>
                <div className={`photo square ${m.tone}`} data-label="Add team photo" />
                <h3>{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <p className="muted">Short biography and favorite part of orthodontics go here.</p>
              </article>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 28, fontSize: ".9rem" }}>
            Placeholder team. Replace with real photos, names, roles, and short bios.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
