import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Home, Info, Hotel, Image, Coffee, MapPin, MessageSquare, Bird } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home />, section: 'hero' },
    { id: 'about', label: 'About Us', icon: <Info />, section: 'about' },
    { id: 'rooms', label: 'Rooms & Suites', icon: <Hotel />, section: 'rooms' },
    { id: 'gallery', label: 'Gallery', icon: <Image />, section: 'gallery' },
    { id: 'amenities', label: 'Amenities', icon: <Coffee />, section: 'amenities' },
    { id: 'location', label: 'Location', icon: <MapPin />, section: 'location' },
    { id: 'contact', label: 'Let\'s Catch Up', icon: <MessageSquare />, section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.section));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveItem(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveItem(navItems.find(item => item.section === sectionId)?.id || '');
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Bird className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Sparrow Nest</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`nav-link ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;