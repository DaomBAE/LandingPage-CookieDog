import React, { useRef, useEffect } from 'react';

function Withdraw() {
  const videoRef = useRef(null);

  useEffect(() => {
    // 비디오 요소가 로드되면 자동 재생하도록 설정
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // 자동 재생이 실패한 경우, 에러 처리 코드를 추가할 수 있습니다.
        console.error('자동 재생 실패:', error);
      });
    }
  }, []);

  return (
    <div className="bg-black">
      <div className="container mx-auto flex px-5 py-24 mt-14 md:flex-row flex-col items-centerer mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="flex flex-col mb-16 md:mb-0 items-center text-center md:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left">
          <h1 className="title-font sm:text-7xl text-6xl mb-4 mt-14 font-bold text-white font-sansation">
            Withdraw
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            You can freely withdraw money at any time and in any amount you want. You can withdraw in fiat or crypto currency.
          </p>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full ml-10 mt-10 md:mt-10">
          <video className="object-cover object-center rounded-none rounded-t-3xl shadow-xl" loop muted autoPlay ref={videoRef}>
            <source src="/videos/bg-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;





