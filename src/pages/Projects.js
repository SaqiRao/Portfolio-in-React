import React from "react";
import { Helmet } from "react-helmet";

const projects = [
  {
    title: "Adforest – WordPress Theme",
    description:
      "Customized theme and plugins to enhance features and resolve bugs for improved UX.",
    image: "images/adforest.png",
    link: "https://adforestpro.scriptsbundle.com/",
  },
  {
    title: "Carspot – WordPress Theme",
    description:
      "Enhanced theme functionality and fixed plugin issues.",
    image: "images/carspot.png",
    link: "https://carspot.scriptsbundle.com/",
  },
  {
    title: "Propertya – WordPress Theme",
    description:
      "Customized the Propertya theme with new features and plugin improvements.",
    image: "images/propertiya.png",
    link: "https://listing.propertya-wp.com/",
  },
];

const ProjectsPage = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      {/* SEO */}
      <Helmet>
        <title>Projects | Saqib Sajjad</title>
        <meta
          name="description"
          content="Explore featured WordPress theme customization projects by Saqib Sajjad, showcasing skills in plugin development, UI enhancement, and bug fixing."
        />
        <meta
          name="keywords"
          content="WordPress Projects, Theme Customization, Plugin Development, Saqib Sajjad, Web Developer, Featured Work"
        />
      </Helmet>

      {/* Page Header */}
      <header className="bg-black py-32 px-8 text-center shadow-md">
        <h1 className="text-5xl font-extrabold text-blue-500 mb-2">Projects</h1>
        <p className="text-gray-400 text-lg">Featured WordPress Theme Development & Customizations</p>
      </header>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14 text-white">
            Featured Projects
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-xl group bg-gray-800 hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
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
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
