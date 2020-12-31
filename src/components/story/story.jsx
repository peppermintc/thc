import React from "react";
import styles from "./story.module.css";
import StoryMenu from "../story_menu/story_menu";
import StoryCardList from "../story_card_list/story_card_list";

const Story = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>오늘의 스토리</div>
      <div className={styles.cards}>
        <StoryCardList />
        <StoryMenu />
      </div>
    </div>
  );
};

export default Story;
