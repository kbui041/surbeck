import { useState } from "react";

const FAQS = [
  {
    q: "Is it required that my family dentist schedule my appointment with the orthodontist?",
    a: "No, it is not. Many of our patients are referred by their family dentist, yet many other patients take the initiative to schedule an examination themselves.",
  },
  {
    q: "Do you accept insurance?",
    a: "Our office is committed to helping you maximize your insurance benefits. Because insurance policies vary, we can only estimate your coverage in good faith but cannot guarantee coverage due to the complexities of insurance contracts. Your estimated patient portion can be paid with one of our payment options. We will submit claims to your insurance company.",
  },
  {
    q: "At what age should I schedule an appointment for an orthodontic screening?",
    a: "The American Association of Orthodontists recommends an orthodontic screening at age 7. By this age, several permanent teeth in most children have erupted, allowing us to effectively evaluate your orthodontic condition.",
  },
  {
    q: "Will my teeth straighten out as they grow?",
    a: "Only occasionally will teeth “spontaneously” straighten. More often than not, crowding will persist or worsen with time. The space available for the front teeth does not increase as you grow, but rather space is gained behind the last teeth as the jaws grow. In most people, after the permanent molars erupt, the space available for the front teeth decreases with age.",
  },
  {
    q: "What will happen at the initial examination appointment?",
    a: "Upon arriving, each patient and parent will be seen by the staff and doctor who will acclimate you to our office and prepare for the initial exam. We will take the necessary photographs to allow us to make a proper diagnosis. The doctor will then complete a brief, but thorough, exam.",
    listIntro: "There are five essential questions that we will cover during the initial examination:",
    list: [
      "Is there an orthodontic problem, and if so, what is it?",
      "What must be done to correct the problem?",
      "Will any teeth need to be removed?",
      "How long will the treatment take to complete?",
      "How much will the treatment cost?",
    ],
  },
  {
    q: "Will I need to have teeth extracted for braces?",
    a: "Removing teeth is occasionally required to achieve the best orthodontic result, but in most cases it is not. Straight teeth and a balanced facial profile are the goal of orthodontics. However, because new technology has provided advanced orthodontic procedures, removing teeth is not always necessary for orthodontic treatment.",
  },
  {
    q: "How long will it take to complete treatment?",
    a: "Treatment time obviously depends on each patient’s specific orthodontic problem. In general, treatment times range from 12 to 30 months. The “average” time frame a person is in braces is approximately 18 months.",
  },
  {
    q: "How much will braces cost? Are financing options available? How does my insurance work?",
    a: "It is impossible to give an exact cost for treatment until we have examined you. We will cover the exact cost and financial options during the initial examination. We have many financing options available to accommodate your needs, and we will review these with you. We will also review your insurance policy and help to maximize your benefit and file your claims.",
  },
  {
    q: "How often will I have appointments?",
    a: "Appointments are scheduled according to each patient’s needs. Most patients in braces will be seen every four to six weeks. If there are specific situations that require more frequent monitoring, we will schedule appointments accordingly.",
  },
  {
    q: "Can I schedule all of my appointments after school?",
    a: "Unfortunately, we cannot schedule all appointments for students during after-school hours. However, because most appointments are scheduled five to 10 weeks apart, most patients will miss minimal school due to their orthodontic treatments. We will, however, make a sincere effort to meet your scheduling needs.",
  },
  {
    q: "Do I need to see my family dentist while in braces?",
    a: "Yes! Regular checkups with your family dentist are important while in braces. Your family dentist will determine the intervals between cleaning appointments while you are in braces.",
  },
  {
    q: "Are there foods I cannot eat while I have braces?",
    a: "Yes. Once treatment begins, we will explain the complete instructions and provide a comprehensive list of foods to avoid. Some of those foods include: ice, hard candy, raw vegetables and all sticky foods (i.e. caramel and taffy). You can avoid most emergency appointments to repair broken or damaged braces by carefully following our instructions.",
  },
  {
    q: "What is an emergency appointment? How are those handled?",
    a: "If your braces are causing extreme pain or if something breaks, you should call our office. In most cases, if possible, we may address these issues over the telephone. However, if you require an emergency appointment, we will promptly make arrangements for you to be seen.",
  },
  {
    q: "What is Phase One (early) treatment?",
    a: "Phase One treatment, if necessary, is usually initiated on children between the ages of 7 and 10. Phase One treatment lasts about 5-14 months. The primary objective for Phase One treatment is to address significant problems to prevent them from becoming more severe and to improve self-esteem and self-image.",
  },
  {
    q: "Will my child need full braces if he/she has Phase One treatment?",
    a: "It is best to assume that your child will need full braces even after Phase One treatment. The period following Phase One treatment is called the “resting period,” during which growth and tooth eruption are closely monitored. Throughout this period, parents and patients will be kept informed of future treatment recommendations.",
  },
  {
    q: "Is it too late to have braces if I am already an adult?",
    a: "A surprising percentage of our patients are adults. In fact, 25 percent of all orthodontic patients are adults. Health, happiness and self-esteem are vitally important to adults. No patient is “too old” to wear braces! Teeth retain the ability to move throughout one’s life. Don’t let them continue to shift and become more crowded, allow us to move your teeth into an optimal position for improved ease of cleaning and a beautiful smile.",
  },
];

export default function FAQ() {
  const [openSet, setOpenSet] = useState(() => new Set());

  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Frequently Asked Questions</h1>
          <p className="lead">Answers to some of the questions we hear most often.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <ul className="faq">
            {FAQS.map((f, i) => {
              const isOpen = openSet.has(i);
              return (
                <li className={`faq-item ${isOpen ? "open" : ""}`} key={i}>
                  <button
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                  >
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden="true">{isOpen ? "–" : "+"}</span>
                  </button>
                  <div className="faq-a-wrap">
                    <div className="faq-a">
                      <p>{f.a}</p>
                      {f.listIntro && <p>{f.listIntro}</p>}
                      {f.list && (
                        <ul className="faq-sublist">
                          {f.list.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
