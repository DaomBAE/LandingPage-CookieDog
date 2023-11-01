import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/images/logo.svg" // 로고 이미지
            alt="Logo"
            className="w-9 h-9 mr-3" // width: 36px, height: 36px
          />
          <p className="text-sm">Copyright © 2023 by CookieDog - All right reserved</p>
        </div>
        <nav className="flex gap-4">
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
