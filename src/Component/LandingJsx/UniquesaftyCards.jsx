
import React, { useState } from "react";
import '../../Component/LandingCss/UniqueSaftyCards.css';

const SaftyCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const cardData = [
    { title: "Save Money", text: "Save up to 20% on our site compared to the cost of other parking platforms.", class: "unique-text-primary" },
    { title: "Save Time", text: "It's easy to compare parking spots. Booking a reservation is quick and simple.", class: "unique-text-secondary" },
    { title: "Save Stress", text: "Guarantee your parking spot by booking in advance. Can't make it? Cancellations are free.", class: "unique-text-success" },
    { title: "Safety & Security", text: "Don't worry, we got you covered. Choose safety features like CCTV, security guards, etc.", class: "unique-text-danger" },
  ];

  return (
    <div className="unique-containers">
      <div className="row unique-card-container">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-3 custom-unique-card ${
              selectedCard === index ? "unique-highlight" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className={`unique-card-body ${card.class}`}>
              <h5 className="unique-card-title unique-bold-text">{card.title}</h5>
              <p className="unique-card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaftyCards;
