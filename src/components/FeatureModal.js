import React from 'react';
import './FeatureModal.css';

const FeatureModal = ({ isOpen, onClose, feature }) => {
  if (!isOpen || !feature) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="modal-header">
          <div className="modal-icon">{feature.icon}</div>
          <h2 className="modal-title">{feature.title}</h2>
        </div>
        
        <div className="modal-body">
          <div className="feature-image">
            <img src={feature.image} alt={feature.title} />
          </div>
          <p className="modal-description">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;
