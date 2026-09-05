import { asset } from "../lib/asset.js";

export default function About() {
  return (
    <section className="section">
      <div className="wrap about about-split">
        <aside className="about-figure">
          <img
            className="portrait"
            src={asset("dr-surbeck-portrait.jpg")}
            alt="Dr. Burleigh T. Surbeck at the door of his Bellevue practice"
            width="1600"
            height="2000"
          />
          <figure className="testimonial">
            <blockquote>
              &ldquo;The most awesome orthodontist with a personal approach.&rdquo;
            </blockquote>
            <figcaption>Lisa H., patient</figcaption>
          </figure>
        </aside>

        <div className="about-body">
          <h1>Burleigh T. Surbeck, D.D.S. M.S.D.</h1>
          <p className="about-role">Orthodontist &middot; Bellevue, Washington</p>

          <p className="lead">
          Dr. Surbeck grew up in Tacoma, WA and was introduced to dentistry at a very young age, as his
father was a general dentist. However, it was his own orthodontic experience that piqued his
interest in this specific area of dentistry. When it became apparent at the beginning of high
school that a professional football career was unlikely, it dawned on him that orthodontics
shared a lot in common with football. It was a team sport, required excellent planning and
execution for success and efficiency, and had a beginning and an end.
          </p>

          <p>
          Though Dr. Surbeck played one year of college football at Claremont McKenna College, his
sights were set on attending the University of Washington Dental School, considered one of the
top programs in the country and it was right in his backyard (in-state tuition was also a real
plus). After his freshman year, Dr. Surbeck transferred to UW where over the next four years
he earned a degree in Zoology (the study of animal science) and a degree in Business
Administration from the Fosters School of Business. His studies in business school focused on
Human Resource Management and Organizational Behavior, which would further shape his
insights into a “team approach” focused on consistently delivering a successful and efficient
results.
          </p>

          <p>
          After attending four years of dental school and graduating with honors, Dr. Surbeck was
selected as one of five incoming residents to attend the prestigious University of Washington
School of Dentistry Orthodontic Residency. 2 ½ years later, Dr. Surbeck graduated and started
his private practice in Bellevue, Washington in 2002.
          </p>

          <p>
          Dr. Surbeck is a member of the American Association of Orthodontists and a past board
member of both the Alumni Associations of the University of Washington School of Dentistry
and the Graduate Orthodontic Program. He is a past part-time faculty member of the UW
School of Dentistry, as well as the 1994 UW Homecoming King.
          </p>

          <p>Dr. Surbeck and his wife Katie (a Bellevue native) have lived on the Eastside since 1999. Their 3
adult children are in college or have graduated college and continue to live in the Seattle area.
As an “empty nester”, Dr. Surbeck enjoys refining processes and focusing on patient care, as
well as saltwater fishing, gardening, cooking and entertaining, and completing projects at their
family cabin on Vancouver Island. At some point, he may get back in to teaching.</p>
        </div>
      </div>
    </section>
  );
}
