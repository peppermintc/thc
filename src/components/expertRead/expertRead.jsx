import React, { useState } from "react";
import styles from "./expertRead.module.css";
import placeholder1 from "../../images/placeholder.png";
import placeholder2 from "../../images/placeholder2.png";
import placeholder3 from "../../images/left_banner.png";

const ExpertExample = () => {
  const [examples] = useState([
    {
      image: placeholder1,
      description: "낭비 1도 없는 반셀프 리모델링 스케줄링",
    },
    {
      image: placeholder2,
      description: "주방리모델링 마스터가 되는 싱크대 체크포인트",
    },
    {
      image: placeholder3,
      description: "아는만큼 잘 통한다, 리모델링 용어 A to Z",
    },
    {
      image: placeholder2,
      description: "리모델링 계약서 쓸 때! 주의사항 10가지",
    },
    {
      image: placeholder1,
      description: "효율이냐 비용이냐! 리모델링 철거, 나의 선택은?",
    },
    {
      image: placeholder2,
      description: "누수 걱정없는 욕실시공 체크포인트 A to Z",
    },
    {
      image: placeholder3,
      description: "하자이까,아닐까? 헷갈리는 케이스",
    },
    {
      image: placeholder2,
      description: "전셋집 아파트 보러다닐 때! 인테리어 중심 체크",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.title_box}>
        <div className={styles.title}>인테리어 계약 전 필독!</div>
      </div>
      <div className={styles.card_box}>
        <div className={styles.card_list}>
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
    </div>
  );
};

export default ExpertExample;
