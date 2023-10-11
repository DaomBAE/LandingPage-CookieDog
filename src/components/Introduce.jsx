function Introduce() {
  return (
    <div className="bg-purple-100 max-w-screen-xl mx-auto h-96 flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">MUSIC FOR SUPER FAN</div>
      <div className="border p-2 rounded-xl bg-white flex items-center">
        <div className="mr-6 ml-6">
          <div className="text-center">Download</div>
          <div>CookieDog</div>
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


