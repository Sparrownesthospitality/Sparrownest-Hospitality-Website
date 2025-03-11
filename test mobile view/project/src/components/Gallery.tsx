import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', alt: 'Cozy bedroom' },
    { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd', alt: 'Luxurious bathroom' },
    { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7', alt: 'Beautiful dining area' },
    { url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf', alt: 'Garden view' },
    { url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461', alt: 'Suite living room' },
    { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b', alt: 'Balcony view' },
    { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a', alt: 'Workspace' },
    { url: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f', alt: 'Kitchen area' },
    { url: 'https://images.unsplash.com/photo-1595526115607-fa1288c87173', alt: 'Pool area' },
    // Add more images to reach 30
  ];

  const mobileSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rows: 2,
    arrows: false,
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
        {/* Mobile View */}
        <div className="md:hidden">
          <Slider {...mobileSettings}>
            {images.map((image, index) => (
              <div key={index} className="p-1">
                <motion.div
                  className="relative cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop View - Remains unchanged */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4">
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

        {/* Lightbox - Updated for better mobile experience */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            >
              <button
                className="absolute top-4 right-4 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full z-50"
                onClick={() => setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <motion.img
                key={selectedImage}
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="max-w-[90vw] max-h-[80vh] object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full z-50"
                onClick={() => setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;