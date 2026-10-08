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
    a: "It is well known that teeth move throughout one’s lifetime. There are occasions when gradual improvement in alignment is seen as the front teeth erupt, favorably guided into better alignment by the surrounding pressure of the lips and tongue. Though this is more the exception than the rule, it’s why a period of observation is recommended to assess changes in the alignment of the front teeth. More often than not, crowding will persist or worsen with time. Unfortunately, the space available for the front teeth does not increase as you grow, but rather space is gained behind the last teeth as the upper and lower jaws elongate with growth. In most people, after the permanent molars erupt, the space available for the front teeth does not increase with age.",
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
    q: "Will I need to have teeth extracted for orthodontic alignment of teeth braces?",
    a: "Extraction of permanent teeth is only occasionally required to achieve the best orthodontic result, but this is rare. Straight teeth with a reasonably normal angulation and a balanced facial profile are the goal of orthodontics. However, because new technology has provided advanced orthodontic procedures, the irreversible nature of removing teeth is not generally necessary for orthodontic treatment.",
  },
  {
    q: "How long will it take to complete treatment?",
    a: "The duration of orthodontic treatment depends on each patient’s specific orthodontic issues, such as the severity of crowding and the relative balance in the positions of the upper and lower jaws. In general, treatment times range from 8 to 16 months. The “average” time frame a person is in orthodontic treatment varies depending upon whether braces are used as opposed to clear aligner treatment, and is approximately 14 months with braces, while clear aligner treatment lasts 4–6 months longer.",
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
    a: "Yes! Regular checkups with your family dentist are important while in orthodontic treatment with either braces or clear aligners. Your family dentist will determine the intervals between cleaning appointments while you are in orthodontic treatment, during the treatment planning stage of your care.",
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
    a: [
      "If an initial phase of orthodontic treatment is needed, it is relatively brief, and focused on a specific issue such as a crossbite of the back teeth, or insufficient space for the normal eruption of the remaining unerupted permanent canines and premolars. While this averts the potential for more lengthy or involved future orthodontic treatment, it does not ensure that the remaining unerupted permanent teeth or jaw growth discrepancies will spontaneously self-correct. My goal is to try and avoid the need for Phase I treatment unless it is absolutely necessary.",
      "In most cases, a second phase of orthodontic treatment will be needed once all permanent teeth erupt to refine the alignment of all of the permanent teeth while also ensuring the top and bottom teeth fit together in a manner that provides a stable and protective bite.",
      "Following completion of Phase I orthodontic treatment, your child’s dental eruption and jaw growth will be monitored and evaluated. Throughout this period, parents and patients will be kept informed of future treatment recommendations.",
    ],
  },
  {
    q: "Is it too late to straighten my teeth if I am already an adult?",
    a: "An increasing number of our patients are adults. In fact, over 25 percent of my orthodontic patients are adults. This is not a vanity issue. There are very clear indicators that straight teeth that correctly fit together have a reduced risk of cavities, gum disease, and chipping and wear. Health, prevention of future problems, and self-esteem are vitally important to adults too. No patient is “too old” to undergo orthodontic treatment! Teeth retain the ability to move throughout one’s life. Don’t let them continue to shift and become more crowded, allow us to move your teeth into an optimal position for improved ease of cleaning and a beautiful smile.",
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
                      {Array.isArray(f.a) ? f.a.map((p, j) => <p key={j}>{p}</p>) : <p>{f.a}</p>}
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
