import React, { useState } from "react";
import styles from "./expertButtons.module.css";

const ExpertButtons = () => {
  const [leftClicked, setLeftClicked] = useState(true);

  const toggleClick = () => {
    setLeftClicked(!leftClicked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div
          className={
            leftClicked
              ? `${styles.leftButton} ${styles.selected}`
              : `${styles.leftButton}`
          }
          onClick={toggleClick}
        >
          업체 추천
        </div>
        <div
          className={
            !leftClicked
              ? `${styles.rightButton} ${styles.selected}`
              : `${styles.rightButton}`
          }
          onClick={toggleClick}
        >
          업체 탐색
        </div>
      </div>
    </div>
  );
};

export default ExpertButtons;
