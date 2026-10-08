// Content for "Finding the Right Orthodontist for You"
// Structure follows Dr. Surbeck's brief: for each topic, questions a patient
// might ask themselves or a prospective provider ("ask"), followed by how
// that question applies specifically to Surbeck Orthodontics ("answer").

const RIGHT_FIT = [
  {
    id: "one-doctor",
    title: "Is a Single Orthodontist Right for You?",
    context:
      "Some orthodontic practices have one orthodontist. Others have several doctors who share responsibility for patients, and larger organizations may have doctors rotate between locations. Neither model is necessarily right for everyone.",
    ask: [
      "Do I want to see the same orthodontist throughout treatment?",
      "Is continuity important to me?",
      "Do I want the doctor who created my treatment plan to personally follow its progress?",
    ],
    answer: [
      "Dr. Surbeck is the only orthodontist at Surbeck Orthodontics. That means the doctor who evaluates you, studies your diagnostic records, develops your treatment plan, and explains his recommendations is also the doctor who follows your progress throughout treatment.",
      "There isn't a rotating group of orthodontists interpreting the treatment plan differently from appointment to appointment. One doctor knows your case. One doctor follows your progress. One doctor is ultimately responsible for your result.",
      "If continuity with the same orthodontist throughout treatment matters to you, a single-doctor practice may be a good fit.",
    ],
  },
  {
    id: "doctor-involvement",
    title: "Do You Want Your Orthodontist Closely Involved in Your Treatment?",
    context:
      "Orthodontic offices differ in how responsibilities are divided between doctors and clinical team members.",
    ask: [
      "Which procedures will my orthodontist personally perform?",
      "Which procedures may be delegated to clinical staff?",
      "Who makes decisions or performs irreversible procedures involving my teeth?",
    ],
    answer: [
      "Orthodontic treatment is delivered by a team, and our clinical assistants are an incredibly important part of ours. But we also believe there are decisions and procedures that belong with the orthodontist.",
      "Dr. Surbeck personally evaluates treatment progress and determines the clinical changes necessary to keep treatment moving toward the intended result. There are also certain procedures we intentionally do not delegate — for example, if a high-speed dental handpiece is required during treatment, Dr. Surbeck is the person who uses it.",
      "An excellent team supports your treatment. Your orthodontist directs it.",
    ],
  },
  {
    id: "treatment-planning",
    title: "Do You Want a Treatment Plan Designed Specifically for You?",
    context:
      "Straightening teeth is only one part of orthodontic treatment. A comprehensive orthodontic diagnosis may also consider how the upper and lower teeth fit together, jaw relationships, facial proportions, gum and bone health, existing dental work, missing teeth, future restorative needs, and the long-term stability of the result.",
    ask: [
      "Do I want a treatment plan designed specifically around my anatomy and long-term dental needs?",
      "Do I understand what the orthodontist is trying to accomplish beyond making my teeth look straight?",
      "Will my orthodontist explain why a particular treatment is being recommended?",
    ],
    answer: [
      "We don't believe orthodontic treatment should begin with simply choosing between braces and clear aligners. It begins with a diagnosis.",
      "Dr. Surbeck carefully evaluates the alignment of the teeth, the way the upper and lower teeth fit together, jaw relationships, facial proportions, available space, periodontal considerations, existing dental work, missing teeth, and other factors that may influence treatment. For complex adult patients, that planning may also involve communication with your general dentist, oral surgeon, periodontist, prosthodontist, or other dental specialists.",
      "The question isn't simply “How can we straighten these teeth?” It is “What needs to happen to create the best overall result for this particular patient?” Treatment recommendations follow that diagnosis, not the other way around.",
    ],
  },
  {
    id: "appointment-frequency",
    title: "Do You Want to Be Seen Frequently During Treatment?",
    context:
      "How often you see your orthodontist can vary considerably between practices. Convenience may make longer intervals between appointments appealing. More frequent visits, however, give the orthodontist additional opportunities to evaluate tooth movement, make adjustments, identify problems, and keep treatment progressing.",
    ask: [
      "How frequently will I normally be seen?",
      "Why does the practice use that appointment interval?",
      "Who will evaluate my progress at those visits?",
    ],
    answer: [
      "At Surbeck Orthodontics, active-treatment patients are typically seen approximately every three to four weeks, depending on their individual treatment needs. That's intentional.",
      "Teeth are moving. Bites are changing. Elastics may need adjustment. Wires may need modification. Sometimes teeth move exactly as expected, and sometimes biology has other plans. Regular appointments give Dr. Surbeck frequent opportunities to evaluate those changes and make adjustments when needed.",
      "Our goal isn't to schedule the fewest appointments possible. Our goal is to use each appointment purposefully so that treatment continues progressing efficiently toward the desired result. For patients who prefer fewer visits and much longer intervals between appointments, our approach may not be the best fit. For patients who value close monitoring and treatment efficiency, it may be.",
    ],
  },
  {
    id: "finished-result",
    title: "What Does a “Finished” Result Mean to You?",
    context:
      "For many patients, the most visible goal of orthodontics is beautifully straight teeth. We believe the details beyond appearance matter, too.",
    ask: [
      "How will my orthodontist determine when treatment is complete?",
      "Will the fit of my bite be evaluated as carefully as the appearance of my smile?",
      "Are small details in tooth position important to me?",
      "Am I looking for the quickest acceptable result, or the best result that can reasonably be achieved?",
    ],
    answer: [
      "Straight teeth are certainly part of a beautiful orthodontic result. But they're not the entire result.",
      "Dr. Surbeck also evaluates how the upper and lower teeth fit together, individual tooth positions, symmetry, dental midlines, overbite, overjet, contacts between the teeth, and other details that contribute to the function, appearance, and stability of the finished result. That attention to detail continues throughout treatment.",
      "We aren't simply working toward the day the braces can come off. We're working toward a result we're proud to finish.",
    ],
  },
  {
    id: "fast-vs-efficient",
    title: "Are You Looking for the Fastest Treatment or the Most Efficient Path to an Excellent Result?",
    context:
      "We care a great deal about treatment time. But fast and efficient aren't necessarily the same thing.",
    ask: [
      "Is this orthodontist promising a short treatment time because it's realistic, or because it sounds appealing?",
      "What happens to my timeline if something doesn't go as planned?",
    ],
    answer: [
      "Our goal isn't to promise an unusually short treatment time simply because it sounds appealing. Our goal is to develop a realistic treatment plan and then work diligently to keep treatment progressing.",
      "That means careful planning before treatment begins, regular appointments, attention to broken appliances, monitoring patient cooperation, and modifying treatment when something isn't progressing as expected.",
      "Sometimes the shortest path to an excellent result requires more attention, not less. Efficiency isn't about rushing treatment. It's about making the time spent in treatment count.",
    ],
  },
  {
    id: "braces-vs-aligners",
    title: "Do You Want an Honest Recommendation About Braces vs. Clear Aligners?",
    context:
      "Braces and clear aligners are both valuable orthodontic tools, but they are not necessarily interchangeable. Different appliances provide different levels of control depending on the movements required.",
    ask: [
      "Do I want my treatment recommendation based primarily on convenience, or on which approach gives my orthodontist the best opportunity to achieve the desired result?",
      "If I prefer clear aligners, will my orthodontist tell me honestly if braces would produce a more predictable or efficient result?",
    ],
    answer: [
      "We offer both. But we don't believe they are interchangeable.",
      "Clear aligners can be an excellent treatment option for the right patient and the right orthodontic problem. They also depend heavily on patient compliance and may provide less predictable control for certain tooth movements. Braces give the orthodontist a different level of mechanical control and, in some cases, may allow treatment to progress more efficiently or predictably.",
      "Our recommendation is based on the treatment objective and not on which appliance is easiest to market. If clear aligners are an excellent option for you, we'll tell you. If Dr. Surbeck believes braces will provide greater control, better efficiency, or a more predictable result, we'll tell you that too.",
    ],
    link: { to: "/braces-vs-invisalign", label: "Compare Braces & Clear Aligners" },
  },
  {
    id: "complex-cases",
    title: "Does Experience With Complex Treatment Matter to You?",
    context:
      "Not every orthodontic case is straightforward. Some patients require coordination with a general dentist, oral surgeon, periodontist, prosthodontist, endodontist, or other dental specialist.",
    ask: [
      "Does this orthodontist routinely manage cases like mine?",
      "Will my orthodontist communicate directly with my other dental providers?",
      "Is there a coordinated plan for what happens before, during, and after orthodontic treatment?",
    ],
    answer: [
      "Interdisciplinary treatment is an important part of our practice. Dr. Surbeck communicates with dentists and dental specialists to help determine treatment sequence, tooth positioning, space requirements, restorative objectives, and other considerations before and during orthodontic treatment.",
      "When several excellent clinicians are involved in your care, we believe they should be working toward one coordinated plan.",
    ],
    link: { to: "/complex-cases", label: "Learn About Complex Case Treatment" },
  },
  {
    id: "actual-results",
    title: "Would You Like to See the Kind of Work Your Orthodontist Produces?",
    context:
      "Beautiful marketing photographs can tell you what a practice looks like. Actual patient results tell you something about how the orthodontist practices.",
    ask: [
      "Can I see before-and-after examples of patients with problems similar to mine?",
      "Does the practice share how long those cases took to complete?",
      "Can the orthodontist explain what made the case challenging and how it was treated?",
    ],
    answer: [
      "We think you should be able to see examples of the work we are proud to produce. Before-and-after photographs can help you understand not only what orthodontic treatment can accomplish, but also the type and complexity of cases an orthodontist routinely treats.",
      "We are proud to share examples of our actual patients and, when appropriate, the amount of time their treatment required.",
    ],
    link: { to: "/gallery", label: "Explore Our Before & After Results" },
  },
  {
    id: "retention",
    title: "Do You Care What Happens After Treatment?",
    context:
      "Orthodontic treatment doesn't truly end the day braces come off. Retainers and long-term follow-up help protect the result.",
    ask: [
      "What type of retainers will I receive?",
      "Does the orthodontist use bonded retainers when appropriate?",
      "How will my result be monitored after active treatment ends?",
      "What happens if my teeth begin to move?",
    ],
    answer: [
      "We do, too. Removing braces or finishing the last aligner isn't the end of orthodontic care. Teeth have a natural tendency to move throughout life, which makes retention an important part of protecting an orthodontic result.",
      "We recommend retention based on the individual patient and may use removable retainers, bonded retainers, or a combination when appropriate. We also provide scheduled retention checks following active treatment so that we can continue monitoring the result.",
      "We put a great deal of work into creating your smile. We want to help you protect it.",
    ],
    link: { to: "/patient-education/retainers", label: "More About Retention" },
  },
  {
    id: "cost",
    title: "Are You Looking for the Lowest-Cost Orthodontic Treatment?",
    context:
      "If price is the single most important factor in choosing an orthodontist, we may not always be the least expensive option. And we think it's important to be transparent about that.",
    ask: [
      "Am I evaluating orthodontists by price alone, or by the diagnosis, care, and result as a whole?",
      "What am I actually getting for what I'm paying — how much doctor time, planning, and monitoring?",
    ],
    answer: [
      "Our practice model prioritizes doctor involvement, detailed treatment planning, frequent appointments, individualized care, and a relatively low patient volume. Those things require time.",
      "Rather than trying to provide orthodontic treatment to the greatest number of patients possible, we have intentionally chosen to care for fewer patients so that we can devote more attention to each one.",
      "We believe the value of orthodontic treatment should be considered not only by its price, but by the quality of the diagnosis, the care delivered throughout treatment, and the result achieved at the end.",
    ],
  },
  {
    id: "understanding-recommendation",
    title: "Do You Want to Understand Why Your Orthodontist Is Recommending Treatment?",
    context:
      "We want you to understand your treatment — what Dr. Surbeck sees, what he recommends, what alternatives may exist, and why he believes a particular approach is appropriate.",
    ask: [
      "Will my orthodontist explain the reasoning behind a recommendation, not just the recommendation itself?",
      "Will I be told if orthodontics alone can't accomplish everything I'm hoping for?",
    ],
    answer: [
      "Sometimes that means recommending treatment. Sometimes it means recommending that we wait. Sometimes it means explaining that a patient's goals may require collaboration with another dental specialist, or that orthodontics alone may not accomplish everything the patient hopes to achieve.",
      "Our responsibility isn't simply to start treatment. It's to give you our best professional recommendation and help you make an informed decision about your care.",
    ],
  },
];

export default RIGHT_FIT;
