import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Truck Insurance Quotation Form — WordPress Plugin",
    description:
      "A custom WordPress plugin that collects trucking insurance quotes through a clean 7-step form. Features VIN auto-fill using the NHTSA government API via WordPress AJAX. Automatically generates a PDF report and emails it to the admin on every submission. Includes a VIN search shortcode to look up any submitted vehicle's full details. Built with PHP, jQuery, MySQL, and the WordPress Plugin API.",
    image: "images/truck-insurance.png",
    link: "https://xtramilecoverage.com/",
    tags: ["PHP", "WordPress Plugin", "NHTSA VIN API","AJAX", "PDF Generation"],

  },
  {
    title: "ApnaUgao – Shopify Store",
    description:
      "Implemented custom features, optimized performance, and integrated third-party apps to enhance the Shopify experience.",
    image: "images/apnaugao.png",
    link: "https://apnaugao.com/",
    tags: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    title: "Carspot – WordPress Theme",
    description:
      "Customized the Carspot Theme and its plugins to add new features and resolve bugs, enhancing functionality and user experience.",
    image: "images/carspot.png",
    link: "https://carspot.scriptsbundle.com/",
    tags: ["WordPress", "PHP", "jQuery"],
  },
  {
    title: "Propertya – WordPress Theme",
    description:
      "Customized the Propertya Theme and its plugins to add new features and resolve bugs, enhancing functionality and user experience.",
    image: "images/propertiya.png",
    link: "https://listing.propertya-wp.com/",
    tags: ["WordPress", "PHP", "Elementor", "Envoto Product"],
  },
  {
    "title": "Eileen",
    "description": "Modern eCommerce website with product showcase, responsive design, and smooth user experience.",
    "image": "images/eileen.png",
    "link": "https://eileen.pk/",
    "tags": ["eCommerce", "Liquid", "Shopify"]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          FEATURED <span className="text-cyan-400">PROJECTS</span>
        </h2>

        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Featured WordPress Theme Development & Customizations
        </p>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center 
              bg-gray-900 border border-white/10 
              rounded-3xl overflow-hidden 
              shadow-lg transition duration-300"
            >
              {/* Left Content */}
              <div className="w-full lg:w-1/2 p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-5">
                  {project.description}
                </p>

                {/* Tags (max 3) */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/10 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 
                  hover:from-blue-600 hover:to-purple-600 
                  text-white px-5 py-2 rounded-lg font-semibold transition duration-300"
                >
                  Visit Site
                </a>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 
            hover:from-blue-600 hover:to-purple-600 
            text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;