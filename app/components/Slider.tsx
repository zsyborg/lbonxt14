import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/Community.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="/slider2.jpeg" alt="Slide 2" />
      </div>
      <div>
        <img src="/slide1.jpeg" alt="Slide 3" />
      </div>
    </Slider>
  );
}

export default HomeSlider;