import React from "react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      {/* SEO */}
      <Helmet>
        <title>About | Saqib Sajjad</title>
        <meta
          name="description"
          content="Learn more about Saqib Sajjad, a passionate WordPress developer with expertise in PHP, REST API integration, and custom theme/plugin development."
        />
        <meta
          name="keywords"
          content="WordPress Developer, PHP Developer, Saqib Sajjad, REST API Integration, Web Development, About Saqib"
        />
      </Helmet>

      {/* Hero Section */}
      <header className="bg-black py-32 px-8 text-center shadow-md">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white-500 mb-4 tracking-tight">About  <span className="text-cyan-400">Me</span></h1>
        <p className="text-gray-400 text-lg">
          WordPress Developer • PHP Enthusiast • REST API Integrator
        </p>
      </header>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="images/Image.jpg"
              alt="Saqib Sajjad"
              className="rounded-2xl shadow-xl w-64 h-64 object-cover hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-white-400 leading-tight tracking-tight">
              Hi, I'm Saqib
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a passionate{" "}
              <span className="text-cyan-400 font-medium">
                WordPress Themes & Plugins Developer
              </span>{" "}
              with over <strong>3 years of experience</strong> in crafting custom web solutions
              using <strong>WordPress, PHP, and REST APIs</strong>.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-4">
              I specialize in enhancing functionality, improving performance, and creating seamless user
              experiences. My mission is to build scalable, secure, and visually compelling websites that
              help businesses thrive in the digital space.
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              I’m now looking to bring my skills and creativity to a forward-thinking team where I can
              contribute to impactful projects and continue growing as a developer.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-[#0d1117] text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">My Tech <span className="text-cyan-400">Stack</span></h2>
        <p className="text-gray-400 text-base mb-10">
          Tools and technologies I regularly work with to build powerful, scalable solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-200">
          <span className="bg-gray-800 px-4 py-2 rounded-lg">WordPress</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">PHP</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">REST API</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">JavaScript</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Elementor</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">WooCommerce</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">MySQL</span>
        </div>
      </section>
      <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          What Clients  <span className="text-cyan-400">Say</span>
        </h2>
        <blockquote className="text-xl italic text-gray-600 dark:text-gray-300">
          “Saqib is one of the best developers I’ve worked with. He understood our business needs and delivered a custom plugin exactly as expected — on time and with top quality.”
        </blockquote>
        <p className="mt-4 text-blue-500 font-semibold">– John D., Startup Founder</p>
      </div>
    </section>
    </main>
  );
};

export default AboutPage;
