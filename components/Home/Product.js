import React from "react";
import Image from "next/image";
import "./Product.css";
import ProductButton from "./ProductButton";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p className="title">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <div className="product__image">
        <Image
          src={image}
          alt={title}
          width={200} 
          height={200} 
        />
      </div>
      <ProductButton
        id={id}
        title={title}
        image={image}
        price={price}
        rating={rating}
      />
    </div>
  );
};

export default Product;
