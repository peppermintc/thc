import React, { useState, useEffect, useRef } from "react";
import styles from "./expertSlide.module.css";
import placeholder1 from "../../images/expert_image_1.png";
import placeholder2 from "../../images/expert_image_2.png";
import placeholder3 from "../../images/expert_image_3.png";
import placeholder4 from "../../images/expert_image_4.png";

const ExpertSlide = () => {
  const slideRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [menu] = useState([
    "깐깐한 검증",
    "맞춤추천",
    "무료 케어",
    "하자보증 증권 발행",
  ]);
  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  let TOTAL_SLIDES = 4;
  const nextSlide = () => {
    if (selectedIndex + 1 >= TOTAL_SLIDES) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  const prevSlide = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(TOTAL_SLIDES - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${selectedIndex}00%)`;
  }, [selectedIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.menu}>
          {menu.map((item, index) => (
            <div
              key={index}
              className={
                selectedIndex === index
                  ? `${styles.item} ${styles.selected}`
                  : `${styles.item}`
              }
              onClick={() => {
                handleClick(index);
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={styles.image_container}>
          <div className={styles.image_window} ref={slideRef}>
            <div className={styles.image_div}>
              <div className={styles.text_box}>
                <div className={styles.title}>
                  엄격하게 <br />
                  검증합니다
                </div>
                <div className={styles.description}>
                  시공사례, 고객후기, 업력, 사업장, A/S대응 등 <br />
                  시공 업체의 역량을 <br />
                  입체적으로 깐깐하게 검증합니다
                </div>
              </div>
              <img
                className={styles.image}
                src={placeholder1}
                alt="placeholder"
              />
            </div>
            <div className={styles.image_div}>
              <div className={styles.text_box}>
                <div className={styles.title}>
                  빠짐없이 <br />
                  확인합니다
                </div>
                <div className={styles.description}>
                  인테리어 코디와 시공 공간, 예산, 지역, 범위,
                  <br />
                  요구 사항을 자세히 상담하면 시공 가능 여부와
                  <br />
                  일정까지 딱 맞는 업체를 찾아드립니다.
                </div>
              </div>
              <img
                className={styles.image}
                src={placeholder2}
                alt="placeholder"
              />
            </div>
            <div className={styles.image_div}>
              <div className={styles.text_box}>
                <div className={styles.title}>
                  수수료 0원, <br />
                  무료입니다
                </div>
                <div className={styles.description}>
                  추천받고 상담하는 것은 물론 견적과 <br />
                  계약, 시공 중 어려운 점이 없는지 <br />
                  인테리어 코디가 지켜봅니다.
                </div>
              </div>
              <img
                className={styles.image}
                src={placeholder3}
                alt="placeholder"
              />
            </div>
            <div className={styles.image_div}>
              <div className={styles.text_box}>
                <div className={styles.title}>
                  하자이행보증 증권 <br />
                  확인하셨나요?
                </div>
                <div className={styles.description}>
                  오늘의집 추천 업체는 <br />
                  하자이행보증 증권 발급이 가능합니다. <br />
                  필요시 증권 발행을 요청하세요.
                </div>
              </div>
              <img
                className={styles.image}
                src={placeholder4}
                alt="placeholder"
              />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.prev} onClick={prevSlide}>
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
          <div className={styles.next} onClick={nextSlide}>
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

export default ExpertSlide;
