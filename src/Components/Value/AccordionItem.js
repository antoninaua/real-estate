import React from "react";
import "./Value.css";

const AccordionItem = ({ icon, heading, detail, isActive, onClick }) => {
  return (
    <div>
      <div
        className={`accordion-item ${isActive ? "active" : "default"}`}
        onClick={onClick}
      >
        {icon} {heading}
        {isActive && <div className="secondaryText heading">{detail}</div>}
      </div>
    </div>
  );
};

export default AccordionItem;
