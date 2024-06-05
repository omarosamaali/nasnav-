import React, { useState } from "react";

const CartIcon = ({ cartItems }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div
        onClick={toggleDropdown}
        style={{ position: "relative", cursor: "pointer" }}
      >
        🛒
        <span
          style={{
            position: "absolute",
            top: -10,
            right: -10,
            backgroundColor: "red",
            borderRadius: "50%",
            color: "white",
            padding: "5px",
            minWidth: "20px",
            textAlign: "center",
          }}
        >
          {cartItems}
        </span>
      </div>
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "100%",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            padding: "10px",
            width: "200px",
          }}
        >
          {cartItems === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <p>You have {cartItems} item(s) in your cart.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
