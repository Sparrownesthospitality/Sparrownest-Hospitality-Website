// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Bird,
//   Phone, 
//   Mail, 
//   MapPin, 
//   Instagram, 
//   Facebook, 
//   Twitter,
//   Heart 
// } from 'lucide-react';

// const Footer = () => {
//   const quickLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'About Us', href: '#' },
//     { name: 'Rooms & Suites', href: '#' },
//     { name: 'Gallery', href: '#' },
//     { name: 'Amenities', href: '#' },
//     { name: 'Location', href: '#' },
//     { name: 'Contact', href: '#' },
//   ];

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-white pt-20 pb-6">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Brand Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-4"
//           >
//             <div className="flex items-center gap-2">
//               <Bird className="w-8 h-8 text-primary" />
//               <span className="text-xl font-bold">Sparrow Nest</span>
//             </div>
//             <p className="text-gray-400">
//               Where Comfort Meets Warmth – Your Home Away from Home
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <a 
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="space-y-4"
//           >
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <div className="space-y-4">
//               <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
//                 <Phone className="w-5 h-5" />
//                 <span>+1 (234) 567-890</span>
//               </a>
//               <a href="mailto:info@sparrownest.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
//                 <Mail className="w-5 h-5" />
//                 <span>info@sparrownest.com</span>
//               </a>
//               <div className="flex items-start gap-2 text-gray-400">
//                 <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
//                 <span>
//                   123 Sparrow Street, Garden District<br />
//                   Bangalore, Karnataka 560001<br />
//                   India
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//             <div className="flex gap-4">
//               <a 
//                 href="#"
//                 className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all duration-300"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a 
//                 href="#"
//                 className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all duration-300"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a 
//                 href="#"
//                 className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all duration-300"
//               >
//                 <Twitter className="w-5 h-5" />
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-gray-800">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-center md:text-left">
//               © {currentYear} Sparrow Nest Hospitality. All rights reserved.
//             </p>
//             <p className="text-gray-400 flex items-center gap-1">
//               Made with <Heart className="w-4 h-4 text-red-500" /> by{' '}
//               <a 
//                 href="https://www.chandramohan.site/"
//                 className="text-primary hover:text-white transition-colors duration-300"
//               >
//                 @Chm.
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bird,
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Heart 
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', section: 'hero' },
    { name: 'About Us', section: 'about' },
    { name: 'Rooms & Suites', section: 'rooms' },
    { name: 'Gallery', section: 'gallery' },
    { name: 'Amenities', section: 'amenities' },
    { name: 'Location', section: 'location' },
    { name: 'Contact', section: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* <img src="https://ucarecdn.com/85725fea-b12a-4f2a-bd14-dea61c3a06ff/logowithoutbg.png" alt="Sparrow Nest" className="w-[120px] h-[120px]" /> */}
              <Bird className="w-8 h-8 text-primary" />
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              
              <span className="text-xl font-bold">Sparrow Nest</span>
            </div>
            <p className="text-gray-400">
              Where Comfort Meets Warmth – Your Home Away from Home
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+91 7022638065" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>+91 7022638065</span>
              </a>
              <a href="mailto:contact@sparrownesthospitality.in" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span>contact@sparrownesthospitality.in</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  Abhyuday Nilaya, 18th Main Road,<br/> 
                  Kuvempu Nagar, Stage 2 BTM Layout,
                  Bangalore, Karnataka 560001
                  India.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Sparrow Nest Hospitality. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> by{' '}
              <a 
                href="https://www.chandramohan.site/"
                className="text-primary hover:text-white transition-colors duration-300"
              >
                @ Chandra Mohan Mahto
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;