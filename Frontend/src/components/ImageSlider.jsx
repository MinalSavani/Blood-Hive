import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Array of images
const images = [
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide3.jpg',
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden flex justify-center items-center">
      <motion.img
        key={index}
        src={images[index]}
        alt="Slider"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1 }}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default ImageSlider;
