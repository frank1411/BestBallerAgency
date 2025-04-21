import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import RepresentedPlayers from './sections/RepresentedPlayers';
import Services from './sections/Services';
import Scouting from './sections/Scouting';
import SuccessStories from './sections/SuccessStories';
import Contact from './sections/Contact';
import InternationalOpportunities from './sections/InternationalOpportunities';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <AboutUs />
      <RepresentedPlayers />
      <Services />
      <InternationalOpportunities />
      <Scouting />
      <SuccessStories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;