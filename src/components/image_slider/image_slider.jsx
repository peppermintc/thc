import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import icon from "../../images/icon.png";
import styles from "./image_slider.module.css";

const ImageSlider = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.container}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={icon} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={icon} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={icon} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
