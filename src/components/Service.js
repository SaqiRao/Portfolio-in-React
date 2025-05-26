import React from "react";

const Service = () => {
return (

<section id="services" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-3xl font-semibold text-center mb-12">My Services</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <h4 className="text-xl font-bold mb-2">WordPress Development</h4>
        <p className="text-gray-400">Custom themes, plugins, and full WooCommerce stores.</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <h4 className="text-xl font-bold mb-2">React Frontend</h4>
        <p className="text-gray-400">Fast, modern UIs with React and Tailwind CSS.</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <h4 className="text-xl font-bold mb-2">API Integration</h4>
        <p className="text-gray-400">Seamless REST API and third-party service integration.</p>
      </div>
    </div>
  </div>
</section>



    );
};

export default Service;