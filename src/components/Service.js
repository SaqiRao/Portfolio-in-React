import React from "react";
import {
  FaWordpress,
  FaReact,
  FaPlug,
  FaShoppingCart,
  FaPuzzlePiece,
  FaPaintBrush,
  FaBolt,
  FaTools,
  FaExchangeAlt,
  FaShopify,
} from "react-icons/fa";

import { SiWix, SiWebflow } from "react-icons/si";

const Service = () => {
const services = [
  {
    icon: <FaWordpress size={40} className="text-blue-500" />,
    title: "WordPress Development",
    desc: "Custom themes, plugins, WooCommerce stores, and performance optimization.",
  },
  {
    icon: <FaReact size={40} className="text-cyan-400" />,
    title: "React Frontend",
    desc: "Responsive UIs using React.js, Tailwind CSS, and modern component architecture.",
  },
  {
    icon: <FaPlug size={40} className="text-purple-500" />,
    title: "API Integration",
    desc: "REST APIs, third-party integrations, and backend connectivity solutions.",
  },
  {
    icon: <FaShoppingCart size={40} className="text-green-500" />,
    title: "WooCommerce Development",
    desc: "Custom eCommerce solutions, checkout optimization, and payment integrations.",
  },
  {
    icon: <FaPuzzlePiece size={40} className="text-yellow-500" />,
    title: "Plugin Development",
    desc: "Custom WordPress plugins to extend functionality and automate workflows.",
  },
  {
    icon: <FaPaintBrush size={40} className="text-pink-500" />,
    title: "Theme Customization",
    desc: "Advanced theme customization with responsive design and UI improvements.",
  },
  {
    icon: <FaBolt size={40} className="text-orange-500" />,
    title: "Speed Optimization",
    desc: "Improving Core Web Vitals, load time, and overall website performance.",
  },
  {
    icon: <FaTools size={40} className="text-gray-400" />,
    title: "Bug Fixing & Maintenance",
    desc: "Fixing issues, resolving conflicts, and ongoing website maintenance.",
  },
  {
    icon: <FaExchangeAlt size={40} className="text-indigo-400" />,
    title: "Website Migration",
    desc: "Safe migration, cloning, and server transfers without downtime.",
  },
  {
  icon: <FaShopify size={40} className="text-green-500" />,
  title: "Shopify Development",
  desc: "Custom Shopify stores, theme customization, and conversion-focused eCommerce solutions.",
},
{
  icon: <SiWix size={40} className="text-white" />,
  title: "Wix Development",
  desc: "Professional Wix websites with modern design, responsiveness, and business-focused layouts.",
},
{
  icon: <SiWebflow size={40} className="text-blue-400" />,
  title: "Webflow Development",
  desc: "Modern Webflow websites with responsive design, CMS integration, and smooth animations.",
},
];

  return (
    <section id="services" className="py-20 px-6 bg-[#0d1117] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">MY <span className="text-cyan-400">SERVICES</span></h2>
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
       {/* <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            View More Services
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Service;
