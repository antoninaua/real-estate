import React from "react";
import "./About.css";
import "../Components/Contact/Contact.css";
import { GiFamilyHouse } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdVilla } from "react-icons/md";

const Services = () => {
  return (
    <section className="a-wrapper">
      <div className="flexCenter innerWidth a-container">
        <div className="img-container">
          <img src="images/r1.png" alt="Home" />
          <div className="text-overlay">
            <span>Services -All Services</span>
          </div>
        </div>
        <div className="padding flexColCenter mode">
          <div className="flexColCenter detailContainer">
            <div className="flexCenter icon">
              <GiFamilyHouse size={35} />
            </div>
            <div className="flexColCenter detail">
              <span>Family House</span>
              <span>122 Property</span>
            </div>
          </div>
        </div>
        <div className="flexColCenter mode">
          <div className="flexColCenter detailContainer">
            <div className="flexCenter icon">
              <FaHouse size={35} />
            </div>
            <div className="flexColCenter detail">
              <span>House & Villa</span>
              <span>155 Property</span>
            </div>
          </div>
        </div>
        <div className="flexColCenter mode">
          <div className="flexColCenter detailContainer">
            <div className="flexCenter icon">
              <MdApartment size={35} />
            </div>
            <div className="flexColCenter detail">
              <span>Apartment</span>
              <span>300 Property</span>
            </div>
          </div>
        </div>
        <div className="flexColCenter mode">
          <div className="flexColCenter detailContainer">
            <div className="flexCenter icon">
              <HiBuildingOffice2 size={35} />
            </div>
            <div className="flexColCenter detail">
              <span>Office & Studio</span>
              <span>80 Property</span>
            </div>
          </div>
        </div>
        <div className="flexColCenter mode">
          <div className="flexColCenter detailContainer">
            <div className="flexCenter icon">
              <MdVilla size={35} />
            </div>
            <div className="flexColCenter detail">
              <span>Villa & Condo</span>
              <span>70 Property</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
