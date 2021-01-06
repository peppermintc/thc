import React, { useState } from "react";
import styles from "./expertExample.module.css";
import placeholder1 from "../../images/placeholder.png";
import placeholder2 from "../../images/placeholder2.png";
import placeholder3 from "../../images/left_banner.png";

const ExpertExample = () => {
  const [examples] = useState([
    { image: placeholder1, description: "가족의 각감을 더해 완성한 인테리어" },
    {
      image: placeholder2,
      description: "전/후 | 30년 넘은 빌라, 새로운 변화의 시작",
    },
    {
      image: placeholder3,
      description: "마포구 서강쌍용아파트 33평형 인테리어",
    },
    { image: placeholder2, description: "중문, 발코니 확장 없이 컴팩트하게" },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.title_box}>
        <div className={styles.title}>맞춤업체추천 시공사례</div>
      </div>
      <div className={styles.card_box}>
        {examples.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.img_box}>
              <img src={item.image} alt="placeholder" />
            </div>
            <div className={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertExample;
