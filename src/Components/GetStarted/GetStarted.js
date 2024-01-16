import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  const emailAddress = "example@example.com";

  const handleEmailIconClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <section className="start-wrapper">
      <div className="paddings innerWidth start-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
          </span>
          <span className="secondaryText">Find your residence soon</span>
          <button className="button" onClick={handleEmailIconClick}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
