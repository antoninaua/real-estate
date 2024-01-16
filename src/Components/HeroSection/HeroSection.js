import React from "react";
import "./HeroSection.css";
import { FaLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";
import "../../App.css";

const HeroSection = () => {
  return (
    <section className="h-section">
      <div className="white-gradient" />
      <div className="flexCenter paddings innerWidth h-container">
        <div className="flexColCenter h-left">
          <div className="h-title">
            <div className="orange-circle" />
            <h1 className="flexColStart">
              Discover
              <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart h-description">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <FaLocationDot color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button-nav">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1900} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter h-right">
          <div className="image-container">
            <img src="images/hero-image.png" alt="Main" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
