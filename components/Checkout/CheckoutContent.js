"use client";

import React from "react";
import { useStateValue } from "@/components/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const CheckoutContent = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      {basket?.length === 0 ? (
        <div className="checkout__empty">
          <h1>Your Amazon Cart is empty.</h1>
          <p>
            Your shopping cart is waiting. Give it purpose – fill it with
            groceries, clothing, household supplies, electronics and more.
            Continue shopping on the Amazon.in homepage, learn about today's
            deals, or visit your Wish List.
          </p>
        </div>
      ) : (
        <div className="checkout__nonEmpty">
          <h1 className="checkout__title">Your Shopping Basket</h1>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CheckoutContent;
