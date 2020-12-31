import React from 'react';
import home1 from '../img/home1.png';
// Styled
import { About, Description, Hide, Image } from '../styles';
// Framer Motion
import { motion } from 'framer-motion';
// Animation
import { titleAnimation, fadeAnimation, photoAnimation } from '../animation';
// Wave
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Your <span>dreams</span> come{' '}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="a guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
