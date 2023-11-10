import React, { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

function DiscoverInfo() {
  const [isHovered, setIsHovered] = useState({ card1: false, card2: false, card3: false });

  const handleMouseEnter = (card) => setIsHovered({ ...isHovered, [card]: true });
  const handleMouseLeave = (card) => setIsHovered({ ...isHovered, [card]: false });

  return (
    <div className="container mx-auto mt-4 sm:mt-6 md:mt-8 px-2 sm:px-2 md:px-4 lg:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-4 mb-16 justify-center">
        
        {/* First card */}
        <div className="bg-black bg-opacity-70 rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <img src="path/to/your/image1.jpg" alt="SOUNDPACK" className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"/>
            <h4 className="text-xl font-bold font-sansation text-white">Release</h4>
            <h3 className="text-4xl font-bold font-sansation mt-4 text-white"> 
              SOUND PACK
            </h3>
            <p className="mt-4 text-xl font-medium font-sansation text-white">For Your Super Fan</p> 
          </div>
          <button
            type="button"
            onMouseEnter={() => handleMouseEnter('card1')}
            onMouseLeave={() => handleMouseLeave('card1')}
            className={`mt-4 px-5 py-3 rounded-xl flex items-center justify-center ${
              isHovered.card1 ? 'bg-gray-900' : 'bg-gray-800' 
            } text-white transition-colors duration-150`}
          >
            <span>See All</span>
            <div className={`px-4 py-0.5 rounded-lg ml-4 ${isHovered.card1 ? 'bg-pink-600' : 'bg-pink-400'}`}>
              <HiOutlineArrowRight size={24} className="text-black" />
            </div>
          </button>
        </div>

        {/* Second card */}
        <div className="bg-black bg-opacity-70 rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <img src="path/to/your/image2.jpg" alt="COMMUNITY" className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"/>
            <h3 className="text-xl font-bold font-sansation text-white">Connect & Build</h3>
            <p className="text-4xl font-bold font-sansation mt-4 text-white">
              COMMUNITY
            </p>
            <p className="mt-4 text-xl font-medium font-sansation text-white">For Your Super Fan</p> 
          </div>
          <button
            type="button"
            onMouseEnter={() => handleMouseEnter('card2')}
            onMouseLeave={() => handleMouseLeave('card2')}
            className={`mt-4 px-5 py-3 rounded-xl flex items-center justify-center ${
              isHovered.card2 ? 'bg-gray-900' : 'bg-gray-800' 
            } text-white transition-colors duration-150`}
          >
            <span>See All</span>
            <div className={`px-4 py-0.5 rounded-lg ml-4 ${isHovered.card2 ? 'bg-pink-600' : 'bg-pink-400'}`}>
              <HiOutlineArrowRight size={24} className="text-black" />
            </div>
          </button>
        </div>

        {/* Third card */}
        <div className="bg-black bg-opacity-70 rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <img src="path/to/your/image3.jpg" alt="WITHDRAW" className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"/>
            <h3 className="text-xl font-bold font-sansation text-white">Fast & Transparent</h3>
            <h2 className="text-4xl font-bold font-sansation mt-4 text-white"> 
              WITHDRAW
            </h2>
            <p className="mt-4 text-xl font-medium font-sansation text-white">For Your Super Fan</p> 
          </div>
          <button
            type="button"
            onMouseEnter={() => handleMouseEnter('card3')}
            onMouseLeave={() => handleMouseLeave('card3')}
            className={`mt-4 px-5 py-3 rounded-xl flex items-center justify-center ${
              isHovered.card3 ? 'bg-gray-900' : 'bg-gray-800' 
            } text-white transition-colors duration-150`}
          >
            <span>See All</span>
            <div className={`px-4 py-0.5 rounded-lg ml-4 ${isHovered.card3 ? 'bg-pink-600' : 'bg-pink-400'}`}>
              <HiOutlineArrowRight size={24} className="text-black" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}

export default DiscoverInfo;
