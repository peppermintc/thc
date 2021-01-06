import React from "react";
import styles from "./calculate.module.css";
import bart from "../../images/bart.png";

const Calculate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.image} src={bart} alt="bart" />
        <div className={styles.text}>공정별 예산, 한 번에 알아보세요!</div>
        <div className={styles.button}>예상 견적 계산하기</div>
      </div>
    </div>
  );
};

export default Calculate;
