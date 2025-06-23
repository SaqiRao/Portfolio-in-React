import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


const ContactPage = () => {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans">
      {/* SEO */}
      <Helmet>
        <title>Contact | Saqib Sajjad</title>
        <meta
          name="description"
          content="Get in touch with Saqib Sajjad for WordPress development, plugin customization, and web solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-black py-32 px-6 text-center shadow-lg"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white-500 mb-4 tracking-tight">
          Let's <span className="text-cyan-400">Connect</span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          I’m always open to discussing WordPress projects, creative ideas, or
          new opportunities.
        </p>
      </motion.header>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Have a project, idea or job opportunity? I’m open to new collaborations. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-cyan-400 text-2xl" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:saqibraoofficial5@gmail.com">saqibraoofficial5@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhone className="text-cyan-400 text-2xl" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+923116700114">+92 311 6700114</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p>Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-gray-700" />

              <p className="mb-3 text-gray-300">Connect with me</p>
              <div className="flex gap-5 text-2xl text-cyan-400">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="hover:text-pink-500" />
                </a>
                <a href="https://www.linkedin.com/in/saqibraowordpressdeveloper/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="hover:text-[#0077b5]" />
                </a>
                <a href="https://github.com/SaqiRao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="hover:text-white" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-[#1e2a47] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md bg-[#1e2a47] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 rounded-md bg-[#1e2a47] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-md flex justify-center items-center gap-2 transition"
                >
                  <FaEnvelope /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ContactPage;
