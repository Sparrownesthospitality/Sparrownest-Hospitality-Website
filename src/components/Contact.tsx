// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { 
//   Phone, 
//   Mail, 
//   MessageCircle, 
//   Instagram, 
//   Facebook, 
//   Twitter, 
//   Send 
// } from 'lucide-react';

// const Contact = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" ref={ref}>
//       <motion.h2 
//         className="text-4xl font-bold text-center mb-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.6 }}
//       >
//         Let's Catch Up
//       </motion.h2>

//       <motion.p
//         className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//       >
//         "Your comfort is our priority. Reach out to us for any queries, and we'll be happy to assist you in making your stay memorable."
//       </motion.p>

//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
//               <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
//               <div className="space-y-6">
//                 <a 
//                   href="tel:+1234567890" 
//                   className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
//                 >
//                   <Phone className="w-6 h-6" />
//                   <span>+1 (234) 567-890</span>
//                 </a>
//                 <a 
//                   href="mailto:info@sparrownest.com"
//                   className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
//                 >
//                   <Mail className="w-6 h-6" />
//                   <span>info@sparrownest.com</span>
//                 </a>
//                 <a 
//                   href="https://wa.me/1234567890"
//                   className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
//                 >
//                   <MessageCircle className="w-6 h-6" />
//                   <span>WhatsApp</span>
//                 </a>
//               </div>

//               <h3 className="text-2xl font-semibold mt-12 mb-6">Follow Us</h3>
//               <div className="flex gap-4">
//                 <a 
//                   href="#"
//                   className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
//                 >
//                   <Instagram className="w-6 h-6" />
//                 </a>
//                 <a 
//                   href="#"
//                   className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
//                 >
//                   <Facebook className="w-6 h-6" />
//                 </a>
//                 <a 
//                   href="#"
//                   className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
//                 >
//                   <Twitter className="w-6 h-6" />
//                 </a>
//               </div>

//               <h3 className="text-2xl font-semibold mt-12 mb-6">We are Present</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-6">
//                 Find us on leading travel marketplaces where you can book your stay with confidence and explore our property details.
//                 Each platform offers unique benefits and verified reviews from our valued guests worldwide.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <a 
//                   href="#"
//                   className="px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
//                 >
//                   Booking.com
//                 </a>
//                 <a 
//                   href="#"
//                   className="px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
//                 >
//                   Airbnb
//                 </a>
//                 <a 
//                   href="#"
//                   className="px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
//                 >
//                   Expedia
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
//           >
//             <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
//                   required
//                 ></textarea>
//               </div>

//               <motion.button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Send className="w-5 h-5" />
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  Send 
} from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "81602c5f-d08d-44a6-a31c-b3bb655becda", // Replace with your Web3Forms access key
          // access_key: "ae7f29eb-13f1-4b55-b3de-ca3493e87631", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully!", result);
        alert("Message sent successfully!"); // Show success message
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        console.error("Form submission failed:", result);
        alert("Failed to send message. Please try again."); // Show error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again."); // Show error message
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <motion.h2 
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Let's Catch Up
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        "Your comfort is our priority. Reach out to us for any queries, and we'll be happy to assist you in making your stay memorable."
      </motion.p>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
              <div className="space-y-6">
                <a 
                  href="tel:+91 7022638065" 
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>+91 7022638065</span>
                </a>
                <a 
                  href="mailto:contact@sparrownesthospitality.in"
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                  <span>contact@sparrownesthospitality.in</span>
                </a>
                <a 
                  href="https://wa.me/1234567890"
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <h3 className="text-2xl font-semibold mt-12 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>

              <h3 className="text-2xl font-semibold mt-12 mb-6">We are Present</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Find us on leading travel marketplaces where you can book your stay with confidence and explore our property details.
                Each platform offers unique benefits and verified reviews from our valued guests worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#"
                  className="px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Booking.com
                </a>
                <a 
                  href="#"
                  className="px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Airbnb
                </a>
                <a 
                  href="#"
                  className="px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Expedia
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;