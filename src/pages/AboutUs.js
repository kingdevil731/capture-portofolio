import React from 'react';
// page Components
import AboutSection from '../Components/AboutSection';
import FaqSection from '../Components/FaqSection';
import ServicesSection from '../Components/ServicesSection';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
// scrollTop
import ScrollTop from '../Components/ScrollTop';

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
