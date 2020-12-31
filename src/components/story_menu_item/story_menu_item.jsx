import React from "react";
import styles from "./story_menu_item.module.css";

const StoryMenuItem = ({ description, title }) => {
  return (
    <div className={styles.menu_item}>
      <div>
        <div className={styles.description}>{description}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  );
};

export default StoryMenuItem;
