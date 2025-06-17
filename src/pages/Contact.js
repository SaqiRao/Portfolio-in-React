import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-4 tracking-tight">
          Let's Connect
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
        <div className="max-w-4xl mx-auto">
          {/* Contact Form Component */}
          <Contact />

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              Want to work together?
            </h2>
            <a
              href="mailto:saqibraoofficial5@gmail.com"
              className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
            >
              Hire Me
            </a>

            {/* Social Links */}
            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-10 text-2xl">
              <a
                href="https://github.com/SaqiRao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/saqibraowordpressdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ContactPage;
