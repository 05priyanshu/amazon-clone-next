"use client"

import React from "react";
import { useStateValue } from "@/components/StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";

const ProductButton = ({id,title,image,price,rating}) => {
  const [{}, dispatch] = useStateValue();

  const notify = (statement) => {
    toast.success("Item added to Cart !");
  };
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    notify();
    console.log("added to basket", title, image, price, rating);
  };

  return (
    <div>
      <button className="btn" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default ProductButton;
