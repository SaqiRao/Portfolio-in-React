import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-4xl font-extrabold mb-4 tracking-tight">
          Let’s Work Together
        </h3>
        <p className="text-gray-400 text-lg mb-10">
          Have a project, idea or job opportunity? Feel free to reach out.
        </p>

        <a
          href="mailto:saqibraoofficial5@gmail.com"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 px-8 py-3 text-lg font-semibold rounded-full shadow-lg text-white transition duration-300"
        >
          <FaEnvelope className="text-xl" />
          Email Me
        </a>

      </div>
    </section>
  );
};

export default Contact;
