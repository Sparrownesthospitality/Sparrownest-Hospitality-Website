import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    { url: 'https://ucarecdn.com/483cd0f6-ba0d-43f3-87f3-6d6ffb075eaf/301livingroom4.jpg', alt: 'Cozy bedroom' },
    { url: 'https://ucarecdn.com/ea1e18e5-9588-43ea-9a8a-5644add2c5f3/301bedroom.jpg', alt: 'Luxurious bathroom' },
    { url: 'https://ucarecdn.com/82ea5d25-b74c-4abd-a6d3-35e4cfecb054/301bedroom2.jpg', alt: 'Beautiful dining area' },
    { url: 'https://ucarecdn.com/8775a932-3259-474a-a501-f2859b409a65/301livingroom2.jpg', alt: 'Garden view' },
    { url: 'https://ucarecdn.com/ea7dc1ed-f824-4d5b-8486-03f49e05db41/G1livingroom3.jpg', alt: 'Suite living room' },
    { url: 'https://ucarecdn.com/d7fbff9e-682d-4bf8-85df-de18f93946c3/G11stbedroom.jpg', alt: 'Balcony view' },
    { url: 'https://ucarecdn.com/31a834b6-0913-4230-8a3a-6ddfd4501ac6/G1livingroom.jpg', alt: 'Workspace' },
    { url: 'https://ucarecdn.com/084652b5-3813-4a31-9be6-6e80606948be/G12ndbedroom.jpg', alt: 'Kitchen area' },
    
    // Add more images to reach 30
  ];

  const handlePrevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  const handleNextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <section className="py-20 px-4" ref={ref}>
      <motion.h2 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Gallery
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <motion.img
              key={selectedImage}
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
              onClick={handleNextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;