import React from "react";
import { CategoryInfos } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import styles from "./category.module.css";
function Category() {
  console.log(CategoryInfos);
  return (
    <section className={styles.category_container}>
      {CategoryInfos.map((info) => {
        return <CategoryCard data={info} />;
      })}
    </section>
  );
}

export default Category;
