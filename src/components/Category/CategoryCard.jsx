import React from "react";
import styles from "./category.module.css";
function CategoryCard({ data }) {
  //   console.log(data);
  return (
    <div className={styles.category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>show now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
