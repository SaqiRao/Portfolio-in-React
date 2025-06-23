import React from "react";

const projects = [
{
    title: "Zeetravelo – Tour Booking Platform",
    description: "Developed a tour booking website with dynamic package management, user dashboard, and location-based filtering.",
    image: "images/zeetravelo.png", // make sure this image exists in your `public/images` folder
    link: "https://zeetravelo.com/",
  },
    {
    title: "Brikk – WordPress Theme",
    description:
      "Added a custom appointment booking system with date/day slot selection to the Brikk theme.",
    image: "images/brikk.png",
    link: "https://salleprivee.ca/",
  },
  {
    title: "ApnaUgao – Shopify Store",
    description:
      "Implemented custom features, optimized performance, and integrated third-party apps to enhance the Shopify experience.",
    image: "images/apnaugao.png",
    link: "https://apnaugao.com/",
  },
];

const Projects = () => {
  return (
<section id="projects" className="bg-gray-900 text-white py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-14">
      Featured Projects
    </h2>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg group bg-gray-900 hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay content - hidden initially, shown on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 leading-snug">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit mt-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold transition duration-300"
                >
                  View Site
                </a>
              </div>
            </div>
          ))}
        </div>

    {/* Visit More Projects Button */}
     <div className="text-center mt-16">
          <a
            href="/projects"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            View More Projects
          </a>
        </div>
  </div>
</section>

  );
};

export default Projects;
