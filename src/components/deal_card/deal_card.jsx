import React from "react";
import styles from "./deal_card.module.css";

const DealCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.image_box}>
            <img className={styles.image} src={item.src} alt="placeholder" />
          </div>
          <div className={styles.text_container}>
            <span className={styles.company}>{item.company}</span>
            <span className={styles.title}>{item.title}</span>
            <div>
              <span className={styles.percent}>{item.percent}</span>
              <span className={styles.price}>{item.price}</span>
            </div>
            <div className={styles.star_and_review}>
              <span className={styles.star}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="rgb(53,197,240)"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
              <span className={styles.rating}>{item.rating}</span>
              <span className={styles.review}>{item.review}</span>
            </div>
            <span className={styles.ship}>{item.ship}</span>
            <span className={styles.days}>{item.days}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default DealCard;
