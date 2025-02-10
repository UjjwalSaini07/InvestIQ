import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ujjwal from "../../assets/Landing/BoyImage.jpg";
import gayatri from "../../assets/Landing/GirlImage.jpg";

const TeamCard = ({ image, name, description, github, linkedin }) => (
  <div className="relative group w-80 md:w-100 mb-10 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-[0px_5px_15px_rgba(59,130,246,0.5)] bg-opacity-30 backdrop-blur-lg border border-gray-700">
    <img
      src={image}
      alt={name}
      className="w-full h-100 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
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

const TechSavvyTeam = () => (
  <div className="flex flex-col items-center justify-center gap-10">
    <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white">
      Meet Our
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md">
        {" "}Tech-Savvy Team
      </span>
    </h1>
    <div className="flex flex-wrap justify-center gap-8">
      <TeamCard
        image={ujjwal}
        name="Ujjwal Saini"
        description="Creative Frontend Developer with a passion for UI/UX."
        github="https://github.com/UjjwalSaini07"
        linkedin="https://www.linkedin.com/in/ujjwalsaini07/"
      />
      <TeamCard
        image={gayatri}
        name="Gayatri Singh"
        description="Solving complex problems with elegant code and Designing."
        github="https://github.com/Gayatrisin123"
        linkedin="https://www.linkedin.com/in/gayatri-singh-5012b5301/"
      />
    </div>
  </div>
);

export default TechSavvyTeam;
