import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wifi, Coffee, Car, Utensils, Tv, Bath, Wind, Dumbbell, CookingPot as SwimmingPool, ParkingMeter as Parking, Lock, Phone } from 'lucide-react';

const Amenities = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const amenities = [
    { icon: <Wifi className="w-8 h-8" />, name: 'High-Speed WiFi', description: 'Stay connected with complimentary high-speed internet access' },
    { icon: <Coffee className="w-8 h-8" />, name: 'Breakfast Service', description: 'Start your day with our delicious complimentary breakfast' },
    { icon: <Car className="w-8 h-8" />, name: 'Airport Pickup', description: 'Convenient airport transfer service available on request' },
    { icon: <Utensils className="w-8 h-8" />, name: 'Room Service', description: '24/7 in-room dining service for your convenience' },
    { icon: <Tv className="w-8 h-8" />, name: 'Smart TV', description: 'Enjoy premium channels and streaming services' },
    { icon: <Bath className="w-8 h-8" />, name: 'Luxury Bathroom', description: 'Premium toiletries and modern fixtures' },
    { icon: <Wind className="w-8 h-8" />, name: 'Climate Control', description: 'Individual temperature control in each room' },
    { icon: <Dumbbell className="w-8 h-8" />, name: 'Fitness Center', description: 'Stay fit with our well-equipped gym' },
    { icon: <SwimmingPool className="w-8 h-8" />, name: 'Swimming Pool', description: 'Relax in our temperature-controlled pool' },
    { icon: <Parking className="w-8 h-8" />, name: 'Free Parking', description: 'Complimentary parking for all guests' },
    { icon: <Lock className="w-8 h-8" />, name: 'Security', description: '24/7 security and electronic access cards' },
    { icon: <Phone className="w-8 h-8" />, name: 'Concierge', description: 'Round-the-clock assistance for all your needs' }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <motion.h2 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Our Amenities
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-primary">{amenity.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{amenity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;