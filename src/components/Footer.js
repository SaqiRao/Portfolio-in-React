import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tight font-semibold">
            CodeWithSaqib
          </span>
          . All rights reserved.
        </p>

        <div className="flex space-x-4 text-xl text-cyan-400">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaTwitter className="hover:text-pink-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/saqibraowordpressdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-[#0077b5]" />
          </a>
          <a
            href="https://github.com/SaqiRao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
