import React from 'react';
import "../Styles/SoundPackCarousel.css";

function Community() {
  return (
    <div
      className="flex justify-center items-center w-full h-screen mt-14"
      style={{
        backgroundImage: "url('/images/community.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="flex flex-col mb-16 md:mb-0 items-center text-center md:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left">
          <h1 className="title-font sm:text-7xl text-6xl mb-4 mt-14 font-bold text-white font-sansation">
            Community
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Direct to Artists, Direct to Fans! All artists can build their own fan communities on Cookiedog and have a differentiated communication experience.
          </p>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mt-10 md:mt-0">
          <img src="/images/phone.png" alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default Community;
