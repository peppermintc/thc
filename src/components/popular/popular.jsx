import React, { useState, useEffect, useCallback } from "react";
import styles from "./popular.module.css";
import mock_data_1 from "../../data/mock_1.json";
import mock_data_2 from "../../data/mock_2.json";

const Popular = () => {
  const [data, setData] = useState([]);
  const [bottom, setBottom] = useState(false);

  const getData_1 = useCallback(() => {
    console.log("fetch mock data 1");
    setData(mock_data_1);
  }, []);
  const getData_2 = useCallback(() => {
    console.log("fetch mock data 2");
    setData((prevData) => [...prevData, ...mock_data_2]);
  }, []);

  useEffect(() => {
    getData_1();
  }, [getData_1]);
  useEffect(() => {
    getData_2();
  }, [bottom, getData_2]);

  const onScroll = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    ) {
      setBottom(true);
    } else {
      setBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>인기 상품</div>
        <div className={styles.buttons}>
          <button className={styles.ship_button}>
            배송
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="grey"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
          <button className={styles.filter_button}>
            인기순
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="grey"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        </div>
        <div className={styles.cards}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.image_box}>
                <img src={item.image} alt={item.name} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  fill="rgb(245, 245, 245)"
                  className="bi bi-bookmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
              </div>
              <div className={styles.des_box}>
                <div className={styles.company}>{item.company}</div>
                <div className={styles.name}>{item.name}</div>
                <div>
                  <span className={styles.percent}>{item.percent}</span>
                  <span className={styles.price}>{item.price}</span>
                </div>
                <div>
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
                  <span className={styles.rate}>{item.rate}</span>
                  <span className={styles.review}>리뷰 {item.review}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
