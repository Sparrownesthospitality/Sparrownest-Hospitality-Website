// import React from 'react';
// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Hero = () => {
//   const slides = [
//     {
//       image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
//       alt: "Cozy bedroom"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000",
//       alt: "Luxurious bathroom"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=2000",
//       alt: "Beautiful dining area"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2000",
//       alt: "Garden view"
//     }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true,
//   };

//   return (
//     <div className="relative h-screen">
//       <Slider {...settings} className="h-full">
//         {slides.map((slide, index) => (
//           <div key={index} className="relative h-screen">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ 
//                 backgroundImage: `url(${slide.image})`,
//                 height: '100vh'
//               }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                 <div className="text-center text-white px-4">
//                   <motion.h1
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="text-4xl md:text-6xl font-bold mb-4"
//                   >
//                     Sparrow Nest Hospitality
//                   </motion.h1>
//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="text-lg md:text-xl mb-8"
//                   >
//                     Where Comfort Meets Warmth – Your Home Away from Home
//                   </motion.p>
//                   <motion.button
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                     className="btn-primary"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Book Now
//                   </motion.button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
      alt: "Cozy bedroom"
    },
    {
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000",
      alt: "Luxurious bathroom"
    },
    {
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=2000",
      alt: "Beautiful dining area"
    },
    {
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2000",
      alt: "Garden view"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <div className="relative h-screen">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                height: '100vh'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    Sparrow Nest Hospitality
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl mb-8"
                  >
                    Where Comfort Meets Warmth – Your Home Away from Home
                  </motion.p>

                  {/* Buttons Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <a 
                      href="https://cleartax.in/save/rent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
                    >
                      Check Availability
                    </a>
                    <a 
                      href="https://www.airbnb.co.in/host/homes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-8 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
                    >
                      Explore Rooms
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
