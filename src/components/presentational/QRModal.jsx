import React from 'react';
import { IoClose } from 'react-icons/io5';

function QRModal({ onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black rounded-3xl shadow-lg flex items-center relative">
        {/* QR 코드 이미지 */}
        <img 
          src="/images/qr-white.png"
          alt="Download CookieDog" 
          className="rounded-xl"
          style={{ width: '300px', height: 'auto' }}
        />

        {/* 텍스트 및 닫기 버튼 */}
        <div className="flex flex-col justify-center">
          <button onClick={onClose} className="absolute top-4 right-3 text-black text-lg bg-pink-400 rounded-full p-1">
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default QRModal;




