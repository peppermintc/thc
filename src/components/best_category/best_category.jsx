import React from "react";
import styles from "./best_category.module.css";

const BestCategory = (props) => {
  return (
    <div className={styles.container}>
      <nav>
        <a className={`${styles.menuItem} ${styles.selected}`} href="#">
          전체
        </a>
        <a className={styles.menuItem} href="#">
          가구
        </a>
        <a className={styles.menuItem} href="#">
          패브릭
        </a>
        <a className={styles.menuItem} href="#">
          홈데코/조명
        </a>
        <a className={styles.menuItem} href="#">
          가전
        </a>
        <a className={styles.menuItem} href="#">
          수납/정리
        </a>
        <a className={styles.menuItem} href="#">
          생활
        </a>
        <a className={styles.menuItem} href="#">
          주방
        </a>
        <a className={styles.menuItem} href="#">
          DIY/공구
        </a>
        <a className={styles.menuItem} href="#">
          인테리어시공
        </a>
        <a className={styles.menuItem} href="#">
          반려동물
        </a>
        <a className={styles.menuItem} href="#">
          캠핑용품
        </a>
      </nav>
    </div>
  );
};

export default BestCategory;
