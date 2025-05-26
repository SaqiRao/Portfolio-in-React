import React from "react";


const Projects = () => {
return (
<section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12">My Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-2">Project 1</h4>
            <p className="text-gray-400">E-commerce site with WooCommerce integration.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-2">Project 2</h4>
            <p className="text-gray-400">React-based admin dashboard for hotel/car bookings.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-2">Project 3</h4>
            <p className="text-gray-400">Portfolio website using Tailwind & React.</p>
          </div>
        </div>
      </div>
    </section>
);
};

export default Projects;