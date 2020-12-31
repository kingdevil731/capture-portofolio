import React from 'react';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.h1>Our Contact</motion.h1>
    </motion.div>
  );
};

export default ContactUs;
