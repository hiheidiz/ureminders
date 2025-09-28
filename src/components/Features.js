import React, { useState } from 'react';
import FeatureModal from './FeatureModal';
import './Features.css';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: '📝',
      title: 'Task Adding Interface',
      description: 'Intuitive UI for adding tasks directly in your Spectacles view. Simple gestures and voice commands make task creation effortless.',
      details: [
        'Gesture-based input',
        'Quick task templates',
        'Priority setting'
      ],
      image: 'https://via.placeholder.com/600x400/6478f5/ffffff?text=Task+Adding+Interface+Demo'
    },
    {
      icon: '🤖',
      title: 'AI & Voice Integration',
      description: 'Smart AI analyzes your conversations and context to suggest relevant tasks, plus hands-free voice commands for task creation.',
      details: [
        'AI conversation analysis',
        'Voice task creation',
        'Context-aware suggestions'
      ],
      image: 'https://via.placeholder.com/600x400/6478f5/ffffff?text=AI+Voice+Integration+Demo'
    },
    {
      icon: '📍',
      title: 'Spatial Detection',
      description: 'Location-aware reminders that appear when you\'re in the right place. See grocery lists at the store, home tasks when you arrive.',
      details: [
        'GPS and spatial tracking',
        'Context-aware filtering',
        'Proximity-based display'
      ],
      image: 'https://via.placeholder.com/600x400/6478f5/ffffff?text=Spatial+Detection+Demo'
    }
  ];

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Key Features</h2>
          <p className="section-description">
            Built for Snapchat Spectacles with Lens Studio - the future of hands-free productivity
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card clickable"
              onClick={() => handleFeatureClick(feature)}
            >
              <div className="feature-icon">
                <span className="icon">{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="feature-detail">
                      <span className="detail-bullet">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="feature-cta">
                  <span className="click-hint">Click to see demo →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta text-center">
          <h3>Built for Hackathon Demo</h3>
          <p>Experience the future of AR task management with Snapchat Spectacles and Lens Studio.</p>
          <a href="#demo" className="btn btn-primary">
            Watch Demo Video
          </a>
        </div>
      </div>
      
      <FeatureModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        feature={selectedFeature}
      />
    </section>
  );
};

export default Features;


