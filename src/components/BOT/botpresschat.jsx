import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { MessageCircle } from "lucide-react";

const BotpressChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-black text-white p-2">
      <div className="text-center space-y-5">
        <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Welcome to Invest-IQ
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Explore our services and interact with our AI assistant for personalized help. Click the bot icon below to get started!
        </p>
      </div>

      <div className="absolute top-32 z-10 w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
        <Spline scene="https://prod.spline.design/Rh8Bo6LsLxP-ADbG/scene.splinecode" />
      </div>

      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-2xl transform transition-all ${
          isChatOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <div
        className={`fixed z-50 bottom-6 right-6 w-96 h-[550px] bg-gray-900 text-white rounded-3xl shadow-2xl border border-gray-700 transform transition-transform duration-500 cursor-pointer ${
          isChatOpen ? "translate-y-0 scale-100" : "translate-y-full scale-95"
        }`}
      >
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-3xl">
          <h3 className="text-lg font-bold">Chat with Us</h3>
          <button
            onClick={toggleChat}
            className="text-white hover:text-gray-300 transition-colors"
          >
            ✕
          </button>
        </div>

        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/16/08/20250316082012-E8HHIRQH.json"
          className="w-full h-full rounded-b-3xl"
          title="Botpress Chat"
        ></iframe>
      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-[150px] h-[150px] rounded-full bg-gradient-to-br from-purple-500 to-pink-600 blur-2xl opacity-40"></div>
        <div className="absolute top-10 left-10 w-[150px] h-[150px] rounded-full bg-gradient-to-br from-blue-400 to-teal-500 blur-2xl opacity-40"></div>
      </div>
    </div>
  );
};

export default BotpressChat;
