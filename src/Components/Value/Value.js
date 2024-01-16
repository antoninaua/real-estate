import React from "react";
import AccordionItem from "./AccordionItem";
import { list } from "./list";
import "./Value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="padding innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="images/value.png" alt="Home" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <h5 className="orangeText">Our Value</h5>
          <h3 className="primaryText">Value We Give to You</h3>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
          </span>
          <span className="secondaryText">
            We beleive a good blace to live can make your life better.
          </span>
          <div className="flexColStart accordion-container">
            {/* accordion */}
            {list.map((item, index) => (
              <AccordionItem
                key={index}
                icon={item.icon}
                heading={item.heading}
                detail={item.detail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
