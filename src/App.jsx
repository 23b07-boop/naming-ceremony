import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import OpeningCurtain    from './components/OpeningCurtain';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import Countdown      from './components/Countdown';
import WarmInvite     from './components/WarmInvite';
import Venue          from './components/Venue';
import WishesCarousel from './components/WishesCarousel';
import SendWishes     from './components/SendWishes';
import Schedule       from './components/Schedule';
import VideoSection   from './components/VideoSection';
import ThankYouSection from './components/ThankYouSection';
import GallerySection from './components/GallerySection';

import Footer             from './components/Footer';
import MusicPlayer        from './components/MusicPlayer';
import PetalsAndSparkles from './components/PetalsAndSparkles';
import './App.css';

const Home = () => (
  <div className="page-section-container">
    <div className="invitation-open-section open-hero"><Hero /></div>
    <div className="invitation-open-section open-countdown"><Countdown /></div>
    <div className="invitation-open-section open-invite"><WarmInvite /></div>
    <div className="invitation-open-section open-venue"><Venue /></div>
    <div className="invitation-open-section open-wishes"><WishesCarousel /></div>
    <div className="invitation-open-section open-send"><SendWishes /></div>
    <div className="invitation-open-section open-schedule"><Schedule /></div>
    <div className="invitation-open-section open-video"><VideoSection /></div>
    <div className="invitation-open-section open-thankyou"><ThankYouSection /></div>
  </div>
);

const GalleryPage = () => (
  <div className="page-section-container invitation-open-section is-opened">
    <GallerySection />
  </div>
);

function App() {
  const location = useLocation();
  const isGallery = location.pathname === '/gallery';

  useEffect(() => {
    // Disable browser automatic scroll restoration and reset to top
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // 1. Scroll-triggered Invitation Section Open & Reveal Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-opened');
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // animate once when scrolled into view
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -70px 0px'
      }
    );

    const animatedElements = document.querySelectorAll(
      '.invitation-open-section, .reveal'
    );
    animatedElements.forEach((el) => observer.observe(el));

    // 2. Parallax Scrolling Listener
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.1');
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax, { passive: true });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleParallax);
    };
  }, [location]);

  return (
    <>
      <OpeningCurtain />
      <div className={`app-bg-theme ${isGallery ? 'app-bg-theme--gallery' : ''}`} aria-hidden="true" />
      <PetalsAndSparkles />
      <Navbar />
      <main className="main-page-transition" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}

export default App;
