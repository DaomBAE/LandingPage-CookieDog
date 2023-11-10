import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
        
          <p className="text-sm text-center mb-0 md:text-left md:mb-0">
          © 2023 CookieDog, All rights reserved.
          </p>
      
        <nav className="flex gap-4 mb-4 md:mt-0">
          <Link to="/X">
            <img
              src="/images/twitter.svg" // X(twitter)
              alt="Twitter"
              className="w-6 h-6" // width: 24px, height: 24px
            />
          </Link>
          <Link to="/">
            <img
              src="/images/instagram.svg" // Instagram
              alt="Instagram"
              className="w-6 h-6"
            />
          </Link>
          <Link to="/">
            <img
              src="/images/youtube.svg" // Youtube
              alt="Youtube"
              className="w-6 h-6"
            />
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
