import React from 'react';
import { motion } from 'framer-motion';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  return (
    <div className='img-grid img-grid-width'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            className='img-wrap'
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={doc.url}
              alt='Uploaded Image'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
