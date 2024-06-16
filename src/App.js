import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import CallToAction from './components/CallToAction';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Highlights />
      <CallToAction />
      <ContactUs/>
    </div>
  );
}

export default App;

