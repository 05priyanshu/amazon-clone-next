import React from "react";
import Image from "next/image";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutContent from "./CheckoutContent";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Amazon Ad"
          className="checkout__ad"
        />
        <CheckoutContent />
      </div>
      <Subtotal />
    </div>
  );
};

export default Checkout;
