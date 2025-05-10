import React, { useState } from 'react';
import FooterLogo from '../assets/Logo White.png'


function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Logo and About */}
        <div className="footer-left">
          <img src={FooterLogo} alt="Tariq Web Solutions Logo" className="footer-logo" />
          <p className="footer-about">
            We provides modern, responsive, and feature-rich website development
            services — from business sites to custom React and WordPress solutions.
          </p>
        </div>

        {/* Legal Links */}
        <div className="footer-right">
          <h4>Legal</h4>
          <button onClick={() => setShowTerms(true)}>Terms & Conditions</button>
          <button onClick={() => setShowPrivacy(true)}>Privacy Policy</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Tariq Web Solutions. All rights reserved.</p>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Terms & Conditions</h3>
            <p>
              By using our services, you agree to our terms. All projects are subject to review,
              timelines, and mutual agreement. We reserve the right to decline unethical or unlawful
              requests.
            </p>
            <button onClick={() => setShowTerms(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="modal-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Privacy Policy</h3>
            <p>
              We respect your privacy. All data collected through contact forms is kept confidential
              and used solely for communication. We never share or sell your information.
            </p>
            <button onClick={() => setShowPrivacy(false)}>Close</button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
