import React, { useState } from "react";
import styles from "./interior_review.module.css";
import placeholder from "../../images/left_banner.png";
import placeholder2 from "../../images/placeholder.png";
import placeholder3 from "../../images/placeholder2.png";

const InteriorREview = () => {
  const [data] = useState([
    {
      image: placeholder,
      description:
        "첫 미팅부터 취향과 니즈를 정확히 파악하시고 이후 자재선정이나 시공시 의견수렴을 잘해주셔서 좋았습니다. 더우기 감각이쓴 조언으로 완성도가 높아져 더욱 뿌듯합니다.",
      company: "인코인테리어",
    },
    {
      image: placeholder2,
      description:
        "제한된 예산을 가지고 처음 인테리어 업체 여럿과 견적을 냈을 때 가장 현실적이고 합리적인 방법과 금액을 제시한 업체가 바로 이 젊은 김사장님과 박실장님의 두드림이었어요.",
      company: "두드림인테리어",
    },
    {
      image: placeholder3,
      description:
        "30년 가까이 된 오래된 아파트를 구매하게 되면서 인테리어에 대한 고민이 많이 있었는데요. 특히 15개월된 아기가 있다 보니 방방곳봇을 찾아볼 여건이 되지 않아 주변지인",
      company: "씨리아이디(Cilli)",
    },
  ]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span className={styles.title}>유저들의 인테리어 시공리뷰</span>
        <a className={styles.more} href="/">
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
              <div>
                {[...Array(5)].map((n, index) => {
                  return (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="rgb(53,197,240)"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  );
                })}
              </div>
              <div className={styles.description}>{item.description}</div>
              <div className={styles.company_box}>
                <div className={styles.company_image}>
                  <img src={placeholder} alt="placeholder" />
                </div>
                <span className={styles.company_name}>{item.company}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="rgb(23,120,186)"
                  className="bi bi-patch-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorREview;
