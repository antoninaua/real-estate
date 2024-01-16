import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dataSlider } from "./dataSlider";
import "./Slider.css";

const Slider = () => {
  const [filteredData, setFilteredData] = useState(dataSlider);

  useEffect(() => {
    filterData({ min: 300000, max: 500000 });
  }, []);

  const filterData = (priceRange) => {
    const filtered = dataSlider.filter((item) => {
      const price = parseInt(item.price.replace(",", ""));
      return price >= priceRange.min && price <= priceRange.max;
    });
    setFilteredData(filtered);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const carouselSettings = {
    responsive: responsive,
    infinite: true,
  };
  return (
    <section className="s-wrapper">
      <div className="paddings innerWidth s-container">
        <div className="paddings innerWidth FlexColStart s-text">
          <p className="orangeText">Best Choices</p>
          <h2 className="primaryText">Popular Residencies</h2>
        </div>
        <div className="flexStart btn-container">
          <button
            className="button-nav"
            onClick={() => setFilteredData(dataSlider)}
          >
            All
          </button>
          <button
            className="button-nav"
            onClick={() => filterData({ min: 300000, max: 500000 })}
          >
            $300,000 - $500,000
          </button>
          <button
            className="button-nav"
            onClick={() => filterData({ min: 500001, max: 1000000 })}
          >
            $500,001 - $1,000,000
          </button>
        </div>
        <Carousel responsive={responsive} {...carouselSettings}>
          {filteredData.map((card, i) => (
            <div key={i} className="flexColStart s-card">
              <img src={card.image} alt="Home" />
              <h5 className="secondaryText">
                <span style={{ color: "orange" }}>$</span>
                {card.price}
              </h5>
              <h3 className="primaryText">{card.name}</h3>
              <p className="secondaryText">{card.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
