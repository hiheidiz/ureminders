import React, { useState, useEffect } from 'react';
import './HowWeBuiltIt.css';

const HowWeBuiltIt = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: '💡',
      title: 'Brainstorming',
      description: 'Used the prompt given by snap ar; Identified the problem of managing location-based tasks and sketched out ideas for AI-powered suggestions and voice recognition.',
      image: 'https://via.placeholder.com/400x300/6478f5/ffffff?text=Brainstorming+Photos'
    },
    {
      icon: '🛠️',
      title: 'Prototyping',
      description: 'Designed quick wireframes in Figma, used resources given by snap ar like videos and sample projects to start working.',
      image: `${process.env.PUBLIC_URL}/pro.png`
    },
    {
      icon: '⚙️',
      title: 'Development',
      description: 'Built the Spectacles lens in Lens Studio, integrated AI task suggestion + voice commands, and added spatial detection.',
      image: 'https://via.placeholder.com/400x300/6478f5/ffffff?text=Development+Photos'
    },
    {
      icon: '🚀',
      title: 'Demo & Deployment',
      description: 'Packaged into a working lens + website for showcase and live demo.',
      image: 'https://via.placeholder.com/400x300/6478f5/ffffff?text=Demo+Photos'
    }
  ];

  // Removed auto-scroll functionality

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  return (
    <section className="how-we-built-it">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">how we built it</h2>
          <p className="section-description">
            Building ureminders was a sprint from idea to working prototype
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="carousel-slide">
                  <div className="step-card">
                    <div className="step-image">
                      <img src={step.image} alt={`${step.title} process`} />
                    </div>
                    <div className="step-content">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={prevStep}>
              ‹
            </button>
            <button className="carousel-btn next" onClick={nextStep}>
              ›
            </button>
          </div>

          <div className="carousel-indicators">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentStep ? 'active' : ''}`}
                onClick={() => goToStep(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeBuiltIt;
