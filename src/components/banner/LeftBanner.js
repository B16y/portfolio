import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Youtuber.", "Software Engineer.", "DSA Enthusiast."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Bhavya Agarwal</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a passionate Computer Science undergraduate with expertise in full-stack web development, cloud computing, and event management. I have experience in building scalable applications and actively contribute to open-source communities. With strong problem-solving skills and a keen interest in **technology and innovation**, I thrive in dynamic and collaborative environments. 
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner