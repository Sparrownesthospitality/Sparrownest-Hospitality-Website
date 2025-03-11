// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import AboutUs from './components/AboutUs';
// import RoomsAndSuites from './components/RoomsAndSuites';
// import Gallery from './components/Gallery';
// import Amenities from './components/Amenities';
// import Location from './components/Location';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <Hero />
//       <AboutUs />
//       <RoomsAndSuites />
//       <Gallery />
//       <Amenities />
//       <Location />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import RoomsAndSuites from './components/RoomsAndSuites';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="rooms">
          <RoomsAndSuites />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="amenities">
          <Amenities />
        </section>
        <section id="location">
          <Location />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;