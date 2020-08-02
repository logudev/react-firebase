import React from 'react';
import { motion } from 'framer-motion';

const ImageModal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.id === 'modal-wrapper') {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className='backdrop'
      id='modal-wrapper'
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
    >
      <motion.img
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        src={selectedImg}
        alt='Enlarged Image'
      />
    </motion.div>
  );
};

export default ImageModal;
