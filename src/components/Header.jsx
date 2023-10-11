function Header() {
  const handleClick = () => {
    alert('Want to join us?');
  };

  return (
    <header className="bg-cyan-100 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center p-1 md:p-2">
        <div>
          <div>CookieDog</div>
        </div>
        <ul className="flex text-xs md:text-base gap-2 md:gap-8">
          <li>
            <button
              type="button"
              onClick={handleClick}
              className="bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-500 transition-colors"
            >
              Artist Register
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
