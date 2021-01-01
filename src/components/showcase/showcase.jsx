import React, { useState } from "react";
import styles from "./showcase.module.css";
import placeholder from "../../images/placeholder.png";
import placeholder2 from "../../images/placeholder2.png";
import placeholder3 from "../../images/left_banner.png";

const Showcase = () => {
  const [data] = useState([
    {
      image: placeholder,
    },
    {
      image: placeholder2,
    },
    {
      image: placeholder3,
    },
    {
      image: placeholder,
    },
    {
      image: placeholder2,
    },
    {
      image: placeholder3,
    },
    {
      image: placeholder,
    },
    {
      image: placeholder2,
    },
  ]);

  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <div className={styles.title}>오늘의 인기 사진</div>
        <div className={styles.container}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.photo_box}>
                <img src={item.image} alt="placeholder" />
              </div>
              <div className={styles.profile_box}>
                <img src={placeholder} alt="placeholder" />
                <span className={styles.user}>User Id</span>
              </div>
              <div className={index < 3 && styles.bookmark}>
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
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-front"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
