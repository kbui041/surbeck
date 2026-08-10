import CtaBand from "../components/CtaBand.jsx";
import { asset } from "../lib/asset.js";

/* Team bios. Add real photos to /public and swap the `tone` div for an <img>. */
const TEAM = [
  {
    name: "Steph",
    role: "Practice Manager",
    photo: "team-steph.jpg",
    tone: "duo-sea",
    paras: [
      "Hi there! I'm Steph, and I manage Surbeck Orthodontics. I'm also the gal you'll work with regarding scheduling, finances, and really, just about anything else. If you have a question, I'm always happy to help!",
      "I have a degree in Linguistics, but about six years ago, the pandemic unexpectedly opened the door to a career in orthodontics and healthcare management. It turned out to be one of the best surprises, because I absolutely love what I do.",
      "Outside the office, I'm a mom to the most wonderful 12-year-old daughter, whom I adore beyond words. I also love staying active, laughing often, and spending time with the people I love.",
      "Orthodontics is, without question, my favorite corner of healthcare. I love telling people that it's my job to make patients smile, both literally and figuratively. There's something incredibly rewarding about helping people feel more confident while making their experience with us as welcoming and enjoyable as possible.",
      "One of my favorite things about Surbeck Orthodontics is our team. We genuinely care about our patients, we love what we do, and we have a lot of fun doing it. I feel incredibly lucky to be part of a group that's committed to exceptional orthodontic care while making each patient's day just a little bit brighter.",
    ],
  },
  {
    name: "Vanessa",
    role: "Orthodontic Assistant",
    tone: "duo-pine",
    paras: [
      "Hi! I’m Vanessa. I enjoy orthodontics because every day feels like I’m doing arts and crafts while helping create confident smiles. Outside of the office, you can usually find me hunting down a new coffee shop with my sister, hiking with my four-legged bestie, Aiko, road-tripping, reading, or drawing.",
      "Fun Fact: I’m currently learning how to ride a motorcycle!",
    ],
  },
  {
    name: "Rebecca",
    role: "Orthodontic Assistant",
    photo: "team-rebecca.jpg",
    tone: "duo-sage",
    paras: [
      "Rebecca is one of our orthodontic assistants and loves helping patients throughout their smile journey, from getting braces on and off, to performing wire changes, to of course the most fun part: helping patients pick out their colorful ties. She enjoys making every visit a positive experience.",
      "Her favorite part of working in orthodontics is seeing patients get excited as they watch their smiles transform over time. There’s nothing more rewarding than celebrating those milestones alongside them, and the meaningful connections she builds with her patients and their families make each day even more fulfilling.",
      "Born and raised in Tacoma, Rebecca is a proud two-time Washington State Water Polo Champion. Outside the office, she’s excited to be embarking on a new chapter of life as a newlywed and looks forward to all the adventures that lie ahead with her husband.",
    ],
  },
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
          {TEAM.map((m) => (
            <article className="bio-row" key={m.name}>
              <div className="bio-photo">
                {m.photo ? (
                  <img
                    className="photo tall"
                    src={asset(m.photo)}
                    alt={`${m.name}, ${m.role} at Surbeck Orthodontics`}
                    width="800"
                    height="1000"
                    loading="lazy"
                  />
                ) : (
                  <div className={`photo tall ${m.tone}`} data-label={`Add ${m.name}'s photo`} />
                )}
              </div>
              <div className="bio-copy">
                <h2>{m.name}</h2>
                <p className="team-role">{m.role}</p>
                {m.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
