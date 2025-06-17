import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Service from '../components/Service';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Home | Saqib Sajjad</title>
        <meta
          name="description"
          content="Portfolio of Saqib Sajjad – Expert WordPress Developer with 3+ years of experience in themes, plugins, WooCommerce, and REST API integration."
        />
        <meta
          name="keywords"
          content="Saqib Sajjad, WordPress Developer, PHP, WooCommerce, Plugin Developer, API Integration, Portfolio, Web Developer"
        />
      </Helmet>

      {/* Page Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Service />
      <Contact />
    </>
  );
};

export default Home;

