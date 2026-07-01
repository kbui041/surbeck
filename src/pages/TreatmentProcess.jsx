import CtaBand from "../components/CtaBand.jsx";

const BEFORE_TREATMENT = [
  {
    n: "01",
    h: "Consultation",
    p: "A 45-minute appointment where we take your initial photos (facial and intraoral) and begin to understand more about you, your smile goals, and your orthodontic case. Following your consultation, Dr. Surbeck writes a detailed, comprehensive letter reviewing every point discussed, so there's no need to bring a notepad, we'll take the notes for you. We send a similar letter to your dentist, so they can begin to learn about your proposed treatment as well.",
  },
  {
    n: "02",
    h: "Observation Appointments",
    p: "There may be a recommended period of observation before beginning treatment. These appointments allow us to take new photos to better track orthodontic patterns, progress, and any other elements of your case. They're usually no more than 30 minutes.",
  },
  {
    n: "03",
    h: "Diagnostic Records",
    p: "Photographs, a set of orthodontic X-rays, intraoral scans, and impressions for plaster casts. Taking records does not commit you to beginning treatment; it helps Dr. Surbeck understand your individual case in greater detail and treatment plan accordingly. This appointment is about 30 minutes. Your Treatment Plan Review is scheduled following this visit.",
  },
  {
    n: "04",
    h: "Treatment Plan Review",
    p: "A 45-minute, one-on-one appointment with Dr. Surbeck to review the results of his treatment planning, using the diagnostic records taken. This visit is held during the lunch hour or at the end of the day, so Dr. Surbeck can give it his undivided attention. We want patients to feel free to ask any and all questions about their proposed treatment. At the end of this visit, you'll meet with our Treatment Coordinator to review treatment fees and payment plan options.",
  },
];

const GETTING_BRACES_PLACED = [
  {
    n: "01",
    h: "Separators",
    p: <>The “<strong>sep</strong>” (“seperators”) appointment where we add small rubber bands
    which will be placed to open small spaces of either side of the lower 1st molars for band
    placement. This appointment is approximately 15 minutes.</>,
  },
  {
    n: "02",
    h: "Band Appointment",
    p: <>4-7 days after the “sep” appointment, will be the banding
    appointment. Metal “<strong>bands</strong>” will be affixed to the lower 1st molars and impressions will
    be taken for indirect bonding. This appointment is approximately 45 minutes; We
    schedule these appointments in the morning.</>
  },
  {
    n: "03",
    h: "Bond Appointment",
    p: <>2-14 days after the “band” appointment, we will “<strong>bond</strong>”. We will
    bond the braces to the upper and lower teeth. Oral Hygiene instructions and care of
    braces will be reviewed. This appointment is approximately 1 hour 45 minutes; We
    schedule these appointments in the morning.</>,
  },
];

export default function TreatmentProcess() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Our Treatment Process</h1>
          <p className="lead">
            From your first visit to long-term retention follow-up, here is what to expect.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2 style={{ marginBottom: 28 }}>Before Treatment</h2>
          <ol className="steps">
            {BEFORE_TREATMENT.map((s) => (
              <li className="step" key={s.n}>
                <span className="step-n">{s.n}</span>
                <div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2 style={{ marginBottom: 28 }}>Getting Braces Placed</h2>
          <p className="lead" style={{ marginBottom: 32 }}>
            In orthodontics, the process of adding brackets to your teeth is called
            "bonding." Our office uses an <i>INDIRECT BONDING</i> approach, the most accurate method
            of placement, generally completed over a series of three carefully timed
            appointments.
          </p>
          <ol className="steps">
            {GETTING_BRACES_PLACED.map((s) => (
              <li className="step" key={s.n}>
                <span className="step-n">{s.n}</span>
                <div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>Adjustment Appointments</h2>
          <p>
            Once the braces are placed and bonded, adjustment appointments begin. These
            typically occur every 3–5 weeks, depending on our office's availability, your
            availability, and the needs of your treatment. Dr. Surbeck determines the right
            interval for your next appointment at each visit. Every adjustment looks a little
            different, but wire size and strength, wire and bracket positioning, and the use of
            elastics are all evaluated each time. Continuity of provider is essential to
            efficient treatment, so the same set of eyes continues to review and adjust your
            care as you progress.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth:880 }}>
          <h2>Debonding</h2>
          <p>
            We rarely remove all the braces at once. Instead, we take a slower, more methodical
            approach. Once teeth are straightened on the horizontal plane and then the
            vertical plane, Dr. Surbeck may recommend elastics to correct your bite. The first
            step in braces removal is taking off the lower, front four brackets, which lets Dr.
            Surbeck see exactly how the top and bottom teeth rest against each other and
            determine whether to remove the remaining lower brackets. Each successive
            appointment moves a patient closer to full debond. All braces are removed once Dr.
            Surbeck has treated to clinic norms: horizontal and vertical alignment, and a bite
            that fits perfectly.
          </p>
          <p>
            Before removing the remaining braces, Dr. Surbeck invites patients to share
            feedback, input, and general commentary. While we treat to clinical norms, there is
            always a degree of subjectivity patients may want to share, not everyone's "ideal
            smile" looks the same, and we want every patient to have the chance to give direct,
            meaningful feedback on their results.
          </p>
        </div>
      </section>

      <CtaBand className="white"/>
    </>
  );
}
