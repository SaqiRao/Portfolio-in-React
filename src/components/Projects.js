import React from "react";

const projects = [
  {
    title: "Adforest – WordPress Theme",
    description: "Customized theme and plugins to enhance features and resolve bugs for improved UX.",
    image: "images/adforest.png",
    link: "https://adforestpro.scriptsbundle.com/",
  },
  {
    title: "Carspot – WordPress Theme",
    description: "Enhanced theme functionality and fixed plugin issues.",
    image: "images/carspot.png",
    link: "https://carspot.scriptsbundle.com/",
  },
  {
    title: "Propertya – WordPress Theme",
    description: "Customized the Propertya theme with new features and plugin improvements.",
    image: "images/propertiya.png",
    link: "https://listing.propertya-wp.com/",
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
          className="relative rounded-3xl overflow-hidden shadow-xl group bg-gray-800"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
            <h3 className="text-xl font-semibold text-teal-400 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Visit Site
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
