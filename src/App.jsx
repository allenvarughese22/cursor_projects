import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './design-system.css'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import WhatIDo from './WhatIDo';
import React from 'react'

// Lazy load components below the fold
const Skills = lazy(() => import('./Skills'));
const Experience = lazy(() => import('./Experience'));
const Education = lazy(() => import('./Education'));
const Contact = lazy(() => import('./Contact'));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px',
    color: '#e0e0e0',
    fontSize: '1.2rem'
  }}>
    Loading...
  </div>
);

function HomeSections() {
  const location = useLocation();
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      let attempts = 0;
      const maxAttempts = 10;
      const scrollToSection = () => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(scrollToSection, 100);
        }
      };
      scrollToSection();
    }
  }, [location]);
  return (
    <>
      <Hero />
      <WhatIDo />
      <About />
      {/* Removed Skills from homepage */}
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSections />} />
        <Route path="/education" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Education />
          </Suspense>
        } />
        <Route path="/skills" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Skills />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
