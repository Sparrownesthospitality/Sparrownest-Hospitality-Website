import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle } from 'lucide-react';

const AboutUs = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Host',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
      whatsapp: '+1234567890',
      email: 'sarah@sparrownest.com'
    },
    {
      name: 'Michael Chen',
      role: 'Property Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
      whatsapp: '+1234567891',
      email: 'michael@sparrownest.com'
    },
    {
      name: 'Emma Williams',
      role: 'Guest Relations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      whatsapp: '+1234567892',
      email: 'emma@sparrownest.com'
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section className="py-20 px-4" ref={ref}>
      <motion.h2 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="mb-20 flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="md:w-3/5"
            variants={contentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sparrow Nest Hospitality was born from a passion for creating warm, welcoming spaces where travelers can truly feel at home. Our journey began with a simple idea: to offer more than just a place to stay – to create an experience that combines the comfort of home with the luxury of a boutique hotel.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-2/5"
            variants={rightContentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" 
              alt="Our Story" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20 flex flex-col md:flex-row-reverse items-center gap-10">
          <motion.div 
            className="md:w-3/5"
            variants={rightContentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
            <p className="text-gray-600 dark:text-gray-300">
              At Sparrow Nest, we stand out through our dedication to personalized service and attention to detail. Each room is thoughtfully designed to provide maximum comfort, while our location offers the perfect balance of tranquility and accessibility to city attractions.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-2/5"
            variants={contentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800" 
              alt="Why Choose Us" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Mission Statement */}
        <div className="mb-20 flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="md:w-3/5"
            variants={contentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our mission is to provide a haven where guests can experience the perfect blend of comfort, luxury, and local charm. We strive to create memorable stays by offering personalized experiences that cater to each guest's unique needs and preferences.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-2/5"
            variants={rightContentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=800" 
              alt="Our Mission" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <motion.h3 
            className="text-3xl font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className={`team-card ${flippedCard === index ? 'flipped' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => handleCardClick(index)}
              >
                <div className="team-card-inner">
                  <div className="team-card-front bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold">{member.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                    </div>
                  </div>
                  <div className="team-card-back bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Contact {member.name}</h4>
                    <div className="space-y-4">
                      <a 
                        href={`https://wa.me/${member.whatsapp}`}
                        className="flex items-center gap-2 text-green-600 hover:text-green-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp</span>
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;