import React, { useState, useRef } from "react";
import styles from "./today_event.module.css";
import placeholder from "../../images/left_banner.png";
import placeholder2 from "../../images/placeholder.png";
import placeholder3 from "../../images/placeholder2.png";

const TodayEvent = () => {
  const myRef = useRef();
  const [data] = useState([
    {
      image: placeholder,
      tags: "#요리는 장비발 #안전한 집콕요리",
      description: "연말연시 집콕요리를 위한 주방툴 대전",
    },
    {
      image: placeholder2,
      tags: "초음파/복합식/가열식/기화식 총출동",
      description: "마지막세일! 가습기 특가전",
    },
    {
      image: placeholder3,
      tags: "진열/반품/스크래치 가구 가전 초특가",
      description: "[리퍼마켓] 어제는 정상가, 오늘은 반값!",
    },
    {
      image: placeholder,
      tags: "#요리는 장비발 #안전한 집콕요리",
      description: "연말연시 집콕요리를 위한 주방툴 대전",
    },
  ]);

  const prevClick = () => {
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  const nextClick = () => {
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span className={styles.title}>오늘의 기획전</span>
        <a className={styles.more} href="#">
          더보기
        </a>
      </div>
      <div className={styles.container} ref={myRef}>
        {data.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.image_box}>
              <img src={item.image} alt="placeholder" />
            </div>

            <div className={styles.description_container}>
              <div className={styles.tags}>{item.tags}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.row}>
        <div className={styles.prev} onClick={prevClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="black"
            classnames="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>

        <div className={styles.next} onClick={nextClick}>
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
  );
};

export default TodayEvent;
