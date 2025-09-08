import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      scale: [1, 1.4, 0.75, 1.25, 0.9, 1],
      // rotate: [0, 10, -10, 5, -5, 0],
      color: ['#e73e0d', '#ff5722', '#ff9800', '#ff5722', '#e73e0d'],
      textShadow: [
        '0px 0px 0px rgba(0,0,0,0)',
        '4px 4px 10px rgba(0,0,0,0.2)',
        '2px 2px 8px rgba(0,0,0,0.3)',
        '4px 4px 10px rgba(0,0,0,0.2)',
        '0px 0px 0px rgba(0,0,0,0)',
      ],
      transition: {
        times: [0, 0.3, 0.5, 0.7, 0.9],
        duration: 1,
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
