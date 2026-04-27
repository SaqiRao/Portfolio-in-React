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
className="group relative rounded-2xl border border-white/10 
bg-white/5 backdrop-blur-xl p-6 
hover:border-cyan-400/40 
transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
{/* Glow effect */}
<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl"></div>

{/* Content */}
<div className="relative z-10">
  
  {/* Icon box */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl 
  bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-5">
    {service.icon}
  </div>

  <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
    {service.title}
  </h4>

  <p className="text-gray-400 text-sm leading-relaxed">
    {service.desc}
  </p>
</div>
</div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Service;
