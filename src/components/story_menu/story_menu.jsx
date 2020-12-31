import React from "react";
import styles from "./story_menu.module.css";
import StoryMenuItem from "../story_menu_item/story_menu_item";

const StoryMenu = (props) => {
  return (
    <div className={styles.container}>
      <StoryMenuItem description={"예쁜 집 구경하기"} title={"집들이"} />
      <StoryMenuItem description={"전문가 시공사례"} title={"전문가 집들이"} />
      <StoryMenuItem description={"인테리어 꿀팁 총 집합"} title={"노하우"} />
    </div>
  );
};

export default StoryMenu;
