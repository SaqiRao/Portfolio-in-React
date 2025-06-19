import React from "react";
import { Helmet } from "react-helmet";

const projects = [
    {
    title: "Zeetravelo – Tour Booking Platform",
    description: "Developed a tour booking website with dynamic package management, user dashboard, and location-based filtering.",
    image: "images/zeetravelo.png", // make sure this image exists in your `public/images` folder
    link: "https://zeetravelo.com/",
  },
    {
    title: "Brikk – WordPress Theme",
    description:
      "Added a custom appointment booking system with date/day slot selection to the Brikk theme.",
    image: "images/brikk.png",
    link: "https://salleprivee.ca/",
  },
  {
    title: "ApnaUgao – Shopify Store",
    description:
      "Implemented custom features, optimized performance, and integrated third-party apps to enhance the Shopify experience.",
    image: "images/apnaugao.png",
    link: "https://apnaugao.com/",
  },
  {
    title: "HouseBuy.uk – Property Investment",
    description:
      "Real estate platform offering services related to buying and selling property in the UK.",
    image: "images/housebuy.png",
    link: "https://housebuy.uk/",
  },
  {
    title: "London Dermatology Clinic",
    description:
      "Medical website for professional dermatology and skin treatment services in London.",
    image: "images/dermatology.png",
    link: "https://londondermatologyclinic.com/",
  },
  {
    title: "Adforest – WordPress Theme",
    description:
      "Customized the Adforest Theme and its plugins to add new features and resolve bugs, enhancing functionality and user experience.",
    image: "images/adforest.png",
    link: "https://adforestpro.scriptsbundle.com/",
  },
  {
    title: "Carspot – WordPress Theme",
    description:
      "Customized the Carspot Theme and its plugins to add new features and resolve bugs, enhancing functionality and user experience.",
    image: "images/carspot.png",
    link: "https://carspot.scriptsbundle.com/",
  },
  {
    title: "Propertya – WordPress Theme",
    description:
      "Customized the Propertya Theme and its plugins to add new features and resolve bugs, enhancing functionality and user experience.",
    image: "images/propertiya.png",
    link: "https://listing.propertya-wp.com/",
  },
  {
    title: "DWT – Directory & Listing WordPress Theme",
    description:
      "Customized the DWT Theme and its plugins to add new features and resolve bugs, enhancing functionality and user experience.",
    image: "images/dwt.png",
    link: "https://listing.downtown-directory.com/",
  },
  {
    title: "Law Offices Alex Poberesky, P.A.",
    description:
      "Website for Maryland-based personal injury and defense attorneys.",
    image: "images/poberesky.png",
    link: "https://www.alexhelp.com/",
  },
  {
    title: "Pop Nosh – Gourmet Popcorn",
    description:
      "E-commerce store for gourmet popcorn, offering a variety of flavors and gifting options.",
    image: "images/popnosh.png",
    link: "https://popnosh.com/",
  },
  {
    title: "Caribbean LED Solutions",
    description:
      "Manufacturer and distributor of LED lighting solutions tailored for projects and infrastructure.",
    image: "images/caribbeanled.png",
    link: "https://caribbeanledsolutions.com/",
  },
  {
    title: "Boruch Akbosh – Exit Strategy Consultant",
    description:
      "Business acquisition and exit strategy consultant website with podcast and mentorship services.",
    image: "images/boruch.png",
    link: "https://boruchakbosh.com/",
  },
  {
    title: "Ideal Exit Plan – Pest Control Business",
    description:
      "Consulting site dedicated to helping pest control business owners exit successfully.",
    image: "images/idealexit.png",
    link: "http://IdealExitPlan.com",
  },
  {
    title: "Daily Transcription Academy",
    description:
      "Learn to become a transcriptionist from home through courses and certifications.",
    image: "images/dailytrans.png",
    link: "https://dailytrans.com/",
  },
  {
    title: "FC Dex",
    description:
      "Decentralized finance (DeFi) project platform for crypto trading and finance.",
    image: "images/fcdex.png",
    link: "https://fc-dex.com/",
  },
  {
    title: "Buy Sell Accounting",
    description:
      "Platform to help accounting firms exit confidently and grow their business with strategic acquisitions.",
    image: "images/buysellaccounting.png",
    link: "https://atmkt.smartdevpk.com/",
  },
];


const ProjectsPage = () => {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans">
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
        <h1 className="text-5xl font-extrabold text-white-500 mb-2">Projects</h1>
        <p className="text-gray-400 text-lg">Featured WordPress Theme Development & Customizationsgit init</p>
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
                className="relative rounded-3xl overflow-hidden shadow-lg group bg-gray-900 hover:shadow-2xl transition-shadow duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-100 group-hover:opacity-100 transition duration-500 p-6 flex flex-col justify-end">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-snug">
                    {project.description}
                  </p>
                 <a href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit mt-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold transition duration-300"
                >
                  View Site
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
