import slider1 from "../../assets/img/slider-1.webp";
import slider2 from "../../assets/img/slider-2.webp";
import slider3 from "../../assets/img/slider-3.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../slick-slider";
import Slider from "react-slick";

function Banner() {
  return (
    <>
      <div className="banner">
        <Slider {...settings}>
          <div className="banner-item">
            <img src={slider1} alt="" />
          </div>
          <div className="banner-item">
            <img src={slider2} alt="" />
          </div>
          <div className="banner-item">
            <img src={slider3} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Banner;
