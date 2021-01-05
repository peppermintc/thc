import React from "react";
import styles from "./store_menubar.module.css";
import icon from "../../images/icon.png";
import beta from "../../images/beta.png";

const StoreMenuBar = (props) => {
  return (
    <div className={styles.container}>
      <nav>
        <a className={`${styles.menuItem} ${styles.selected}`} href="#">
          스토어홈
        </a>
        <a className={styles.menuItem} href="#">
          카테고리
        </a>
        <a className={styles.menuItem} href="#">
          베스트
        </a>
        <a className={styles.menuItem} href="#">
          오늘의딜
        </a>
        <a className={styles.menuItem} href="#">
          이불 땡처리
        </a>
        <a className={styles.menuItem} href="#">
          가전시즌오프
        </a>
        <a className={styles.menuItem} href="#">
          기획전
        </a>
      </nav>
      <a className={styles.three_d_interior_button} href="#">
        <img src={icon} alt="icon" />
        3D인테리어
        <img src={beta} alt="beta" />
      </a>
    </div>
  );
};

export default StoreMenuBar;
