import React from "react";
import styles from "./shortcutItem.module.css";

const ShortcutItem = ({ img, description }) => {
  return (
    <a className={styles.container}>
      <img className={styles.image} src={img} alt="icon" />
      <span className={styles.name}>{description}</span>
    </a>
  );
};

export default ShortcutItem;
