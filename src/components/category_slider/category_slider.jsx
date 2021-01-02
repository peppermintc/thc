import React, { useRef } from "react";
import styles from "./category_slider.module.css";
import CategorySliderItem from "../category_slider_item/category_slider_item";
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";
import c5 from "../../images/c5.png";
import c6 from "../../images/c6.png";
import c7 from "../../images/c7.png";
import c8 from "../../images/c8.png";
import c9 from "../../images/c9.png";
import c10 from "../../images/c10.png";
import c11 from "../../images/c11.png";
import c12 from "../../images/c12.png";
import c13 from "../../images/c13.png";
import c14 from "../../images/c14.png";
import c15 from "../../images/c15.png";

const CategorySlider = (props) => {
  const myRef = useRef();
  const prevClick = () => {
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  const nextClick = () => {
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.title}>카테코리별 상품 찾기</div>
        <div className={styles.slider} ref={myRef}>
          <CategorySliderItem description={"가전"} img={c1} />
          <CategorySliderItem description={"가구"} img={c2} />
          <CategorySliderItem description={"패브릭"} img={c3} />
          <CategorySliderItem description={"홈데코"} img={c4} />
          <CategorySliderItem description={"수납/정리"} img={c5} />
          <CategorySliderItem description={"생활용품"} img={c6} />
          <CategorySliderItem description={"주방"} img={c7} />
          <CategorySliderItem description={"반려동물"} img={c8} />
          <CategorySliderItem description={"그릇/홈세트"} img={c9} />
          <CategorySliderItem description={"조명"} img={c10} />
          <CategorySliderItem description={"러그/카페트"} img={c11} />
          <CategorySliderItem description={"커튼/블라인드"} img={c12} />
          <CategorySliderItem description={"디자인문구"} img={c13} />
          <CategorySliderItem description={"수납가구"} img={c14} />
          <CategorySliderItem description={"욕실용품"} img={c15} />
        </div>

        <div className={styles.row}>
          <div className={styles.prev} onClick={prevClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              classnames="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <div className={styles.next} onClick={nextClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              classnames="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
