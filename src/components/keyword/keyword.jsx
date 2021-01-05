import React from "react";
import styles from "./keyword.module.css";
import placeholder from "../../images/banner_placeholder.png";
import placeholder2 from "../../images/banner_placeholder2.png";
import placeholder3 from "../../images/banner_placeholder3.png";
import placeholder4 from "../../images/banner_placeholder4.png";

const Keyword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>인기 키워드</div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={placeholder} alt="placeholder" />
            <span>겨울가전 최종 할인 80%~</span>
          </div>
          <div className={styles.card}>
            <img src={placeholder2} alt="placeholder" />
            <span>인기 주방용품 단독특가</span>
          </div>
          <div className={styles.card}>
            <img src={placeholder3} alt="placeholder" />
            <span>겨울이불 9,900원</span>
          </div>
          <div className={styles.card}>
            <img src={placeholder4} alt="placeholder" />
            <span>홈트레이닝 특가 ~63%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyword;
