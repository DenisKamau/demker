import React from "react";
import "./Card.css";

const Card = ({ image, title }) => {
  return (
    <div className="card__main">
      <div className="card">
        <div className="card__imageAndName">
          <img className="card__image" src={`${process.env.PUBLIC_URL}/assets/images/${image}`} alt="Product" />
          <p className="card__title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
