import { asset } from "../lib/asset.js";

export default function About() {
  return (
    <section className="section">
      <div className="wrap about">
        <header className="about-head">
          <img className="headshot" src={asset("dr-surbeck.png")} alt="Dr. Burleigh T. Surbeck" />
          <div>
            <h1>Burleigh T. Surbeck, D.D.S. M.S.D.</h1>
            <p className="about-role">Orthodontist &middot; Bellevue, Washington</p>
          </div>
        </header>

        <div className="about-body">
          <p className="lead">
            Dr. Surbeck, a Tacoma native, grew up in a dental environment; his father
            practiced general dentistry in Federal Way for over 35 years. This experience
            allowed him to see the fulfillment that comes from serving people and providing
            excellent dental care.
          </p>

          <p>
            Early on, Dr. Surbeck attended the Charles Wright Academy. After this excellent
            primary education, he began his journey at Claremont McKenna College and
            transferred to the University of Washington. During his ten years at UW, he
            received his Bachelor of Arts degree in Business Administration, a Bachelor of
            Science degree in zoology, a Doctorate in Dental Surgery with honors, and a
            Master of Science degree in Orthodontics. He has continued his involvement with
            the University of Washington, serving as a faculty member in the School of
            Dentistry and on the board of directors for both the UW Orthodontic Alumni
            Association and UW Dental School Alumni Association. Dr. Surbeck is also a member
            of many other leading dental and orthodontic organizations, including: American
            Association of Orthodontists, Pacific Coast Society of Orthodontists, and
            Washington State Dental Association.
          </p>

          <p>
            Dr. Surbeck's dedication to excellence in orthodontics and service helped him
            receive recognition in Seattle Met, being voted by his peers in the dental
            community as a Top Orthodontist in the area for each year since 2009. That's 16
            consecutive years and counting.
          </p>

          <p>
            Dr. Surbeck, his wife Katie (a Bellevue native), their daughters Claire and
            Caroline, and their son Will reside in Bellevue. When not practicing orthodontics,
            Dr. Surbeck enjoys outdoor adventures throughout Washington and spending time with
            his family in the back yard. He also avidly enjoys saltwater fishing for salmon
            and halibut, a good weekend DIY project, vegetable gardening, and cheering on the
            Huskies.
          </p>

          <blockquote className="pullquote">
            &ldquo;The most awesome orthodontist with a personal approach.&rdquo;
            <span className="byline">Lisa H., Client</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
