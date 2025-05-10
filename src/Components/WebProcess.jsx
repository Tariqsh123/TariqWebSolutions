import React from 'react';

function WebProcess() {
  return (
    <div className="Web-process-container">
      <h2 className="Web-section-title">Our Web Development Process</h2>
      
      <div className="Web-steps">
        <div className="Web-step">
          <div className="Web-step-number">1</div>
          <h3>Planning & Design</h3>
          <p>Defining goals, wireframes, and designing UI/UX.</p>
        </div>
        <div className="Web-step Web-step-middle">
          <div className="Web-step-number">2</div>
          <h3>Development</h3>
          <p>Writing HTML, CSS, JavaScript, and making it interactive.</p>
        </div>
        <div className="Web-step">
          <div className="Web-step-number">3</div>
          <h3>Testing & Deployment</h3>
          <p>Testing across devices, browsers, and deploying the site.</p>
        </div>
      </div>
    </div>
  );
}

export default WebProcess;
