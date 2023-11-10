import React, { useEffect, useState, useCallback } from 'react';
import QRModal from '../presentational/QRModal'; 

function Header() {
  const [isOpaque, setIsOpaque] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const threshold = 100;

    if (scrollY > threshold && !isModalOpen) {
      setIsOpaque(false);
    } else {
      setIsOpaque(true);
    }
  }, [isModalOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleMouseEnterButton = () => {
    setIsHovered(true);
    setShowTooltip(true);
  };

  const handleMouseLeaveButton = () => {
    setIsHovered(false);
    setShowTooltip(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`header mx-auto my-auto flex justify-between items-center w-full px-2 ${
        isOpaque ? 'bg-transparent' : 'bg-transparent'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        zIndex: 999,
        borderBottomLeftRadius: '26px',
        borderBottomRightRadius: '26px',
        backgroundColor: isOpaque ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.3)',
        transition: 'background-color 0.3s',
        backdropFilter: isOpaque ? 'none' : 'blur(10px)'
      }}
    >
      <div className="flex items-center">
        <img
          src="/images/cookiedog-logo.png"
          alt="로고"
          className="w-auto h-12 ml-8 shadow-2xl"
        />
      </div>
      <div className="flex items-center relative mr-8 shadow-2xl">
        <button
          type="button"
          onClick={openModal}
          onMouseEnter={handleMouseEnterButton}
          onMouseLeave={handleMouseLeaveButton}
          className={`px-5 py-2 rounded-xl flex items-center ${
            isHovered ? 'bg-pink-600' : 'bg-pink-400'
          } text-black`}
          style={{ 
            transition: 'background-color 0.3s',
          }}
        >
          Download QR
        </button>

        {showTooltip && (
          <div className="tooltip"
            style={{ 
              position: 'absolute', 
              top: '50%', 
              right: '105%',
              transform: 'translateY(-50%)', 
              background: 'linear-gradient(to right, #7DD3FC, #38BDF8)',
              color: 'black', 
              padding: '5px 10px', 
              borderRadius: '10px', 
              fontSize: '0.875rem', 
              fontWeight: 'bold', 
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
              whiteSpace: 'nowrap', 
              border: '2px solid #333',
              marginLeft: '-10px' 
            }}
          >
            Be My Crewww!
          </div>
        )}
      </div>
      {isModalOpen && <QRModal onClose={closeModal} />}
    </div>
  );
}

export default Header;
