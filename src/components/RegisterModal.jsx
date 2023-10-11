import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 

function RegisterModal({ isOpen, onClose, onRegister }) {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    sns: '',
    introduce: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegisterClick = () => {
    // 데이터 콘솔 기록
    onRegister(formData);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-xl z-10 w-96"> 
        <form>
          {/* 클로즈 아이콘 추가 */}
          <div className="text-right mb-4">
            <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <FaTimes style={{ fontSize: '20px' }} />
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="artistName">Artist Name</label>
            <input
              type="text"
              id="artistName"
              name="artistName"
              value={formData.artistName}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="social media">Social Media</label>
            <input
              type="text"
              id="social media"
              name="social media"
              value={formData.sns}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="introduce">Introduce</label>
            <textarea
              id="introduce"
              name="introduce"
              value={formData.introduce}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleRegisterClick}
              className="bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-500 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
