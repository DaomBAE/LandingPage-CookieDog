import React, { useState } from 'react';
import RegisterModal from './RegisterModal';

function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRegister = (formData) => {
    console.log('Form Data:', formData);
    closeModal();
  };

  return (
    <div className="bg-indigo-100 max-w-screen-xl mx-5 h-96 rounded-3xl flex justify-center items-center">
      <div className="bg-white p-10 rounded-3xl text-center h-60">
        <p className="text-lg font-semibold mb-4">
          Release SoundPack and Meet Your Super Fans!
        </p>
        <p className="text-md">
          Be one of the 111 genesis artists of “cookiedog”
        </p>
        <p className="text-md">
          You will receive a symbolic badge from cookiedog
        </p>
        <p className="text-md">
          It is non-exchangeable and can guarantee you
        </p>
        <button
          className="mt-4 bg-gray-500 text-white px-5 py-2 rounded-full hover:bg-gray-500 transition-colors"
          onClick={openModal}
        >
          Register
        </button>
      </div>

      <RegisterModal isOpen={isModalOpen} onClose={closeModal} onRegister={handleRegister} />
    </div>
  );
}

export default Register;
