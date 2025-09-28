import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Open Snapchat',
      description: 'Launch the ureminders lens in your Snapchat app. No additional downloads required.',
      icon: '📱'
    },
    {
      number: '02',
      title: 'Enable Location',
      description: 'Allow location access so ureminders can show you relevant tasks based on where you are.',
      icon: '📍'
    },
    {
      number: '03',
      title: 'Start Chatting',
      description: 'Have conversations as usual. Our AI analyzes your chats to understand what tasks you might need.',
      icon: '💬'
    },
    {
      number: '04',
      title: 'Get Smart Reminders',
      description: 'Receive intelligent task suggestions that adapt to your location and conversation context.',
      icon: '✨'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">How it works</h2>
          <p className="section-description">
            Get started with ureminders in just a few simple steps
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">
                <span className="number">{step.number}</span>
              </div>
              <div className="step-content">
                <div className="step-icon">
                  <span className="icon">{step.icon}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="demo-section">
          <div className="demo-content">
            <div className="demo-text">
              <h3>See it in action</h3>
              <p>
                Watch how ureminders intelligently adapts to your location and conversations 
                to provide the most relevant task reminders at the perfect moment.
              </p>
              <div className="demo-features">
                <div className="demo-feature">
                  <span className="demo-icon">🎯</span>
                  <span>Context-aware suggestions</span>
                </div>
                <div className="demo-feature">
                  <span className="demo-icon">⚡</span>
                  <span>Real-time updates</span>
                </div>
                <div className="demo-feature">
                  <span className="demo-icon">🔒</span>
                  <span>Privacy-first approach</span>
                </div>
              </div>
            </div>
            <div className="demo-visual">
              <div className="demo-phone">
                <div className="demo-screen">
                  <div className="demo-header">
                    <div className="demo-title">ureminders</div>
                    <div className="demo-status">Active</div>
                  </div>
                  <div className="demo-tasks">
                    <div className="demo-task active">
                      <div className="task-indicator"></div>
                      <div className="task-text">
                        <div className="task-name">Buy coffee beans</div>
                        <div className="task-context">Near Blue Bottle Coffee</div>
                      </div>
                    </div>
                    <div className="demo-task">
                      <div className="task-indicator"></div>
                      <div className="task-text">
                        <div className="task-name">Call dentist</div>
                        <div className="task-context">From yesterday's chat</div>
                      </div>
                    </div>
                    <div className="demo-task">
                      <div className="task-indicator"></div>
                      <div className="task-text">
                        <div className="task-name">Pick up dry cleaning</div>
                        <div className="task-context">Near home</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


