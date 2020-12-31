import React from "react";
import styles from "./category_slider.module.css";
import Slider from "react-slick";
import CategorySliderItem from "../category_slider_item/category_slider_item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bed from "../../images/bed.png";
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "none",
        right: "-10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "none",
        left: "-25px",
      }}
      onClick={onClick}
    />
  );
}

const CategorySlider = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.title}>카테코리별 상품 찾기</div>
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
