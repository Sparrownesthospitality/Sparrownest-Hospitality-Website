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
      name: 'Udayendu Panigrahi',
      role: 'Founder & Host',
      responsibilities: [
        'Guest experience management',
        'Customer service excellence'
      ],
      image: 'https://ucarecdn.com/0f413457-23f6-4732-9041-06f8438ea629/Screenshot20250217162729.png',
      whatsapp: '+919337738065',
      email: 'udayendusparrownest@gmail.com'
    },
    {
      name: 'Abhishek Singh',
      role: 'Co-Founder & Co-Host',
      responsibilities: [
        'Overall business management',
        'Strategic planning and growth',
        'Business development & partnerships',
        'Team leadership & mentoring'
      ],
      image: 'https://ucarecdn.com/34fce0ed-d6ff-4004-b171-8cbddb4914b9/IMG_20250312_014932.jpg',
      whatsapp: '+917488454015',
      email: 'patelavvi1@gmail.com'
    },
    {
      name: 'Ajit Kumar Tiwari',
      role: 'Senior Manager',
      responsibilities: [
        'Property maintenance oversight',
        'Guest comfort management',
        'Housekeeping supervision',
        'Security management'
      ],
      image: 'https://ucarecdn.com/3ae467f7-6a11-487e-9f19-3e66b37ca53a/PXL_20230916_124344389MP.jpg',
      whatsapp: '+917079173040',
      email: 'tiwaryajj@gmail.com'
    },
    {
      name: 'Raj Kishore Panda',
      role: 'Relationship Manager',
      responsibilities: [
        'Property maintenance oversight',
        'Guest comfort management',
        'Housekeeping supervision',
        'Security management'
      ],
      image: 'https://ucarecdn.com/a6329e9a-7d30-4b7e-a135-ce32a3ebc2fc/WhatsAppImage20250312at162109_847677a3.jpg',
      whatsapp: '+917077026408',
      email: 'stiffraj@gmail.com'
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
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
                    <h4 className="text-xl font-semibold mb-4 text-center">Contact {member.name}</h4>
                    <div className="mb-4">
                      {member.responsibilities.map((resp, idx) => (
                        <p key={idx} className="text-gray-600 dark:text-gray-300 text-center">{resp}</p>
                      ))}
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-4 italic">Feel free to connect with me!</p>
                    <div className="space-y-4">
                      <a 
                        href={`https://wa.me/${member.whatsapp}`}
                        className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>{member.whatsapp}</span>
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700"
                      >
                        <Mail className="w-5 h-5" />
                        <span>{member.email}</span>
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