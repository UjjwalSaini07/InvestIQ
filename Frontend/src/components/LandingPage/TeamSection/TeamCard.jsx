import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

import ujjwal from "../../../assets/Landing/BoyImage.jpg";
import gayatri from "../../../assets/Landing/GirlImage2.png";

const TeamCard = ({ image, name, description, github, twitter, linkedin }) => (
  <div
    data-aos="fade-right"
    className="relative group w-80 md:w-100 mb-10 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-[0px_5px_15px_rgba(59,130,246,0.5)] bg-opacity-30 backdrop-blur-lg border border-gray-700"
  >
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

    <div className="absolute bottom-0 w-full px-6 py-5 bg-black/50 backdrop-blur-xl rounded-b-3xl transition-all duration-300 group-hover:bg-black/60">
      <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg text-center">
        {name}
      </h2>
      <p className="text-sm text-gray-300 text-center">{description}</p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub className="text-white text-3xl hover:text-gray-300 transition-colors" />
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaXTwitter className="text-white text-3xl hover:text-gray-300 transition-colors" />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin className="text-white text-3xl hover:text-gray-300 transition-colors" />
        </a>
      </div>
    </div>
  </div>
);

const TeamName = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 25,
      duration: 2000,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-7">
      <div data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white">
          Meet Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md">
            {" "}
            U&G Trailblazers
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div data-aos="flip-left">
          <TeamCard
            image={ujjwal}
            name="Ujjwal Saini"
            description="Creative Frontend Developer with UI/UX design, with expertise in backend API integration for dynamic solutions."
            github="https://github.com/UjjwalSaini07"
            twitter="https://x.com/UjjwalSaini0007"
            linkedin="https://www.linkedin.com/in/ujjwalsaini07/"
          />
        </div>

        <div data-aos="flip-right">
          <TeamCard
            image={gayatri}
            name="Gayatri Singh"
            description="Crafting elegant code and designs to solve complex problems with creativity and precision."
            github="https://github.com/Gayatrisin123"
            twitter="#"
            linkedin="https://www.linkedin.com/in/gayatri-singh-5012b5301/"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamName;
