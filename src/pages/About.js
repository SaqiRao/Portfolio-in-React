import React from "react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
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
        <h1 className="text-5xl font-extrabold text-blue-500 mb-2">About Me</h1>
        <p className="text-gray-400 text-lg">
          WordPress Developer • PHP Enthusiast • REST API Integrator
        </p>
      </header>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="images/Image.jpg"
              alt="Saqib Sajjad"
              className="rounded-2xl shadow-lg w-64 h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              Hi, I'm Saqib
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate{" "}
              <span className="text-blue-400 font-medium">
                WordPress Themes & Plugins Developer
              </span>{" "}
              with over <strong>3 years of experience</strong> in crafting
              custom web solutions using{" "}
              <strong>WordPress, PHP, and REST APIs</strong>.
            </p>
            <p className="text-gray-400 mt-4 text-md leading-relaxed">
              I specialize in enhancing functionality, improving performance,
              and creating seamless user experiences. My mission is to build
              scalable, secure, and visually compelling websites that help
              businesses thrive in the digital space.
            </p>
            <p className="text-gray-400 mt-4 text-md leading-relaxed">
              I’m now looking to bring my skills and creativity to a
              forward-thinking team where I can contribute to impactful projects
              and continue growing as a developer.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-950 text-white text-center px-4">
        <h2 className="text-4xl font-extrabold text-blue-500 mb-4">
          Featured WordPress Theme Development & Customizations
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore my most refined and functional WordPress themes and custom
          solutions crafted for performance, scalability, and visual excellence.
          From clean UI designs to deep WooCommerce and plugin integrations — I
          deliver tailored results.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
