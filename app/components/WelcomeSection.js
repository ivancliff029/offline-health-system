import React from 'react';

const FullScreenSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/img/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Welcome to HealthSMS
        </h1>

        
        <h2 className="text-2xl sm:text-3xl font-medium mb-6">
          Your Health, Our Priority
        </h2>

        <p className="text-lg sm:text-xl max-w-2xl">
          Get instant health and first-aid advice via SMS from professionals. 
          We're here to guide you every step of the way, anytime, anywhere.
        </p>
      </div>
    </div>
  );
};

export default FullScreenSection;
