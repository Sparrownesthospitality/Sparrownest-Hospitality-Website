import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Car, Train, Plane } from 'lucide-react';

const Location = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transportInfo = [
    {
      icon: <Car className="w-6 h-6" />,
      title: 'By Car',
      description: '15 minutes from city center, free parking available'
    },
    {
      icon: <Train className="w-6 h-6" />,
      title: 'By Train',
      description: '10 minutes from Central Station'
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'By Air',
      description: '30 minutes from International Airport'
    }
  ];

  const nearbyAttractions = [
    'City Center (2 km)',
    'Shopping Mall (1 km)',
    'Historic District (3 km)',
    'Beach (5 km)',
    'Convention Center (2.5 km)',
    'Restaurant Row (1.5 km)'
  ];

  return (
    <section className="py-20 px-4" ref={ref}>
      <motion.h2 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Location
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.99397729567!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Our Address
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                123 Sparrow Street, Garden District<br />
                Bangalore, Karnataka 560001<br />
                India
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Getting Here</h3>
              <div className="space-y-4">
                {transportInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Nearby Attractions</h3>
              <div className="grid grid-cols-2 gap-4">
                {nearbyAttractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">{attraction}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;