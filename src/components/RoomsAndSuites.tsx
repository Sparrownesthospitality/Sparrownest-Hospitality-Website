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
        'https://ucarecdn.com/f7aaba27-e352-4b76-b600-99074162a759/201livingroom.avif',
        'https://ucarecdn.com/1f834a78-98b5-4d49-897b-ac87d325ee57/201livingroom1.avif',
        'https://ucarecdn.com/160b144a-604e-4d90-ba99-7a9ed5448a8e/2012ndbedroom.avif',
        'https://ucarecdn.com/8200d386-ca9f-45e9-88cb-431c27716d60/2011stbedroom.avif',
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
        'https://ucarecdn.com/44f68893-d792-4e46-858a-906de935307f/301livingroom2.avif',
        'https://ucarecdn.com/fe8ec4dd-28ba-4c78-9c7f-5c79751ddae3/301livingroom4.avif',
        'https://ucarecdn.com/e9f15a0a-6d61-4977-ace6-f4e2821c8a05/301bedroom2.avif',
        'https://ucarecdn.com/1bdba3d9-ec36-4024-9aec-d9f5cf1084e0/301bedroom.avif',
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
        'https://ucarecdn.com/67bcd22c-0dba-4bd9-b5f7-6d62f459e25b/G1livingroom3.avif',
        'https://ucarecdn.com/e4fd0051-b44d-41aa-b17c-275e220e76b0/G1livingroom.avif',
        'https://ucarecdn.com/e647e6df-9f67-4d85-95c4-73e0c87b48ae/G11stbedroom.avif',
        'https://ucarecdn.com/33c18056-993b-42ea-9968-f65f22bb3f46/G12ndbedroom.avif',
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