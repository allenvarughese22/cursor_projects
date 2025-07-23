import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './design-system.css'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import WhatIDo from './WhatIDo';

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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <WhatIDo />
      <About />
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Education />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </>
  )
}

export default App
