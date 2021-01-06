import React from "react";
import styles from "./expert_menubar.module.css";
import icon from "../../images/icon.png";
import beta from "../../images/beta.png";

const ExpertMenuBar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <nav>
          <a className={`${styles.menuItem} ${styles.selected}`} href="#">
            시공홈
          </a>
          <a className={styles.menuItem} href="#">
            맞춤업체추천
          </a>
          <a className={styles.menuItem} href="#">
            시공스토어
          </a>
        </nav>
        <a className={styles.three_d_interior_button} href="#">
          <img src={icon} alt="icon" />
          3D인테리어
          <img src={beta} alt="beta" />
        </a>
      </div>
    </div>
  );
};

export default ExpertMenuBar;
