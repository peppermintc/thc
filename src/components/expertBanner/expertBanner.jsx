import React from "react";
import styles from "./expertBanner.module.css";
import placeholder from "../../images/placeholder.png";

const ExpertBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_box}>
        <img src={placeholder} alt="placeholder" />
      </div>
      <div className={styles.box}>
        <div className={styles.text1}>맞춤업체추천</div>
        <div className={styles.text2}>종합 리모델링 업체 무료 추천 받기</div>
        <div className={styles.text3}>
          추천가능지역 : 서울/경기/인천/대구/충청/대전/광주/전라
          울산/부산/창원/김해/양산
        </div>
        <div className={styles.button}>간편상담신청</div>
      </div>
    </div>
  );
};

export default ExpertBanner;
