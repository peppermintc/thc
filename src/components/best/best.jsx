import React from "react";
import styles from "./best.module.css";
import BestCategory from "../best_category/best_category";
import BestCards from "../best_cards/best_cards";

const Best = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>베스트</div>
      <BestCategory />
      <BestCards />
    </div>
  );
};

export default Best;
