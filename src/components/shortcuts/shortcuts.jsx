import React from "react";
import ShortcutItem from "../shortcutItem/shortcutItem";
import bed from "../../images/bed.png";
import shopping from "../../images/shopping-cart.png";
import house from "../../images/house.png";
import livingroom from "../../images/livingroom.png";
import smartphone from "../../images/smartphone.png";
import kitchen from "../../images/kitchen.png";
import book from "../../images/book.png";
import question from "../../images/question.png";
import styles from "./shortcuts.module.css";

const Shortcuts = (props) => {
  return (
    <div className={styles.container}>
      <ShortcutItem description={"신혼가구"} img={bed} />
      <ShortcutItem description={"쇼핑하기"} img={shopping} />
      <ShortcutItem description={"평수별집구경"} img={house} />
      <ShortcutItem description={"공간별사진"} img={livingroom} />
      <ShortcutItem description={"시공업체추천"} img={smartphone} />
      <ShortcutItem description={"주방리모델링"} img={kitchen} />
      <ShortcutItem description={"가이드북"} img={book} />
      <ShortcutItem description={"질문과답변"} img={question} />
    </div>
  );
};

export default Shortcuts;
