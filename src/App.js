import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Motivation from './components/Motivation';
import Features from './components/Features';
import HowWeBuiltIt from './components/HowWeBuiltIt';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Motivation />
      <Features />
      <HowWeBuiltIt />
      <Footer />
    </div>
  );
}

export default App;


