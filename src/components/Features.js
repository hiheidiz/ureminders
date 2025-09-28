import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '📝',
      title: 'Task Adding Interface',
      description: 'Intuitive UI for adding tasks directly in your Spectacles view. Simple gestures and voice commands make task creation effortless.',
      details: [
        'Gesture-based input',
        'Quick task templates',
        'Priority setting'
      ]
    },
    {
      icon: '🤖',
      title: 'AI & Voice Integration',
      description: 'Smart AI analyzes your conversations and context to suggest relevant tasks, plus hands-free voice commands for task creation.',
      details: [
        'AI conversation analysis',
        'Voice task creation',
        'Context-aware suggestions'
      ]
    },
    {
      icon: '📍',
      title: 'Spatial Detection',
      description: 'Location-aware reminders that appear when you\'re in the right place. See grocery lists at the store, home tasks when you arrive.',
      details: [
        'GPS and spatial tracking',
        'Context-aware filtering',
        'Proximity-based display'
      ]
    }
  ];

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
            <div key={index} className="feature-card">
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
    </section>
  );
};

export default Features;


