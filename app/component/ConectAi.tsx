import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#eef0f7] flex justify-center gap-32">
      
      {/* Left Content */}
      <div className="max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Connect AI to your <br />
          business knowledge today
        </h1>

        <p className="mt-4 text-gray-500">
          Build, test, and deploy custom GPT AI agents that answer with accuracy.
          Drive revenue, save time, delight customers.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Try free for 7 days
          </button>

          <button className="border px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            Talk to sales
          </button>
        </div>
      </div>

      {/* Right Graphic */}
      <div className="relative hidden lg:flex items-center justify-center w-[400px] h-[400px]">
        
        {/* Outer Circle */}
        <div className="w-full h-full rounded-full bg-white shadow-lg flex items-center justify-center relative">
          
          {/* Center */}
          <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
            ✦
          </div>

          {/* Floating Icons */}
          <div className="absolute top-10 left-10 w-12 h-12 bg-white shadow rounded-full flex items-center justify-center">
            ⚙️
          </div>

          <div className="absolute top-10 right-10 w-12 h-12 bg-white shadow rounded-full flex items-center justify-center">
            🧠
          </div>

          <div className="absolute bottom-10 left-10 w-12 h-12 bg-white shadow rounded-full flex items-center justify-center">
            💬
          </div>

          <div className="absolute bottom-10 right-10 w-12 h-12 bg-white shadow rounded-full flex items-center justify-center">
            📊
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;