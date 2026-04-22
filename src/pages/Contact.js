import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sbqmz5a",
        "template_rjvf0gw",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message!");
        }
      );
  };

  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans">

      <Helmet>
        <title>Contact | Saqib Sajjad</title>
      </Helmet>

         {/* Hero */}
        <header className="bg-black py-32 px-8 text-center shadow-md">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            CONTACT <span className="text-cyan-400">ME</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind, need a WordPress developer, or want to collaborate?
            I’m always open to discussing new opportunities and creative ideas.
          </p>
        </header>

      <motion.section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {/* CONTACT INFO */}
          <div className="bg-gray-900 p-8 rounded-2xl">

            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <a href="mailto:saqibraoofficial5@gmail.com">
                  saqibraoofficial5@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <a href="tel:+923116700114">+92 311 6700114</a>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <p>Lahore, Pakistan</p>
              </div>

            </div>

            <div className="flex gap-5 text-2xl mt-6">

              <a href="https://wa.me/923116700114" className="hover:text-green-500">
                <FaWhatsapp />
              </a>

              <a href="https://www.linkedin.com/in/saqib-rao-wordpress-developer" className="hover:text-[#0077b5]">
                <FaLinkedin />
              </a>

              <a href="https://github.com/SaqiRao" className="hover:text-white">
                <FaGithub />
              </a>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-gray-900 p-8 rounded-2xl">

            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-[#1e2a47]"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-[#1e2a47]"
                required
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-[#1e2a47]"
                required
              />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-md flex justify-center items-center gap-2"
            >
              <FaEnvelope /> Send Message
            </button>

            </form>

          </div>

        </div>
      </motion.section>

    </main>
  );
};

export default ContactPage;