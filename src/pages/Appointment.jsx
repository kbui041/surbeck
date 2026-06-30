import { useState } from "react";

const STATES = [
  "Washington", "Oregon", "Idaho", "California", "Alaska", "Arizona", "Nevada",
  "Montana", "Utah", "Other",
];

const HEARD = [
  "Friend or family", "Dentist referral", "Google / online search",
  "Social media", "Drove by the office", "Insurance provider", "Other",
];

export default function Appointment() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>Request an Appointment</h1>
          <p className="lead">
            Thank you for your interest in our services. Please fill out the information
            below, and one of our team members will contact you to schedule an appointment
            time. We look forward to seeing you soon.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <form className="form" onSubmit={submit}>
            <div className="grid-form">
              <div className="field">
                <label>Patient full name <span className="req">*</span></label>
                <input type="text" name="patient_name" required />
              </div>
              <div className="field">
                <label>Responsible party full name <span className="req">*</span></label>
                <input type="text" name="responsible_party" required />
              </div>
            </div>

            <div className="grid-form" style={{ marginTop: 16 }}>
              <div className="field">
                <label>New patient?</label>
                <div className="radio-group">
                  <label><input type="radio" name="new_patient" value="yes" /> Yes</label>
                  <label><input type="radio" name="new_patient" value="no" /> No</label>
                </div>
              </div>
              <div className="field">
                <label>Patient age group</label>
                <div className="radio-group">
                  <label><input type="radio" name="age_group" value="child" /> Child</label>
                  <label><input type="radio" name="age_group" value="adult" /> Adult</label>
                </div>
              </div>
            </div>

            <div className="grid-form" style={{ marginTop: 16 }}>
              <div className="field full">
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" required />
              </div>
              <div className="field full">
                <label>Home address</label>
                <input type="text" name="address" />
              </div>
              <div className="field">
                <label>City</label>
                <input type="text" name="city" />
              </div>
              <div className="field">
                <label>State</label>
                <select name="state" defaultValue="Washington">
                  {STATES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="field">
                <label>Zip</label>
                <input type="text" name="zip" inputMode="numeric" />
              </div>
              <div className="field">
                <label>Phone number</label>
                <input type="tel" name="phone" />
              </div>
              <div className="field">
                <label>Preferred days</label>
                <input type="text" name="preferred_days" placeholder="e.g. Mon, Weds" />
              </div>
              <div className="field">
                <label>Convenient times</label>
                <input type="text" name="convenient_times" placeholder="e.g. Mornings" />
              </div>
              <div className="field full">
                <label>How did you hear about our practice?</label>
                <select name="heard_about" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  {HEARD.map((h) => <option key={h}>{h}</option>)}
                </select>
              </div>
              <div className="field full">
                <label>Name and address of general dentist</label>
                <textarea name="general_dentist" />
              </div>
              <div className="field full">
                <label>Comments</label>
                <textarea name="comments" />
              </div>
            </div>

            {sent && (
              <div className="notice" style={{ marginTop: 18 }}>
                Thank you! Your request has been received. We'll be in touch shortly to confirm.
              </div>
            )}
            <div className="form-foot">
              <button type="submit" className="btn">Submit</button>
              <p className="form-note">Fields marked <span className="req">*</span> are required.</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
