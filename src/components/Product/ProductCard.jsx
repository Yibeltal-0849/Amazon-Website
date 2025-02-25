import React from "react";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Rating from "@mui/material/Rating";
import classes from "./product.module.css";
import { Link } from "react-router";
function ProductCard({ product, flex, renderDescr }) {
  const { image, title, id, rating, price, description } = product;
  // console.log(product);
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      } `}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h4>{title}</h4>
        {renderDescr && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
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
