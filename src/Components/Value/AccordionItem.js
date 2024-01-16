import React, { useState } from "react";

const AccordionItem = ({ icon, heading, detail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={isOpen ? "active" : "default"} onClick={handleIsOpen}>
        {icon} {heading}
      </div>
      {isOpen && <div className="secondaryText heading">{detail}</div>}
    </div>
  );
};

export default AccordionItem;
