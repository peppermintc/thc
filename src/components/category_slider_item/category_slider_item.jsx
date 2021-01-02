import React from "react";
import styles from "./category_slider_item.module.css";

const CategorySliderItem = ({ img, description }) => {
  return (
    <a className={styles.container} href="#">
      <img className={styles.image} src={img} alt="icon" />
      <span className={styles.name}>{description}</span>
    </a>
  );
};

export default CategorySliderItem;
