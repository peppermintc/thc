import React, { useState } from "react";
import styles from "./expertReview.module.css";

const ExpertReview = () => {
  const [reviews] = useState([
    {
      title: "빠른 소통과 시공 퀄리티!",
      description:
        "상담시 상세한 견적서를 보여주셔서 많은 도움이 되었고 시공 과정도        카톡으로 세세하게 소통할 수 있었습니다. 시공 후 조그만 하자가 있었는데 신속하게 대응해주셨습니다. 빠른 소통과 시공 퀄리티 때문에 다음번에도 부탁드리고 싶습니다. 추천합니다.",
      user: "김** 고객님",
    },
    {
      title: "친절한 상담, 합리적인 해결!",
      description:
        "처음 집으로 방문해 주시고 시공 방법과 궁금한 것들을 친절히 상담해 주셨습니다. 공사하기 어려운 부분도 합리적으로 해결 방법을 찾아 잘 마무리 해주셨습니다. 전체 완성된 공간은 주거하기 쾌적한 공간으로 바뀌어 가족들은 크게 만족하고 있습니다~",
      user: "유** 고객님",
    },
    {
      title: "원하는 것들을 직접 주도해서 시공!",
      description:
        "제가 원하는 것들에 대해 잘 맞춰주시고 소통도 잘해주셔서 대화를 계속 하면서 진행할 수 있었서 좋았네요. 자재나 색깔 인테리어 같은 것은 코멘트를 주시긴하지만 제가 골랐기 때문에 제가 주도해서 시공한 것처럼 느껴져요.",
      user: "황** 고객님",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>실제 고객들의 후기</div>
        <div className={styles.upper_box}>
          <div className={styles.rate_box}>
            <div className={styles.rate_label}>평균평점</div>
            <div className={styles.rate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="rgb(53,197,240)"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <span className={styles.number}>4.8</span>
            </div>
          </div>
          <div className={styles.review_box}>
            <div className={styles.review_label}>인증리뷰</div>
            <span className={styles.review_text}>2,777건</span>
          </div>
        </div>
        <div className={styles.card_box}>
          {reviews.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.star_rate}>
                {[...Array(5)].map((n, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="rgb(53,197,240)"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ))}
              </div>
              <div className={styles.card_title}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
              <div className={styles.user}>{item.user}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertReview;
