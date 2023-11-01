import React, { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom'; 

function Introduce() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); 

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex justify-center items-center w-full h-screen mt-10">
      <div
        className="hero max-w-screen-xl py-20 mx-5 mb-5 flex-col justify-center items-center bg-white rounded-3xl"
        style={{ 
          borderRadius: '2rem',
          backgroundImage: "url('/images/1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl md:text-7xl font-normal text-black">MUSIC FOR SUPER FAN</h1>
            <p className="pt-6 text-black">Support artists. Promise to fan.</p>
            <p className="pb-6 text-black">Prove in blockchain. Build community.</p>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={navigateToRegister}
                className={`px-5 py-3 rounded-xl flex items-center justify-center ${isHovered ? 'bg-gray-900' : 'bg-gray-800'} text-white relative`}
                style={{ transition: 'background-color 0.1s' }}
              >
                <span className="text-white">Join Waitlist</span>
                <div className={`px-4 py-1 rounded-lg ml-4 flex items-center justify-center ${isHovered ? 'bg-blue-400' : 'bg-pink-400'}`}>
                  <HiOutlineArrowRight size={20} color="black" />
                  {isHovered && (
                    <div className="tooltip" style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#4ADE80', color: 'black', padding: '5px 10px', borderRadius: '10px', fontSize: '0.875rem', fontWeight: 'bold', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', whiteSpace: 'nowrap',border: '2px solid #333' }}>
                      Dive into Cookiedog!
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
