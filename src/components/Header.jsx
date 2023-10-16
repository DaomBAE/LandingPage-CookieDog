function Header() {
  const handleClick = () => {
  };

  return (
    <div className="bg-purple-200 h-16 rounded-full mx-auto mt-5 h-full flex justify-between items-center w-full">
      <div>
        <div>CookieDog</div>
      </div>
      <ul className="flex text-xs md:text-base gap-2 md:gap-8">
        <li>
          <button
            type="button"
            onClick={handleClick}
            className="bg-gray-600 text-white px-3 py-3 rounded-full hover:bg-gray-500 transition-colors"
          >
            Artist Register
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
