import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/SoundPackCarousel.css";

function SoundPack() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3; //슬라이드 총 개수

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    afterChange: current => setActiveSlide(current),
  };

  const renderBarIndicator = () => {
    return (
      <div className="bar-indicator">
        <div 
          className="bar-indicator-fill" 
          style={{ width: `${(activeSlide / (totalSlides - 1)) * 100}%` }} 
        />
      </div>
    );
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="flex flex-col mb-16 md:mb-0 items-center text-center md:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left">
          <h1 className="title-font sm:text-7xl text-6xl mb-4 font-bold text-white font-sansation">
            Sound Pack
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Sound Pack is a digital music album for your super fans. This is a great way to connect with your super fans and reach new ones.
          </p>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mt-10 md:mt-0">
          <Slider {...settings} className="shadow-lg rounded-top overflow-hidden">
            <div>
              <img src="https://dummyimage.com/720x600" alt="image1" />
            </div>
            <div>
              <img src="https://dummyimage.com/720x600/ccc/fff" alt="image2" />
            </div>
            <div>
              <img src="https://dummyimage.com/720x600/f3f3f3/333" alt="image3" />
            </div>
          </Slider>
          {renderBarIndicator()}
        </div>
      </div>
    </div>
  );
}

export default SoundPack;
