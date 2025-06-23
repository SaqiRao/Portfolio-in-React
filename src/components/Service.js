import React from "react";
import { FaWordpress, FaReact, FaPlug } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      icon: <FaWordpress size={40} className="text-blue-500" />,
      title: "WordPress Development",
      desc: "Custom themes, plugins, WooCommerce stores & speed optimization.",
    },
    {
      icon: <FaReact size={40} className="text-cyan-400" />,
      title: "React Frontend",
      desc: "Responsive UIs with React.js, Tailwind CSS, and clean design.",
    },
    {
      icon: <FaPlug size={40} className="text-purple-500" />,
      title: "API Integration",
      desc: "REST APIs, third-party integrations & backend connectivity.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-[#0d1117] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">My <span className="text-cyan-400">Services</span></h2>
        <p className="text-gray-400 mb-14 text-lg">Here's what I can do for you:</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-tr from-gray-800 to-gray-900 p-[2px] rounded-xl hover:from-blue-500 hover:to-purple-600 transition duration-300"
            >
              <div className="bg-[#0d1117] p-6 rounded-xl h-full group-hover:shadow-xl transition duration-300">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
       <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            View More Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
