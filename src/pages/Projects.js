import React from "react";
import { Helmet } from "react-helmet";

const projects = [
  {
    title: "Carspot – WordPress Theme",
    description: "Customized Carspot theme with advanced features, resolved plugin conflicts, improved performance, and enhanced UI/UX, delivering a scalable and efficient classified listing experience for users and administrators.",
    image: "images/carspot.png",
    link: "https://carspot.scriptsbundle.com/",
    tags: ["WordPress", "PHP", "Theme"],
  },
  {
    title: "Propertya – WordPress Theme",
    description: "Enhanced Propertya real estate theme with custom features, optimized layout design, improved listing functionality, and resolved backend issues to provide a seamless and engaging property browsing experience.",
    image: "images/propertiya.png",
    link: "https://listing.propertya-wp.com/",
    tags: ["WordPress", "Real Estate", "Elementor"],
  },
  {
    title: "DWT – Directory Theme",
    description: "Developed and optimized directory listing features in DWT theme, improving search performance, user experience, and scalability, making it suitable for large directory-based platforms and business listings.",
    image: "images/dwt.png",
    link: "https://listing.downtown-directory.com/",
    tags: ["WordPress", "Directory", "Listings"],
  },
  {
    title: "Zeetravelo – Booking Platform",
    description: "Built a complete tour booking system with dynamic package management, filtering options, and user dashboard, delivering smooth booking experience and improved usability for travel businesses.",
    image: "images/zeetravelo.png",
    link: "https://zeetravelo.com/",
    tags: ["Booking", "Custom Dev", "UI/UX"],
  },
  {
    title: "Brikk – Booking System",
    description: "Implemented advanced appointment scheduling system with date and time slot selection, improving booking efficiency and enhancing user interaction for service-based businesses using WordPress platform.",
    image: "images/brikk.png",
    link: "https://salleprivee.ca/",
    tags: ["WordPress", "Booking", "Custom"],
  },
  {
    title: "ApnaUgao – Shopify Store",
    description: "Optimized Shopify store performance, integrated apps, improved UI/UX, and enhanced checkout flow, increasing engagement and conversions while ensuring smooth and scalable e-commerce functionality.",
    image: "images/apnaugao.png",
    link: "https://apnaugao.com/",
    tags: ["Shopify", "E-commerce", "Liquid"],
  },
  {
    title: "HouseBuy.uk",
    description: "Designed a modern real estate platform with clean interface, optimized performance, and intuitive navigation, enabling users to explore property investment opportunities efficiently and effectively.",
    image: "images/housebuy.png",
    link: "https://housebuy.uk/",
    tags: ["Real Estate", "UI/UX", "Web"],
  },
  {
    title: "London Dermatology Clinic",
    description: "Created a responsive healthcare website with professional layout, fast performance, and easy navigation, helping patients access dermatology services and improving online presence effectively.",
    image: "images/dermatology.png",
    link: "https://londondermatologyclinic.com/",
    tags: ["Healthcare", "WordPress", "UI"],
  },
  {
    title: "Adforest – Classified Theme",
    description: "Extended Adforest theme functionality with custom features, optimized performance, and improved user interface, delivering a reliable classified platform with enhanced usability and scalability.",
    image: "images/adforest.png",
    link: "https://adforestpro.scriptsbundle.com/",
    tags: ["WordPress", "Classified", "PHP"],
  },
  {
    title: "Law Offices Alex Poberesky",
    description: "Developed a legal services website with structured layout, responsive design, and optimized performance, improving user trust, accessibility, and client engagement for the law firm.",
    image: "images/poberesky.png",
    link: "https://www.alexhelp.com/",
    tags: ["Legal", "Business", "WordPress"],
  },
  {
    title: "Pop Nosh – E-commerce",
    description: "Built a visually appealing e-commerce store with optimized performance, smooth navigation, and enhanced shopping experience, increasing user engagement and conversions for gourmet product sales.",
    image: "images/popnosh.png",
    link: "https://popnosh.com/",
    tags: ["E-commerce", "Shop", "UX"],
  },
  {
    title: "Caribbean LED Solutions",
    description: "Developed corporate website with modern design, structured content, and improved performance, showcasing LED solutions effectively and enhancing business credibility and customer engagement.",
    image: "images/caribbeanled.png",
    link: "https://caribbeanledsolutions.com/",
    tags: ["Corporate", "Business", "Web"],
  },
  {
    title: "Boruch Akbosh",
    description: "Designed consulting website with strong branding, optimized content structure, and responsive layout, helping improve user understanding and increasing lead generation for business services.",
    image: "images/boruch.png",
    link: "https://boruchakbosh.com/",
    tags: ["Consulting", "Business", "Branding"],
  },
  {
    title: "Ideal Exit Plan",
    description: "Built consulting platform focused on business exit strategies with clear messaging, optimized performance, and structured layout to enhance user trust and generate quality leads.",
    image: "images/idealexit.png",
    link: "http://IdealExitPlan.com",
    tags: ["Consulting", "Business", "Strategy"],
  },
  {
    title: "Daily Transcription Academy",
    description: "Developed online learning platform with structured courses, responsive design, and optimized user experience, enabling users to access training content efficiently and enroll easily.",
    image: "images/dailytrans.png",
    link: "https://dailytrans.com/",
    tags: ["Education", "Courses", "Platform"],
  },
  {
    title: "FC Dex",
    description: "Created decentralized finance platform with modern UI, optimized performance, and structured layout, enabling users to interact with crypto trading and financial services seamlessly.",
    image: "images/fcdex.png",
    link: "https://fc-dex.com/",
    tags: ["Crypto", "DeFi", "Web3"],
  },
  {
    title: "Buy Sell Accounting",
    description: "Developed accounting business platform with optimized UI, structured content, and lead generation flow, helping firms grow and manage acquisitions effectively.",
    image: "images/buysellaccounting.png",
    link: "https://atmkt.smartdevpk.com/",
    tags: ["Business", "Finance", "Platform"],
  },

  // Trading / AI (remaining unique)
  {
    title: "Mind Trade AI",
    description: "Built AI trading platform with modern interface, automated insights, and optimized onboarding, improving user experience and engagement in financial decision-making processes.",
    image: "images/mindtrader.png",
    link: "https://mindtrader.net/",
    tags: ["AI", "Trading", "Automation"],
  },
  {
    title: "Ailucren",
    description: "Designed investment platform with clean UI, structured layout, and performance optimization, enhancing user engagement and simplifying access to trading services.",
    image: "images/ailucren.png",
    link: "https://ailucren.com/",
    tags: ["Investment", "Trading", "UX"],
  },
  {
    title: "Musk Boost AI",
    description: "Developed AI-based crypto trading platform with modern design, automated features, and optimized performance for better user experience and engagement.",
    image: "images/muskboostai.png",
    link: "https://muskboostai.com/",
    tags: ["AI", "Crypto", "Trading"],
  },
  {
    title: "Pro Trading Signal",
    description: "Created trading signals platform with optimized UI, structured content, and lead generation flow, improving user interaction and conversion rates.",
    image: "images/pro-tradingsignal.png",
    link: "https://pro-tradingsignal.com/",
    tags: ["Trading", "Signals", "Finance"],
  },
  {
    title: "Evofinvex Union",
    description: "Built financial trading website with clean layout, responsive design, and onboarding flow, enhancing user engagement and accessibility of services.",
    image: "images/evofinvexunion.png",
    link: "https://evofinvexunion.io/",
    tags: ["Finance", "Trading", "Platform"],
  },
  {
    title: "MarketHype",
    description: "Designed investment website with conversion-focused layout, modern UI, and responsive design, improving user engagement and financial service accessibility.",
    image: "images/markethype.png",
    link: "https://markethype.pro/",
    tags: ["Trading", "Investment", "UX"],
  },
  {
    title: "Aigees",
    description: "Developed AI trading platform with responsive UI, modern design, and optimized performance, improving user interaction and automation capabilities.",
    image: "images/aigees.png",
    link: "https://aigees.tech/",
    tags: ["AI", "Trading", "Tech"],
  },
  {
    title: "Bramley Fundex",
    description: "Created financial platform with optimized design, structured layout, and onboarding system, improving lead generation and user engagement.",
    image: "images/bramley-fundex.png",
    link: "https://bramley-fundex.net/",
    tags: ["Finance", "Trading", "Leads"],
  },
  {
    title: "Trixford",
    description: "Built investment platform with clean UI, optimized performance, and structured flow, ensuring smooth onboarding and improved user experience.",
    image: "images/trixford.png",
    link: "https://trixford.com/",
    tags: ["Investment", "Trading", "Platform"],
  },
  {
    title: "Kondmatex",
    description: "Developed AI trading platform with modern landing page, optimized performance, and conversion-focused design, enhancing engagement and lead generation.",
    image: "images/kondmatex.png",
    link: "https://kondmatex.com/",
    tags: ["AI", "Trading", "Automation"],
  }
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
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">PROJECTS</h1>
        <p className="text-gray-400 text-lg">Featured WordPress Theme Development & Customizationsgit init</p>
      </header>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14 text-white">
            FEATURED  <span className="text-cyan-400">PROJECTS</span>
          </h2>
<div className="grid gap-10">
  {projects.map((project, index) => (
    <div
      key={index}
      className="flex flex-col lg:flex-row items-center 
      bg-gray-900 border border-teal-500/30 
      rounded-3xl overflow-hidden 
      shadow-lg hover:shadow-2xl 
      transition duration-500"
    >
      {/* LEFT SIDE (Content) */}
      <div className="w-full lg:w-1/2 p-6 md:p-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-5">
          {project.description}
        </p>

      
        {/* Tags (max 3) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              
              className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/10 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 
 text-white px-5 py-2 rounded-lg font-semibold"
        >
          Visit Site
        </a>
      </div>

      {/* RIGHT SIDE (Image) */}
      <div className="w-full lg:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 lg:h-full object-cover"
        />
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
