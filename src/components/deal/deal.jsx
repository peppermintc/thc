import React, { useState, useRef } from "react";
import styles from "./deal.module.css";
import placeholder from "../../images/placeholder.png";
import placeholder2 from "../../images/placeholder2.png";
import left_banner from "../../images/left_banner.png";
import DealCard from "../deal_card/deal_card";

const Deal = (props) => {
  const myRef = useRef();
  const [data] = useState([
    {
      src: placeholder,
      company: "바이밤",
      title: "보들보들 극세사 페르시안 잔드 카페트 5 sizes",
      percent: "59%",
      price: "31,500",
      rating: "4.7",
      review: "리뷰 6,246",
      ship: "무료배송",
      days: "5일 남음",
    },
    {
      src: placeholder2,
      company: "샵바오밥",
      title: "인기 원목 침대프레임 6종(LED/평상형)",
      percent: "70%",
      price: "264,000",
      rating: "4.8",
      review: "리뷰 100",
      ship: "무료배송",
      days: "5일 남음",
    },
    {
      src: left_banner,
      company: "헤리더",
      title: "장인이 만든 거실 런칭 특가",
      percent: "24%",
      price: "20,000,000",
      rating: "1.7",
      review: "리뷰 0",
      ship: "무료배송",
      days: "5일 남음",
    },
    {
      src: placeholder,
      company: "바이밤",
      title: "보들보들 극세사 페르시안 잔드 카페트 5 sizes",
      percent: "59%",
      price: "31,500",
      rating: "4.7",
      review: "리뷰 6,246",
      ship: "무료배송",
      days: "5일 남음",
    },
    {
      src: placeholder2,
      company: "샵바오밥",
      title: "인기 원목 침대프레임 6종(LED/평상형)",
      percent: "70%",
      price: "264,000",
      rating: "4.8",
      review: "리뷰 100",
      ship: "무료배송",
      days: "5일 남음",
    },
    {
      src: left_banner,
      company: "헤리더",
      title: "장인이 만든 거실 런칭 특가",
      percent: "24%",
      price: "20,000,000",
      rating: "1.7",
      review: "리뷰 0",
      ship: "무료배송",
      days: "5일 남음",
    },
    {
      src: placeholder,
      company: "바이밤",
      title: "보들보들 극세사 페르시안 잔드 카페트 5 sizes",
      percent: "59%",
      price: "31,500",
      rating: "4.7",
      review: "리뷰 6,246",
      ship: "무료배송",
      days: "5일 남음",
    },
    {
      src: placeholder2,
      company: "샵바오밥",
      title: "인기 원목 침대프레임 6종(LED/평상형)",
      percent: "70%",
      price: "264,000",
      rating: "4.8",
      review: "리뷰 100",
      ship: "무료배송",
      days: "5일 남음",
    },
    {
      src: left_banner,
      company: "헤리더",
      title: "장인이 만든 거실 런칭 특가",
      percent: "24%",
      price: "20,000,000",
      rating: "1.7",
      review: "리뷰 0",
      ship: "무료배송",
      days: "5일 남음",
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
        <span className={styles.title}>오늘의딜</span>
        <a className={styles.more} href="#">
          더보기
        </a>
      </div>

      <div className={styles.app} ref={myRef}>
        <DealCard data={data} />
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

export default Deal;
