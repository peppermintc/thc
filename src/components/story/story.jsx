import React from "react";
import StoryMenu from "../story_menu/story_menu";

const Story = (props) => {
  return (
    <div>
      <span>오늘의 스토리</span>
      {/* <StoryCardList /> */}
      <StoryMenu />
    </div>
  );
};

export default Story;
