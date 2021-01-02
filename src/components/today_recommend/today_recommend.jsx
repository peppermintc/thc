import React, { useState } from "react";
import styles from "./today_recommend.module.css";
import placeholder from "../../images/left_banner.png";
import placeholder2 from "../../images/placeholder.png";
import placeholder3 from "../../images/placeholder2.png";

const TodayRecommend = () => {
  const [data] = useState([
    {
      image: placeholder,
      description: "[연휴특가] (예약주문) 라움 세븐 트리 원목침대 4size",
      percent: "51%",
      price: "368,000",
    },
    {
      image: placeholder2,
      description: "[쿠폰할인] BEST 풀커버 패브릭/가죽소파 15종",
      percent: "88%",
      price: "27,368,000",
    },
    {
      image: placeholder3,
      description: "브리즈 폼매틔스 S/SS/Q/K",
      percent: "99.92%",
      price: "9,900",
    },
    {
      image: placeholder,
      description: "[연휴특가] (예약주문) 라움 세븐 트리 원목침대 4size",
      percent: "51%",
      price: "368,000",
    },
    {
      image: placeholder2,
      description: "[쿠폰할인] BEST 풀커버 패브릭/가죽소파 15종",
      percent: "88%",
      price: "27,368,000",
    },
    {
      image: placeholder3,
      description: "브리즈 폼매틔스 S/SS/Q/K",
      percent: "99.92%",
      price: "9,900",
    },
  ]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span className={styles.title}>오늘의 추천 신혼가구</span>
        <a className={styles.more} href="#">
          더보기
        </a>
      </div>
      <div className={styles.container}>
        {data.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.image_box}>
              <img src={item.image} alt="placeholder" />
            </div>

            <div className={styles.description_container}>
              <div className={styles.description}>{item.description}</div>
              <div>
                <span className={styles.percent}>{item.percent}</span>
                <span className={styles.price}>{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayRecommend;
