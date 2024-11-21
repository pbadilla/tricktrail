import React from "react";
import Slider from "react-slick";

import Card from "@components/Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderList = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-6">
      <h2 className="mb-3">Title Section</h2>
      <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </Slider>
    </div>
  );
}

export default SliderList;