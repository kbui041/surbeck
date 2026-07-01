import BeforeAfter from "../components/BeforeAfter.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { asset } from "../lib/asset.js";

export default function WhySurbeck() {
  return (
    <>
      <section className="page-intro">
        <div className="wrap intro-split">
          <div>
            <h1>Why Surbeck Orthodontics</h1>
            <p className="lead">
              Orthodontics is a recognized dental specialty. Choosing a specialist, and a
              practice built around precision and attention, has a direct effect on your
              results, your time, and your experience.
            </p>
          </div>
          <img className="intro-logo" src={asset("logo-mark.png")} alt="Surbeck Orthodontics" />
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>Orthodontics is a Specialty</h2>
          <p>
            After dental school, an orthodontist completes two to three additional years of
            full-time, accredited residency dedicated solely to the diagnosis and treatment of
            misaligned teeth and jaws. That training is the foundation for the precision and
            predictability you should expect from specialist care.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <h2 style={{ marginBottom: 36 }}>What Sets Specialist Care Apart</h2>
          <div className="grid cols-3">
            <div className="feature">
              <h3>One Doctor, Start to Finish</h3>
              <p>Dr. Surbeck personally plans and oversees your treatment from consultation to retention.</p>
            </div>
            <div className="feature">
              <h3>Lower Volume, Higher Attention</h3>
              <p>A deliberately measured schedule means more focused time at every appointment.</p>
            </div>
            <div className="feature">
              <h3>Precision Treatment Planning</h3>
              <p>Detailed diagnostics and planning before the first bracket is ever placed.</p>
            </div>
            <div className="feature">
              <h3>Shorter Appointment Intervals</h3>
              <p>Efficient scheduling that keeps treatment moving and minimizes total time in braces.</p>
            </div>
            <div className="feature">
              <h3>Interdisciplinary Planning</h3>
              <p>Coordinated care with your dentist and other specialists when your case calls for it.</p>
            </div>
            <div className="feature">
              <h3>Long-Term Stability</h3>
              <p>Treatment planned for results that hold, not just teeth that look straight on day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>One Doctor, Start to Finish</h2>
          <p>
            At Surbeck Orthodontics, your treatment is guided by one orthodontist from your
            initial consultation through your final retainer check. Every treatment plan,
            adjustment, and clinical decision is made by Dr. Surbeck, who has firsthand
            knowledge of your smile, your treatment goals, and your progress.
          </p>
          <p>
            When care is shared among multiple doctors or providers, treatment can become less
            consistent. Differences in clinical philosophy, communication, or treatment
            priorities may lead to unnecessary refinements, longer treatment times, or
            uncertainty about the next step.
          </p>
          <p>
            Our approach is intentionally different. With one doctor overseeing your care from
            start to finish, every appointment builds upon the last. Dr. Surbeck recognizes
            subtle changes in tooth movement, anticipates challenges before they become
            problems, and continually refines your treatment based on your individual
            response. This continuity allows for thoughtful, efficient decision-making and
            helps keep treatment progressing as planned.
          </p>
          <p><strong>One doctor. One vision. One consistent standard of care.</strong></p>
          <p>
            For our patients, that means greater confidence, clearer communication, and a
            treatment experience built on precision from beginning to end.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>Lower Volume, High Attention</h2>
          <p>
            At Surbeck Orthodontics, we intentionally maintain a thoughtfully paced schedule so
            that every patient receives the time, focus, and attention their treatment
            deserves. We believe exceptional orthodontic care cannot be rushed.
          </p>
          <p>
            Rather than scheduling as many patients as possible each day, we deliberately limit
            our daily patient volume. This allows Dr. Surbeck and our team to remain fully
            present during every appointment, carefully evaluating your progress, answering
            your questions, and making thoughtful treatment decisions without feeling
            pressured by the clock.
          </p>
          <p>
            Orthodontics is more than changing wires or delivering aligners. Each visit is an
            opportunity to assess how your teeth are responding, identify subtle changes,
            anticipate future movement, and make precise adjustments that keep treatment
            progressing efficiently. Those decisions require time, concentration, and
            experience.
          </p>
          <p>
            By investing more attention at every visit, we are often able to avoid unnecessary
            delays, reduce the need for refinements, and keep treatment moving toward a
            healthy, beautiful result as efficiently as possible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>Precision Treatment Planning</h2>
          <p>
            Exceptional orthodontic treatment begins long before the first bracket is placed or
            the first aligner is worn. At Surbeck Orthodontics, we believe that careful
            planning is one of the most important predictors of an efficient, successful
            outcome.
          </p>
          <p>
            Every patient undergoes a comprehensive diagnostic evaluation that allows Dr.
            Surbeck to fully understand not only how the teeth fit together today, but how
            they should function and align years from now. Photographs, digital records,
            radiographs, facial analysis, bite evaluation, and tooth position are all carefully
            considered before treatment recommendations are made.
          </p>
          <p>
            Rather than taking a "we'll adjust as we go" approach, Dr. Surbeck develops a
            thoughtful, individualized treatment strategy before active treatment ever begins.
            By anticipating challenges early and planning each stage of treatment with
            precision, we can often minimize unnecessary tooth movement, reduce treatment time,
            and create more predictable, stable results.
          </p>
          <p><strong>Every smile is different. Your treatment plan should be, too.</strong></p>
          <p>
            The result is a treatment experience that is purposeful rather than reactive, with
            every appointment building upon a carefully designed roadmap toward a healthy,
            functional, and beautiful smile.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: 880}}>
          <h2>Shorter Appointment Intervals</h2>
          <p>
            The timing between orthodontic appointments matters. At Surbeck Orthodontics, we
            typically schedule patients every three to four weeks because we believe consistent
            monitoring and timely adjustments help treatment progress more efficiently.
          </p>
          <p>
            Tooth movement is a dynamic biological process. By seeing patients at shorter,
            carefully planned intervals, Dr. Surbeck is able to make smaller, more precise
            adjustments, monitor your response to treatment, and address minor issues before
            they become larger setbacks. This helps maintain treatment momentum while keeping
            every stage of care intentional and controlled.
          </p>
          <p>
            Longer intervals between appointments can allow opportunities for progress to be
            missed. A loose bracket, an aligner that isn't fitting properly, or teeth that are
            responding differently than expected may go unnoticed for weeks, potentially
            extending overall treatment time. More frequent visits allow us to identify these
            changes earlier and keep your treatment moving forward.
          </p>
          <p>
            Our goal is never simply to finish treatment quickly. Our goal is to achieve an
            exceptional result in the most efficient timeframe possible, without compromising
            precision or long-term stability.
          </p>
          <p>
            We believe that shorter appointment intervals, combined with detailed treatment
            planning, one-doctor continuity, and individualized care, are among the reasons
            many of our patients complete treatment sooner than they might in a more
            traditional orthodontic model.
          </p>
          <p><strong>Because efficiency isn't about rushing treatment. It's about eliminating unnecessary delays.</strong></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>Interdisciplinary Planning</h2>
          <p>
            Some orthodontic cases require more than straight teeth. They require careful
            coordination between multiple dental professionals, each contributing their
            expertise to achieve the healthiest and most predictable long-term outcome.
          </p>
          <p>
            At Surbeck Orthodontics, we work closely with your general dentist and, when
            appropriate, other specialists such as periodontists, oral surgeons,
            prosthodontists, pediatric dentists, and implant specialists. By collaborating
            throughout treatment, we help ensure that every aspect of your care is working
            toward the same final result.
          </p>
          <p>
            Whether your treatment involves creating space for a dental implant, preparing your
            bite for restorative dentistry, coordinating jaw surgery, managing periodontal
            concerns, or improving the long-term function of your teeth, orthodontics often
            serves as one piece of a much larger treatment plan. Careful communication between
            providers helps ensure that each step is completed in the proper sequence and with
            a shared understanding of the desired outcome.
          </p>
          <p>
            Dr. Surbeck believes that excellent orthodontic treatment extends beyond tooth
            alignment alone. By planning with the end result in mind and collaborating closely
            with your dental team, we are able to create smiles that are not only beautiful,
            but healthy, functional, and designed to support a lifetime of oral health.
          </p>
          <p><strong>Because the best outcomes are rarely achieved by one provider working alone. They are achieved by experienced professionals working together with a shared vision.</strong></p>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <h2>Long-Term Stability</h2>
          <p>
            A beautiful smile is only successful if it remains healthy, functional, and stable
            long after treatment is complete. At Surbeck Orthodontics, we believe the true
            measure of orthodontic success is not how your teeth look on the day your braces
            come off, but how well your results stand the test of time.
          </p>
          <p>
            Every treatment plan is developed with the long-term position of your teeth, bite,
            and overall oral health in mind. Rather than focusing solely on achieving a
            pleasing cosmetic result, Dr. Surbeck carefully considers how your teeth will
            function together, how your bite will support long-term stability, and how your
            treatment will integrate with any future dental care you may need.
          </p>
          <p>
            This thoughtful approach influences every stage of treatment, from the initial
            diagnosis and treatment planning to the final detailing before braces are removed.
            Small adjustments made throughout treatment can have a meaningful impact on the
            longevity of your results.
          </p>
          <p>
            Of course, long-term success is also a partnership. Wearing your retainers as
            directed and maintaining regular dental care are essential to preserving the smile
            you've worked so hard to achieve. Our team remains committed to supporting you long
            after active treatment has ended, providing guidance and follow-up care to help
            protect your investment.
          </p>
          <p>
            Our goal is not simply to create straight teeth. Our goal is to create a healthy
            bite, a confident smile, and results that continue to serve you for years to come.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 36 }}>Results That Speak for Themselves</h2>
          <BeforeAfter />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
