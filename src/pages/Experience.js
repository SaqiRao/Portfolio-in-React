import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const experiences = [
  {
    role: "WordPress Developer",
    company: "ZeeTech PVt",
    duration: "Mar 2025 – Present",
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

const ExperiencePage = () => {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans">
      {/* SEO */}
      <Helmet>
        <title>Experience | Saqib Sajjad</title>
        <meta
          name="description"
          content="A timeline of Saqib Sajjad's professional journey in WordPress and web development."
        />
      </Helmet>

      {/* Hero */}
      <header className="bg-black py-32 px-8 text-center shadow-md">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white-500 mb-4 tracking-tight">MY <span className="text-cyan-400">Experience</span></h1>
        <p className="text-gray-400 text-lg">A journey through my professional career</p>
      </header>

      {/* Experience Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Career <span className="text-cyan-400">Timeline</span>
          </h2>

          <div className="relative border-l-2 border-blue-500/30 ml-4 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ml-6 relative bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/20 transition duration-300"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-4 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950 shadow-md"></span>

                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-400 mt-2 md:mt-0">
                    {exp.duration} | {exp.location}
                  </span>
                </div>

                {/* Company */}
                <h4 className="text-lg font-medium text-white mb-1">
                  {exp.company}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-3">{exp.description}</p>

                {/* Bullets */}
                {exp.points.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperiencePage;
