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
      name: 'Deluxe Suite Abhyuday Nilaya 101',
      images: [
        'https://ucarecdn.com/b2675308-91c6-4f46-859d-10b49a55b4db/101livingroom.avif',
        'https://ucarecdn.com/5d38c314-19a6-4a0b-a4a5-e42b9d29a5ab/101livingroom2.avif',
        'https://ucarecdn.com/fb20ea44-5403-4a2c-972c-aa4aeb320cff/1012ndbedroom.avif',
        'https://ucarecdn.com/b94bb784-fac8-45fa-8624-6393b2874cf0/1011stbedroom.avif',
      ],
      description: 'Spacious suite with modern amenities and city views',
      size: '400 sq ft',
      bed: 'Queen Size',
      view: 'City View',
      amenities: ['AC', 'Wi-Fi', 'Dedicated Workspace', '4K Smart TV'],
      price: 'INR 2500/night',
      location: 'Abhyuday Nilaya, 1st Floor',
    },
    {
      name: 'Deluxe Suite Abhyuday Nilaya 201',
      images: [
        'https://ucarecdn.com/70e2666b-108d-413b-9c48-a1a514ac35df/201livingroom.jpg',
        'https://ucarecdn.com/c3b95f4d-7c7c-4229-8c93-bdcff7b50572/201livingroom1.jpg',
        'https://ucarecdn.com/107f9827-4eb0-464e-8975-7be8a06d8b17/2012ndbedroom.jpg',
        'https://ucarecdn.com/1ce4d260-071c-4bbc-bf35-137d7b1fcc00/2011stbedroom.jpg',
      ],
      description: 'Perfect for families, featuring two bedrooms and a living area',
      size: '600 sq ft',
      bed: 'Queen',
      view: 'Garden View',
      amenities: ['AC', 'Wi-Fi', 'Kitchen', 'Balcony'],
      price: 'INR 2500/night',
      location: 'Abhyuday Nilaya, 2nd Floor',
    },
    {
      name: 'Deluxe Suite Abhyuday Nilaya 301',
      images: [
        'https://ucarecdn.com/8775a932-3259-474a-a501-f2859b409a65/301livingroom2.jpg',
        'https://ucarecdn.com/483cd0f6-ba0d-43f3-87f3-6d6ffb075eaf/301livingroom4.jpg',
        'https://ucarecdn.com/82ea5d25-b74c-4abd-a6d3-35e4cfecb054/301bedroom2.jpg',
        'https://ucarecdn.com/ea1e18e5-9588-43ea-9a8a-5644add2c5f3/301bedroom.jpg',
      ],
      description: 'Cozy room with direct access to our beautiful garden',
      size: '300 sq ft',
      bed: 'Queen Size',
      view: 'Garden View',
      amenities: ['AC', 'Wi-Fi', 'Garden Access', 'Workspace'],
      price: 'INR 1900/night',
      location: 'Abhyuday Nilaya, 3nd Floor',
    },
    {
      name: 'Deluxe Suite Abhyuday Nilaya G1',
      images: [
        'https://ucarecdn.com/ea7dc1ed-f824-4d5b-8486-03f49e05db41/G1livingroom3.jpg',
        'https://ucarecdn.com/31a834b6-0913-4230-8a3a-6ddfd4501ac6/G1livingroom.jpg',
        'https://ucarecdn.com/d7fbff9e-682d-4bf8-85df-de18f93946c3/G11stbedroom.jpg',
        'https://ucarecdn.com/084652b5-3813-4a31-9be6-6e80606948be/G12ndbedroom.jpg',
      ],
      description: 'Luxury suite with premium amenities and workspace',
      size: '500 sq ft',
      bed: 'Queen Size',
      view: 'City View',
      amenities: ['AC', 'Wi-Fi', 'Private Workspace', 'Kitchen'],
      price: 'INR 2300/night',
      location: 'Ground Floor',
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
                          href="tel:7022638065"
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