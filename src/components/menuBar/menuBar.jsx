import React from "react";
import styles from "./menuBar.module.css";
import icon from "../../images/icon.png";
import beta from "../../images/beta.png";

const MenueBar = (props) => {
  return (
    <div className={styles.container}>
      <nav>
        <a className={`${styles.menuItem} ${styles.selected}`} href="/">
          홈
        </a>
        <a className={styles.menuItem} href="/">
          사진
        </a>
        <a className={styles.menuItem} href="/">
          집들이
        </a>
        <a className={styles.menuItem} href="/">
          노하우
        </a>
        <a className={styles.menuItem} href="/">
          전문가집들이
        </a>
        <a className={styles.menuItem} href="/">
          셀프가이드
        </a>
        <a className={styles.menuItem} href="/">
          질문과답변
        </a>
        <a className={styles.menuItem} href="/">
          이벤트
        </a>
      </nav>
      <a className={styles.three_d_interior_button} href="/">
        <img src={icon} alt="icon" />
        3D인테리어
        <img src={beta} alt="beta" />
      </a>
    </div>
  );
};

export default MenueBar;
