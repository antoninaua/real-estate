import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="a-wrapper">
      <div className="flexCenter innerWidth a-container">
        <div className="img-container">
          <img src="images/contact.jpg" alt="Home" />
          <div className="text-overlay">
            <span>About Us - Who We Are?</span>
          </div>
        </div>
        <div className="flexColStart a-left">
          <h5 className="orangeText">Our Agency Story</h5>
          <h3 className="primaryText">Welcome to Homyz,</h3>
          <span className="secondaryText">
            Where your real estate journey begins!
          </span>
          <span className="secondaryText">
            Established in 2013, our mission at Homyz is to redefine the real
            estate experience. With a commitment to integrity, personalized
            service, and innovation, we go beyond transactions to transform
            dreams into reality.
          </span>
          <h3 className="orangeText">Why Choose Us?</h3>
          <span>
            <b>Client-Centric Approach:</b> Your needs are our priority. We
            tailor our services to meet your unique goals
          </span>
          <span>
            <b>Local Expertise, Global Reach:</b> Benefit from our deep local
            market knowledge and a global network to connect buyers and sellers
            seamlessly.
          </span>
          <span>
            <b>Community Involvement:</b> We believe in giving back. Join us in
            contributing to the growth of our neighborhoods.
          </span>
        </div>
        <div className="flexColStart image-container">
          <img src="images/value.png" alt="Home" />
        </div>
      </div>
    </section>
  );
};

export default About;
