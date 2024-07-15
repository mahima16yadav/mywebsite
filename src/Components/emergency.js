import React, { useState } from "react";
import "./emergency.css";

function SolarEnergy() {
  const [contentIndex, setContentIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const textContents = [
    {
      title: "Emergency Ambulance",
      text: `Solar panels convert sunlight into electricity. Photovoltaic (PV)
            cells on these panels capture the energy from the sun and convert
            it into electrical power.`,
    },
    {
      title: "Sustainable Energy",
      text: `Sustainable energy comes from natural processes that are
            constantly replenished. This includes sunlight, geothermal heat,
            wind, tides, water, and various forms of biomass.`,
    },
    {
      title: "Future of Power",
      text: `The future of power generation lies in the development of more
            efficient and cost-effective solar panels, wind turbines, and other
            renewable energy technologies.`,
    },
  ];

  const handleShiftLeft = () => {
    setContentIndex((prevIndex) =>
      prevIndex === 0 ? textContents.length - 1 : prevIndex - 1
    );
  };

  const handleShiftRight = () => {
    setContentIndex((prevIndex) =>
      prevIndex === textContents.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className="solar-energy-container">
        <div
          className="text-content"
          style={{ transform: `translateX(${offset}px)` }}
        >
          <h1>{textContents[contentIndex].title}</h1>
          <br />
          <p>{textContents[contentIndex].text}</p>
          <br />
          <button className="learn-more-button">Learn more</button>
        </div>
        <div className="arrows" style={{ display: "flex" }}>
          <div className="custom-class" onClick={handleShiftLeft}>
            <img className="arrow-left" alt="" src="/arrow-forward.svg" />
          </div>
          <div className="custom-class" onClick={handleShiftRight}>
            <img className="arrow-right" alt="" src="/arrow-forward.svg" />
          </div>
        </div>
        <div className="image-content">
          <img src="./ambulance2.png" alt="Ambulance" />
        </div>
      </div>
    </div>
  );
}

export default SolarEnergy;