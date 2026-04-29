import React from "react";
import { Helmet } from "react-helmet";
import { FaBriefcase, FaProjectDiagram, FaSmile, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    { icon: <FaBriefcase />, num: "4+", label: "Years Experience" },
    { icon: <FaProjectDiagram />, num: "50+", label: "Projects Completed" },
    { icon: <FaSmile />, num: "100%", label: "Client Satisfaction" },
    { icon: <FaHeadset />, num: "24/7", label: "Support" },
  ];

  return (
    <main className="bg-[#0b0f14] text-white">

      <Helmet>
        <title>About | Saqib Sajjad</title>
      </Helmet>

      {/* HERO */}
      <section className="py-28 px-6 text-center bg-gradient-to-b from-[#0b0f14] to-[#0d1117]">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          About <span className="text-cyan-400">Me</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          I build high-performance WordPress solutions that help businesses scale, convert, and stand out.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Work With Me
          </Link>
        </div>
      </section>

      {/* PROFILE */}
      <section className="py-20 px-6 py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <img
              src="images/Image.jpg"
              alt="Saqib Sajjad"
              className="relative rounded-2xl w-72 h-72 object-cover shadow-2xl"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Hi, I'm <span className="text-cyan-400">Saqib</span>
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed">
              I’m a WordPress developer with 4+ years of experience building custom themes,
              plugins, and high-performance websites using PHP and REST APIs.
            </p>

            <p className="text-gray-400 mb-4 leading-relaxed">
              I focus on creating scalable, secure, and conversion-driven solutions for businesses.
              Whether it’s eCommerce, custom functionality, or performance optimization — I deliver results.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My goal is simple: build websites that not only look great but actually grow your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1117]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((item, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 
              hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3 text-cyan-400 text-2xl group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-3xl font-bold text-white">{item.num}</h3>

              {/* Label */}
              <p className="text-gray-400 text-sm mt-1">{item.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* TECH STACK (UPGRADED) */}
      <section className="py-20 px-6 text-center py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          My Tech <span className="text-cyan-400">Stack</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {[
            "WordPress",
            "PHP",
            "REST API",
            "JavaScript",
            "Tailwind CSS",
            "WooCommerce",
            "MySQL",
            "Elementor",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-cyan-400 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 px-6 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            What Clients <span className="text-cyan-400">Say</span>
          </h2>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <p className="text-gray-300 italic">
              “Saqib delivered exactly what we needed. Clean code, fast performance,
              and excellent communication throughout the project.”
            </p>
            <p className="mt-4 text-cyan-400 font-semibold">
              – Startup Founder
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something <span className="text-cyan-400">Great</span>
        </h2>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get a Quote
          </Link>
      </section>

    </main>
  );
};

export default AboutPage;