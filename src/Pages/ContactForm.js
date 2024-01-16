import React from "react";
import "./About.css";

const ContactForm = () => {
  return (
    <section className="contact-wrapper">
      <div className="flexCenter innerWidth contact-container">
        <div className="img-container">
          <img src="images/r3.png" alt="Home" />
          <div className="text-overlay">
            <span>Get Helps & Friendly Support</span>
          </div>
        </div>
        <div className="contact-form">
          <form className="flexColCenter contact-inner">
            <span className="orangeText">Fillup The Form</span>
            <label className="secondaryText">Name</label>
            <input type="text" name="user-name" />
            <label className="secondaryText">Email</label>
            <input type="email" name="user-email" />
            <label className="secondaryText">Subject</label>
            <input type="text" name="subject" />
            <input type="text" name="user-text" />
            <button className="button-nav">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
