import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedRoute.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -50,
    scale: 1.1
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const AnimatedRoute = ({ children }) => {
  return (
    <motion.div
      className="animated-route-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;