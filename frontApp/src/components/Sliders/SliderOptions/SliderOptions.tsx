import Slider from "react-slick";

import Card from "@components/Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOptions = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-6">
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

export default SliderOptions;