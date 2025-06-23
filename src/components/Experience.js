import React from "react";

const experiences = [
   {
    role: "WordPress Developer",
    company: "ZeeTech PVt",
    duration: "Mar 2024 – Present",
    location: "Lahore",
    description:
      "ZeeTech is a leader in digital transformation, specializing in innovative software solutions and AI advancements.",
    points: [
      "Empowering businesses with strategic initiatives and cutting-edge technology.",
    ],
  },
  {
    role: "Software Engineer",
    company: "LoopLeep Ventures",
    duration: "Sep 2024 – Feb 2025",
    location: "Lahore",
    description:
      "Loopleep is a leader in digital transformation, specializing in innovative software solutions and AI advancements.",
    points: [
      "Empowering businesses with strategic initiatives and cutting-edge technology.",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Glixen Technologies",
    duration: "Feb 2022 – Aug 2024",
    location: "Lahore",
    description:
      "A premier company focused on WordPress theme/plugin customization and product sales on platforms like Envato Market.",
    points: [
      "Customized WordPress themes to meet client requirements.",
      "Enhanced WooCommerce functionalities for better UX.",
      "Used WooCommerce REST APIs to improve data flow.",
      "Troubleshot and resolved plugin/theme conflicts.",
      "Implemented UI/UX improvements based on feedback.",
    ],
  },
  {
    role: "Assistant Shopify Developer",
    company: "Green Works",
    duration: "Aug 2021 – Feb 2022",
    location: "Lahore",
    description:
      "Worked on Apnaugao, a high-quality seed and plant store for gardeners and farmers.",
    points: [
      "Helped integrate and maintain Shopify features for performance and usability.",
    ],
  },
  {
    role: "Assistant Web Developer",
    company: "NubeCons",
    duration: "Sep 2020 – Feb 2021",
    location: "Lahore",
    description:
      "Assisted in developing and maintaining front-end web apps using HTML, CSS, and JavaScript.",
    points: [],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Work <span className="text-cyan-400">Experience</span></h2>

        <div className="relative border-l border-gray-700 ml-4 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="ml-6 relative bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/20 transition duration-300"
            >
              <span className="absolute -left-4 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950"></span>
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h4 className="text-xl md:text-2xl font-semibold text-cyan-400">
                  {exp.role}
                </h4>
                <span className="text-sm text-gray-400 mt-1 md:mt-0">
                  {exp.duration} | {exp.location}
                </span>
              </div>
              <h5 className="text-lg font-medium text-white">{exp.company}</h5>
              <p className="text-sm text-gray-400 mt-2 mb-3">{exp.description}</p>
              {exp.points.length > 0 && (
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <a
            href="/experience"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            View More Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
