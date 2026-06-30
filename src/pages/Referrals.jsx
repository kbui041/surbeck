import { useState } from "react";

export default function Referrals() {
  const [sentFriend, setSentFriend] = useState(false);
  const [sentDoctor, setSentDoctor] = useState(false);

  const submit = (setter) => (e) => {
    e.preventDefault();
    setter(true);
    e.target.reset();
    e.target
      .querySelector(".notice")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Thank You for Your Referral</h1>
          <p className="lead">
            We understand that the choice of an orthodontist is an important one, and we'd
            like to thank you for referring your friends, family, and patients to our
            practice. It's the highest compliment we can receive.
          </p>
        </div>
      </section>

      {/* FRIEND / FAMILY */}
      <section className="section ref-section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 26 }}>
            <h2>Refer a Friend or Family Member</h2>
          </div>
          <form className="form" onSubmit={submit(setSentFriend)}>
            <div className="grid-form">
              <div className="field">
                <label>Your name <span className="req">*</span></label>
                <input type="text" name="your_name" required />
              </div>
              <div className="field">
                <label>Your email <span className="req">*</span></label>
                <input type="email" name="your_email" required />
              </div>
              <div className="field">
                <label>Your friend's name <span className="req">*</span></label>
                <input type="text" name="friend_name" required />
              </div>
              <div className="field">
                <label>Your friend's phone</label>
                <input type="tel" name="friend_phone" />
              </div>
              <div className="field full">
                <label>Additional information</label>
                <textarea name="notes" placeholder="Anything you'd like us to know" />
              </div>
            </div>
            {sentFriend && (
              <div className="notice" style={{ marginTop: 18 }}>
                Thank you! Your referral has been sent to our team.
              </div>
            )}
            <div className="form-foot">
              <button type="submit" className="btn">Submit Referral</button>
              <p className="form-note">Fields marked <span className="req">*</span> are required.</p>
            </div>
          </form>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="section ref-section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 26 }}>
            <h2>Doctor Referral</h2>
          </div>
          <form className="form" onSubmit={submit(setSentDoctor)}>
            <div className="grid-form">
              <div className="field">
                <label>Referring doctor's name <span className="req">*</span></label>
                <input type="text" name="doctor_name" required />
              </div>
              <div className="field">
                <label>Office</label>
                <input type="text" name="office" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" name="doctor_email" />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" name="doctor_phone" />
              </div>
              <div className="field">
                <label>Patient's name <span className="req">*</span></label>
                <input type="text" name="patient_name" required />
              </div>
              <div className="field">
                <label>Radiographs sent?</label>
                <div className="radio-group">
                  <label><input type="radio" name="radiographs" value="yes" /> Yes</label>
                  <label><input type="radio" name="radiographs" value="no" /> No</label>
                </div>
              </div>
              <div className="field full">
                <label>Additional information</label>
                <textarea name="doctor_notes" placeholder="Anything you'd like us to know" />
              </div>
            </div>

            <p className="attest">
              The information that I have given above is correct to the best of my knowledge.
            </p>
            <div className="grid-form">
              <div className="field">
                <label>Submitted by <span className="req">*</span></label>
                <input type="text" name="submitted_by" required />
              </div>
              <div className="field">
                <label>Date <span className="req">*</span></label>
                <input type="date" name="submitted_date" required />
              </div>
            </div>

            {sentDoctor && (
              <div className="notice" style={{ marginTop: 18 }}>
                Thank you! Your referral has been received.
              </div>
            )}
            <div className="form-foot">
              <button type="submit" className="btn">Submit Referral</button>
              <p className="form-note">Fields marked <span className="req">*</span> are required.</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
