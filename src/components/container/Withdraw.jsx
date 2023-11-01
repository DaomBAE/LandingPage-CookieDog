import React from 'react';

function Withdraw() {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex px-5 py-24 mb-20 md:flex-row flex-col items-center">
        <div className="flex flex-col mb-16 md:mb-0 items-center text-center md:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left">
        <h1 className="title-font sm:text-7xl text-6xl mb-4 font-bold text-white font-sansation">
            Withdraw
          </h1>
          <p className="mb-8 leading-relaxed text-white">
          You can freely withdraw money at any time and in any amount you want. You can withdraw in fiat or crypto currency.
          </p>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mt-10 md:mt-0">
          <img className="object-cover object-center rounded-3xl shadow-xl" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
