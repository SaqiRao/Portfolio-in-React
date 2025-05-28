// src/components/Hero.jsx

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="flex flex-col justify-center items-center h-screen text-center px-4 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://your-image-url.com/background.jpg')", // Replace with your image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
          Hi, I'm <span className="text-blue-500">Saqib Rao</span>
        </h2>

        <div className="text-xl md:text-2xl text-blue-400 font-medium">
          <TypeAnimation
            sequence={[
              "Full-Stack Wordpress Developer", 2000,
              "WordPress Expert", 2000,
              "React Enthusiast", 2000,
              "WooCommerce Specialist", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-4">
          I build modern, scalable, and high-performance web applications. Let's bring ideas to life through clean code and creative problem-solving.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        {/* Download CV Button */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold transition duration-300"
          >
            Download CV
          </a>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold"
          >
            Hire Me
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-70 animate-bounce">
          <FaArrowDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
