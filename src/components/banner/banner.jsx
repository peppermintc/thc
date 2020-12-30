import React from "react";
import styles from "./banner.module.css";
import leftBanner from "../../images/left_banner.png";
import profile from "../../images/profile.png";
import ImageSlider from "../image_slider/image_slider";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.banner_left}>
        <img
          className={styles.banner_left_background}
          src={leftBanner}
          alt="left banner"
        />
        <div>
          <span className={styles.banner_left_title}>
            방 3개 욕실 2개가 있는 25평 행복주택 스타일링
          </span>
          <div className={styles.banner_left_profile}>
            <img
              className={styles.banner_left_profile_image}
              src={profile}
              alt="profile"
            />
            <span>User ID</span>
          </div>
          <button className={styles.banner_left_button}>보러가기</button>
        </div>
      </div>
      <div className={styles.banner_right}>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Banner;
