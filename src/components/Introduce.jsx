function Introduce() {

  const introduceStyle = {
    backgroundColor: '#3B3C3E', 
   
  };

  return (
    <div style={introduceStyle} className="max-w-screen-xl mx-auto m-5 h-96 flex flex-col justify-center items-center">
      <div className="mb-4 text-7xl text-white font-thin">MUSIC FOR SUPER FAN</div>
      <div className="border p-2 rounded-xl bg-white flex items-center">
        <div className="mr-6 ml-6">
          <div className="text-center font-bold">Download</div>
          <div className="font-bold">CookieDog</div>
        </div>
        {/* QR 코드 이미지 */}
        <img 
            src={process.env.PUBLIC_URL + '/images/qr-code-image.png'} 
            alt="Download CookieDog" 
            className="w-20 h-20"
        />
      </div>
    </div>
  );
}

export default Introduce;


