import React from "react";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Rating from "@mui/material/Rating";
import classes from "./product.module.css";
function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;
  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h4>{title}</h4>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to carts</button>
      </div>
    </div>
  );
}

export default ProductCard;
