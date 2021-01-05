import React, { useState, useEffect, useRef } from "react";
import styles from "./store_banner.module.css";
import placeholder from "../../images/banner_placeholder.png";
import placeholder2 from "../../images/banner_placeholder2.png";
import placeholder3 from "../../images/banner_placeholder3.png";
import placeholder4 from "../../images/banner_placeholder4.png";

const StoreBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const displayRef = useRef();
  const images = [
    {
      title: "패브릭 창고 대방출",
      url: placeholder,
    },
    {
      title: "겨울가전 FINAL 세일",
      url: placeholder2,
    },
    {
      title: "요즘 대세 집콕요리",
      url: placeholder3,
    },
    {
      title: "새해맞이 운동결심",
      url: placeholder4,
    },
    {
      title: "가볍고 똑똑한 소비",
      url: placeholder,
    },
    {
      title: "신상 브랜드 특가",
      url: placeholder2,
    },
  ];

  const TOTAL_SLIDES = images.length - 1;

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    displayRef.current.style.transition = "all 0.5s ease-in-out";
    displayRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  useInterval(() => {
    nextSlide();
  }, 5000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.display} ref={displayRef}>
        {images.map((item, index) => (
          <img
            className={styles.image}
            src={item.url}
            alt="banner"
            key={index}
          />
        ))}
      </div>
      <div className={styles.menu}>
        {images.map((item, index) => (
          <div
            key={index}
            className={
              currentSlide === index
                ? `${styles.item} ${styles.selected}`
                : `${styles.item}`
            }
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
        ))}
        <button className={styles.button} onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="black"
            classnames="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        <button className={styles.button} onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="black"
            classnames="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoreBanner;
