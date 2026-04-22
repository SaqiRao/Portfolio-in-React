import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 font-semibold">
            CodeWithSaqib
          </span>
          . All rights reserved.
        </p>

        <div className="flex space-x-4 text-xl text-cyan-400">

          {/* WhatsApp */}
          <a
            href="https://wa.me/923116700114"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500"
          >
            <FaWhatsapp />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saqib-rao-wordpress-developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0077b5]"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SaqiRao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FaGithub />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;