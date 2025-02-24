import React from "react";

const Productcard = ({ image, name, descripton, price }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{descripton}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Productcard;
