import React from "react";
import StoryCardListItem from "../story_card_list_item/story_card_list_item";
import styles from "./story_card_list.module.css";
import placeholder1 from "../../images/placeholder.png";
import placeholder2 from "../../images/placeholder2.png";
import placeholder3 from "../../images/left_banner.png";

const StoryCardList = (props) => {
  return (
    <div className={styles.container}>
      <StoryCardListItem
        title={"화이트 & 우드톤 리모델링"}
        description={"채광 좋은 30평대 신혼집"}
        image={placeholder1}
      />
      <StoryCardListItem
        title={"싱글하우스"}
        description={"새하얀 도화지에 초록 싱그러움 가득"}
        image={placeholder2}
      />
      <StoryCardListItem
        title={"모던 & 심플"}
        description={"라이프 스타일에 맞춰 설계"}
        image={placeholder3}
      />
    </div>
  );
};

export default StoryCardList;
