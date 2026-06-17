import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Preloader from './components/Preloader';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import JoinTeam from './components/JoinTeam';
import PressEvents from './components/PressEvents';
import BlogSection from './components/BlogSection';
import TrainingSection from './components/TrainingSection';
import LocationsSection from './components/LocationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

interface AccentColor {
  id: string;
  name: string;
  hex: string;
  dim: string;
  border: string;
  glow: string;
}

export const ACCENT_COLORS: AccentColor[] = [
  {
    id: 'volt',
    name: 'Volt Neon',
    hex: '#8CEE2E',
    dim: 'rgba(140, 238, 46, 0.1)',
    border: 'rgba(140, 238, 46, 0.22)',
    glow: 'rgba(140, 238, 46, 0.45)',
  },
  {
    id: 'cyan',
    name: 'Proton Cyan',
    hex: '#00E5FF',
    dim: 'rgba(0, 229, 255, 0.1)',
    border: 'rgba(0, 229, 255, 0.22)',
    glow: 'rgba(0, 229, 255, 0.45)',
  },
  {
    id: 'orange',
    name: 'Magma Orange',
    hex: '#FF5722',
    dim: 'rgba(255, 87, 34, 0.1)',
    border: 'rgba(255, 87, 34, 0.22)',
    glow: 'rgba(255, 87, 34, 0.45)',
  },
  {
    id: 'violet',
    name: 'Pulsar Violet',
    hex: '#D946EF',
    dim: 'rgba(217, 70, 239, 0.15)',
    border: 'rgba(217, 70, 239, 0.25)',
    glow: 'rgba(217, 70, 239, 0.45)',
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [serviceFocus, setServiceFocus] = useState('');
  
  // Dynamic accent color switcher state
  const [activeAccent, setActiveAccent] = useState(() => {
    return localStorage.getItem('eg-accent-id') || 'volt';
  });

  const locations = [
    { id: 'orlando', name: 'Orlando, FL Center' },
    { id: 'amesbury', name: 'Amesbury, MA Center' }
  ];

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    if (pageId === 'contact') {
      setServiceFocus('');
    }
  };

  const handleSelectService = (serviceName: string) => {
    setServiceFocus(serviceName);
    setCurrentPage('contact');
  };

  // Ensure every page transition automatically scrolls smoothly back to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Handle active accent color theme adjustments & favicon updates
  useEffect(() => {
    const selected = ACCENT_COLORS.find(c => c.id === activeAccent) || ACCENT_COLORS[0];
    localStorage.setItem('eg-accent-id', selected.id);

    // Apply the design scheme properties directly to root
    document.documentElement.style.setProperty('--accent-color', selected.hex);
    document.documentElement.style.setProperty('--accent-color-dim', selected.dim);
    document.documentElement.style.setProperty('--accent-color-border', selected.border);
    document.documentElement.style.setProperty('--accent-color-glow', selected.glow);

    // Inject matching dynamic vector favicon representation
    const svgStr = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${encodeURIComponent(selected.hex)}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    `;
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('href', `data:image/svg+xml;utf8,${svgStr.trim()}`);
  }, [activeAccent]);

  // Set highly professional, specific tab title descriptions on page mutations
  useEffect(() => {
    let title = "Electrified Garage | High-Performance EV Care";
    if (currentPage === 'home') {
      title = "Electrified Garage | High-Performance EV Care";
    } else if (currentPage === 'about') {
      title = "About Us | Electrified Garage";
    } else if (currentPage === 'services') {
      title = "Elite EV & Hybrid Services | Electrified Garage";
    } else if (currentPage === 'team') {
      title = "Our Elite Technical Crew | Electrified Garage";
    } else if (currentPage === 'join-team') {
      title = "Join Our High-Voltage Tech Crew | Electrified Garage";
    } else if (currentPage === 'press') {
      title = "Media Highlights & Press | Electrified Garage";
    } else if (currentPage === 'blog') {
      title = "V-Log & Technical Articles | Electrified Garage";
    } else if (currentPage === 'training') {
      title = "EV Tech Academy Training | Electrified Garage";
    } else if (currentPage.startsWith('location-')) {
      const place = currentPage.split('location-')[1];
      const placeTitle = place.charAt(0).toUpperCase() + place.slice(1);
      title = `${placeTitle} Center | Electrified Garage`;
    } else if (currentPage === 'contact') {
      title = "Book an Appointment | Electrified Garage";
    }
    document.title = title;
  }, [currentPage]);

  // Synchronize browser URL hash for friendly bookmark flows
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Handle special location matching
        if (hash === 'orlando' || hash === 'amesbury') {
          setCurrentPage(`location-${hash}`);
        } else {
          setCurrentPage(hash);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once at initial load
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Sync active page state back to window hash
    if (!loading) {
      if (currentPage.startsWith('location-')) {
        const place = currentPage.split('location-')[1];
        window.location.hash = place;
      } else {
        window.location.hash = currentPage;
      }
    }
  }, [currentPage, loading]);

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-0"
          >
            <Hero
              onLearnMore={() => handlePageChange('services')}
              onBookAppointment={() => handlePageChange('contact')}
            />
            <AboutSection onLearnMoreServices={() => handlePageChange('services')} />
            <ServicesSection onSelectService={handleSelectService} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about-layout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <AboutSection onLearnMoreServices={() => handlePageChange('services')} />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services-layout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ServicesSection onSelectService={handleSelectService} />
          </motion.div>
        );
      case 'team':
        return (
          <motion.div
            key="team-layout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <TeamSection />
          </motion.div>
        );
      case 'join-team':
        return (
          <motion.div
            key="join-team-layout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <JoinTeam />
          </motion.div>
        );
      case 'press':
        return (
          <motion.div
            key="press-layout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <PressEvents />
          </motion.div>
        );
      case 'blog':
        return (
          <motion.div
            key="blog-layout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <BlogSection />
          </motion.div>
        );
      case 'training':
        return (
          <motion.div
            key="training-layout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <TrainingSection />
          </motion.div>
        );
      case 'location-orlando':
      case 'location-amesbury':
        return (
          <motion.div
            key="locations-layout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <LocationsSection />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact-layout"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ContactSection initialServiceFocus={serviceFocus} />
          </motion.div>
        );
      default:
        // Fallback to Home
        return (
          <motion.div
            key="home-fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-0"
          >
            <Hero
              onLearnMore={() => handlePageChange('services')}
              onBookAppointment={() => handlePageChange('contact')}
            />
            <AboutSection onLearnMoreServices={() => handlePageChange('services')} />
            <ServicesSection onSelectService={handleSelectService} />
          </motion.div>
        );
    }
  };

  return (
    <>
      {/* Precision Dynamic Animated Follower Cursor */}
      <CustomCursor />

      {/* Dynamic cinematic load screen */}
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative min-h-screen bg-black text-white selection:bg-accent selection:text-zinc-950 overflow-x-hidden flex flex-col justify-between">
          
          {/* Hardware-accelerated interactive canvas grids and glowing spots */}
          <BackgroundEffects />

          {/* Sticky top glassmorphism navigation list */}
          <Navbar
            currentPage={currentPage}
            onPageChange={handlePageChange}
            locations={locations}
            activeAccent={activeAccent}
            onAccentChange={setActiveAccent}
          />

          {/* Main Content Area with Framer Motion Transition States */}
          <main className="flex-1 w-full pt-20 relative z-10">
            <AnimatePresence mode="wait">
              {renderActiveView()}
            </AnimatePresence>
          </main>

          {/* Modern cinematic dark footer */}
          <Footer
            onPageChange={handlePageChange}
            locations={locations}
          />
        </div>
      )}
    </>
  );
}
