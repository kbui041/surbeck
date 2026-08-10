/* =========================================================================
   PATIENT EDUCATION LIBRARY
   -------------------------------------------------------------------------
   One entry per topic, in the order they appear on the library page.

   body blocks:
     { p: "..." }        a paragraph
     { h: "..." }        a subheading
     { ul: ["...", ...] } a bulleted list
     { note: "..." }     an editor's note. These are visible ONLY in
                         development, never to patients, so unfinished
                         topics can ship safely.

   A topic with an empty body shows on the library page without a link,
   labeled "Coming soon".
   ========================================================================= */

export const ARTICLES = [
  {
    slug: "consultation-process",
    title: "The Consultation Process",
    blurb: "What happens at your first visit, and what you'll receive afterward.",
    body: [
      {
        p: "Consultations at our office can be scheduled at any time – no referrals necessary. The appointment is a 45-minute appointment where we take your initial photos (facial and intraoral) and begin to understand more about you, your smile goals, and your orthodontic case. Unlike many other orthodontic offices where the orthodontist might stop in for a few minutes, Dr. Surbeck is highly involved during the consult, not only taking the time to get to know you and your family, but jumping in and offering his thoughts regarding your orthodontic case.",
      },
      {
        p: "Following your consultation, Dr. Surbeck writes a detailed, comprehensive letter reviewing every point discussed, so there's no need to bring a notepad, we'll take the notes for you. We send a similar letter to your dentist, so they can begin to learn about your proposed treatment as well.",
      },
      {
        p: "If there are additional dental specialists needed during the orthodontic process, we will work with your family to either refer you to local, trusted providers or work with providers you already know, to ensure continuity of care throughout the treatment process.",
      },
      { h: "Is There a Fee for Consultations?" },
      {
        p: "During your visit, Dr. Surbeck invests significant time evaluating your orthodontic needs, reviewing your dental and medical history, taking the time to answer questions, and developing an individualized treatment plan. Following your consultation, we also prepare detailed written summaries for both you and your general dentist so everyone involved in your care begins with a clear understanding of the proposed treatment.",
      },
      {
        p: "While many orthodontic offices offer complimentary consultations, those appointments are often designed to determine whether treatment is appropriate before moving quickly into treatment planning. We have intentionally chosen a different approach. We believe that expert diagnosis, thoughtful treatment planning, and patient education have inherent value, regardless of whether treatment begins that day.",
      },
      {
        p: "Children's consultations are $30, and adult consultations are $50, reflecting the time and clinical planning involved while still keeping the visit accessible.",
      },
    ],
  },

  {
    slug: "first-orthodontic-visit",
    title: "When Should a Child First See an Orthodontist?",
    blurb: "Why age 7 is a guideline, not a deadline, and what early visits accomplish.",
    body: [
      { p: "The short answer? Whenever you have questions! We're happy to help." },
      {
        p: "If your child's dentist has recommended an orthodontic evaluation, we'd love to meet you. There's no need to wait for a certain age; if a referral has been made, it's the right time for us to take a look.",
      },
      {
        p: "If you're simply wondering whether your child may need orthodontic treatment in the future, we welcome those visits too. The American Association of Orthodontists recommends that children have their first orthodontic evaluation around age 7, but every child develops differently. Sometimes the best recommendation is simply to watch growth over time, and that's perfectly okay.",
      },
      {
        p: "In fact, we enjoy meeting children before they're ready for braces. Early visits give us the opportunity to get to know your child and your family, long before treatment ever begins. We believe that trust is one of the most important parts of exceptional healthcare. By meeting early, we have the opportunity to build a relationship, answer questions, and help your child become comfortable in our office so that, if treatment is needed in the future, it feels familiar rather than intimidating.",
      },
      {
        p: "From a clinical perspective, early evaluations are equally valuable. Orthodontics is about understanding growth, and growth takes time. Seeing your child periodically allows us to gather important data points, observe how their smile develops, and recognize biological trends that simply can't be appreciated during a single visit. These observations help Dr. Surbeck determine not only if treatment is needed, but when treatment will be most effective. This approach often results in simpler, more efficient care and the best possible long-term outcome.",
      },
      {
        p: "Surbeck Orthodontics also has particular expertise in children whose smiles require a little extra planning. If your child is especially prone to cavities, is congenitally missing teeth, has impacted teeth, or has other developmental or congenital dental concerns, our practice is uniquely equipped to provide the additional oversight and interdisciplinary planning these cases often require. We work closely with your family's dentist and any necessary specialists to create thoughtful, individualized treatment plans designed for long-term success.",
      },
      {
        p: "Whether your child ultimately needs treatment now, years from now, or simply periodic observation, we're here to provide honest recommendations, thoughtful guidance, and exceptional care every step of the way.",
      },
    ],
  },

  {
    slug: "early-treatment",
    title: "Early (Phase One) Treatment",
    blurb: "What Phase I is, when it helps, and why we recommend it conservatively.",
    body: [
      {
        p: "At Surbeck Orthodontics, we believe that the best treatment is the treatment that's recommended at the right time.",
      },
      {
        p: "For some children, that means beginning orthodontic treatment at an earlier age. For many others, it means carefully observing growth until the ideal time arrives. Every recommendation Dr. Surbeck makes is based on your child's individual development, not a predetermined timeline.",
      },
      { h: "What Is Phase I Treatment?" },
      {
        p: "Phase I, sometimes called early interceptive orthodontic treatment, is treatment that begins while a child still has a combination of baby and permanent teeth, typically between the ages of 7 and 10.",
      },
      {
        p: "The goal of Phase I treatment is not simply to straighten teeth. Instead, it is designed to address specific developmental concerns that are best managed while a child is still growing. Depending on your child's needs, treatment may involve braces on a limited number of teeth, expanders, space maintainers, or other specialized orthodontic techniques.",
      },
      {
        p: "When recommended appropriately, Phase I treatment can help guide jaw development, create space for erupting permanent teeth, correct crossbites, reduce the risk of trauma to protruding front teeth, and simplify future orthodontic treatment.",
      },
      { h: "Our Philosophy on Early Treatment" },
      {
        p: "While Phase I treatment can be incredibly beneficial in the right circumstances, it is not necessary for every child.",
      },
      {
        p: "Dr. Surbeck takes a deliberately conservative approach to early orthodontic treatment. Rather than recommending treatment simply because a child has reached a certain age, he carefully evaluates whether treatment is truly indicated and whether beginning now will provide a meaningful clinical advantage over waiting.",
      },
      {
        p: "In many cases, the most appropriate recommendation is simply to continue watching your child's growth.",
      },
      {
        p: "This observation period is far from passive. Each visit provides valuable information about how your child's teeth, jaws, and facial development are changing over time. These additional data points allow Dr. Surbeck to recognize biological trends, identify the ideal treatment window, and make recommendations with greater confidence and precision than would be possible from a single evaluation.",
      },
      { h: "Why Timing Matters" },
      {
        p: "One of our primary goals is to provide treatment that is both effective and efficient. Beginning orthodontic treatment too early can sometimes result in unnecessarily long treatment times or multiple rounds of appliances that may not ultimately improve the final result. We also recognize that orthodontic fatigue is real. Children who spend years in treatment may become less motivated, less compliant, and understandably eager to be finished.",
      },
      {
        p: "Whenever it is clinically appropriate, Dr. Surbeck strives to avoid unnecessary treatment and unnecessary time in braces. By recommending treatment only when it provides a clear benefit, we are often able to minimize treatment duration while still achieving outstanding, stable results.",
      },
      { h: "Thoughtful Care, Individualized Recommendations" },
      {
        p: "Every child grows differently, and every smile deserves an individualized approach. Whether Dr. Surbeck recommends beginning Phase I treatment today or simply monitoring growth over the coming months or years, you can feel confident that every recommendation is made with one goal in mind: providing the right treatment, at the right time, for the right reason.",
      },
      {
        pull: "Because exceptional orthodontics isn't about treating earlier: it's about treating smarter.",
      },
    ],
  },

  {
    slug: "treatment-duration",
    title: "Treatment Duration",
    blurb: "What determines how long treatment takes, and how we keep it efficient.",
    body: [
      {
        p: "One of the first questions we hear is, “How long will I be in braces?” It's an important question and one that we take seriously.",
      },
      {
        p: "Orthodontic treatment is highly individualized. A relatively straightforward case may progress quite differently than one involving impacted teeth, missing teeth, jaw discrepancies, or collaboration with other dental specialists. Because no two smiles develop in exactly the same way, treatment duration is always tailored to the individual patient.",
      },
      {
        p: "At your initial consultation, Dr. Surbeck will provide a thoughtful estimate of your anticipated treatment length based on your clinical findings. Once diagnostic records have been completed and a comprehensive treatment plan has been developed, that estimate becomes even more refined. Throughout treatment, we believe in maintaining open communication so you always have a clear understanding of your progress and what lies ahead.",
      },
      { h: "Efficient Treatment Is No Accident" },
      {
        p: "At Surbeck Orthodontics, efficiency isn't a happy coincidence: it's an intentional part of our treatment philosophy.",
      },
      {
        p: "Every aspect of your orthodontic care is thoughtfully designed to help you achieve an exceptional result in the shortest clinically appropriate timeframe. Precision treatment planning, meticulous bracket placement, careful monitoring, and proactive adjustments all contribute to treatment that is both efficient and predictable.",
      },
      {
        p: "One of the ways we accomplish this is through our appointment intervals. While many orthodontic practices schedule routine adjustment visits every six to eight weeks—or even longer—we typically see our patients every three to four weeks. These more frequent visits allow Dr. Surbeck to monitor tooth movement closely, make timely adjustments, and keep treatment progressing steadily, often resulting in markedly shorter overall treatment times without compromising the health of your teeth or supporting tissues.",
      },
      {
        figure: "appointment-intervals.jpg",
        alt: "More frequent visits, faster results. A typical practice sees patients every 6 to 8 weeks, about 6 to 7 visits per year, with typical completion at 24 or more months. Surbeck Orthodontics sees patients every 3 to 4 weeks, about 13 to 15 visits per year, with typical completion at 14 to 16 months, an average of 30 to 40 percent faster treatment time. More frequent visits give twice as many opportunities to monitor tooth movement, adjust biomechanics, catch problems early, and reinforce compliance.",
        caption: "Why appointment intervals matter: consistent monitoring, consistent progress, better results.",
      },
      { h: "A Partnership in Your Smile" },
      { p: "Successful orthodontic treatment is a partnership between our team and your family." },
      {
        p: "While we are committed to providing precise treatment planning and attentive care, there are several factors that only the patient can control. Excellent brushing and flossing, wearing elastics exactly as prescribed, attending scheduled appointments, and protecting braces from breakage all play a significant role in keeping treatment on schedule.",
      },
      {
        p: "Conversely, repeated broken brackets, poor oral hygiene, inconsistent elastic wear, or missed appointments can interrupt tooth movement and extend treatment beyond the original estimate. Even small delays have a tendency to accumulate over time.",
      },
      {
        p: "Our goal is to help you avoid those setbacks whenever possible. We'll provide clear instructions, encourage you every step of the way, and work alongside you to keep treatment moving efficiently from beginning to end.",
      },
      { h: "The Right Pace. The Right Result." },
      {
        p: "We recognize that orthodontic treatment is an investment of both time and trust. Nobody wants to wear braces longer than necessary, and we certainly don't want that either!",
      },
      {
        p: "By combining thoughtful diagnosis, precision treatment mechanics, frequent monitoring, and an engaged, committed patient, we're able to consistently deliver treatment that is remarkably efficient while never compromising the health, stability, or quality of your final result.",
      },
    ],
  },

  {
    slug: "appointment-frequency",
    title: "Appointment Frequency",
    blurb: "Why we see patients every three to four weeks instead of every six to eight.",
    body: [
      {
        p: "Orthodontic treatment is a dynamic biological process. Teeth begin responding to orthodontic forces immediately after an adjustment, and as they move, the mechanics of treatment continually evolve. Regular evaluations allow us to monitor that progress closely, make timely refinements, identify broken appliances or unwanted tooth movement early, and reinforce patient compliance before small issues become larger setbacks. At Surbeck Orthodontics, we intentionally schedule most active treatment appointments every 3–4 weeks, allowing us to make smaller, more precise adjustments while maintaining consistent momentum throughout treatment. Seeing patients more regularly also allows us the opportunity to fix any broken brackets that might have gone unattended, further helping to continue orthodontic progress and avoid any unnecessary delays.",
      },
      {
        p: "While longer appointment intervals may be appropriate in certain situations, our philosophy is that more frequent monitoring provides more opportunities to optimize treatment mechanics and keep patients progressing efficiently toward their goals. Rather than allowing six, seven, or even eight weeks to pass before the next evaluation, we prefer to remain actively engaged in each patient's progress. This proactive approach is one of the many ways we strive to deliver treatment that is not only highly precise, but often significantly more efficient, resulting in shorter overall treatment times, fewer unexpected delays, and exceptional long-term outcomes.",
      },
      {
        figure: "appointment-intervals.jpg",
        alt: "More frequent visits, faster results. A typical practice sees patients every 6 to 8 weeks, about 6 to 7 visits per year, with typical completion at 24 or more months. Surbeck Orthodontics sees patients every 3 to 4 weeks, about 13 to 15 visits per year, with typical completion at 14 to 16 months, an average of 30 to 40 percent faster treatment time. More frequent visits give twice as many opportunities to monitor tooth movement, adjust biomechanics, catch problems early, and reinforce compliance.",
        caption: "Why appointment intervals matter: consistent monitoring, consistent progress, better results.",
      },
    ],
  },

  {
    slug: "braces-care",
    title: "Braces Care & Foods to Avoid",
    blurb: "Keeping your appliance and your teeth healthy during treatment.",
    body: [],
  },

  {
    slug: "emergencies",
    title: "Broken Brackets & Emergencies",
    blurb: "What to do for a loose bracket or poking wire, and why breakage matters.",
    body: [
      {
        p: "Orthodontic treatment works best when every part of your braces is functioning exactly as intended. While the occasional broken bracket or poking wire is a normal part of treatment, keeping your appliances intact is one of the most important ways you can help us achieve an exceptional result on time.",
      },
      { h: "Broken Brackets Happen" },
      {
        p: "Braces are remarkably strong, but they are not indestructible. Occasionally, a bracket may come loose despite everyone's best efforts. This is especially common during the first few weeks after braces are placed, while patients are adjusting to eating and caring for their new appliances. That's perfectly normal, and we're always happy to help.",
      },
      {
        p: "Repeated bracket breakage, however, can significantly affect treatment. When a bracket comes off a tooth, that tooth often stops moving as planned. In some cases, Dr. Surbeck must temporarily step back to a lighter orthodontic wire in order to regain alignment before treatment can progress. While this is an important part of protecting your smile, it also means valuable treatment time has been lost. Simply put, broken brackets are one of the most common reasons orthodontic treatment takes longer than originally estimated.",
      },
      {
        figure: "braces-care.jpg",
        size: "narrow",
        alt: "Caring for your braces. Green light foods, enjoy these: yogurt, smoothies, scrambled eggs, pasta, soup, mashed potatoes, rice, oatmeal, macaroni and cheese, soft fruits such as bananas, berries and melon, and cottage cheese. Proceed with caution, enjoy carefully by not biting directly into them: apples sliced into small pieces, corn cut off the cob, French bread torn into small pieces, sandwiches and burgers cut into smaller pieces, carrots cut into small pieces, and pears sliced into small pieces. When in doubt, cut it up, chew with your back teeth, and take your time. Please avoid, these can damage braces. Hard foods: ice, hard candy, nuts, popcorn including kernels, corn nuts, beef jerky, hard pretzels, whole apples, whole carrots, and crusty artisan breads. Sticky and chewy foods: caramel, taffy, Starburst, Skittles, gummy candies, licorice, fruit snacks, bubble gum, and chewing gum. Best ways to care for your braces: brush thoroughly after every meal whenever possible, angling your toothbrush above and below each bracket; floss daily using floss threaders or a water flosser; keep dental appointments and continue seeing your general dentist every six months for routine cleanings and examinations; protect your braces by wearing a mouthguard during sports and never chewing on pens, pencils, fingernails or other objects; and if a bracket comes loose, a wire is poking, or something feels broken, contact our office.",
        caption:
          "Excellent oral hygiene, careful food choices, and keeping your appointments are the keys to a smooth, successful orthodontic journey.",
      },
      {
        note: "This graphic's footer shows an Okemos, Michigan address and a 517 phone number. It needs to be corrected to the Bellevue office before this page is published.",
      },
      { h: "What Should I Do If a Bracket Breaks?" },
      {
        p: "If you notice a loose bracket, broken appliance, or poking wire, please contact our office as soon as possible. Whenever possible, we'll schedule a brief emergency visit to repair the appliance promptly. Emergency appointments are typically scheduled around our regularly planned patient care, often during the middle of the day (before and after our lunch hour), allowing us to address emergencies without delaying other patients' appointments.",
      },
      { h: "Preventing Breakage" },
      {
        p: "The best way to avoid treatment delays is to protect your braces throughout treatment. Patients who avoid hard, crunchy, and sticky foods, maintain excellent oral hygiene, attend scheduled appointments, and follow our recommendations closely are far more likely to complete treatment within the anticipated timeframe. When eating, we recommend breaking your food into smaller, manageable bites and focusing on chewing with your back molars. Our tongue and cheeks typically do an excellent job of guiding food to the appropriate areas of our teeth. However, when we take large bites, it can be difficult for these muscles to handle the excess food, which increases the risk of broken brackets. By keeping food towards the back molars and chewing in smaller portions, you can help avoid unnecessary pressure on your braces.",
      },
      {
        p: "To better understand this concept, imagine trying to open a stubborn pickle jar. No matter how many times you try, the jar won't budge. However, as soon as you hand it to someone else, they easily open it without issue. In a similar manner, when you eat something that isn't ideal for your braces, such as Starburst, Tootsie Rolls, Skittles, Laffy Taffy, or anything requiring a tearing or ripping motion like pizza crust, beef jerky, Subway sandwiches, bagels, or biting into whole fruits and vegetables, you might not experience a broken bracket immediately. But after eating something within the normal range of acceptable foods, you might find that a bracket has fallen off. This occurs because your braces can only withstand a certain amount of pressure before they break.",
      },
      {
        p: "To prevent damage, it's crucial to avoid using your teeth for tasks they were not designed for, such as chewing on pen caps, opening packages, or chewing on ice. These activities can easily lead to broken brackets, which can delay your treatment and require repairs.",
      },
      {
        p: "Orthodontic treatment is a partnership. We are committed to providing precise treatment planning and attentive care, while our patients play an equally important role in protecting the appliances that make treatment possible.",
      },
      { h: "Our Broken Bracket Policy" },
      {
        p: "We understand there is a learning curve with braces, which is why we don't expect perfection. During the first three weeks after braces are placed, any broken brackets are repaired at no charge while patients become accustomed to their new appliances. Following this adjustment period, we also provide three additional complimentary bracket repairs. Beginning with the fourth broken bracket, a $25 repair fee is assessed. Each additional broken bracket thereafter incurs a $50 repair fee.",
      },
      {
        p: "This policy is not intended to be punitive. Rather, it reflects the very real impact repeated bracket breakage has on treatment efficiency, scheduling, and overall treatment success. Our hope is simply to encourage patients to protect their braces, minimize unnecessary treatment delays, and help everyone achieve the healthiest, most efficient orthodontic outcome possible.",
      },
      { h: "We're Here to Help" },
      {
        p: "Orthodontic emergencies happen, and when they do, we're here for you. If something doesn't feel right, whether it's a loose bracket, a poking wire, or another concern, please don't wait until your next scheduled visit. Contact our office, and we'll help determine the best next step to keep your treatment comfortable, efficient, and moving forward.",
      },
    ],
  },

  {
    slug: "retainers",
    title: "Retainers & Retention",
    blurb: "Keeping your new smile stable for life.",
    body: [
      { h: "Retention Means Protecting Your Investment for a Lifetime" },
      {
        p: "Congratulations! Completing active orthodontic treatment is an exciting milestone, but it is not the end of your orthodontic journey. The position of your teeth is maintained through retention, the final and lifelong phase of treatment. Without proper retainer wear, even beautifully aligned teeth can gradually shift over time.",
      },
      {
        p: "Teeth naturally have a tendency to move throughout life. The bone and surrounding tissues continue to remodel long after braces are removed, making the months immediately following treatment especially important. Consistent retainer wear allows these tissues to stabilize while protecting the beautiful smile you've worked so hard to achieve. At Surbeck Orthodontics, we believe that long-term success depends just as much on excellent retention as it does on excellent treatment planning.",
      },
      { h: "Our Retention Protocol" },
      {
        p: "Unlike many orthodontic practices that conclude care shortly after braces are removed, we continue to monitor your teeth and their alignment for two years following treatment. During this time, we gradually reduce the frequency of your visits as your smile becomes more stable.",
      },
      { p: "Your retention appointments are typically scheduled:" },
      {
        ul: [
          "1 month after braces are removed",
          "3 months after braces are removed",
          "6 months after braces are removed",
          "12 months after braces are removed",
          "24 months after braces are removed",
        ],
      },
      {
        p: "These appointments allow Dr. Surbeck to evaluate your bite, assess the fit and condition of your retainers, monitor for any unwanted tooth movement, and address small concerns before they become larger problems.",
      },
      { h: "Your Retainers" },
      {
        p: "Your retainers are one of the most important investments you can make in preserving your orthodontic results. If your retainer becomes lost, damaged, or no longer fits properly, please contact our office as soon as possible. Teeth can begin to shift surprisingly quickly, and delaying replacement often makes it more difficult to maintain your results. Replacement retainers are $250 per arch. As a courtesy, we offer 50% off your first replacement retainer, should one become necessary; future retainer replacements will be provided at full cost.",
      },
      {
        p: "We typically take impressions to make retainers, and will do so at the end of a patient's treatment. The impressions create a cast of the patient's teeth and the cast is then used to mold the new retainer. The cast is only accurate for one retainer, so if a retainer replacement is needed, another impression will need to be taken.",
      },
      {
        p: "Patients may be eligible for a digital scan of their teeth. Digital scans may be offered to patients who have been out of orthodontic treatment for at least 6 months. The scan fee is $10 and allows us to keep a digital impression of you or your child's teeth, so that if a retainer replacement is needed, an impression appointment isn't needed.",
      },
      {
        p: "If you elect to have a digital scan on file at our office, we want to caution you that the digital scan of your teeth is representative of your teeth as they are the day of the scan. Thus, if a retainer is lost or broken, we implore you to notify our office immediately so that we can send the scans to our nearby lab, so they can manufacture a new retainer for you, using a 3D printer. If you wait to report a lost or broken retainer, your teeth may shift (teeth move faster than you may think!) and the replacement retainer may not fit.",
      },
      { h: "What Is a Reset Retainer?" },
      {
        p: "Occasionally, if a retainer has not been worn consistently and only minor tooth movement or shifting has occurred, Dr. Surbeck may recommend a reset retainer. A reset retainer is specially fabricated to gently guide teeth back toward their intended position before significant relapse develops. Not every patient is a candidate, and success depends on the amount of movement that has occurred and the frequency of wear with the reset retainer. Early intervention provides the greatest opportunity to avoid additional retreatment. Reset retainers are $300 each.",
      },
      { h: "Our Best Advice" },
      {
        ul: [
          "Wear your retainers exactly as instructed. The first 6 months following your orthodontic treatment, Dr. Surbeck will ask that you aim to wear your retainer 20–22 hours per day. This allows the bone to fill in around the newly positioned root of the tooth. These early days of retention can help to create an even more stable environment for your teeth, further leading to a successful lifetime of orthodontic retention.",
          "Store them safely whenever they are not in your mouth: “in the case, or in your face.”",
          "Keep them away from pets, heat, and napkins during meals. Always have your retainer case available and labeled with your name. We will provide you with a labeled retainer case at the end of your treatment. Additional retainer cases can easily be purchased from places like Amazon.",
          "Notify our office immediately if a retainer is lost, broken, or no longer fits comfortably.",
          "Attend all scheduled retention appointments.",
        ],
      },
    ],
  },

  {
    slug: "clear-vs-metal",
    title: "Clear vs. Metal Brackets",
    blurb: "The options, what each costs, and how they compare.",
    body: [
      {
        note: "Open question from the draft: do we want to advertise this at all, and will offering clear brackets on only the upper six teeth steer patients away? This page is live and linked; delete this article's body to pull it back to “Coming soon.”",
      },
      {
        p: "At Surbeck Orthodontics, our standard appliance of choice is a high-quality stainless steel bracket. Metal brackets are exceptionally strong, durable, and efficient, making them our preferred option for achieving predictable, outstanding orthodontic results.",
      },
      {
        p: "For patients seeking a more discreet appearance, we also offer ceramic (“clear”) brackets on the upper six front teeth for an additional fee of $477. Because these teeth are the most visible when smiling and speaking, ceramic brackets provide a subtle aesthetic enhancement while maintaining the strength and efficiency of metal brackets throughout the remainder of the smile.",
      },
      {
        p: "While ceramic brackets offer an attractive cosmetic alternative, they are not without trade-offs. Ceramic brackets are inherently more brittle than stainless steel and may be more susceptible to chipping or fracturing under heavy biting forces. Additionally, because of the material's physical properties, they may not provide the same degree of treatment efficiency in certain clinical situations. For these reasons, Dr. Surbeck generally recommends limiting ceramic brackets to the upper front teeth and does not routinely place them on the lower teeth, where biting forces are significantly greater and the risk of bracket damage is higher.",
      },
      {
        p: "Ultimately, both metal and ceramic braces are excellent treatment options. The decision comes down to balancing aesthetics with durability and treatment efficiency. During your consultation, Dr. Surbeck will discuss whether ceramic brackets are an appropriate choice for your individual treatment goals and lifestyle.",
      },
    ],
  },

  {
    slug: "adult-teen",
    title: "Adult Orthodontics",
    blurb: "It's never too late to invest in your smile.",
    body: [
      { lead: "It's never too late to invest in your smile." },
      {
        p: "Many adults assume orthodontic treatment is something reserved for children and teenagers, or perhaps something they “missed their chance” to do years ago. The truth is, some of our favorite patients are adults, and caring for them has become one of the defining aspects of our practice. Whether you're considering orthodontic treatment for the very first time, revisiting treatment after relapse, preparing for restorative dentistry or dental implants, or simply ready to invest in yourself, you'll find that Surbeck Orthodontics was built with patients like you in mind.",
      },
      {
        p: "We recognize that adult patients often have different priorities than younger patients. You have careers, families, busy schedules, and a clear understanding of the investment you're making in your oral health. That's why we've intentionally created an orthodontic experience that feels personal, thoughtful, and remarkably unhurried. As a private, single-doctor practice, every appointment is led by Dr. Surbeck himself. He doesn't simply stop by your chair to review your progress before moving on to the next patient. Instead, he remains actively involved throughout each visit, taking the time to explain what he's seeing, answer questions, listen to your concerns, and ensure you're comfortable with every stage of treatment. We believe the best orthodontic care is built on trust, communication, and partnership, and not hurried appointments or assembly-line dentistry.",
      },
      { h: "Specialized Care for Adult Smiles" },
      {
        p: "Adult orthodontics often involves considerations that simply don't exist in younger patients. Previous dental work, crowns, implants, missing teeth, gum health, bite changes, and coordination with your general dentist or other dental specialists frequently require a more comprehensive treatment approach. These interdisciplinary cases are an area of particular interest and expertise for Dr. Surbeck, and thoughtful planning is at the heart of every recommendation we make. Rather than applying a one-size-fits-all solution, every treatment plan is carefully designed around your individual goals, your oral health, and your long-term stability.",
      },
      {
        p: "We understand that most adults aren't eager to spend years in orthodontic treatment. Our practice is intentionally designed to make treatment as efficient as clinically possible. Through meticulous treatment planning, precise bracket placement, and appointment intervals every three to four weeks, we are often able to complete treatment more quickly than practices that schedule visits six to eight weeks apart—all while maintaining exceptional attention to detail and long-term stability.",
      },
      {
        p: "Perhaps most importantly, you'll never feel like a passive participant in your own treatment. We believe your questions, observations, and goals matter. Every adjustment appointment is an opportunity for conversation, collaboration, and thoughtful clinical decision-making. Whether you're hoping to improve your smile, prepare for implants or restorative dentistry, correct long-standing bite concerns, or simply gain the confidence you've always wanted, we're honored to be part of that journey.",
      },
    ],
  },

  {
    slug: "insurance-financial",
    title: "Insurance & Financial Options",
    blurb: "How coverage works, ways to pay, and when we talk about cost.",
    body: [
      {
        p: "We believe exceptional orthodontic care should be accompanied by exceptional transparency. Orthodontic treatment is an investment: not only in your smile, but in your long-term oral health, confidence, and quality of life. We understand that financial decisions are an important part of choosing an orthodontic provider, and our goal is to make that process as straightforward and stress-free as possible.",
      },
      {
        p: "At Surbeck Orthodontics, every conversation begins with your orthodontic needs, not your financial commitment. Your initial consultation is designed to help Dr. Surbeck understand your smile, discuss your goals, answer your questions, and determine whether orthodontic treatment is appropriate now or whether the best recommendation is simply to continue observing your growth and development. Once it becomes clear that treatment is approaching, whether you're ready to begin immediately or treatment is anticipated in the near future, we'll prepare a comprehensive financial estimate tailored specifically to your treatment plan. We believe financial discussions are most valuable when they occur at the right point in your orthodontic journey, allowing you to make informed decisions without ever feeling rushed or pressured.",
      },
      { h: "Flexible Payment Options" },
      {
        p: "Every family is different, which is why we offer several ways to pay for orthodontic treatment.",
      },
      {
        ul: [
          "Payment in full by check or cash: save 5%.",
          "Payment in full by debit, credit, HSA, or FSA card: save 3%.",
          "Interest-free monthly payments. Many families choose to spread the cost of treatment over time. Our in-house financing includes no interest, requires an initial down payment, and allows the remaining balance to be conveniently paid through automatic monthly payments. Monthly plans can also be combined with HSA or FSA funds when appropriate.",
        ],
      },
      {
        p: "Our goal is simple: provide financial flexibility so you can choose the payment option that works best for your family.",
      },
      { h: "Understanding Orthodontic Insurance" },
      {
        p: "Insurance can be confusing, but fortunately orthodontic insurance is often much more flexible than people realize. One of the most common questions we hear is, “Do you accept my insurance?” While Surbeck Orthodontics is not contracted with most insurance companies, that does not necessarily mean your orthodontic benefits cannot be used in our office.",
      },
      {
        p: "Unlike many medical insurance plans, orthodontic benefits are structured differently. In many cases, the orthodontic benefit available to you is the same whether you choose an in-network or out-of-network orthodontist. This means your choice of provider can often be based on who you trust to care for your smile and not simply on network participation. Because every insurance policy is unique, we always recommend verifying your specific orthodontic benefit before beginning treatment.",
      },
      {
        p: "As a courtesy, Steph is happy to review your insurance plan, verify your orthodontic benefits, and help you understand how they apply to treatment at Surbeck Orthodontics. While we can't determine what another orthodontic office may charge or how they process insurance, we can clearly explain the benefits available to you in our practice. Whether we're in-network with your plan or not, our team is happy to submit insurance claims on your behalf and provide the necessary documentation to help you maximize any orthodontic benefits available through your policy.",
      },
    ],
  },
];

export const findArticle = (slug) => ARTICLES.find((a) => a.slug === slug);
