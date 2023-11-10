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

  const handleRegisterClick = async () => {
    try {
      const response = await fetch('https://api.cookiedog.xyz/artist/wait-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.artistName,
          email: formData.email,
          link: formData.sns,
          introduce: formData.introduce,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        onRegister(result);
      } else {
        console.error('Failed to register:', response);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div className="min-h-screen bg-black py-10 flex flex-col justify-center sm:py-12">
      <div className="container mx-auto flex px-5 py-24 mt-14 md:flex-row flex-col items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-bold text-7xl text-white mb-4 font-sansation">Join Our Waitlist</h1>
          <p className="leading-relaxed mt-4 text-gray-300">Register as an artist and showcase your portfolio to the world.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-60 rounded-3xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md">
          <form>
            {/* Artist Name */}
            <div className="mb-8 ml-2 mr-2">
              <label htmlFor="artistName" className="block text-sm font-medium text-gray-300">Artist Name</label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleInputChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-lg bg-gray-800 bg-opacity-60 text-white"
              />
            </div>

            {/* Email */}
            <div className="mb-8 ml-2 mr-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-lg bg-gray-800 bg-opacity-60  text-white"
              />
            </div>

            {/* Social Media */}
            <div className="mb-8 ml-2 mr-2">
              <label htmlFor="socialMedia" className="block text-sm font-medium text-gray-300">Social Media with Your Voice</label>
              <input
                type="text"
                id="socialMedia"
                name="sns"
                value={formData.sns}
                onChange={handleInputChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-lg bg-gray-800 bg-opacity-60 text-white"
              />
            </div>

            {/* Introduce */}
            <div className="mb-8 ml-2 mr-2">
              <label htmlFor="introduce" className="block text-sm font-medium text-gray-300">Please Introduce Yourself!</label>
              <textarea
                id="introduce"
                name="introduce"
                value={formData.introduce}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-lg bg-gray-800 bg-opacity-60  text-white"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleRegisterClick}
                className="w-full inline-flex justify-center py-4 px-4 border border-transparent shadow-sm text-sm font-medium rounded-xl text-black bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
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
