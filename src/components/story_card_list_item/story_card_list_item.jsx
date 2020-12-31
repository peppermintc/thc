import React from "react";
import profile from "../../images/profile.png";
import styles from "./story_card_list_item.module.css";

const StoryCardListItem = ({ title, description, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.photo_box}>
        <img className={styles.photo} src={image} alt="story" />
      </div>
      <div className={styles.inner}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <img className={styles.profile_image} src={profile} alt="profile" />
        <span className={styles.user_name}>User ID</span>
      </div>
    </div>
  );
};

export default StoryCardListItem;
