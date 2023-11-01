import React, { useState } from 'react';

function Register({ onRegister }) {
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
    onRegister(formData);
  };
  
  return (
    <div className="min-h-screen bg-black py-10 flex flex-col justify-center sm:py-12">
      <div className="container mx-auto my-20 flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-bold text-7xl text-white mb-4 font-sansation">Join Our Waitlist</h1>
          <p className="leading-relaxed mt-4 text-white">Register as an artist and showcase your portfolio to the world.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-white rounded-3xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md">
          <form>
            {/* Artist Name */}
            <div className="mt-8 mb-8 ml-2 mr-2">
              <label htmlFor="artistName" className="block text-sm font-medium text-gray-700">Artist Name</label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleInputChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
              />
            </div>

            {/* Email */}
            <div className="mt-8 mb-8 ml-2 mr-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
              />
            </div>

            {/* Social Media */}
            <div className="mt-8 mb-8 ml-2 mr-2">
              <label htmlFor="socialMedia" className="block text-sm font-medium text-gray-700">Social Media with Your Voice</label>
              <input
                type="text"
                id="socialMedia"
                name="sns"
                value={formData.sns}
                onChange={handleInputChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
              />
            </div>

            {/* Introduce */}
            <div className="mt-8 mb-8 ml-2 mr-2">
              <label htmlFor="introduce" className="block text-sm font-medium text-gray-700">Please Introduce Yourself!</label>
              <textarea
                id="introduce"
                name="introduce"
                value={formData.introduce}
                onChange={handleInputChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleRegisterClick}
                className="w-full inline-flex justify-center py-4 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-black bg-pink-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
