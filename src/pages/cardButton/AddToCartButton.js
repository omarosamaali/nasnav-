import React from "react";

const AddToCartButton = ({ addToCart }) => {
  const handleAddToCart = () => {
    const quantity = 1;
    addToCart(quantity);
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddToCartButton;
