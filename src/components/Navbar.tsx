// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Home, Info, Hotel, Image, Coffee, MapPin, MessageSquare, Bird } from 'lucide-react';

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [activeItem, setActiveItem] = useState('home');

//   const navItems = [
//     { id: 'home', label: 'Home', icon: <Home /> },
//     { id: 'about', label: 'About Us', icon: <Info /> },
//     { id: 'rooms', label: 'Rooms & Suites', icon: <Hotel /> },
//     { id: 'gallery', label: 'Gallery', icon: <Image /> },
//     { id: 'amenities', label: 'Amenities', icon: <Coffee /> },
//     { id: 'location', label: 'Location', icon: <MapPin /> },
//     { id: 'contact', label: 'Let\'s Catch Up', icon: <MessageSquare /> },
//   ];

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.documentElement.classList.toggle('dark');
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Bird className="w-8 h-8 text-primary" />
//             <span className="text-xl font-bold">Sparrow Nest</span>
//           </div>

//           {/* Navigation Items */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {navItems.map((item) => (
//               <motion.button
//                 key={item.id}
//                 className={`nav-link ${activeItem === item.id ? 'active' : ''}`}
//                 onClick={() => setActiveItem(item.id)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item.icon}
//                 <span>{item.label}</span>
//               </motion.button>
//             ))}
//           </div>

//           {/* Theme Toggle */}
//           <motion.button
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
//             onClick={toggleTheme}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//           </motion.button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Home, Info, Hotel, Image, Coffee, MapPin, MessageSquare, Bird } from 'lucide-react';

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [activeItem, setActiveItem] = useState('home');

//   useEffect(() => {
//     // Load theme preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const navItems = [
//     { id: 'home', label: '', icon: <Home className="w-5 h-5" /> },
//     { id: 'about', label: '', icon: <Info className="w-5 h-5" /> },
//     { id: 'rooms', label: '', icon: <Hotel className="w-5 h-5" /> },
//     { id: 'gallery', label: '', icon: <Image className="w-5 h-5" /> },
//     { id: 'amenities', label: '', icon: <Coffee className="w-5 h-5" /> },
//     { id: 'location', label: '', icon: <MapPin className="w-5 h-5" /> },
//     { id: 'contact', label: '', icon: <MessageSquare className="w-5 h-5" /> },
//   ];
//   // const navItems = [
//   //   { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
//   //   { id: 'about', label: 'About Us', icon: <Info className="w-5 h-5" /> },
//   //   { id: 'rooms', label: 'Rooms & Suites', icon: <Hotel className="w-5 h-5" /> },
//   //   { id: 'gallery', label: 'Gallery', icon: <Image className="w-5 h-5" /> },
//   //   { id: 'amenities', label: 'Amenities', icon: <Coffee className="w-5 h-5" /> },
//   //   { id: 'location', label: 'Location', icon: <MapPin className="w-5 h-5" /> },
//   //   { id: 'contact', label: "Let's Catch Up", icon: <MessageSquare className="w-5 h-5" /> },
//   // ];

//   const toggleTheme = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);
//     if (newTheme) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Bird className="w-8 h-8 text-primary" />
//             <span className="text-xl font-bold text-gray-900 dark:text-white">Sparrow Nest</span>
//           </div>

//           {/* Navigation Items */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <motion.button
//                 key={item.id}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 
//                   hover:bg-gray-200 dark:hover:bg-gray-800 transition 
//                   ${activeItem === item.id ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
//                 onClick={() => setActiveItem(item.id)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item.icon}
//                 <span>{item.label}</span>
//               </motion.button>
//             ))}
//           </div>

//           {/* Theme Toggle */}
//           <motion.button
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
//             onClick={toggleTheme}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {isDark ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-blue-500" />}
//           </motion.button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Home, Info, Hotel, Image, Coffee, MapPin, MessageSquare, Bird } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const navItems = [
    { id: 'home', label: '', icon: <Home className="w-5 h-5" />, section: 'hero' },
    { id: 'about', label: '', icon: <Info className="w-5 h-5" />, section: 'about' },
    { id: 'rooms', label: '', icon: <Hotel className="w-5 h-5" />, section: 'rooms' },
    { id: 'gallery', label: '', icon: <Image className="w-5 h-5" />, section: 'gallery' },
    { id: 'amenities', label: '', icon: <Coffee className="w-5 h-5" />, section: 'amenities' },
    { id: 'location', label: '', icon: <MapPin className="w-5 h-5" />, section: 'location' },
    { id: 'contact', label: "", icon: <MessageSquare className="w-5 h-5" />, section: 'contact' },
  ];
  // const navItems = [
  //   { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" />, section: 'hero' },
  //   { id: 'about', label: 'About Us', icon: <Info className="w-5 h-5" />, section: 'about' },
  //   { id: 'rooms', label: 'Rooms & Suites', icon: <Hotel className="w-5 h-5" />, section: 'rooms' },
  //   { id: 'gallery', label: 'Gallery', icon: <Image className="w-5 h-5" />, section: 'gallery' },
  //   { id: 'amenities', label: 'Amenities', icon: <Coffee className="w-5 h-5" />, section: 'amenities' },
  //   { id: 'location', label: 'Location', icon: <MapPin className="w-5 h-5" />, section: 'location' },
  //   { id: 'contact', label: "Let's Catch Up", icon: <MessageSquare className="w-5 h-5" />, section: 'contact' },
  // ];

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveItem(navItems.find(item => item.section === sectionId)?.id || '');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            {/* <Bird className="w-8 h-8 text-primary" /> */}
            <img src="https://ucarecdn.com/85725fea-b12a-4f2a-bd14-dea61c3a06ff/logowithoutbg.png" alt="Sparrow Nest" className="w-20 h-25" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Sparrow Nest</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 
                  hover:bg-gray-200 dark:hover:bg-gray-800 transition 
                  ${activeItem === item.id ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
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
            {isDark ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-blue-500" />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;