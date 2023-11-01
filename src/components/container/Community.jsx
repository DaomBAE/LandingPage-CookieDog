import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/SoundPackCarousel.css";

function Community() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2; // Adjusting total slide count to 2

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
            Community
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Direct to Artists, Direct to Fans! All artists can build their own fan communities on Cookiedog and have a differentiated communication experience.
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
          </Slider>
          {renderBarIndicator()}
        </div>
      </div>
    </div>
  );
}

export default Community;
