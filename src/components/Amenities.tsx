import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wifi, Car, Utensils, Tv, Bath, AirVent , BedDouble , CookingPot as SwimmingPool, ParkingMeter as Parking, Lock, Phone } from 'lucide-react';
import { BsPersonWorkspace} from "react-icons/bs";
import { FaKitchenSet } from "react-icons/fa6";
const Amenities = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const amenities = [
    { icon: <Wifi className="w-8 h-8" />, name: 'High-Speed WiFi', description: 'Stay connected with complimentary high-speed internet access' },
    { icon: <BsPersonWorkspace className="w-8 h-8" />, name: 'Dedicated Workspace', description: 'It is a set place for work or study, helping you stay focused and organized.' },
    { icon: <Car className="w-8 h-8" />, name: 'Airport Pickup', description: 'Convenient airport transfer service available on request' },
    { icon: <Utensils className="w-8 h-8" />, name: 'Room Service', description: '24/7 in-room dining service for your convenience' },
    { icon: <Tv className="w-8 h-8" />, name: 'Smart TV', description: 'Enjoy premium channels and streaming services' },
    { icon: <Bath className="w-8 h-8" />, name: 'Bathroom', description: 'Premium toiletries and modern fixtures' },
    { icon: <AirVent  className="w-8 h-8" />, name: 'Air Conditioning', description: 'Individual temperature control in each room' },
    { icon: <BedDouble className="w-8 h-8" />, name: 'Private Living Room', description: 'A cozy and intimate space designed for relaxation and comfort.' },
    { icon: <FaKitchenSet className="w-8 h-8" />, name: 'All Kitchen Utensils', description: 'Knives, spatulas, tongs, pots, pans, bowls.' },
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