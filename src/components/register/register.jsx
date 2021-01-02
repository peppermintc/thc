import React from "react";
import styles from "./register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.open}>OPEN</span>
        <span className={styles.text1}>전문가 가입신청</span>
        <span className={styles.text2}>
          인테리어 전문가님! 오늘의집과 함께하세요
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <div className={styles.box}>
        <span className={styles.text1}>사업자 구매 회원 전환</span>
        <span className={styles.text2}>
          사업자 회원에게 구매 시 혜택을 드립니다
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Register;
