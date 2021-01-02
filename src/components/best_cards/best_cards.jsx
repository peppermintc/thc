import React, { useState } from "react";
import styles from "./best_cards.module.css";
import placeholder from "../../images/placeholder.png";
import placeholder2 from "../../images/placeholder2.png";
import placeholder3 from "../../images/left_banner.png";

const BestCards = () => {
  const [data] = useState([
    {
      image: placeholder,
      description: "(3+1) 천연디퓨저 200ml 18가지 향기 드라이플라워 증정",
      percent: "52%",
      price: "9,500",
    },
    {
      image: placeholder2,
      description: "모노(MONO) 캔들워머+양키캔들 라지자+전구2개증정(빛 조절)",
      percent: "25%",
      price: "34,500",
    },
    {
      image: placeholder3,
      description: "[연휴특가]LERSTA 레르스타 장스탠드_3colors (박스안전포장)",
      percent: "20%",
      price: "18,900",
    },
  ]);

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.photo_box}>
            <img src={item.image} alt="placeholder" />
          </div>
          <div className={styles.bookmark}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="rgb(53, 197, 242)"
              className="bi bi-bookmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            </svg>
            <span className={styles.rank}>{index + 1}</span>
          </div>
          <div className={styles.description_box}>
            <div className={styles.description}>{item.description}</div>
            <div>
              <span className={styles.percent}>{item.percent}</span>
              <span className={styles.price}>{item.price}</span>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.more}>
        <div className={styles.more_inner}>
          <div>베스트셀러 더보기</div>
          <div className={styles.next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fillRule="black"
              classnames="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCards;
