import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, MapPin, Phone, Calendar } from 'lucide-react';

const RoomsAndSuites = () => {
  const [activeRoom, setActiveRoom] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rooms = [
    {
      name: 'Deluxe Suite',
      images: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf',
      ],
      description: 'Spacious suite with modern amenities and city views',
      size: '400 sq ft',
      bed: 'King Size',
      view: 'City View',
      amenities: ['AC', 'Wi-Fi', 'Mini Bar', 'Smart TV'],
      price: '$150/night',
      location: 'East Wing, 3rd Floor',
    },
    {
      name: 'Family Suite',
      images: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd',
        'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f',
        'https://images.unsplash.com/photo-1595526115607-fa1288c87173',
      ],
      description: 'Perfect for families, featuring two bedrooms and a living area',
      size: '600 sq ft',
      bed: '1 King + 2 Twin',
      view: 'Garden View',
      amenities: ['AC', 'Wi-Fi', 'Kitchen', 'Balcony'],
      price: '$200/night',
      location: 'West Wing, 2nd Floor',
    },
    {
      name: 'Garden Room',
      images: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd',
        'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f',
        'https://images.unsplash.com/photo-1595526115607-fa1288c87173',
      ],
      description: 'Cozy room with direct access to our beautiful garden',
      size: '300 sq ft',
      bed: 'Queen Size',
      view: 'Garden View',
      amenities: ['AC', 'Wi-Fi', 'Garden Access', 'Workspace'],
      price: '$120/night',
      location: 'Ground Floor',
    },
    {
      name: 'Executive Suite',
      images: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd',
        'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f',
        'https://images.unsplash.com/photo-1595526115607-fa1288c87173',
      ],
      description: 'Luxury suite with premium amenities and workspace',
      size: '500 sq ft',
      bed: 'King Size',
      view: 'City View',
      amenities: ['AC', 'Wi-Fi', 'Mini Bar', 'Office Space'],
      price: '$180/night',
      location: 'Top Floor',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef<Slider>(null);

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <motion.h2 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Rooms & Suites
      </motion.h2>

      <div className="max-w-7xl mx-auto relative">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <Slider ref={sliderRef} {...sliderSettings} className="room-slider">
          {rooms.map((room, index) => (
            <div key={index} className="px-4">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => setActiveRoom(activeRoom === index ? null : index)}
              >
                <Slider {...sliderSettings}>
                  {room.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="h-[400px]">
                      <img 
                        src={image} 
                        alt={`${room.name} - View ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </Slider>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{room.description}</p>
                  
                  {activeRoom === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Room Details</h4>
                          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>Size: {room.size}</li>
                            <li>Bed: {room.bed}</li>
                            <li>View: {room.view}</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Amenities</h4>
                          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            {room.amenities.map((amenity, i) => (
                              <li key={i}>{amenity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-300">{room.location}</span>
                        </div>
                        <p className="text-xl font-semibold">{room.price}</p>
                      </div>
                      
                      <div className="flex gap-4 mt-6">
                        <a 
                          href="tel:+1234567890"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90"
                        >
                          <Phone className="w-5 h-5" />
                          <span>Call for Inquiry</span>
                        </a>
                        <button 
                          className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90"
                        >
                          <Calendar className="w-5 h-5" />
                          <span>Book Now</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RoomsAndSuites;