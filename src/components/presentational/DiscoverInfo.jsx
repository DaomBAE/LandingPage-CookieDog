import React, { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

function DiscoverInfo() {
  // 각 카드의 호버 상태를 관리하기 위한 상태
  const [isHovered, setIsHovered] = useState({ card1: false, card2: false, card3: false });

  // 마우스 호버 상태 변경 함수
  const handleMouseEnter = (card) => setIsHovered({ ...isHovered, [card]: true });
  const handleMouseLeave = (card) => setIsHovered({ ...isHovered, [card]: false });

  return (
    <div className="container mx-auto mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
        
        {/* 카드 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 flex flex-col items-start">
          <img src="path/to/your/image1.jpg" alt="SOUNDPACK" className="w-24 h-24 object-cover rounded-full mb-4"/>
          <h4 className="text-lg sm:text-xl font-bold font-sansation text-left">Release</h4>
          <h3 className="text-left text-2xl sm:text-3xl md:text-4xl font-bold font-sansation mt-4">
            SOUND PACK
          </h3>
          <p className="text-left mt-4 text-base sm:text-lg font-medium font-sansation">For Your Super Fan</p>
          <button
            type="button"
            onMouseEnter={() => handleMouseEnter('card1')}
            onMouseLeave={() => handleMouseLeave('card1')}
            className={`mt-4 px-5 py-3 rounded-xl flex items-center justify-center ${
              isHovered.card1 ? 'bg-gray-900' : 'bg-gray-800' 
            } text-white transition-colors duration-150`}
          >
            <span>See All</span>
            <div className={`px-4 py-1 rounded-lg ml-4 ${isHovered.card1 ? 'bg-green-600' : 'bg-green-400'}`}>
              <HiOutlineArrowRight size={20} color="black" />
            </div>
          </button>
        </div>

        {/* 카드 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 flex flex-col items-start">
          <img src="path/to/your/image2.jpg" alt="COMMUNITY" className="w-24 h-24 object-cover rounded-full mb-4"/>
          <h3 className="text-lg sm:text-xl font-bold font-sansation text-left">Connect & Build</h3>
          <p className="text-left text-2xl sm:text-3xl md:text-4xl font-bold font-sansation mt-4">
            COMMUNITY
          </p>
          <p className="text-left mt-4 text-base sm:text-lg font-medium font-sansation">For Your Super Fan</p>
          <button
            type="button"
            onMouseEnter={() => handleMouseEnter('card2')}
            onMouseLeave={() => handleMouseLeave('card2')}
            className={`mt-4 px-5 py-3 rounded-xl flex items-center justify-center ${
              isHovered.card2 ? 'bg-gray-900' : 'bg-gray-800' 
            } text-white transition-colors duration-150`}
          >
            <span>See All</span>
            <div className={`px-4 py-1 rounded-lg ml-4 ${isHovered.card2 ? 'bg-green-600' : 'bg-green-400'}`}>
              <HiOutlineArrowRight size={20} color="black" />
            </div>
          </button>
        </div>

        {/* 카드 3 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 flex flex-col items-start">
          <img src="path/to/your/image3.jpg" alt="WITHDRAW" className="w-24 h-24 object-cover rounded-full mb-4"/>
          <h3 className="text-lg sm:text-xl font-bold font-sansation text-left">Fast & Transparent</h3>
          <h2 className="text-left text-2xl sm:text-3xl md:text-4xl font-bold font-sansation mt-4">
            WITHDRAW
          </h2>
          
          <p className="text-left mt-4 text-base sm:text-lg font-medium font-sansation">For Your Super Fan</p>
          <button
            type="button"
            onMouseEnter={() => handleMouseEnter('card3')}
            onMouseLeave={() => handleMouseLeave('card3')}
            className={`mt-4 px-5 py-3 rounded-xl flex items-center justify-center ${
              isHovered.card3 ? 'bg-gray-900' : 'bg-gray-800' 
            } text-white transition-colors duration-150`}
          >
            <span>See All</span>
            <div className={`px-4 py-1 rounded-lg ml-4 ${isHovered.card3 ? 'bg-green-600' : 'bg-green-400'}`}>
              <HiOutlineArrowRight size={20} color="black" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}

export default DiscoverInfo;


