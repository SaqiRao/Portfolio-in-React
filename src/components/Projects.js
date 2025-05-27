import React from "react";

const projects = [
  {
    title: "Adforest – WordPress Theme",
    description: "Customized theme and plugins to enhance features and resolve bugs for improved UX.",
    image: "images/adforest.png",
    link: "https://adforestpro.scriptsbundle.com/"
  },
  {
    title: "Carspot – WordPress Theme",
    description: "Enhanced theme functionality and fixed plugin issues.",
    image: "https://carspot.scriptsbundle.com/wp-content/uploads/2021/04/carspot-banner.jpg",
    link: "https://carspot.scriptsbundle.com/"
  },
  {
    title: "Propertya – WordPress Theme",
    description: "Customized the Propertya theme with new features and plugin improvements.",
    image: "https://listing.propertya-wp.com/wp-content/uploads/2021/10/propertya-banner.jpg",
    link: "https://listing.propertya-wp.com/"
  },
  {
    title: "DWT – Directory Theme",
    description: "Added features and resolved plugin conflicts to improve listing UX.",
    image: "https://listing.downtown-directory.com/wp-content/uploads/2021/10/dwt-banner.jpg",
    link: "https://listing.downtown-directory.com/"
  },
  {
    title: "Brikk – Appointment System",
    description: "Implemented a date/day slot-based appointment booking feature.",
    image: "https://salleprivee.ca/wp-content/uploads/2023/08/brikk-booking.jpg",
    link: "https://salleprivee.ca/"
  },
  {
    title: "ApnaUgao – Shopify Store",
    description: "Contributed to feature development, performance, and third-party app integration.",
    image: "https://apnaugao.com/cdn/shop/files/logo.png?v=1689657925",
    link: "https://apnaugao.com/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl bg-gray-900 transition transform hover:-translate-y-1 hover:shadow-blue-700/40"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-6 flex flex-col justify-between h-56">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
