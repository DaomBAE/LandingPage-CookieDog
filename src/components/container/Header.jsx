import React, { useEffect, useState } from 'react';
import QRModal from '../presentational/QRModal'; 

function Header() {
  
  const [isOpaque, setIsOpaque] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;

    if (scrollY > threshold && !isModalOpen) { 
      setIsOpaque(false);
    } else {
      setIsOpaque(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },); 
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div
      className={`mx-auto my-auto flex justify-between items-center w-full px-6 ${
        isOpaque ? 'bg-transparent' : 'bg-transparent'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        zIndex: 999,
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        backgroundColor: isOpaque ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.3)',
        transition: 'background-colors',
        backdropFilter: isOpaque ? 'none' : 'blur(10px)'
      }}
    >
      <div className="flex items-center">
        <img
          src="/images/neon.png"
          alt="로고"
          className="w-auto, h-14 ml-2"
        />
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={openModal} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`px-5 py-3 rounded-xl flex items-center ${
            isHovered ? 'bg-gray-900' : 'bg-slate-800'
          } text-white`}
          style={{ 
            transition: 'background-color',
          }}
        >
          <div>
            Download QR
          </div>
        </button>
      </div>
      {isModalOpen && <QRModal onClose={closeModal} />} 
    </div>
  );
}

export default Header;
