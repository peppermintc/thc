import React from "react";
import styles from "./expertService.module.css";

const ExpertService = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>다른 서비스가 필요하세요?</div>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <div className={styles.button_title}>
              시공스토어
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
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
            <div className={styles.button_description}>
              믿을만한 시공 상품을 둘러보세요. 가이드 가격과 자세한 설명을
              준비했어요.
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.button_title}>
              우리지역업체 찾기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
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
            <div className={styles.button_description}>
              한 가지 개별 시공은 오늘의집에 등록된 4,000여 개별 시공 업체 중에
              직접 찾아볼 수 있어요.
            </div>
          </div>
        </div>
        <div className={styles.simple_button}>간편상담신청</div>
      </div>
    </div>
  );
};

export default ExpertService;
